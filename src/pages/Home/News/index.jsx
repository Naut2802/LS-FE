import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { getAllNews, getHotNews } from '~/data/newsService'
import { ViewAllButton } from '~/components/Buttons/ViewAllButton'
import EastIcon from '@mui/icons-material/East'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import RelatedPosts from '~/pages/News/RelatedPosts'

function ReadMoreButton({ linkTo, id }) {
  return (
    <Box
      component={Link}
      to={`${linkTo}/${id}`}
      sx={{
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        color: 'primary.main',
        cursor: 'pointer',
        gap: 0.5,
        '&:hover p': {
          fontWeight: 'bold'
        },
        '&:hover .MuiSvgIcon-root': {
          fontSize: '1.175rem'
        }
      }}
    >
      <Typography>
        Đọc tiếp
      </Typography>
      <ArrowForwardIcon fontSize='1rem' sx={{ fontWeight: 'light' }}/>
    </Box>
  )
}

function News() {
  const [hotNewsItem, setHotNewsItem] = useState(null)
  const [allNews, setAllNews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getHotNews().then((data) => {
      setHotNewsItem(data)
    })
    getAllNews().then((data) => {
      setAllNews(data)
    })
  }, [])

  if (!hotNewsItem || !allNews) return (
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

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          textAlign: 'center'
        }}
      >
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

        <Box
          sx={{
            textAlign: 'left',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            alignItems: 'flex-start'
          }}
        >
          <Box
            sx={{
              flex: 1,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 'none',
              backgroundColor: 'white'
            }}
          >
            <Box
              component="img"
              src={hotNewsItem.image}
              alt="Hoạt Động Hưởng Ứng Ngày 30/4"
              sx={{
                width: '100%',
                height: '300px',
                objectFit: 'cover',
                borderBottomLeftRadius: '12px',
                borderBottomRightRadius: '12px'
              }}
            />
            <Box>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="text.primary"
                sx={{ mb: 1 }}
              >
                {hotNewsItem.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 2
                }}
              >
                {hotNewsItem.summary}
              </Typography>
              <ReadMoreButton linkTo='/news' id={hotNewsItem.id}/>
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
            {allNews.slice(0, 4).map((item) => (
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
                    borderRadius: 3
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
                    {item.summary}
                  </Typography>
                  <ReadMoreButton linkTo='/news' id={item.id}/>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <ViewAllButton
            onClick={() => {
              navigate('/news')
            }}
            variant="outlined"
            endIcon={<EastIcon />}
          >
            Xem tất cả
          </ViewAllButton>
        </Box>
      </Box>
    </Box>
  )
}

export default News