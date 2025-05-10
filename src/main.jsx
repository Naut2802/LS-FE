import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '~/App.jsx'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider } from '@mui/material/styles'
import theme from '~/theme.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>
)
