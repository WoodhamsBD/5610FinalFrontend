import axios from "axios";

const API_KEY = '&interval=5min&apikey=U6SYQHHQZOYCXAD1'

const SEARCH_URL = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol='


export const findIntraDayBySymbol = async (symbol) => {
  const response = await axios.get(`${SEARCH_URL}${symbol}${API_KEY}`)

  let test = response.data['Time Series (5min)']
  const testArray = Object.entries(test)

  console.log(testArray)

  return testArray
}