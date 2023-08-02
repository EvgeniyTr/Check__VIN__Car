import { getTransactionURL } from '../../lib/payment'
import { NextApiRequest, NextApiResponse } from 'next'
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { vincode, mail, vendor } = req.body
    try {
      const response = await getTransactionURL(vincode, mail, 5, vendor)
      res.status(200).send(response)
    } catch (err) {
      res.status(400).send({ msg: 'error' })
    }
  }
}
