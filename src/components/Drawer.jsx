import React from 'react'
import './drawer.css'
import {Link} from 'react-router-dom'

const Drawer = () => {

    const close = () => {
        var drawer = document.getElementById("drawer")
        drawer.style.width = "0px"
    }


    return (
        <>
            <div id='drawer' className='drawer__main__div'>
                <button className='drawer__close__btn' onClick={close}>x</button>
                <div className='main__container__all'>
                    <div className='drawer__container'>
                        <div className='drawer__link__container'>
                            <div className='avtar__div'>
                                <div className='avtar'><h3>Hi!</h3></div>
                                <div className='avtar__name__mail'>
                                    <h3>Survi</h3>
                                    <p>survi@gmail.com</p>
                                </div>
                            </div>
                            <div className='links__container__link'>
                                <div className='drawer__link__div'>
                                    <a className='Link'>Home</a>
                                </div>
                                <div className='drawer__link__div'>
                                    <a className='Link' href='/'>About</a>
                                </div>
                                <div className='drawer__link__div'>
                                    <a className='Link' href='./Service'>Blog</a>
                                </div>
                                <div className='drawer__link__div'>
                                    <a className='Link' href='./allComponent/Footer'>Contact</a>
                                </div>
                                {/* <button className='logout__btn'>Log Out</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Drawer