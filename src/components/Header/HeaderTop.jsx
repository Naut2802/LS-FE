import Layout from '~/components/Layout'
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
    <Layout sx={{ width: '100%', bgcolor: '#FFBD00' }}>
      <Box sx={{
        mx: '180px',
        color: '#F3F3F3',
        ...DISPLAY_FLEX
      }}>
        <Box sx={{
          gap: 1,
          padding: '8px 12px',
          ...DISPLAY_FLEX
        }}>
          <CallIcon/>
          <Link href='#' underline='none'>098 362 21 57</Link>
        </Box>
        <Box sx={{
          gap: 1,
          padding: '8px 12px',
          ...DISPLAY_FLEX
        }}>
          <Box sx={{ ...DISPLAY_FLEX, gap: 1 }}>
            <Typography>Tìm Kiếm</Typography>
            <SearchIcon/>
          </Box>
          <Divider orientation="vertical" flexItem sx={{ mx: '8px', color: 'white', borderColor: 'white', borderWidth: '1px' }} />
          <Box sx={{ ...DISPLAY_FLEX, gap: 1 }}>
            <Typography>VN</Typography>
            <Avatar alt="Việt Nam" src="./src/assets/VietNam.jpg" sx={{
              maxWidth: '16px',
              maxHeight: '16px'
            }}/>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}

export default HeaderTop