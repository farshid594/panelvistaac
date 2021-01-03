import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../screens/home'
import UploadProfile from '../screens/UploadProfile'

export default function LoginRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload-profile" component={UploadProfile} />
    </>
  )
}
