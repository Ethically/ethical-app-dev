import React from 'react'
import { connect } from 'react-redux'
import socket from './higherorder/socket.js'

const Home = () => ( <page>Trying to get app status...</page> )

export default socket(Home) 
