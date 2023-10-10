import React from 'react';
import './home.css';
import Overview from '../Overview/Overview';
import Update from '../UpdateArtical/Update';
const Home = () => {
    return (
        <div className='home' id='home'>
            <Overview />
            <div className='home_padding'>
                <Update />
            </div>
        </div>
    )
}

export default Home;