import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav>

            <h2>TuneVault</h2>

            <div>

                <Link to="/">
                    Home
                </Link>

                <Link to="/music">
                    Music
                </Link>

                <Link to="/upload">
                    Upload
                </Link>

                <Link to="/login">
                    Login
                </Link>

                <Link to="/register">
                    Register
                </Link>

            </div>

        </nav>
    );
}

export default Navbar;