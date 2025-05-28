import { Box, Typography } from '@mui/material'
import TargetIcon from '@mui/icons-material/CenterFocusStrong'
import GroupIcon from '@mui/icons-material/Groups'
import BalanceIcon from '@mui/icons-material/Balance'
import LightbulbIcon from '@mui/icons-material/Lightbulb'

const CardItem = ({ title, content, bgcolor }) => (
  <Box
    bgcolor={bgcolor}
    sx={{
      color: 'white',
      borderRadius: 3,
      p: 4,
      flex: 1,
      padding: 3,
      minWidth: 250,
      textAlign: 'center'
    }}
  >
    <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2, color: 'white' }}>
      {title}
    </Typography>
    <Typography fontSize={20}>{content}</Typography>
  </Box>
)

function Values() {
  return (
    <Box sx={{ backgroundColor: '#F3F8FF' }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: 6,
          px: 2,
          textAlign: 'center'
        }}
      >
        {/* Tầm nhìn & Sứ mệnh */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
            mb: 4
          }}
        >
          <CardItem
            title='Tầm nhìn'
            content='Đào tạo một thế hệ không chỉ có khả năng thích ứng với thế giới đang thay đổi
              mà còn góp phần thay đổi thế giới.'
            bgcolor='primary.main'
          />
          <CardItem
            title='Sứ mệnh'
            content='Cam kết xây dựng một nền tảng giáo dục sẵn sàng cho tương lai và gắn chặt với môi trường làm việc hiện đại,
              cũng như phát triển các giá trị của một công dân địa phương – toàn cầu.'
            bgcolor='primary.light'
          />
        </Box>

        {/* Giá trị cốt lõi */}
        <Box
          sx={{
            bgcolor: (theme) => (theme.palette.secondary.main),
            color: 'white',
            borderRadius: 3,
            p: 4
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 'bold', mb: 4, color: 'white' }}
          >
            Giá trị cốt lõi
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4
            }}
          >
            {[
              {
                icon: <TargetIcon sx={{ fontSize: 80, mb: 1 }} />,
                text: 'Lấy học viên làm trung tâm trong mọi hoạt động'
              },
              {
                icon: <GroupIcon sx={{ fontSize: 80, mb: 1 }} />,
                text: 'Xây dựng môi trường phát triển toàn diện cho bé'
              },
              {
                icon: <BalanceIcon sx={{ fontSize: 80, mb: 1 }} />,
                text: 'Hoạt động minh bạch - hiệu quả'
              },
              {
                icon: <LightbulbIcon sx={{ fontSize: 80, mb: 1 }} />,
                text: 'Không ngừng đổi mới và sáng tạo'
              }
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: 'center',
                  flex: 1,
                  maxWidth: 220
                }}
              >
                {item.icon}
                <Typography variant="body2" fontSize={20} minHeight={100}>{item.text}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Values
