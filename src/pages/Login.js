import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const {error,login}=useLogin();

    const handleSubmit = (e) =>{
        e.preventDefault()
        //console.log(email,password)

        login(email,password);
    }


    return (
        <div className="login">
            <h2>Giriş Yap</h2>
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
                <button>Giriş</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}