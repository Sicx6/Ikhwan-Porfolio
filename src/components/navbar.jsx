import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from  'react-icons/bs';
import {Link} from 'react-scroll'
import Resume1 from '../images/Resume - Ikhwan.pdf';



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex  justify-between items-center px-4 bg-[#1b2223]'>
        <div>
            <h1 className='text-4xl italic font-mono text-[#0ef6cc]'>Ikhwan</h1>
        </div>

        {/* menu */}
            <ul className='hidden md:flex '>
                <li>
                <Link to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li>
                <Link to="Skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li>
                <Link to="works" smooth={true} duration={500}>
                Works
                </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
            </ul>
        

        {/* hamburger for mobile */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>
        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1b2223] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-4xl '>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick}  to="Skills" smooth={true} duration={500}>
                Skills
                </Link>
                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="works" smooth={true} duration={500}>
                Works
                </Link>

                </li>
                <li className='py-6 text-4xl '>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
                </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-blue-500'>
                <a  className='flex justify-between items-center w-full ' href='https://www.linkedin.com/in/mohamad-ikhwan-935889214/'>
                    Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-slate-700'>
                <a  className='flex justify-between items-center w-full ' href='https://github.com/Sicx6'>
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-green-400">
            <a className="flex justify-between items-center w-full " href="mailto: ikhwanj95@gmail.com">
                Email <HiOutlineMail size={30} />
            </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-0px] duration-300 bg-gray-400">
            <a className="flex justify-between items-center w-full " href="{Resume1}">
                Resume <BsFillPersonLinesFill size={30} />
            </a>
            </li>

        </ul>

        </div>

    </div>
  )
}

export default Navbar