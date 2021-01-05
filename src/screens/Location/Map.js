import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const CustomIcon = new L.Icon({
    iconUrl: require('../../assets/images/doctorProfile.png'),
    iconRetinaUrl: require('../../assets/images/doctorProfile.png'),
    iconSize: new L.Point(40, 40),
    className: 'leaflet-div-icon'

})

export default function Map() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%" }} >
            <MapContainer
                style={{ width: 500, height: 500 }}
                center={[35.7191798, 51.4071868]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    icon={CustomIcon}
                    position={[35.7191798, 51.4071868]}>
                    <Popup>
                        آدرس
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}
