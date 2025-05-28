import AboutHero from '~/pages/About/AboutHero'
import TimeLine from '~/pages/About/TimeLine'
import Founder from '~/pages/About/Founder'
import Values from '~/pages/About/Values'
import Partner from '~/pages/About/Partner'
import FreeTrialForm from '~/components/FreeTrialForm'

function About() {
  return (
    <>
      <AboutHero />
      <TimeLine />
      <Founder />
      <Values />
      <Partner />
      <FreeTrialForm />
    </>
  )
}

export default About