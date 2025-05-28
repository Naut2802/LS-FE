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
import FeedbackImg_1 from '~/assets/feedbacks/feedback-1.jpg'
import FeedbackImg_2 from '~/assets/feedbacks/feedback-2.jpg'
import FeedbackImg_3 from '~/assets/feedbacks/feedback-3.jpg'
import FeedbackImg_4 from '~/assets/feedbacks/feedback-4.jpg'
import FeedbackImg_5 from '~/assets/feedbacks/feedback-5.jpg'
import FeedbackImg_6 from '~/assets/feedbacks/feedback-6.jpg'
import FeedbackImg_7 from '~/assets/feedbacks/feedback-7.jpg'
import FeedbackImg_8 from '~/assets/feedbacks/feedback-8.jpg'
import FeedbackImg_9 from '~/assets/feedbacks/feedback-9.jpg'

const ImageContainer = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  cursor: 'pointer',
  '& img': {
    width: '100%',
    height: '100%',
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

function Feedbacks() {
  const [dialogOpen, setDialogOpen] = useState(false)

  // Sample images data
  const allImages = [
    { id: 1, src: FeedbackImg_1, alt: 'Teacher and students Feedback 1' },
    { id: 2, src: FeedbackImg_2, alt: 'Teacher and students Feedback 2' },
    { id: 3, src: FeedbackImg_3, alt: 'Teacher and students Feedback 3' },
    { id: 4, src: FeedbackImg_4, alt: 'Teacher and students Feedback 4' },
    { id: 5, src: FeedbackImg_5, alt: 'Teacher and students Feedback 5' },
    { id: 6, src: FeedbackImg_6, alt: 'Teacher and students Feedback 6' },
    { id: 7, src: FeedbackImg_7, alt: 'Teacher and students Feedback 7' },
    { id: 8, src: FeedbackImg_8, alt: 'Teacher and students Feedback 8' },
    { id: 9, src: FeedbackImg_9, alt: 'Teacher and students Feedback 7' },
    { id: 10, src: FeedbackImg_1, alt: 'Teacher and students Feedback 8' }
  ]

  const totalImages = allImages.length
  const showViewMore = totalImages > 9
  const displayedImages = showViewMore ? allImages.slice(0, 8) : allImages

  const handleViewMoreClick = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  // Layout for 1-8 images: Flex layout
  const renderFlexLayout = () => {
    if (totalImages <= 3) {
      // Simple row layout for 1-3 images
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
            justifyContent: 'center',
            alignItems: 'stretch'
          }}
        >
          {displayedImages.map((image) => (
            <ImageContainer
              key={image.id}
              sx={{
                flex: 1,
                height: '300px',
                maxWidth: { xs: '100%', sm: '350px' }
              }}
            >
              <img src={image.src} alt={image.alt} />
            </ImageContainer>
          ))}
        </Box>
      )
    }

    if (totalImages === 4) {
      // 2x2 grid for 4 images
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <ImageContainer sx={{ flex: 1, height: '250px' }}>
              <img src={displayedImages[0].src} alt={displayedImages[0].alt} />
            </ImageContainer>
            <ImageContainer sx={{ flex: 1, height: '250px' }}>
              <img src={displayedImages[1].src} alt={displayedImages[1].alt} />
            </ImageContainer>
          </Box>
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
    }

    // Flex layout for 5-8 images
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 'lg',
          margin: '0 auto'
        }}
      >
        {/* First row - 3 images */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
          <ImageContainer sx={{ flex: 1, height: '250px' }}>
            <img src={displayedImages[0].src} alt={displayedImages[0].alt} />
          </ImageContainer>
          <ImageContainer sx={{ flex: 1, height: '250px' }}>
            <img src={displayedImages[1].src} alt={displayedImages[1].alt} />
          </ImageContainer>
          <ImageContainer sx={{ flex: 1, height: '250px' }}>
            <img src={displayedImages[2].src} alt={displayedImages[2].alt} />
          </ImageContainer>
        </Box>

        {/* Second row - remaining images */}
        {displayedImages.length > 3 && (
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'column', md: 'row' } }}>
            {displayedImages.slice(3).map((image) => (
              <ImageContainer key={image.id} sx={{ flex: 1, height: '250px' }}>
                <img src={image.src} alt={image.alt} />
              </ImageContainer>
            ))}
          </Box>
        )}
      </Box>
    )
  }

  // Layout for 9+ images: Complex masonry layout
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
            "img6"
            "img7"
            "img8"
            ${showViewMore ? '"img9"' : ''}
          `,
          sm: `
            "img1 img2"
            "img3 img4"
            "img5 img6"
            "img7 img8"
            "img9 ."
          `,
          md: showViewMore ? `
            "img1 img2 img3 img4"
            "img5 img6 img6 img7"
            "img8 img6 img6 img9"
          ` : `
            "img1 img2 img3 img4"
            "img5 img6 img6 img7"
            "img8 img6 img6 img9"
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
            height: { xs: '200px', md: '200px' }
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
            height: { xs: '200px', md: '200px' }
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
            height: { xs: '200px', md: '200px' }
          }}
        >
          <img src={displayedImages[4].src} alt={displayedImages[4].alt} />
        </ImageContainer>
      )}

      {/* Image 6 - Square */}
      {displayedImages[5] && (
        <ImageContainer
          sx={{
            gridArea: 'img6',
            height: { xs: '200px', md: '408px' }
          }}
        >
          <img src={displayedImages[5].src} alt={displayedImages[5].alt} />
        </ImageContainer>
      )}

      {/* Image 7 - Square */}
      {displayedImages[6] && (
        <ImageContainer
          sx={{
            gridArea: 'img7',
            height: { xs: '200px', md: '200px' }
          }}
        >
          <img src={displayedImages[6].src} alt={displayedImages[6].alt} />
        </ImageContainer>
      )}

      {/* Image 8 - Square */}
      {displayedImages[7] && (
        <ImageContainer
          sx={{
            gridArea: 'img8',
            height: { xs: '200px', md: '200px' }
          }}
        >
          <img src={displayedImages[7].src} alt={displayedImages[7].alt} />
        </ImageContainer>
      )}

      {/* Image 9 or View More overlay */}
      {showViewMore ? (
        <ImageContainer
          sx={{
            gridArea: 'img9',
            height: { xs: '200px', md: '200px' }
          }}
          onClick={handleViewMoreClick}
        >
          <img src={allImages[8]?.src} alt={allImages[8]?.alt} />
          <ViewMoreOverlay>
            <ViewMoreText>Xem thêm</ViewMoreText>
          </ViewMoreOverlay>
        </ImageContainer>
      ) : displayedImages[5] && (
        <ImageContainer
          sx={{
            gridArea: 'img9',
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
    if (totalImages >= 9) {
      return renderMasonryLayout()
    } else {
      return renderFlexLayout()
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
            TÂM TÌNH CỦA HỌC VIÊN DÀNH CHO LITTLE SUNNY
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

export default Feedbacks