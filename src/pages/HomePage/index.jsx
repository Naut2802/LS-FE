import Banner from '~/components/Banner'
import HappyStats from '~/pages/HomePage/HappyStats'
import Courses from '~/pages/HomePage/Courses'
import Students from '~/pages/HomePage/StudentRecognition'
import Facilities from '~/pages/HomePage/Facilites'
import Teacher from '~/pages/HomePage/Teachers'
import News from '~/pages/HomePage/News'
import FreeTrialForm from '~/components/FreeTrialForm'

function HomePage() {
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

export default HomePage