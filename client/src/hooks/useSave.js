import { useAuthContext } from "../context/authContext";
import {toast} from "react-hot-toast";
import { DataContext } from '../context/DataProvider';
import { useContext } from "react";
import { useProjectContext } from "../context/ProjectContext";


export const useSave = () => {
    const {authUser} = useAuthContext();
    const { html, css, js } = useContext(DataContext);
    const {setProject,setName,name} = useProjectContext();

    const saveProgram = async() =>{
        try{
           
            const res = await fetch('/api/save/',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                     html : html , css:css , js:js , createdBy : authUser.fullname, name : name
                })
               })

               const data =  await res.json();

               if(data.error){
                throw new Error(data.error);
               }
               else{
                setProject(data);
                localStorage.setItem("project", JSON.stringify(data));
                localStorage.setItem("name", JSON.stringify(name));

                toast.success("saved successfully")
               }

    
        }
    catch (err) {
        toast.error(err.message);
    }
    }
    return {saveProgram}
}