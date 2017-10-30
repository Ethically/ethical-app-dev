import React from 'react'
import { connect } from 'react-redux'
import startSocket from '../../../browser/utils/socket.js'

const SocketIO = ({ dispatch, socket }) => {

    const { connected } = socket

    if (connected) {
        return <connected>YES</connected>
    }

    if (!isNode()) {
        
        startSocket()
        .then(response => {
            dispatch({
                type: 'SOCKET_CONNECTED',
                payload: true
            })
        })
        .catch(e => console.error(e))
    }

    return <connected>NO</connected>
}

const mapStateToProps = ({ socket }) => ({ socket })

export default connect(mapStateToProps)(SocketIO)
