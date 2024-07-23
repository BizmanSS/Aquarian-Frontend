import React, { useRef, useState, useEffect } from "react";
import "../../../styles/AboutUs.css";
import Instagram from "../../../Assets/Instagram_logo.svg";
import Youtube from "../../../Assets/youtube.png";
import Thread from "../../../Assets/Thread.jpg";
import LinkedIn from "../../../Assets/LinkedIn.png";
import facebook from "../../../Assets/Facebook.png";
import WhoWeAre from "../../AboutUs/WhoWeAre.js";
import Competitive from "../../AboutUs/Competitive.js";
import OurTeam from "../../AboutUs/OurTeam.js";
import OurServices from "../../AboutUs/OurServices.js";
import TheAquarian from "../../AboutUs/TheAquarian.js";
import { useMobile } from "../../globalComponents/MobileContext/IsMobileContext.js";
import { Bounce } from "react-reveal";
import BannerPages from "../Banner/BannerPages.jsx";

const AboutUsPage = () => {
  const { isMobile } = useMobile();
  const whoWeAreRef = useRef(null);
  const competitiveRef = useRef(null);
  const ourTeamRef = useRef(null);
  const ourServicesRef = useRef(null);
  const theAquarianRef = useRef(null);
  const subHeadingContentRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  const scrollToRef = (ref) => {
    const scrollTop = ref.current.offsetTop - window.innerHeight * 0.25; // 25% of the window height
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  useEffect(() => {
    const sectionRefs = [
      { section: "whoWeAre", ref: whoWeAreRef },
      { section: "competitive", ref: competitiveRef },
      { section: "ourTeam", ref: ourTeamRef },
      { section: "ourServices", ref: ourServicesRef },
      { section: "theAquarian", ref: theAquarianRef },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.5; // 50% of the window height
      const currentSection = sectionRefs.find(({ ref }) =>
        ref.current.offsetTop <= scrollPosition &&
        ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
          ? true
          : false
      );

      if (currentSection) {
        setActiveSection(currentSection.section);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: "#E0E0E0",
        paddingBottom: "3rem",
      }}
    >
      <BannerPages
        link={"about-us"}
        title={"About Us"}
        description={"About Us"}
      />

      {!isMobile && (
        <Bounce>
          <div className="sub-heading-content" ref={subHeadingContentRef}>
            <div
              style={{
                display: "flex",
                marginLeft: "2%",
                paddingTop: "20%",
                width: "80%",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <div className="line-heading"></div>
              <div style={{ display: "block" }}>
                <p
                  onClick={() => scrollToRef(whoWeAreRef)}
                  className={`sub-heading ${
                    activeSection === "whoWeAre" ? "active" : ""
                  }`}
                >
                  Our Story
                </p>
                <p
                  onClick={() => scrollToRef(competitiveRef)}
                  className={`sub-heading ${
                    activeSection === "competitive" ? "active" : ""
                  }`}
                >
                  How We Stand Out?
                </p>
                <p
                  onClick={() => scrollToRef(ourTeamRef)}
                  className={`sub-heading ${
                    activeSection === "ourTeam" ? "active" : ""
                  }`}
                >
                  Meet Our Visionaries
                </p>
                <p
                  onClick={() => scrollToRef(ourServicesRef)}
                  className={`sub-heading ${
                    activeSection === "ourServices" ? "active" : ""
                  }`}
                >
                  What We Can Do For You?
                </p>
                <p
                  onClick={() => scrollToRef(theAquarianRef)}
                  className={`sub-heading ${
                    activeSection === "theAquarian" ? "active" : ""
                  }`}
                >
                  The Aquarian Community
                </p>
              </div>
            </div>
            <div>
              <h1 className="follow">Follow Us</h1>
            </div>
            <div className="logos">
              <a
                href="https://www.linkedin.com/company/aquarian-immigration-services/"
                className="mx-0 p-2"
              >
                <img
                  alt=""
                  src={LinkedIn}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a>
              <a
                href="https://www.facebook.com/people/Aquarian-Immigration/61558242973262/"
                className="mx-0 p-2"
              >
                <img
                  alt=""
                  src={facebook}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a>
              {/* <a href="https://www.twitter.com" className="mx-0 p-2">
                <img
                  alt=""
                  src={Twitter}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a> */}
              <a
                href="https://www.threads.net/@aquarian_immigration"
                className="mx-0 p-2"
              >
                <img
                  alt=""
                  src={Thread}
                  style={{ borderRadius: "5px" }}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a>
              <a
                href="https://www.instagram.com/aquarian_immigration/"
                className="mx-0 p-2"
              >
                <img
                  alt=""
                  src={Instagram}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a>
              <a href="https://youtube.com" className="mx-0 p-2">
                <img
                  alt=""
                  src={Youtube}
                  className="cursor-pointer w-[2.2rem]"
                />
              </a>
            </div>
          </div>
        </Bounce>
      )}

      <div className="background-div">
        <div ref={whoWeAreRef}>
          <WhoWeAre />
        </div>
        <div ref={competitiveRef}>
          <Competitive />
        </div>
      </div>

      <div className="background-div-left">
        <div ref={ourTeamRef}>
          <OurTeam />
        </div>
      </div>
      <div className="background-div" style={{ marginTop: "2rem" }}>
        <div ref={ourServicesRef}>
          <OurServices />
        </div>
        <div ref={theAquarianRef}>
          <TheAquarian />
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
