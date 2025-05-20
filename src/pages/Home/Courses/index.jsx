import { useState, useEffect } from 'react'
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import CourseImg_1 from '~/assets/Course_1.jpg'
import CourseImg_2 from '~/assets/Course_2.jpg'
import CourseImg_3 from '~/assets/Course_3.jpg'
import '~/utils/swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const groupCourses = (data, itemsPerSlide) => {
  const groups = []
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    groups.push(data.slice(i, i + itemsPerSlide))
  }
  return groups
}

const courseData = [
  {
    title: 'TIẾNG ANH MẦM NON',
    age: '(3-6 Tuổi)',
    image: `${CourseImg_1}`,
    color: '#00C9B6'
  },
  {
    title: 'TIẾNG ANH TIỂU HỌC',
    age: '(6-10 Tuổi)',
    image: `${CourseImg_2}`,
    color: '#FF4C1D'
  },
  {
    title: 'TIẾNG ANH TRUNG HỌC',
    age: '(11-15 Tuổi)',
    image: `${CourseImg_3}`,
    color: '#65B800'
  },
  {
    title: 'TIẾNG ANH MẦM NON 2',
    age: '(3-6 Tuổi)',
    image: `${CourseImg_1}`,
    color: '#00C9B6'
  },
  {
    title: 'TIẾNG ANH TIỂU HỌC 2',
    age: '(6-10 Tuổi)',
    image: `${CourseImg_2}`,
    color: '#FF4C1D'
  },
  {
    title: 'TIẾNG ANH TRUNG HỌC 2',
    age: '(11-15 Tuổi)',
    image: `${CourseImg_3}`,
    color: '#65B800'
  },
  {
    title: 'TIẾNG ANH MẦM NON 3',
    age: '(3-6 Tuổi)',
    image: `${CourseImg_1}`,
    color: '#00C9B6'
  },
  {
    title: 'TIẾNG ANH TIỂU HỌC 3',
    age: '(6-10 Tuổi)',
    image: `${CourseImg_2}`,
    color: '#FF4C1D'
  },
  {
    title: 'TIẾNG ANH TRUNG HỌC 3',
    age: '(11-15 Tuổi)',
    image: `${CourseImg_3}`,
    color: '#65B800'
  },
  {
    title: 'TIẾNG ANH MẦM NON 4',
    age: '(4-6 Tuổi)',
    image: `${CourseImg_1}`,
    color: '#00C9B6'
  },
  {
    title: 'TIẾNG ANH TIỂU HỌC 4',
    age: '(6-10 Tuổi)',
    image: `${CourseImg_2}`,
    color: '#FF4C1D'
  },
  {
    title: 'TIẾNG ANH TRUNG HỌC 4',
    age: '(11-15 Tuổi)',
    image: `${CourseImg_3}`,
    color: '#65B800'
  }
]

const CourseCard = ({ course }) => (
  <Card
    sx={{
      borderRadius: 4,
      overflow: 'hidden',
      boxShadow: 3,
      textAlign: 'left',
      p: 2,
      bgcolor: `${course.color}`
    }}
  >
    <CardMedia component="img"
      height="350"
      image={course.image}
      alt={course.title}
      sx={{
        borderRadius: '10px'
      }}
    />
    <CardContent sx={{ backgroundColor: course.color, color: '#fff', position: 'relative', px: 0 }}>
      <Typography fontWeight="bold">{course.title}</Typography>
      <Typography fontSize="14px" fontWeight="medium">
        {course.age}
      </Typography>
      <IconButton
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          backgroundColor: 'transparent',
          border: '2px solid #fff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#eee',
            color: `${course.color}`
          }
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </CardContent>
  </Card>
)

function Courses() {
  const [slides, setSlides] = useState(groupCourses(courseData, 3))

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      let itemsPerSlide = 3
      if (width < 600) itemsPerSlide = 1
      else if (width < 900) itemsPerSlide = 2
      else itemsPerSlide = 3

      setSlides(groupCourses(courseData, itemsPerSlide))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          textAlign: 'center',
          '& .mySwiper .swiper-pagination': {
            position: 'relative !important',
            mt: 4
          }
        }}
      >
        <Typography variant='h3' gutterBottom>
          CHƯƠNG TRÌNH HỌC
        </Typography>
        <Typography variant='subtitle1' color='text.primary' maxWidth='md' mx='auto' sx={{ mb: 4 }}>
          Giới thiệu sơ qua về chương trình
        </Typography>

        <Swiper
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 3000
          }}
          spaceBetween={24}
        >
          {slides.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <Box sx={{ display: 'flex', gap: 3 }}>
                {group.map((course, i) => (
                  <Box key={i} flex={1}>
                    <CourseCard course={course} />
                  </Box>
                ))}
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default Courses