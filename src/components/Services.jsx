import React from "react";
import assets from "../assets/assets";
import Title from "./Title";

const Services = () => {

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We turn ideas into powerful digital solutions that connect, engage...',
            icon: assets.ads_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help you execute your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon,
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',
            icon: assets.social_icon,
        }
    ]

    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70
         -z-1 dark:hidden'/>

            <Title title='How can we help?' desc='From strategy to
            execution, we craft digital solutions that drive real business ' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl my-10'>
                {servicesData.map((service, index) => (
                    <div key={index} className='flex flex-col gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:-translate-y-1 transition-transform duration-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'>
                        <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500'>
                            <img src={service.icon} alt={service.title} className='w-6 h-6' />
                        </div>
                        <h3 className='text-xl font-semibold'>{service.title}</h3>
                        <p className='text-sm text-gray-600 dark:text-gray-300'>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services