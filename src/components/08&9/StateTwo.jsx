import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, createContext } from 'react'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Navbar } from './pages/Navbar'
import { NoPage } from './pages/NoPage'
import { Firebase } from '../15/Firebase'
import { Profile } from '../15/Profile'

export const AppContext = createContext();

function StateTwo() {

    const [username, setUsername] = useState('- TS')

    return (
        <div>
            <AppContext.Provider value={{ username, setUsername }}>
                <Router>
                    {/* NAVBAR */}
                    <Navbar />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/signin' element={<Firebase />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='*' element={<NoPage />} />
                    </Routes>

                </Router>
            </AppContext.Provider>

            <br /> <br /> <br /> LINKS <br />
            <a href="/"> Home </a>
            <a href="/about"> About </a>
        </div>
    )
}
export default StateTwo