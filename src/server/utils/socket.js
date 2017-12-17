import socketIO from 'socket.io'

const startSocket = (server) => {
    const io = socketIO(server)
    console.log('Trying to connect...')
    return new Promise(resolve => {
        console.log('Server Socket Connected!')
        io.on('connection', () => resolve(io))
    })
}

export default startSocket
