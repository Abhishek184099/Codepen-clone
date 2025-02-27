import React, { useEffect } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { useGoogleAuth } from '../hooks/useGoogleAuth';
import {useGithubAuth} from "../hooks/useGithubAuth.js"
import { useSignup } from '../hooks/useSignup.js';




export default function Signup() {

  const[showPassword,setShowPassword] = React.useState(false);

  const[info,setInfo] = React.useState(false)
 
  const [input,setInput] = React.useState({
    username : '',
    fullname : '',
    password : '',
    email : "",
  })

  const {googleAuth} = useGoogleAuth();
  const{githubAuth} = useGithubAuth();

  const {signUpWithEmail} = useSignup();

  const handleSubmit = async(e) => {
     e.preventDefault();  
     await signUpWithEmail(input)
  }


  return (
     <div className="w-full h-auto bg-secondary py-4 flex justify-center items-center  mx-auto'">
      
    <div className='bg-primaryText w-1/2 flex flex-col gap-1 rainbow-border box-border '>

      <div className='m-0 flex flex-col bg-inherit justify-center items-center text-white gap-3 py-12'>
        <h1 className='font-semibold text-5xl'>Free</h1>
        <p>Welcome to Codepen</p>
      </div>

      <div className="bg-white w-full flex flex-col gap-3 items-center justify-center py-3 pb-48">
        <button className='bg-secondary text-white text-center p-2 rounded-md border-none outline-none w-80 flex items-center justify-center gap-5' onClick={googleAuth} >
          <FcGoogle className='text-2xl' /> Sign Up With Google
        </button>
        <button className='bg-secondary text-white text-center p-2 rounded-md border-none outline-none w-80 flex justify-center items-center gap-5' onClick={githubAuth}>
          <FaGithub className='text-2xl' />  Sign Up With Github
        </button>
        <p>Or</p>
        <button className='btn btn-sm' onClick={() => {
          setInfo(true)
        }}>
          Sign UP with email
        </button>

        
        {info && (
          <form className="flex gap-3 flex-col mt-3" onSubmit={handleSubmit}>

            <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
              <input type="email" className="grow" placeholder="Email" onChange={(e) => setInput({ ...input, email: e.target.value })}
 />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <FaUser />
              <input type="text" className="grow" placeholder="full name" onChange={(e) => setInput({ ...input, fullname: e.target.value })}/>
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <FaUser />
              <input type="text" className="grow" placeholder="Username" onChange={(e) => setInput({ ...input, username: e.target.value })} />
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <RiLockPasswordFill />
              <input type={showPassword ? "text" : "password"} className="grow" placeholder="password" onChange={(e) => setInput({ ...input, password: e.target.value })}/>
              <span className='cursor-pointer' onClick={()=>{setShowPassword(!showPassword)}}><FaEye /></span>
            </label>

            <button type='submit' className='btn btn-lg'>Submit</button>
          </form>
        )

        }

      </div>

    </div>
      </div>
      

  )
}
