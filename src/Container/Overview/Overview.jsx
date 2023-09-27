import React from 'react';
import './overview.css';
import { imagess } from '../../constants';
const Overview = () => {
    return (
        <div className='overview'>
            <div className='overview-img'>
                <img src={imagess.overview2} alt="" />
            </div>
            <div className='overview-container'>
                <h1>Creating safe AGI that benefits all of humanity</h1>
                <button>Learn about OpenAI</button>
            </div>
        </div>
    )
}

export default Overview