import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import TeacherImg from '~/assets/Teacher.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '~/utils/swiper.css'

const teachers = [
  {
    id: 1,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  },
  {
    id: 2,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  },
  {
    id: 3,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  },
  {
    id: 4,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  },
  {
    id: 5,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  },
  {
    id: 6,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}` // Thay bằng đường dẫn ảnh thực tế
  }
]

function Teachers() {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#F3F8FF' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', textAlign: 'center' }}>
        {/* Tiêu đề */}
        <Typography variant="h3" fontWeight="bold" color="#FF8F19" gutterBottom>
          ĐỘI NGŨ GIÁO VIÊN
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

        {/* Swiper danh sách giáo viên */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 5000
          }}
        >
          {teachers.map((teacher) => (
            <SwiperSlide key={teacher.id}>
              <Box sx={{ textAlign: 'left' }}>
                <Box
                  component="img"
                  src={teacher.image}
                  alt={teacher.name}
                  sx={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ mt: 2 }}
                >
                  {teacher.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontWeight="bold"
                >
                  {teacher.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Nút xem thêm */}
        <Button
          variant="outlined"
          sx={{
            mt: 5,
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
          Xem tất cả giáo viên →
        </Button>
      </Box>
    </Box>
  )
}

export default Teachers