import { Auth } from "firebase/auth";
import { signOut } from "firebase/auth"
import { auth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";


export const useLogout=()=>{


    const {dispatch}=useAuthContext();

    const logout=()=>{
        signOut(auth)
        .then(()=>{
            //console.log("çıkış yapıldı");

            dispatch({type:'LOGOUT'})
        })
        .catch(err=>{
            console.log(err.message);
        })
    }


    return {logout}
}