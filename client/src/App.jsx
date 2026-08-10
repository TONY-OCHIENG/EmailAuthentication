import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Code from './pages/Code'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/verification-code' element={<Code/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App