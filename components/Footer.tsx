import React from "react";

const Footer = () => {
    return (
        <div className='text-center dark:bg-teal-900 bg-slate-900 text-slate-300 '>
            <div className='max-w-2xl py-10 m-auto'>
                <p className='text-3xl'>
                    Life At{" "}
                    <span className='text-transparent font-bold bg-gradient-to-tr from-emerald-600 to-blue-300 bg-clip-text hover:to-red-600 transition'>
                        {" "}
                        Lehman College
                    </span>
                </p>
                <p className='py-4'>
                    A curated list of blogs written by Dylan Heslop. Freshman at
                    Lehman College. Computer Science Major. Future Software
                    Engineer.
                </p>

                <div className='flex justify-center mt-4'>
                    <a
                        href='/'
                        className='px-4 py-2 rounded-full bg-emerald-500 text-white font-bold hover:bg-transparent transition hover:border-emerald-500 hover:text-emerald-500 border border-transparent'>
                        Return Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
