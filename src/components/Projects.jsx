import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';
import { Link } from "react-router-dom"
import img1 from '../assets/Projects/images/img1.svg';
import spotify from '../assets/Projects/spotify.png';
import weatherapp from '../assets/Projects/weather-app.png';
import todo from '../assets/Projects/todo.png';
import megablog from "../assets/Projects/megablog.png"
import HMS from "../assets/Projects/HMS.png"
import bed from "../assets/Projects/images/bed.png"

function Projects() {
    return (
        <section id="projects" className="lg:mt-20 md:mt-20 mt-32 lg:ml-36 lg:h-min mb-20"> {/* Added mb-20 for bottom margin */}
            <div className="md:mt-24 md:h-auto"> {/* Changed to md:h-auto */}
                <div className="lg:ml-32 w-3/4 ml-4 md:ml-20">
                    <h1 className="text-4xl md:text-5xl bg-transparent text-slate-300 font-bold mb-4">
                        Work
                    </h1>
                    <p className="text-[16px] text-gray-500">
                        Below you can find projects which showcase what I can bring to the table. Within these projects, I dive into my process of how I solve real problems in today's world through the power of development.
                    </p>
                </div>
                <div className="cards flex justify-center flex-col items-center gap-8 mt-10">
                    <Link className="card flex md:w-[80%] md:h-[220px] lg:w-[60%] md:flex-row bg-[#1c1c1c] hover:scale-105 rounded-lg flex-col-reverse w-11/12">
                        <div className="projectInfo w-full md:w-1/2 md:h-[220px] h-[90px] ml-4 flex flex-col justify-center rounded-lg"> {/* Changed to w-full for smaller screens */}
                            <img src={img1} alt="Project Icon" className="w-10 ml-6 md:block lg:block hidden" />
                            <h2 className="text-2xl font-semibold mt-3 ml-4">Spotify</h2>
                            <p className="text-xs text-gray-500 ml-4">
                                HTML CSS JavaScript
                                <span className="text-xs hover:block hidden">
                                    <FaLocationArrow />
                                </span>
                            </p>
                        </div>
                        <div className="projectImage md:w-1/2 h-[220px] flex justify-center bg-black items-center rounded-lg">
                            <div className="flex justify-center">
                                <img className="lg:w-[90%] lg:h-[70%] md:w-[90%] w-[90%] h-[50%] rounded-lg" src={spotify} alt="Spotify Project Screenshot" />
                            </div>
                        </div>
                    </Link>

                    <Link to="https://mega-blog-sandy.vercel.app" className="card flex md:w-[80%] md:h-[220px] lg:w-[60%] md:flex-row bg-[#1c1c1c] hover:scale-105 rounded-lg flex-col-reverse w-11/12">
                        <div className="projectInfo w-full md:w-1/2 md:h-[220px] h-[90px] ml-4 flex flex-col justify-center rounded-lg"> {/* Changed to w-full for smaller screens */}
                            <img src={img1} alt="Project Icon" className="w-10 ml-6 md:block lg:block hidden" />
                            <h2 className="text-2xl font-semibold mt-3 ml-4">Mega Blog</h2>
                            <p className="text-xs text-gray-500 ml-4">
                                React Tailwind and Appwrite for backend
                                <span className="text-xs hover:block hidden">
                                    <FaLocationArrow />
                                </span>
                            </p>
                        </div>
                        <div className="projectImage md:w-1/2 h-[220px] flex justify-center bg-pink-100 items-center rounded-lg">
                            <div className="flex justify-center">
                                <img className="lg:w-[90%] lg:h-[70%] md:w-[90%] w-[90%] h-[50%] rounded-lg" src={megablog} alt="blog App Project Screenshot" />
                            </div>
                        </div>
                    </Link>

                    <Link to="" className="card flex md:w-[80%] md:h-[220px] lg:w-[60%] md:flex-row bg-[#1c1c1c] hover:scale-105 rounded-lg flex-col-reverse w-11/12">
                        <div className="projectInfo w-full md:w-1/2 md:h-[220px] h-[90px] ml-4 flex flex-col justify-center rounded-lg"> {/* Changed to w-full for smaller screens */}
                            <img src={bed} alt="Project Icon" className="w-16 ml-3 md:block lg:block hidden" />
                            <h2 className="text-2xl font-semibold mt-3 ml-4">Hotel Management System</h2>
                            <p className="text-xs text-gray-500 ml-4">
                                React Tailwind
                                <span className="text-xs hover:block hidden">
                                    <FaLocationArrow />
                                </span>
                            </p>
                        </div>
                        <div className="projectImage md:w-1/2 h-[220px] flex justify-center bg-base-200 items-center rounded-lg">
                            <div className="flex justify-center">
                                <img className="lg:w-[90%] lg:h-[70%] md:w-[90%] w-[90%] h-[50%] rounded-lg" src={HMS} alt="Hotel management system" />
                            </div>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
}

export default Projects;
