import { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
export default function RegisterPage() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    function registerUser(ev) {
        ev.preventDefault();
        axios.post("/register",
        {
            name,
            email,
            password,   
        });
    }

    return(

    <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-30">
            <h1 className="text-4xl text-center mb-4">SignUp</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>

                <input type="text" placeholder={"Name"} value={name} onChange={ev => setName(ev.target.value)}/>
                <input type="email" placeholder={"Email"} value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder={"Password"} value={password} onChange={ev => setPassword(ev.target.value)}/>
                
                <button className="primary">Signup</button>
                
                <div className="text py-2 text-red-400">
                    Already have an account? <Link className="underline" to={"/login"}>Login</Link>
                </div>
            </form>
        </div>
    </div>
    );
}
 