import React, { useState, useEffect, useContext } from 'react';
import userimg from "../Chatpage/Assets/user.png";
import "./Chatpage.css";
import { Context } from '../../Context/Context';
import loadingLogo from '../Chatpage/Assets/loadingLogo3.png';
import { UserContext } from '../../Context/userContext';

function Chatpage() {
    const { onSent, recentPrompt, showResult, loading, resultData, SetInput, input, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
    const { user } = useContext(UserContext);

    const [userName, SetUserName] = useState("Dev");
    const [extended, setExtended] = useState(false);

    useEffect(() => {
        if (user) {
            SetUserName(user.firstName);
        }
    }, [user]);

    const loadprompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='Chatpage'>
            <aside className='Asidemenu'>
                <div className="top">
                    <div className="menu">
                        <i className="ri-menu-line" onClick={() => setExtended(prev => !prev)}></i>
                    </div>
                    <div className="newchat" onClick={() => { newChat() }}>
                        <i className="ri-add-large-line"></i>
                        {extended ? <p>New chat</p> : null}
                    </div>
                    {extended ?
                        <div className="recent">
                            <p className="recentTitle">Recent</p>
                            {prevPrompts.map((item, index) => (
                                <div key={index} onClick={() => loadprompt(item)} className="recentEntry">
                                    <i className="ri-chat-4-line"></i>
                                    <p>{item.slice(0, 18)}...</p>
                                </div>
                            ))}
                        </div>
                        : null
                    }
                </div>
            </aside>

            <main className='Main'>
                <div className="logoSection">
                    <p>Nebula</p>
                    <img src={userimg} alt="User" />
                </div>
                <div className="mainContainer">
                    {!showResult ? (
                        <>
                            <div className="greet">
                                <p>Hello, <span className='username'>{userName}</span></p>
                                <p>How can I assist you today?</p>
                            </div>
                            <div className="chat-cards">
                                <div className="chat-card">
                                    <p>What would the world be like if animals could talk</p>
                                    <i className="ri-brain-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>How do I make a reservation?</p>
                                    <i className="ri-calendar-2-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>Can you provide more details about Programming</p>
                                    <i className="ri-code-line"></i>
                                </div>
                                <div className="chat-card">
                                    <p>I need to learn a new skill for work. What online resources would you recommend?</p>
                                    <i className="ri-graduation-cap-line"></i>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="result">
                            <div className="resultTitle">
                                <img src={userimg} alt="User" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resultdata">
                                {loading ? (
                                    <>
                                        <img className='loadingImg' src={loadingLogo} alt="Loading" />
                                        <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <img className='loadingImg none' src={loadingLogo} alt="Loading" />
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="chatButton">
                        <div className="SearchBox">
                            <input
                                onChange={(e) => SetInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        e.preventDefault(); // Prevent form submission or other default behavior
                                        onSent();
                                    }
                                }}
                                type="text"
                                placeholder='Message Nebula'
                                value={input}
                            />
                            <i onClick={() => onSent()} className="ri-send-plane-2-line"></i>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Chatpage;
