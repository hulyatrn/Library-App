import { useState } from "react";
import {useSignup} from '../hooks/useSignup'

export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const {error,signup}=useSignup();

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(email,password)

        signup(email,password);
    }


    return (
        <div className="signup">
            <h2>Üye Ol</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Email Adresiniz:</span>
                    <input required type="email" onChange={(e)=>setEmail (e.target.value)}
                    value={email}>
                    </input>
                </label>
                <label>
                    <span>Parola:</span>
                    <input required type="password" onChange={(e)=> setPassword(e.target.value)}
                    value={password}>
                    </input>
                </label>
                <button>Üye Ol</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}