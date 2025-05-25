import { useNavigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

function NotFound() {
  const navigate = useNavigate()
  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        textAlign: 'center',
        py: 6,
        px: 2
      }}
    >
      <Typography variant='h3' color='primary.main'>
          TRANG NÀY KHÔNG TỒN TẠI
      </Typography>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/')
        }}
        sx={{
          mt: 5,
          borderRadius: '50px',
          borderColor: (theme) => (theme.palette.primary.main),
          color: (theme) => (theme.palette.primary.main),
          textTransform: 'none',
          fontWeight: 'bold',
          px: 4,
          py: 1,
          '&:hover': {
            backgroundColor: (theme) => (theme.palette.primary.main),
            color: 'white'
          }
        }}
      >
        Quay về trang chủ →
      </Button>
    </Box>
  )
}

export default NotFound