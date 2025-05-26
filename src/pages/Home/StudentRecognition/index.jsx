import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import EastIcon from '@mui/icons-material/East'
import { students } from '~/data/students'

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
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white'
  }
}))

function StudentRecognition() {
  const navigate = useNavigate()

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
                <Typography variant="h6" component="h2" color="text.primary" sx={{ fontWeight: 'bold' }}>
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
            onClick={() => {
              navigate('/student')
            }}
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