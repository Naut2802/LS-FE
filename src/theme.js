import { createTheme } from '@mui/material/styles'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/900.css'

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
          fontWeight: '900',
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.125rem'
          }
        }),
        h6: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontWeight: '900'
        })
      }
    }
  },
  typography: {
    fontFamily: '"Inter"'
  }
})

export default theme