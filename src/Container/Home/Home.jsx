import React from 'react';
import './home.css';
import Overview from '../Overview/Overview';
import Update from '../UpdateArtical/Update';
import Chatgpt from '../Chatgpt/Chatgpt';
const Home = () => {
    return (
        <div className='home' id='home'>
            <Overview />
            <div className='home_padding'>
                <Chatgpt />
                <Update />
            </div>
        </div>
    )
}

export default Home;