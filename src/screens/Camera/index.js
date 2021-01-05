import React from 'react'
import { Button } from '@material-ui/core'


export default function Index() {

    const getCamera = () => {
        if ('mediaDevices' in navigator) {
            var video = document.querySelector('video')
            var constraints = window.constraints = {
                audio: false,
                video: true
            }
            navigator.mediaDevices.getUserMedia(constraints)
                .then(function (stream) {
                    window.stream = stream // make variable available to browser console
                    video.srcObject = stream
                })
                .catch(function (error) {
                    console.log("error")
                })
        }
    }

    return (
        <div>
            <Button color="primary" onClick={getCamera} >
                getCamera
            </Button>
            <video />
        </div>
    )
}
