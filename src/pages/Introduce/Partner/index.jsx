import { Box, Divider, Typography } from '@mui/material'

function Partner() {
  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2,
        textAlign: 'center'
      }}
    >
      <Typography variant="h3" mb={4}>
        ĐỐI TÁC ĐỒNG HÀNH CÙNG CÁC CON
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 4, md: 8 },
          flexWrap: 'wrap'
        }}
      >
        <Box component="img" src="./src/assets/Partner_1.jpg" alt="Cambridge" width={400} />
        <Box component="img" src="./src/assets/Partner_2.jpg" alt="Pearson" width={400} />
      </Box>
    </Box>
  )
}

export default Partner