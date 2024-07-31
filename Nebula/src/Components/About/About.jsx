import React from 'react'
import "../About/About.css"
import Header from '../Header/NavBar'
import leftImg from "../About/Images/HumanSkull.png"
import Home from '../home/Home'
function About() {
    return (
        <>
        <Header/>
            <div className='AboutSection'>
            <div className='Container'>
                <div className='leftImage'>
                    <img src={leftImg} alt="Image Not Found" />
                </div>
                <div className='rightHeading'>
                    <h1>About Us</h1>
                    <h3>Nebula: Smart conversations <span className='rightspan'>made simple </span> </h3>
                    <p>Unlock the future of communication with Nebula, your intelligent chatbot companion. Nebula is more than just a chatbot—it's your personal assistant, confidante, and conversation partner, all rolled into one.
                        Nebula is designed to make chatting easy, enjoyable, and insightful. With advanced AI technology, Nebula understands context,and adapts to your preferences, ensuring every conversation feels natural and meaningful.
                    </p>

                    <div className='socialmedialogos'>
                        <a href="https://www.instagram.com/theayushransingh/">
                            <i class="ri-instagram-fill"></i>
                        </a>
                        <a href="https://www.facebook.com/">
                            <i class="ri-facebook-box-fill"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-ransingh-105a502a4/">
                            <i class="ri-linkedin-fill"></i>
                        </a>
                        <a href="https://twitter.com/?lang=en">
                            <i class="ri-twitter-x-fill"></i>
                        </a>
                    </div>
                </div>


            </div>
        </div>
        </>
        
    )
}

export default About
