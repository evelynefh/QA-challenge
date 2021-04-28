import dotenv from 'dotenv'
dotenv.config()

export const CREDENTIALS ={
    VALID_USER :{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_EMAIL :{
        USERNAME: process.env.INVALID_EMAIL,
        PASSWORD: process.env.PASSWORD
    },
    INVALID_PASSWORD:{
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.INVALID_PASS
    }
}