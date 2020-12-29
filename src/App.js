import React from 'react'
import { CssBaseline } from '@material-ui/core'
import RTL from './components/RTL'
import ThemeProvider from './components/ThemeProvider'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'

function App() {
  return (
    <LoginContextProvider>
      <ThemeProvider>
        <RTL>
          <CssBaseline />
          <MasterLayout />
        </RTL>
      </ThemeProvider>
    </LoginContextProvider>
  )
}

export default App
