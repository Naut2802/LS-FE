import { Box, Typography, Stack, Link, Avatar } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Logo from '~/assets/logo.jpg'
import FooterEl from '~/assets/footer-element.jpg'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => (theme.palette.secondary.main),
        color: '#fff',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: { xs: 4, md: 6 },
          px: 2,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: 4
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Stack direction="column" alignItems="flex-start" maxWidth={700}>
            <Box
              component="img"
              src={Logo}
              alt="Little Sunny Logo"
              sx={{
                width: 180,
                objectFit: 'cover',
                mb: 3
              }}
            />
            <Box>
              <Typography fontSize={30} fontWeight={700} mb={3}>
                  LITTLE SUNNY EDUCATION CENTER
              </Typography>
              <Typography mb={3}>
                <strong>Địa chỉ:</strong> 186A Bình Quới, Bình Thạnh, TP Hồ Chí Minh. Quẹo vào đường số 1. Tại ngã ba, nhìn theo hướng tay phải chính là Little Sunny!
              </Typography>
              <Typography>
                <strong>Hotline:</strong> 0983 622 157
              </Typography>
            </Box>
          </Stack>
        </Box>

        {/* Bên phải: mạng xã hội */}
        <Box
          sx={{
            flexShrink: 0,
            textAlign: 'left'
          }}
        >
          <Typography fontWeight="bold" mb={1}>
                Theo dõi chúng tôi tại
          </Typography>
          <Stack direction="row" spacing={2} justifyContent='center'>
            <Link href="https://www.facebook.com/Famyly77sin" target="_blank" underline="none">
              <Avatar sx={{ bgcolor: '#006AF7', width: 40, height: 40 }}>
                <FacebookIcon />
              </Avatar>
            </Link>
            <Link href="https://youtube.com" target="_blank" underline="none">
              <Avatar sx={{ bgcolor: '#E81200', width: 40, height: 40 }}>
                <YouTubeIcon />
              </Avatar>
            </Link>
          </Stack>
        </Box>
      </Box>

      {/* Phần nền vàng */}
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.primary.light),
          textAlign: 'center',
          py: 2,
          color: '#000',
          fontWeight: 'bold'
        }}
      >
        Copyright © 2025 Little Sunny Education. All rights reserved.
      </Box>

      {/* Footer Element */}
      <Box
        component="img"
        alt='Footer'
        src={FooterEl}
        sx={{
          width: 500,
          objectFit: 'cover',
          position: 'absolute',
          right: '0',
          bottom: '40%',
          opacity: '50%'
        }}
      />
    </Box>
  )
}

export default Footer
