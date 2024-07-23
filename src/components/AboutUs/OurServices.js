import React, { useState } from "react";
import "../../styles/AboutUs.css";
import { IoIosArrowDown } from "react-icons/io";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import ServiceInfographics from "./ServiceInfographics";

const OurServices = () => {
  const [expandedIndex, setExpandedIndex] = useState({});
  const { isMobile } = useMobile();
  const questions = [
    "Consultation and assessment",
    "Preparation and submission of application forms and supporting documents",
    "Regular follow-ups",
    "Assistance with interview preparation",
    "Post-arrival services",
  ];
  const bgColor = ["#FA8B37", "#1EA3D6", "#E74078", "#C04AA0", "#02B7BD"];
  const bgColorExpanded = [
    "#FFF9C5",
    "#E6CBF7",
    "#FFBBD9",
    "#B3E1F8",
    "#C6EED6",
  ];
  //const imageService = [consulation, preparation, regular, assistance, post];
  const answers = [
    <p>
      We begin by doing an assessment to understand the eligibility of our
      client for the diverse immigration programs, which is then followed by a
      consultation for various entry paths such as Permanent Residency, Express
      Entry, Visas- Work, Student, Business and many more.
    </p>,
    <p>
      Next, we prepare the application forms and gather all the supporting
      documents efficiently. We assist in streamlining this process ensuring
      accuracy and completeness.
      <br />
      <br />
      Trust in our experts to guide you through the smooth submission
      procedures, saving time and eliminating stress along the way.
    </p>,
    "Post which we make sure we do regular follow-ups and maintain open communication with immigration authorities on behalf of our clients. Our dedicated approach ensures timely updates and resolves any queries.",
    "We also offer on-point assistance for interview preparation, ensuring that you're ready to shine when it counts. Benefit from personalised guidance and mock sessions to refine your responses. Our support minimises stress and enhances your chances of success, making your interview experience a smooth and rewarding one.",
    "After your application is successful you will also receive comprehensive guidance on settlement and post-arrival in Canada. From housing assistance to cultural integration support, we ensure a smooth transition into your new environment.",
  ];
  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => {
      if (prevIndex === index) {
        return null; // Close if already expanded
      } else {
        return index; // Expand if not already expanded
      }
    });
  };

  return (
    <>
      <div className="OurServices">
        <h5 className="heading">What We Can Do For You</h5>
        <div className="line"></div>
        <div className="text-div">
          <p1>
            Join our community and set off on a unique immigration experience.
            With 30+ years of combined experience, we have developed the
            knowledge to help you at every stage, making the move to a new
            chapter in your life smooth and successful.
            <br />
            <br />
          </p1>
        </div>
        {isMobile && (
          <>
            {questions.map((item, index) => (
              <React.Fragment key={index}>
                <div style={{ display: "block" }}>
                  <div
                    className="text-color2"
                    onClick={() => toggleExpand(index)}
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
                        {/* <img alt="" src={imageService[index]} />*/}
                        <h1>{item}</h1>
                        <h1
                          className="downArrow"
                          style={{ paddingLeft: "4rem" }}
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
                        background: bgColorExpanded[index],
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
          </>
        )}
      </div>
      {!isMobile && <ServiceInfographics />}
    </>
  );
};

export default OurServices;
