import StudentHero from '~/pages/Student/StudentHero'
import StudentRecognition from '~/components/StudentRecognition'
import Feedbacks from '~/pages/Student/Feedbacks'
import FreeTrialForm from '~/components/FreeTrialForm'

function Student() {
  return (
    <>
      <StudentHero />
      <StudentRecognition viewMoreText='Xem thêm' />
      <Feedbacks />
      <FreeTrialForm />
    </>
  )
}

export default Student