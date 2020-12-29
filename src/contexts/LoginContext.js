import React, { createContext, useState } from 'react'

const LoginContext = createContext({
    isLoggedIn: false,
    token: ""
})
export { LoginContext }

function LoginContextProvider({ children }) {
    const [token, setToken] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <LoginContext.Provider
            value={{
                token: token,
                isLoggedIn: isLoggedIn
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
export default LoginContextProvider