import * as React from 'react'
import Layout from '~/components/Layout'
import Box from '@mui/material/Box'
import logoImage from '~/assets/logo.png'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [icon, setIcon] = React.useState(<KeyboardArrowDownIcon />)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
    setIcon(<KeyboardArrowUpIcon />)
  }
  const handleClose = () => {
    setAnchorEl(null)
    setIcon(<KeyboardArrowDownIcon />)
  }

  return (
    <Layout sx={{ width: '100%', bgcolor: '#0F2DFF' }}>
      <Box sx={{
        mx: '180px',
        gap: 3,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box sx={{ my: '12px', width: '96px' }}>
          <Link href='#' underline='none'>
            <img src={logoImage} alt='Little Sunny Education Center' style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}/>
          </Link>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Link href='#' underline='none'>
            <Typography sx={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              Giới Thiệu
            </Typography>
          </Link>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={icon}
            disableRipple
            sx={{
              textTransform: 'none',
              fontSize: '20px',
              fontWeight: 'bold',
              '& .MuiSvgIcon-root': {
                fontSize: '34px !important'
              }
            }}
          >
            Chương Trình Học
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button'
            }}
            sx={{
              '& .MuiMenuItem-root:hover': {
                color: '#0F2DFF',
                bgcolor: 'white'
              }
            }}
          >
            <MenuItem onClick={handleClose}>Tiếng Anh Mầm Non</MenuItem>
            <MenuItem onClick={handleClose}>Tiếng Anh Tiểu Học</MenuItem>
            <MenuItem onClick={handleClose}>Tiếng Anh Trung Học</MenuItem>
          </Menu>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Link href='#' underline='none'>
            <Typography sx={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              Giáo Viên
            </Typography>
          </Link>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Link href='#' underline='none'>
            <Typography sx={{
              color: 'white',
              fontSize: '20px',
              fontWeight: 'bold'
            }}>
              Tin Tức
            </Typography>
          </Link>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Button variant="contained" sx={{
            borderRadius: '50px',
            bgcolor: '#FF8300',
            boxShadow: 'none',
            color: 'white',
            fontSize: '20px',
            fontWeight: 'bold',
            textTransform: 'none',
            padding: '6px 20px'
          }}>Đăng ký ngay</Button>
        </Box>
      </Box>
    </Layout>
  )
}

export default HeaderMenu