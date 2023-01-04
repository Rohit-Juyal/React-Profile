import React from 'react'
import image from '../images/Ishant DP.jpeg'
import './style.css'
import { FaTwitter, FaSpotify, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'

function Home() {
    return (
        <div className='home'>
        <h3>About me</h3>
        <div className='home-main'>
            <div className='about-me'>
                <p>Hey! I am Ishant.</p>
                <p>I am assuming you are here from Twitter. Maybe you wanted to stalk me, or just know a bit more about who am I or why am I like this?</p>
                <p>Or, maybe you are here accidentally. In that case, here's a better place for you to be: <a href="https://www.youtube.com/" className='red'>Click</a></p>
                <p>I really love reading books, meeting new people, eating (a lot), and Cricket.</p>
                <p>I sometimes write my thoughts and share them. Sometimes, I code too. But mostly, I just spend my time thinking about product ideas and not enough building them.</p>
                <p>Other than that, I have been the founder of <a href="https://www.youtube.com/" className='red'>Crework</a> before, where I built a community for people to build better projects and meet the best peer group.</p>
                <p>Over a period of 18 months, we organized several CBCs on Machine Learning and Web Development.</p>
                <p>Currently, I am working as an APM at <a href="https://www.youtube.com/" className='red'>Procedure</a>.</p>
                <p>I have previously worked at <a href="https://www.youtube.com/" className='red'>Jar</a> as a Product Analyst. There, I used to play with data to answer questions about user behaviour. Honestly, that pushed me into Product.</p>

            </div>
            <div className='img-container'>
                <div className="image">
                    <img src={image} alt="image" />
                </div>
                <div className="links">

                    
                        <a href="https://www.google.com/"><FaTwitter className='links-icon'/></a>
                        <a href="https://www.google.com/"><FaLinkedin className='links-icon' /></a>
                        <a href="https://www.google.com/"><FaSpotify className='links-icon' /></a>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home

