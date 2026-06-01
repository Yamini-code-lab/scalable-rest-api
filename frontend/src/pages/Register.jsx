import { useState } from "react";
import api from "../services/api";

function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const registerUser = async (e) => {

        e.preventDefault();

        try {

            const res =
                await api.post(
                    "/auth/register",
                    {
                        name,
                        email,
                        password
                    }
                );

            alert(res.data.message);

        } 
        catch(error) {

            console.log("FULL ERROR:", error);
            console.log("RESPONSE DATA:",
            error.response?.data
            );

            alert(
                JSON.stringify(
                    error.response?.data,
                    null,
                    2
                )
            );
        }
    };

    return (

        <div>

            <h2>Register</h2>

            <form onSubmit={registerUser}>

                <input
                    placeholder="Name"
                    onChange={(e)=>
                        setName(e.target.value)}
                />

                <br/>

                <input
                    placeholder="Email"
                    onChange={(e)=>
                        setEmail(e.target.value)}
                />

                <br/>

                <input
                    type="password"
                    placeholder="Password"
                    onChange={(e)=>
                        setPassword(e.target.value)}
                />

                <br/>

                <button>
                    Register
                </button>

            </form>

        </div>
    );
}

export default Register;