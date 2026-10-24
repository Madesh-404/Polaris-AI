import "./Sidebar.css"
import { assets } from "../../assets/assets"
import { useContext, useState } from "react"
import { Context } from "../../context/context"
const Sidebar = () => {

    const [extended, setExtended] = useState(false)
    const {onSent, previousPrompts, setRecentPrompt, newChat} = useContext(Context)

    const loadPrompt = async(prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    const onSetExtend = () => {
        setExtended((prevState) => !prevState)
    } 

    return (
        <main className="sidebar">
            <section className="top">
                <img onClick={onSetExtend} src={assets.menu_icon} alt="menu icon" className="menu-icon" />
                <div onClick={() => newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="plus icon" className="plus-icon" />
                    { extended ? <p className="new-chat-text">New Chat</p>: null }
                </div>
                { extended ? <section className="recents">
                        <p className="recent-title">Recent</p>
                        {previousPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entries">
                                    <img src={assets.message_icon} alt="message icon" className="msg-icon" />
                                    <p className="recent-entry">{item.slice(0,18)}...</p>
                                </div>                                 
                            )
                        })}                     
                </section>
              : null
              }
            </section>
            <section className="bottom">
                <div className="recent-entries bottom-item">
                    <img src={assets.question_icon} alt="question mark icon" className="question-icon" />
                    { extended ? <p>Help</p>: null }
                </div>
                <div className="recent-entries bottom-item">
                    <img src={assets.history_icon} alt="history icon" className="history-icon" />
                    { extended ? <p>History</p> : null } 
                </div>
                <div className="recent-entries bottom-item">
                    <img src={assets.setting_icon} alt="setting icon" className="setting-icon" />
                    { extended ? <p>Setting</p> : null }
                </div>
            </section>
        </main>
    )
}

export default Sidebar