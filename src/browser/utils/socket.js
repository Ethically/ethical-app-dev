import socket from 'socket.io-client'

const startSocket = async (server) => {
    const io = socket(server)
    await new Promise(resolve => {
        io.on('connection', (server) => resolve({ io, server }))
    })
}

export default startSocket
