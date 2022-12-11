import axios from "axios";

const API_URL='https://icanhazdadjoke.com/'

const SEARCH_URL='https://icanhazdadjoke.com/search?term='

export const findRandomJoke = async () => {
  const response = await axios.get(API_URL, {
    headers: {
      Accept: 'application/json'
    }
  })
  
  return response.data
}

export const findJokeForTerm = async (term) => {
  // console.log(term)
  const response = await axios.get(`${SEARCH_URL}${term}`, {
    headers: {
      Accept: 'application/json'
    }
  })

  // console.log(response.data.results)
  return response.data.results
}