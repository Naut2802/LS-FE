import Banner from '~/pages/Home/Banner'
import HappyStats from '~/pages/Home/HappyStats'
import Courses from '~/pages/Home/Courses'
import Students from '~/pages/Home/StudentRecognition'
import Facilities from '~/pages/Home/Facilites'
import Teacher from '~/pages/Home/Teachers'
import News from '~/pages/Home/News'
import FreeTrialForm from '~/components/FreeTrialForm'

function Home() {
  return (
    <>
      <Banner />
      <HappyStats />
      <Courses />
      <Students />
      <Facilities />
      <Teacher />
      <News />
      <FreeTrialForm />
    </>
  )
}

export default Home