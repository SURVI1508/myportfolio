import React from 'react'
import './contact.css'
const Contact = () => {
    return (
        <>
            <div className="mainContact__div">
                <div className="contact__container">
                    <div className="form__contaioner">
                        <div className="form">
                            <div className="contact__heading"><h2>Let's make somthing amaging together 🙃</h2></div>

                            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17024.330988246747!2d85.30871238760048!3d23.348924029545156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1668534977774!5m2!1sen!2sin" width="900" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                            <div className="form__box">
                                <form action="https://formspree.io/f/mqkjndyd" method='POST'>
                                    <input type="text" required name='name' placeholder='Enter name' />
                                    <input type="text" required name='mail' placeholder='Enter mail' />
                                    <textarea name="message" id="" cols="30" rows="5"></textarea>
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