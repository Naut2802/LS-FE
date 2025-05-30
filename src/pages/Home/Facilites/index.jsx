import { useState, useEffect } from 'react'
import { useTheme, useMediaQuery } from '@mui/material'
import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import FacilityImg_1 from '~/assets/facilities/facility-1.jpg'
import FacilityImg_2 from '~/assets/facilities/facility-2.jpg'
import FacilityImg_3 from '~/assets/facilities/facility-3.jpg'
import '~/utils/swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const groupFacilities = (data, itemsPerSlide) => {
  const groups = []
  for (let i = 0; i < data.length; i += itemsPerSlide) {
    groups.push(data.slice(i, i + itemsPerSlide))
  }
  return groups
}

const facilities = [
  {
    id: 1,
    image: FacilityImg_1,
    alt: 'Classroom with yellow tables and chairs'
  },
  {
    id: 2,
    image: FacilityImg_2,
    alt: 'Classroom with colorful wall decoration'
  },
  {
    id: 3,
    image: FacilityImg_3,
    alt: 'Classroom with multicolor furniture'
  },
  {
    id: 4,
    image: FacilityImg_3,
    alt: 'Classroom with multicolor furniture'
  },
  {
    id: 5,
    image: FacilityImg_3,
    alt: 'Classroom with multicolor furniture'
  }
]

function Facilities() {
  const [slides, setSlides] = useState(groupFacilities(facilities, 3))
  const [activeIndex, setActiveIndex] = useState(1)
  const theme = useTheme()
  const isXs = useMediaQuery(theme.breakpoints.only('xs'))
  const isSm = useMediaQuery(theme.breakpoints.only('sm'))

  const handleActiveItem = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const itemsPerSlide = isXs ? 1 : isSm ? 2 : 3
    setSlides(groupFacilities(facilities, itemsPerSlide))
  }, [isXs, isSm])

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box
        sx={{
          textAlign: 'center',
          '& .mySwiper .swiper-pagination': {
            position: 'relative !important',
            mt: 4
          },
          '& .mySwiper .swiper-wrapper': {
            justifyContent: 'space-between !important'
          },
          '& .mySwiper .swiper-slide .active-item': {
            width: { md: 'calc(60% - 12px) !important' }
          },
          '& .mySwiper .swiper-slide .non-active': {
            width: { md: 'calc(20% - 12px) !important' }
          },
          '& .mySwiper .swiper-slide img': {
            width: '100%',
            height: 380,
            objectFit: 'cover',
            borderRadius: '20px'
          }
        }}
      >
        <Typography variant='h3' gutterBottom>
          CƠ SỞ VẬT CHẤT HIỆN ĐẠI
        </Typography>
        <Typography variant='subtitle1' color='text.primary' maxWidth='md' mx='auto' sx={{ mb: 4 }}>
          Giới thiệu sơ qua về chương trình
        </Typography>

        <Swiper
          className="mySwiper"
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={24}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          onSlideChange={(swiper) => setActiveIndex(3 * (1 + swiper.activeIndex) - 2)}
        >
          {slides.map((group, groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <Box
                sx={{
                  width: group.length === 1 ? { sm: '50%', md: '100%' }
                    : group.length === 2 ? '100%' : 'auto',
                  mx: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  gap: 3.5,
                  '& div': {
                    width: group.length < 3 ? '100%' : ''
                  }
                }}
              >
                {group.map((facility) => (
                  <Box
                    key={facility.id}
                    className={facility.id === activeIndex ? 'active-item' : 'non-active'}
                    onClick={() => handleActiveItem(facility.id)}
                    sx={{
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <Box component='img' src={facility.image} alt={facility.alt} />
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

export default Facilities