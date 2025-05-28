import { Box, Typography, Paper } from '@mui/material'
import { alpha } from '@mui/material/styles'
import SchoolIcon from '@mui/icons-material/School'
import HappyStatsImg from '~/assets/hero-sections/happy-stats.jpg'

const statsData = [
  { value: '5 năm', description: 'Đồng hành cùng hàng trăm ngàn học viên trên khắp cả nước trong các kỳ thi' },
  { value: '100%', description: 'Giáo viên đều có bằng cấp và chứng chỉ giảng dạy theo chuẩn Cambridge' },
  { value: '>80%', description: 'Học viên đạt chứng chỉ Cambridge (YLE Cambridge, KET, PET, IELTS)' },
  { value: '500+', description: 'Học viên đạt chứng chỉ IELTS 7.0' },
  { value: '>95%', description: 'Học viên đánh giá 5 sao cho trải nghiệm học tập tại Little Sunny' }
]

function HappyStats() {
  return (
    <Box sx={{ backgroundColor: '#F3F8FF', py: 8, px: 2 }}>
      <Box maxWidth='lg' mx='auto' textAlign='center'>
        <Typography variant='h3' gutterBottom>
          NHỮNG CON SỐ HẠNH PHÚC
        </Typography>
        <Typography variant='subtitle1' color='text.primary' maxWidth='md' mx='auto' sx={{ mb: 4 }}>
          <strong style={{ color: '#FF7A00' }}>LITTLE SUNNY</strong> là trung tâm anh ngữ mang trong mình sứ mệnh hoàn thiện kỹ năng,
          ngôn ngữ và giá trị đạo đức, từ đó giúp thế hệ trẻ Việt Nam chủ động kiến tạo một tương lai hạnh phúc. Với
          phương châm <em style={{ color: '#FF7A00' }}>“lấy người học làm trọng tâm trong mọi hoạt động”</em>, cam kết đồng hành cùng con trong hành
          trình chinh phục ngoại ngữ và đem lại hiệu quả đào tạo cao nhất.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4
          }}
        >
          <Box
            component="img"
            src={HappyStatsImg}
            alt="Banner"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: 'auto',
              borderRadius: 4,
              objectFit: 'cover'
            }}
          />

          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: { xs: 'space-between', md: 'normal' },
              gap: 2
            }}
          >
            {statsData.map((stat, index) => (
              <Paper
                key={index}
                elevation={3}
                sx={{
                  flex: '1 1 calc(50% - 16px)',
                  maxWidth: 'calc(50% - 16px)',
                  '@media (min-width: 960px)': {
                    flex: '1 1 calc(33.333% - 16px)',
                    maxWidth: 'calc(33.333% - 16px)'
                  },
                  px: 1.5,
                  py: 2,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  minHeight: 180,
                  boxSizing: 'border-box',
                  cursor: 'default',
                  '&:hover': {
                    bgcolor: (theme) => (alpha(theme.palette.primary.light, 0.2))
                  }
                }}
              >
                <Box display="flex" alignItems="center" justifyContent="center">
                  <SchoolIcon sx={{ color: '#FF8F19', fontSize: 40 }} />
                </Box>
                <Typography variant="h6" fontWeight="bold" color="#FF8F19">
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default HappyStats