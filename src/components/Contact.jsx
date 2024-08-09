import React from 'react';

function Contact() {
    return (
        <section id="contact">
            <div className='mt-32 h-auto sm:ml-60 md:ml-20 lg:ml-32 mb-20 '>
                <div>
                    <h1 className='sm:text-6xl font-semibold mb-2 text-4xl  sm:ml-0 ml-6 font-mono'>Contact</h1>
                    <p className='text-gray-500 sm:ml-0 ml-6 mb-6'>
                        Please fill out the following form and we will get back to you within the next 24 hours to help you become even greater at what you do.
                    </p>
                </div>

                <form action="">
                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center mt-9 ">
                        <div className="space-y-1 sm:w-1/2 w-full ml-5">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 text-xs">1</p>
                            <h2 className="font-semibold">What's your name?</h2>
                            <p className="opacity-50 font-medium text-xs">REQUIRED</p>
                        </div>
                        <div className="sm:w-60 w-60">
                            <input
                                type="text"
                                className="w-full bg-[#171717] rounded-full p-3 outline-none hover:bg-[#2B2B2B]"
                                placeholder="Type your full name"
                                name="name"
                            />
                        </div>
                    </div>

                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center mt-9">
                        <div className="space-y-1 sm:w-1/2 w-full ml-5">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 text-xs">2</p>
                            <h2 className="font-semibold">What is your Email address?</h2>
                            <p className="opacity-50 font-medium text-xs">REQUIRED</p>
                        </div>
                        <div className="sm:w-60 w-60">
                            <input
                                type="email"
                                className="w-full bg-[#171717] rounded-full p-3 outline-none hover:bg-[#2B2B2B]"
                                placeholder="example@domain.com"
                                name="email"
                            />
                        </div>
                    </div>

                 
                    <div className="flex sm:flex-row flex-col w-full sm:gap-2 gap-5 items-center mt-9">
                        <div className="space-y-1 sm:w-1/2 max-w-max ml-3">
                            <p className="rounded-full border border-gray-600 opacity-90 bg-black w-5 text-center text-slate-400 text-xs">3</p>
                            <h2 className="font-semibold">Can you tell me about your project / product / company in a few words?</h2>
                            <p className="opacity-50 font-medium text-xs">REQUIRED</p>
                        </div>
                        <div className="sm:w-60 w-60">
                            <textarea
                                className="w-full bg-[#171717] rounded-lg px-4 py-2 outline-none hover:bg-[#2B2B2B] sm:h-44 lg:ml-44 md:ml-0"
                                placeholder="Type your message here"
                                name="message"
                            ></textarea>
                        </div>
                    </div>
                </form>
                <button className='bg-green-500 sm:p-2 p-1 text-black m-2 rounded-full text-xl font-semibold from-neutral-400 sm:ml-0 ml-16 sm:mt-8 mt-2 md:mt-36 absolute lg:right-36 right-5 sm:right-80'>
                    Send message
                </button>
            </div>
        </section>
    );
}

export default Contact;
