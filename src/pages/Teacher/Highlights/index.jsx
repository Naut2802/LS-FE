import { Box, Typography } from '@mui/material'

const CardItem = ({ title, content, bgcolor }) => (
  <Box
    bgcolor={bgcolor}
    sx={{
      color: 'white',
      borderRadius: '16px',
      padding: 3,
      flex: 1,
      minWidth: 250,
      textAlign: 'center'
    }}
  >
    <Typography variant="h6" fontWeight="bold" color='white' mb={1}>
      {title}
    </Typography>
    <Typography variant="body2">{content}</Typography>
  </Box>
)

function Highlights() {
  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch',
        px: 2,
        py: 4
      }}
    >
      <CardItem
        title="KỸ NĂNG SƯ PHẠM TỐT"
        content="Đội ngũ giáo viên nhiều năm kinh nghiệm. Có chứng chỉ giảng dạy quốc tế và được đào tạo bài bản."
        bgcolor='primary.main'
      />
      <CardItem
        title="DẠY HỌC CÓ TÂM"
        content="Đội ngũ giáo viên luôn đặt học viên của mình lên hàng đầu. Không chỉ giảng dạy và truyền đạt kiến thức tại lớp, giáo viên còn sẵn sàng hỗ trợ học viên ngoài giờ học."
        bgcolor='primary.light'
      />
      <CardItem
        title="SÁNG TẠO - PHÁT TRIỂN"
        content="Đội ngũ giáo viên luôn cập nhật và sáng tạo trong việc giảng dạy. Nhằm nâng cao chất lượng giảng dạy hiệu quả hơn"
        bgcolor='secondary.main'
      />
    </Box>
  )
}

export default Highlights