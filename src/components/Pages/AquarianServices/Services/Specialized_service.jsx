import React, { useState, useRef, useEffect } from "react";
import AccordionServices from "../AccordionServices";

import refusals from "../../../../Assets/refusals.png";

import refusalsAccordion from "../../../../Assets/refusalsAccordion.png";

import interviewPreparation from "../../../../Assets/interviewPreparation.png";

import interviewPreparationAccordion from "../../../../Assets/interviewPreparationAccordion.png";

import postArrivalServices from "../../../../Assets/postArrivalServices.png";

import postArrivalServicesAccordion from "../../../../Assets/postArrivalAccordion.png";

import citizenshipApplication from "../../../../Assets/citizenshipApplication.png";

import citizenshipApplicationAccordion from "../../../../Assets/citizenshipApplicationAccordion.png";

import share_3_line from "../../../../Assets/share_3_line.svg";

import down_toggle from "../../../../Assets/down_toggle.svg";

import up_toggle from "../../../../Assets/up_toggle.svg";

import AccordionServicesMobile from "../AccordionServicesMobile.jsx";

import { useMobile } from "../../../globalComponents/MobileContext/IsMobileContext";

const data = [
  {
    id: 1,
    image: refusals,
    accordionImage: refusalsAccordion,
    name: "Refusals",
    content: {
      item1: `Has your PR application to Canada been Refused? Your Visitor Visa or Study visa or Work Visa to Canada been denied and refused? Fret not! Aquarian Immigration specialises in resolving such issues and changing that refusal to acceptance. `,
      item2: `Options available to you, may be the possibility of appealing the decision, reapplying for the visa, or seeking alternative immigration pathways.  `,
      item3: `We conduct a thorough review of the refusal letter and the original application to identify the reasons for the visa denial and assess the overall case. Your case is then built again so as to address all the concerns of the previous one.`,
    },
  },
  {
    id: 2,
    image: interviewPreparation,
    accordionImage: interviewPreparationAccordion,
    name: "Interview Preparation",
    content: {
      item1: `Whether it is an Interview at the Consulate for a Visa, or an interview with the Designated Employer or for your Start-up Visa or an interview with the University of your choice, we will guide you and prepare you for it so that you can achieve what you set out to. `,
      item2: `Having an insight to the purpose of the interview and what is expected out of you helps you prepare. We hand hold you through understanding aspects like commonly asked questions, body language & communication skills, thorough knowledge of your application related topics. `,
      item3: `By knowing what to expect and thorough preparation, you set yourself up for a productive and fruitful interaction giving yourself the maximum opportunity to succeed in these interviews.`,
    },
  },
  {
    id: 3,
    image: postArrivalServices,
    accordionImage: postArrivalServicesAccordion,
    name: "Post Arrival Service",
    content: {
      item1: `Aquarian provides a range of essential support services to help you acclimate to your new environment and navigate the challenges of settling in a new country.`,
      item2: `Once you land in Canada, whether as a new permanent immigrant or as a temporary one (student, worker), there are a series of actions you must take to ensure a smooth transition. `,
      item3: `We guide you on Housing, Employment, Schooling and Education, Healthcare Navigation, Banking and Financial Systems, Legal and Regulatory Guidance, Support with Daily Life, Community Integration, apply Social Insurance Number (SIN), how to get your Drivers’ licence. `,
    },
  },
  {
    id: 4,
    image: citizenshipApplication,
    accordionImage: citizenshipApplicationAccordion,
    name: "Citizenship Application",
    content: {
      item1: `You have successfully completed your residency obligations and now you are ready to apply for the Canadian Citizenship.`,
      item2: `It will begin with assessing your eligibility which we will conduct for you. Citizenship Application is submitted on your behalf after careful preparation of relevant documents including proof of residence, language proficiency and tax filing. `,
      item3: `Once approved, we will then embark on the process of citizenship test preparation and of the interview as well, if applicable. And very soon you shall start a new chapter in your life as a Canadian Citizen! `,
    },
  },
];

const Specialized_service = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [groupSize, setGroupSize] = useState(3); // Default to 3 for large screens
  const [isOpenAccordion, setOpenAccordion] = useState(false);

  const { isMobile } = useMobile();

  const toggleAccordion = (id) => {
    // Toggle accordion by resetting both openItemId and isOpenAccordion
    if (openItemId === id) {
      setOpenItemId(null); // Close the accordion
      setOpenAccordion(false);
    } else {
      setOpenItemId(id); // Open the accordion
      setOpenAccordion(true);
    }
    console.log("Id:", id);
  };

  useEffect(() => {
    // Adjust group size based on window width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGroupSize(1); // Mobile: 1 item per row
      } else if (window.innerWidth < 1067) {
        setGroupSize(2); // Medium: 2 items per row
      } else {
        setGroupSize(3); // PC: 3 items per row
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Group data into rows based on groupSize
  const groupedData = [];
  for (let i = 0; i < data.length; i += groupSize) {
    groupedData.push(data.slice(i, i + groupSize)); // using slice for simplicity
  }

  return (
    <div className="accordion-container">
      <div className="services-header">
        <h2 className="services-header-text">Specialized Services</h2>
        <img src={share_3_line} alt="" className="" />
      </div>

      {groupedData.map((row, rowIndex) => (
        <div key={rowIndex} className="row-wrapper">
          <div className="row">
            {row.map((item) => (
              <div
                key={item.id}
                className="item-wrapper"
                onClick={() => toggleAccordion(item.id)}
              >
                <div
                  className={`item-header ${
                    openItemId === item.id ? "active" : ""
                  }`}
                >
                  <div className="item-header-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <h3>{item.name}</h3>
                  </div>

                  <img
                    src={openItemId !== item.id ? down_toggle : up_toggle}
                    alt=""
                    className="services_toggle"
                  />
                </div>
              </div>
            ))}

            {openItemId &&
              isMobile &&
              row.some((item) => item.id === openItemId) && (
                <AccordionServicesMobile
                  item={data.find((item) => item.id === openItemId)}
                  isAccordionActive={openItemId}

                  setAccordionActive={setOpenItemId}
                />
              )}
          </div>
          {/* Accordion that spans full width of the row */}
          {openItemId &&
            !isMobile &&
            row.some((item) => item.id === openItemId) && (
              <AccordionServices
                item={data.find((item) => item.id === openItemId)}
                isAccordionActive={isOpenAccordion}
                setAccordionActive={setOpenAccordion}
                setOpenItemId={setOpenItemId} // Pass this down to reset on close
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default Specialized_service;
