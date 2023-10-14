import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Api, Chatgpt, Company, Home, Research, Safety } from './Container';
import { Navbar } from './Components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='section_padding'>
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/research' element={<Research />} />
                        <Route path='/api' element={<Api />} />
                        <Route path='/safety' element={<Safety />} />
                        <Route path='/company' element={<Company />} />

                    </Routes>
                </div>

            </div>
        </BrowserRouter>
    )
}

export default App
