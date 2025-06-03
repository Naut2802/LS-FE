import { Tabs, Tab, Box, Typography, Pagination, Stack } from '@mui/material'
import { useState, useEffect } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import { useNavigate } from 'react-router-dom'
import { getAllNews } from '~/data/newsService'

const categories = ['Tin tức chung', 'Sự kiện', 'Tuyển dụng']

const ITEMS_PER_PAGE = 6

function NewsTabs() {
  const [allNews, setAllNews] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedTab, setSelectedTab] = useState(0)
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    getAllNews().then((data) => {
      setAllNews(data)
      setLoading(false)
    })
  }, [])

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue)
    setPage(1)
  }

  const handlePageChange = (_, value) => {
    setPage(value)
  }

  const filteredNews = allNews.filter(
    (item) => item.category === categories[selectedTab]
  )

  const paginatedNews = filteredNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  const pageCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)

  if (loading) return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2
      }}
    >
      <Typography variant='h3'>Đang tải tin tức</Typography>
    </Box>
  )

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2,
        position: 'relative',
        zIndex: '1'
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        sx={{
          color: '#97A0AF',
          '& .Mui-selected': {
            color: 'white !important',
            backgroundColor: (theme) => (theme.palette.secondary.main),
            borderRadius: '8px 8px 0 0'
          },
          '& .MuiTabs-indicator': {
            display: 'none'
          },
          borderBottom: 'solid 2px #97A0AF'
        }}
      >
        {categories.map((category, index) => (
          <Tab key={index} label={category} />
        ))}
      </Tabs>

      {/* News Items */}
      <Box mt={3} display="flex" justifyContent='center' flexWrap="wrap" gap={3}>
        {paginatedNews.map((item) => (
          <Box
            key={item.id}
            sx={{
              flex: {
                xs: '1 1 calc(100% - 24px)',
                sm: '1 1 calc(50% - 24px)',
                md: '1 1 calc(33.33% - 24px)'
              },
              maxWidth: {
                xs: '100%',
                sm: 'calc(50% - 24px)',
                md: 'calc(33.33% - 24px)'
              },
              mt: 4,
              cursor: 'pointer'
            }}
            onClick={() => navigate(`/news/${item.id}`)}
          >
            <Box
              sx={{
                flex: 1,
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: 'none',
                backgroundColor: 'white'
              }}
            >
              <Box
                component="img"
                src={item.image} // Thay bằng đường dẫn ảnh thực tế
                alt={item.title}
                sx={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  borderBottomLeftRadius: 16,
                  borderBottomRightRadius: 16
                }}
              />
              <Box>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <PlayArrowIcon sx={{ color: 'primary.main', fontSize: '16px', fontWeight: '400' }} />
                  <Typography sx={{ color: 'primary.main', fontSize: '16px', fontWeight: '400' }}>
                    {item.category}
                  </Typography>
                </Stack>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{ mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {item.summary}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Pagination */}
      <Box mt={3} display="flex" justifyContent="center">
        {pageCount > 1 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        )}
      </Box>
    </Box>
  )
}

export default NewsTabs