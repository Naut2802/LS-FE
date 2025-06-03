import { Box, Typography, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

function RelatedPosts({ relatedPosts }) {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        textAlign: 'left',
        px: 2
      }}
    >
      <Box display="flex" justifyContent='center' flexWrap="wrap" gap={3}>
        {relatedPosts ? relatedPosts.map((item) => (
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
                src={item.image}
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
        )) : (
          <></>
        )}
      </Box>
    </Box>
  )
}

export default RelatedPosts