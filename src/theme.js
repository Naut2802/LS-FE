import { createTheme } from '@mui/material/styles'
import '@fontsource/inter'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#FF8300'
    }
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(',')
  }
})

export default theme