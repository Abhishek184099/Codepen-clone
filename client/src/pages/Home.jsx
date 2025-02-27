import React, { useState } from 'react'
import { BiChevronLeftSquare } from "react-icons/bi";
import { BiChevronRightSquare } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import {Routes,Route, Navigate} from "react-router-dom"
import { logo } from "../assets/index.js"
import { Link } from "react-router-dom";
import '../index.css'
import Project from './Project.jsx';
import Signup from '../components/Signup.jsx';
import { useAuthContext } from '../context/authContext.jsx';
import { useLogout } from '../hooks/useLogout.js';
import { set } from 'mongoose';
import { reload } from 'firebase/auth';
import Login from './Login.jsx';
import Welcome from '../components/Welcome.jsx';





export default function Home() {
    const [isSideMenu, setIsSideMenu] = useState(false)
    const {authUser} = useAuthContext();
    const {logout} = useLogout();


    return (
        <>
            <div className={`w-2 ${isSideMenu ? "w-2" : "flex-[.2] md:flex-[.2] max-w-50"} min-h-screen max-h-screen relative bg-secondary flex flex-col justify-start items-center gap-3 px-3 py-3 transition-all duration-100 ease-in-out`}   >

                {/* anchor */}
                <div className={`w-8 h-8  cursor-pointer rounded-tr-lg rounded-br-lg absolute -right-6 bg-secondary flex justify-center items-center text-slate-400 `}>

                    {isSideMenu ? (<span onClick={() => {
                        setIsSideMenu(false)
                    }}> <BiChevronRightSquare className='text-2xl' /></span>) : (<span> <BiChevronLeftSquare className='text-2xl' onClick={() => {
                        setIsSideMenu(true)
                    }} /></span>
                    )}
                </div>
                <div className='logo flex flex-col gap-4 overflow-hidden w-full m-3 '>
                    <Link to={'/home'} className='mx-auto'>
                        <img src={logo} alt="" className='object-contain w-40 h-auto' />
                    </Link>

                    <p className='text-slate-400 uppercase mx-auto font-extralight'>try our online editor</p>

                    <Link to={'/pen'}>
                        <div className='rgb-border mx-auto flex justify-center items-center'>
                            <a href="" className='i-btn'><span className='text-white text-center'>Start Coding</span></a>
                        </div>
                    </Link>

                </div>
            </div>

            <div className='flex flex-col flex-1 min-h-screen max-h-screen overflow-y-scroll items-start justify-start ml-8 mb-1 gap-3 box-border'>
                 <div className="flex justify-between w-full gap-3  items-center my-1 border-b-2 border-b-slate-600 py-3">
                    <div className='bg-secondary flex justify-center items-center px-3 h-12'>
                        <FaSearch className='text-2xl text-primaryText' />
                        <input type="text" className='flex-1 px-5 py-1 text-xl bg-transparent outline-none border-none text-primaryText placeholder:text-gray-600' placeholder='search here...' />
                    </div>

                    <div className='flex mr-5 gap-3'>

                        {!authUser && (<>

                        <Link to={'/home/signup'}>
                        
                                <button className={`bg-green-600 px-4 py-3 rounded-lg  text-black brightness-150 `} >
                                    Sign Up
                                    </button>
                        </Link>    
                            <Link to={'/home/login'}>
                                <button className='bg-secondary border-none outline-none text-primaryText px-4 py-3 rounded-lg brightness-125'>Log In</button>
                            </Link>
                        </>)}

                        {authUser && (
                            <>
                            <Link to={'/home'}>
                            <button className='btn btn-md' onClick={()=>{
                                    logout();
                                }} >logout</button>
                            </Link>
                            </>
                        )}
                      
                    </div>  
                </div>
                   <>
                    <Routes>
                        <Route path='/*' element={authUser ? <Project/> : <Welcome />}/>
                         <Route path='/signup' element={authUser ? <Navigate to = '/home/*'/> : <Signup/>}/>
                         <Route path='/login' element={<Login />}/>
                    </Routes>
                   </>
            </div>
        </>
    )
}
