import { hashPassword } from "../configs/hashPassword.js"
import { generateVerificationCode } from "../configs/verificationCode.js"
import conn from "../database/db.js"
import { verificationCodeEmail } from "../mail/mail.js"
export const signup = async (request,response) => {
    const { firstName, lastName, email, password} = request.body
    //cheking if all required fields are filled with user details
    if (!firstName || !lastName || !email || !password) {
        return response.status(400).json({success: false, message: "Fill all required fields"})
    }
    //checking password length
    if (password.length < 6) {
        return response.status(400).json({
            success: false, 
            message:"Password length must be greater than five characters"
        })
    }
    //validating email using regex
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!regex.test(email)) {
        return response.status(400).json({
            success: false,
            message:"Enter a valid email"
        })
    }
    //encrypting password before database insertion
    const encryptedPassword = hashPassword(password)
    const verificationToken = generateVerificationCode()
    const verificationTokenExpiresAT = new Date(Date.now() + 24 * 60 * 60 * 1000) 
    //checking if the email exists
    try {
        const sqlQuery = "SELECT email from userEmail WHERE email = ?"
        conn.query(sqlQuery,[email], (error,result) => {
            if (error) return response.status(400).json({success: false, message: error})
            if (result.length > 0) {
                return response.status(400).json({success: false, message: "email already exist"})
            }
        })
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})        
    } 

    try {
        const sqlQuery = "INSERT INTO userEmail(firstName,lastName,email,password,verificationToken,verificationTokenExpiresAT) VALUES(?,?,?,?,?,?)"
        conn.query(sqlQuery,[firstName,lastName,email,encryptedPassword,verificationToken,verificationTokenExpiresAT],(error,results) => {
            if (error) return response.status(400).json({success: false, message: error})
                return response.status(201).json({success: true, message:"Account created successfully"})
        })
        verificationCodeEmail(email,verificationToken)
    } catch (error) {
        console.log(error)
        return response.status(500).json({success: false, message: "Internal server error"})
    }
}

export const verifyCode = async (request, response) => {
    const { code } = request.body
    if (!code) {
        return response.status(400).json({success: false, message: "Enter a valid code"})
    }

    try {
        const sqlQuery = "SELECT verificationToken, verificationTokenExpiresAT FROM userEmail WHERE verificationToken = ?"
        conn.query(sqlQuery,[code],(error,result) => {
            if (error) return response.status(400).json({success: false, message: error})
            if (result.length > 0) {
                if (result[0].verificationToken && result[0].verificationTokenExpiresAT >= Date.now()){
                    const querySQL = "UPDATE userEmail SET isVerified = true WHERE verificationToken = ?"
                    conn.query(querySQL,[code],(err,results) => {
                        if (err) return response.status(400).json({success: false, message: err})
                        return response.status(200).json({success: true, message: "Email verified successfully"})
                    })                    
                } else {
                    return response.status(400).json({success: false, message: "Enter a valid code or code expired"})
                }                
            }
        })
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}