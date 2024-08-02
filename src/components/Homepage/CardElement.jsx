import React from "react";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import './CardElement.css'
import { MdArrowOutward } from 'react-icons/md';

const CardElement = ({ data }) => {
  const { isMobile } = useMobile();

  return (
    <div className="w-full h-full flex items-center justify-center">
      {isMobile ? (
        <div
          onClick={() => (window.location.href = data.link)}
          className="relative h-[19rem] overflow-hidden transition-all ease-in delay-100 duration-300 group"
        >
          <img
            className="w-full h-full absolute object-cover"
            src={data.img}
            alt="amenities"
          />
          <div className="w-full h-full bg-black absolute opacity-40"></div>
          <div className="px-6 py-4">
            <div className="relative top-6 font-semibold text-[22px] mb-2 text-white flex items-center justify-center transition-all ease-in delay-100 duration-300">
              {data.title}
            </div>
            <p className=" relative top-6 text-white text-center text-[13px] 9xl:text-[15px] flex items-center justify-center mt-2 mb-6 px-2 py-4">
              {data.description}
            </p>
          </div>
          <div className="absolute bottom-[50px] w-full flex items-center justify-center">
            <button
              type="button"
              className=" text-white w-auto h-auto px-6 text-sm py-3 rounded-full"
              style={{
                background: 'rgba(215, 215, 215, 0.32)',
                backdropFilter: 'blur(8px)'
              }}
            >
              More Info
            </button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => (window.location.href = data.link)}
          className="max-w-[21rem] choose-program-card"
        >
          <div className="choose-program-card-image">
            <img
              src={data.img}
              alt="amenities"
            />
          </div>
          <div className="px-6 py-4">
            <div className="choose-program-card-header">
              {data.title}
            </div>
            <p className="choose-program-card-text">
              {data.description}
            </p>
          </div>
          <button className="choose-program-card-button">
          Explore
          <div className="choose-program-card-button-arrow">
          <MdArrowOutward/>
          </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default CardElement;
