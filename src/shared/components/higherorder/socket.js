import React from 'react'
import PropTypes from 'prop-types'
import isNode from 'ethical-utility-is-node'
import socketIO from 'socket.io-client'

const socket = (Component, config = { port: 9191 }) => {

    class Socket extends React.Component {
        state = {
            socket: null
        }
        startSocket() {
            if (isNode()) {
                return
            }
            const io = socketIO()
            io.on('connect', (server) => {
                this.setState({ socket: server })
            })
        }
        componentWillMount() {
            this.startSocket()
        }
        render() {
            const { socket } = this.state
            if (!socket) return <socket-loading>Loading socket!</socket-loading>
            return <Component { ...{ ...this.props, socket } } />
        }
    }

    Socket.contextTypes = {
        socket: PropTypes.func
    }

    return Socket
}

export default socket
