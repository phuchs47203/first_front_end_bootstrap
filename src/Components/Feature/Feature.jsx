import React from 'react'
import './feature.css';
const Feature = ({ linkimg, title, linktoFeature, date }) => {
    return (
        <div className='gpt4_feature'>
            <div className='gpt4_feature_img'>
                <a href={linktoFeature}>
                    <img src={linkimg} alt="" />
                </a>

            </div>
            <div className='gpt4_feature_contain'>
                <h1><a href={linktoFeature}>{title}</a></h1>
                <p>{date}</p>
            </div>
        </div>
    )
}

export default Feature;