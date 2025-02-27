import { useAuthContext } from "../context/authContext";
import {toast} from "react-hot-toast";
import { DataContext } from '../context/DataProvider';
import { useContext } from "react";


export const useShowProject = () => {
    const {authUser} = useAuthContext();
    const {html,css,js,setHtml,setCss,setJs} = useContext(DataContext);

    const showProject = async() => {
        try{
            const res = await fetch("/api/send",
                {
                    method : "GET",
                }
            );

            const data = await res.json();
            console.log(data);
    
            if(data.error){
                throw new Error(data.error);
            }
            else{
                setHtml(data.html);
                setCss(data.css);
                setJs(data.js);
            }
        }
    catch(err){
        toast.error(err.message);
    }
       
    }
    return {showProject}

}