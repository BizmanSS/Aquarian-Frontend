import React, { useState, useRef } from "react";
import "../../../styles/AquarianServices.css";
import PIBackground from "../../../Assets/Services/PIBackground.svg";
import PI from "../../../Assets/Services/PI.svg";
import ExpressEntry from "../../../Assets/Services/ExpressEntry.svg";
import PNP from "../../../Assets/Services/PNP.svg";
import Sponsorship from "../../../Assets/Services/Sponsorship.svg";
import RightBackground from "../../../Assets/Services/Group 469.png";
import BelowMobile from "../../../Assets/Services/BelowMobile.svg";
import VisaBackground from "../../../Assets/Services/VisaBackground.svg";
import VisaBackgroundMobile from "../../../Assets/Services/VisaBackgroundMobile.svg";
import Visa from "../../../Assets/Services/Visa.svg";
import StudentVisa from "../../../Assets/Services/studentVisa.svg";
import VisitorVisa from "../../../Assets/Services/visitorVisa.svg";
import WorkVisa from "../../../Assets/Services/WorkVisa.svg";
import BusinessVisa from "../../../Assets/Services/BusinessVisa.svg";
import startUpVisa from "../../../Assets/Services/startUpVisa.svg";
import superVisa from "../../../Assets/Services/superVisa.svg";
import investorVisa from "../../../Assets/Services/InvestorsVisa.svg";
import visaExtension from "../../../Assets/Services/visaExtension.svg";
import SpecializedService from "../../../Assets/Services/SpecializedServices.svg";
import Refusals from "../../../Assets/Services/Refusals.svg";
import SpecializedServiceBackground from "../../../Assets/Services/SpecializedServicesBackground.svg";
import SpecializedServiceBackgroundMobile from "../../../Assets/Services/SpecializedServicesBackgroundMobile.svg";
import InterviewPreparation from "../../../Assets/Services/InterviewPreparation.svg";
import PostArrival from "../../../Assets/Services/PostArrivalServices.svg";
import CitizenshipApplication from "../../../Assets/Services/citizenshipApplication.svg";
import PIBackgroundMobile from "../../../Assets/Services/PIBackgroundMobile.svg";
import { ToastContainer } from "react-toastify";
import BookAppointmentModel from "../../globalComponents/Model/BookAppointment";
import { useMobile } from "../../globalComponents/MobileContext/IsMobileContext";
import BannerPages from "../Banner/BannerPages";
export default function AquarianServices() {
  const [showAppointmentModel, setShowAppointmentModel] = useState(false);
  const expressEntryRef = useRef(null);
  const pnpRef = useRef(null);
  const sponsorshipRef = useRef(null);
  const studentVisaRef = useRef(null);
  const visitorVisaRef = useRef(null);
  const workVisaRef = useRef(null);
  const businessVisaRef = useRef(null);
  const startupVisaRef = useRef(null);
  const investorsRef = useRef(null);
  const superVisaRef = useRef(null);
  const visaExtensionsRef = useRef(null);
  const refusalsRef = useRef(null);
  const interviewPreparationRef = useRef(null);
  const postArrivalSupportRef = useRef(null);
  const citizenshipApplicationRef = useRef(null);
  const { isMobile } = useMobile();

  const scrollToRef = (ref) => {
    const scrollTop = ref.current.offsetTop - window.innerHeight * 0.25; // 10% of the window height
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  const handleAppointmentClick = () => {
    setShowAppointmentModel(true); // Show the BookAppointmentModel component when the button is clicked
  };
  return (
    <div>
      <BannerPages
        link={"aquarian-services"}
        title={"Aquarian Services"}
        description={"Aquarian Services"}
      />

      <div
        className="PermanentImmigration"
        style={{
          marginTop: isMobile ? "2rem" : "4rem",
          background: "#FFF",
          width: isMobile ? "100%" : "95%",
        }}
      >
        <img
          className={isMobile ? "MobilePIBackground" : "BackgroundImagePI"}
          src={isMobile ? PIBackgroundMobile : PIBackground}
          alt=""
        />
        <div className="hex1PI">
          <img src={PI} alt="" />
        </div>
        <div className="hex2PI">
          <img
            src={ExpressEntry}
            alt=""
            onClick={() => scrollToRef(expressEntryRef)}
          />
        </div>
        <div className="hex3PI">
          <img src={PNP} alt="" onClick={() => scrollToRef(pnpRef)} />
        </div>
        <div className="hex4PI">
          <img
            src={Sponsorship}
            alt=""
            onClick={() => scrollToRef(sponsorshipRef)}
          />
        </div>
      </div>

      <div className="Visa">
        <img
          className={isMobile ? "MobileVisaBackground" : "BackgroundImageVisa"}
          src={isMobile ? VisaBackgroundMobile : VisaBackground}
          alt=""
        />
        {isMobile && (
          <div className="hex7visa">
            <img src={Visa} alt="" />
          </div>
        )}
        <div className="hex1visa">
          <img
            src={visaExtension}
            alt=""
            onClick={() => scrollToRef(visaExtensionsRef)}
          />
        </div>
        <div className="hex2visa">
          <img
            src={superVisa}
            alt=""
            onClick={() => scrollToRef(superVisaRef)}
          />
          <img
            src={investorVisa}
            alt=""
            onClick={() => scrollToRef(investorsRef)}
          />
        </div>
        <div className="hex3visa">
          <img
            src={startUpVisa}
            alt=""
            onClick={() => scrollToRef(startupVisaRef)}
          />
        </div>
        <div className="hex4visa">
          <img
            src={BusinessVisa}
            alt=""
            onClick={() => scrollToRef(businessVisaRef)}
          />
          <img src={WorkVisa} alt="" onClick={() => scrollToRef(workVisaRef)} />
        </div>
        <div className="hex5visa">
          <img
            src={VisitorVisa}
            alt=""
            onClick={() => scrollToRef(visitorVisaRef)}
          />
        </div>
        <div className="hex6visa">
          <img
            src={StudentVisa}
            alt=""
            onClick={() => scrollToRef(studentVisaRef)}
          />
        </div>
        {!isMobile && (
          <div className="hex7visa">
            <img src={Visa} alt="" />
          </div>
        )}
      </div>

      <div className="SpecializedService">
        <img
          className={
            isMobile
              ? "BackgroundImageSpecializedMobile"
              : "BackgroundImageSpecialized"
          }
          src={
            isMobile
              ? SpecializedServiceBackgroundMobile
              : SpecializedServiceBackground
          }
          alt=""
        />
        <div className="hex1SS">
          <img src={SpecializedService} alt="" />
        </div>
        <div className="hex2SS">
          <img src={Refusals} alt="" onClick={() => scrollToRef(refusalsRef)} />
        </div>
        <div className="hex3SS">
          <img
            src={InterviewPreparation}
            alt=""
            onClick={() => scrollToRef(interviewPreparationRef)}
          />
        </div>
        <div className="hex4SS">
          <img
            src={PostArrival}
            alt=""
            onClick={() => scrollToRef(postArrivalSupportRef)}
          />
        </div>
        <div className="hex5SS">
          <img
            src={CitizenshipApplication}
            alt=""
            onClick={() => scrollToRef(citizenshipApplicationRef)}
          />
        </div>
      </div>

      <button
        style={{ marginLeft: "3rem" }}
        className="buttonGet"
        onClick={handleAppointmentClick}
      >
        Get Started
      </button>
      <div className="content-below-services">
        <div className="text-area">
          <h2 ref={expressEntryRef}>
            Express Entry{" "}
            <div
              style={{
                width: isMobile ? "85px" : "154px",
                backgroundColor: "#020183",
              }}
              className="line"
            ></div>
          </h2>
          <p2>
            Express entry is the fastest and the most popular route to PR. If
            you are a skilled professional looking to make Canada your new home,
            entrust your immigration journey to Aquarian Immigration Services.
            With our expertise, we will help you build a strong{" "}
            <a href="/immigrate/express-entry">Express Entry</a> profile, guide
            you through the complexities and ensure that your profile stands out
            from the rest. Contact Aquarian Immigration today and{" "}
            <span onClick={handleAppointmentClick}>
              get your first counselling session.{" "}
            </span>
          </p2>
          <h2 ref={pnpRef}>
            Provincial Nominee Program (PNP)
            <div
              style={{
                width: isMobile ? "113px" : "299px",
                backgroundColor: "#020183",
              }}
              className="line"
            ></div>
          </h2>
          <p2>
            Avail Aquarian Immigration’s{" "}
            <a href="/immigrate/provincial-nominee-program">PNP</a> expertise to
            effortlessly achieve nomination from the province of your choice. We{" "}
            <a href="/contact-us">guide you</a> through the various
            province-specific requirements, ensuring a smooth transition to
            Canadian residency tailored to your unique aspirations.
          </p2>
          <h2 ref={sponsorshipRef}>
            Sponsorship
            <div
              style={{
                width: isMobile ? "100px" : "107px",
                backgroundColor: "#020183",
              }}
              className="line"
            ></div>
          </h2>
          <p2>
            Aquarian Immigration Services can help you bring your family
            together. If you are a Permanent Resident in Canada or a Canadian
            citizen you can <a href="/sponsorship/sponsorship"> sponsor </a>{" "}
            your spouse, children, parents and grandparents and have them join
            you in Canada. Know everything you need to know about family
            sponsorship through our{" "}
            <a href="/contact-us">detailed support and assistance.</a>
          </p2>

          <h2 ref={studentVisaRef}>
            Student Visa
            <div
              style={{
                width: isMobile ? "100px" : "117px",
                backgroundColor: "#FE134E",
              }}
              className="line"
            ></div>
          </h2>
          <p2>
            Confused about which{" "}
            <a href="/study/study-in-canada">academic avenue </a>
            would suit you best? Pursue your educational aspirations at the
            prestigious Canadian institutions with the help of Aquarian
            Immigration’s top notch counseling. Our experts will assist you
            throughout your admission process from choosing the appropriate
            course to finding the right university and managing all the
            necessary formalities. Get your{" "}
            <a onClick={handleAppointmentClick}>
              first counseling session for free.
            </a>
          </p2>
          <h2 ref={visitorVisaRef}>
            Visitor Visa
            <div
              style={{
                width: isMobile ? "100px" : "96px",
                backgroundColor: "#FE134E",
              }}
              className="line"
            ></div>
          </h2>
          <p2>
            Temporary entry allows you to experience stunning landscapes, rich
            culture, and lasting memories. Explore Canada's bustling city life
            and the quiet countryside with a{" "}
            <a href="/visit/visitor-visa">Visitor Visa!</a>
            <a href="/contact-us"> Contact Aquarian Immigration Services</a> and
            get your visitor’s visa in no time.
          </p2>
          <h2 ref={workVisaRef}>
            Work Visa
            <div
              style={{ width: "96px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Unlock your full career potential in the Canadian economy! With a
            Work Visa, you can legally work, gain valuable experience, advance
            your career, and contribute to the country's thriving workforce. If
            you are a skilled worker looking to explore a new path in Canada,
            Aquarian Immigration has got your back. Apply for Express Entry or
            Provincial Nominee Program with the help of our{" "}
            <a href="/contact-us">services.</a> Calculate your
            <a href="/crs-calculator">
              {" "}
              Comprehensive Ranking System (CRS)
            </a>{" "}
            through our easy to use resources and tools.
          </p2>
          <h2 ref={businessVisaRef}>
            Business Visa
            <div
              style={{ width: "106px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Establish your name in Canada's dynamic business environment! A
            <a href="/business/invest"> Business Visa</a> opens doors for
            investors, entrepreneurs, and self-employed individuals to establish
            and grow their ventures in Canada. Explore the dynamic economy of
            the maple country and expand your portfolio with quality
            <a onClick={handleAppointmentClick}> counseling</a> from the
            business wizards at Aquarian Immigration Services. Get in{" "}
            <a href="/contact-us">touch with our experts to know more.</a>
          </p2>
          <h2 ref={startupVisaRef}>
            Start-up Visa
            <div
              style={{ width: "123px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Kickstart your{" "}
            <a href="/business/invest">entrepreneurial journey</a> to Canada
            with assurance and reliability. Aquarian Immigration services
            empower visionary entrepreneurs to actualise their ambitions. Learn
            more about startup visas and other business opportunities in Canada
            with our{" "}
            <a onClick={handleAppointmentClick}>all encompassing aid.</a>
          </p2>
          <h2 ref={investorsRef}>
            Investors
            <div
              style={{ width: "81px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Secure your financial future in Canada through Aquarian
            Immigration’s excellent{" "}
            <a href="/business/invest">investor immigration services. </a> With
            our expertise, we guide you through the investment landscape and
            ensure compliance with regulatory requirements. Become an investment
            expert with our{" "}
            <a onClick={handleAppointmentClick}>
              comprehensive counseling service.
            </a>
          </p2>
          <h2 ref={superVisaRef}>
            Super Visa
            <div
              style={{ width: "112px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            The Super Visa allows parents and grandparents of Canadian citizens
            and permanent residents to stay for up to two years per visit, with
            multiple entries. Enjoy family visits without any fuss through
            Aquarian Immigration’s expert{" "}
            <a href="/contact-us">services and guidance.</a>
          </p2>
          <h2 ref={visaExtensionsRef}>
            Visa Extensions
            <div
              style={{ width: "78px", backgroundColor: "#FE134E" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Extend your stay and continue your Canadian adventure! Visa
            Extensions provide flexibility for individuals already in Canada,
            allowing them to prolong their stay for{" "}
            <a href="/visit/visitor-visa">tourism,</a>{" "}
            <a href="/work/work-in-canada">work, </a> or{" "}
            <a href="/study/study-in-canada">study.</a> Extend your stay in the
            Great White North smoothly with the help of{" "}
            <a href="/contact-us">
              Aquarian Immigration’s meticulous services.
            </a>
          </p2>
          <h2 ref={refusalsRef}>
            Refusals
            <div
              style={{ width: "78px", backgroundColor: "#034402" }}
              className="line"
            ></div>
          </h2>
          <p2>
            If you got your visa refused for whatsoever reason, need not worry,
            Aquarian Immigration has got you covered. We specialise in refusals
            as well as complicated cases that might be holding your application
            back. Our experienced immigration consultants can help you turn your
            application around and get your visa approved in no time. Contact us
            to know more and get your{" "}
            <a href="/contact-us">first counselling session for free.</a>
          </p2>
          <h2 ref={interviewPreparationRef}>
            Interview preparation
            <div
              style={{ width: "186px", backgroundColor: "#034402" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Our team is devoted to helping you make your academic dream come
            true and study at the university of your choice. Interviews are an
            essential and sometimes the deciding factor of your acceptance into
            an institution. Our trained pioneers equip you with the right skills
            and techniques you need to make the most out of your interview.
          </p2>
          <h2 ref={postArrivalSupportRef}>
            Post arrival support
            <div
              style={{ width: "157px", backgroundColor: "#034402" }}
              className="line"
            ></div>
          </h2>
          <p2>
            Starting a new chapter of your life in another country can be
            daunting. Our experts aim at making this transition a smooth one. We
            assist you with finding the best accommodation and how to better fit
            into this new culture and flourish.
          </p2>
          <h2 ref={citizenshipApplicationRef}>
            Citizenship application
            <div
              style={{ width: "217px", backgroundColor: "#034402" }}
              className="line"
            ></div>
          </h2>
          <p2>
            The Regulated Canadian Immigration Consultants at Aquarian
            Immigration guide you in maneuvering through the complexities of
            applying for citizenship in Canada which can be a tedious process to
            handle on your own. We assess your eligibility and thereby make
            informed decisions about the application. To know more about the
            citizenship application process, contact Aquarian Immigration
            Services and avail your{" "}
            <a onClick={handleAppointmentClick}>
              first counseling session for free.
            </a>
          </p2>
          <br />
          <button className="buttonGet" onClick={handleAppointmentClick}>
            Get Started
          </button>
        </div>
        <img src={isMobile ? BelowMobile : RightBackground} alt="" />
      </div>
      <ToastContainer />
      <BookAppointmentModel
        showForm={showAppointmentModel}
        setShowForm={setShowAppointmentModel}
      />
    </div>
  );
}
