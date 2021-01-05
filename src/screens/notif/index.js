import React, { useState } from 'react'
import { Button } from '@material-ui/core'

export default function Index() {
    const [notifper, setNotifper] = useState(false)
    const getPermision = () => {
        if ('serviceWorker' in navigator && 'PushManager' in window) {
            Notification.requestPermission().then((result) => {
                if (result == "granted") {
                    setNotifper(true)
                }
            })
        }
    }
    const showNotification = () => {
        if (notifper) {
            navigator.serviceWorker.ready.then((swr) => {
                swr.showNotification("ویستا", {})
            })
        }
    }

    return (
        <div>
            <Button onClick={getPermision} color="primary" >
                get permision
            </Button>
            <Button onClick={showNotification} color="secondary" >
                show notif
            </Button>
        </div>
    )
}
