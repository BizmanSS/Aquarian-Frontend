import React, { useEffect, useRef, useState } from "react";
import logo from "../../../Assets/logo1.png";
import { RiMenu2Fill } from "react-icons/ri";
import Instagram from "../../../Assets/Instagram_logo.svg";
import Youtube from "../../../Assets/youtube.png";
import Twitter from "../../../Assets/Thread.jpg";
import LinkedIn from "../../../Assets/LinkedIn.png";
import facebook from "../../../Assets/Facebook.png";
import clipart1 from "../../../Assets/clipart/immigrate 1.png";
import clipart2 from "../../../Assets/clipart/work1.png";
import clipart3 from "../../../Assets/clipart/study 1.png";
import clipart4 from "../../../Assets/clipart/sponsorship 1.png";
import clipart5 from "../../../Assets/clipart/visit 1.png";
import clipart6 from "../../../Assets/clipart/invest 1.png";
import clipart7 from "../../../Assets/clipart/employer 1.png";
import BookAppointmentModel from "../../globalComponents/Model/BookAppointment";
import { ToastContainer } from "react-toastify";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import sitemapImmigrate from "../../../sitemapImmigrate";
import sitemapWork from "../../../sitemapWork";
import sitemapStudy from "../../../sitemapStudy";
import sitemapSponsorship from "../../../sitemapSponsorship";
import sitemapBusiness from "../../../sitemapBusiness";
import sitemapVisit from "../../../sitemapVisit";
import sitemapEmployers from "../../../sitemapEmployers";
import { IoMdClose } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";

