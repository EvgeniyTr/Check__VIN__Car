const vendors = ['carfax', 'autocheck']
const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const vincodeRegex = new RegExp(
  '^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$'
)

export const validateMail = (mail: string) => Boolean(mail.match(emailRegex))

export const validateVincode = (vincode: string) =>
  Boolean(vincode.match(vincodeRegex))

export const validateVendor = (vendor: string) => vendors.includes(vendor)
