import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

export async function getColumns () {
  const url = `${BASE_URL}/get_columns`
  try {
    const response = await axios.get(url)
    console.log('response --> ', response)
    return response
  } catch (err) {
    console.log('error --> ', err)
    return null
  }
}
