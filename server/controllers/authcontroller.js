
export const signup = async (request,response) => {
    const { firstName, lastName, email, password} = request.body
    //cheking if all required fields are filled with user details
    if (!firstName || !lastName || !email || !password) {
        return response.status(400).json({success: false, message: "Fill all required fields"})
    }
    //checking password length
    if (password.length < 6) {
        return response.status(400).json({
            status: false, 
            message:"Password length must be greater than five characters"
        })
    }
}