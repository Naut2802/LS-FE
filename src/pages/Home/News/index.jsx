import { Box, Typography, Button, Link } from '@mui/material'
import NewsImg from '~/assets/News.jpg'

const news = [
  {
    id: 1,
    title: 'Khám Phá Summer Camp 2025',
    date: 'Ngày 28/4',
    description: 'các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    image: `${NewsImg}`
  },
  {
    id: 2,
    title: 'Khám Phá Summer Camp 2025',
    date: 'Ngày 28/4',
    description: 'các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    image: `${NewsImg}`
  },
  {
    id: 3,
    title: 'Khám Phá Summer Camp 2025',
    date: 'Ngày 28/4',
    description: 'các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    image: `${NewsImg}`
  },
  {
    id: 4,
    title: 'Khám Phá Summer Camp 2025',
    date: 'Ngày 28/4',
    description: 'các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    image: `${NewsImg}`
  }
]

function News() {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          textAlign: 'center'
        }}
      >
        {/* Tiêu đề */}
        <Typography variant="h3" gutterBottom>
          TIN TỨC & SỰ KIỆN
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.primary"
          maxWidth="md"
          mx="auto"
          sx={{ mb: 4 }}
        >
          Là những giáo viên giỏi kiến thức và giỏi truyền đạt, rất tận tâm với học viên, đi dạy vì cái tâm và luôn khát khao cải tiến việc học tiếng anh ở việt nam
        </Typography>

        {/* Nội dung chính */}
        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start'
          }}
        >
          {/* Tin tức nổi bật */}
          <Box
            sx={{
              flex: 1,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 'none',
              backgroundColor: 'white'
            }}
          >
            <Box
              component="img"
              src={NewsImg} // Thay bằng đường dẫn ảnh thực tế
              alt="Hoạt Động Hưởng Ứng Ngày 30/4"
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'cover'
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                sx={{ mb: 1 }}
              >
                Hoạt Động Hưởng Ứng Ngày 30/4
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Những Ngày Này, Các Bạn Nhỏ Tại Little Sunny Đã Cùng Nhau Trải Qua Một Hành Trình Thật Ý Nghĩa: Tìm Hiểu Về Lịch Sử Đất Nước Qua Những Câu Chuyện Giản Dị, Và Những Hoạt Động Sáng Tạo Đầy Sắc Màu.
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  p: '10px',
                  color: '#FF8F19',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    bgcolor: '#f5f6fa',
                    borderRadius: '20px'
                  }
                }}
              >
                Đọc tiếp →
              </Link>
            </Box>
          </Box>

          {/* Danh sách tin tức */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            {news.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start'
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: 2
                  }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    fontWeight="bold"
                    color="text.primary"
                    sx={{ mb: 0.5 }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {item.date}, {item.description}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      p: '10px',
                      color: '#FF8F19',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        bgcolor: '#f5f6fa',
                        borderRadius: '20px'
                      }
                    }}
                  >
                    Đọc tiếp →
                  </Link>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Nút xem tất cả */}
        <Button
          variant="outlined"
          sx={{
            mt: 4,
            borderRadius: '50px',
            borderColor: '#FF8F19',
            color: '#FF8F19',
            textTransform: 'none',
            fontWeight: 'bold',
            px: 4,
            py: 1,
            '&:hover': {
              backgroundColor: '#FF8F19',
              color: 'white'
            }
          }}
        >
          Xem tất cả →
        </Button>
      </Box>
    </Box>
  )
}

export default News