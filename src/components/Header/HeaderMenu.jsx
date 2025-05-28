import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Logo from '~/assets/logo.jpg'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import DownloadIcon from '@mui/icons-material/Download'
import { Link } from 'react-router-dom'
import { courses } from '~/data/courses'
import { RegisterButton } from '~/components/Buttons/RegisterButton'

const subjects = courses.map((course) => course.title)

function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const HeaderMenuItem = ({ linkTo, title }) => (
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
      to={linkTo}
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
      {title}
    </Typography>
  </Box>
)

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
            src={Logo} alt='Little Sunny Education Center'
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </Box>
        <HeaderMenuItem linkTo='/about' title='Giới Thiệu'/>
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
            <Box
              sx={{
                minWidth: '600px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 4,
                mx: 2
              }}
            >
              <Box sx={{ flex: 1 }}>
                {subjects.map((subject, index) => (
                  <MenuItem
                    key={index}
                    onClick={handleClose}
                  >
                    {capitalizeWords(subject)}
                  </MenuItem>
                ))}
              </Box>
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2
              }}>
                {/* Broucher preview placeholder */}
                <Paper
                  sx={{
                    width: 160,
                    height: 80,
                    backgroundColor: '#e0e0e0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 1,
                    boxShadow: 2
                  }}
                >
                </Paper>

                {/* Download button */}
                <Button
                  variant="contained"
                  startIcon={<DownloadIcon />}
                  sx={{
                    bgcolor: 'transparent',
                    boxShadow: 'none',
                    color: 'secondary.main',
                    textTransform: 'none',
                    fontWeight: 500,
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                    '&:hover': {
                      color: 'primary.main',
                      boxShadow: 'none'
                    }
                  }}
                >
                  Tải Broucher
                </Button>
              </Box>
            </Box>
          </Menu>
        </Box>
        <HeaderMenuItem linkTo='/teacher' title='Giáo Viên'/>
        <HeaderMenuItem linkTo='/news' title='Tin Tức'/>
        <RegisterButton
          variant='contained'
        >
          Đăng ký ngay
        </RegisterButton>
      </Box>
    </Box>
  )
}

export default HeaderMenu