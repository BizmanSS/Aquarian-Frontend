import React, { useState } from "react";
import img1 from "../../Assets/image 43.png";
import img3 from "../../Assets/image 56.png";

const Component1 = () => {
  return (
    <div className="w-full lg:w-[97%] flex items-center justify-center gap-0 md:gap-[4rem] pb-10 pt-12 lg:py-28  transition-all ease-in duration-300 delay-75">
      <div className="w-[20rem] h-[10rem] sm:w-[18rem] md:h-[17rem] flex flex-col items-center justify-center pl-[1.5rem] pr-4 py-2 rounded-2xl hover:border-transparent md:hover:scale-105 md:shadow-xl md:hover:shadow-4xl transition ease-in delay-50 duration-300 cursor-pointer">
        <img
          src={img1}
          alt={"logo"}
          className="relative top-[5px] left-[5px] w-[15rem] scale-125 lg:scale-100 lg:w-[13rem] -mt-2"
        />

        <p className="hidden md:block text-[12px] md:text-[15px] mt-2 text-center mb-4">
          Our RCIC certified experts will provide you with the best counsel for
          your immigration journey.
        </p>
      </div>
      <div className="w-[15rem] h-[10rem] md:w-[18rem] md:h-[17rem] flex flex-col items-center justify-center px-8 py-2 rounded-2xl hover:border-transparent md:hover:scale-105 md:shadow-xl transition ease-in delay-50 duration-300 cursor-pointer">
        <img
          src={img3}
          alt={"logo"}
          className="w-[10rem] scale-115 lg:scale-100 lg:w-[7rem]"
        />

        <p className="hidden md:block text-[12px] md:text-[15px] mt-2 text-center mb-4">
          With 30+ years of experience, we aim to continually provide aspiring
          immigrants with outstanding services.
        </p>
      </div>
    </div>
  );
};

export default Component1;
