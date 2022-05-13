import React, { useState } from 'react';
import "./BurgerNav.css";
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InfoIcon from '@mui/icons-material/Info';
import PollIcon from '@mui/icons-material/Poll';
import CloseIcon from '@mui/icons-material/Close';
import LogoutIcon from '@mui/icons-material/Logout';
import { FaBars } from 'react-icons/fa';


const BurgerNav = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const inputElements = [
        {
            className: "burger-item",
            href: "/info",
            icon: <InfoIcon />,
            p: "Information"
        },
        {
            className: "burger-item",
            href: "/vregister",
            icon: <HowToRegIcon />,
            p: "Voter Registration"
        },
        {
            className: "burger-item",
            href: "/voting",
            icon: <HowToVoteIcon />,
            p: "Voting"
        }, {
            className: "burger-item",
            href: "/result",
            icon: <PollIcon />,
            p: "Result"
        }, {
            className: "burger-item",
            href: "/login",
            icon: <LogoutIcon />,
            p: "log out"
        }
    ]
    return (
        <>
            <div className='burger-wrapper'>
                <div className="burger-container">
                    {
                        inputElements.map((i, index) => {
                            return (
                                <div key={index} className={i.className}>
                                    <a href={i.href}><p>{i.icon} {i.p}</p></a>
                                </div>

                            )
                        })
                    }
                </div>
            </div >
            <div className='app-bar'>

                <div className="burger-menu">
                    <button type="button" className="nav-toggle" onClick={() => {
                        setBurgerStatus(true)
                    }}>
                        <FaBars sx={{ background: "blue" }} />
                    </button>
                </div>
            </div>

            {
                burgerStatus ?
                    <div className='burger-menu-wrapper'>
                        <div className="burger-menu-container" >
                            <div className="burger-close" >
                                <button type='button' className="nav-close" onClick={() => {
                                    setBurgerStatus(false)
                                    console.log(burgerStatus)
                                }}><CloseIcon /></button>
                            </div>
                            {
                                inputElements.map((i, index) => {
                                    return (
                                        <div key={index} className={i.className}>
                                            <a href={i.href}><p>{i.icon} {i.p}</p></a>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div> : null
            }
        </>
    )
}

export default BurgerNav