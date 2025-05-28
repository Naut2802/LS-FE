import { useState } from 'react'
import { Box, Typography, Avatar, Pagination } from '@mui/material'
import { alpha } from '@mui/material/styles'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'
import { teachers } from '~/data/teachers'

const ITEMS_PER_PAGE = 12

function TeacherTeam() {
  const [page, setPage] = useState(1)
  const [highlightedTeacher, setHighlightedTeacher] = useState(teachers.find(t => t.isHighlighted))

  const handlePageChange = (_, value) => {
    setPage(value)
  }

  const handleHighlightedTeacherChange = (teacher) => {
    setHighlightedTeacher(teacher)
  }

  const paginatedTeachers = teachers.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  )

  return (
    <Box
      sx={{
        maxWidth: 'lg',
        mx: 'auto',
        px: 2,
        py: 6
      }}
    >
      <Typography variant="h3" textAlign="center" mb={4}>
        ĐỘI NGŨ GIÁO VIÊN
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          gap: 4
        }}
      >
        {/* Featured Teacher */}
        <Box
          minWidth={340}
          bgcolor='primary.main'
          borderRadius={3}
          overflow="hidden"
          color="white"
          boxShadow={2}
        >
          <Box
            component="img"
            src={highlightedTeacher.avatar}
            alt="Featured"
            width="100%"
            height={300}
            sx={{
              objectFit: 'cover',
              borderBottomRightRadius: 12,
              borderBottomLeftRadius: 12
            }}
          />
          <Box p={2}>
            <Typography fontWeight="bold">{highlightedTeacher.name}</Typography>
            <Typography fontSize={14}>{highlightedTeacher.subject}</Typography>

            <Box mt={2} fontSize={14}>
              <Box display="flex" alignItems="center" gap={1}><WorkspacePremiumOutlinedIcon /> {highlightedTeacher.score}</Box>
              <Box display="flex" alignItems="center" gap={1}><CheckOutlinedIcon /> {highlightedTeacher.degree}</Box>
            </Box>

            <Box mt={3} fontSize={14} textAlign='center'>
              {highlightedTeacher.quote}
            </Box>
          </Box>
        </Box>

        {/* Teachers Grid */}
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <Box
            display="grid"
            gridTemplateColumns="repeat(3, 160px)"
            gap={2}
            justifyContent="center"
          >
            {paginatedTeachers.map((teacher) => (
              <Box
                key={teacher.id}
                onClick={() => handleHighlightedTeacherChange(teachers.at(teacher.id))}
                sx={{
                  width: '160px',
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 3,
                  boxShadow: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: (theme) => (alpha(theme.palette.primary.light, 0.2))
                  }
                }}
              >
                <Avatar
                  src= {teacher.avatar || ''}
                  sx={{ width: 48, height: 48, mb: 1, bgcolor: '#D8D8D8' }}
                />
                <Typography fontSize={14} textAlign="center">
                  {teacher.name}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Pagination */}
          <Box mt={3} display="flex" justifyContent="center" alignItems="center" gap={1}>
            <Pagination
              count={Math.ceil(teachers.length / ITEMS_PER_PAGE)}
              page={page}
              onChange={handlePageChange}
              shape="circular"
              color="primary"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TeacherTeam