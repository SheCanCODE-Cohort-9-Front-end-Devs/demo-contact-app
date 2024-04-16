import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import AuthPages from '../pages/auth/AuthPages';

const AuthenticationRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AuthPages /> } >
                    <Route path="" element={<SignIn />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default AuthenticationRoutes