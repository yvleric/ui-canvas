import React from "react";

const Services = () => {

    const servicrsData = [
        {
            title: 'Advertising',
            description: 'We turn ideas into powerful digital solutions that connect, engage...',
            icon: assets.ad_icon
        },
        {
            title: 'Content Marketing',
            description: 'We help youu execte your plan and deliver results.',
            icon: assets.marketing_icon
        },
        {
            title: 'Content Writing',
            description: 'We help you create a marketing strategy that drives results.',
            icon: assets.content_icon,
        },
        {
            title: 'Social media',
            description: 'We help you build a strong social media presence and engage with your audience.',.',
            icon: assets.social_icon,
        }
    ]

    return (
        <div id='services' className='relative flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70
         -z-1 derk:hidden'/>
        </div>
    )
}

export default Services