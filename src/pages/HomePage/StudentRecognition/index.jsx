import React from 'react'
import { Box, Typography, Card, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import EastIcon from '@mui/icons-material/East'

// Styled components
const StudentCard = styled(Card)(({ theme }) => ({
  height: '180px',
  width: '100%',
  boxShadow: 'none',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '20px'
}))

const StudentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1)
}))

const StudentSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(3),
  justifyContent: 'space-between'
}))

const StudentItem = styled(Box)(({ theme }) => ({
  width: `calc(25% - ${theme.spacing(3)})`,
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

const StudentRecognition = () => {
  const students = [
    { id: 1, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 2, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 3, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 4, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 5, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 6, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: true },
    { id: 7, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false },
    { id: 8, name: 'Nguyễn Văn A', class: 'Lớp Kindy 1', highlighted: false }
  ]

  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box maxWidth='lg' mx='auto' textAlign='center'>
        <Typography variant='h3' fontWeight='bold' color='#FF8F19' gutterBottom>
          VINH DANH HỌC VIÊN
        </Typography>
        <Typography variant='subtitle1' color='text.primary' maxWidth='md' mx='auto' sx={{ mb: 4 }}>
          giới thiệu sơ qua về chương trình
        </Typography>

        <StudentSection>
          {students.map((student) => (
            <StudentItem key={student.id}>
              <StudentContainer>
                <StudentCard>
                  {/* Photo placeholder - No content needed as per requirements */}
                </StudentCard>
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