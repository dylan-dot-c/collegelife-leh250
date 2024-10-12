import React from "react";

const Header = () => {
    return (
        <header className='text-center py-10'>
            <h1 className='text-center text-4xl '>
                Life At{" "}
                <span className='text-transparent font-bold bg-gradient-to-tr from-emerald-600 to-blue-300 bg-clip-text hover:to-red-600 transition'>
                    {" "}
                    Lehman College
                </span>
            </h1>
            <p>A curated list of blogs written by Dylan Heslop</p>
        </header>
    );
};

export default Header;
