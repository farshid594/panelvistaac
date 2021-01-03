import React, { createContext, useState, useEffect, useContext } from 'react'
import { FetchContext } from '../contexts/FetchContext'
import Apis from '../constants/Apis'

const LoginContext = createContext({
    isLoggedIn: false,
    token: "",
    login: () => { },
    name: "",
    logout: () => { }
})
export { LoginContext }

function LoginContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.token ? localStorage.token : "")
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.token ? localStorage.token.length > 0 : false)
    const [name, setName] = useState("")
    let { fetchGet } = useContext(FetchContext)

    useEffect(() => {
        if (token.length > 0) {
            fetchGet(Apis.GET_USER, {
                "Authorization": token
            }).then(({ status, data }) => {
                if (status === 401) {
                    localStorage.clear()
                    setIsLoggedIn(false)
                    setToken("")
                    // setTimeout(() => {
                    //     window.location.reload()
                    // }, 1000)
                } else if (status === 200) {
                    setName(data.name)
                }
            })
        }
    }, [])
    const login = (newToken) => {
        setToken(newToken)
        setIsLoggedIn(true)
    }
    const logout = () => {

    }
    return (
        <LoginContext.Provider
            value={{
                token: token,
                isLoggedIn: isLoggedIn,
                login: login,
                name: name,
                logout: logout
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
export default LoginContextProvider