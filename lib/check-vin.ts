const checkVin = async (
  vincode: string,
  vendor: string,
  retries: number = 0
): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.API_URL}/${vendor}/check?vincode=${vincode}&api_key=${process.env.API_KEY}`
    )
    const statusCode = response.status
    // report found
    if (statusCode === 200) return true
    // report not found
    if (statusCode === 404) return false
    // server error
    if (!response.ok) throw new Error()
  } catch (err) {
    if (retries > 0) {
      return checkVin(vincode, vendor, retries - 1)
    } else {
      throw new Error('Maximum retries reached')
    }
  }
}

export default checkVin
