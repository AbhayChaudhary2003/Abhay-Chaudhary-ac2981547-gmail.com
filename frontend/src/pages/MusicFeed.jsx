import React, { useEffect, useState } from "react";
import api from "../services/api";

function MusicFeed() {

    const [music, setMusic] = useState([]);

    useEffect(() => {

        const fetchMusic = async () => {

            try {

                const res = await api.get("/music");

                console.log(res.data);

                setMusic(res.data.music);

            } catch (error) {

                console.log(error);

            }
        };

        fetchMusic();

    }, []);

    return (
        <div className="music-feed">

            <h1>Music Feed</h1>

            {music.length === 0 ? (

                <p>No music available</p>

            ) : (

                music.map((item) => (

                    <div
                        className="music-card"
                        key={item._id}
                    >

                        <h2>
                            {item.title}
                        </h2>

                        <p>
                            Artist: {
                                item.artist?.username ||
                                item.artist
                            }
                        </p>

                        <audio
                            controls
                            src={item.uri}
                        />

                    </div>

                ))

            )}

        </div>
    );
}

export default MusicFeed;