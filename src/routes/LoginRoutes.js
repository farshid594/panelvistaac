import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../screens/login'
import Register from '../screens/register'

export default function index() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="*" component={Login} />
        </Switch>
    )
}
