import { useState } from 'react'
import {
  Box,
  Typography,
  MenuItem,
  alpha,
  TextField,
  Snackbar,
  Alert
} from '@mui/material'
import { styled } from '@mui/system'
import FreeTrialBackgroundImg from '~/assets/hero-sections/free-trial-background.jpg'
import { RegisterButton } from '~/components/Buttons/RegisterButton'
import EastIcon from '@mui/icons-material/East'
import { courses } from '~/data/courses'

const subjects = courses.map((course) => course.title)

function capitalizeWords(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const RoundedTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#fff',
    borderRadius: 50,
    fontSize: 16,
    boxShadow: '0 0 5px rgba(0,0,0,0.1)',
    '& fieldset': {
      borderColor: 'transparent'
    },
    '& .MuiInputBase-input': {
      textAlign: 'center'
    },
    '&.Mui-focused fieldset': {
      border: 'none'
    },
    '&:hover fieldset': {
      borderColor: 'transparent'
    }
  }
}))


function FreeTrialForm() {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    subject: ''
  })
  const [errors, setErrors] = useState({
    parentName: false,
    phone: false,
    subject: false
  })
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const FORM_ID = '1FAIpQLSc-reniYidMTvL2cW7WZRi4U6K2LjhlRdq9d6UDLpdaNLUuUw'
  const ENTRY_IDS = {
    parentName: 'entry.819276298',
    phone: 'entry.852211228',
    subject: 'entry.882762842'
  }

  const validateForm = () => {
    const newErrors = {
      parentName: !formData.parentName.trim(),
      phone: !formData.phone.trim() || !/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-5]|9[0-9])[0-9]{7}$/.test(formData.phone),
      subject: !formData.subject.trim()
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(Boolean)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setSnackbar({
        open: true,
        message: 'Vui lòng điền đầy đủ và đúng thông tin.',
        severity: 'error'
      })
      return
    }

    setIsSubmitting(true)

    try {
      const formUrl = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`

      const submitData = new FormData()
      submitData.append(ENTRY_IDS.parentName, formData.parentName)
      submitData.append(ENTRY_IDS.phone, formData.phone)
      submitData.append(ENTRY_IDS.subject, formData.subject)

      await fetch(formUrl, {
        method: 'POST',
        body: submitData,
        mode: 'no-cors'
      })

      setSnackbar({
        open: true,
        message: 'Gửi thành công! Trung tâm sẽ liên hệ với phụ huynh sớm nhất.',
        severity: 'success'
      })
      setFormData({
        parentName: '',
        phone: '',
        subject: ''
      })

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Đã có lỗi xảy ra. Vui lòng thử lại sau.',
        severity: 'error'
      })
    }

    setIsSubmitting(false)
  }

  return (
    <Box
      sx={{
        backgroundImage: `url(${FreeTrialBackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        px: 2,
        position: 'relative',
        zIndex: '1'
      }}
    >
      <Box
        sx={{
          maxWidth: 'lg',
          mx: 'auto',
          py: { xs: 6, md: 10 },
          display: 'flex',
          justifyContent: { xs: 'center', md:'flex-start' },
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 550,
            backgroundColor: (theme) => (alpha(theme.palette.secondary.main, 0.88)),
            borderRadius: 4,
            p: { xs: 3, md: 4 },
            color: '#fff',
            backdropFilter: 'blur(4px)'
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            textAlign="center"
            color='white'
            mb={3}
            sx={{ lineHeight: 1.5 }}
          >
            Kiểm Tra Trình Độ <br /> & Tham Gia Học Thử Miễn Phí
          </Typography>

          <Box display="flex" flexDirection="column" gap={2} alignItems='center'>
            <RoundedTextField
              name='parentName'
              placeholder="Họ tên phụ huynh"
              value={formData.parentName}
              onChange={handleInputChange}
              fullWidth
              FormHelperTextProps={{
                sx: {
                  color: '#ff8080 !important'
                }
              }}
              error={errors.parentName}
              helperText={errors.parentName ? 'Vui lòng nhập họ tên phụ huynh' : ''}
              required
            />
            <RoundedTextField
              type='tel'
              name='phone'
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleInputChange}
              fullWidth
              FormHelperTextProps={{
                sx: {
                  color: '#ff8080 !important'
                }
              }}
              error={errors.phone}
              helperText={errors.phone ? 'Vui lòng nhập số điện thoại hợp lệ' : ''}
              required
            />
            <RoundedTextField
              select
              fullWidth
              FormHelperTextProps={{
                sx: {
                  color: '#ff8080 !important'
                }
              }}
              name='subject'
              defaultValue=""
              value={formData.subject}
              onChange={handleInputChange}
              required
              error={errors.subject}
              helperText={errors.subject ? 'Vui lòng chọn một khóa học' : ''}
              SelectProps={{
                displayEmpty: true,
                renderValue: (selected) =>
                  selected === '' ? 'Khóa học phù hợp với bé' : selected
              }}
              sx={{
                '& .MuiSelect-icon': {
                  color: '#aaa'
                }
              }}
            >
              <MenuItem value="" disabled>
                Khóa học phù hợp với bé
              </MenuItem>
              {subjects.map((subject, index) => {
                let subjectName = capitalizeWords(subject)
                return (
                  <MenuItem key={index} value={subjectName}>{subjectName}</MenuItem>
                )
              })}
            </RoundedTextField>

            <RegisterButton
              onClick={handleSubmit}
              disabled={isSubmitting}
              variant='contained'
              endIcon={<EastIcon />}
            >
              {isSubmitting ? 'Đang gửi. . .' : 'Đăng ký ngay'}
            </RegisterButton>
          </Box>
        </Box>
      </Box>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default FreeTrialForm
