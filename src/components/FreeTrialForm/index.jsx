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
import FreeTrialBackgroundImg from '~/assets/hero-sections/free-trial-background.jpg'
import { RegisterButton } from '~/components/Buttons/RegisterButton'
import EastIcon from '@mui/icons-material/East'

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
        backgroundImage: `url(${FreeTrialBackgroundImg})`,
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

            <RegisterButton
              variant='contained'
              endIcon={<EastIcon />}
            >
              Đăng ký ngay
            </RegisterButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default FreeTrialForm
