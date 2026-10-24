import './Main.css'
import { assets } from '../../assets/assets';
import { askGemini } from "../../config/config";
import { useContext } from 'react';
import { Context } from '../../context/context';
const Main = () => {

    const {

        showResults,
        loading,
        input,
        setInput,
        recentPrompt,
        previousPrompts,
        onSent,
        resultData
    
    } = useContext(Context)

    return(
        <main className="main">
            <nav className="nav">
                <p>Polaris</p>
                <img src={assets.user_icon} alt="user icon" className="user-icon"/>
            </nav>
            <section className="main-container">
              {
              !showResults ?
                <>
                  <div className="greet">
                    <p><span>Hello, Madesh.</span></p>
                    <p>How can I help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest top budget freindly tourist destinations I can visit</p>
                        <img src={assets.compass_icon} alt="compass icon" />
                    </div>
                    <div className="card">
                        <p>Briefly summarize this concept: React reconciliation</p>
                        <img src={assets.bulb_icon} alt="bulb icon" />
                    </div>
                    <div className="card">
                        <p>How to write a solid connection request in Linkedin</p>
                        <img src={assets.message_icon} alt="message icon" />
                    </div>
                    <div className="card">
                        <p>Improve the readability of this piece of code</p>
                        <img src={assets.code_icon} alt="code icon" />
                    </div>
                </div>
                </>
                :
                <div className='result'>
                    <div className="result-title">
                        <img className='user-icon' src={assets.user_icon} alt="user icon" />
                        <p>{recentPrompt}</p>
                    </div>
                 
                    <div className="result-data">
                        <img className="polaris-icon" src={assets.polaris} alt="polaris icon" />
                        { 
                        loading ? 
                        
                        <div className="loader">
                            <hr />
                            <hr />
                            <hr />
                        </div> : 
                        <p dangerouslySetInnerHTML={{__html:resultData}}></p>}
                    </div>
                    
                </div>
            }
                <section className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" className="search" placeholder='Enter a prompt here' />
                        <div className="options">
                            <img src={assets.gallery_icon} alt="gallery icon" />
                            <img src={assets.mic_icon} alt="mic icon" />
                           { input ? <img onClick={() => onSent()} src={assets.send_icon} alt="send icon" /> : null }
                        </div>
                    </div>
                    <p className="bottom-info">Polaris is an AI and it may display inaccurate information, so please double check the responses  </p>
                </section>
            </section>
        </main>
    )
}

export default Main;