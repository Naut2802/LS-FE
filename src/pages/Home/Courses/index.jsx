import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { Box, Typography, Card, CardMedia, CardContent, IconButton } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { courses } from '~/data/courses'
import '~/utils/swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const groupCourses = (data, itemsPerSlide) => {
  const groups = []
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    groups.push(data.slice(i, i + itemsPerSlide))
  }
  return groups
}

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
    <CardContent
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: course.color,
        color: '#fff',
        py: 2,
        px: 0,
        '&:last-child': {
          pb: 0
        }
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}
        >
          {course.title}
        </Typography>
        <Typography fontSize='18px' fontWeight="bold">
          {course.age}
        </Typography>
      </Box>
      <Box>
        <IconButton
          sx={{
            backgroundColor: 'transparent',
            border: '2px solid #fff',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#eee',
              color: `${course.color}`
            },
            mr: 1
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </CardContent>
  </Card>
)

function Courses() {
  const [slides, setSlides] = useState(groupCourses(courses, 3))

  const theme = useTheme()

  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))

  useEffect(() => {
    const itemsPerSlide = isXs ? 1 : isSm ? 2 : 3

    setSlides(groupCourses(courses, itemsPerSlide))
  }, [isXs, isSm])

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
              <Box
                sx={{
                  width: group.length === 1 ? { sm: '50%', md: '33%' }
                    : group.length === 2 ? { md: '66%' } : 'auto',
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 3.5
                }}
              >
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