import React, { useEffect, useRef, useState } from 'react';
import img1 from '../../Assets/image 37.png';
import img2 from '../../Assets/image 38.png';
import img3 from '../../Assets/image 39.png';
import img4 from '../../Assets/image 40.png';
import img5 from '../../Assets/image 41.png';
import img6 from '../../Assets/Mask group.png';
import img7 from '../../Assets/image 42.png';
import BoxComponents from './BoxComponents';
import hoveredimg from '../../Assets/Rectangle 62.png';
import hoveredimg2 from '../../Assets/Rectangle 63.png';
import { Button2, PaginationNav1Presentation } from '../Pagination/Pagination';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Component5 = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef(null);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1120);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1120);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const data = [
    {
      name: 'Santosh Mahich',
      country: 'India',
      designation: 'Provincial nominee immigration',
      describe:
        'Aquarian Immigration made my dream of immigrating to Canada a reality. As a first-time applicant, I was clueless about the process. Their team patiently clarified all my doubts, advised on building a strong profile, and guided me through every step. Their expert advice and support helped me handle all the formalities smoothly. I highly recommend their top-notch services to anyone looking to settle in Canada. My experience with them was fantastic!',
    },
    {
      name: 'Harshita',
      country: 'India',
      designation: 'Study permit',
      describe:
        'I cannot be more grateful to Aquarian Immigration for their support and guidance in helping me obtain my study permit for Canada. The procedure altogether was overwhelming but through their expertise and experience in the field made all the difference. I lacked clarity on which course I wanted to pursue and which city would be the right fit for me. Through their consistent availability and patience it all went very smoothly and now I look forward to studying in Canada.',
    },
    {
      name: 'Arihant',
      country: 'India',
      designation: 'Study permit',
      describe:
        'Aquarian Immigration’s round the clock availability helped me navigate through all the necessary applications to get my study permit. I had my concerns about how I will adjust to this new life in Canada, but their follow up services allowed me to live up to my full potential here. My experience with them was exceptional and I strongly recommend AI to anyone who wishes to move to Canada.',
    },
    {
      name: 'Mamta Saini',
      country: 'India',
      designation: 'Work permit',
      describe:
        'Aquarian Immigration provided me with constant support and guidance so I could get my work permit for Canada. I was under all the formalities and could not manage everything until I availed their services. They were completely available from getting the LMIA to getting my visa stamped and if it wasn’t for their amazing services, I would not have been able to obtain the work permit. Thank you, Aquarian Immigration, for all your assistance and hard work to help me achieve my dream.',
    },
    {
      name: 'Gurpreet Singh',
      country: 'India',
      designation: 'Work permit',
      describe:
        'Tanpreet at Aquarian Immigration counseled me and helped me understand all the requirements I needed to fulfill to obtain my work permit. Throughout the procedure, she provided me with the appropriate knowledge and tips so I could easily complete all the paperwork. Thanks to Aquarian Immigration’s decades of experience and guidance at every step of the way, I now have an incredible job in Canada and am living my dream.',
    },
    {
      name: 'Sadhavi',
      country: 'India',
      designation: 'Sponsorship visa',
      describe:
        'Since I got married it was getting difficult for me to stay in India alone without my husband as he was a PR in Canada, and with his job it was difficult for him to stayback in India with me.  After which I came across Aquarian immigration services. They were patient and responsive to my needs, they explained every step of my immigration process and filed my application with all the details and I received my sponsorship visa timely and settled in Canada with my husband. I highly recommend them.',
    },
    {
      name: 'Sumit Punchi',
      country: 'India',
      designation: 'Express Entry immigration',
      describe:
        'Aquarian Immigration is outstanding for anyone considering moving to Canada. Their exceptional knowledge and services aligned perfectly with my goals. They provided an in-depth eligibility analysis, guided me through the documentation process, and ensured timely delivery of all documents. I truly appreciate their support, especially during the documentation phase. What stood out was their effort to understand my backstory and their post-arrival tips, which helped me adjust to my new life in Canada.',
    },
    {
      name: 'Jatinder Dhir',
      country: 'India',
      designation: 'Provincial nominee immigration',
      describe:
        'Before I came across Aquarian Immigration, my previous consultant lacked the required expertise which led to spoiling my application. Fortunately, I presented my case to Mr. Puneet at AI. He helped me recover from this damage by starting my case from scratch and preparing me for the review. He ensured that every possible question was addressed and provided effective tips. Even after the turbulent journey with my application, with his help I successfully received my PNP for Canada. I will forever be thankful to their relentless support.',
    },
    {
      name: 'Ravjot',
      country: 'Canada',
      designation: 'Business visa',
      describe:
        "I am incredibly happy with the service provided by Aquarian Immigration in helping me get my business visa for Canada. I had no idea about the application process and the documents required when I first went to their office. They were patient with my questions and concerns and made me feel confident in the application. With their help, I was able to get my business visa approved without any problems. I couldn't have done it without their support and expertise. I highly recommend them and am thankful to Aquarian Immigration!",
    },
    {
      name: 'Budi',
      country: 'Indonesia',
      designation: 'Tourist visa',
      describe:
        'My tourist visa was refused and I was disappointed and I did not know what to do next. Thanks to Aquarian Immigration Services, they helped me reapply and gave their expert guidance also. Their intelligence system analysed my documents and then correct certain mistakes before re-application. They supported me during the whole process and improved my chances of getting my tourist visa. I highly recommend their services to everyone who wants to immigrate. Thanks again, Aquarian Immigration!',
    },
    {
      name: 'Gopal',
      country: 'Nepal',
      designation: 'Tourist visa',
      describe:
        'I had a great experience with Aquarian Immigration as they helped me get my tourist visa. They answered all of my questions patiently and the documentation that is needed for Nepalese families. They gave tips and tricks on what mistakes I have to avoid and how I can maximise my chances of getting my tourist visa.  It all happened very smoothly with no challenges and time delay. You are truly EXCELLENT, Aquarian Immigration! Thank you very much.',
    },
    {
      name: 'Prerna',
      country: 'India',
      designation: 'Family sponsorship',
      describe:
        'Working with Aquarian Immigration for my family sponsorship to Canada was a pleasure. Tanpreet ma’am provided excellent guidance and was always available to answer my questions. Aquarian Immigration ensured all my documentation was accurate and up-to-date, making the process smooth. They kept me informed throughout, and now my family and I are happily settled in Canada. I am deeply grateful for their hard work on our behalf. They offer the best services for anyone needing immigration assistance to settle abroad.',
    },
    {
      name: 'Harinder',
      country: 'Canada',
      designation: 'Super visa',
      describe:
        'Me and my wife wanted to move to Canada but we didnt know the process. Puneet and Tanpreet from Aquarian Immigration helped us get our Super Visa. They professionally handled all the paperwork and have a lot of experience and expertise. They saved us time and efforts by helping us complete the documentation correctly. We received our Super Visa without any problems thanks to Aquarian Immigration. I definitely recommend their services to everyone who may require them for their immigration process. Thank you Aquarian for all your support and guidance.',
    },
    {
      name: 'Divita',
      country: 'India',
      designation: 'Student visa',
      describe:
        'I deeply appreciate Aquarian Immigration for their invaluable help in securing my student visa for Canada. They are experts, professional, and reliable, providing excellent support throughout the process. They counseled me and my parents, helped compile necessary documents, and suggested the best college for my profile. Thanks to their expertise, I secured my student visa smoothly and efficiently. I highly recommend Aquarian Immigration to anyone seeking visa application assistance. Thank you so much for your outstanding service!',
    },
    {
      name: 'Parvinder',
      country: 'Kenya',
      designation: 'Work permit',
      describe:
        'While working in Kenya, my father approached Aquarian Immigration for my work permit. After an hour-long initial counseling session, he was confident they were the right choice. After a year of working on my permit, Aquarian Immigration helped me apply for and obtain permanent residency in Canada. Their attention to detail and immigration knowledge made a significant difference. I am grateful for their dedication and support in making the PR application process seamless. I highly recommend Aquarian Immigration for any immigration needs. Thank you, Aquarian Immigration!',
    },
    {
      name: 'Tanya',
      country: 'India',
      designation: 'Sponsorship visa',
      describe:
        'I am deeply grateful to Aquarian Immigration for their exceptional support in my sponsorship visa application. Tanpreet promptly responded to my inquiries and meticulously reviewed my documents for accuracy. Their expertise made the process smooth and reassuring. Thanks to them, my sponsorship visa was approved, and I can now live in Canada with my family. I continue to seek their expert counseling on settling in Canada. I highly recommend their professional and reliable services to anyone needing immigration advice.',
    },
    {
      name: 'Adnan',
      country: 'Canada',
      designation: 'Express entry immigration',
      describe:
        "Among Canada's immigration consultants, many seem either too proud or unskilled. But when I met Aquarian Immigration, I felt comfortable right away and trusted them with my application. AI played a crucial role in navigating the complex Express Entry process. Their knowledgeable and patient team provided personalized guidance, improving my profile and assisting with documents and language tests. They were thorough and detail-oriented. Thanks to them, I got my PR. I highly recommend Aquarian Immigration to anyone looking to move to Canada.",
    },
    {
      name: 'Rohan',
      country: 'Canada',
      designation: 'Provincial nominee immigration',
      describe:
        "My fiancé in Canada found Aquarian Immigration to help with my Permanent Residency (PR) through the Alberta PNP. With their assistance, we applied via the Rural Alberta Stream. Three months after applying, I was nominated, and 20 days later, my PR application was submitted. Their team was incredibly helpful throughout, always available to answer my questions. Thanks to Aquarian Immigration, I'm now happily living in Alberta with my family. I highly recommend their services to anyone needing immigration support. Thank you, Aquarian Immigration!",
    },
  ];

  const Paginate = () => {
    // State for current page index
    const itemsPerPage = 9;
    const totalItems = 18;
    const maxPage = Math.ceil(totalItems / itemsPerPage);

    const handlePrevClick = () => {
      setPageIndex((prevIndex) => prevIndex - 1);
      setActiveIndex((prevIndex) => prevIndex - 9);
    };

    const handleNextClick = () => {
      setPageIndex((prevIndex) => prevIndex + 1);
      setActiveIndex((prevIndex) => prevIndex + 9);
    };

    return (
      <>
        <Button2
          content={
            <div className='flex ml-1 bg-[#00F8E1] rounded-md items-center justify-center'>
              <MdChevronLeft size={30} />
            </div>
          }
          onClick={handlePrevClick}
          disabled={pageIndex === 0}
        />
        <span className='text-[#009889] w-1'>{pageIndex + 1}</span>
        <Button2
          content={
            <div className='ml-1 bg-[#00F8E1] rounded-md flex items-center justify-center'>
              <MdChevronRight size={30} />
            </div>
          }
          onClick={handleNextClick}
          disabled={pageIndex === maxPage - 1}
        />
      </>
    );
  };
  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  return (
    <div className='w-[100%] pb-8 lg:pb-20 h-auto mt-10 pr- mb-12'>
      <div className='w-[99%] flex items-center justify-center '>
        <div className='text-[1.8rem] md:text-[3rem] font-semibold mb-0'>
          Our <span className='text-[#019989]'>Testimonials</span>
        </div>
      </div>
      {isMobile ? (
        <>
          {' '}
          <div
            ref={sliderRef}
            id='slider'
            className='max-w-[100%] overflow-hidden overflow-x-scroll scroll scroll-smooth gap-2 scrollbar-hide flex items-center justify-start pl-4'
          >
            {data.map((item, index) => (
              <BoxComponents
                key={index}
                color={'#FEFFFE'}
                style={{ backgroundColor: '#FEFFFE' }}
                imageUrl={hoveredimg}
                data={item}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className='flex items-center justify-end gap-4 my-4 relative lg:mx-[8rem] mx-[2rem] flex-wrap md:flex-nowrap'>
            {!isMobile && (
              <div className='absolute top-0 flex items-center justify-center -left-20 -z-10'>
                <img
                  src={img2}
                  alt='logo'
                  className='w-[7rem] relative -top-20'
                />
                <img
                  src={img1}
                  alt='logo'
                  className='w-[7.5rem] relative -top-[4rem] left-20'
                />
                <img
                  src={img6}
                  alt='logo'
                  className='w-[9rem] relative top-0 left-[8rem]'
                />
                <img
                  src={img3}
                  alt='logo'
                  className='w-[8rem] relative top-[7rem] right-[10rem]'
                />
                <img
                  src={img4}
                  alt='logo'
                  className='w-[7rem] relative top-[5rem] left-[1rem]'
                />
              </div>
            )}

            <BoxComponents
              color={'#FEFFFE'}
              style={{ backgroundColor: '#FEFFFE' }}
              imageUrl={hoveredimg}
              data={data[activeIndex]}
            />
            <BoxComponents
              color={'#01F8E0'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg2}
              data={data[activeIndex + 1]}
            />
          </div>
          <div className='flex items-center justify-end gap-4 my-4 relative lg:mx-[8rem] mx-[2rem] flex-wrap md:flex-nowrap'>
            {!isMobile && (
              <div className='absolute top-0 flex items-center justify-center -left-20 -z-10'>
                {' '}
                <img
                  src={img5}
                  alt='logo'
                  className='w-[8rem] relative top-[0rem] left-[3rem]'
                />
                <img
                  src={img7}
                  alt='logo'
                  className='w-[6rem] relative top-[5rem] left-[6rem]'
                />
              </div>
            )}
            <BoxComponents
              color={'#FEFFFE'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg}
              data={data[activeIndex + 2]}
            />
            <BoxComponents
              color={'#01F8E0'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg2}
              data={data[activeIndex + 3]}
            />
            <BoxComponents
              color={'#FEFFFE'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg}
              data={data[activeIndex + 4]}
            />
          </div>
          <div className='flex items-center justify-end gap-4 my-4 lg:mr-[8rem] mr-[2rem] flex-wrap md:flex-nowrap'>
            <BoxComponents
              color={'#FEFFFE'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg}
              data={data[activeIndex + 5]}
            />
            <BoxComponents
              color={'#01F8E0'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg2}
              data={data[activeIndex + 6]}
            />
            <BoxComponents
              color={'#FEFFFE'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg}
              data={data[activeIndex + 7]}
            />
            <BoxComponents
              color={'#01F8E0'}
              style={{ backgroundColor: '#01F8E0' }}
              imageUrl={hoveredimg2}
              data={data[activeIndex + 8]}
            />
          </div>
        </>
      )}
      {/* <div className='flex items-center justify-end gap-4 my-4 relative 2xl:mx-[8rem] lg:mx-[6rem] mx-[2rem] flex-wrap md:flex-nowrap'>
        {!isMobile && (
          <div className='absolute top-0 flex items-center justify-center -left-20'>
            <img src={img2} alt='logo' className='w-[7rem] relative -top-20' />
            <img
              src={img1}
              alt='logo'
              className='w-[7.5rem] relative -top-[4rem] left-20'
            />
            <img
              src={img6}
              alt='logo'
              className='w-[9rem] relative top-0 left-[8rem]'
            />
            <img
              src={img3}
              alt='logo'
              className='w-[8rem] relative top-[7rem] right-[10rem]'
            />
            <img
              src={img4}
              alt='logo'
              className='w-[7rem] relative top-[5rem] left-[1rem]'
            />
          </div>
        )}

        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#FEFFFE' }}
          imageUrl={hoveredimg}
          data={data[activeIndex]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 1]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4 relative 2xl:mx-[8rem] lg:mx-[6rem] mx-[2rem] flex-wrap md:flex-nowrap'>
        {!isMobile && (
          <div className='absolute top-0 flex items-center justify-center -left-20'>
            {' '}
            <img
              src={img5}
              alt='logo'
              className='w-[8rem] relative top-[0rem] left-[3rem]'
            />
            <img
              src={img7}
              alt='logo'
              className='w-[6rem] relative top-[5rem] left-[6rem]'
            />
          </div>
        )}
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 2]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 3]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 4]}
        />
      </div>
      <div className='flex items-center justify-end gap-4 my-4  2xl:mr-[8rem] lg:mr-[6rem] mr-[2rem] flex-wrap md:flex-nowrap'>
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 5]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 6]}
        />
        <BoxComponents
          color={'#FEFFFE'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg}
          data={data[activeIndex + 7]}
        />
        <BoxComponents
          color={'#01F8E0'}
          style={{ backgroundColor: '#01F8E0' }}
          imageUrl={hoveredimg2}
          data={data[activeIndex + 8]}
        />
      </div> */}

      {!isMobile && (
        <div className='w-full flex items-center justify-end gap-8 cursor-pointer p-4 px-[8rem]'>
          {/* <PaginationNav1Presentation /> */}
          <Paginate />
        </div>
      )}
    </div>
  );
};

export default Component5;
