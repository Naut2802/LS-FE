import Intro from '~/pages/StudentRecognition/Intro'
import RecognitionList from '~/pages/StudentRecognition/RecognitionList'
import Feedbacks from '~/pages/StudentRecognition/Feedbacks'
import FreeTrialForm from '~/components/FreeTrialForm'

function StudentRecognition() {
  return (
    <>
      <Intro />
      <RecognitionList />
      <Feedbacks />
      <FreeTrialForm />
    </>
  )
}

export default StudentRecognition