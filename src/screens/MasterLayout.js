import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useStyles from './MasterLayout.styles'
import DashBoardMenu from '../components/Menus'
import Routes from '../routes'

export default function MasterLayout() {
  const classes = useStyles()
  return (
    <Router>
      <div className={classes.root}>
        <DashBoardMenu />
        <Routes />
      </div>
    </Router>
  )
}
