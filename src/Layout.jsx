import App from '@/App'
import { Route, Routes } from 'react-router'
import React from 'react'
import About from '@/pages/About'
import Home from './pages/Home'

const Layout = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="about-us" element={<About />} />
            </Route>
        </Routes>
    )
}

export default Layout