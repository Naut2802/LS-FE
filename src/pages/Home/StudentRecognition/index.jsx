import React from 'react'
import { Box, Typography, Card, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import EastIcon from '@mui/icons-material/East'

// Styled components
const StudentCard = styled(Box)(() => ({
  height: '300px',
  width: '100%',
  boxShadow: 'none',
  borderRadius: '20px',
  objectFit: 'cover',
  display: 'block'
}))

const StudentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  gap: theme.spacing(1)
}))

const StudentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'space-between'
}))

const StudentItem = styled(Box)(({ theme }) => ({
  width: `calc(33% - ${theme.spacing(3)})`,
  [theme.breakpoints.down('lg')]: {
    width: `calc(50% - ${theme.spacing(3)})`
  },
  [theme.breakpoints.down('md')]: {
    width: `calc(50% - ${theme.spacing(3)})`
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%'
  }
}))

const ViewAllButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 3),
  borderRadius: '24px',
  border: `1px solid ${theme.palette.warning.main}`,
  color: theme.palette.warning.main,
  '&:hover': {
    backgroundColor: theme.palette.warning.light,
    color: 'white'
  }
}))

function StudentRecognition() {
  const students = [
    { id: 1, name: 'Phạm An Vy', image: './src/assets/AnVy.jpg', class: 'Lớp Kindy 1', highlighted: false },
    { id: 2, name: 'Nguyễn Huynh Gia Gia', image: './src/assets/GiaGia.jpg', class: 'Lớp Kindy 1', highlighted: false },
    { id: 3, name: 'Lê Hoàng Nam', image: './src/assets/HoangNam.jpg', class: 'Lớp Kindy 1', highlighted: false },
    { id: 4, name: 'Nguyễn Cát Bảo Ngọc', image: './src/assets/BaoNgoc.jpg', class: 'Lớp Kindy 1', highlighted: false },
    { id: 5, name: 'Minh Châu', image: './src/assets/MinhChau.jpg', class: 'Lớp Kindy 1', highlighted: false },
    { id: 6, name: 'Khả Doanh', image: './src/assets/KhaDoanh.jpg', class: 'Lớp Kindy 1', highlighted: true }
  ]

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box maxWidth='lg' mx='auto' textAlign='center'>
        <Typography variant='h3' gutterBottom>
          VINH DANH HỌC VIÊN
        </Typography>
        <Typography variant='subtitle1' color='text.primary' maxWidth='md' mx='auto' sx={{ mb: 4 }}>
          giới thiệu sơ qua về chương trình
        </Typography>

        <StudentSection>
          {students.map((student) => (
            <StudentItem key={student.id}>
              <StudentContainer>
                <StudentCard component='img' src={student.image} alt={student.name}/>
                <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                  {student.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {student.class}
                </Typography>
              </StudentContainer>
            </StudentItem>
          ))}
        </StudentSection>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <ViewAllButton
            variant="outlined"
            endIcon={<EastIcon />}
          >
            Xem tất cả học viên
          </ViewAllButton>
        </Box>
      </Box>
    </Box>
  )
}

export default StudentRecognition