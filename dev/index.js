const { series, parallel } = require('ethical/orche')
const setup = require('ethical/orche/setup')
const watcher = require('ethical/orche/watcher')
const route = require('ethical/orche/route')
const babel = require('ethical/orche/babel')
const file = require('ethical/orche/file')
const server = require('ethical/orche/server')
const bunyan = require('bunyan')

const log = bunyan.createLogger({
    name: 'ethical-app-dev'
})


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
// notify({ type: 'server', up: 'Going Up!', down: 'Going down!' }),
//
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
    file({ dest: 'dist', base: 'src', log }),
    server({ path: 'dist/server', log})
)

const transpileBrowserJSFiles = series(
    route('src/{client/**/*,shared/**/*}.js'),
    babel({ babel: require('./babel.json'), log }),
    saveFileAndRestartServer
)

const transpileNodeJSFiles = series(
    route('src/server/**/*.js'),
    babel({ babel: require('./babel.node.json'), log }),
    saveFileAndRestartServer
)

const logger = async (ctx, next) => {
    console.log('Processed:', ctx.file.path)
}

const tasks = series(
    parallel(transpileBrowserJSFiles, transpileNodeJSFiles),
    logger
)

setup(tasks, 'src/**/*')
.then(() => watcher('src', async (file) => await tasks({ file })))
.then(() => console.log('Done!'))
.catch(e => console.error(e))
