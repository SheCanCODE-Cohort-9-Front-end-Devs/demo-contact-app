import React, { useState } from 'react'
import ResponseMessage from '../../components/ResponseMessage';

const SignUp = () => {
    const [response, setResponse] = useState({
        type: "",
        content: ""
    });
    const [signUpData, setSignUpData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const SignUpForm = (e) => {
        e.preventDefault();

    }

    const handleInputChange = (e) => {
        setSignUpData({
           ...signUpData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='flex flex-col rounded-sm bg-white w-1/3 max-w-xl p-10'>
            <h1 className='text-2xl font-bold text-center'>Sign Up</h1>
            <p className='text-center'>Fill in form to create a new account.</p>
            <form onSubmit={SignUpForm} className='flex flex-col mt-6 gap-6 mb-8'>
                <input type="text" name='firstName' value={signUpData.firstName} onChange={handleInputChange} placeholder="First name" className='px-2 py-3 rounded-md border-2 border-slate-300' />
                <input type="text" name='lastName' value={signUpData.lastName} onChange={handleInputChange} placeholder="Last Name" className='px-2 py-3 rounded-md border-2 border-slate-300'/>
                <input type="email" name='email' value={signUpData.email} onChange={handleInputChange} placeholder="Email" className='px-2 py-3 rounded-md border-2 border-slate-300'/>
                <input type="tel" name='password' value={signUpData.password} onChange={handleInputChange} placeholder="Password" className='px-2 py-3 rounded-md border-2 border-slate-300'/>
                <button type="submit" className='px-2 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-400'>Sign Up</button>
            </form>
            <ResponseMessage type={response.type} content={response.content} />
        </div>
    )
}

export default SignUp