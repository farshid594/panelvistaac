import React from 'react'
import { Grid } from '@material-ui/core'
import useStyles from './styles/index.styles'

export default function Index() {
  const classes = useStyles()
  return (
    <Grid container direction="column" className={classes.root}>
    </Grid>
  )
}
