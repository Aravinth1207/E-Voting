import React, { useState } from 'react';
import "./BurgerNav.css";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import PollIcon from '@mui/icons-material/Poll';
import CloseIcon from '@mui/icons-material/Close';
import { FaBars } from 'react-icons/fa';

const BurgerNav = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <>
            <div className='burger-wrapper'>
                <div className="burger-container">
                    <div className="burger-item">
                        <a href="/info"><p><InfoIcon />  Information</p></a>
                    </div>
                    <div className="burger-item">
                        <a href="/vregister"><p><HowToRegIcon />  Voter Registration</p></a>
                    </div>
                    <div className="burger-item">
                        <a href="/voting"><p><HowToVoteIcon />  Voting</p></a>
                    </div>
                    <div className="burger-item">
                        <a href="/result">
                            <p><PollIcon /> Result</p></a>
                    </div>
                </div>
            </div >
            <div className='app-bar'>

                <div className="burger-menu">
                    <button type="button" className="nav-toggle" onClick={() => {
                        setBurgerStatus(true)
                    }}>
                        <FaBars />
                    </button>
                </div>
            </div>

            {burgerStatus ?
                <div className='burger-menu-wrapper'>
                    <div className="burger-menu-container" >
                        <div className="burger-close" >
                            <button type='button' onClick={() => {
                                setBurgerStatus(false)
                                console.log(burgerStatus)
                            }}><CloseIcon /></button>
                        </div>
                        <div className="burger-item">
                            <a href="/info"><p><InfoIcon />  Information</p></a>
                        </div>
                        <div className="burger-item">
                            <a href="/vregister"><p><HowToRegIcon />  Voter Registration</p></a>
                        </div>
                        <div className="burger-item">
                            <a href="/voting"><p><HowToVoteIcon />  Voting</p></a>
                        </div>
                        <div className="burger-item">
                            <a href="/result">
                                <p><PollIcon /> Result</p></a>
                        </div>
                    </div>
                </div> : null
            }



        </>


    )
}

export default BurgerNav