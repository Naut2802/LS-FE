import { news } from '~/data/news'

export function getNewsById(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = news.find((n) => n.id === id)
      resolve(result)
    }, 100)
  })
}

export function getAllNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = news.filter((n) => !n.isHot)
      resolve(result)
    }, 100)
  })
}

export function getHotNews() {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = news.find((n) => n.isHot)
      if (!result) result = news.at(0)
      resolve(result)
    }, 100)
  })
}

export function getRelatedPosts(postId, postCategory) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = news.filter((n) => (n.id !== postId && n.category === postCategory)).slice(0, 3)
      resolve(result)
    }, 100)
  })
}