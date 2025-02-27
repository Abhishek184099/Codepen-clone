import React from 'react'
import { MdEngineering } from "react-icons/md";
import { RiTreasureMapFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";




export default function Card() {
  return (
<div className='mt-10 px-3 py-6  flex items-center justify-around gap-3 '>
    <div className=' w-80 flex flex-col rounded-lg  items-start px-3 py-2 gap-1 bg-slate-700 mt '>
        <div className='px-3 -translate-y-12 bg-primary rounded-3xl'>
        <MdEngineering className='text-8xl  text-white   '/>
        </div>
         <p className='text-2xl text-white font-semibold '>Build & Test</p>
         <p className='text-1xl text-white py-3'>Get work done quicker by building out entire projects or isolating code to test 
            features and animations. Want to keep it all under wraps? 
            Upgrade to a <span className='bg-yellow-300 text-black font-medium p-1'>PRO</span> account to keep your work private.</p>
        
        <button className='btn btn-md bg-slate-500 text-white p-3 border-none outline-none'>
            Try the Editor
        </button>

    </div>
    <div className=' w-80 flex flex-col rounded-lg  items-start px-3 py-2 gap-1 bg-slate-700 '>
        <div className='px-3 -translate-y-12 bg-primary rounded-3xl'>
        <RiTreasureMapFill  className='text-8xl  text-white   '/>
        </div>
         <p className='text-2xl text-white font-semibold '>Learn & Discover</p>
         <p className='text-1xl text-white py-3 text-left'>Want to upgrade your 
            skills?
             Participating in 
            CodePen Challenges is great way to try something new. We frequently 
            feature these on our homepage and across social media!</p>
        
        <button className='btn btn-md bg-slate-500 text-white p-3 border-none outline-none'>
            Join the challange
        </button>

    </div>
    <div className=' w-80 flex flex-col rounded-lg  items-start px-3 py-2 gap-1 bg-slate-700  '>
        <div className='px-3 -translate-y-12 bg-primary rounded-3xl'>
        <FaGlobe  className='text-8xl  text-white   '/>
        </div>
         <p className='text-2xl text-white font-semibold '>Share Your Work
         </p>
         <p className='text-1xl text-white py-3 text-left'>Become a part of the most active front-end community in the world
             by sharing work. Presenting at a conference? Show your code 
             directly in the browser with Presentation Mode.
            </p>
        
        <button className='btn btn-md bg-slate-500 text-white p-3 border-none outline-none'>
            Explore trending
        </button>

    </div>
</div>

  )
}
