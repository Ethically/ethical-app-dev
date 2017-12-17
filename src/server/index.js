import { exit } from 'ethical/helper/exit'
import startServer from 'ethical/server'
import staticFile from 'ethical/server/static'
import moduleSupplier from 'ethical/server/supplier'
import reactRedux from 'ethical/server/react-redux'
import WebSocketServer from 'uws'
import httpProxy from 'http-proxy'
import bunyan from 'bunyan'
import url from 'url'

const retry = `
    <html>
        <head>
            <title>Ethical Dev Server</title>
        </head>
        <body>
            <div>Could not restart App server.</div>
            <div>Please check the logs for errors.</div>
            <div id="status">
                Refreshing in <span id="seconds">5</span> seconds...
            </div>
            <script>
                const element = document.getElementById('seconds')
                let seconds = 5
                const interval = setInterval(() => {
                    if (seconds === 0) {
                        const status = document.getElementById('status')
                        status.textContent = 'Checking server status again...'
                        clearInterval(interval)
                        return location.reload()
                    }
                    element.textContent = --seconds
                }, 1000)
            </script>
        </body>
    </html>
`

const log = bunyan.createLogger({
    name: 'ethical-app-dev'
})

const state = {
    serving: false,
    timeoutDelays: [],
    promiseDelays: [],
    resolveDelay: () => {
        state.timeoutDelays.forEach((timeout) => {
            clearTimeout(timeout)
        })
        state.promiseDelays.forEach((resolve) => {
            resolve(resolve)
        })
        state.timeoutDelays = []
        state.promiseDelays = []
    }
}

const target = 'http://localhost:9191'
const proxy = httpProxy.createProxyServer({ target })
const handleError = (e, req, res) => {
    res.writeHead(500, {
        'Content-Type': 'text/html'
    })
    res.end(retry)
    res.reject(e)
}

proxy.on('error', handleError)

const delay = (req, res) => (milliseconds) => new Promise((resolve, reject) => {
    state.timeoutDelays.push(setTimeout(() => {
        res.reject = reject
        handleError(new Error('Server still has not started!'), req, res)
    }, milliseconds))
    state.promiseDelays.push(resolve)
})

const tryAppServer = async (req, res) => {

    if (!state.serving) {
        try {
            await delay(req, res)(5000)
        } catch (e) {
            return
        }
    }

    const resEnd = res.end

    await new Promise((resolve, reject) => {
        res.end = (...args) => {
            resEnd.call(res, ...args)
            resolve()
        }
        res.reject = reject
        proxy.web(req, res)
    })
}

const startSocket = () => (
    new Promise((resolve, reject) => {
        const io = new WebSocketServer('ws://localhost:9393')
        io.on('open', () => resolve(io))
        io.on('error', reject)
    })
)

export default (
    startSocket()
    .then((io) => {
        io.on('message', (message) => {
            if (message === 'SERVER_START') {
                state.serving = true
                state.resolveDelay()
            }
            if (message === 'SERVER_STOP') {
                state.serving = false
            }
        })
    })
    .catch(e => log.error(e))
    .then(() => (
        startServer({ port: 9292 })
        .use(async (ctx, next) => {

            const { req, res, path, querystring: query } = ctx
            const referer = ctx.get('Referer')
            const { pathname: refererPath } = url.parse(referer)

            if (path === '/&' || refererPath === '/&') {
                return await next()
            }

            try {
                await tryAppServer(req, res)
            } catch (e) {
                log.error(e)
            }
        })
        .use(staticFile())
        .use(moduleSupplier({ main: 'dist/client' }))
        .use(reactRedux({
            routes: 'dist/shared/Routes.js',
            layout: 'dist/shared/Layout.js',
            reducers: 'dist/shared/reducers'
        }))
        .listen()
    ))
    .catch(e => log.error(e))
)
