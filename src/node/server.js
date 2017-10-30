import staticFile from 'ethical-server-middleware-static'
import moduleSupplier from 'ethical-server-middleware-module-supplier'
import reactRedux from 'ethical-server-middleware-react-redux'
import startServer from 'ethical-utility-server'

const socketMiddleware = async (ctx, next) => {
    const { app: { io } } = ctx
    if (io) {
        return await next()
    }
    const server = socket(app)
    await new Promise(resolve => {
        server.on('connection', (client) => { ctx.app.io = { server, client } })
    })
}

export default (
    startServer({ port: 9191 })
    .use(staticFile())
    .use(moduleSupplier({ main: 'dist/browser/entry.js' }))
    // .use(socketMiddleware)
    .use(reactRedux({
        routes: './dist/shared/Routes.js',
        layout: './dist/shared/Layout.js',
        reducers: './dist/shared/reducers/index.js'
    }))
    .listen()
)
