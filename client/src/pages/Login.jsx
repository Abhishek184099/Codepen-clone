import React from 'react'
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className='max-w-screen-xl mx-auto flex h-screen'>
    <div className='flex-1 hidden lg:flex items-center  justify-center'>
        
    </div>
    <div className='flex-1 flex flex-col justify-center items-center'>
        <form className='flex gap-4 flex-col'   >
            <h1 className='text-4xl font-extrabold text-white'>Log In</h1>
            <label className='input input-bordered rounded flex items-center gap-2'>
                <input
                    type='text'
                    className='grow'
                    placeholder='username'
                    name='username'
                    
                />
            </label>

            <label className='input input-bordered rounded flex items-center gap-2'>
                <input
                    type='password'
                    className='grow'
                    placeholder='Password'
                    name='password'
                                          
                />
            </label>
            <button className='btn rounded-full bg-green-600  text-white'>
                Login
            </button>
             <p className='text-red-500'>error.message</p>
        </form>
        <div className='flex flex-col gap-2 mt-4'>
            <p className='text-white text-lg'>{"Don't"} have an account?</p>
            <Link to='/home/signup'>
                <button className='btn rounded-full btn-secondary text-white btn-outline w-full'>Sign up</button>
            </Link>
        </div>
    </div>
</div>

  )
}
