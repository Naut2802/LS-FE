import StudentHero from '~/pages/Student/StudentHero'
import RecognitionList from '~/pages/Student/RecognitionList'
import Feedbacks from '~/pages/Student/Feedbacks'
import FreeTrialForm from '~/components/FreeTrialForm'

function Student() {
  return (
    <>
      <StudentHero />
      <RecognitionList />
      <Feedbacks />
      <FreeTrialForm />
    </>
  )
}

export default Student