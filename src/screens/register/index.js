import React, { useState, useEffect, useContext } from 'react'
import { Button, Grid, LinearProgress, TextField, Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Apis from '../../constants/Apis'
// import { fetchPost } from '../../config/FetchMethods'
import { FetchContext } from '../../contexts/FetchContext'
import { AlertContext } from '../../components/Alert'

export default function Index() {
    const classes = useStyles()
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [passwordStrong, setPasswordStrong] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    let { fetchPost } = useContext(FetchContext)
    let { showSuccesAlert } = useContext(AlertContext)
    let history = useHistory()

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
        fetchPost(Apis.REGISTER, {}, {
            "mobile": mobile,
            "password": password,
            "name": name
        }).then(({ status, data }) => {
            if (status === 201) {
                showSuccesAlert("ثبت شما با موفقیت انجام شد")
                setTimeout(() => {
                    history.push('/')
                }, 3000)
            }
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
