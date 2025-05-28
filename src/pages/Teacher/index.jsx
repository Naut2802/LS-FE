import TeacherHero from '~/pages/Teacher/TeacherHero'
import Highlights from '~/pages/Teacher/Highlights'
import TeacherTeam from '~/pages/Teacher/TeacherTeam'
import TeacherStudentMoments from '~/pages/Teacher/TeacherStudentMoments'
import FreeTrialForm from '~/components/FreeTrialForm'

function Teacher() {
  return (
    <>
      <TeacherHero />
      <Highlights />
      <TeacherTeam />
      <TeacherStudentMoments />
      <FreeTrialForm />
    </>
  )
}

export default Teacher