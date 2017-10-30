const _ = require('lodash')
const { series, parallel } = require('ethical-composer-utility')
const { default: watcher } = require('ethical-composer-emitter-watcher')
const { default: route } = require('ethical-composer-middleware-route')
const { default: babel } = require('ethical-composer-middleware-babel')
const { default: file } = require('ethical-composer-middleware-file-system')
const { default: server } = require('ethical-composer-middleware-server-manager')

// Notifier
// const state = { io: null }
// const notify = async () => async (ctx, next, config) => {
//     const { up, down, type } = config
//     if (!state.io) {
//         state.io = await connection
//     }
//     const { io } = state
//     if (typeof up !== 'undefined') {
//         oi.emit(type, up)
//     }
//     await next()
//     if (typeof down !== 'undefined') {
//         oi.emit(type, down)
//     }
// }



// const socket = require('socket.io-client')
// const connect = async (config = {}) => {
//     const { url = 'http://localhost' } = config
//     await new Promise(resolve => {
//         const io = socket(url)
//         io.on('connect', () => {
//             console.log('Connected!')
//             resolve()
//         })
//         io.on('event', (data) => {
//             console.log('data', data)
//         })
//         io.on('disconnect', () => {
//             console.log('Disconnected!')
//         })
//     })
// }

const saveFileAndRestartServer = series(
    file({ dest: 'dist', base: 'src' }),
    // notify({ type: 'server', up: 'Going Up!', down: 'Going down!' }),
    _.debounce(server({ path: 'dist/node/server.js'}), 100)
)

const transpileBrowserJSFiles = series(
    route('src/{browser/**/*,shared/**/*}.js'),
    babel({ babel: require('./babel.json') }),
    saveFileAndRestartServer
)

const transpileNodeJSFiles = series(
    route('src/node/**/*.js'),
    babel({ babel: require('./babel.node.json') }),
    saveFileAndRestartServer
)

const log = async (ctx, next) => {
    console.log('Processed:', ctx.file.path)
}

const tasks = series(
    parallel(transpileBrowserJSFiles, transpileNodeJSFiles),
    log
)

const runWatcher = (tasks) => () => {
    watcher('src', async (file) => await tasks({ file }))
    .then(() => console.log('Watcher started!'))
    .catch(e => console.error(e))
}

// Trigger file changes to all source files
const Vinyl = require('vinyl')
const { readFileSync, lstatSync } = require('fs')
const glob = require('glob')

const runTasks = (tasks, pattern) => async () => {
    const files = glob.sync(pattern)
    const next = async (index = 0) => {
        const path = files[index]
        if (!path) {
            return
        }
        if (lstatSync(path).isDirectory()) {
            return await next(index + 1)
        }
        const contents = readFileSync(path)
        const file = new Vinyl({ path, contents })
        await tasks({ file })
        await next(index + 1)
    }
    return next()
}

// connect()
// .then(
    runTasks(tasks, 'src/**/*')()
// )
.then(runWatcher(tasks))
.then(() => console.log('Done!'))
.catch(e => console.error(e))
