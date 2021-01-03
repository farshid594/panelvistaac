import React, { createContext, useContext } from 'react'
import { AlertContext } from '../components/Alert'

const FetchContext = createContext({
    fetchPost: () => { },
    fetchGet: () => { },
    fetchUpload: () => { }
})
export { FetchContext }

function FetchContextProvider({ children }) {
    let { showSuccesAlert, showErrorAlert } = useContext(AlertContext)
    const fetchUpload = (url, headers, formData) => {
        return new Promise((res, rej) => {
            var status
            fetch(url, {
                method: "POST",
                headers: {
                    ...headers
                },
                body: formData
            }).then(response => {
                status = response.status
                return response.json()
            }).then(responsJson => {
                if (status === 401) {
                    showErrorAlert("برای انجام عملیات باید لاگین کنید")
                }
                res({ status: status, data: responsJson })
            }).catch((e) => {
                showErrorAlert("در ارتباط با سرور مشکلی به وجود آمده است")
                res({ status: 500, data: [] })
            })
        })
    }
    const fetchPost = (url, headers, body) => {
        return new Promise((res, rej) => {
            var status
            fetch(url, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    ...headers
                },
                body: JSON.stringify(body)
            }).then(response => {
                status = response.status
                return response.json()
            }).then(responsJson => {
                if (status === 401) {
                    showErrorAlert("برای انجام عملیات باید لاگین کنید")
                }
                res({ status: status, data: responsJson })
            }).catch((e) => {
                showErrorAlert("در ارتباط با سرور مشکلی به وجود آمده است")
                res({ status: 500, data: [] })
            })
        })
    }
    const fetchGet = (url, headers) => {
        return new Promise((res, rej) => {
            var status
            fetch(url, {
                method: "Get",
                headers: {
                    'content-type': 'application/json',
                    ...headers
                }
            }).then(response => {
                status = response.status
                return response.json()
            }).then(responsJson => {
                if (status === 401) {
                    showErrorAlert("برای انجام عملیات باید لاگین کنید")
                }
                res({ status: status, data: responsJson })
            }).catch((e) => {
                showErrorAlert("در ارتباط با سرور مشکلی به وجود آمده است")
                res({ status: 500, data: [] })
            })
        })
    }
    // fetchBlob = (url) => {
    //     return new Promise((res) => {
    //         var status
    //         fetch(url)
    //             .then(response => {
    //                 status = response.status
    //                 return response.blob()
    //             }).then(responseBlob => {
    //                 var objectURL = URL.createObjectURL(responseBlob)
    //                 res({ status, objectURL })
    //             })
    //     })
    // }
    return (
        <FetchContext.Provider
            value={{ fetchPost: fetchPost, fetchGet: fetchGet, fetchUpload: fetchUpload }}
        >
            {children}
        </FetchContext.Provider>
    )
}
export default FetchContextProvider
