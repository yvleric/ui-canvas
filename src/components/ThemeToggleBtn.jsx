import React, { useEffect } from 'react'
import assets from '../assets/assets';

const ThemeToggleBtn = ({ theme, setTheme }) => {

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    return (
        <button 
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="cursor-pointer focus:outline-none"
        >
            {theme === 'dark' ? (
                <img src={assets.sun_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full hover:bg-gray-800 transition-colors' alt="Switch to Light Mode" />
            ) : (
                <img src={assets.moon_icon} className='size-8.5 p-1.5 border border-gray-500 rounded-full hover:bg-gray-100 transition-colors' alt="Switch to Dark Mode" />
            )}
        </button>
    )
}

export default ThemeToggleBtn;