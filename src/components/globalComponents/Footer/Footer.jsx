import React, { useEffect, useState } from 'react';
import logo from '../../../Assets/logo2.png';
// import logo2 from '../../../Assets/image 43.png';
// import logo4 from '../../../Assets/logo12.png';
import {
  FaInstagram,
  FaFacebookF,
  // FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaThreads,
} from 'react-icons/fa6';
import logo3 from '../../../Assets/AQUARIAN.png';
import '../../../styles/AboutUs.css';
import logoccic from '../../../Assets/image52.png';
import { useMobile } from '../MobileContext/IsMobileContext';


const Footer = ({ bottomComponentRef }) => {
  const { isMobile } = useMobile();
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  const [vh, setVh] = useState(window.innerHeight);

  const handleResize = () => {
    setVh(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={bottomComponentRef} className='footer pt-10'>
      <div className='flex items-start justify-around text-white pt-10 md:pt-10  border-b-[1px] border-gray-500 pb-6'>
        <div className='flex items-start justify-center gap-0 lg:gap-20'>
          <div className='hidden text-[12px] md:flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' className='w-[10rem] mt-6' />
            {/* <img src={logo4} alt='logo' className='w-[10rem] -mt-6 -mr-0' /> */}
          </div>
          <div className='flex flex-col items-start md:items-center justify-center ml-2 sm:ml-0'>
            <img
              src={logoccic}
              alt='logo'
              className='md:w-[15rem] sm:w-[10rem] w-[8rem] relative -top-8 sm:-top-4'
            />
            <div className='text-[12px] lg:text-sm text-[#B4B5B4] text-left mt-2 md:mt-8'>
              {/* <h1 className='AddressHeading -ml-2'>Address</h1> */}

              <a
                href='https://www.google.com/maps/place/Aquarian+Immigration+Services/@28.4082328,77.070377,15z/data=!4m6!3m5!1s0x390d23f44c7f8021:0x589c7dd32b5c2779!8m2!3d28.4082328!4d77.070377!16s%2Fg%2F11vqm85pq7?entry=ttu'
                className='address relative -top-10'
              >
                122A, Suncity Success Tower,
                <br /> Sector 65, Gurugram,
                <br /> Haryana 122011, India
              </a>

              <div className='flex flex-col items-start justify-center relative -top-2 '>
                <a
                  href='mailto:enq@iaquarian.com'
                  className='address absolute -top-6'
                >
                  enq@iaquarian.com
                </a>
                <a href='tel:+919810892192' className='address'>
                  +91- 9810892192
                </a>
                <a href='tel:+919810890517' className='address'>
                  +91- 9810890517
                </a>
                <a href='tel:+911244671300' className='address'>
                  +91- 1244671300
                </a>
              </div>
            </div>
          </div>
        </div>
        <ul className='text-[#B4B5B4]'>
          {!isMobile && (
            <>
              <br />
              <br />
            </>
          )}
          <li
            onClick={() => handleNavigation('/immigrate/permanent-residency')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Immigrate' : 'I want to Immigrate'}
          </li>
          <li
            onClick={() => handleNavigation('/work/work-in-canada')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Work' : 'I want to Work'}
          </li>
          <li
            onClick={() => handleNavigation('/study/study-in-canada')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Study' : 'I want to Study'}
          </li>
          <li
            onClick={() => handleNavigation('/sponsorship/sponsorship')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Sponsor' : 'I want to Sponsor'}
          </li>
          <li
            onClick={() => handleNavigation('/business/invest')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Invest' : 'I want to Invest'}
          </li>
          <li
            onClick={() =>
              handleNavigation('/employers/employers-outside-canada')
            }
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            {isMobile ? 'Employer' : 'I am an Employer'}
          </li>
        </ul>
        <ul className='text-[#B4B5B4]'>
          {!isMobile && (
            <>
              <br />
              <br />
            </>
          )}
          <li
            onClick={() => handleNavigation('/resources')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            Resources & Tools
          </li>
          <li
            onClick={() => handleNavigation('/aquarian-services')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            Our Services
          </li>
          <li
            onClick={() => handleNavigation('/blogs')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            Our Blogs
          </li>
          <li
            onClick={() => handleNavigation('/latest-news')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            Latest News
          </li>
          {/* <li
            onClick={() => handleNavigation('/about-us')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            About us
          </li>
          <li
            onClick={() => handleNavigation('/contact-us')}
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1 cursor-pointer'
          >
            Contact us
          </li> */}
        </ul>
        <ul className='text-[#B4B5B4] flex flex-col items-start justify-center gap-1 md:gap-0'>
          <span className='relative md:top-10'> Follow</span>
          {!isMobile && (
            <>
              <br />
              <br />
            </>
          )}
          <a
            href='https://www.linkedin.com/company/aquarian-immigration-services/'
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1'
          >
            <FaLinkedin /> <span className='hidden md:block'>LinkedIn</span>
          </a>
          <a
            href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1'
          >
            <FaFacebookF /> <span className='hidden md:block'>Facebook</span>
          </a>
          <a
            href='https://www.threads.net/@aquarian_immigration'
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1'
          >
            <FaThreads /> <span className='hidden md:block'>Thread</span>
          </a>
          <a
            href='https://www.instagram.com/aquarian_immigration/'
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1'
          >
            <FaInstagram /> <span className='hidden md:block'>Instagram</span>
          </a>
          <a
            href='/'
            className='flex items-center justify-start gap-4 text-[12px] md:text-sm text-[#B4B5B4] my-1'
          >
            <FaYoutube /> <span className='hidden md:block'>Youtube</span>
          </a>
        </ul>
      </div>
      <div className='flex flex-col-reverse sm:flex-row items-start pl-2 justify-between text-[#B4B5B4] gap-2 text-[12px] md:text-sm mt-4 sm:px-4'>
        <div> Copyright © 2021 Bookmate. All rights reserved.</div>
        <div className='flex items-center justify-center gap-3 sm:gap-10  mr-10'>
          <a href='/about-us'>About us</a>
          <div>Jobs</div>
          <a href='/contact-us'>Contact us</a>
          <div>Legal</div>
          {/* <div>For publishers & authors</div> */}
        </div>
      </div>
      <div>
        <img
          className={`block mt-8 mx-auto ${(vh < 850)? "w-[70%]" : "w-[90%]"}`}
          src={logo3}
          alt='logo3'
        />
      </div>
    </div>
  );
};

export default Footer;
