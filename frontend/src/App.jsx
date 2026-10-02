import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UploadMusic from "./pages/UploadMusic";
import MusicFeed from "./pages/MusicFeed";
import Logout from "./pages/Logout";
function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/upload"
                    element={<UploadMusic />}
                />

                <Route
                    path="/music"
                    element={<MusicFeed />}
                />

                <Route
                    path="/logout"
                    element={<Logout />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
