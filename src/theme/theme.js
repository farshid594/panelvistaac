import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import palette from './palette'
let theme = createMuiTheme({
  palette: palette,
  direction: 'rtl',
  spacing: 2.5,
  typography: {
    h1: {},
    h2: {
      fontSize: 35,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',
      color: palette.text.title,
    },
    h3: {
      fontSize: 30,
      fontWeight: 'bold',
      lineHeight: 1.69,
      textAlign: 'left',
      color: palette.text.title,
    },
    h4: {
      fontSize: 23,
      fontWeight: 'bold',
      lineHeight: 1.68,
      textAlign: 'left',
      color: palette.text.title,
    },
    h5: {
      fontSize: 17,
      fontWeight: 'bold',
      lineHeight: 1.7,
      textAlign: 'center',
      color: palette.text.title,
    },
    h6: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 1.67,
      textAlign: 'left',
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      color: palette.text.primary,
      marginTop: 10,
    },
    subtitle2: {
      fontSize: 13,
      fontWeight: 'normal',
      lineHeight: 2.14,
      textAlign: 'left',
      color: palette.text.primary,
    },
    body1: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      color: palette.text.primary,
    },
    body2: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: 1.94,
      textAlign: 'left',
      color: palette.text.primary,
    },
    button: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: 2.75,
      textAlign: 'center',
      borderRadius: 20,
    },
    overline: {
      color: 'red',
    },
    caption: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 2.31,
      textAlign: 'left',
      color: palette.text.caption,
    },
    allVariants: {
      fontFamily: 'IRANSans',
    },
  },
})
export default responsiveFontSizes(theme)
