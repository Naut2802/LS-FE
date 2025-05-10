import Box from '@mui/material/Box'

function Layout ({ sx, children }) {
  return (
    <Box sx={{ ...sx }}>
      {children}
    </Box>
  )
}

export default Layout