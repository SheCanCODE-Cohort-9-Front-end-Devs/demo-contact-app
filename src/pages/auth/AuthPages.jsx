import React from 'react'
import { Outlet } from 'react-router-dom';

const AuthPages = () => {
  return (
    <div className='flex flex-col bg-slate-400 w-full h-screen justify-center items-center'>
        <Outlet />
    </div>
  )
}

export default AuthPages