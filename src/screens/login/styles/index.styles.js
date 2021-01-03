import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
    root: {
        marginTop: 50,
        width: 400,
        padding: 25,
        backgroundColor: theme.palette.bg.loginBg,
        borderRadius: 5,
        border: `1px solid ${theme.palette.secondary.main}`,
        borderBottom: `3px solid ${theme.palette.secondary.main}`,
    },
    input: {
        marginTop: 20
    }
}))
