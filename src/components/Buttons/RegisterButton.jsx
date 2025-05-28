import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const RegisterButton = styled(Button)(({ theme }) => ({
  width: { xs: 'auto', md: 'auto' },
  borderRadius: '50px',
  backgroundColor: theme.palette.primary.main,
  boxShadow: 'none',
  color: 'white',
  fontSize: '20px',
  fontWeight: 'bold',
  textTransform: 'none',
  padding: '6px 20px',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.light
  }
}))