import { Box, Typography } from '@mui/material'

const photos = [
  './src/assets/Teacher_Intro_1.jpg', // Ảnh lớn
  './src/assets/Teacher_Intro_2.jpg', // Ảnh nhỏ trên
  './src/assets/Teacher_Intro_3.jpg' // Ảnh nhỏ dưới
];

function TeacherIntro() {
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
          backgroundImage: 'url(./src/assets/TeacherBackground.jpg)',
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
            component="h2"
            sx={{
              fontWeight: 'bold',
              color: (theme) => (theme.palette.primary.main),
              mb: 2
            }}
          >
            ĐỘI NGŨ GIÁO VIÊN<br />TẠI LITTLE SUNNY
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Là những giáo viên giỏi kiến thức và giỏi truyền đạt. Luôn hết mình vì sự
            phát triển của các em nhỏ học viên
          </Typography>
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

export default TeacherIntro