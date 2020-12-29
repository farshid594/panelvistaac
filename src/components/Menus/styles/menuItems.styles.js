import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  root: {
    width: 250,
    height: '100%',
    padding: 10
  },
  topDrawer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  ActiveMenuIcon: {
    width: 40,
    height: 40,
    boxShadow: '0 6px 10px 0 rgba(27, 32, 118, 0.11)',
    borderRadius: 40,
    padding: 6
  },
  inActiveMenuIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    padding: 6
  },
  drawerLogo: {
    width: 80
  },
  menuList: {
    marginTop: 30
    // paddingLeft: 20
  },
  menuText: {
    fontSize: 14,
    fontWeight: 700
  }
}))
