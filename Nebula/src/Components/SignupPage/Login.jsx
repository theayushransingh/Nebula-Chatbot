import React from 'react'
import toast from 'react-hot-toast'
import { useState } from 'react'
import vid1 from "../SignupPage/Assests/car.mp4"
import "../SignupPage/Login.css"
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const submitForm = async (e) => {
        e.preventDefault();
        const { email, password } = data;

        try {
            const { data } = await axios.post("./login", {
                email, password
            });
            if (data.error) {
                toast.error(data.error);

            } else {
                toast.success("Logged in successfully!");
                setData({ email: "", password: "" });
                navigate('/chat');
            }
        } catch (error) {

        }
    }
    return (
        <div className='Login-Page'>
            <video src={vid1} autoPlay loop muted></video>

            <div className="leftSections">
                <div className="wrapper">
                    <form action="#" onSubmit={submitForm}>
                        <h1>Login</h1>
                        <div className="input-Box">
                            <input type="text" placeholder='Email' required onChange={(e) => { setData({ ...data, email: e.target.value }) }} value={data.email} />
                            <i className='bx bxs-user'></i>
                        </div>
                        <div className="input-Box">
                            <input type="password" placeholder='Password' required onChange={(e) => { setData({ ...data, password: e.target.value }) }} value={data.password} />
                            <i className='bx bxs-lock-alt'></i>
                        </div>
                        <button className="btn">LogIn</button>
                        <div className="register-link">
                            <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
