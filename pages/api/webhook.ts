export default async function (req, res) {
  if (req.method === 'POST') {
    const { PaymentStatus, PaymentId } = req.body

    switch (PaymentStatus) {
      case 'Rejected':
        // remove vincode and mail from database by PaymentId
        res.status(400).send()
      case 'Captured':
        // should generate pdf and send to mail by PaymentId
        res.status(200).send()
      case 'Timeout':
      // remove vincode and mail from database by PaymentId
      default:
        res.status(404).send()
    }
  }
}
