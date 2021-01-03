import React, { useState, useContext } from 'react'
import { Typography, Button } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import brandHeader from '../../assets/images/brandHeader.png'
import Apis from '../../constants/Apis'
import { LoginContext } from '../../contexts/LoginContext'
import { FetchContext } from '../../contexts/FetchContext'
import moment from 'moment-jalaali'

export default function Index() {
    const [imgSrc, setImgSrc] = useState(brandHeader)
    const [file, setFile] = useState(null)
    let { token, setImage } = useContext(LoginContext)
    let { fetchUpload } = useContext(FetchContext)
    const upload = () => {
        var fd = new FormData()
        fd.append("image", file)

        fetchUpload(Apis.UPLOAD, { Authorization: token }, fd)
            .then(({ status, data }) => {
                console.log(status, data)
                setImage(data.path)
            })
    }

    // var date = "2021-01-03T11:30:42"
    // let newDate = moment(date, 'YYYY-MM-DDTHH:mm:ss').format('jYYYY/jMM/jDD dddd jMMMM  HH:MM:ss A')
    // console.log(newDate)
    var oldDate = "1993-01-18"
    console.log(moment().diff(moment(oldDate, 'YYYY-MM-DD'), 'days'))

    return (
        <div style={{
            margin: 'auto', marginTop: 100, display: 'flex',
            justifyContent: "center", alignItems: 'center', flexDirection: 'column'
        }} >
            <input type="file"
                style={{ display: 'none' }}
                id="file"
                onChange={(e) => {
                    var FR = new FileReader()
                    FR.addEventListener("load", function (event) {
                        setImgSrc(event.target.result)
                    })
                    FR.readAsDataURL(e.target.files[0])
                    setFile(e.target.files[0])
                }}
            />
            <img
                src={imgSrc}
                style={{ marginBottom: 15, maxWidth: 250 }}
            />
            <Button
                variant="outlined"
                color="primary"
                size="small"
                startIcon={<CloudUploadIcon />}
                onClick={() => {
                    document.getElementById('file').click()
                }}
            >
                آپلود
            </Button>
            <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={upload}
            >
                آپلود فایل انتخابی
            </Button>
        </div>
    )
}
