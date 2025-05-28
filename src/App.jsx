import { Routes, Route, Navigate } from 'react-router-dom'
import Header from '~/components/Header'
import Home from '~/pages/Home'
import About from '~/pages/About'
import Teacher from '~/pages/Teacher'
import Student from '~/pages/Student'
import News from '~/pages/News'
import Footer from '~/components/Footer'
import NotFound from '~/pages/404/NotFound'
import ScrollToTop from '~/components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/student' element={<Student />} />
        <Route path='/news' element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
