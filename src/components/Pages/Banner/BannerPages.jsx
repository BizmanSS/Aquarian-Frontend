import React from 'react';

const BannerPages = ({ link, title, description }) => {
  return (
    <div className='w-[95%] mx-auto bg-banner text-white bg-cover bg-center bg-no-repeat h-[12.5rem] mt-[2.2rem] mb-10 rounded-3xl'>
      <div className='flex flex-col items-start justify-between pl-4 md:pl-8 md:px-14 lg:px-20'>
        <p className='text-gray-400 lg:pb-10 pt-10 cursor-pointer relative top-5 lg:top-10'>
          <a href='/' className='text-gray-400 hover:underline text-[13px]'>
            Home
          </a>{' '}
          &gt;{' '}
          <a
            href={`/${link}`}
            className='text-gray-400 hover:underline text-[13px]'
          >
            {title}
          </a>
        </p>

        <div className='flex flex-col items-center justify-center w-full '>
          <div className='text-[30px] md:text-[40px] lg:text-[45px] font-normal font-serif leading-normal text-center mt-4 lg:mt-1'>
            {description}
          </div>
          {/* <p className='text-white text-[14px] md:text-[16px] leading-normal pt-6 mb-4'>
          Find out your Immigration options.
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default BannerPages;
