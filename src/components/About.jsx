import React from 'react'
import js from "../assets/Skills/js.png"
import react from "../assets/Skills/reactjs.png"
import redux from "../assets/Skills/redux.png"
import vs from "../assets/Skills/vs.png"
import mongodb from "../assets/Skills/mongodb.png"
import mysql from "../assets/Skills/mysql.png"
import postman from "../assets/Skills/postman.png"
import tailwind from "../assets/Skills/tailwind.png"
import html from "../assets/Skills/html5.png"
import git from "../assets/Skills/git.png"
import cloudinary from "../assets/Skills/cloudinary.png"
import css from "../assets/Skills/css.png"
import nodejs from "../assets/Skills/nodejs.png"
import reactRouter from "../assets/Skills/reactRouter.png"

function About() {
    return (
        <section id="about" className='lg:mt-28 mt-36 mb-5'>
            <div className='h-min lg:ml-28  ml-4 md:ml-7 mt-5'>
                <h1 className='text-5xl bg-transparent text-slate-300 font-bold mb-4'>About me</h1>
                <div className="infoContent">
                    <div className="introduction mt-6">
                        <h1 className='text-3xl font-semibold mb-2 text-slate-300'>Introduction</h1>
                        <p>I am a second-year engineering student at BMS College of Engineering, pursuing a degree in Information Science and Engineering (ISE). My journey into development began in my first year, driven by a passion for creating web applications.</p>
                    </div>
                    <div className="EarlyBeginning mt-6">
                        <h1 className='text-3xl font-semibold mb-2 text-slate-300'>Early Beginnings</h1>
                        <p>From the start of college, I was determined to delve into development. Despite the initial challenges, these difficulties only fueled my determination to improve my skills.</p>
                        <h3 className='text-xl mt-3 text-slate-300 font-semibold'>Influential Mentors:</h3>
                        <p>A significant turning point was discovering <span className='underline font-semibold cursor-pointer'> <a href="https://www.youtube.com/@HiteshChoudharydotcom">Hitesh Choudhary's</a></span> courses, "Chai aur JavaScript" and "Chai aur React." His teachings helped me grasp complex concepts in JavaScript and React, forming the foundation of my development skills.
                            Hitesh Choudhary's courses provided me with a solid understanding of JavaScript and React. These skills have become the cornerstone of my toolkit, enabling me to create dynamic web applications
                        </p>
                    </div>
                    <div className="Passion mt-6">
                        <h1 className='text-3xl font-semibold mb-2 text-slate-300'>Passion for Web Development</h1>
                        <p>My enthusiasm for web development continues to grow through personal projects. Although I lack formal industry experience, my dedication to improving my skills is evident in the projects I undertake.</p>
                        <p>I am committed to continuous learning, actively seeking out resources to stay updated with the latest trends in web development. This ensures I remain competitive and well-prepared for future opportunities.</p>
                    </div>

                </div>




                <div className="techStacks mt-6 hover:cur">
                    <h1 className='font-bold text-5xl text-white mb-5'>Tech Stacks</h1>
                    <div id='skillBlocks' className='lg:w-4/5'>
                        <div className="frontend flex flex-col flex-wrap m-4 ">
                            <p className='text-gray-500 text-3xl font-bold mb-4'>Frontend</p>
                            <div className='skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3'>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={js} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>JavaScript</h1>
                                        <h4 className='text-xs text-gray-500'>Development</h4>
                                    </div>
                                </div>

                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={react} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>ReactJS</h1>
                                        <h4 className='text-xs text-gray-500'>Framework</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={redux} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Redux</h1>
                                        <h4 className='text-xs text-gray-500'>Library</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={reactRouter} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>ReactRouter</h1>
                                        <h4 className='text-xs text-gray-500'>Routing</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={tailwind} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Tailwind</h1>
                                        <h4 className='text-xs text-gray-500'>CSS Framework</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={html} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>HTML</h1>
                                        <h4 className='text-xs text-gray-500'>Markup Language</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={css} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>CSS</h1>
                                        <h4 className='text-xs text-gray-500'>Styling</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="backend flex flex-col flex-wrap m-4">
                            <p className='text-gray-500 text-3xl font-bold mb-4'>Backend</p>
                            <div className='skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3'>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={nodejs} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>NodeJS</h1>
                                        <h4 className='text-xs text-gray-500'>Development</h4>
                                    </div>
                                </div>

                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={js} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Express</h1>
                                        <h4 className='text-xs text-gray-500'>NodeJS Framework</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w-48 hover:bg-slate-800">
                                    <img src={postman} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Postman</h1>
                                        <h4 className='text-xs text-gray-500'>API Testing</h4>
                                    </div>
                                </div>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg md:w- hover:bg-slate-800">
                                    <img src={cloudinary} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Cloudinary</h1>
                                        <h4 className='text-xs text-gray-500'>Cloud</h4>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="Database flex flex-col flex-wrap m-4">
                            <p className='text-gray-500 text-3xl font-bold mb-4'>Database</p>
                            <div className='skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3'>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48">
                                    <img src={mongodb} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>MongoDB</h1>
                                        {/* <h4 className='text-xs text-gray-500'></h4> */}
                                    </div>
                                </div>

                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48">
                                    <img src={mysql} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>MySql</h1>
                                        {/* <h4 className='text-xs text-gray-500'></h4> */}
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="tools flex flex-col flex-wrap m-4">
                            <p className='text-gray-500 text-3xl font-bold mb-4'>Tools</p>
                            <div className='skillsStack flex flex-wrap lg:gap-5 md:gap-5 md:flex-row lg:flex-row flex-col gap-3'>
                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48">
                                    <img src={git} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>Git</h1>
                                        <h4 className='text-xs text-gray-500'>VersionControl</h4>
                                    </div>
                                </div>

                                <div className="skill  bg-slate-900 inline-flex lg:w-56 h-16 items-center p-2 justify-start rounded-lg hover:bg-slate-800 md:w-48 ">
                                    <img src={vs} className='w-16' alt="" />
                                    <div className=''>
                                        <h1 className='text-xl font-semibold'>VsCode</h1>
                                        <h4 className='text-xs text-gray-500'>Editor</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
