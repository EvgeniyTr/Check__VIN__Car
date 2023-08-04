import { getEnvVar } from './getEnvVar'
const checkBalance = async (retries: number = 0): Promise<boolean> => {
  try {
    const response = await fetch(
      `${getEnvVar('API_URL')}/carfax/balance?&api_key=${getEnvVar('API_KEY')}`
    )

    const balance = await response.json()
    if (!response.ok) throw new Error()

    if (balance.message >= 3) {
      return true
    } else {
      return false
    }
  } catch (err) {
    if (retries > 0) {
      return checkBalance(retries - 1)
    } else {
      throw new Error('Maximum retries reached')
    }
  }
}

export default checkBalance
