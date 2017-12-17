import Root from 'ethical/react/root'
import React from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import App from './components/App.js'

export default (
    <Root>
        <Helmet>
            <title>Default Title!</title>
            <meta name="description" content="Default Description" />
        </Helmet>
        <Route exact path="/&" component={App}/>
    </Root>
)
