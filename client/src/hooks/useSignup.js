import toast from "react-hot-toast";
import {useAuthContext} from "../context/authContext";

export const useSignup = () =>{
    const {setAuthUser} = useAuthContext();

    const signUpWithEmail = async({fullname,email,password,username}) => {
        const success = handleInputError({fullname,email,password,username});
        if(!success) {
            return;
        } 


        try{
            const res = await fetch('/api/auth/signup',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({fullname,email,password,username}),
            })

            const data = await res.json();

            if(data.error) {
                throw new Error(data.error);
            }
            else{
                localStorage.setItem("users",JSON.stringify(data) );
                setAuthUser(data)
            }

        }
        catch(err){
            toast.error(err.message);

        }
    }
          return {signUpWithEmail}
}

function handleInputError ({fullname,email,username,password}) {
    if(!fullname || !email || !username || !password) {
        toast.error("please fill in all fields");
        return false;
    }
    if(password.length < 6){
        toast.error("Password must be at least 6 characters");
        return false;
    }
    return true;
}