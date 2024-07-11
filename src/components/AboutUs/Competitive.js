import React, { useState } from "react";
import "../../styles/AboutUs.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Expertise from "../../Assets/Expertise.png";
import Integrity from "../../Assets/Integrity and trust.png";
import One from "../../Assets/one to one solution.png";
import Efficiency from "../../Assets/Efficiency and Accuracy.png";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import Free from "../../Assets/free assessment.png";
import dialogBox2 from "../../Assets/dialog-Box2.webp";
const Competitive = () => {
  const { isMobile } = useMobile();
  const [expandedIndex, setExpandedIndex] = useState({});
  const [expanded, setExpanded] = useState({});
  const questions = [
    "Expertise & Experience",
    "Integrity and Trust",
    "One-on-One Solutions",
  ];
  const dialog = [dialogBox2, dialogBox2, dialogBox2];
  const questions2 = ["Efficiency and Accuracy", "Free Online Assessment"];
  const imageAdvantage = [Expertise, Integrity, One];
  const bgColor = ["#FFBBD9", "#FFF9C5", "#C6EED6"];
  const bgColor2 = ["#B3E1F8", "#E6CBF7"];
  const imageAdvantage2 = [Efficiency, Free];
  const dialogBoxBelow = [dialogBox2, dialogBox2];
  const answers = [
    <>
      Being in this field for over 30 years, we have the expertise and
      experience that has helped us assist over 5000 individuals to achieve
      their Canadian immigration goals. We stay up to date with the various
      changes in policies and trends that are bound to affect the immigration
      process.
    </>,
    "We acknowledge the lack of personal touch and individualised service in this industry. We hold the best interests of our clients and tailor our approach that aligns with their goals. We ensure a level of integrity and trust so our client receives an honest assessment of their abilities as well as realistic expectations about their prospects.",
    "The immigration process entails certain complexities that can prove to be overwhelming for our clients. In order to make this journey as comfortable and smooth as possible, we provide one-on-one solutions to build a strong relationship on trust, transparency and open communication.                                                             ",
  ];
  const answers2 = [
    "Accuracy and efficiency are of utmost importance when applying for immigration to Canada. Our knowledge and experience help you attain that level of accuracy and efficiency that can make an otherwise overwhelming process a lot easier",

    <div>
      <p1>
        We offer free online assessment tools and consultations making
        immigration to Canada more accessible to you.
        <br />
      </p1>
      <div
        className="button"
        style={{
          marginTop: "0.7rem",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
          borderRadius: "20px",
        }}
      >
        <a href="/assessment">Free Assessment</a>{" "}
      </div>
    </div>,
  ];
  const handleToggleMobile = (index) => {
    setExpandedIndex((prevIndex) => {
      if (prevIndex === index) {
        return null; // Close if already expanded
      } else {
        return index; // Expand if not already expanded
      }
    });
  };
  const handleToggleMobile2 = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = {};
      Object.keys(prevExpanded).forEach((key) => {
        newExpanded[key] = false;
      });
      newExpanded[index] = !prevExpanded[index];
      return newExpanded;
    });
  };

  return (
    <>
      <div className="Competitve">
        <h5 className="heading">How We Stand Out</h5>
        <div style={{ marginBottom: "3rem" }} className="line"></div>
        <div className="text-div">
          <p1>
            Our pioneers have a plethora of qualifications that equip them with
            the right knowledge to help you achieve your immigration dream. Our
            Regulated Canadian Immigration Consultants (RCIC) licence granted by
            the College of Immigration and Citizenship Consultants (CICC)
            enables us to properly counsel and support you throughout your
            immigration journey. Accurate knowledge along with a refined skill
            set are very important when it comes to facilitating a client’s
            immigration process.
            <br />
            <br />
            In our decades of experience, we have helped countless individuals
            immigrate to Canada for varying reasons. Even candidates whose visas
            were earlier refused managed to get through because of our expertise
            and knowledge about the ins and outs of the system.
            <br />
            <br />
            We bring to the table certain indispensable qualities that set
            Aquarian Immigration Services apart;
            <br />
            <br />
          </p1>
        </div>
        {isMobile && (
          <div className="w-full flex flex-col items-center justify-center">
            <div className="w-[100%] gap-1 mt-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
              {questions.map((item, index) => (
                <React.Fragment key={index}>
                  <div style={{ display: "block" }}>
                    <div
                      className="text-color2"
                      onClick={() => handleToggleMobile(index)}
                      style={{
                        display: "block",
                        background: bgColor[index],
                        marginTop: "0.1rem",
                      }}
                    >
                      <div
                        style={{
                          color: "#505050",
                          marginLeft: "2rem",
                          width: "80%",
                        }}
                      >
                        <br />
                        <div className="gapImage2">
                          <img alt="" src={imageAdvantage[index]} />
                          <h1>{item}</h1>
                          <h1
                            className="downArrow"
                            style={{ paddingLeft: "5rem" }}
                          >
                            <IoIosArrowDown />
                          </h1>
                        </div>
                        <br />
                      </div>
                    </div>

                    {expandedIndex === index && (
                      <div
                        className="text-color2"
                        style={{
                          marginTop: "0rem",
                          background: "#DCDDDE",
                        }}
                      >
                        {/* Content when the box is expanded */}
                        <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                          <br />
                          {answers[index]}
                          <br />
                          <br />
                        </p>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              ))}
              {questions2.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    className="text-color2"
                    onClick={() => handleToggleMobile2(index)}
                  >
                    {" "}
                    <div
                      style={{
                        background: bgColor2[index],
                        alignItems: "flex-start",

                        width: "100%",
                      }}
                    >
                      <br />
                      <div className="gapImage2">
                        <img alt="" src={imageAdvantage2[index]} />
                        <h1>{item}</h1>
                        <h1
                          className="downArrow"
                          style={{ paddingLeft: "7rem" }}
                        >
                          <IoIosArrowDown />
                        </h1>
                      </div>
                      <br />
                    </div>
                  </div>

                  {expanded[index] && (
                    <div
                      className="text-color2"
                      style={{
                        marginTop: "0rem",
                        background: "#DCDDDE",
                      }}
                    >
                      {/* Content when the box is expanded */}
                      <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>
                        <br />
                        {answers2[index]}
                        <br />
                        <br />
                      </p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {!isMobile && (
          <div style={{ marginLeft: "-15%" }}>
            <div className="w-[100%] flex flex-row justify-center  gap-[8%]">
              {questions.map((item, index) => (
                <React.Fragment key={index}>
                  <div style={{ display: "block" }}>
                    {expandedIndex === index && (
                      <div
                        onMouseEnter={() => setExpandedIndex(index)}
                        onMouseLeave={() => setExpandedIndex(null)}
                        className="text-color-expanded"
                        style={{
                          backgroundImage: `url(${dialog[index]})`,
                        }}
                      >
                        {/* Content when the box is expanded */}
                        <p>{answers[index]}</p>
                      </div>
                    )}
                    <div
                      className="text-color"
                      onMouseEnter={() => setExpandedIndex(index)}
                      onMouseLeave={() => setExpandedIndex(null)}
                      style={{
                        display: "block",
                        background: bgColor[index],
                        marginTop: "0.1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "80%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <br />
                        <div className="gapImage">
                          <h1 className="downArrow">
                            <IoIosArrowUp />
                          </h1>
                          <img alt="" src={imageAdvantage[index]} />
                          <h1>{item}</h1>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>

            <div className="w-[100%] mt-[7%] flex flex-row justify-center items-center gap-[8%]">
              {questions2.map((item, index) => (
                <React.Fragment key={index}>
                  <div style={{ display: "block" }}>
                    {expanded === index && (
                      <div
                        onMouseEnter={() => setExpanded(index)}
                        onMouseLeave={() => setExpanded(null)}
                        className="text-color-expanded"
                        style={{
                          backgroundImage: `url(${dialogBoxBelow[index]})`,
                        }}
                      >
                        {/* Content when the box is expanded */}
                        <p>{answers2[index]}</p>
                      </div>
                    )}
                    <div
                      className="text-color"
                      onMouseEnter={() => setExpanded(index)}
                      onMouseLeave={() => setExpanded(null)}
                      style={{
                        display: "block",
                        background: bgColor2[index],
                        marginTop: "0.1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "80%",
                          marginLeft: "auto",
                          marginRight: "auto",
                        }}
                      >
                        <br />
                        <div className="gapImage">
                          <h1 className="downArrow">
                            <IoIosArrowUp />
                          </h1>
                          <img alt="" src={imageAdvantage2[index]} />
                          <h1>{item}</h1>
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Competitive;
