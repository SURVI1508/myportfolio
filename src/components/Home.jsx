import React from 'react'
import Navbar from './Navbar'
import './home.css'
import Drawer from './Drawer'
import "font-awesome/css/font-awesome.min.css"

const Home = () => {

    return (
        <>
            <div className='home__mainDiv'>
                <Drawer />
                <Navbar />
                <div className="home__container">
                    <div className="h1__content">
                        <h1>Hey There, <br />I'm Sourav</h1>
                        <p>I'm Sourav.I am a Web Developer,Currently I persuing Diploma in Food Technology.😊</p>
                        <div className='social__media__links'>
                            <div className='facebook'><a href="https://www.instagram.com/p/CXq7wc3vCUm0WghVRWSPLG7Qoq38npIXBl450I0/?igshid=YmMyMTA2M2Y=" target="_blank"><i style={{ color: "#c32aa3" }} className="fa fa-instagram"></i></a></div>
                            <div className='linkedin'><a href="https://www.linkedin.com/in/sourav-gupta-7bb53523a" target="_blank"><i style={{ color: "#0a66c2" }} className="fa fa-linkedin"></i></a></div>
                            <div className='linkedin'><a href="https://github.com/SURVI1508" target="_blank"><i style={{ color: "#171515" }} className="fa fa-github"></i></a></div>
                        </div>
                        <a className='button' href="/image/resumm.pdf" download>Download cv</a>
                        <div className="experience">
                            <h1>06</h1>
                            <p>Month's <br />Experience</p>
                        </div>
                    </div>

                    <div className="image__container">
                        <img src="https://ouch-cdn2.icons8.com/KLa7xQpMgENd_-IF7kJqj_2iMw9w0tfiEttUF9p8Z6E/rs:fit:256:332/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzky/L2IxMzdhODkxLTg1/N2YtNDM4Mi05OTdh/LWJjZmRkMzcwNzgz/ZC5wbmc.png" alt="pic" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home