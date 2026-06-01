import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate =
        useNavigate();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const loginUser = async (e) => {

        e.preventDefault();

        try {

            const res =
                await api.post(
                    "/auth/login",
                    {
                        email,
                        password
                    }
                );

            localStorage.setItem(
                "token",
                res.data.token
            );

            navigate("/dashboard");

        } catch(error) {

            alert(
                error.response.data.message
            );
        }
    };

    return (

        <div>

            <h2>Login</h2>

            <form onSubmit={loginUser}>

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
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;