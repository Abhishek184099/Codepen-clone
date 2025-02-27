import React from 'react'
import { TbBrandAirbnb } from "react-icons/tb";
import { SiGrubhub } from "react-icons/si";
import { RiNetflixFill } from "react-icons/ri";
import { SiAdobe } from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa";
import { SiIbm } from "react-icons/si";



export default function Footer() {
  return (
    <div className='flex flex-col justify-start items-center mt-8 gap-8 bg-secondary mb-7 p-5'>
        <h1 className='text-3xl font-semibold text-white'>
        Bring the Whole Team
        </h1>
    <p className='text-white font-light text-center mx-auto leading-loose '>
    Each team and team member gets all the features of a PRO membership.
     That means the Team can do things like upload Assets, use features like Collab Mode,
      Professor Mode, Presentation Mode, and Live View, and apply custom CSS to Posts, Profiles,
       and Embeds.
    </p>

    <button className='btn btn-lg bg-green-500 border-none outline-none hover:bg-green-700'>
        Start a Team
    </button>

    <p className='text-white font-semibold text-lg'>Loved by hundreds of teams, including:</p>

    <div className='text-gray-500 opacity-95 flex gap-2'>
    <TbBrandAirbnb className='text-9xl'/>
    <SiGrubhub className='text-9xl'/>
    <RiNetflixFill className='text-9xl'/>
    <SiAdobe className='text-9xl'/>
    <FaMicrosoft className='text-9xl'/>
    <SiIbm className='text-9xl'/>
    </div>
    </div>
  )
}
