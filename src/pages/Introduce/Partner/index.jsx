import { Box, Typography } from '@mui/material'
import PartnerImg_1 from '~/assets/Partner_1.jpg'
import PartnerImg_2 from '~/assets/Partner_2.jpg'

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
        <Box component="img" src={PartnerImg_1} alt="Cambridge" width={400} />
        <Box component="img" src={PartnerImg_2} alt="Pearson" width={400} />
      </Box>
    </Box>
  )
}

export default Partner