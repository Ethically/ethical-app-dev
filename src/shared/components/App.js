import React from 'react'
import { connect } from 'react-redux'
import socket from 'ethical/react/socket'

const Home = () => (
    <page>Trying to get app status...</page>
)

export default socket(Home)
