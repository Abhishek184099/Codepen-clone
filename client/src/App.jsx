import React from 'react'
import { Route,Routes } from 'react-router'
import Home from './pages/Home'
import Signup from "./components/Signup"
import toast, { Toaster } from 'react-hot-toast';
import Editor from './pages/Editor';
import Login from "./pages/Login";

export default function App() {
  return (
    <div className="max-  w-screen h-screen flex items-start justify-start">
        <Routes>
          <Route path='/home/*' element = {<Home />}/>
         <Route path='/pen' element={<Editor/>}/>
        </Routes>
         <Toaster />
    </div>
  )
}
