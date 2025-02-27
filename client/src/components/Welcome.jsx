import React from 'react'
import { logoAlt } from '../assets'
import { Link } from 'react-router-dom'
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import Card from './Card';
import Footer from './Footer';



export default function Welcome() {
  return (
    <div className='flex flex-col'>
    <div className='flex w-full py-10'>
           <div className=" flex flex-col justify-center items-start text-center px-6 py-8 text-white  w-1/2 gap-3">
                
               <h1 className='flex justify-start items-start gap-5 text-3xl leading-normal font-semibold max-w-sm text-left'> <img src={logoAlt} className='h-12'/> The best place to build, test, and discover front-end code.
               </h1>
               <p className='text-left rtl:text-right text-gray-500 font-normal text-xl'>
               CodePen is a <span className='text-white'>social development environment</span> for front-end designers
                and developers. 
               Build and deploy a website,  show off your work, 
               build test cases to learn and debug, and find inspiration.
               </p>

               <Link to={'/home/signup'}>
                  <button className='btn btn-md bg-green-500 outline-none border-none font-light hover:bg-green-600 mt-2'>
                    Sign Up for free
                  </button>
               </Link>
           </div>
           <div className='flex justify-center items-center  mx-auto py-10'>
            <div className='code-box h-96 w-[450px] flex flex-col gap-2 '>
                <div className='bg-gray-900 h-44 w-72 translate-x-1/2 -translate-y-10 opacity-90 backdrop-blur-sm shadow-lg shadow-slate-800'>
                   <header className='flex justify-between items-center p-1'>
                    <div className='flex gap-2 items-center justify-center text-gray-400'>
                    <IoSettingsSharp />
                    <p className='uppercase '>html</p>
                    </div>
                    <RiArrowDropDownLine className='text-4xl  text-gray-400'/>
                   </header>
                    <code className='px-2 text-1xl font-thin'>
                        <span className='text-orange-400'> {"<div"} </span>
                        <span className='text-yellow-400'> class</span>
                        <span className='text-white'>=</span>
                        <span className='text-green-400'>"react"</span>
                        <span className='text-orange-400'>{"></div>"}</span>
                    </code>

                </div>
                <div className='bg-gray-900 h-44 w-72 translate-x-2/3 -translate-y-4 opacity-90 backdrop-blur-sm shadow-lg shadow-slate-800' >
                   <header className='flex justify-between items-center p-1'>
                    <div className='flex gap-2 items-center justify-center text-gray-400'>
                    <IoSettingsSharp />
                    <p className='uppercase '>css</p>
                    </div>
                    <RiArrowDropDownLine className='text-4xl  text-gray-400'/>
                   </header>
                    <code className='px-2 text-1xl font-thin'>
                        <span className='text-orange-400'>{".p "}</span>
                        <span className='text-red-400' >{" { "}</span> <br/>
                        <span className='text-yellow-400 pl-6'>{" color "}</span>
                        <span className='text-green-400'>{" : "}</span>
                        <span className='text-blue-400'>{" red"}</span> 
                        <span className='text-pink-400'>{"; "}</span><br/>
                        <span className='text-red-400 pl-3'>{" } "}</span>
                    </code>

                </div> 

                <div className='bg-gray-900 h-44 w-72 translate-x-1/2 translate-y-6 opacity-90 backdrop-blur-sm shadow-lg shadow-slate-800' >
                   <header className='flex justify-between items-center p-1'>
                    <div className='flex gap-2 items-center justify-center text-gray-400'>
                    <IoSettingsSharp />
                    <p className='uppercase '>css</p>
                    </div>
                    <RiArrowDropDownLine className='text-4xl  text-gray-400'/>
                   </header>
                    <code className='px-2 text-1xl font-thin'>
                        <span className='text-orange-400 pl-1'>{"var"}</span>
                        <span className='text-red-400' >{" a "}</span> 
                        <span className='text-yellow-400 '>{" = "}</span>
                        <span className='text-green-400'>{" 12 ;"}</span><br/>
                        <span className='text-blue-400 pl-2'>{" var "}</span> 
                        <span className='text-pink-400'>{" b "}</span>
                        <span className='text-red-400 '>{" = "}</span>
                        <span className='text-red-400 '>{"10 ; "}</span> <br/>
                        <span className='text-red-400 pl-2'>{"console."}</span> 
                        <span className='text-red-400 '>{"log("}</span> 
                        <span className='text-red-400 '>{"a + "}</span>  
                        <span className='text-blue-400 '>{" b); "}</span>  
                        
                    </code>

                </div> 

            </div>
              
           </div>
    </div>
   <Card/>
   <div className='mr-10'>

   <Footer/>
   </div>

    </div>
    
  )
}
