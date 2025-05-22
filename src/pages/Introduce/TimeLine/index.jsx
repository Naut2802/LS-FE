import { Box, Typography, useMediaQuery } from '@mui/material'
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot
} from '@mui/lab'

const timelineData = [
  {
    time: '2011 - 2015',
    text: 'Thành lập Little Sunny gồm 3 lớp với 30 học viên',
    image: './src/assets/Timeline_1.jpg'
  },
  {
    time: '2015 - 2018',
    text: 'Thành lập Little Sunny với 3 lớp',
    image: './src/assets/Timeline_1.jpg'
  },
  {
    time: '2018 - 2020',
    text: 'Thành lập Little Sunny với 3 lớp',
    image: './src/assets/Timeline_1.jpg'
  },
  {
    time: '2020 - 2023',
    text: 'Thành lập Little Sunny với 3 lớp',
    image: './src/assets/Timeline_1.jpg'
  },
  {
    time: '2023 - nay',
    text: 'Thành lập Little Sunny với 3 lớp',
    image: './src/assets/Timeline_1.jpg'
  }
]

function TimeLine() {
  const isMobile = useMediaQuery('(max-width:960px)')

  return (
    <Box
      sx={{
        bgcolor: '#F3F8FF'
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: 6,
          px: 2,
          textAlign: 'center'
        }}
      >
        <Typography variant="h3" mb={1}>
          HÀNH TRÌNH CỦA LITTLE SUNNY
        </Typography>
        <Typography variant="h6" color='#2C2C2C' mb={6}>
          Hơn 5 năm đồng hành cùng các bạn học viên
        </Typography>

        {/* Timeline */}
        <Box position="relative" px={4}>
          {/* Line */}
          {isMobile ?
            <></>
            :
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 0,
                right: 0,
                height: '4px',
                bgcolor: (theme) => (theme.palette.primary.main),
                zIndex: 1
              }}
            />
          }

          {/* Items */}
          {isMobile ?
            <Box>
              <MuiTimeline position="alternate" sx={{ m: 0 }}>
                {timelineData.map((item, index) => (
                  <TimelineItem key={index} position={index % 2 === 0 ? 'right' : 'left'}>
                    <TimelineOppositeContent
                      sx={{
                        py: 0,
                        mt: 2
                      }}
                    >
                      {item.image && (
                        <Box
                          display='flex'
                          flexDirection='row'
                          alignItems='center'
                          justifyContent={index % 2 === 0 ? 'flex-end' : 'flex-start'}>
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.time}
                            sx={{ width: 80, height: 80, borderRadius: 1, objectFit: 'cover' }}
                          />
                        </Box>
                      )}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot color="primary" />
                      {index < timelineData.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Box>
                        <Typography fontWeight="bold">{item.time}</Typography>
                        <Typography variant="body2">{item.text}</Typography>
                      </Box>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </MuiTimeline>
            </Box>
            :
            <Box display="flex" justifyContent="space-between" zIndex={2} position="relative">
              {timelineData.map((item, index) => {
                const isEven = index % 2 === 0

                return (
                  <Box
                    key={index}
                    sx={{
                      width: '180px',
                      minHeight: '280px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      position: 'relative'
                    }}
                  >
                    {/* Nội dung trên (nếu index chẵn) */}
                    {isEven && (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: '20%'
                          }}
                        >
                          <Typography fontSize={14} textAlign="center" mb={1}>
                            {item.text}
                          </Typography>
                          <Typography
                            fontWeight="bold"
                            fontSize={14}
                            textAlign="center"
                            color='primary.main'
                          >
                            {item.time}
                          </Typography>
                        </Box>

                        {/* Dot */}
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            bgcolor: (theme) => (theme.palette.primary.main),
                            border: '1px solid white',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                            zIndex: 2
                          }}
                        />

                        {/* Ảnh hoặc placeholder */}
                        <Box
                          sx={{
                            width: '100%',
                            maxHeight: '120px',
                            aspectRatio: '1 / 1',
                            borderRadius: 2,
                            mt: isEven ? 2 : 0,
                            mb: isEven ? 0 : 2,
                            overflow: 'hidden',
                            backgroundColor: '#ddd',
                            position: 'absolute',
                            bottom: 0
                          }}
                        >
                          {item.image && (
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.time}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          )}
                        </Box>
                      </>
                    )}

                    {/* Nội dung dưới (nếu index lẻ) */}
                    {!isEven && (
                      <>
                        {/* Ảnh hoặc placeholder */}
                        <Box
                          sx={{
                            width: '100%',
                            maxHeight: '120px',
                            aspectRatio: '1 / 1',
                            borderRadius: 2,
                            mt: isEven ? 2 : 0,
                            mb: isEven ? 0 : 2,
                            overflow: 'hidden',
                            backgroundColor: '#ddd'
                          }}
                        >
                          {item.image && (
                            <Box
                              component="img"
                              src={item.image}
                              alt={item.time}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                              }}
                            />
                          )}
                        </Box>

                        {/* Dot */}
                        <Box
                          sx={{
                            width: 18,
                            height: 18,
                            borderRadius: '50%',
                            bgcolor: (theme) => (theme.palette.primary.main),
                            border: '1px solid white',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translateX(-50%) translateY(-50%)',
                            zIndex: 2
                          }}
                        />

                        <Box
                          sx={{
                            position: 'absolute',
                            bottom: '20%'
                          }}
                        >
                          <Typography
                            fontWeight="bold"
                            fontSize={14}
                            textAlign="center"
                            color='primary.main'
                          >
                            {item.time}
                          </Typography>
                          <Typography fontSize={14} textAlign="center" mb={1}>
                            {item.text}
                          </Typography>
                        </Box>
                      </>
                    )}
                  </Box>
                )
              })}
            </Box>
          }
        </Box>
      </Box>
    </Box>
  )
}

export default TimeLine
