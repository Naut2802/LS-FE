import {
  Box,
  Typography,
  Button,
  MenuItem,
  Select,
  InputBase,
  alpha
} from '@mui/material'
import { styled } from '@mui/system'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import BackgroundImage from '~/assets/FreeTrialBackground.jpg'

const RoundedInput = styled(InputBase)(() => ({
  backgroundColor: '#fff',
  borderRadius: 50,
  padding: '10px 20px',
  fontSize: 16,
  width: '100%',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)'
}))

function FreeTrialForm() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: 2
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: { xs: 6, md: 10 },
          display: 'flex',
          justifyContent: { xs: 'center', md:'flex-start' },
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 550,
            backgroundColor: (theme) => (alpha(theme.palette.secondary.main, 0.88)),
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            color: '#fff',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color='white'
            mb={3}
            sx={{ lineHeight: 1.5 }}
          >
            Kiểm Tra Trình Độ <br /> & Tham Gia Học Thử Miễn Phí
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} alignItems='center'>
            <RoundedInput placeholder="Họ tên ba mẹ" />
            <RoundedInput placeholder="Số điện thoại" />
            <Select
              defaultValue=""
              displayEmpty
              input={<RoundedInput />}
              sx={{
                '& .MuiSelect-icon': {
                  color: '#aaa'
                }
              }}
            >
              <MenuItem value="" disabled>
                Khóa học phù hợp với bé
              </MenuItem>
              <MenuItem value="mamnnon">Tiếng Anh Mầm Non</MenuItem>
              <MenuItem value="tieuhoc">Tiếng Anh Tiểu Học</MenuItem>
              <MenuItem value="trunghoc">Tiếng Anh Trung Học</MenuItem>
            </Select>

            <Button
              variant="contained"
              sx={{
                width: { xs: 'auto', md: 'auto' },
                maxWidth: '200px',
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
                  bgcolor: '#f1c40f'
                }
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Đăng ký ngay
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FreeTrialForm
