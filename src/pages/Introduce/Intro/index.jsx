import IntroduceBackgroundImg from '~/assets/IntroduceBackground.jpg'
import { Box, Button, Typography } from '@mui/material'

function Intro() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '600px',
        backgroundImage: `url(${IntroduceBackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', md: 'flex-end' },
          py: { xs: 6, md: 0 },
          px: 2
        }}
      >
        <Box
          sx={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 143, 25, 0))',
            borderRadius: 4,
            maxWidth: 480,
            minHeight: 480,
            p: { xs: 3, md: 4 },
            my: { xs: 0, md: 6 }
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Hành trình học tập{' '}
            <Box component='span'>
              HẠNH PHÚC
            </Box>{' '}
            cùng Little Sunny
          </Typography>

          <Typography sx={{ mt: 2, mb: 3 }} variant="body1">
            Little Sunny có hơn 5 năm kinh nghiệm đào tạo tiếng Anh và kỹ năng sống cho trẻ. Chúng tôi chú trọng
            tới sự phát triển toàn diện của học sinh thông qua tối ưu hóa lộ trình học tập và trau dồi đồng thời
            các kỹ năng quan trọng của thời đại.
          </Typography>

          <Button
            variant="contained"
            sx={{
              width: { xs: 'auto', md: 'auto' },
              borderRadius: '50px',
              bgcolor: '#FF8300',
              boxShadow: 'none',
              color: 'white',
              fontSize: '14px',
              textTransform: 'none',
              padding: '6px 20px',
              '&:hover': {
                boxShadow: 'none',
                bgcolor: (theme) => (theme.palette.primary.light)
              }
            }}
          >
            Đọc thêm
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Intro