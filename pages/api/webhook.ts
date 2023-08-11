import { NextApiRequest, NextApiResponse } from 'next'
import {
  deleteDocumentById,
  updateSentMail,
  getDocumentById
} from '../../lib/firestore'
import getVinInfo from '../../lib/get-vin-info'
import generatePDF from '../../lib/generatePDF'
import { sendMail } from '../../lib/mail'
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { PaymentStatus, PaymentId } = req.body

    switch (PaymentStatus) {
      case 'Timeout':
        await deleteDocumentById(PaymentId)
        res.send({})
      case 'Rejected':
        await deleteDocumentById(PaymentId)
        res.send({})
      case 'Captured':
        try {
          const doc = await getDocumentById(PaymentId)
          const data = await getVinInfo(doc.vincode, doc.vendor)
          let pdfBuffer

          if (doc.vendor === 'carfax') {
            pdfBuffer = await generatePDF(data.carfax_data)
          } else if (doc.vendor === 'autocheck') {
            pdfBuffer = await generatePDF(data.autocheck_data)
          }
          await sendMail(doc.mail, doc.vincode, doc.vendor, pdfBuffer)
          await updateSentMail(PaymentId)
          res.send({})
        } catch (err) {
          res.send({})
        }
    }
  }
}

export const config = {
  api: {
    externalResolver: true
  }
}
