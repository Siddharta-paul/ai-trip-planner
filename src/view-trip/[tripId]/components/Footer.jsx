import React from 'react';
import { FaHeart } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="my-7 py-4 bg-gray-800 text-white">
            <div className="container mx-auto text-center">
                <h2 className="text-lg md:text-xl font-semibold">
                    Created with <FaHeart className="inline text-red-500 mx-1" /> by Siddharta Paul
                </h2>
                <p className="text-gray-400 text-sm md:text-base mt-2">
                    &copy; {new Date().getFullYear()} Siddharta Paul. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
