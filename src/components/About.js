import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#041b33] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi,  I'm Karthik P K, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am a driven and enthusiastic Front-end Developer with a strong passion
                 for creating engaging and user-friendly websites. I have hands-on
                  experience in HTML, CSS & JavaScript.I am proficient in using 
                  ReactJS and have a strong understanding of responsive web design. 
                  I am a quick learner and always eager to take on new challenges 
                  and improve my skills. I am a team player and have strong 
                communication skills that allow me to effectively collaborate with
                 designers, developers, and clients.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
