import React from 'react'

const NewsEventCart = ({date,title,subtile,href,image}) => {
  return (
    <div className='max-w-91 mx-auto rounded-[10px] p-5.5 border border-[#D2D2D2] space-y-5 ' >
        <img src={image} alt="" />
        <div className='space-y-2.5 '>
            <h3 className='text-gray-500 dark:text-gray-300 '>{date}</h3>
            <h2 className='text-black text-[20px] dark:text-foreground font-extrabold max-w-60'>{title}</h2>
            <p className='text-gray-600 dark:text-gray-300'>{subtile}</p>

        </div>

        <a href={href ? href : "#"} className='font-extrabold transition-all duration-150 hover:text-blue-950 dark:hover:text-blue-300'>Learn More</a>

      
    </div>
  )
}

export default NewsEventCart

