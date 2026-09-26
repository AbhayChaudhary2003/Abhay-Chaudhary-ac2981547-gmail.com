import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UploadMusic() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!file) {
            alert("Please select a music file");
            return;
        }

        const formData = new FormData();

        formData.append("title", title);
        formData.append("music", file);

        try {

            const res = await api.post(
                "/music/upload",
                formData
            );

            console.log(res.data);

            alert("Music uploaded successfully");

            setTitle("");
            setFile(null);

            navigate("/music");

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                "Music upload failed"
            );
        }
    };

    return (
        <div className="upload-container">

            <h1>Upload Music</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Music title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                    required
                />

                <input
                    type="file"
                    accept="audio/*"
                    onChange={(e) =>
                        setFile(e.target.files[0])
                    }
                    required
                />

                <button type="submit">
                    Upload Music
                </button>

            </form>

        </div>
    );
}

export default UploadMusic;