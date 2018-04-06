import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

export async function getFields () {
  const url = `${BASE_URL}/get_fields`
  try {
    const response = await axios.get(url)
    console.log('field response --> ', response)
    return response.data.sort()
  } catch (err) {
    console.log('error --> ', err)
    return null
  }
}

export async function search ({ field, query }) {
  const url = `${BASE_URL}/search`
  const body = {
    field,
    query
  }

  try {
    const response = await axios.post(url, body)
    console.log('search response --> ', response.data)
    return response.data
  } catch (err) {
    console.log('error --> ', err)
    return null
  }
}
