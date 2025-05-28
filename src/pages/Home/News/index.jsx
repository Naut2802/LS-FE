import { Box, Typography, Link } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { news } from '~/data/news'
import { ViewAllButton } from '~/components/Buttons/ViewAllButton'
import EastIcon from '@mui/icons-material/East'

function News() {
  const navigate = useNavigate()

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
              src={news.at(0).image}
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
                {news.at(0).title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {news.at(0).subTitle}
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  p: '10px',
                  color: '#FF8F19',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                    bgcolor: '#f5f6fa',
                    borderRadius: '20px'
                  }
                }}
              >
                Đọc tiếp →
              </Link>
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
            {news.slice(0, 4).map((item) => (
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
                    {item.subTitle}
                  </Typography>
                  <Link
                    href="#"
                    underline="none"
                    sx={{
                      p: '10px',
                      color: '#FF8F19',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      '&:hover': {
                        textDecoration: 'underline',
                        bgcolor: '#f5f6fa',
                        borderRadius: '20px'
                      }
                    }}
                  >
                    Đọc tiếp →
                  </Link>
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