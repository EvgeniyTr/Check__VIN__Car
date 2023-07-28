import { getEnvVar } from './getEnvVar'
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(getEnvVar('SENDGRID_API_KEY'))

export const sendMail = async (
  mail: string,
  pdfBuffer: Buffer,
  tries: number = 3
) => {
  const msg = {
    to: mail, // Change to your recipient
    from: 'mts.sturua@gmail.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  }

  try {
    await sgMail.send(msg)
  } catch (err) {
    if (tries > 0) return sendMail(mail, pdfBuffer, tries - 1)
    throw new Error('Could not send mail')
  }
}
