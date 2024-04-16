import React from 'react'
import { Outlet } from 'react-router-dom';
import ResponseMessage from '../../components/ResponseMessage';

const AuthPages = () => {
  return (
    <div className='flex flex-col bg-slate-200 w-full h-screen justify-center items-center p-5 md:p-0'>
        {/* <ResponseMessage type={'error'} content={'Hello World!'}/> */}
        <Outlet />
    </div>
  )
}

export default AuthPages