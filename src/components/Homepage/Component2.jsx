import React, { useState } from 'react';
import Card from './CardElement';
import cardimg1 from '../../Assets/PR 1.png';
import cardimg2 from '../../Assets/Family Sponsorship 1.png';
import cardimg3 from '../../Assets/Super Visa 1.png';
import cardimg4 from '../../Assets/Work Visa 3.jpg';
import cardimg5 from '../../Assets/Study Visa.png';
import cardimg6 from '../../Assets/Visa Extension 2.png';
import cardimg7 from '../../Assets/Business Visa 2.png';
import cardimg8 from '../../Assets/Visitor Visa.png';
import cardimg9 from '../../Assets/Refusal.png';
import { useMobile } from '../globalComponents/MobileContext/IsMobileContext';

const Component2 = () => {
  const { isMobile } = useMobile();
  const [ exploreMOre, setExploreMore ] = useState(false);

  const toggleWxploreMore = () => {
    window.location.href = '#program';
    setExploreMore((prev) => !prev);
  };

  const array = [
    {
      link: '/immigrate/permanent-residency',
      img: cardimg1,
      title: 'Permanent Residency',
      description:
        'Make Canada your Permanent home! PR allows you to live, work and study in Canada indefinitely, with access to healthcare and social benefits.',
    },    
    {
      link: '/visit/visitor-visa-trv',
      img: cardimg4,
      title: 'Work Visa',
      description:
        'Tap into the rich and diverse Employment market in Canada by successfully obtaining your work visa through our top notch services.',
    },
    {
      link: '/visit/super-visa',
      img: cardimg5,
      title: 'Student Visa',
      description:
        'Pursue your academic aspirations at prestigious Canadian institutions making you independent and ready for a successful career.',
    },
    {
      link: '/visit/visitor-visa-trv',
      img: cardimg8,
      title: 'Visitor Visa',
      description:
        'Explore Canadas beauty with a Visitor Visa! Temporary entry allows you to experience stunning landscapes, rich culture, and lasting memories.',
    },
    {
      link: '/business/invest',
      img: cardimg7,
      title: 'Business Visa',
      description: `Establish your name in Canada's dynamic business environment! A Business Visa opens doors for investors, entrepreneurs, and self-employed individuals to establish and grow their ventures in Canada.`,
    },
    {
      link: '/sponsorship/sponsorship',
      img: cardimg2,
      title: 'Family Sponsorship',
      description:
        'Canadian Citizen and Permanent Residents can sponsor spouses, children, parents and grandparents to bring their family together!',
    },
    {
      link: '/visit/super-visa',
      img: cardimg3,
      title: 'Super Visa',
      description:
        'Enjoy hassle-free family visits! The Super Visa allows parents and grandparents of Canadian Citizens and Permanent Residents to stay for up to two years per visit, with multiple entries.',
    },
    {
      link: '/visit/visa-extension-and-extension',
      img: cardimg6,
      title: 'Visa Extensions',
      description:
        'Extend your stay and continue your Canadian adventure! Visa Extensions provide flexibility for individuals already in Canada, allowing them to prolong their stay for tourism, work, or study.',
    },
    {
      link: '/visit/visa-extension-and-extension',
      img: cardimg9,
      title: 'Refusals',
      description:
        'Need not be disheartened if your visa is refused. Our expertise and experience will leave no stone unturned in preparing you for your reviews and re-application.',
    },
  ];

  const arrayMobile = [
    {
      link: '/immigrate/permanent-residency',
      img: cardimg1,
      title: 'Permanent Residency',
      description:
        'Make Canada your Permanent home! PR allows you to live, work and study in Canada indefinitely, with access to healthcare and social benefits.',
    },    
    {
      link: '/visit/visitor-visa-trv',
      img: cardimg4,
      title: 'Work Visa',
      description:
        'Tap into the rich and diverse Employment market in Canada by successfully obtaining your work visa through our top notch services.',
    },
    {
      link: '/visit/super-visa',
      img: cardimg5,
      title: 'Student Visa',
      description:
        'Pursue your academic aspirations at prestigious Canadian institutions making you independent and ready for a successful career.',
    },
  ];

  return (
    <>
      <div
        id='program'
        className='w-full lg:w-[calc(100%-5rem)] text-[1.8rem] md:text-[3rem] font-semibold flex items-center justify-center mt-0 -mb-10'
      >
        Choose Your <span className='text-[#2FAB9E] mx-2 '>Program</span>
      </div>
      <div className='w-full lg:pr-[6rem] mb-[4rem] lg:mb-[8rem]'>
        <div className='grid max-w-[1200px] justify-center items-center gap-y-16 gap-10 mt-[5rem] mx-auto w-full lg:w-4/5 xl:w-full md:grid-cols-2 xl:grid-cols-3'>
          {isMobile ? (
            <div className='flex flex-col items-center justify-center gap-6'>
              
              {exploreMOre && array.map((item, index) => (
                <Card key={index} data={item} />
              ))}

              {!exploreMOre && arrayMobile.map((item, index) => (
                <Card key={index} data={item} />
              ))}

              {!exploreMOre && (
                <div
                  onClick={toggleWxploreMore}
                  className='bg-[#01a392] text-white px-6 py-3 rounded-full text-lg cursor-pointer '
                >
                  Explore More
                </div>
              )}
            </div>
          ) : (
            <>
              {/* {' '} */}
              {array.map((item, index) => (
                <Card key={index} data={item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Component2;
