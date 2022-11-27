import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";
import './work.css'
import './styles.css'
const Latestwork = () => {
    return (
        <>
            <div className="mainWork__div">
                <div className="work__container">
                    <div className="heading">
                        <h1 style={{ color: "rgb(255, 81, 0)" }}>My Latest Work</h1>
                        <p>perfect solution for digital experience😀</p>
                    </div>
                    <div className="work__boxes">

                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <div className='work1'>
                                    <h1>Dominose Pizza Delevry Website</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='work2'>
                                    <h1>Dominose Pizza Delevry Website</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='work3'>
                                    <h1>Dominose Pizza Delevry Website</h1>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                    <p className='discription'>We know: Work weeks can be rough.

                        In fact, whether you’re at work or at home, each day of the week seems to present a different challenge to maintaining your productivity and focus. On Monday, you’re looking for a bit of a jolt to start the week. Tuesday inspiration isn’t always as high as needed.</p>
                </div>
            </div>

        </>
    )
}

export default Latestwork