import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
   <div className='main'>
    <div className="nav">
        <p>Gemeini</p>
        <img src={assets.user_icon} alt="" />
    </div>
    <div className="main-container">
        <div className="greet">
            <p><span> Hello...Boss</span></p>
            <p>How can i help you </p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Any thing special..</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Beautiful day..</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Rain rain go away </p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Come again another day </p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
               < input type="text" placeholder='Type your message here...'/>
            
             <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
             </div>
            </div>
            <p className="bottom-info">
                Please double check the answers..
            </p>
        </div>
    </div>
   </div>
  )
}

export default  Main
