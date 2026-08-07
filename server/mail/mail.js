import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { WELCOME_VERIFICATION } from './emailTemplate.js'
dotenv.config()

export const verificationCodeEmail = async (email,verificationCode) => {
    try {
        const transportert = nodemailer.createTransport({
            host: process.env.HOST,
            port: process.env.EMAIL_PORT,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD
            }
        })
        const message = {
            to: email,
            subject: "Verification code",
            html: WELCOME_VERIFICATION.replace("{VERIFICATION_CODE}",verificationCode)
        };
        console.log("Verification email sent successfully")
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}