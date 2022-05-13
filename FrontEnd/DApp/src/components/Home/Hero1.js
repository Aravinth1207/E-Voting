import React from "react";
import { Button } from "react-bootstrap";
import VoteImg from "./Vote.png";
import styles from "./Hero.css";

const Hero1 = () => {
    return (
        <div
            className={`${styles.root1} d-flex justify-content-evenly align-items-center py-5`}
            style={{ minHeight: "85vh" }}
        >
            <div className='' style={{ maxWidth: "45%" }}>
                <div className='display-6 fw-bold'>
                    <p style={{ fontSize: '2rem' }}>Manipulation Prevention System</p>

                    <p className='text-info'>Using Blockchain</p>
                </div>
                <div className='py-5'>
                    <p style={{ textTransform: 'none', textAlign: "left" }}>
                        A De-centralized Voting App which addresses the issue of maintaining
                        anonymity of voters on a public blockchain network, achieving lower
                        latency and affordability in the existing models.
                    </p>
                    <br />
                    <Button variant='outline-primary' href='/login'>
                        Login
                    </Button>
                    <p />
                    <br />
                    <Button variant='info' className='px-4 py-2 mx-5' href='/signup'>
                        Get Started
                    </Button>
                </div>
            </div>
            <div className='mx-8' style={{ maxWidth: "30%" }}>
                <img src={VoteImg} style={{ maxWidth: "100%" }} alt="vote" />
            </div>
        </div >
    );
};

export default Hero1;