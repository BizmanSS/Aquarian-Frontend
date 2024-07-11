import React, { useState } from 'react';
import '../../styles/AboutUs.css';
import Instagram from '../../Assets/Instagram_logo.svg';
import Youtube from '../../Assets/youtube.png';
import Twitter from '../../Assets/Twitter.png';
import LinkedIn from '../../Assets/LinkedIn.png';
import facebook from '../../Assets/Facebook.png';
import Thread from '../../Assets/Thread.jpg';
import { useMobile } from '../globalComponents/MobileContext/IsMobileContext';
const TheAquarian = () => {
  const { isMobile } = useMobile();
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isMobile) {
      setIsActive(!isActive);
    }
  };
  return (
    <div className='TheAquarian'>
      <h5 className='heading'>The Aquarian Community</h5>
      <div className='line'></div>
      <div className='text-div'>
        <p1>
          Join our online community and become a part of our 5000+ Aquarianite
          family. Read testimonials from our happy customers who benefited from
          the quality services we successfully provide for them and their
          families.
          <br />
          <br />
          If you have questions about the immigration procedure or are ready to
          begin your immigration journey to Canada;
          <br />
          <span style={{ fontWeight: '700' }}>
            Call us at <a href='tel:+919810890517'>+91 9810890517</a> /{' '}
            <a href='tel:+911244671300'>+91 124 4671300</a>
            <br /> Write to us at{' '}
            <a href='mailto:enq@iaquarian.com'>enq@iaquarian.com</a>
          </span>
          <br />
          <br />
          <div className='flexgap'>
            {!isActive && (
              <div
                className='button'
                style={{ backgroundColor: '#3E3E41', color: '#01f9e1' }}
                onMouseEnter={() => !isMobile && setIsActive(true)}
                onMouseLeave={() => !isMobile && setIsActive(false)}
                onClick={handleClick}
              >
                Join The Community
              </div>
            )}
            {isActive && (
              <div
                className='button2'
                style={{ backgroundColor: '#3E3E41', color: '#EEEEEE' }}
                onMouseLeave={() => !isMobile && setIsActive(false)}
                onClick={handleClick}
              >
                <div className='logos2'>
                  <a
                    href='https://www.linkedin.com/company/aquarian-immigration-services/'
                    className='mx-0 p-2'
                  >
                    <img alt='' src={LinkedIn} className='cursor-pointer' />
                  </a>
                  <a
                    href='https://www.facebook.com/people/Aquarian-Immigration/61558242973262/'
                    className='mx-0 p-2'
                  >
                    <img alt='' src={facebook} className='cursor-pointer' />
                  </a>
                  {/* <a href="https://www.twitter.com" className="mx-0 p-2">
                    <img alt="" src={Twitter} className="cursor-pointer" />
                  </a> */}
                  <a
                    href='https://www.threads.net/@aquarian_immigration'
                    className='mx-0 p-2'
                  >
                    <img
                      alt=''
                      src={Thread}
                      style={{ borderRadius: '5px' }}
                      className='cursor-pointer w-[2.2rem]'
                    />
                  </a>
                  <a
                    href='https://www.instagram.com/aquarian_immigration/'
                    className='mx-0 p-2'
                  >
                    <img alt='' src={Instagram} className='cursor-pointer' />
                  </a>
                  <a href='https://youtube.com' className='mx-0 p-2'>
                    <img alt='' src={Youtube} className='cursor-pointer' />
                  </a>
                </div>
              </div>
            )}
            <div className='button'>
              <a href='/contact-us'>Lets get in touch</a>
            </div>
          </div>
          <br /> We are happy to assist you in an efficient and committed
          manner!
        </p1>
      </div>
      <br />
      <br />
    </div>
  );
};

export default TheAquarian;
