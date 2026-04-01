import React from 'react'
import {BiLogOut} from 'react-icons/bi';

const LogoutButton = () => {
  return (
    <div className='mt-auto p-2 hover:bg-slate-600 rounded cursor-pointer'>
      <BiLogOut className='w-6 h-6 text-white cursor-pointer' />
    </div>
  )
}

export default LogoutButton;
