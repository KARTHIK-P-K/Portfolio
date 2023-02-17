import React from 'react'
import Project1 from '../assets/pro1.png'
import Project2 from '../assets/pro2.png'
import Project3 from '../assets/pro3.png'
import Project4 from '../assets/pro4.png'
import Project5 from '../assets/pro5.png'
import Project6 from '../assets/netflix.png'

const Projects = () => {
  return (
    <div name="projects" className='w-full pt-12 md:h-screen  text-gray-300 bg-[#041b33] '>
      <div className='max-w-[1000px] h-full mx-auto p-4 flex flex-col justify-center w-full  '>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Projects
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
      {/* Container for projects */}
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
        {/* Grid Items */}
        <div style={{backgroundImage:`url(${Project1})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
          {/* Hover Effect for Images */}
          <div className='opacity-0 group-hover:opacity-100 '>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Meals Time
            </span>

            <div className='pt-8 text-center'>
              <a href='https://meals-app--karthikpk.repl.co/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://replit.com/@KarthikPk/Meals-app'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>

        <div style={{backgroundImage:`url(${Project2})`}} className='shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
          {/* Hover Effect for Images */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Jupyter Gym
            </span>

            <div className='pt-8 text-center'>
              <a href='https://jupyter-gym.netlify.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/KARTHIK-P-K/jupyter-gym'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>



        <div style={{backgroundImage:`url(${Project3})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
          {/* Hover Effect for Images */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Coloring Tool
            </span>

            <div className='pt-8 text-center'>
              <a href='https://bespoke-travesseiro-ee78c7.netlify.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/KARTHIK-P-K/Colouring-Tool'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>

        <div style={{backgroundImage:`url(${Project4})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
          {/* Hover Effect for Images */}
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Pic Some
            </span>

            <div className='pt-8 text-center'>
              <a href='https://scrimba.com/scrim/co22846a996b80c3c385540d8'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo 
                </button>
              </a>
              <a href='https://github.com/KARTHIK-P-K/picSome'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>

        <div style={{backgroundImage:`url(${Project5})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
         
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Candy Crush
            </span>

            <div className='pt-8 text-center'>
              <a href='https://candy-life.netlify.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/KARTHIK-P-K/Candy-Crush'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>

        <div style={{backgroundImage:`url(${Project6})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div  '>
          
          <div className='opacity-0 group-hover:opacity-100'>
            <span className='text-2xl font-bold text-white tracking-wider'>
              Netflix Clone
            </span>

            <div className='pt-8 text-center'>
              <a href='https://my-netflixclone-app.netlify.app/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Demo
                </button>
              </a>
              <a href='https://github.com/KARTHIK-P-K/Netflix-clone'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Code
                </button>
              </a>
            </div>
          </div>

        </div>
       



      </div>
      </div>

    </div>
  )
}

export default Projects