import React from 'react'
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import useStyles from './styles/menuItems.styles'
import drawerLogo from '../../assets/images/brandHeader.png'
import activeMenu from '../../assets/images/Group4546.svg'
import inActiveMenu from '../../assets/images/Group5599.svg'

export default function MenuItems() {
  const classes = useStyles()
  const location = useLocation()
  const path = location.pathname

  return (
    <div className={classes.root}>
      <div className={classes.topDrawer}>
        <img src={drawerLogo} alt="shoesShop" className={classes.drawerLogo} />
      </div>
      <Divider />
      <div className={classes.menuList}>
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <img
                src={path === '/' ? activeMenu : inActiveMenu}
                alt="harfineh"
                className={
                  path === '/'
                    ? classes.ActiveMenuIcon
                    : classes.inActiveMenuIcon
                }
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/' ? 'textPrimary' : 'textSecondary'}
                className={classes.menuText}
              >
                حساب کاربری
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/users"
            style={{ marginTop: 10 }}
          >
            <ListItemIcon>
              <img
                src={path === '/users' ? activeMenu : inActiveMenu}
                alt="harfineh"
                className={
                  path === '/users'
                    ? classes.ActiveMenuIcon
                    : classes.inActiveMenuIcon
                }
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/users' ? 'textPrimary' : 'textSecondary'}
                className={classes.menuText}
              >
                کاربران
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/upload-profile"
            style={{ marginTop: 10 }}
          >
            <ListItemIcon>
              <img
                src={path === '/upload-profile' ? activeMenu : inActiveMenu}
                className={
                  path === '/upload-profile'
                    ? classes.ActiveMenuIcon
                    : classes.inActiveMenuIcon
                }
              />
            </ListItemIcon>
            <ListItemText>
              <Typography
                variant="body2"
                color={path === '/upload-profile' ? 'textPrimary' : 'textSecondary'}
                className={classes.menuText}
              >
                آپلود پروفایل
              </Typography>
            </ListItemText>
          </ListItem>

        </List>
      </div>
    </div>
  )
}
