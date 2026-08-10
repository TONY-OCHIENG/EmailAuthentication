import React from 'react'

function Inputs({icon:Icon,...props}) {
  return (
    <div className='relative mb-6'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <Icon className='h-5 text-gray-950'/>
        </div>
        <input
        {...props}
        className='w-full pl-10 pr-3 py-2 bg-gray-800/50 rounded-lg border border-gray-700
        focus:border-gray-600 focus:ring-gray-500 text-white placeholder-gray-400 transition
        duration-200'
        />
    </div>
  )
}

export default Inputs