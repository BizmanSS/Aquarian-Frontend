import React from 'react';
import img from '../../../Assets/Study Visa.png';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';

const Model = ({ showModal, setShowModal, data }) => {
  return (
    <>
      {showModal ? (
        <>
          <div
            onClick={() => setShowModal(false)}
            className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'
          >
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-purple-600 outline-none focus:outline-none'>
                <div className='flex items-center justify-between relative px-8 py-6 gap-6'>
                  <div className='flex flex-col items-center justify-center'>
                    <img
                      src={img}
                      alt='logo'
                      className='rounded-full border-[4px] border-white w-[6rem] h-[6rem] object-cover'
                    />
                    <div className='w-8 h-[0.8px] bg-white mt-6 mb-2'></div>
                    <div className='text-white font-semibold text-[15px] text-center'>
                      {data.name}
                    </div>
                    <div className='text-white text-[14px] text-center'>
                      {data.designation}
                    </div>
                    <div className='flex gap-2 justify-center mt-3'>
                      <FaTwitter className='text-sm text-white cursor-pointer  ' />
                      <FaLinkedinIn className='text-sm text-white cursor-pointer  ' />
                    </div>
                  </div>
                  <div className='text-white flex flex-col items-start justify-center w-full text-[14px]'>
                    {data.describe}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default Model;
