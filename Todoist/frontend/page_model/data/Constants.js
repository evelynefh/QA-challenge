import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS = {
  VALID_USER: {
    // eslint-disable-next-line no-undef
    USERNAME: process.env.USERNAME,
    // eslint-disable-next-line no-undef
    PASSWORD: process.env.PASSWORD
  },
  INVALID_EMAIL: {
    // eslint-disable-next-line no-undef
    USERNAME: process.env.INVALID_EMAIL,
    // eslint-disable-next-line no-undef
    PASSWORD: process.env.PASSWORD
  },
  INVALID_PASSWORD: {
    // eslint-disable-next-line no-undef
    USERNAME: process.env.USERNAME,
    // eslint-disable-next-line no-undef
    PASSWORD: process.env.INVALID_PASS
  }
}
