import TeacherImg_1 from '~/assets/teachers/founder.jpg'

export const teachers = Array.from({ length: 18 }, (_, i) => ({
  id: '' + i,
  name: 'Ms. Huỳnh Thảo Nguyên',
  quote: 'Một người giáo viên giỏi là một người có thể làm cho học viên của mình cảm thấy học như không học',
  score: '8.0 IELTS Overall',
  degree: 'Tốt nghiệp đại học Sài Gòn',
  subject: 'Giáo viên kỹ năng sống',
  avatar: i === 0 ? TeacherImg_1 : null,
  isHighlighted: i === 0 ? true : false
}))