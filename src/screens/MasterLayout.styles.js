import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '100vh',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 250,
    }
  }
}))
