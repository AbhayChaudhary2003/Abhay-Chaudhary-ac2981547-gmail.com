import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await api.post(
                "/auth/login",
                {
                    username,
                    password
                }
            );

            if (res.data.token) {
                localStorage.setItem("token", res.data.token);
            }

            alert("Login successful");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="auth-container">

            <h1>Login</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    required
                />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>
                Don't have an account?
                <button onClick={() => navigate("/register")}>
                    Register
                </button>
            </p>

        </div>
    );
}

export default Login;