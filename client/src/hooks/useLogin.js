import toast from "react-hot-toast";
import { useAuthContext } from "../context/authContext";

export const useLogin = () => {
    const {setAuthUser} = useAuthContext();

    const login = async({username,password}) => {
        const success =   handleInputError({username,password});
        if(!success) {
            return;
        }
         
        try {
            const res = await fetch("/api/login");
        } catch (err) {
            
        }
    }
}

function handleInputError({username,password}){
    if(!username || !password){
        toast.error("please fill in all fields");
    }
    return true;
}