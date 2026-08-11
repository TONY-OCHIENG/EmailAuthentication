import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import axios from 'axios'
import toast from 'react-hot-toast'
const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth"
function Otp() {
  const [verificationCode,setCode] = useState(["","","","","",""])
  const inputRef = useRef([])
  const [isLoading,setLoading] = useState(false)
  const navigate = useNavigate()
  const handleChange = (index, value) => {
    const newCode = [...verificationCode];
		// Handle pasted content
		if (value.length > 1) {
			const pastedCode = value.slice(0, 6).split("");
			for (let i = 0; i < 6; i++) {
				newCode[i] = pastedCode[i] || "";
			}
            
			setCode(newCode);

			// Focus on the last non-empty input or the first empty one
			const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
			const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
			inputRef.current[focusIndex].focus();
		} else {
			newCode[index] = value;
			setCode(newCode);

			// Move focus to the next input field if value is entered
			if (value && index < 5) {
				inputRef.current[index + 1].focus();
			}
	  	}
    }
    const handlekey = (index,e) => {
      if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
			inputRef.current[index - 1].focus();
		 }
    }
    const handleSubmit = (event) => {
      event.preventDefault()
      const code = verificationCode.join("")
      console.log(code)
      setLoading(!isLoading)
      try {
        axios.post(`${API_URL}/verifyCode`,{code})
        .then((response) => {

          if (response.data.success) {
            setLoading(false)
            navigate("/login")
            toast.success(response.data.message)
          } else {
            toast.error(response.data.message)
            setLoading(false)
          }
        })
        .catch((error) => {
          console.log(error)
        })
        
      } catch (error) {
        console.log(error)
      }

    }
  return (
    <div className='max-w-md bg-gray-800/50  backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-gray-800/50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full max-w-md'
      >
          <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-400 to-gray-500 text-transparent bg-clip-text'>
		       Verify Your Email
		      </h2>
		      <p className='text-center text-gray-300 mb-6'>Enter the 6-digit verification code sent to your email address.</p>
      <form action="" className='space-y-6' onSubmit={handleSubmit}>
        <div className='flex justify-between'>
          {
            verificationCode.map((digit,index) => (
              <input
              key={index}
              ref={(el) => (inputRef.current[index] = el)}
              type='text'
							maxLength='6'
							value={digit}
							onChange={(e) => handleChange(index, e.target.value)}
							onKeyDown={(e) => handlekey(index, e)}
							className='w-12 h-12 text-center text-2xl font-bold bg-gray-700 text-white border-2 border-gray-600 rounded-lg focus:border-white focus:outline-none'
              />
            ))
          }
        </div>
        <motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type='submit'
						disabled={isLoading || verificationCode.some((digit) => !digit)}
						className='w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 disabled:opacity-50'
			  >
						{isLoading ? "Verifying..." : "Verify Email"}
			</motion.button>
      </form>
      </motion.div>
    </div>
  )
}

export default Otp