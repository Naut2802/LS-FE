import StudentRecognition from '~/components/StudentRecognition'
import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getCourseById } from '~/data/courseService'

function CourseDetail() {
  const { id } = useParams()
  const [course, setCourse] = useState(null)

  useEffect(() => {
    getCourseById(id).then((data) => {
      setCourse(data)
    })
  }, [id])

  if (!course) return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        py: 6,
        px: 2
      }}
    >
      <Typography variant='h3'>Không tìm thấy khóa học</Typography>
    </Box>
  )

  return (
    <>
      <Box>
        <Typography>{course.title}</Typography>
      </Box>
      <StudentRecognition viewMoreText='Xem tất cả học viên' />
    </>
  )
}

export default CourseDetail