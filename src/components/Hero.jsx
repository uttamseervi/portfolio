import React from 'react'
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaLocationArrow } from "react-icons/fa";
import { TypeAnimationComponent, ImageCarousel, Projects } from '../index.js';
import { NavLink } from 'react-router-dom';
import TextFadein from './TextAnimations/TextFadein.jsx';

import ParagraphsAnimation from './TextAnimations/ParagraphAnimation.jsx';
import AnimatedHeading from './TextAnimations/AnimatedHeading.jsx';
import bg1 from "../assets/bg1.jpg"

const Hero = () => {
    return (
        <section id="hero" className='overflow-x-hidden lg:mt-10 md:mt-[-230px] h-min'
            style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginTop: "-20px"
            }}
        >
            <div className="hero max-w-full h-screen ml-0 sm:ml-8 bg-transparent "
            >
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div>
                        <p className='text-xl mb-2 font-bold text-orange-700 font-mono sm:text-2xl '><TypeAnimationComponent /></p>
                        <h1 className='text-4xl mb-2 font-semibold font-sans text-slate-200'><AnimatedHeading /></h1>
                        <h1 className="text-3xl font-semibold text-green-600"><TextFadein /></h1>


                        <p className="py-6 sm:py-3 text-base font-semibold text-white"><ParagraphsAnimation /></p>
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

        </section >
    )
}

export default Hero
