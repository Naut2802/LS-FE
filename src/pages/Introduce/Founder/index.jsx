import FounderImg from '~/assets/Founder.jpg'
import { Box, Divider, Typography } from '@mui/material'

function Intro() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '600px',
        backgroundImage: `url(${FounderImg})`,
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
            color: 'white',
            borderRadius: 4,
            maxWidth: 480,
            minHeight: 480,
            p: { xs: 3, md: 4 },
            my: { xs: 0, md: 6 }
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            <b>LITTLE SUNNY</b> là trung tâm anh ngữ mang trong mình sứ mệnh hoàn thiện kỹ năng, ngôn ngữ và giá trị đạo đức,
            từ đó giúp thế hệ trẻ việt nam chủ động kiến tạo một tương lai hạnh phúc. với phương châm 
            <span style={{ fontWeight: 'bold' }}> “lấy người học làm trọng tâm trong mọi hoạt động”</span>, cam kết đồng hành
            cùng con trong hành trình chinh phục ngoại ngữ và đem lại hiệu quả đào tạo cao nhất
          </Typography>

          <Divider
            sx={{
              width: 200,
              mt: 3,
              borderColor: 'rgba(255, 255, 255, 1)'
            }}
          />

          <Typography
            variant="h6"
            color='white'
          >
            Ms. Huỳnh Thảo Nguyên
          </Typography>
          <Typography variant="body2">
            Founder Little Sunny Education
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Intro