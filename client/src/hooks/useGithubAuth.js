import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { useAuthContext } from '../context/authContext.jsx';
import {toast} from 'react-hot-toast'
import { app } from '../firebase.js';


export const useGithubAuth = () =>{
    
    const {setAuthUser} = useAuthContext();

    const githubAuth = async() => {
       try{
         const provider = new GithubAuthProvider();
         const auth = getAuth(app)
        
         const result = await signInWithPopup(auth,provider);
         console.log(result);
         console.log(result.user.reloadUserInfo.screenName)
         
         const res = await fetch('/api/auth/firebase',{
            method: "POST",
            headers: {
               "Content-Type": "application/json"
           },
            body : JSON.stringify({fullname : result.user.reloadUserInfo.screenName, email : result.user.email,photo : result.user.photoURL})  
         })
        
         const data = await res.json();
         if(data.error){
            throw new Error(data.error);
         }
         else{
            localStorage.setItem('users',JSON.stringify(data))
            setAuthUser(data);
         }

        
       }catch(err){
           toast.error(err.message);
       }
    }
    return {githubAuth};
}

