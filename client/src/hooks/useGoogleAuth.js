import {toast} from 'react-hot-toast'
import {GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth"
import { app } from '../firebase.js';
import { useAuthContext } from '../context/authContext.jsx';



export const useGoogleAuth = () =>{

    const {setAuthUser} = useAuthContext();
    const googleAuth = async()=>{
        try{
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);

            const result = await signInWithPopup(auth, provider.addScope('email'));
            console.log(result); 

           const res = await fetch('/api/auth/firebase',{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullname : result.user.displayName,
                email : result.user.email,
                photo : result.user.photoURL,
            })
           })

           const data = await res.json();
           if(data.error){
              throw new Error(data.error)
           }
           else{
            localStorage.setItem('users',JSON.stringify(data))
            setAuthUser(data);
           }
        }catch(err){
            toast.error(err.message);
        }
    }
    return {googleAuth};
};


