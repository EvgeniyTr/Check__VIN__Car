import { getEnvVar } from './getEnvVar'

const getVinInfo = async (
  vincode: string,
  vendor: string,
  retries: number = 3
) => {
  try {
    const response = await fetch(
      `${getEnvVar('API_URL')}/${vendor}?vincode=${vincode}&api_key=${getEnvVar(
        'API_KEY'
      )}`
    )
    const data = await response.json()
    return data
  } catch (err) {
    if (retries > 0) {
      return getVinInfo(vincode, vendor, retries - 1)
    } else {
      throw new Error('Maximum retries reached')
    }
  }
}
export default getVinInfo
