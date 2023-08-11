import { NextApiRequest, NextApiResponse } from 'next'
import {
  validateMail,
  validateVendor,
  validateVincode
} from '../../lib/validate'
import checkVin from '../../lib/check-vin'

interface customNextApiRequest extends NextApiRequest {
  query: {
    vendor: string
    vincode: string
    receiver: string
  }
}

export default async function handler(
  req: customNextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { vendor, vincode, receiver } = req.query
    const condArray = [
      validateMail(receiver),
      validateVendor(vendor),
      validateVincode(vincode)
    ]

    // if successful validation
    if (!condArray.includes(false)) {
      // if vincode report exists
      const reportFound = await checkVin(vincode, vendor)
      res.status(200).send({ vendor, vincode, receiver, reportFound })
    } else {
      res.status(400).send({ msg: 'error' })
    }
  }
}
