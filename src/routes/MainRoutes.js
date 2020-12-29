import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../screens/home'

export default function LoginRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
    </>
  )
}
