import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import theme from '~/theme.js'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      <GlobalStyles
        styles={{
          'html, body, #root': {
            width: '100%',
            height: '100%'
          }
        }}
      />
      <App />
    </ThemeProvider>
  </BrowserRouter>
)
