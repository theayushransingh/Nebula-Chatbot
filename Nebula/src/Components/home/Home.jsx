import React from 'react'
import './Home.css';
import Image from "../home/images/Right_image.png"
import Leftimage from "../home/images/LeftFragments.png"
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import Header from '../Header/NavBar'
function Home() {
    return (
        <>
        <Header/>
        <div className='HomeComponent'>
            
            <div className='Container'>
                <div className='leftSection'>
                    < motion.img
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={Leftimage} alt="" >
                    </motion.img>


                    <h1 className='Heading'>NEB<span>U</span>LA</h1>
                    <p className='para'> Nebula is a groundbreaking chatbot designed to revolutionize user interactions and streamline communication processes. Drawing inspiration from the vastness and dynamism of outer space, Nebula represents an innovative approach to virtual assistants.</p>
                    {/* <h1>From Small Talk to Deep Dive:</h1>
                    <h1>Let Our Chatbot Guide You</h1> */}
                    <Link to='/login'>
                    <button className='homebtn' >Try Nebula<i className="ri-arrow-right-up-line"></i></button>
                    </Link>
                    
                </div>
                <div className='RightSection'>
                    <motion.img
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 1 }}
                        src={Image} alt="" >
                    </motion.img>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default Home
