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
      item1: `Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`,
      item2: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile. `,
      item3: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile.`,
    },
  },
  {
    id: 2,
    image: interviewPreparation,
    accordionImage: interviewPreparationAccordion,
    name: "Interview Preparation",
    content: {
      item1: `Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`,
      item2: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile. `,
      item3: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile.`,
    },
  },
  {
    id: 3,
    image: postArrivalServices,
    accordionImage: postArrivalServicesAccordion,
    name: "Post Arrival Service",
    content: {
      item1: `Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`,
      item2: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile. `,
      item3: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile.`,
    },
  },
  {
    id: 4,
    image: citizenshipApplication,
    accordionImage: citizenshipApplicationAccordion,
    name: "Citizenship Application",
    content: {
      item1: `Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`,
      item2: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile. `,
      item3: `Express Entry is an online system that helps skilled workers apply to immigrate to Canada. Only those candidates who qualify under either one of the three streams can create an EE profile.`,
    },
  },
];

const Specialized_service = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [groupSize, setGroupSize] = useState(3); // Default to 3 for large screens

  const { isMobile } = useMobile();

  const toggleAccordion = (id) => {
    setOpenItemId(openItemId !== id ? id : null);
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
                />
              )}
          </div>
          {/* Accordion that spans full width of the row */}
          {openItemId &&
            !isMobile &&
            row.some((item) => item.id === openItemId) && (
              <AccordionServices
                item={data.find((item) => item.id === openItemId)}

                isAccordionActive= {openItemId}
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default Specialized_service;
