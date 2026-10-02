import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <>
            <div className="home">

                <div className="home-content">

                    <h1>Welcome to TuneVault</h1>

                    <p>
                        Discover, stream and enjoy your favorite music.
                    </p>

                    <div className="button-group">

                        <button onClick={() => navigate("/music")}>
                            Explore Music
                        </button>

                        <button onClick={() => navigate("/upload")}>
                            Upload Music
                        </button>

                    </div>

                </div>

            </div>

            <div className="artist-image">

                <img
                    src="/sidhu.jpg"
                    alt="Sidhu Moose Wala"
                />

            </div>
        </>
    );
}

export default Home;