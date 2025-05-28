import Hero from '~/pages/Students/StudentHero'
import RecognitionList from '~/pages/Students/RecognitionList'
import Feedbacks from '~/pages/Students/Feedbacks'
import FreeTrialForm from '~/components/FreeTrialForm'

function Student() {
  return (
    <>
      <Hero />
      <RecognitionList />
      <Feedbacks />
      <FreeTrialForm />
    </>
  )
}

export default Student