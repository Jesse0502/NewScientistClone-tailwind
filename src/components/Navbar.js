import React from 'react';
import Logo from '../images/Logo.jpeg';
import './Navbar.css';
function Navbar() {
  const newsTypes = [
    'News',
    'Podcast',
    'Video',
    'Technology',
    'Space',
    'Physics',
    'Health',
    'More',
  ];
  const otherCategories = ['Shop', 'Courses', 'Events', 'Tours', 'Jobs'];
  return (
    <div>
      <div className='flex flex-col mt-3 justify-between lg:flex-row sticky mb-5'>
        <div className='hidden lg:block mt-4 font-bold'>
          <h2 className='text-primary-main'>NEWSLETTERS</h2>
          <span className='text-gray-500 font-medium'>
            Sign up to read our regular email <br /> newsletters
          </span>
        </div>
        <div className='flex items-center justify-between logo py-2'>
          <div className='block lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 items-center'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </div>
          <div className='bg-red w-80 px-2 self-stretch'>
            <img className='' src={Logo} alt='logo' />
          </div>
          <div className='flex gap-5 lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
        </div>
        <div className='flex text-center justify-center'>
          <button className='px-6 md:px-10 font-bold md:mr-0 py-1 lg:h-10 mt-5 lg:mt-7 rounded md:py-0 transition ease-out duration-300  bg-primary-main text-white hover:bg-primary-onHover'>
            Subscribe and Save 54%
          </button>
        </div>
      </div>
      <div className='relative hidden md:text-lg lg:text-xl sm:block lg:block'>
        <div className=''>
          {newsTypes.map((news) => (
            <span className='news-hover px-1.5 text-primary-text cursor-pointer font-bold'>
              {news}
            </span>
          ))}
          <div className='lg:inline-block md:hidden ml-36'>
            {otherCategories.map((news) => (
              <span className='otherCategories px-1.5 text-primary-main cursor-pointer font-bold hover:border-b-4 border-primary-main'>
                {news}
              </span>
            ))}
          </div>
          <div className='inline-block md:px-2 md:block md:float-right'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline-block mx-2'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 inline-block'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          <hr className='mt-0.5 bg-gray-500 h-0.5 w-full' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
