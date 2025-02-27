import React, { useContext } from 'react'
import { useAuthContext } from '../context/authContext'
import { useShowProject } from '../hooks/useShowProject';
import { DataContext } from '../context/DataProvider';
import { Link } from 'react-router-dom';
import { useProjectContext } from '../context/ProjectContext';

export default function Project() {

    // const [html, setHtml] = React.useState('')
    // const [css, setCss] = React.useState('')
    // const [js, setJs] = React.useState('')

    const {authUser} = useAuthContext();
    const {html,css,js} = useContext(DataContext);
     const {project,name} = useProjectContext();
    // const showProject = async() => {
    //     try{
    //         const res = await fetch("/api/send");
    //         console.log(res)
    //     }catch{

    //     }
    // }

    const {showProject} = useShowProject();
  return (

    <div className="pr-10 w-full">
           <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-6 text-center text-slate-500">Projects Dashboard</h1>
        {
            project &&(
                <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">Project Name</th>
                      <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">Created By</th>
                      <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr  className="border-b text-center">
                        <td className="py-3 px-4">{name}</td>
                        <td className="py-3 px-4">{authUser.fullname}</td>
                        <td className="py-3 px-4">
                          <Link to= {'/pen'}>
                          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={showProject}>
                            Get Code
                          </button>
                          </Link>
                        
                        </td>
                      </tr>  
                  </tbody>
                </table>
              </div>
            )
        }
        {
          !project && (
            <h1 className='text-white text-3xl font-semibold text-center'>You have not created any projects.</h1>
          )
        }
  </div>
    </div>

);
};



