import { Box, Typography, Button } from '@mui/material'
import StudentHeroImg from '~/assets/hero-sections/teacher-hero.jpg'
import BaoNgocImg from '~/assets/students/BaoNgoc.jpg'
import MinhChauImg from '~/assets/students/MinhChau.jpg'
import KhaDoanh from '~/assets/students/KhaDoanh.jpg'

const photos = [
  BaoNgocImg,
  MinhChauImg,
  KhaDoanh
];

function StudentHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        zIndex: 1
      }}
    >
      {/* Background image (blurred) */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${StudentHeroImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }}
      />
      {/* Overlay blur */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(243, 248, 255, 0.7)', // lớp mờ trắng
          zIndex: -1
        }}
      />

      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: { xs: 4, md: 8 },
          px: { xs: 2, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 6
        }}
      >
        {/* Left: Text */}
        <Box flex={1} textAlign={{ xs: 'center', md: 'left' }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              color: (theme) => (theme.palette.primary.main),
              mb: 2
            }}
          >
            THÀNH TÍCH<br />& CẢM NHẬN CỦA<br />HỌC VIÊN
          </Typography>
          <Typography variant="body1" fontWeight='bold' color="text.secondary">
            Hàng ngàn review chính là niềm tự hào, là động lực của Little Sunny và cũng là tài sản nhỏ, tích góp, lụm lặt mỗi ngày của trung tâm.
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: { xs: 'auto', md: 'auto' },
              mt: 6,
              borderRadius: '50px',
              bgcolor: (theme) => (theme.palette.primary.main),
              boxShadow: 'none',
              color: 'white',
              fontSize: '16px',
              fontWeight: 'bold',
              textTransform: 'none',
              padding: '6px 20px',
              '&:hover': {
                boxShadow: 'none',
                bgcolor: (theme) => (theme.palette.primary.light)
              }
            }}
          >
            Để lại cảm nhận tới Little Sunny →
          </Button>
        </Box>

        {/* Right: Photos */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gridTemplateRows: '1fr 1fr',
            gap: 2,
            width: { xs: '100%', md: '60%' },
            maxWidth: 600
          }}
        >
          <Box
            component="img"
            src={photos[0]}
            alt="Teacher large"
            sx={{
              gridColumn: '1 / 2',
              gridRow: '1 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              border: 'solid 5px white'
            }}
          />
          <Box
            component="img"
            src={photos[1]}
            alt="Teacher small top"
            sx={{
              gridColumn: '2 / 3',
              gridRow: '1 / 2',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              border: 'solid 5px white'
            }}
          />
          <Box
            component="img"
            src={photos[2]}
            alt="Teacher small bottom"
            sx={{
              gridColumn: '2 / 3',
              gridRow: '2 / 3',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 4,
              border: 'solid 5px white'
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default StudentHero