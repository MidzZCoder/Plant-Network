import { createMuiTheme } from '@material-ui/core/styles'
import { green, pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
      primary: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
      contrastText: '#ffff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#ffff',
    },
      openTitle: '#c51162',
      protectedTitle: '#ff3d00',
      type: 'light'
    }
  })
node
  export default theme  