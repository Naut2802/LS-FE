import React, { useState } from 'react'
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import MomentImg_1 from '~/assets/Moment_1.jpg'
import MomentImg_2 from '~/assets/Moment_2.jpg'
import MomentImg_3 from '~/assets/Moment_3.jpg'
import MomentImg_4 from '~/assets/Moment_4.jpg'
import MomentImg_5 from '~/assets/Moment_5.jpg'
import MomentImg_6 from '~/assets/Moment_6.jpg'
import MomentImg_7 from '~/assets/Moment_7.jpg'

const ImageContainer = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  cursor: 'pointer',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease'
  },
  '&:hover img': {
    transform: 'scale(1.05)'
  }
}))

const ViewMoreOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
}))

const ViewMoreText = styled(Typography)(() => ({
  color: 'white',
  fontSize: '18px',
  fontWeight: 600,
  textAlign: 'center'
}))

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    maxWidth: '90vw',
    maxHeight: '90vh',
    margin: theme.spacing(2)
  }
}))

function TeacherStudentMoments() {
  const [dialogOpen, setDialogOpen] = useState(false)

  // Sample images data
  const allImages = [
    { id: 1, src: MomentImg_1, alt: 'Teacher and students moment 1' },
    { id: 2, src: MomentImg_2, alt: 'Teacher and students moment 2' },
    { id: 3, src: MomentImg_3, alt: 'Teacher and students moment 3' },
    { id: 4, src: MomentImg_4, alt: 'Teacher and students moment 4' },
    { id: 5, src: MomentImg_5, alt: 'Teacher and students moment 5' },
    { id: 6, src: MomentImg_6, alt: 'Teacher and students moment 6' },
    { id: 7, src: MomentImg_7, alt: 'Teacher and students moment 7' },
    { id: 8, src: MomentImg_1, alt: 'Teacher and students moment 8' },
    { id: 9, src: MomentImg_2, alt: 'Teacher and students moment 9' },
    { id: 10, src: MomentImg_3, alt: 'Teacher and students moment 10' }
  ]

  const totalImages = allImages.length
  const showViewMore = totalImages > 6
  const displayedImages = showViewMore ? allImages.slice(0, 5) : allImages

  const handleViewMoreClick = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  // Layout for 1-3 images: Simple row layout
  const renderSimpleLayout = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        justifyContent: 'center',
        alignItems: 'stretch'
      }}
    >
      {displayedImages.map((image, index) => (
        <ImageContainer
          key={image.id}
          sx={{
            flex: 1,
            height: '300px',
            maxWidth: { xs: '100%', sm: '350px' },
            border: index === 0 ? '3px solid #2196F3' : 'none'
          }}
        >
          <img src={image.src} alt={image.alt} />
        </ImageContainer>
      ))}
    </Box>
  )

  // Layout for 4 images: 2x2 grid
  const render4ImagesLayout = () => (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      {/* First row - 2 images */}
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <ImageContainer
          sx={{
            flex: 1,
            height: '250px',
            border: '3px solid #2196F3'
          }}
        >
          <img src={displayedImages[0].src} alt={displayedImages[0].alt} />
        </ImageContainer>
        <ImageContainer sx={{ flex: 1, height: '250px' }}>
          <img src={displayedImages[1].src} alt={displayedImages[1].alt} />
        </ImageContainer>
      </Box>

      {/* Second row - 2 images */}
      <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <ImageContainer sx={{ flex: 1, height: '250px' }}>
          <img src={displayedImages[2].src} alt={displayedImages[2].alt} />
        </ImageContainer>
        <ImageContainer sx={{ flex: 1, height: '250px' }}>
          <img src={displayedImages[3].src} alt={displayedImages[3].alt} />
        </ImageContainer>
      </Box>
    </Box>
  )

  // Layout for 5-6+ images: Complex masonry layout
  const renderMasonryLayout = () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)'
        },
        gridTemplateRows: {
          xs: 'auto',
          md: 'repeat(3, 200px)'
        },
        gap: 2,
        gridTemplateAreas: {
          xs: `
            "img1"
            "img2" 
            "img3"
            "img4"
            "img5"
            ${showViewMore ? '"img6"' : ''}
          `,
          sm: showViewMore ? `
            "img1 img2"
            "img3 img4"
            "img5 img6"
          ` : displayedImages.length === 6 ? `
            "img1 img2"
            "img3 img4"
            "img5 img6"
          ` : displayedImages.length === 5 ? `
            "img1 img2"
            "img3 img4"
            "img5 ."
          ` : `
            "img1 img2"
            "img3 ."
          `,
          md: showViewMore ? `
            "img1 img1 img2 img3"
            "img4 img5 img5 img3"
            "img4 img5 img5 img6"
          ` : `
            "img1 img1 img2 img3"
            "img4 img5 img5 img3"
            "img4 img5 . ."
          `
        }
      }}
    >
      {/* Image 1 - Large rectangle with blue border */}
      <ImageContainer
        sx={{
          gridArea: 'img1',
          height: { xs: '200px', md: '200px' }
        }}
      >
        <img src={displayedImages[0]?.src} alt={displayedImages[0]?.alt} />
      </ImageContainer>

      {/* Image 2 - Tall rectangle */}
      {displayedImages[1] && (
        <ImageContainer
          sx={{
            gridArea: 'img2',
            height: { xs: '200px', md: '200px' }
          }}
        >
          <img src={displayedImages[1].src} alt={displayedImages[1].alt} />
        </ImageContainer>
      )}

      {/* Image 3 - Tall rectangle */}
      {displayedImages[2] && (
        <ImageContainer
          sx={{
            gridArea: 'img3',
            height: { xs: '200px', md: '408px' }
          }}
        >
          <img src={displayedImages[2].src} alt={displayedImages[2].alt} />
        </ImageContainer>
      )}

      {/* Image 4 - Square */}
      {displayedImages[3] && (
        <ImageContainer
          sx={{
            gridArea: 'img4',
            height: { xs: '200px', md: '408px' }
          }}
        >
          <img src={displayedImages[3].src} alt={displayedImages[3].alt} />
        </ImageContainer>
      )}

      {/* Image 5 - Square */}
      {displayedImages[4] && (
        <ImageContainer
          sx={{
            gridArea: 'img5',
            height: { xs: '200px', md: '408px' }
          }}
        >
          <img src={displayedImages[4].src} alt={displayedImages[4].alt} />
        </ImageContainer>
      )}

      {/* Image 6 or View More overlay */}
      {showViewMore ? (
        <ImageContainer
          sx={{
            gridArea: 'img6',
            height: { xs: '200px', md: '200px' }
          }}
          onClick={handleViewMoreClick}
        >
          <img src={allImages[5]?.src} alt={allImages[5]?.alt} />
          <ViewMoreOverlay>
            <ViewMoreText>Xem thêm</ViewMoreText>
          </ViewMoreOverlay>
        </ImageContainer>
      ) : displayedImages[5] && (
        <ImageContainer
          sx={{
            gridArea: 'img6',
            height: { xs: '200px', md: '200px' }
          }}
        >
          <img src={displayedImages[5].src} alt={displayedImages[5].alt} />
        </ImageContainer>
      )}
    </Box>
  )

  // Choose layout based on number of images
  const renderLayout = () => {
    if (totalImages <= 3) {
      return renderSimpleLayout()
    } else if (totalImages === 4) {
      return render4ImagesLayout()
    } else {
      return renderMasonryLayout()
    }
  }

  return (
    <Box sx={{ bgcolor: '#F3F8FF' }}>
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: 6,
          px: 2
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              color: 'primary.main'
            }}
          >
            KHOẢNH KHẮC GIỮA GIÁO VIÊN VÀ HỌC VIÊN
          </Typography>
        </Box>

        <Box sx={{ maxWidth: '1200px', margin: '0 auto' }}>
          {renderLayout()}
        </Box>

        {/* Popup Dialog */}
        {showViewMore && (
          <StyledDialog
            open={dialogOpen}
            onClose={handleCloseDialog}
            maxWidth="lg"
            fullWidth
          >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: 'warning.main', fontWeight: 'bold' }}>
                Tất cả khoảnh khắc
              </Typography>
              <IconButton onClick={handleCloseDialog} size="small">
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  mt: 1
                }}
              >
                {allImages.map((image) => (
                  <Box
                    key={image.id}
                    sx={{
                      width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 11px)', lg: 'calc(25% - 12px)' }
                    }}
                  >
                    <ImageContainer sx={{ height: '200px' }}>
                      <img src={image.src} alt={image.alt} />
                    </ImageContainer>
                  </Box>
                ))}
              </Box>
            </DialogContent>
          </StyledDialog>
        )}
      </Box>
    </Box>
  )
}

export default TeacherStudentMoments