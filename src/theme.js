import { createTheme } from '@mui/material/styles'
import '@fontsource/inter'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF8300',
      light: '#FFBD00',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#185AB1',
      light: '#0D28E5',
      contrastText: '#FFFFFF'
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