import React from "react";
import assets from "../assets/assets";

const Navbar = ({ theme, setTheme }) => {
    return (
        <div className='flex justify-between items-center px-4 dm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

            <img src={theme === 'dark' ? assets.logo_dark : assets.logo}
                className='w-32 sm:w-40' alt='' />


            <div>
                <a href="#" className='sm:hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-200 pb-2'>Home</a>
                <a href="#" className='sm:hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-200 pb-2'>Recent</a>
                <a href="#" className='sm:hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-200 pb-2'>Services</a>
                <a href="#" className='sm:hover:border-b-2 hover:border-gray-400 dark:hover:border-gray-200 pb-2'>Pricing</a>
            </div>

        </div>
    )
}

export default Navbar