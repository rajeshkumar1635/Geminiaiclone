import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { context } from '../../context/context'; // Adjust the path as needed
export default function Main() {
    const {onSent,recentPrompt,showResult,loading,resultData,setInput,input}=useContext(context);

  return (
    <div className='main'>
         <div className='nav'>
            <p>Welcome to AI platform</p>
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
    {loading ? (
        <div className='loader'><hr/><hr/></div>
    ) : (
        <p dangerouslySetInnerHTML={{ __html: resultData }} />
    )}
</div>
                </div>}
        
            <div className='main-bottom'>
               <div className='search-box'>
                <input onChange={(e)=>setInput(e.target.value)} value={input}type='text' placeholder='Enter a prompt'/>
                <div>
                    <img src={assets.gallery_icon} alt=""/>
                    <img src={assets.mic_icon} alt=""/>
                    {input?<img onClick={()=>onSent(input)} src={assets.send_icon} alt=""/>:null}
                </div>
                </div> 
                <p className='bottom-info'>
                    &copy; {new Date().getFullYear()} RajeshKumar . All rights reserved.
                </p>
                <div className='profile-links' style={{ textAlign: 'center', margin: '10px 0' }}>
        <a href="https://github.com/rajeshkumar1635" target="_blank" rel="noopener noreferrer" style={{margin: '0 10px'}}>
            <img src={assets.github_icon} alt="GitHub" style={{width: '24px', verticalAlign: 'middle'}} />
        </a>
        <a href="https://www.linkedin.com/in/rajesh-kumar-kurapati-040a29183/" style={{margin: '0 10px'}}>
            <img src={assets.linkedin_icon} alt="LinkedIn" style={{width: '24px', verticalAlign: 'middle'}} />
        </a>
            </div>
        </div>
    </div>
    </div>
  )
}
