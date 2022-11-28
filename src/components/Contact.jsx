import React from 'react'
import './contact.css'
// import { initializeApp } from 'firebase/app';
import { useState } from 'react';
const Contact = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        message: ""
    })
    let name, value;
    const userData = (e) => {
        name = e.target.name;
        value = e.target.value;
        setUser({ ...user, [name]: value })
    }
    const submit = async (e) => {
        e.preventDefault()
        const { name, email, message } = user;
        if (name && email && message) {
            const res = await fetch('https://portfolio-d0bf4-default-rtdb.firebaseio.com/portfolioForm.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message
                })
            });
            if(res){
                setUser({
                    name:"",
                    email:"",
                    message:""
                })
            }

        } else {
            alert("plx filll data")
        }

    }
    return (
        <>
            <div className="mainContact__div">
                <div className="contact__container">
                    <div className="form__contaioner">
                        <div className="form">
                            <div className="contact__heading"><h2>Let's make somthing amaging together 🙃</h2></div>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17024.330988246747!2d85.30871238760048!3d23.348924029545156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1668534977774!5m2!1sen!2sin" width="900" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                            <div className="form__box">
                                <form onSubmit={submit} >
                                    <input type="text" name='name' placeholder='Enter name' value={user.name} onChange={userData} method='POST' />
                                    <input type="text" name='email' placeholder='Enter mail' value={user.email} onChange={userData} />
                                    <textarea name="message" id="" cols="30" rows="5" placeholder='Write somthing here....' value={user.message} onChange={userData}></textarea>
                                    <input className='message__btn' type="submit" value="SEND" />
                                </form>
                            </div>
                            {/* <button className='message__btn'>SEND MESSAGE</button> */}

                        </div>
                        <div className="img__box"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact