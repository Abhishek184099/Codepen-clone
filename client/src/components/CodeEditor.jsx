import { styled } from '@mui/material';
import Code from './Code';
import Result from './Result';

const CodeEditor = () => {
    return (
        <>
       <div className='w-screen flex flex-col '>
           <div className='h-[400px] bg-black'>
           <Code/>
           </div>
       <div className=''>
       <Result />
       </div> 
       </div>

        </>
    )
}

export default CodeEditor;



