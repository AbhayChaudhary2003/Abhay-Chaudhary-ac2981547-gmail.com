import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Logout() {

    const navigate = useNavigate();

    useEffect(() => {

        const logoutUser = async () => {

            try {
                await api.post("/auth/logout");

                localStorage.removeItem("token");

                alert("Logout successful");

                navigate("/login");

            } catch (error) {
                console.error("Logout error:", error);

                alert(
                    error.response?.data?.message ||
                    "Logout failed"
                );
            }
        };

        logoutUser();

    }, [navigate]);

    return (
        <div>
            <h2>Logging out...</h2>
        </div>
    );
}

export default Logout;

