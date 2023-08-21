import { getTransactionURL } from '../../lib/payment'
import { NextApiRequest, NextApiResponse } from 'next'
import { getEnvVar } from '../../lib/getEnvVar'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { vincode, mail, vendor } = req.body
    try {
      const response = await getTransactionURL(
        vincode,
        mail,
        Number(getEnvVar(`${vendor.toUpperCase()}_PRICE`)),
        vendor
      )
      res.status(200).send(response)
    } catch (err) {
      res.status(400).send({ msg: 'error' })
    }
  }
}
