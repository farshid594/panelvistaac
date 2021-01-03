/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react'
import {
  SwipeableDrawer,
  Drawer,
  Hidden,
  Button,
  Typography,
  IconButton,
  Badge
} from '@material-ui/core'
import useStyles from './styles/index.styles'
import menuIcon from '../../assets/images/Group4546.svg'
import accImg from '../../assets/images/doctorProfile.png'
import notificationImage from '../../assets/images/notification.svg'
import MenuItems from './MenuItems'
import SettingIcon from '@material-ui/icons/Settings'
import { LoginContext } from '../../contexts/LoginContext'
import { BaseApi } from '../../constants/Apis'

export default function Mobile() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  let { name, logout, image } = useContext(LoginContext)
  const toggleOpenMenu = () => {
    setOpen(!open)
  }
  return (
    <div className={classes.root}>
      <Hidden smUp>
        <div className={classes.rightMenu} onClick={toggleOpenMenu}>
          <img src={menuIcon} className={classes.menuIcon} />
        </div>
      </Hidden>
      <div className={classes.centerMenu}>
        <img src={image === "" ? accImg : BaseApi + image} alt="harfine" className={classes.profileImage} />
        <Typography variant="h6" color="textPrimary" className={classes.name}>
          {name}
        </Typography>
        <IconButton className={classes.notificationButton}>
          <Badge
            badgeContent={<Typography variant="h6">3</Typography>}
            color="primary"
          >
            <img src={notificationImage} />
          </Badge>
        </IconButton>
        <IconButton className={classes.notificationButton}>
          <SettingIcon />
        </IconButton>
      </div>

      <Hidden xsDown>
        <div className={classes.leftMenu}>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.newReserveButton}
            onClick={logout}
          >
            خروج
          </Button>
        </div>
      </Hidden>
      <Hidden smUp>
        <SwipeableDrawer
          onOpen={toggleOpenMenu}
          onClose={toggleOpenMenu}
          open={open}
        >
          <MenuItems />
        </SwipeableDrawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer classes={{ paper: classes.paper }} variant="permanent">
          <MenuItems />
        </Drawer>
      </Hidden>
    </div>
  )
}
