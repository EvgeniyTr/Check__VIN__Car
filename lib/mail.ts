import { getEnvVar } from './getEnvVar'
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(getEnvVar('SENDGRID_API_KEY'))

export const sendMail = async (
  mail: string,
  vincode: string,
  vendor: string,
  pdfBuffer: Buffer,
  tries: number = 3
) => {
  const msg = {
    to: mail, // Change to your recipient
    from: 'mts.sturua@gmail.com', // Change to your verified sender
    subject: `${vendor} report`,
    html: `<strong>${vendor} report for ${vincode}</strong>`,
    attachments: [
      {
        content: pdfBuffer.toString('base64'),
        filename: 'report.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
        content_id: 'vincode report'
      }
    ]
  }

  try {
    await sgMail.send(msg)
  } catch (err) {
    if (tries > 0) return sendMail(mail, vincode, vendor, pdfBuffer, tries - 1)
    throw new Error('Could not send mail')
  }
}
