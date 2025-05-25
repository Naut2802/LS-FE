import * as React from 'react'
import Box from '@mui/material/Box'
import logoImage from '~/assets/Logo.jpg'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Link } from 'react-router-dom'

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
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.secondary.main)
      }}
    >
      <Box sx={{
        maxWidth: 'lg',
        mx: 'auto',
        px: 2,
        py: 0.5,
        gap: 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: 'center'
      }}>
        <Box
          component={Link}
          to='/'
          sx={{
            my: '12px',
            width: { xs: '80px', md: '96px' }
          }}
        >
          <Box component='img'
            src={logoImage} alt='Little Sunny Education Center'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2
          }}
        >
          <Typography
            component={Link}
            to='/introduce'
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
              Giới Thiệu
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2
          }}
        >
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={icon}
            disableRipple
            sx={{
              color: (theme) => (open ? theme.palette.primary.main : 'white'),
              textTransform: 'none',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              '& .MuiSvgIcon-root': {
                fontSize: { xs: '24px !important', md: '34px !important' }
              },
              '&:hover': {
                bgcolor: 'transparent'
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
                color: (theme) => (theme.palette.secondary.light),
                bgcolor: 'white'
              }
            }}
          >
            <MenuItem onClick={handleClose}>Tiếng Anh Mầm Non</MenuItem>
            <MenuItem onClick={handleClose}>Tiếng Anh Tiểu Học</MenuItem>
            <MenuItem onClick={handleClose}>Tiếng Anh Trung Học</MenuItem>
          </Menu>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2
          }}
        >
          <Typography
            component={Link}
            to='/teacher'
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
              Giáo Viên
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
            gap: 2
          }}
        >
          <Typography
            component={Link}
            to='/news'
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              '&:active': {
                color: '#7f8c8d'
              }
            }}
          >
              Tin Tức
          </Typography>
        </Box>
        <Box sx={{ my: '12px' }}>
          <Button
            variant="contained"
            sx={{
              width: { xs: 'auto', md: 'auto' },
              borderRadius: '50px',
              bgcolor: (theme) => (theme.palette.primary.main),
              boxShadow: 'none',
              color: 'white',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 'bold',
              textTransform: 'none',
              padding: '6px 20px',
              '&:hover': {
                boxShadow: 'none',
                bgcolor: (theme) => (theme.palette.primary.light)
              }
            }}
          >
              Đăng ký ngay
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderMenu