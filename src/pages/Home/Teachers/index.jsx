import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { alpha } from '@mui/material/styles'
import TeacherImg from '~/assets/Teacher.jpg'
import DoneIcon from '@mui/icons-material/Done'
import MedalIcon from '@mui/icons-material/WorkspacePremiumOutlined'
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
    image: `${TeacherImg}`,
    details: '8.0 IELTS Overall\nTốt nghiệp đại học Sài Gòn',
  },
  {
    id: 2,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}`,
    details: '8.0 IELTS Overall\nTốt nghiệp đại học Sài Gòn',
  },
  {
    id: 3,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}`,
    details: '8.0 IELTS Overall\nTốt nghiệp đại học Sài Gòn',
  },
  {
    id: 4,
    name: 'MS. NGUYỄN THẢO NGUYÊN',
    title: 'Giáo Viên Kindy',
    image: `${TeacherImg}`,
    details: '8.0 IELTS Overall\nTốt nghiệp đại học Sài Gòn',
  }
]

function Teachers() {
  return (
    <Box sx={{ py: 8, px: 2, backgroundColor: '#F3F8FF' }}>
      <Box sx={{ maxWidth: 'lg', mx: 'auto', textAlign: 'center' }}>
        {/* Tiêu đề */}
        <Typography variant="h3" gutterBottom>
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
                  sx={{
                    height: '300px',
                    position: 'relative',
                    textAlign: 'left',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                >
                  <Box
                    component="img"
                    src={teacher.image}
                    alt={teacher.name}
                    sx={{
                      width: '100%',
                      objectFit: 'cover',
                      borderRadius: '20px',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}
                  />
                  {/* Lớp phủ khi hover */}
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: (theme) => (`linear-gradient(to top, ${alpha(theme.palette.primary.main, 0.8)}, rgba(255, 143, 25, 0))`),
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      color: 'white',
                      px: 2,
                      pb: 2, // Padding dưới để thông tin không sát mép
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Box sx={{ textAlign: 'left' }}>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ display: 'flex', alignItems: 'center' }}
                      >
                        <MedalIcon />
                        {teacher.details.split('\n')[0]}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ display: 'flex', alignItems: 'center' }}>
                        <DoneIcon />{teacher.details.split('\n')[1]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box px={2}>
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