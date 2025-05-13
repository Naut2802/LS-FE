import Banner from '~/pages/HomePage/Banner'
import ImpressiveStats from '~/pages/HomePage/ImpressiveStats'
import Courses from '~/pages/HomePage/Courses'
import Students from '~/pages/HomePage/StudentRecognition'
import Facilities from '~/pages/HomePage/Facilites'
import Teacher from '~/pages/HomePage/Teachers'
import News from '~/pages/HomePage/News'

function HomePage() {
  return (
    <>
      <Banner />
      <ImpressiveStats />
      <Courses />
      <Students />
      <Facilities />
      <Teacher />
      <News />
    </>
  )
}

export default HomePage