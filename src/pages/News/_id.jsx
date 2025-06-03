import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Stack
} from '@mui/material'
import { alpha } from '@mui/material/styles'
import { useParams } from 'react-router-dom'
import { getNewsById, getHotNews, getRelatedPosts } from '~/data/newsService'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import RelatedPosts from './RelatedPosts'

function NewsDetail() {
  const { id } = useParams()
  const [hotNewsItem, setHotNewsItem] = useState(null)
  const [newsItem, setNewsItem] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    getHotNews().then((data) => {
      setHotNewsItem(data)
    })
    getNewsById(id).then((data) => {
      setNewsItem(data)
      // setLoading(false)
    })
  }, [id])

  useEffect(() => {
    if (newsItem?.id && newsItem?.category) {
      getRelatedPosts(newsItem.id, newsItem.category).then((data) => {
        setRelatedPosts(data)
      })
    }
  }, [newsItem])

  // if (loading) return (
  //   <Box
  //     sx={{
  //       maxWidth: 'lg',
  //       mx: 'auto',
  //       py: 6,
  //       px: 2
  //     }}
  //   >
  //     <Typography variant='h3'>Đang tải tin tức</Typography>
  //   </Box>
  // )
  if (!hotNewsItem) return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2
      }}
    >
    </Box>
  )

  if (!newsItem) return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2
      }}
    >
      <Typography variant='h3'>Không tìm thấy tin tức</Typography>
    </Box>
  )

  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: '1'
      }}
    >
      <Box
        sx={{
          position: 'relative',
          minHeight: '600px',
          width: '100%',
          overflow: 'hidden',
          backgroundImage: `url(${hotNewsItem.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: (theme) => (`linear-gradient(to top, ${alpha(theme.palette.secondary.main, 0.8)}, transparent 100%)`)
          }}
        />

        {/* Content */}
        <Box
          sx={{
            maxWidth: 'lg',
            mx: 'auto',
            position: 'relative',
            zIndex: 10,
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            px: 2,
            py: 4
          }}
        >
          <Box sx={{ color: 'white' }}>
            {/* Main Heading */}
            <Typography
              variant="h4"
              sx={{
                lineHeight: 1.2,
                fontWeight: '900',
                fontSize: { xs: '0.875rem', sm: '1.25rem', md: '2.215rem' },
                mb: 4
              }}
            >
              {hotNewsItem.title}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: 6,
          px: 2
        }}
      >
        <Box mb={4}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '24px' }, fontWeight: '400' }}>
              {newsItem.date}
            </Typography>
            <PlayArrowIcon sx={{ fontSize: { xs: '12px', sm: '16px', md: '24px' }, fontWeight: '600' }} />
            <Typography sx={{ fontSize: { xs: '12px', sm: '16px', md: '24px' }, fontWeight: '600' }}>
              {newsItem.isHot ? 'Tin nổi bật' : newsItem.category}
            </Typography>
          </Stack>
        </Box>
        <Box mb={4}>
          <Typography
            sx={{
              fontStyle: 'italic',
              fontSize: { xs: '16px', sm: '20px', md: '30px' }
            }}
          >
            {newsItem.summary}
          </Typography>
        </Box>
        {newsItem.contents.map((content, index) => (
          <Box key={index}>
            <Box mb={4}>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '20px', md: '30px' },
                  fontWeight: '900'
                }}
              >
                {content.subtitle}
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography
                sx={{
                  fontSize: { xs: '16px', sm: '20px', md: '30px' },
                  whiteSpace: 'pre-line'
                }}
              >
                {content.description}
              </Typography>
            </Box>
            <Box mb={4}>
              <Box
                component='img'
                src={content.contentImage}
                sx={{
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: '50px'
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      {relatedPosts ? (
        <Box
          sx={{
            textAlign: 'center',
            mb: 4
          }}
        >
          <Typography variant='h3' gutterBottom>
            BÀI VIẾT LIÊN QUAN
          </Typography>
          <RelatedPosts relatedPosts={relatedPosts}/>
        </Box>
      ) : (
        <Box
          sx={{
            textAlign: 'center',
            mb: 4
          }}
        >
          <Typography variant='h3' gutterBottom>
            BÀI VIẾT LIÊN QUAN
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default NewsDetail