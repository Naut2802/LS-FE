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
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.125rem'
          }
        }),
        h6: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontWeight: 'bold'
        })
      }
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