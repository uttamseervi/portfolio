import React from 'react'
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { TypeAnimationComponent, ImageCarousel } from '../index.js';
import { NavLink } from 'react-router-dom';
import TextFadein from './TextAnimations/TextFadein.jsx';

import ParagraphsAnimation from './TextAnimations/ParagraphAnimation.jsx';
import AnimatedHeading from './TextAnimations/AnimatedHeading.jsx';

const Hero = () => {
    return (
        <section id="hero" className='overflow-x-hidden lg:mt-10 md:mt-[-230px] h-screen'>
            <div className="hero max-w-full h-screen ml-0 sm:ml-8 bg-transparent ">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <p className='text-xl mb-2 font-bold text-gray-400 font-mono sm:text-2xl '><TypeAnimationComponent /></p>
                        <h1 className='text-4xl mb-2 font-semibold font-sans text-slate-300'><AnimatedHeading /></h1>
                        <h1 className="text-3xl font-semibold text-slate-300"><TextFadein /></h1>


                        <p className="py-6 sm:py-3 text-base text-gray-500"><ParagraphsAnimation /></p>
                        <div className='flex gap-3 sm:gap-3'>
                            <button className="btn btn-primary text-xl hover:bg-slate-500 hover:border-none">  <NavLink
                                to='/contact'
                            >Lets's Talk </NavLink> <span className='text-xl'><RiKakaoTalkFill /></span></button>
                            <button className="btn btn-primary text-xl hover:bg-slate-500 hover:border-none">
                                <NavLink
                                    to='/about'
                                >Read more </NavLink>
                                <span className='text-xl'><FaLocationArrow /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
