import React from 'react';
import './chatgpt.css';
import { imagess } from '../../constants';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
const Chatgpt = () => {
  return (
    <div className='gpt4_chatgpt'>
      <div className='gpt4_chatgpt_img'>
        <img src={imagess.chatgpt4} alt="" />
      </div>
      <div className='gpt4_chatgpt_contain'>
        <div className='gpt4_chatgpt_hr' />
        <div className='gpt4_chatgpt_contain-content'>
          <h1>What can GPT-4 do?</h1>
          <div className='gpt4_chatgpt_contain-content-p'>
            <p>
              GPT-4 can accept images as inputs and generate captions, classifications, and analyses.
            </p>
            <p>
              GPT-4 is capable of handling over 25,000 words of text, allowing for use cases like long form content creation, extended conversations, and document search and analysis.
            </p>
            <p>
              GPT-4 can solve difficult problems with greater accuracy, thanks to its broader general knowledge and problem solving abilities.
            </p>
            <div className='gpt4_chatgpt_contain-content-button'>
              <a href="https://apps.apple.com/us/app/chatgpt/id6448311069">
                <img src={imagess.iconAppStore} alt="" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.openai.chatgpt">
                <img src={imagess.iconchplay} alt="" />
              </a>
              <a href="https://chat.openai.com/auth/login">
                Try on web
                <BsBoxArrowInUpRight />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Chatgpt;