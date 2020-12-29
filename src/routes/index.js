import React from 'react'
import { Switch } from 'react-router-dom'
import MainRoutes from './MainRoutes'

export default function index() {
  return (
    <Switch>
      <MainRoutes />
    </Switch>
  )
}
