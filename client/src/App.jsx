import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import FloatingIcons from './components/FloatingIcons'
import Otp from './pages/Otp'
import Forgot from './pages/Forgot'

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden
    relative flex items-center justify-center'>
      <FloatingIcons color="bg-gray-600" size="w-64 h-64" top="-5%" left="10%" delay={0}/>
      <FloatingIcons color="bg-gray-600" size="w-48 h-48" top="70%" left="80%" delay={5}/>
      <FloatingIcons color="bg-gray-600" size="w-32 h-32" top="40%" left="-10%" delay={2}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verification-code' element={<Otp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgot-link' element={<Forgot/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App