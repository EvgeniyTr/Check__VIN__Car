import { addDocument } from './firestore'
import { getEnvVar } from './getEnvVar'

const getTransactionURL = async (
  vincode: string,
  mail: string,
  amount: number,
  vendor: string,
  tries: number = 3
) => {
  try {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        method: 'justPay',
        apiKey: getEnvVar('PAYZE_KEY'),
        apiSecret: getEnvVar('PAYZE_SECRET'),
        data: {
          amount: amount,
          currency: 'GEL',
          callback: getEnvVar('CALLBACK_URL'),
          callbackError: getEnvVar('CALLBACK_URL'),
          preauthorize: false,
          lang: 'EN',
          hookUrl: 'https://corp.com/payze_hook?authorization_token=token',
          hookUrlV2: `${getEnvVar('CALLBACK_URL')}/api/webhook`,
          info: {
            description: `Report for ${vincode}`,
            name: vincode
          },
          hookRefund: false
        }
      })
    }
    const res = await fetch('https://payze.io/api/v1', options)
    const response = await res.json()
    if (!response) throw new Error()

    const { transactionId } = response.response
    await addDocument(transactionId, mail, vincode, vendor)

    return response
  } catch (err) {
    if (tries > 0) {
      return getTransactionURL(vincode, mail, amount, vendor, tries - 1)
    }

    throw new Error('Could not get transaction url')
  }
}

export { getTransactionURL }