const Header = ({ setShowPopUp }) => {
  const [ismobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [textContent, setTextContent] = useState("");
  const [selectedtext, setSelectedtext] = useState("");
  const [showAppointmentModel, setShowAppointmentModel] = useState(false);
  const [showMobileHeader, setShowMobileHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showHeadersSubmenu, setShowHeadersSubmenu] = useState({
    immigrate: false,
    work: false,
    study: false,
    sponsorship: false,
    business: false,
    visit: false,
    employer: false,
  });
  const [showHeadersSubSubmenuImmigrate, setShowHeadersSubSubmenuImmigrate] =
    useState({
      permanentResidency: false,
      expressEntry: false,
      provincialNomineeProgram: false,
      afterPermanentResidency: false,
      prFaqs: false,
      ruralAndNorthernImmigrationPilot: false,
      caregiverPrograms: false,
      aipAtlanticImmigrationProgram: false,
      agriFoodPilot: false,
    });
  const [showHeadersSubSubmenuWork, setShowHeadersSubSubmenuWork] = useState({
    workInCanada: false,
    workWithoutAPermit: false,
    temporaryForeignWorkerProgram: false,
    internationalMobilityProgramImp: false,
    openWorkPermits: false,
  });
  const [showHeadersSubSubmenuStudy, setShowHeadersSubSubmenuStudy] = useState({
    studyInCanada: false,
    studyPathwaysToPermanentResidence: false,
    levelsOfStudy: false,
    studyPermitInCanada: false,
    refusalsAndAppealsOfStudyPermits: false,
    extendAStudyPermit: false,
    postGraduateWorkPermitPgwp: false,
    designatedLearningInstitutionDli: false,
  });
  const [
    showHeadersSubSubmenuSponsorship,
    setShowHeadersSubSubmenuSponsorship,
  ] = useState({
    sponsorship: false,
    canadianSpousalSponsorship: false,
    childOrOtherDependantSponsorship: false,
    parentsAndGrandparentsProgramPgp: false,
    superVisa: false,
    minimumNecessaryIncomeMni: false,
  });
  const [showHeadersSubSubmenuBusiness, setShowHeadersSubSubmenuBusiness] =
    useState({
      businessInvest: false,
      pnpEntrepreneurStreams: false,
      workPermitToPrPathways: false,
    });
  const [showHeadersSubSubmenuVisit, setShowHeadersSubSubmenuVisit] = useState({
    visitorVisaTrv: false,
    visaExtensionAndRefusal: false,
    superVisa: false,
  });
  const [showHeadersSubSubmenuEmployes, setShowHeadersSubSubmenuEmployes] =
    useState({
      employersOutsideCanada: false,
      canadianEmployers: false,
    });
  const toggleshowHeadersSubSubmenuImmigrate = (value) => {
    setShowHeadersSubSubmenuImmigrate((prevState) => ({
      ...prevState,
      permanentResidency: false,
      expressEntry: false,
      provincialNomineeProgram: false,
      afterPermanentResidency: false,
      prFaqs: false,
      ruralAndNorthernImmigrationPilot: false,
      caregiverPrograms: false,
      aipAtlanticImmigrationProgram: false,
      agriFoodPilot: false,
      [value]: !prevState[value],
    }));
  };

  const toggleshowHeadersSubSubmenuWork = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuWork((prevState) => ({
      ...prevState,
      workInCanada: false,
      workWithoutAPermit: false,
      temporaryForeignWorkerProgram: false,
      internationalMobilityProgramImp: false,
      openWorkPermits: false,
      [value]: !prevState[value],
    }));
  };
  const toggleshowHeadersSubSubmenuStudy = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuStudy((prevState) => ({
      ...prevState,
      studyInCanada: false,
      studyPathwaysToPermanentResidence: false,
      levelsOfStudy: false,
      studyPermitInCanada: false,
      refusalsAndAppealsOfStudyPermits: false,
      extendAStudyPermit: false,
      postGraduateWorkPermitPgwp: false,
      designatedLearningInstitutionDli: false,
      [value]: !prevState[value],
    }));
  };
  const toggleshowHeadersSubSubmenuSponsonship = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuSponsorship((prevState) => ({
      ...prevState,
      sponsorship: false,
      canadianSpousalSponsorship: false,
      childOrOtherDependantSponsorship: false,
      parentsAndGrandparentsProgramPgp: false,
      superVisa: false,
      minimumNecessaryIncomeMni: false,
      [value]: !prevState[value],
    }));
  };
  const toggleshowHeadersSubSubmenuBusiness = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuBusiness((prevState) => ({
      ...prevState,
      businessInvest: false,
      pnpEntrepreneurStreams: false,
      workPermitToPrPathways: false,
      [value]: !prevState[value],
    }));
  };
  const toggleshowHeadersSubSubmenuVisit = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuVisit((prevState) => ({
      ...prevState,
      visitorVisaTrv: false,
      visaExtensionAndRefusal: false,
      superVisa: false,
      [value]: !prevState[value],
    }));
  };
  const toggleshowHeadersSubSubmenuEmployes = (value) => {
    console.log("togg");
    setShowHeadersSubSubmenuEmployes((prevState) => ({
      ...prevState,
      employersOutsideCanada: false,
      canadianEmployers: false,
      [value]: !prevState[value],
    }));
  };
  console.log(showHeadersSubSubmenuWork);

  function convertTitleToStateKey(title) {
    // Remove special characters including hyphens
    const cleanedTitle = title
      .replace(/[^a-zA-Z0-9 ]/g, " ")
      .replace(/-+/g, " ");

    // Split the cleaned title into words
    const words = cleanedTitle.split(" ").filter((word) => word !== "");

    // Convert the first word to lowercase and capitalize the first letter of the rest of the words
    const stateKey =
      words[0].toLowerCase() +
      words
        .slice(1)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join("");

    return stateKey;
  }

  const handleAppointmentClick = () => {
    setShowAppointmentModel(true); // Show the BookAppointmentModel component when the button is clicked
  };

  const toggleImmigrateSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      immigrate: !showHeadersSubmenu.immigrate,
      work: false,
      study: false,
      sponsorship: false,
      business: false,
      visit: false,
      employer: false,
    });
  };
  const toggleWorkSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      work: !showHeadersSubmenu.work,
      immigrate: false,
      study: false,
      sponsorship: false,
      business: false,
      visit: false,
      employer: false,
    });
  };

  const toggleStudySubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      study: !showHeadersSubmenu.study,
      immigrate: false,
      work: false,
      sponsorship: false,
      business: false,
      visit: false,
      employer: false,
    });
  };
  const toggleSponsorshipSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      sponsorship: !showHeadersSubmenu.sponsorship,
      immigrate: false,
      work: false,
      study: false,
      business: false,
      visit: false,
      employer: false,
    });
  };

  const toggleBusinessSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      business: !showHeadersSubmenu.business,
      immigrate: false,
      work: false,
      study: false,
      sponsorship: false,
      visit: false,
      employer: false,
    });
  };
  const toggleVisitSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      visit: !showHeadersSubmenu.visit,
      immigrate: false,
      work: false,
      study: false,
      sponsorship: false,
      business: false,
      employer: false,
    });
  };

  const toggleEmployersSubmenu = () => {
    setShowHeadersSubmenu({
      ...showHeadersSubmenu,
      employer: !showHeadersSubmenu.employer,
      immigrate: false,
      work: false,
      study: false,
      sponsorship: false,
      business: false,
      visit: false,
    });
  };
  const menuRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    // Initial call to set mobile status on component mount
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleItemHover = (index) => {
    setActiveItem(index);
  };
  const handleMenuClick = () => {
    menuRef.current.classList.add("scale-90");
    setTimeout(() => {
      menuRef.current.classList.remove("scale-90");
    }, 200);
    setShowMobileHeader(true);
  };
  const handleMouseEnter = () => {
    setIsHovering(true);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setTextContent("");
    setSelectedProgram("");
    setIsHovering(false);
    setSelectedtext("");
    setIsOpen(false);
  };

  const handleItemProgramClick = (program) => {
    setSelectedProgram(program);
  };
  // console.log(selectedProgram);
  const SvgComponent = ({ program }) => {
    return (
      <div className="hover:scale-115 hover:text-[#01997E] ">
        {selectedProgram === program ? (
          <FiMinus
            className="text-lg hover:text-xl"
            onClick={() => handleItemProgramClick("")}
          />
        ) : (
          <FiPlus
            className="text-lg hover:text-xl"
            onClick={() => handleItemProgramClick(program)}
          />
        )}
      </div>
    );
  };

  // console.log(selectedProgram);
  const HeaderComponent = ({ text, link }) => {
    // console.log(link);
    return (
      <ul className=" flex flex-col gap-0 -mt-2 font-normal">
        <li>
          <details className="group">
            <summary
              className={`flex items-center justify-between p-2 font-normal transition ease-in delay-20 duration-200 hover:text-[#01997E] hover:font-semibold hover:scale-105 ${
                selectedtext === text &&
                "text-[#01997E] font-semibold scale-105"
              } hover:cursor-pointer hover:scale-105`}
            >
              <span className="flex ">
                <a href={link}>{text}</a>
              </span>
            </summary>
          </details>
        </li>
      </ul>
    );
  };

  return (
    <div className="">
      <div className="bg-black h-[5rem] xl:h-[6.5rem] fixed z-40 top-0 flex flex-col items-center justify-start w-full md:w-[94%] 7xl:w-[96%] 7xl:-ml-[1.2rem] max-w-[140rem] 8xl:-ml-[3rem]">
        {!ismobile ? (
          <>
            {" "}
            <div className="bg-[#000000] fixed w-[94%] h-[30px] text-[13px] z-20 flex items-center justify-end max-w-[120rem]">
              <div className="flex items-center justify-end mr-[0rem]">
                <p className="px-4 py-1 text-[#939393] cursor-pointer hover:text-[#01F9E1]">
                  <a href="/about-us">About Us</a>
                </p>
                <p className="px-4 py-1 text-[#939393] cursor-pointer hover:text-[#01F9E1]">
                  <a href="/contact-us">Contact Us</a>
                </p>
                <div className="px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem]">
                  <a
                    href="https://www.linkedin.com/company/aquarian-immigration-services/"
                    className="mx-0 p-2"
                  >
                    <img
                      src={LinkedIn}
                      className="cursor-pointer w-[1.2rem]"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/"
                    className="mx-0 p-2"
                  >
                    <img
                      src={facebook}
                      className="cursor-pointer w-[1.2rem]"
                      alt=""
                    />
                  </a>
                  <a
                    href="https://www.threads.net/@aquarian_immigration"
                    className="mx-0 p-2 "
                  >
                    <img
                      src={Twitter}
                      className="cursor-pointer w-[1.2rem] rounded-lg"
                      alt=""
                    />
                  </a>
                  {/* <a
                    href='https://www.threads.net/@aquarian_immigration'
                    className='mx-0 p-2 '
                  >
                    <img
                      src={Twitter1}
                      className='cursor-pointer w-[1.2rem] rounded-lg'
                      alt=''
                    />
                  </a> */}
                  <a
                    href="https://www.instagram.com/aquarian_immigration/"
                    className="mx-0 p-2"
                  >
                    <img
                      src={Instagram}
                      className="cursor-pointer w-[1.2rem]"
                      alt=""
                    />
                  </a>
                  <a href="/" className="mx-0 p-2">
                    <img
                      src={Youtube}
                      className="cursor-pointer w-[1.2rem]"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[100%] flex items-center justify-between mt-4 relative">
              <a href="/">
                <img
                  src={logo}
                  alt="logo"
                  className="cursor-pointer w-[9rem] ml-2 lg:w-[10rem] xl:w-[11rem] 2xl:w-[13rem] lg:ml-4 xl:ml-8 2xl:ml-10 "
                />
              </a>

              {isHovering ? (
                <ul
                  className={`flex items-center justify-center text-[14px] xl:text-[15px] 2xl:text-[16px] gap-0 2xl:gap-4 text-white  left-[12rem] xl:left-[calc(30vw-10rem)] 2xl:left-[18rem] 3xl:left-[25rem] 4xl:left-[30rem] ml-10 overflow-hidden `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <li
                  onMouseEnter={() => handleItemHover(0)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 ${
                    activeItem === 0
                      ? 'border-b border-gray-600-[3px] border-b-[#009889]'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  <a href='/'>Home</a>
                </li> */}
                  <li
                    onMouseEnter={() => handleItemHover(1)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 1
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Immigrate
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(2)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 2
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Work
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(3)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 3
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Study
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(4)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 4
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Sponsorship
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(5)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 5
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Business
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(6)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 6
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Visit
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(7)}
                    className={`cursor-pointer  flex px-4 py-2.5 justify-center ${
                      activeItem === 7
                        ? "border-b-[3px] border-b-[#009889] bg-white text-black"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Employers
                  </li>
                </ul>
              ) : (
                <ul
                  className={`flex items-center justify-center text-white text-[14px] xl:text-[15px] 2xl:text-[16px] gap-0 2xl:gap-4  left-[12rem] xl:left-[calc(30vw-10rem)] 2xl:left-[18rem] 3xl:left-[25rem] 4xl:left-[30rem] ml-10 hover:text-black overflow-hidden `}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <li
                  onMouseEnter={() => handleItemHover(0)}
                  className={`cursor-pointer transition ease-in delay-100 duration-300 ${
                    activeItem === 0
                      ? 'border-b-[3px] border-b-[#009889]'
                      : 'border-b-[3px] border-b-transparent'
                  }`}
                >
                  <a href='/'>Home</a>
                </li> */}
                  <li
                    onMouseEnter={() => handleItemHover(1)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 1
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Immigrate
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(2)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 2
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Work
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(3)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 3
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Study
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(4)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 4
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Sponsorship
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(5)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 5
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Business
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(6)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 6
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Visit
                  </li>
                  <li
                    onMouseEnter={() => handleItemHover(7)}
                    className={`cursor-pointer transition ease-in delay-100 duration-300  flex px-4 py-2.5 justify-center ${
                      activeItem === 7
                        ? "border-b-[3px] border-b-transparent"
                        : "border-b-[3px] border-b-transparent"
                    }`}
                  >
                    Employers
                  </li>
                </ul>
              )}
              {isHovering && activeItem > 0 && (
                <div
                  className={`bg-[#FFFEFE] px-4 z-40 absolute shadow-2xl 2xl:top-[4.5rem] xl:top-[4rem] top-[3.8rem] left-[12rem] xl:left-[calc(30vw-10rem)] 2xl:left-[18rem] 3xl:left-[25rem] 4xl:left-[30rem] w-[46.0rem] xl:w-[48.0rem] 2xl:w-[54.5rem] rounded-b-xl transition-all ease-in-out delay-100 duration-300 ${
                    isOpen ? "h-[25rem] opacity-100" : "h-0 opacity-0"
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex flex-col items-center justify-center"></div>
                  <div
                    className={`flex items-start justify-start p-4 gap-8 ${
                      activeItem === 0 ? "none" : "block"
                    }`}
                  >
                    {activeItem === 1 && (
                      <div className=" w-[40%] h-auto mt-4">
                        <div className="flex flex-col ">
                          <ul className="text-[14px] 2xl:text-[15px] flex flex-col items-start justify-start gap-4 ">
                            <li
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Permanent Residency" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href={"/immigrate/permanent-residency"}
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Permanent Residency
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Express Entry')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Express Entry" &&
                                "text-[#01997E] font-semibold "
                              }`}
                            >
                              <a
                                href={"/immigrate/express-entry"}
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Express Entry
                              </a>{" "}
                              <SvgComponent program={"Express Entry"} />
                            </li>
                            <li
                              // onMouseEnter={() => handleItemProgramClick('PNP')}
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "PNP" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/provincial-nominee-program"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Provincial Nominee Program (PNP)
                              </a>{" "}
                              <SvgComponent program={"PNP"} />
                            </li>

                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Rural And Northern Immigration Pilot'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Rural And Northern Immigration Pilot" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/rural-and-northern-immigration-pilot"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Rural And Northern Immigration Pilot
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Caregiver Program')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Caregiver Program" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/caregiver-programs"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Caregiver Program
                              </a>{" "}
                              <SvgComponent program={"Caregiver Program"} />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Atlantic Immigration Programme'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Atlantic Immigration Programme" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/aip-atlantic-immigration-program"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                AIP Atlantic Immigration Programme
                              </a>{" "}
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('AGRI FOOD PILOT')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "AGRI FOOD PILOT" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/agri-food-pilot"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Agri Food Pilot
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'After Permanent Residency'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "After Permanent Residency" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/after-permanent-residency"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                After Permanent Residency
                              </a>{" "}
                              <SvgComponent
                                program={"After Permanent Residency"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('AGRI FOOD PILOT')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Permanent Residency FAQs" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/immigrate/pr-faqs"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Permanent Residency FAQs
                              </a>
                            </li>

                            {/* <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Business Class')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === 'Business Class' &&
                                'text-[#01997E] font-semibold'
                              }`}
                            >
                              <span className='hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200'>
                                Business Class
                              </span>{' '}
                              <SvgComponent program={'Business Class'} />
                            </li> */}

                            {/* <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Canadian Immigration FAQs'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  'Canadian Immigration FAQs' &&
                                'text-[#01997E] font-semibold'
                              }`}
                            >
                              <span className='hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200'>
                                Canadian Immigration FAQs
                              </span>
                            </li>

                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('TR to PR Route')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === 'TR to PR Route' &&
                                'text-[#01997E] font-semibold'
                              }`}
                            >
                              <span className='hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200'>
                                TR to PR Route
                              </span>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 2 && (
                      <div className=" w-[40%] h-auto mt-4">
                        <div className="">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4 ">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Work In Canada')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Work In Canada" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/work/work-in-canada"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Work In Canada
                              </a>
                            </li>

                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Work Without a Permit ')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Work Without a Permit " &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/work/work-without-a-permit"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Work Without a Permit
                              </a>

                              <SvgComponent
                                program={"Work Without a Permit "}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     ' Temporary Foreign Worker Program'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  " Temporary Foreign Worker Program" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/work/temporary-foreign-worker-program"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Temporary Foreign Worker Program
                              </a>
                              <SvgComponent
                                program={" Temporary Foreign Worker Program"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'International Mobility Program (IMP)'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "International Mobility Program (IMP)" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/work/international-mobility-program"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                International Mobility Program (IMP){" "}
                              </a>
                              <SvgComponent
                                program={"International Mobility Program (IMP)"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Open Work Permits')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Open Work Permits" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/work/open-work-permits"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Open Work Permits{" "}
                              </a>

                              <SvgComponent program={"Open Work Permits"} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 3 && (
                      <div className=" w-[40%] h-auto mt-4 mb-4">
                        <div className="flex flex-col">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Study In Canada')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Study In Canada" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/study-in-canada"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Study In Canada
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('DLI ')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Study Pathways to Permanent Residence" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/study-pathways-to-permanent-residence"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Study Pathways to Permanent Residence
                              </a>
                            </li>

                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(' Levels of Study')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === " Levels of Study" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/levels-of-study"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Levels of Study
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Study Permit In Canada')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Study Permit In Canada" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/study-permit-in-canada"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Study Permit In Canada
                              </a>

                              <SvgComponent
                                program={"Study Permit In Canada"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Refusals and Appeals of Study Permits'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Refusals and Appeals of Study Permits" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/refusals-and-appeals-of-study-permits"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Refusals and Appeals of Study Permits
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Extend a Study Control')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Extend a Study Permits" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/extend-a-study-permit"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Extend a Study Permits
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('PGWP')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "PGWP" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/post-graduate-work-permit"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Post Graduate Work Permit (PGWP)
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('DLI ')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "DLI " &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/study/designated-learning-institution"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Designated Learning Institution (DLI)
                              </a>
                            </li>
                            {/* <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Study Pathways to Permanent REsidence'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  'Study Pathways to Permanent REsidence' &&
                                'text-[#01997E] font-semibold'
                              }`}
                            >
                              <a className='hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200'>
                                Study Pathways to Permanent Residence
                              </a>
                            </li> */}
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 4 && (
                      <div className=" w-[40%] h-auto mt-4 mb-4">
                        <div className="flex flex-col">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4 ">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Canadian spousal sponsorship '
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Sponsorship" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/sponsorship"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Sponsorship{" "}
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Canadian spousal sponsorship '
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Canadian spousal sponsorship " &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/canadian-spousal-sponsorship"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Canadian spousal sponsorship{" "}
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Child or Other Dependent Sponsorship'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Child or Other Dependent Sponsorship" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/child-or-other-dependant-sponsorship"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Child or Other Dependent Sponsorship
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'Parents and Grandparents Program (PGP)'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "Parents and Grandparents Program (PGP)" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/parents-and-grandparents-program"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Parents and Grandparents Program (PGP)
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Super Visa')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Super Visa" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/super-visa"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Super Visa
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() => handleItemProgramClick('MNI')}
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "MNI" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/sponsorship/minimum-necessary-income"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Minimum Necessary Income (MNI)
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 5 && (
                      <div className=" w-[40%] h-auto mt-4 mb-4">
                        <div className="flex flex-col">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4 ">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(' Business/Invest')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === " Business/Invest" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/business/invest"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Business{" "}
                              </a>

                              <SvgComponent program={" Business/Invest"} />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     'PNP Entrepreneur Streams'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  "PNP Entrepreneur Streams" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/business/pnp-entrepreneur-streams"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                PNP Entrepreneur Streams{" "}
                              </a>

                              <SvgComponent
                                program={"PNP Entrepreneur Streams"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     ' Work Permit to PR Pathways'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  " Work Permit to PR Pathways" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/business/work-permit-to-pr-pathways"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Work Permit to PR Pathways{" "}
                              </a>

                              <SvgComponent
                                program={" Work Permit to PR Pathways"}
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 6 && (
                      <div className=" w-[40%] h-auto mt-4 mb-4">
                        <div className="flex flex-col ">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4 ">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('TRV-Visitor Visa')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "TRV-Visitor Visa" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/visit/visitor-visa-trv"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Visitor Visa- TRV
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Visa Extension')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Visa Extension" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/visit/visa-extension-and-extension"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Visa Extension and Refusal
                              </a>
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(' Super visa (linked)')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === " Super visa (linked)" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/visit/super-visa"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Super visa
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {activeItem === 7 && (
                      <div className=" w-[40%] h-auto mt-4 mb-4">
                        <div className="flex flex-col">
                          <ul className="text-[15px] flex flex-col items-start justify-start gap-4">
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick(
                              //     ' Employers Outside Canada'
                              //   )
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram ===
                                  " Employers Outside Canada" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/employers/employers-outside-canada"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Employers Outside Canada{" "}
                              </a>

                              <SvgComponent
                                program={" Employers Outside Canada"}
                              />
                            </li>
                            <li
                              // onMouseEnter={() =>
                              //   handleItemProgramClick('Canadian Employers')
                              // }
                              className={`flex items-center justify-between w-full transition ease-in delay-40 duration-200 cursor-pointer ${
                                selectedProgram === "Canadian Employers" &&
                                "text-[#01997E] font-semibold"
                              }`}
                            >
                              <a
                                href="/employers/canadian-employers"
                                className="hover:text-[#01997E] hover:font-semibold hover:scale-105 transition ease-in delay-40 duration-200"
                              >
                                Canadian Employers
                              </a>

                              <SvgComponent program={"Canadian Employers"} />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}

                    {selectedProgram === "PNP" && activeItem === 1 && (
                      <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                        <div className="flex flex-col items-start justify-center">
                          <ul className="text-[14px]">
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Alberta Opportunity Stream",
                                  "Alberta Express Entry",
                                  "Alberta Accelerated Tech",
                                  "Farm Stream",
                                  "Graduate Entrepreneur Stream",
                                  "Foreign Graduate Entrepreneur Stream",
                                ]);
                                setSelectedtext(
                                  "Alberta Immigrant Nominee Program"
                                );
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              <HeaderComponent
                                text={"Alberta Immigrant Nominee Program"}
                                link={
                                  "/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Skills Immigration Stream",
                                  "BC PNP Tech",
                                  "Entrepreneur Immigration Stream",
                                ]);
                                setSelectedtext("British Columbia");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"British Columbia"}
                                link={
                                  "/immigrate/provincial-nominee-program/british-columbia"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Skilled Workers in Manitoba",
                                  "Skilled Workers Overseas",
                                  "International Education Stream ",
                                  "Business Investor Stream",
                                ]);
                                setSelectedtext("Manitoba");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Manitoba"}
                                link={
                                  "/immigrate/provincial-nominee-program/manitoba"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "New Brunswick Express Entry Labor Market Stream",
                                  "New Brunswick Strategic Initiative",
                                  "New Brunswick Entrepreneurial Stream (closed) ",
                                  "Post-Graduate Entrepreneurial Stream",
                                  "Skilled Worker Applicants with Employer Support	",
                                  "New Brunswick Business Immigration Stream",
                                  "Atlantic Immigration Pilot Program",
                                ]);
                                setSelectedtext("New Brunswick");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"New Brunswick"}
                                link={
                                  "/immigrate/provincial-nominee-program/new-brunswick"
                                }
                              />
                            </li>

                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Express Entry Skilled Worker Category",
                                  " Skilled Worker Category",
                                  "International Graduate Category ",
                                  "International Entrepreneur Category",
                                  "International Graduate Entrepreneur Category	",
                                ]);
                                setSelectedtext("Newfoundland and Labrador");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Newfoundland and Labrador"}
                                link={
                                  "/immigrate/provincial-nominee-program/newfoundland-and-labrador"
                                }
                              />{" "}
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Northwest Territories Express Entry",
                                  " Northwest Territories Employer Driven",
                                  "Critical Impact Worker ",
                                  "Northwest Territories Skilled Worker ",
                                  " Northwest Territories Business Driven",
                                  " Northwest Territories Entrepreneur",
                                ]);
                                setSelectedtext("Northwest Territories");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Northwest Territories"}
                                link={
                                  "/immigrate/provincial-nominee-program/northwest-territories"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Nova Scotia Experience: Express Entry",
                                  " Entrepreneur Category",
                                  "International Graduate Entrepreneur Category ",
                                  "International Graduates In Demand	 ",
                                  " Skilled Worker Category",
                                  " Physician Stream	",
                                  " Nova Scotia Labor Market Priorities		",
                                  " Nova Scotia Labor Market Priorities for Physicians	",
                                  " Occupations In Demand		",
                                  " Critical Construction Worker Pilot 	",
                                ]);
                                setSelectedtext("Nova Scotia");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Nova Scotia"}
                                link={
                                  "/immigrate/provincial-nominee-program/nova-scotia"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "Ontario Human Capital ",
                                  " Ontario Employer Job Offer",
                                  "Ontario Entrepreneur ",
                                  "Regional Immigration Pilot	 ",
                                ]);
                                setSelectedtext("Ontario");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Ontario"}
                                link={
                                  "/immigrate/provincial-nominee-program/ontario"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setTextContent([
                                  "PEI PNP Express Entry ",
                                  "Business Impact",
                                  "Work Permit ",
                                  "Labor Impact	 ",
                                  "Skilled Worker in PEI   ",
                                  "Skilled Worker Outside Canada",
                                  "Critical Worker ",
                                  "International Graduate ",
                                ]);
                                setSelectedtext("Prince Edward Island");
                              }}
                              onMouseLeave={() => setTextContent("")}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Prince Edward Island"}
                                link={
                                  "/immigrate/provincial-nominee-program/prince-edward-island"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setSelectedtext("Saskatchewan");
                              }}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Saskatchewan"}
                                link={
                                  "/immigrate/provincial-nominee-program/saskatchewan"
                                }
                              />
                            </li>
                            <li
                              onMouseEnter={() => {
                                setSelectedtext("Yukon");
                              }}
                            >
                              {" "}
                              <HeaderComponent
                                text={"Yukon"}
                                link={
                                  "/immigrate/provincial-nominee-program/yukon"
                                }
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                    {selectedProgram === "Express Entry" &&
                      activeItem === 1 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Federal Skilled Worker Class"}
                                  link={
                                    "/immigrate/express-entry/federal-skilled-worker-class"
                                  }
                                />
                              </li>

                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Federal Skilled Trades Class "}
                                  link={
                                    "/immigrate/express-entry/federal-skilled-trades-class"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Canadian Experience Class (CEC) "}
                                  link={
                                    "/immigrate/express-entry/canadian-experience-class"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={
                                    "Comprehensive Ranking System (CRS) Score"
                                  }
                                  link={"/crs-calculator"}
                                  textContent={["CRS Score Calculator"]}
                                />
                              </li>
                              {/* <li>
                                {' '}
                                <HeaderComponent
                                  text={'Express Entry Draws'}
                                />{' '}
                              </li> */}
                              {/* <li>
                                {' '}
                                <HeaderComponent
                                  text={
                                    'Invitation to Apply (ITA) & the electronic Application for Permanent Residence (eAPR)'
                                  }
                                />
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "After Permanent Residency" &&
                      activeItem === 1 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Permanent Resident Cards"}
                                  link={
                                    "/immigrate/after-permanent-residency/permanent-resident-cards"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Permanent Resident Card Renewal"}
                                  link={
                                    "/immigrate/after-permanent-residency/permanent-resident-card-renewal"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Permanent Resident Travel Document"}
                                  link={
                                    "/immigrate/after-permanent-residency/permanent-resident-travel-document"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Residency Obligations"}
                                  link={
                                    "/immigrate/after-permanent-residency/residency-obligation"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Canadian Citizenship"}
                                  link={
                                    "/immigrate/after-permanent-residency/canadian-citizenship"
                                  }
                                />{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                    {selectedProgram === "Business Class" &&
                      activeItem === 1 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Federal Self-Employed"}
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Canada Start-Up Visa (SUV)"}
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "Caregiver Program" &&
                      activeItem === 1 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Home Child Care Provider Pilot"}
                                  link={
                                    "/immigrate/caregiver-programs/home-child-care-provider-pilot"
                                  }
                                />
                              </li>
                              <li>
                                {" "}
                                <HeaderComponent
                                  text={"Home Support Worker Pilot	"}
                                  link={
                                    "/immigrate/caregiver-programs/home-support-worker-pilot"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}

                    {selectedProgram === "Work Without a Permit " &&
                      activeItem === 2 && (
                        <div className=" w-[35%] auto flex items-center justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-start">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Business Visas"}
                                  link="/work/work-without-a-permit/business-visas"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === " Temporary Foreign Worker Program" &&
                      activeItem === 2 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Labour market impact assesment"}
                                  link={
                                    "/work/temporary-foreign-worker-program/labour-maket-impact-assessment"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Canada Global Talent Stream"}
                                  link={
                                    "/work/temporary-foreign-worker-program/canada-global-talent-stream"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram ===
                      "International Mobility Program (IMP)" &&
                      activeItem === 2 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Intra Company Transfer"}
                                  link={
                                    "/work/international-mobility-program/intra-company-transfer"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"CUSMA"}
                                  link={
                                    "/work/international-mobility-program/cusma"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"CETA Work Permits"}
                                  link={
                                    "/work/international-mobility-program/ceta-work-permits"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "Open Work Permits" &&
                      activeItem === 2 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Post Graduate Work Permit (PGWP) "}
                                  link={
                                    "/work/open-work-permits/post-graduate-work-permit"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"International Experience Class (IEC)"}
                                  link={
                                    "/work/open-work-permits/international-experience-class"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Spousal Open Work Permit (SOWP)"}
                                  link={
                                    "/work/open-work-permits/spousal-open-work-permit"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Bridging Open Work Permit (BOWP)"}
                                  link={
                                    "/work/open-work-permits/bridging-open-work-permit"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "Study Permit In Canada" &&
                      activeItem === 3 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Student Direct Stream (SDS)"}
                                  link={
                                    "/study/study-permit-in-canada/student-direct-stream"
                                  }
                                />
                              </li>

                              <li>
                                <HeaderComponent
                                  text={`Certificat d'acceptation du Québec (CAQ)`}
                                  link={
                                    "/study/study-permit-in-canada/certificat-d-acceptation-du-quebec"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === " Business/Invest" &&
                      activeItem === 5 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Start-up"}
                                  link={"/business/invest/start-up"}
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" Entrepreneur – self employed"}
                                  link={
                                    "/business/invest/entrepreneur-self-employed"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Start a business in Canada"}
                                  link={
                                    "/business/invest/start-a-business-in-canada"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Buy an existing Business in Canada"}
                                  link={
                                    "/business/invest/buy-an-existing-business-in-canada"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Expand Your Business in Canada"}
                                  link={
                                    "/business/invest/expand-your-business-to-canada"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "PNP Entrepreneur Streams" &&
                      activeItem === 5 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Alberta"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/alberta"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" British Columbia"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/british-columbia"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" Manitoba"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/manitoba"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" New Brunswick"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/new-brunswick"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" Newfoundland and Labrador"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/newfoundland-and-labrador"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Northwest Territories"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/northwest-territories"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Nova Scotia"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/nova-scotia"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Ontario"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/ontario"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" Prince Edward Island"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/prince-edward-island"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Saskatchewan"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/saskatchewan"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={" Yukon"}
                                  link={
                                    "/business/pnp-entrepreneur-streams/yukon"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === " Work Permit to PR Pathways" &&
                      activeItem === 5 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"ICT"}
                                  link={
                                    "/business/work-permit-to-pr-pathways/intra-company-transfer"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"C11 work visa"}
                                  link={
                                    "/business/work-permit-to-pr-pathways/c11-work-visa"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"C10 Work visa"}
                                  link={
                                    "/business/work-permit-to-pr-pathways/c10-work-visa"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Entrepreneur LMIA-Owner Operated"}
                                  link={
                                    "/business/work-permit-to-pr-pathways/entrepreneur-lmia-owner-operated"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === " Employers Outside Canada" &&
                      activeItem === 7 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Intra Company Transfer of Employees"}
                                  link={
                                    "/employers/employers-outside-canada/intra-company-transfer-of-employers"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Business Visit visa (LMIA Exempt)"}
                                  link={
                                    "/employers/employers-outside-canada/business-visit-visa"
                                  }
                                />
                              </li>
                              <li>
                                <HeaderComponent
                                  text={"Expand Business In Canada"}
                                  link={
                                    "/employers/employers-outside-canada/expand-business-to-canada"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    {selectedProgram === "Canadian Employers" &&
                      activeItem === 7 && (
                        <div className=" w-[35%] auto flex items-start justify-start mt-4 mb-4">
                          <div className="flex flex-col items-start justify-center">
                            <ul className="text-[14px]">
                              <li>
                                <HeaderComponent
                                  text={"Hiring Foreign Workers"}
                                  link={
                                    "/employers/canadian-employers/hiring-foreign-workers"
                                  }
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    <div className="w-[10%] h-auto flex flex-col items-start justify-start ">
                      {activeItem === 1 && (
                        <div className="flex items-start justify-center">
                          <div className="flex flex-col items-start justify-center">
                            {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px] '>
                              Immigrate
                            </div> */}
                            {!selectedProgram && (
                              <div className="ml-0 2xl:ml-14">
                                {" "}
                                <div className="px-6 mt-4 w-[25rem]">
                                  <img src={clipart1} alt="clipart" />
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {activeItem === 2 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Work
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart2} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {activeItem === 3 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Study
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart3} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {activeItem === 4 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Invest
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart4} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {activeItem === 5 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Visit
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart5} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {activeItem === 6 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Employers
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart6} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                      {activeItem === 7 && (
                        <>
                          {/* <div className='font-semibold ml-6 text-xl border-b-[2px] border-[#009889] pb-[2px]'>
                            Sponsorship
                          </div> */}
                          {!selectedProgram && (
                            <div className="ml-0 2xl:ml-14">
                              {" "}
                              <div className="px-6 mt-4 w-[25rem]">
                                <img src={clipart7} alt="clipart" />
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                    {/* {activeItem === 1 && selectedProgram === 'PNP' && (
                      <div className='w-[30%]'>
                        <HeaderComponentTextContent textContent={textContent} />
                      </div>
                    )} */}
                  </div>
                </div>
              )}
              <div className="flex items-center justify-center gap-6 relative right-[1rem]">
                <div className="cursor-pointer text-white text-[14px]">
                  <button
                    onClick={handleAppointmentClick}
                    className="bg-[#01F9E1] font-normal text-black px-4 py-2 rounded-[10px] xl:text-[15px] 2xl:text-[16px] hover:scale-105 transition ease-in delay-60 duration-150 lg:mr-2 xl:mr-4 2xl:mr-10"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-[99%] h-full flex items-center justify-around sm:justify-between gap-10 sm:px-10">
            <div
              className="flex items-center mt-3 justify-start p-2 bg-transparent cursor-pointer rounded-lg transition ease-in delay-50 duration-200"
              onClick={handleMenuClick}
              ref={menuRef}
            >
              <RiMenu2Fill className="text-white text-3xl " />
            </div>
            {/* <div className='flex items-center justify-start'>
              <img
                src={logo2}
                alt='logo'
                className='cursor-pointer w-[4.2rem]'
              />
            </div> */}
            <Link to={"/"}>
              {" "}
              <div className="flex items-start justify-start mt-3">
                <img
                  src={logo}
                  alt="logo"
                  className="cursor-pointer w-[10rem]"
                />
              </div>
            </Link>
            <div className="cursor-pointer text-white text-[15px] mt-3">
              <button
                onClick={handleAppointmentClick}
                className="bg-[#565757] font-normal text-white px-4 py-2 rounded-[10px] xl:text-[15px] 2xl:text-[16px] hover:scale-105 transition ease-in delay-60 duration-150"
              >
                Book
              </button>
            </div>

            {showMobileHeader && (
              <ul
                className={`fixed text-white top-0 left-0 h-screen py-10 text-[17px] px-6 font-medium w-full md:w-[70%] bg-[#646767] bg-opacity-95 z-50 mr-[15rem] overflow-y-scroll scroll scroll-smooth scrollbar-hide`}
              >
                <li className="mb-6 flex items-center justify-between">
                  <span className="text-[16px] ml-4">Menu</span>
                  <div onClick={() => setShowMobileHeader(false)} className="">
                    <button
                      id="toggleOpen"
                      className=" rounded-full px-3 py-1 text-gray-400"
                    >
                      <IoMdClose size={27} />
                    </button>
                  </div>
                </li>

                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleImmigrateSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff]  font-medium my-4 flex items-center justify-between">
                    Immigrate
                    {showHeadersSubmenu.immigrate ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleImmigrateSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleImmigrateSubmenu}
                      />
                    )}
                  </span>

                  {showHeadersSubmenu.immigrate && (
                    <ul className="ml-4">
                      {sitemapImmigrate.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400  max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()} // Stop propagation here
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuImmigrate[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg hover:text-xl text-gray-400  cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuImmigrate(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg hover:text-xl text-gray-400  cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuImmigrate(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuImmigrate[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2 w-full"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleWorkSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] font-medium my-4 flex items-center justify-between">
                    Work
                    {showHeadersSubmenu.work ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleWorkSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleWorkSubmenu}
                      />
                    )}
                  </span>

                  {showHeadersSubmenu.work && (
                    <ul className="ml-4">
                      {sitemapWork.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuWork[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lgtext-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuWork(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuWork(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuWork[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3 "
                  onClick={toggleStudySubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] font-medium my-4 flex items-center justify-between">
                    Study
                    {showHeadersSubmenu.study ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleStudySubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleStudySubmenu}
                      />
                    )}
                  </span>

                  {showHeadersSubmenu.study && (
                    <ul className="ml-4">
                      {sitemapStudy.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuStudy[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuStudy(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuStudy(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuStudy[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleSponsorshipSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] font-medium my-4 flex items-center justify-between">
                    Sponsorship
                    {showHeadersSubmenu.sponsorship ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleSponsorshipSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleSponsorshipSubmenu}
                      />
                    )}
                  </span>
                  {showHeadersSubmenu.sponsorship && (
                    <ul className="ml-4  ">
                      {sitemapSponsorship.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuSponsorship[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuSponsonship(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuSponsonship(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuSponsorship[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleBusinessSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] flex items-center justify-between font-medium my-4">
                    Business
                    {showHeadersSubmenu.business ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleBusinessSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleBusinessSubmenu}
                      />
                    )}
                  </span>
                  {showHeadersSubmenu.business && (
                    <ul className="ml-4  ">
                      {sitemapBusiness.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuBusiness[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuBusiness(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuBusiness(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuBusiness[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleVisitSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] flex items-center justify-between font-medium my-4">
                    Visit
                    {showHeadersSubmenu.visit ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleVisitSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleVisitSubmenu}
                      />
                    )}
                  </span>
                  {showHeadersSubmenu.visit && (
                    <ul className="ml-4  ">
                      {sitemapVisit.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuVisit[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuVisit(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuVisit(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuVisit[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li
                  className="max-lg:border-b border-gray-400 max-lg:py-1 px-3"
                  onClick={toggleEmployersSubmenu}
                >
                  <span className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] flex items-center justify-between font-medium my-4">
                    Employers
                    {showHeadersSubmenu.employer ? (
                      <FiMinus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleEmployersSubmenu}
                      />
                    ) : (
                      <FiPlus
                        size={25}
                        className="text-lg text-gray-400 hover:text-xl"
                        onClick={toggleEmployersSubmenu}
                      />
                    )}
                  </span>
                  {showHeadersSubmenu.employer && (
                    <ul className="ml-4  ">
                      {sitemapEmployers.map((item, index) => (
                        <li
                          className="max-lg:border-b border-gray-400 max-lg:py-1 flex flex-col  w-full"
                          key={index}
                        >
                          <span className="flex items-center w-[90%] justify-between cursor-pointer">
                            <a
                              href={item.linkTo}
                              onClick={(event) => event.stopPropagation()}
                              className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[17px] font-normal flex items-center justify-center w-full"
                            >
                              <span className="font-normal w-full text-[16px]">
                                {" "}
                                {item.title}
                              </span>
                            </a>
                            {item.nestedLinks && (
                              <>
                                {" "}
                                {showHeadersSubSubmenuEmployes[
                                  convertTitleToStateKey(item.title)
                                ] ? (
                                  <FiMinus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuEmployes(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                ) : (
                                  <FiPlus
                                    size={20}
                                    className="text-lg text-gray-400 hover:text-xl cursor-pointer"
                                    onClick={(event) => {
                                      event.stopPropagation(); // Stop propagation here
                                      toggleshowHeadersSubSubmenuEmployes(
                                        convertTitleToStateKey(item.title)
                                      );
                                    }}
                                  />
                                )}
                              </>
                            )}
                          </span>
                          {showHeadersSubSubmenuEmployes[
                            convertTitleToStateKey(item.title)
                          ] && (
                            <div className="flex flex-col items-start justify-center">
                              {item.nestedLinks?.map((items, index) => (
                                <li
                                  className="max-lg:border-b border-gray-400 max-lg:py-1 pl-2"
                                  key={index}
                                >
                                  <a
                                    href={items.linkTo}
                                    onClick={(event) => event.stopPropagation()}
                                    className="hover:text-[#01F9E1] text-[#ffffff]  my-1 text-[15px] font-normal"
                                  >
                                    {items.title}
                                  </a>
                                </li>
                              ))}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li className="relative">
                  <div className="flex flex-row justify-between max-lg:py-1 px-3">
                    <a
                      href="/about-us"
                      className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] flex items-center justify-between font-medium my-4"
                    >
                      About Us
                    </a>
                    <a
                      href="/contact-us"
                      className="cursor-pointer hover:text-[#01F9E1] text-[#ffffff] flex items-center justify-between font-medium my-4"
                    >
                      Contact Us
                    </a>
                  </div>
                </li>
                <li className="relative">
                  {" "}
                  <div className="px-4 py-1 text-[#939393] flex items-center justify-center text-[0.6rem] gap-6 absolute -bottom-[3rem]">
                    <a
                      href="https://www.linkedin.com/company/aquarian-immigration-services/"
                      className="mx-0 p-2"
                    >
                      <FaLinkedin size={25} className="bg-transparent" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/"
                      className="mx-0 p-2"
                    >
                      <FaFacebook size={25} className="bg-transparent" />
                    </a>
                    <a
                      href="https://www.threads.net/@aquarian_immigration"
                      className="mx-0 p-2 "
                    >
                      <FaThreads size={25} className="bg-transparent" />
                    </a>
                    {/* <a
                      href='https://www.threads.net/@aquarian_immigration'
                      className='mx-0 p-2 '
                    >
                      <FaTwitter size={25} className='bg-transparent' />
                    </a> */}
                    <a
                      href="https://www.instagram.com/aquarian_immigration/"
                      className="mx-0 p-2"
                    >
                      <FaInstagram size={25} className="bg-transparent" />
                    </a>
                    <a href="/" className="mx-0 p-2">
                      <FaYoutube size={25} className="bg-transparent" />
                    </a>
                  </div>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
      <ToastContainer />
      <BookAppointmentModel
        showForm={showAppointmentModel}
        setShowForm={setShowAppointmentModel}
        setShowPopUp={setShowPopUp}
      />
    </div>
  );
};

export default Header;
