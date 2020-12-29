import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import useStyles from './MasterLayout.styles'
import DashBoardMenu from '../components/Menus'
import Routes from '../routes'
import { LoginContext } from '../contexts/LoginContext'
import LoginRoutes from '../routes/LoginRoutes'

export default function MasterLayout() {
  let { isLoggedIn } = useContext(LoginContext)
  const classes = useStyles()
  if (!isLoggedIn) {
    return (
      <Router>
        <LoginRoutes />
      </Router>
    )
  }
  return (
    <Router>
      <div className={classes.root}>
        <DashBoardMenu />
        <Routes />
      </div>
    </Router>
  )
}
