import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { RESET_LINK, WELCOME_EMAIL, WELCOME_VERIFICATION } from './emailTemplate.js'
dotenv.config()

export const verificationCodeEmail = async (email,verificationCode) => {
    try {
        const transporter = nodemailer.createTransport({
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
        const info = await transporter.sendMail(message);
        console.log("Message sent", info.messageId);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const welcomeEmail = async (email,firstName) => {
   try {
        const transporter = nodemailer.createTransport({
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
            subject: "Welcome to App",
            html: WELCOME_EMAIL.replace("{first_name}",firstName)
        };
        const info = await transporter.sendMail(message);
        console.log("Message sent", info.messageId);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

export const resetLink = async (email,url) => {
    try {
        const transporter = nodemailer.createTransport({
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
            subject: "Welcome to App",
            html: RESET_LINK.replace("{RESET_LINK}",url)
        };
        const info = await transporter.sendMail(message);
        console.log("Message sent", info.messageId);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }    
}