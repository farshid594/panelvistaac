import React, { useState, useEffect } from 'react'
import { Button, Grid, LinearProgress, TextField, Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Index() {
    const classes = useStyles()
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [passwordStrong, setPasswordStrong] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)

    useEffect(() => {
        if (name != "" && password != "" && mobile != "") {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [name, password, mobile])

    const checkPasswordStrong = (pass) => {
        var regex1 = /[0-9]/
        var regex2 = /[a-z]/
        var regex3 = /[A-Z]/
        var regex4 = /[@#!]/
        var sp = 0
        if (regex1.test(pass)) {
            sp = sp + 15
        }
        if (regex2.test(pass)) {
            sp = sp + 25
        }
        if (regex3.test(pass)) {
            sp = sp + 25
        }
        if (regex4.test(pass)) {
            sp = sp + 35
        }
        setPasswordStrong(sp)
    }

    const Register = async () => {
        var status
        // const response =await fetch("http://localhost:8000/user/signup", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         "mobile": mobile,
        //         "password": password,
        //         "name": name
        //     })
        // })
        // var status = response.status
        // var responsJson = await response.json()


        fetch("http://localhost:8000/user/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "mobile": mobile,
                "password": password,
                "name": name
            })
        }).then(response => {
            status = response.status
            return response.json()
        }).then(responsJson => {
            console.log(responsJson, status)
        }).catch((e) => {
            console.log("error")
        })


        axios({
            url: "http://localhost:8000/user/signup",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "mobile": mobile,
                "password": password,
                "name": name
            },
            timeout: 3000,
            timeoutErrorMessage: ""
        }).then(response => {
            console.log(response.status)
            console.log(response.data)
        }).catch((e) => {
            console.log(e.response.status)
            console.log(e.response.data)
        })

    }

    return (
        <Grid container justify="center" alignItems="center" >
            <div className={classes.root} >
                <TextField
                    label="نام"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    className={classes.input}
                    value={name}
                    onChange={(e) => {
                        setNameError("")
                        let value = e.target.value
                        if (/[0-9]/.test(value)) {
                            setNameError("شما نمی  توانید عدد وارد کنید")
                            return
                        }
                        setName(value)
                    }}
                    error={nameError != ""}
                    helperText={nameError}
                />
                <TextField
                    label="موبایل"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    className={classes.input}
                    value={mobile}
                    type="tel"
                    onChange={(e) => {
                        if (/^[0-9]*$/.test(e.target.value)) {
                            setMobile(e.target.value)
                        }
                    }}
                />
                <TextField
                    label="رمز عبور"
                    variant="outlined"
                    size="small"
                    fullWidth
                    required
                    className={classes.input}
                    type="password"
                    value={password}
                    onChange={(e) => {
                        checkPasswordStrong(e.target.value)
                        setPassword(e.target.value)
                    }}
                />
                <LinearProgress value={passwordStrong} variant="determinate" style={{ marginTop: 10 }} />
                {password != "" ? (
                    <Typography>
                        {passwordStrong > 80 ? "خیلی قوی" :
                            passwordStrong > 50 ? "قوی" :
                                "ضعیف"
                        }
                    </Typography>
                ) : (null)}
                <Button
                    onClick={Register}
                    disabled={btnDisabled}
                    className={classes.input}
                    size="small" fullWidth variant="outlined" color="primary">
                    ثبت نام
                </Button>
                <Button
                    component={Link}
                    to="/"
                    className={classes.input}
                    size="small" fullWidth variant="text" color="primary">
                    صفحه ورود
                </Button>
            </div>
        </Grid>
    )
}
