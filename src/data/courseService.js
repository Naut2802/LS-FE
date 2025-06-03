import { courses } from '~/data/courses'

export function getCourseById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = courses.find((course) => course.id === id)
      resolve(result)
    }, 100)
  })
}

export function getAllCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(courses)
    }, 100)
  })
}