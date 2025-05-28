import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const ViewAllButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  borderRadius: '24px',
  fontWeight: 'bold',
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}))