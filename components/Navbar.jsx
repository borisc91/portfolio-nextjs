import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import logo from '../public/assets/logo1.png'
import logomin from '../public/assets/logo.png'



function Navbar() {

const [nav, setNav] =useState(false);

const handleNav = () => {
    setNav(!nav);
}


  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-9'>
            <Image src={logo} alt="logo" />
        <div>
            <ul className='hidden md:flex'>
                <Link href='/'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                </Link>
                <Link href='/#about'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                </Link>
                <Link href='/#skills'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                </Link>
                <Link href='/#projects'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                </Link>
                <Link href='/#contact'>
                    <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                </Link>
            </ul>
            <div onClick={handleNav} className='md:hidden mr-6'>
                <AiOutlineMenu size={25} />
            </div>
        </div>
        </div>

        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
       'fixed left-[-130%] top-0 p-10 ease-in duration-500' }>
                <div>
                    <div className='flex w-full items-center justify-between'>
                    <Image src={logomin} alt="logo"  />
                    <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                        <AiOutlineClose />
                    </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together!</p>
                    </div>
                </div>

                <div className='py-4 flex flex-col'>
                    <ul className='uppercase'>
                    <Link href='/'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                    <Link href='/#about'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                    <Link href='/#skills'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                    <Link href='/#projects'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                    <Link href='/#contact'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
                    </ul>
                    
                </div>


            </div>

        </div>
        </div>
  )
}

export default Navbar;