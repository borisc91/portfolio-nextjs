<<<<<<< HEAD
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className=' text-lg py-2 text-gray-600'>
          I'm a front-end web developer with experience in digital marketing and computer systems(I worked as System Administrator for 4 years).
          <br />
           <br />Many years of IT experience have given me a strong foundation for web development and building complex solutions.
             I am passionate about coding and solving problems through code,
           and I am excited to work alongside other amazing programmers and learn so much more! <br />
           <br />
            Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed.<br /><br />
     I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer mb-6'>
              Check out some of my latest projects.
            </p>
          </Link>
          <a className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-6 py-3 my-14 mb-14 hover:scale-105 ease-in duration-300' href='/assets/Boris Čolović CV.pdf' download>DOWNLOAD MY CV</a>
        </div>
        <div className='w-full h-auto rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300 mt-4'>
          <Image src={AboutImg} className='rounded-xl' alt='lap-top opening' />
        </div>
      </div>
    </div>
  );
};

=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className=' text-lg py-2 text-gray-600'>
          I'm a front-end web developer with experience in digital marketing and computer systems(I worked as System Administrator for 4 years).
          <br />
           <br />Many years of IT experience have given me a strong foundation for web development and building complex solutions.
             I am passionate about coding and solving problems through code,
           and I am excited to work alongside other amazing programmers and learn so much more! <br />
           <br />
            Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed.<br /><br />
     I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer mb-6'>
              Check out some of my latest projects.
            </p>
          </Link>
          <a className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white px-6 py-3 my-14 mb-14 hover:scale-105 ease-in duration-300' href='/assets/Boris Čolović CV.pdf' download>DOWNLOAD MY CV</a>
        </div>
        <div className='w-full h-auto rounded-xl flex items-center justify-center py-4 hover:scale-105 ease-in duration-300 mt-4'>
          <Image src={AboutImg} className='rounded-xl' alt='lap-top opening' />
        </div>
      </div>
    </div>
  );
};

>>>>>>> 877031da7eb66bca1d75f7798d797ad44ce5476e
export default About;