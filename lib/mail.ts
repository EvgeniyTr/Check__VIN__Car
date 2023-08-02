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
    personalizations: [
      {
        to: [
          {
            email: mail
          }
        ]
      }
    ],
    // from:'mts.sturua@gmail.com',
    // to: mail, // Change to your recipient
    from: {
      email: 'mts.sturua@gmail.com',
      name: 'report'
    },
    replyTo: {
      email: mail,
      address: mail,
      name: 'report'
    },
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
    if (tries > 0) {
      return sendMail(mail, vincode, vendor, pdfBuffer, tries - 1)
    } else {
      throw new Error('Could not send mail')
    }
  }
}
