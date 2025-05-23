import Box from '@mui/material/Box'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import BannerImg from '~/assets/HomeBackground.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import '~/utils/swiper.css'

function Intro() {
  return (
    <Box sx={{
      width: '100%',
      maxWidth: '100vw',
      overflow: 'hidden',
      '& .mySwiper': {
        width: '100%',
        height: 'auto'
      },
      '& .mySwiper img': {
        display: 'block',
        width: '100%',
        height: 'auto',
        objectFit: 'cover'
      }
    }}>
      <Swiper
        loop={true}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 5000
        }}
        style={{
          width: '100%',
          height: 'auto'
        }}
      >
        <SwiperSlide>
          <Box
            component="img"
            src={BannerImg}
            alt="Banner 1"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={BannerImg}
            alt="Banner 2"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={BannerImg}
            alt="Banner 3"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={BannerImg}
            alt="Banner 4"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover'
            }}
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

export default Intro