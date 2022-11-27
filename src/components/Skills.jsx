import React from 'react'
import './skill.css'
const Skills = () => {
    return (
        <>
            <div className='service__main__div'>
                <div className='service__container__box'>
                    <div className='service__card'>
                        <h1 style={{ color: "rgb(255, 81, 0)",textShadow:"0 0 0.5px rgb(255, 81, 0)" }}>Skills</h1>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'> <h3>HTML</h3></div>
                        <div className='skill__icon'><img src="/image/html.png" alt="" /></div>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'>
                            <h3>CSS</h3>
                        </div>
                        <div className='skill__icon'>
                            <img src="/image/css.png" alt="" />
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'>
                            <h3>React Js</h3>
                        </div>
                        <div className='skill__icon'>
                            <img src="/image/react.png" alt="" />
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'>
                            <h3>Next Js</h3>
                        </div>
                        <div className='skill__icon'>
                            <img src="/image/next.png" alt="" />
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'>
                            <h3>Node Js</h3>
                        </div>
                        <div className='skill__icon'>
                            <img src="/image/node.png" alt="" />
                        </div>
                    </div>

                    <div className='service__card'>
                        <div className='overlay'>
                            <h3>Figma</h3>
                        </div>
                        <div className='skill__icon'>
                            <img src="/image/figma.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills