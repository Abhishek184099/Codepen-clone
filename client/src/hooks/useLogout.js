import { useAuthContext } from "../context/authContext";
import {toast} from "react-hot-toast";

export const useLogout = () => {

    const { setAuthUser } = useAuthContext();  


    const logout = async() =>{
        try {
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                }
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);       
            }
            else{
                localStorage.removeItem("users");
                setAuthUser(null);
            }
        } catch (err) {
            toast.error(err.message);
        }

    }
    return {logout}
}