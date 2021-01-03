import React, { useState, useEffect, useContext } from 'react'
import { Button, Grid, LinearProgress, TextField, Typography } from '@material-ui/core'
import useStyles from './styles/index.styles'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import Apis from '../../constants/Apis'
// import { fetchPost } from '../../config/FetchMethods'
import { LoginContext } from '../../contexts/LoginContext'
import { FetchContext } from '../../contexts/FetchContext'
import { AlertContext } from '../../components/Alert'

export default function Index() {
    const classes = useStyles()
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")
    const [passwordStrong, setPasswordStrong] = useState(0)
    const [btnDisabled, setBtnDisabled] = useState(true)
    let { fetchPost } = useContext(FetchContext)
    let { showSuccesAlert } = useContext(AlertContext)
    let { login } = useContext(LoginContext)
    let history = useHistory()

    useEffect(() => {
        if (password != "" && mobile != "") {
            setBtnDisabled(false)
        } else {
            setBtnDisabled(true)
        }
    }, [password, mobile])

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

    const Signin = async () => {
        fetchPost(Apis.LOGIN, {}, {
            "mobile": mobile,
            "password": password
        }).then(({ status, data }) => {
            if (status === 200) {
                showSuccesAlert("ورود با موفقیت انجام شد")
                var token = data.token
                localStorage.setItem('token', token)
                login(token)
            }
        })
    }

    return (
        <Grid container justify="center" alignItems="center" >
            <div className={classes.root} >
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
                    onClick={Signin}
                    disabled={btnDisabled}
                    className={classes.input}
                    size="small" fullWidth variant="outlined" color="primary">
                    ورود
                </Button>
                <Button
                    component={Link}
                    to="/register"
                    className={classes.input}
                    size="small" fullWidth variant="text" color="primary">
                    ثبت نام
                </Button>
            </div>
        </Grid>
    )
}
