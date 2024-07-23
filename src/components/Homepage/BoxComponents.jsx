import React, { useState, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';

const BoxComponents = ({ color, style, imageUrl, data }) => {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  // const [hoverActive, setHoverActive] = useState(false);

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

  useEffect(() => {
    if (hovered) {
      const timeoutId = setTimeout(() => setVisible(true), 30);
      return () => clearTimeout(timeoutId);
    } else {
      setVisible(false);
    }
  }, [hovered]);

  const handleMouseHoverIn = () => {
    if (hovered) return;
    setHovered(true);
  };
  const handleMouseHoverOut = () => {
    setHovered(false);
  };

  return (
    <div>
      {isMobile ? (
        <div
          className={`w-[20rem] ${
            isReadMore ? 'max-h-[50rem]' : 'h-[20rem]'
          } my-10 shadow-xl p-6 rounded-2xl transition-all ease-in duration-200`}
        >
          {' '}
          <div className='flex items-start justify-start'>
            <div>
              <div className='text-xl font-medium w-full'>{data.name}</div>
              <div className='font-semibold tracking-wide text-[14px] pt-2 w-full'>
                {data.designation}
              </div>
            </div>
            <div className='text-2xl relative right-2 -top-2 ml-auto'>
              <MdArrowOutward />
            </div>
          </div>
          <div className='text-[13px] mt-4 font-light tracking-wide font-poppins leading-relaxed pr-2 relative '>
            {isReadMore
              ? `${data.describe}`
              : `${data.describe.slice(0, 270)}...`}
            {!isReadMore ? (
              <span
                onClick={() => setIsReadMore(true)}
                className='text-[#44c9bc] font-medium cursor-pointer'
              >
                Read More
              </span>
            ) : (
              <span
                onClick={() => setIsReadMore(false)}
                className='text-[#44c9bc] font-medium cursor-pointer absolute right-0'
              >
                Close
              </span>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`border-[1px] border-black h-[16rem] p-4 cursor-pointer transition ease-in delay-100 duration-300 ${
            hovered ? 'z-[4]' : 'z-[4]'
          }`}
          style={{
            ...style,
            backgroundColor: color,
            maxWidth: hovered ? '30rem' : '17rem',
            transition: 'all 0.4s ease-in',
          }}
          onMouseEnter={handleMouseHoverIn}
          onMouseLeave={handleMouseHoverOut}
        >
          {hovered ? (
            <>
              <div className='flex items-center justify-center gap-4 -mt-1'>
                <div className='flex flex-col items-center justify-center gap-2'>
                  <img
                    src={imageUrl}
                    alt='logo'
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: 'opacity 0.3s ease-in 0.3s',
                    }}
                    className='rounded-full border-[4px] border-black w-[5rem] xl:w-[6rem]'
                  />
                  <div
                    style={{
                      opacity: visible ? 0 : 0,
                      transition: 'opacity 0.3s ease-in 0.3s',
                    }}
                    className='hidden text-[13px] font-semibold text-center w-full'
                  >
                    {data.name}
                  </div>
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: 'opacity 0.3s ease-in 0.3s',
                    }}
                    className='text-[13px] font-semibold text-center w-full'
                  >
                    {data.name}
                  </div>
                  <div
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: 'opacity 0.3s ease-in 0.3s',
                    }}
                    className='font-semibold tracking-tight text-[10px] text-center -mt-1'
                  >
                    {data.designation}
                  </div>
                </div>

                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in 0.3s',
                  }}
                  className='hidden w-[1px] h-40 bg-black mt-6'
                ></div>
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in 0.3s',
                  }}
                  className='w-[1px] h-40 bg-black mt-6'
                ></div>
                <div
                  style={{
                    opacity: visible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in 0.3s',
                  }}
                  className='text-[10.8px] 2lg:text-[12px] font-light font-mono w-full h-[14.5rem] scrollbar-hide overflow-auto'
                >
                  {data.describe}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className='flex items-start justify-start'>
                <div>
                  <div className='text-xl font-medium w-full'>{data.name}</div>
                  <div className='font-semibold tracking-wide text-[12px] pt-2 w-full'>
                    {data.designation}
                  </div>
                </div>
                <div className='text-2xl relative right-2 -top-2 ml-auto'>
                  <MdArrowOutward />
                </div>
              </div>
              <div className='text-[11px] mt-4 font-light font-mono pr-2'>
                {data.describe.slice(0, 200)}...
              </div>
              {/* <div className='text-sm font-mono'>Read more...</div> */}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BoxComponents;
