import React from 'react'
import { logoAlt } from '../assets'
import { useAuthContext } from '../context/authContext';
import EditableSpan from '../components/Edittext';
import { Link } from "react-router-dom";
import CodeEditor from '../components/CodeEditor.jsx';

import { useSave } from '../hooks/useSave.js';



export default function Editor() {

  const { authUser } = useAuthContext();
  const {saveProgram} = useSave();



 




  return (
    <div className={`flex flex-col w-screen`}>
      <div className='flex justify-between items-center h-[70px] text-white border-b-2 border-b-slate-500 mx-5'>

        <div className='flex items-center justify-center float-left px-3 gap-5'>
          <Link to={'/home'}>
          <img src={logoAlt} className='h-10' />
          </Link>

          <div className='flex flex-col items-start justify-center'>
            <EditableSpan />
            <p>{authUser ? authUser?.fullname : "captain anynomous"}</p>
          </div>
        </div>
        <div className='flex justify-center items-center gap-4 '>
          {!authUser && (<>
            <Link to={'/home/signup'}>
              <button className={`bg-green-600 px-4 py-3 rounded-lg  text-black brightness-150 `} >Sign Up</button>
            </Link>
            <Link to={'/home/login'}>
              <button className='bg-secondary border-none outline-none text-primaryText px-4 py-3 rounded-lg brightness-125'>Log In</button>
            </Link>
          </>)}
          {
            authUser && (
              <button className='btn btn-md outline-none border-none mr-6' onClick={saveProgram}> Save</button>
            )
          }
        </div>
      </div>
      <div className='bg-white'>
      <CodeEditor />
      </div>
    </div>
  )
}
