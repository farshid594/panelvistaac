import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../screens/home'
import UploadProfile from '../screens/UploadProfile'
import IndexDB from '../screens/indexdb'
import Notif from '../screens/notif'
import Location from '../screens/Location'
import Camera from '../screens/Camera'

export default function LoginRoutes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/upload-profile" component={UploadProfile} />
      <Route exact path="/idb" component={IndexDB} />
      <Route exact path="/notif" component={Notif} />
      <Route exact path="/location" component={Location} />
      <Route exact path="/camera" component={Camera} />
    </>
  )
}
