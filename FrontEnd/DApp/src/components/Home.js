import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Voting from './Voting/Voting'
import BurgerNav from './BurgerNav/BurgerNav'
import Info from './info/Info'
import VoteRegistration from './VoteRegistration/VoteRegistration';
import Result from './Result/Result';

export const Home = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<><BurgerNav /></>} />
                    <Route path="/voting" element={<><BurgerNav /><Voting /></>} />
                    <Route path="/info" element={<><BurgerNav /><Info /></>} />
                    <Route path="/vregister" element={<><BurgerNav /><VoteRegistration /></>} />
                    <Route path="/result" element={<><BurgerNav /><Result /></>} />
                </Routes>
            </Router>
        </>
    )
}
