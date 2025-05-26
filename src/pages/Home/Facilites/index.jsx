import { Box, Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import FacilityImg_1 from '~/assets/Facility_1.jpg'
import FacilityImg_2 from '~/assets/Facility_2.jpg'
import FacilityImg_3 from '~/assets/Facility_3.jpg'
import '~/utils/swiper.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

function Facilities() {
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
    }
  ]

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box
        sx={{
          textAlign: 'center',
          '& .mySwiper .swiper-pagination': {
            position: 'relative !important',
            mt: 4
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
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          className='mySwiper'
          modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
          spaceBetween={20}
          pagination={{
            dynamicBullets: true
          }}
          autoplay={{
            delay: 5000
          }}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            },
          }}
        >
          {facilities.map((facility) => (
            <SwiperSlide
              key={facility.id}
            >
              <Box
                component='img'
                src={facility.image}
                alt={facility.alt}
                sx={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  )
}

export default Facilities