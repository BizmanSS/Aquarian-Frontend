import React, { useState, useRef, useEffect } from "react";
import banner from "../../Assets/video/banner.mp4";
import thumbnail from "../../Assets/banner.png";
import { Link } from "react-router-dom";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
// import banner01 from "../../Assets/banner02.jpg";
const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);
  const { isMobile } = useMobile();
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowPauseButton(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current && videoRef.current.paused && !showThumbnail) {
        videoRef.current.play().catch(() => {});
      }
    }, 3000); // Check every 3 seconds

    return () => clearInterval(interval);
  }, [showThumbnail]);

  const togglePlay = () => {
    const video = videoRef.current;

    if (video.paused === null) {
      return;
    }
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      setShowPauseButton(true);
    } else {
      video.pause();
      setIsPlaying(false);
      setShowPauseButton(false);
    }
  };

  const onVideoEnd = () => {
    setIsPlaying(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 3000); // 3 seconds delay before replaying the video
  };

  const [vh, setVh] = useState(window.visualViewport.height);

  const handleResize = () => {
    setVh(window.visualViewport.height);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`w-full relative lg:pr-[6rem] h-[calc(100vh-6rem)] md:h-[99vh] flex flex-col items-center justify-center overflow-hidden
      ${isMobile ? "mt-[3rem] -mb-0" : "pt-6rem xl:pt-[6.5rem]"}`}
    >
      {/* {isMobile ? (
        <>
          <div className="w-full h-full flex object-cover items-center justify-center overflow-hidden">
            <img src={banner01} alt="" className="h-full object-cover w-full" />
          </div>
        </>
      ) : ( */}
        <>
          {!showThumbnail ? (
            <div className="w-full h-full object-cover flex items-start pointer-events-auto justify-center overflow-hidden">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                webkit-playsinline
                playsInline
                className={`min-h-full object-cover min-w-full brightness-75 md:brightness-100`}
                onClick={togglePlay}
                onEnded={onVideoEnd}
              >
                <source src={banner} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            <img src={thumbnail} alt="Thumbnail" className="w-[90%]" />
          )}
        </>
      {/* )} */}
      <div className="hidden md:flex flex-col pointer-events-auto justify-center gap-4 absolute left-[7rem] xl:left-[9rem] top-[60vh] lg:top-[50vh]">
        <div className=" text-white pr-4 text-lg md:text-[3rem] lg:text-[3.5rem] xl:text-[3.5rem] font-bold mb-3">
          Our goal is to help <br /> <br /> you achieve yours
        </div>

        <Link to={"/immigrate/permanent-residency"}>
          <button className="mr-10 bg-black text-white px-4 md:px-10 py-3 rounded-xl text-sm lg:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
            ⁠I want to Immigrate Permanently to Canada
          </button>
        </Link>

        <div className="flex items-center">
          {" "}
          <Link to={"/study/study-in-canada"}>
            <button className="mr-6 bg-transparent text-white px-4 md:px-8 lg:px-10 py-3 rounded-xl text-sm lg:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
              ⁠I want to Study
            </button>
          </Link>
          <Link to={"/work/work-in-canada"}>
            <button className="mr-10 bg-transparent text-white pl-4 md:px-10 lg:px-12 py-3 rounded-xl text-sm lg:text-lg border-[2px] border-[#01F9E1] font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
              ⁠I want to Work
            </button>
          </Link>
        </div>
      </div>

      <div className="z-30 md:hidden absolute w-full h-full flex flex-col pb-[13rem] items-center justify-end gap-[4rem]">
        <div className="flex  flex-col items-center justify-center gap-4 w-full h-fit">
          <div className="pl-4 text-white text-[25px] sm:text-[28px] font-light mb-3 tracking-wide w-full flex flex-col items-start justify-center leading-tight">
            Aquarian is a{" "}
            <span className=" text-[32px] block font-semibold">
              Canadian <br /> Immigration firm
            </span>
            <span className="relative w-[50%] max-w-[18rem] h-[1px] bg-white mt-3"></span>
            <div className=" text-white text-[16px] sm:text-[18px] font-medium mb-1 tracking-wide mt-3">
              Our goal is to help you achieve yours
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 w-full">
            {" "}
            <Link to={"/study/study-in-canada"}>
              <button className=" bg-[#00A292] absolute left-0 text-white px-8  py-3 rounded-r-3xl text-[12px] md:text-lg font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
                ⁠I WANT TO STUDY
              </button>
            </Link>
            <Link to={"/work/work-in-canada"}>
              <button className=" bg-white text-[#00A292] absolute right-0 px-8  py-3 rounded-l-3xl text-[12px] md:text-lg font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
                ⁠I WANT TO WORK
              </button>
            </Link>
          </div>
        </div>

        <Link to={"/immigrate/permanent-residency"} className="relative top-[10px]">
          <button className="bg-gray-400 text-nowrap lg:hidden bg-opacity-85  text-white px-8 py-3 rounded-3xl text-[12px] md:text-lg font-bold transition ease-in-out delay-70 hover:scale-y-[1.1] hover:scale-x-[1.1] duration-300">
            IMMIGRATE TO CANADA PERMANENTLY
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
