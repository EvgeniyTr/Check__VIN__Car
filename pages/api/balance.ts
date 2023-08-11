import checkBalance from '../../lib/balance'
import { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const response = await checkBalance()
      console.log(response)
      if (!response) res.status(404).send({ msg: 'no balance' })
      res.status(200).send(response)
    } catch (err) {
      res.status(400).send({ msg: 'error' })
    }
  }
}
