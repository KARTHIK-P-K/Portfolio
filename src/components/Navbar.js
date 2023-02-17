import React,{useState} from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes , FaGithub,
  FaLinkedin,
  } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll'
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  const [nav,setNav] =useState(true)
  function handleNav () {
    setNav(prevNav=>!prevNav)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#041b33] text-gray-300">
     
    
      <div>
        <img src={Logo} alt="Logo" style={{ width: "50px" }} />
      </div>

       {/* menu */}
      
        <ul className="hidden md:flex">
          <li>
            <Link  className=" hover:text-pink-600 "  to="home"  smooth={true}  duration={500} >
              Home
            </Link>
          </li>
          <li>
            <Link  className=" hover:text-pink-600 " to="about"  smooth={true}  duration={500} >
              About
            </Link>
          </li>
          <li>
            <Link  className=" hover:text-pink-600 " to="skills"  smooth={true}  duration={500} >
              Skills
            </Link>
          </li>
          <li>
            <Link  className=" hover:text-pink-600 " to="projects"  smooth={true}  duration={500} >
              Projects
            </Link>
          </li>
          <li>
            <Link className=" hover:text-pink-600 "  to="contact"  smooth={true}  duration={500} >
              Contact
            </Link>
          </li>
        </ul>
     

      {/* hamburger */}
      <div className="md:hidden z-10 nav-pointer" onClick={handleNav}>
        {!nav ? <FaTimes/> : <FaBars/>}
      </div>

      {/* mobile-menu */}
      <ul className={!nav ? 'absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen bg-[#041b33]' : 'hidden' }>
          <li className="py-6 text-4xl">
             <Link className=" hover:text-pink-600 " onClick={handleNav} to="home"  smooth={true}  duration={500} >
              Home
            </Link></li>
          <li className="py-7 text-4xl"> 
            <Link className=" hover:text-pink-600 " onClick={handleNav} to="about"  smooth={true}  duration={500} >
              About
            </Link></li>
          <li className="py-7 text-4xl">
            <Link className=" hover:text-pink-600 " onClick={handleNav} to="skills"  smooth={true}  duration={500} >
              Skills
            </Link></li>
          <li className="py-7 text-4xl">
            <Link className=" hover:text-pink-600 " onClick={handleNav} to="projects"  smooth={true}  duration={500} >
              Projects
            </Link></li>
          <li className="py-7 text-4xl">
            <Link className=" hover:text-pink-600 " onClick={handleNav} to="contact"  smooth={true}  duration={500} >
              Contact
            </Link></li>
        </ul>

    {/*social icons */}
    <div className="hidden  lg:flex fixed  flex-col top-[30%] left-0">
      <ul>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#145ed4] ">
          <a href="https://www.linkedin.com/in/karthik-p-k-2629031a9/" target="_blank" className="flex justify-between items-center w-full text-gray-300 ">Linkedin <FaLinkedin size={30}/> </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#121e1c] ">
          <a href="https://github.com/KARTHIK-P-K" target="_blank" className="flex justify-between items-center w-full text-gray-300 ">Github <FaGithub size={30}/> </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#226f3c] ">
          <a href="/"  className="flex justify-between items-center w-full text-gray-300 ">Email <HiOutlineMail size={30}/> </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#464140] ">
          <a href="https://docs.google.com/document/d/1jXSH7aXxti1j-FqFl2rHe7r5rVdsmylOi8zp85kL0GE/edit" target="_blank" className="flex justify-between items-center w-full text-gray-300 ">Resume <BsFillPersonLinesFill size={30}/> </a>
        </li>
        <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#baba0b] ">
          <a href="https://leetcode.com/karthik_pk/" target="_blank" className="flex justify-between items-center w-full text-gray-300 ">Leetcode <SiLeetcode size={30}/> </a>
        </li>
      </ul>
    </div>

    </div>
  );
};

export default Navbar;
