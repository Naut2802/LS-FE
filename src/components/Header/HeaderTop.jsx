import Box from '@mui/material/Box'
import CallIcon from '@mui/icons-material/Call'
import SearchIcon from '@mui/icons-material/Search'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'

const DISPLAY_FLEX = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}

function HeaderTop() {
  return (
    <Box sx={{ bgcolor: '#FFBD00' }}>
      <Box sx={{
        maxWidth: 'lg',
        mx: 'auto',
        color: '#F3F3F3',
        gap: 2,
        flexDirection: { xs: 'column', sm: 'row' },
        ...DISPLAY_FLEX
      }}>
        <Box sx={{
          gap: 1,
          padding: '8px 12px',
          ...DISPLAY_FLEX
        }}>
          <Link
            href='#'
            underline='none'
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 1,
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
            <CallIcon/>
            <Typography>098 362 21 57</Typography>
          </Link>
        </Box>
        <Box sx={{
          ...DISPLAY_FLEX,
          gap: 1,
          padding: '8px 12px'
        }}>
          <Box
            sx={{
              ...DISPLAY_FLEX,
              gap: 1,
              cursor: 'pointer',
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
            <Typography>Tìm Kiếm</Typography>
            <SearchIcon/>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: '8px', color: 'white', borderColor: 'white', borderWidth: '1px' }} />
          <Box
            sx={{
              ...DISPLAY_FLEX,
              gap: 1,
              cursor: 'pointer',
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
            <Typography>VN</Typography>
            <Avatar alt="Việt Nam" src="./src/assets/VietNam.jpg" sx={{
              maxWidth: '16px',
              maxHeight: '16px'
            }}/>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderTop