import HomeHero from '~/pages/Home/HomeHero'
import HappyStats from '~/pages/Home/HappyStats'
import Courses from '~/pages/Home/Courses'
import Students from '~/pages/Home/StudentRecognition'
import Facilities from '~/pages/Home/Facilites'
import Teachers from '~/pages/Home/Teachers'
import News from '~/pages/Home/News'
import FreeTrialForm from '~/components/FreeTrialForm'

function Home() {
  return (
    <>
      <HomeHero />
      <HappyStats />
      <Courses />
      <Students />
      <Facilities />
      <Teachers />
      <News />
      <FreeTrialForm />
    </>
  )
}

export default Home