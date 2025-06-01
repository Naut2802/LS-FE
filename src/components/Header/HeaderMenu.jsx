import { useState, useRef, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
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
  const [anchorEl, setAnchorEl] = useState(null)
  const [menuWidth, setMenuWidth] = useState(null)
  const [leftPosition, setLeftPosition] = useState(null)
  const [icon, setIcon] = useState(<KeyboardArrowDownIcon />)

  const logoRef = useRef()
  const registerRef = useRef()
  const open = Boolean(anchorEl)

  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    if (logoRef.current && registerRef.current) {
      const left = logoRef.current.offsetLeft
      const right = registerRef.current.offsetLeft + registerRef.current.offsetWidth

      setLeftPosition(left)
      setMenuWidth(right - left)
    }
  }, [leftPosition, menuWidth, isXs, isSm, isMdUp])

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
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          px: 2,
          py: 1,
          gap: 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center'
        }}
      >
        <Box
          component={Link}
          to='/'
          ref={logoRef}
          sx={{
            width: { xs: '100px', md: '128px' }
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
              fontSize: '1rem',
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
        </Box>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button'
          }}
          PaperProps={{
            sx: {
              borderRadius: 3,
              boxShadow: 3,
              px: 3,
              py: 1,
              minWidth: { xs: 300, sm: menuWidth },
              bgcolor: '#fff',
              mt: { xs: 1, sm: 6 },
              left: { sm: `${leftPosition}px !important` }
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'space-between' },
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 4,
              width: '100%'
            }}
          >
            {/* Danh sách chương trình */}
            <Box sx={{ flex: 1 }}>
              {subjects.map((subject, index) => (
                <MenuItem
                  key={index}
                  sx={{
                    cursor: 'default',
                    background: 'none',
                    '&:hover': {
                      bgcolor: 'transparent'
                    },
                    '& span': {
                      display: 'none'
                    }
                  }}
                >
                  <Typography
                    onClick={handleClose}
                    sx={{
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      color: 'text.primary',
                      fontSize: '1rem',
                      borderRadius: 1,
                      mb: 0.5,
                      background: 'none',
                      '&:hover': {
                        bgcolor: 'transparent',
                        color: 'secondary.main'
                      }
                    }}
                  >
                    {capitalizeWords(subject)}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
            {/* Preview và nút tải */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                minWidth: 300
              }}
            >
              <Box
                sx={{
                  width: 240,
                  height: 120,
                  backgroundColor: '#e0e0e0',
                  borderRadius: 2,
                  mb: 1
                }}
              />
              <Button
                variant="text"
                startIcon={<DownloadIcon />}
                sx={{
                  color: 'secondary.main',
                  fontWeight: 600,
                  fontSize: '1rem',
                  textTransform: 'none',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent'
                  }
                }}
              >
                Tải Broucher
              </Button>
            </Box>
          </Box>
        </Menu>
        <HeaderMenuItem linkTo='/teacher' title='Giáo Viên'/>
        <HeaderMenuItem linkTo='/news' title='Tin Tức'/>
        <RegisterButton
          variant='contained'
          ref={registerRef}
        >
          Đăng ký ngay
        </RegisterButton>
      </Box>
    </Box>
  )
}

export default HeaderMenu