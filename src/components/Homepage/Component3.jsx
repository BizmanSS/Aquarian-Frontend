import React, { useState } from 'react';
import banner from '../../Assets/Rectangle 133.png';
import { ToastContainer } from 'react-toastify';
import BookAppointmentModel from '../globalComponents/Model/BookAppointment';
import { useMobile } from '../globalComponents/MobileContext/IsMobileContext';

const Component3 = () => {
  const [showAppointmentModel, setShowAppointmentModel] = useState(false);
  const { isMobile, vw } = useMobile();


  const handleAppointmentClick = () => {
    setShowAppointmentModel(true); // Show the BookAppointmentModel component when the button is clicked
  };
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      {(vw < 800) ? (
        <div className='w-[99%] lg:w-[70%] mt-10'>
          <div className='text-[1.8rem] md:text-[3rem] font-semibold flex items-center justify-center md:block -mb-4'>
            Why Choose <span className='text-[#019989]'>Us</span>
          </div>
          <div className='flex items-center justify-center relative'>
            <div className='w-full max-w-[32rem] relative'>
              <img
                src={banner}
                alt='banner'
                className='w-full mt-[3rem] rounded-3xl z-10'
              />
              <div className='w-full h-[93.2%] bg-gradient-to-b from-black to-black absolute top-12 opacity-40 rounded-3xl'></div>
              <div className=' w-full  rounded-3xl absolute bottom-[0rem] pl-8 flex flex-col items-start justify-center gap-6'>
                <div className='text-[#FEFFFE] text-[22px] text-center'>
                  <span className='text-[#019989] text-[28px]'>Aquarian</span> -
                  Canadian immigration Firm
                </div>
                <div className='text-[#EEEEEE] font-normal text-[15px] px-5 text-center -mt-4'>
                  With an absolute commitment to efficiency and transparency,
                  Aquarian Immigration offers an all-encompassing and
                  revolutionary immigration service through our certified team
                  of industry experts, while forging lifelong relationships with
                  our clients.
                </div>
                <div className='w-full flex items-center justify-center gap-14 pr-5 mb-10'>
                  <button
                    onClick={handleAppointmentClick}
                    className='bg-[#fefeff] text-[#01A392] px-8 py-3 rounded-full text-[15px] '
                  >
                    BookNow
                  </button>

                  <button className='bg-[#01A392] text-[#fefeff] px-8 py-3 rounded-full text-[15px] '>
                    <a href='/about-us'>AboutUs</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-[96%] lg:w-[80%] xl:w-[70%]'>
          <div className='text-[1.8rem] md:text-[3rem] font-semibold flex items-center justify-center md:block -mb-4'>
            Why Choose <span className='text-[#019989]'>Us</span>
          </div>
          <div className='flex items-center justify-center flex-wrap md:flex-nowrap'>
            <div className='w-[600px]'>
              <img
                src={banner}
                alt='banner'
                className='w-[95%] mt-[3rem] rounded-3xl z-10'
              />
            </div>
            <div className='bg-[#343436] w-full md:w-[60%] rounded-3xl pl-6 px-6 pr-3 xl:px-14 py-0 xl:py-12 relative -top-[4rem] md:top-[9rem] md:right-[6rem]'>
              <div className='text-[#FEFFFE] my-[4rem] text-xl'>
                <span className='text-[#019989]'>
                  Aquarian
                </span> is a Canadian immigration Firm.
              </div>
              <div className='text-[#EEEEEE] mt-10 mb-20 font-light text-lg pr-4 lg:pr-14'>
                With an absolute commitment to efficiency and transparency,
                Aquarian Immigration offers an all-encompassing and
                revolutionary immigration service through our certified team of
                industry experts, while forging lifelong relationships with our
                clients.
              </div>
              <div className='w-full flex items-center justify-between pr-10 mb-10'>
                <button
                  onClick={handleAppointmentClick}
                  className='bg-[#01F9E1] text-black px-8 py-3 rounded-sm text-[15px] hover:text-[#EEEEEE] hover:bg-[#3E3E41]'
                >
                  Book Now
                </button>

                <button className='bg-[#3E3E41] text-[#EEEEEE] px-8 py-3 rounded-sm text-[15px] hover:text-black hover:bg-[#01F9E1]'>
                  <a href='/about-us'>About Us</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
      <BookAppointmentModel
        showForm={showAppointmentModel}
        setShowForm={setShowAppointmentModel}
      />
    </div>
  );
};

export default Component3;
