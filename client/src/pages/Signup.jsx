import React from 'react'
import { motion } from 'framer-motion'
import Inputs from '../components/Inputs'
import { Lock, Mail, User } from 'lucide-react'
function Signup() {
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
            <form action="">
                <Inputs
                icon={User}
                type="text"
                placeholder="First Name"
                />
                <Inputs
                icon={User}
                type="text"
                placeholder="Last Name"
                />
                <Inputs
                icon={Mail}
                type="email"
                placeholder="eg. johndoe@gmail.com"
                />
                <Inputs
                icon={Lock}
                type="password"
                placeholder="Password"
                />
            </form>
        </div>
    </motion.div>
  )
}

export default Signup