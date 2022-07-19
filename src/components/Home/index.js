import React from 'react';
import BatHome from "../../assets/port-images/batman_logo_home.jpg"

function Home() {
  return (
    <main id="homepage">
        <div className="about-para"><h1 className="sect-title">The BatMatt Reaction Portfolio: "Welcome to the Matt House!"</h1>
        </div>
                <img
                        src={BatHome}
                        alt="Batman"
                        className="bathome"
                        />
    </main>
  )
}

export default Home;