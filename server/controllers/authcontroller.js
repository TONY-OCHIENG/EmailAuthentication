import { hashPassword } from "../configs/hashPassword.js"

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
    //encrypting password befor database insertion
    const encryptedPassword = hashPassword(password)
}