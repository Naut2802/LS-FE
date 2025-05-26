import { Tabs, Tab, Box, Typography, Pagination, Link, Stack } from '@mui/material';
import { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import NewsImg from '~/assets/News.jpg'

const categories = ['Tin tức chung', 'Sự kiện', 'Tuyển dụng'];

const newsData = [
  {
    id: 1,
    title: 'Hoạt động hưởng ứng ngày 30/4',
    subTitle: 'Những ngày này, các bạn nhỏ tại Little Sunny đã cùng nhau trải qua một hành trình thật ý nghĩa',
    description: '...',
    category: 'Tin tức chung',
    image: `${NewsImg}`
  },
  {
    id: 2,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 3,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 4,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 5,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 6,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 7,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  },
  {
    id: 8,
    title: 'Khám Phá Summer Camp 2025',
    subTitle: 'Ngày 28/4, các lớp kindy tổ chức khám phá summer camp tại công viên thống nhất',
    description: '...',
    category: 'Sự kiện',
    image: `${NewsImg}`
  }
  //...
];

const ITEMS_PER_PAGE = 6

function NewsTabs() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [page, setPage] = useState(1)

  const handleTabChange = (_, newValue) => {
    setSelectedTab(newValue)
    setPage(1)
  }

  const handlePageChange = (_, value) => {
    setPage(value);
  }

  const filteredNews = newsData.filter(
    (item) => item.category === categories[selectedTab]
  );

  const paginatedNews = filteredNews.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  const pageCount = Math.ceil(filteredNews.length / ITEMS_PER_PAGE)

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2
      }}
    >
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        sx={{
          '& .Mui-selected': {
            color: 'white',
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
                alt="Hoạt Động Hưởng Ứng Ngày 30/4"
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
                  {item.subTitle}
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
  );
}

export default NewsTabs