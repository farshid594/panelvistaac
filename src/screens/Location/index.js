import React from 'react'
import { Button, Grid } from '@material-ui/core'
import Map from './Map'

export default function Index() {

    const success = (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude, longitude)
    }
    const error = () => {
        console.log('Unable to retrieve your location')
    }
    const getLocation = () => {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition(success, error)
        }
    }
    return (
        <div>
            <Button onClick={getLocation} color="primary">
                get location
            </Button>
            <Grid container >
                <Map />
            </Grid>
        </div>
    )
}
