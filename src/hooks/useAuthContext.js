import { AuthContext } from "../contex/AuthContexts";
import { useContext } from "react";


export const useAuthContext=()=>{
    const context=useContext(AuthContext);


    if(!context){
        throw Error("Hata oluştu");
    }


    return context;
}