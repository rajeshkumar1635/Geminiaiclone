import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context'; // Adjust the path as needed
export default function Main() {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(context);

  console.log("resultData:", resultData);
  return (
    <div className='main'>
         <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
         </div>
      <div className='main-container'>
        {!showResult?
        <><div className='greet'>
            <p><span>Hello, Raj</span></p>
            <p>
                How can I help you today?
            </p>
        </div>
            <div className='cards'>
                <div className='card'>
        <p>Suggest Beautiful places to see on an jupcoming road trip </p>
        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
        <p>Briefly summarize this concept.Urban Planning  </p>
        <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className='card'>
        <p>Brainstrom team bonding activities</p>
        <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className='card'>
        <p>Improve the readability of the following code </p>
        <img src={assets.code_icon} alt=""/>
                    </div>
            </div></>:
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt=""/>
                    <p>
                        {recentPrompt}
                    </p>
                    </div>
                    <div className='result-data'>
                        <img src={assets.gemini_icon} alt="" />
                        {loading? <p>Loading...</p>:<p>{resultData}</p>}
                        {/* <p dangerouslySetInnerHTML={{__html:resultData}}> */}
                        
                        </div>
                </div>}
        
            <div className='main-bottom'>
               <div className='search-box'>
                <input onChange={(e)=>setInput(e.target.value)} value={input}type='text' placeholder='Enter a prompt'/>
                <div>
                    <img src={assets.gallery_icon} alt=""/>
                    <img src={assets.mic_icon} alt=""/>
                    <img onClick={()=>onSent(input)} src={assets.send_icon} alt=""/>
                </div>
                </div> 
                <p className='bottom-info'>
                    
                </p>
            </div>
        </div>
    </div>
  )
}
