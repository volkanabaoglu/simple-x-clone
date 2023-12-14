import React from 'react'

const UserBox = () => {
  return (
    <div className='flex space-x-4 items-center mb-6 hover:bg-primary-dark hover:text-white hover:p-4 p-2 rounded-full transform transition-all duration-300 py-2 px-4'>
        <img src="https://pbs.twimg.com/profile_images/1683867171762368512/Vij7bEoI_400x400.jpg" alt="Profile" className='w-11 h-11 rounded-full'/>
        <div className='flex flex-col'>
            <span className='font-bold text-md'>Volkan Abaoğlu</span>
            <span className='text-sm text-gray-700'>@volkanabaoglu0</span>
        </div>
        <div className='flex space-x-1'>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
            <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        </div>
    </div>
  )
}

export default UserBox