import React from 'react'
import { CssBaseline } from '@material-ui/core'
import RTL from './components/RTL'
import ThemeProvider from './components/ThemeProvider'
import MasterLayout from './screens/MasterLayout'

function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <MasterLayout />
      </RTL>
    </ThemeProvider>
  )
}

export default App
