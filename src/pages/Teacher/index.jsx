import TeacherIntro from '~/pages/Teacher/Intro'
import Highlights from '~/pages/Teacher/Highlights'
import TeacherTeam from '~/pages/Teacher/TeacherTeam'
import TeacherStudentMoments from '~/pages/Teacher/TeacherStudentMoments'
import FreeTrialForm from '~/components/FreeTrialForm'

function Teacher() {
  return (
    <>
      <TeacherIntro />
      <Highlights />
      <TeacherTeam />
      <TeacherStudentMoments />
      <FreeTrialForm />
    </>
  )
}

export default Teacher