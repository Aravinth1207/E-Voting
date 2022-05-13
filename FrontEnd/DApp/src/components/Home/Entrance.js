import React from 'react'
import curve from './curve.png';
import curve1 from './curve1.png';
import curve2 from './curve2.png';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Hero3';
import Footer from './Footer';
const Entrance = () => {
    return (
        <>
            <div style={{ minHeight: "150vh", width: "100%" }}>
                <img
                    src={curve2}
                    style={{
                        position: "absolute",
                        right: "0px",
                        maxWidth: "60%",
                        zIndex: "-1",
                    }}
                    alt="curve"
                />
                <Hero1 />
                <br />
                <br />
                <br />
                <br />
                <br />
                <img
                    src={curve}
                    style={{
                        position: "absolute",
                        left: "0px",
                        maxWidth: "20%",
                        zIndex: "-1",
                    }}
                    alt="curve"
                />
                <Hero2 />
                <img
                    src={curve1}
                    style={{
                        position: "absolute",
                        right: "0px",
                        maxWidth: "18%",
                        zIndex: "-1",
                    }}
                    alt="curve"
                />
                <Hero3 />
                <Footer />
            </div>
        </>
    )
}

export default Entrance