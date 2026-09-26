function Home() {
    return (
        <>
            <div className="home">

                <div className="home-content">
                    <h1>Welcome to TuneVault</h1>

                    <p>
                        Discover, stream and enjoy your favorite music.
                    </p>

                    <div className="button-group">
                        <button>Explore Music</button>
                        <button>Upload Music</button>
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