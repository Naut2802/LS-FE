import Intro from '~/pages/Introduce/Intro'
import TimeLine from '~/pages/Introduce/TimeLine'
import Founder from '~/pages/Introduce/Founder'
import Values from '~/pages/Introduce/Values'
import Partner from '~/pages/Introduce/Partner'
import FreeTrialForm from '~/components/FreeTrialForm'

function Introduce() {
  return (
    <>
      <Intro />
      <TimeLine />
      <Founder />
      <Values />
      <Partner />
      <FreeTrialForm />
    </>
  )
}

export default Introduce