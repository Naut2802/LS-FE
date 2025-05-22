import { Box, Typography, Stack, Link, Avatar } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import Logo from '~/assets/Logo.jpg'

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => (theme.palette.secondary.main),
        color: '#fff'
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
          alignItems: { xs: 'flex-start', md: 'center' },
          gap: 4
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            gap: 4
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Stack direction="column" alignItems="flex-start">
              <Box
                component="img"
                src={Logo}
                alt="Little Sunny Logo"
                width={240}
              />
              <Box>
                <Typography variant="h6" color='white' mb={1}>
                  LITTLE SUNNY EDUCATION CENTER
                </Typography>
                <Typography>
                  <strong>Địa chỉ:</strong> 186A Bình Quới, Bình Thạnh, TP Hồ Chí Minh. Quẹo vào đường số 1. Tại ngã ba, nhìn theo hướng tay phải chính là Little Sunny!
                </Typography>
                <Typography mt={1}>
                  <strong>Hotline:</strong> 0983 622 157
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Bên phải: mạng xã hội */}
          <Box sx={{ flexShrink: 0, textAlign: 'left' }}>
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
    </Box>
  )
}

export default Footer
