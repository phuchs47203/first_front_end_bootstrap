import React from 'react';

import './Update.css';
import { Feature } from '../../Components';
import { imagess } from '../../constants';
const updateFeatureData = [
    {
        imgURL: imagess.feature1,
        title: 'ChatGPT can now see, hear, and speak',
        linktoUpdate: 'https://openai.com/blog/chatgpt-can-now-see-hear-and-speak',
        date: 'Sep 25, 2023'
    },
    {
        imgURL: imagess.feature2,
        title: 'DALL·E 3',
        linktoUpdate: 'https://openai.com/dall-e-3',
        date: 'Sep 20, 2023'
    },
    {
        imgURL: imagess.feature4,
        title: 'Partnership with American Journalism Project to support local news',
        linktoUpdate: 'https://openai.com/blog/partnership-with-american-journalism-project-to-support-local-news',
        date: 'Jul 18, 2023'
    },
    {
        imgURL: imagess.feature3,
        title: 'Introducing OpenAI London',
        linktoUpdate: 'https://openai.com/blog/introducing-openai-london',
        date: 'Jun 28, 2023'
    }

]
const Update = () => {
    return (
        <div className='gpt4-update'>
            <div className='gpt4_update_hr' />
                
            <div className='gpt4_update_heading'>
                <h1>Latest updates</h1>
                <a href="https://openai.com/blog">View all update</a>
            </div>
            <div className='gpt4_update_container'>
                {
                    updateFeatureData.map((item, index) =>
                        <Feature linkimg={item.imgURL} title={item.title} linktoFeature={item.linktoUpdate} date={item.date} />
                    )
                }
            </div>

        </div>
    )
}

export default Update