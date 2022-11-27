import React from 'react'
import './nav.css'
// import { Link } from 'react-router-dom'
const Navbar = () => {


    const open = () => {
        const drawer = document.getElementById("drawer")
        drawer.style.width = "230px"
    }

    return (
        <>
            {/* font-family: 'Kaushan Script', cursive; */}
            <div className='main__navDiv'>
                <div className="logo">
                    <h1 style={{ fontFamily: 'Kaushan Script', marginLeft: "30px", fontSize: "30px",color:"red" }}>Survi</h1>
                </div>
                <div className="nav__bar">
                    <nav>
                        {/* <ul>
                            <li> <a href='/' >Home</a></li>
                            <li> <a href='/' >About</a></li>
                            <li> <a href='/'>Latest Work</a></li>
                            <li> <a href='/' >Contact</a></li>
                        </ul> */}
                    </nav>
                </div>

                <div onClick={open} className="menue__btn">
                    <img src="/image/menu.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Navbar