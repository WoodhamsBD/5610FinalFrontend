import axios from "axios"

const COMMENT_API = 'http://localhost:4000/api/comments'
const JOKE_COMMENT_API = 'http://localhost:4000/api/jokes'
const AUTHOR_COMMENT_API = 'http://localhost:4000/api/users'

const api = axios.create({withCredentials: true})

export const createComment = async (comment) => {
  const response = await api.post(COMMENT_API, comment)
  return response.data
}

export const findCommentsByJokeID = async (jokeID) => {
  const response = await api.get(`${JOKE_COMMENT_API}/${jokeID}/comments`)
  return response.data
}

export const findCommentsByAuthor = async (author) => {
  const response = await api.get(`${AUTHOR_COMMENT_API}/${author}/comments`)
  return response.data
}