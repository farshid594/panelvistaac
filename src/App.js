import React from 'react'
import { CssBaseline } from '@material-ui/core'
import RTL from './components/RTL'
import ThemeProvider from './components/ThemeProvider'
import MasterLayout from './screens/MasterLayout'
import LoginContextProvider from './contexts/LoginContext'
import AlertProvider from './components/Alert'
import FetchContextProvider from './contexts/FetchContext'

function App() {
  return (
    <ThemeProvider>
      <RTL>
        <AlertProvider>
          <FetchContextProvider>
            <LoginContextProvider>
              <CssBaseline />
              <MasterLayout />
                react
            </LoginContextProvider>
          </FetchContextProvider>
        </AlertProvider>
      </RTL>
    </ThemeProvider>
  )
}

export default App
