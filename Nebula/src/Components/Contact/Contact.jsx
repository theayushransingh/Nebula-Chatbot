import React from 'react'
import "../Contact/Contact.css"
import Header from '../Header/NavBar'

function Contact() {
    return (
        <>-
            <Header />
            <div className="contact">
                <div className="container">
                    <div className="heading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="slogan">
                        Your input is the catalyst for our growth and refinement
                    </div>
                    <div className="cards">
                        <div className="card-1 card">
                            <div className="cardHeading">
                                <i class="ri-map-pin-line logo"></i>
                                <h1>Address</h1>
                            </div>
                            <div className="cardinfo">
                                <p>Haribhai V. Desai College. 596, Behind Shanivar Wada, Budhwar Peth, Pune, Maharashtra </p>
                            </div>
                            <div className="link">
                                <a href="https://www.google.com/maps/place/Haribhai+V.+Desai+College+of+Commerce,+Arts+and+Science/@18.5181148,73.8529458,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c06f89479e03:0x191eea48f5eb34f!8m2!3d18.5181097!4d73.8555207!16s%2Fg%2F1tczntl3?entry=ttu" target='_blank'>Open Map <i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="card-2 card">
                            <div className="cardHeading">
                                <i class="ri-mail-line logo"></i>
                                <h1>Email</h1>
                            </div>
                            <div className="cardinfo">
                                <div className="mails">
                                    <p>ayushransingh4@gmail.com</p>
                                    <p>shrutihargude166@gmail.com</p>
                                    <p>aishu.j03@gmail.com</p>
                                </div>
                            </div>
                            <div className="link">
                                <a href="https://mail.google.com" target='_blank'>Open Mail<i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                        <div className="card-3 card">
                            <div className="cardHeading">
                                <i class="ri-phone-line logo"></i>
                                <h1>Phone</h1>
                            </div>
                            <div className="cardinfo">
                                <div className="mails">
                                    <p>9730599286</p>
                                    <p>8080345456</p>
                                    <p>8421775779</p>
                                </div>
                            </div>
                            <div className="link">
                                <a href="#" target='_blank'>Call Us <i class="ri-arrow-right-line"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Contact
