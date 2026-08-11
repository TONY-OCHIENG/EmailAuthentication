import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Inputs from '../components/Inputs'
import { Loader, Lock, Mail, User } from 'lucide-react'
import Password from './Password'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth"
function Signup() {
    const [values,setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    })
    const [isLoading, setLoading] = useState(false)
    const navigate = useNavigate()
    const handleValue = (event) => {
        const { value, name} = event.target
        setValues((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        axios.post(`${API_URL}/signup`,values)
        .then((response) => {
            if (response.data.success) {
                toast.success(response.data.message)
                navigate('/verification-code')
            } else {
                toast.error(response.data.message)
            }
        })
        .catch((error) => {
            console.log(error)
        })
    }
  return (
    <motion.div
    initial={{opacity: 0, y:20}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    className='max-w-md w-full px-2  bg-gray-800/50 backdrop-filter backdrop-blur-xl shadow-xl overflow-hidden rounded-2xl'
    >
        <div className='p-8'>
            <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-gray-400 to-gray-600
            text-transparent bg-clip-text'>Create account</h2>
            <form action="" onSubmit={handleSubmit}>
                <Inputs
                icon={User}
                type="text"
                name="firstName"
                onChange={handleValue}
                placeholder="First Name"
                />
                <Inputs
                icon={User}
                type="text"
                name="lastName"
                onChange={handleValue}
                placeholder="Last Name"
                />
                <Inputs
                icon={Mail}
                type="email"
                name="email"
                onChange={handleValue}
                placeholder="Email"
                />
                <Inputs
                icon={Lock}
                type="password"
                name="password"
                onChange={handleValue}
                placeholder="Password"
                />
                <motion.button
                className='mt-5 w-full py-3 px-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white
                font-bold rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500
                focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                type='submit'
                disabled={isLoading}
                >
                    {isLoading ? <Loader className=' animate-spin mx-auto' size={24} /> : "Sign Up"}
                </motion.button>
                <p className='mt-6 text-xs text-gray-300 '>Already have an Account <Link to={'/login'} className='font-extrabold'>Click to login</Link></p>
            </form>
        </div>
    </motion.div>
  )
}

export default Signup