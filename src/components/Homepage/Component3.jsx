import React, { useState } from "react";
import banner from "../../Assets/Rectangle 133.png";
import bannerMobile from "../../Assets/Rectangle 133Mobile.png";
import { ToastContainer } from "react-toastify";
import BookAppointmentModel from "../globalComponents/Model/BookAppointment";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import "../../styles/WhyChooseUs.css";
const Component3 = () => {
  const [showAppointmentModel, setShowAppointmentModel] = useState(false);
  const { isMobile } = useMobile();

  const handleAppointmentClick = () => {
    setShowAppointmentModel(true); // Show the BookAppointmentModel component when the button is clicked
  };
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {isMobile ? (
        <div className="w-[99%] lg:w-[70%] mt-10">
          <div className="text-[1.8rem] md:text-[3rem] font-semibold flex items-center justify-center md:block -mb-4">
            Why Choose <span className="text-[#019989]">Us</span>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="w-full max-w-[32rem] relative">
              <img
                src={bannerMobile}
                alt="banner"
                className="w-full mt-[3rem] rounded-3xl z-10"
              />
              <div className="w-full h-[91%] bg-gradient-to-b from-black to-black absolute top-12 opacity-40 rounded-3xl"></div>
              <div className=" w-full rounded-3xl absolute bottom-[0rem] px-4 flex flex-col items-start justify-center gap-6">
                <div className="text-[#FEFFFE] text-[22px] text-center">
                  <span className="text-[#019989] text-[28px]">Aquarian</span> -
                  Canadian immigration Firm
                </div>
                <div className="text-[#EEEEEE] font-normal text-[15px]  text-center -mt-4">
                  With an absolute commitment to efficiency and transparency,
                  Aquarian Immigration offers an all-encompassing and
                  revolutionary immigration service through our certified team
                  of industry experts, while forging lifelong relationships with
                  our clients.
                </div>
                <div className="w-full flex items-center justify-between mb-2">
                  <button
                    onClick={handleAppointmentClick}
                    className="bg-[#fefeff] text-[#01A392] px-8 py-3 rounded-full text-[15px] "
                  >
                    BookNow
                  </button>

                  <button className="bg-[#01A392] text-[#fefeff] px-8 py-3 rounded-full text-[15px] ">
                    <a href="/about-us">AboutUs</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="why-choose-us">
          <h2>
            Why Choose <span>Us</span>
          </h2>
          <div className="why-choose-us-bottom">
            <img src={banner} alt="" className="banner-img" />
            <div className="grey-text-box">
              <h3>Aquarian</h3>
              <p2>is a Canadian Immigration Firm</p2>

              <h6>
                With an absolute commitment to efficiency and transparency,
                Aquarian Immigration offers an all- encompassing and
                revolutionary immigration service through our certified team of
                industry experts, while forging lifelong relationships with our
                clients.
              </h6>
              <div className="buttons">
                <button onClick={handleAppointmentClick}>Book Now</button>
                <button2 onClick={() => (window.location.href = "/about-us")}>
                  About Us
                </button2>
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
