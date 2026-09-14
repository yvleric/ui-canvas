import React, { useState, useRef } from 'react'

const ServiceCard = ({ service }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [visible, setVisible] = useState(false)

    const divRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const bounds = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        });
    }

    return (
        <div
            ref={divRef}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={handleMouseMove}
            className='group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700/80 bg-gray-100/50 dark:bg-gray-800/50 p-[1px] shadow-lg shadow-gray-100 dark:shadow-none hover:-translate-y-1.5 transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10'
        >
            {/* Glowing spotlight effect following mouse position */}
            <div
                className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-2xl transition-opacity duration-300 ${visible ? 'opacity-60' : 'opacity-0'}`}
                style={{ left: position.x, top: position.y }}
            />

            {/* Inner Content Card */}
            <div className='relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-[11px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm h-full w-full transition-colors duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-900/80'>
                <div className='bg-indigo-50 dark:bg-gray-800 rounded-full p-3 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-indigo-100 dark:group-hover:bg-gray-700 transition-all duration-300'>
                    <img src={service.icon} alt={service.title} className='w-8 h-8' />
                </div>
                <div className='flex-1'>
                    <h3 className='font-bold text-lg text-gray-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300'>{service.title}</h3>
                    <p className='text-sm mt-1.5 text-gray-600 dark:text-gray-300 leading-relaxed'>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard


