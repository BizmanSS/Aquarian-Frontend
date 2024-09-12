import React, { useState, useRef, useEffect } from "react";
import AccordionServices from "../AccordionServices";

import { useMobile } from "../../../globalComponents/MobileContext/IsMobileContext";

import expressEntry from "../../../../Assets/expressEntry.png";

import expressEntryAccordion from "../../../../Assets/expressEntryAccordion.png";

import pnp from "../../../../Assets/pnp.png";

import pnpAccordion from "../../../../Assets/pnpAccordion.png";

import sponsorship from "../../../../Assets/sponsorship.png";

import sponsorshipAccordion from "../../../../Assets/sponsershipAccordion.png";

import share_3_line from "../../../../Assets/share_3_line.svg";

import down_toggle from "../../../../Assets/down_toggle.svg";

import up_toggle from "../../../../Assets/up_toggle.svg";

import AccordionServicesMobile from "../AccordionServicesMobile.jsx";

const data = [
  {
    id: 1,
    image: expressEntry,
    accordionImage:expressEntryAccordion,
    name: "Express Entry",
    content: {
      item1:`Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`, 
      item2:`TExpress Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories. 
 `, 
      item3:`Express Entry is the fastest and most popular way to Immigrate to Canada. It is designed to bring in skilled workers to Canada through three categories.`
    } 
  },
  {
    id: 2,
    image: pnp,
    accordionImage:pnpAccordion,
    name: "Provincial Nominee Program",
    content: {
      item1:`Avail Aquarian Immigration’s PNP expertise to effortlessly achieve nomination from the province of your choice. `, 
      item2:`We guide you through the various province-specific requirements, ensuring a smooth transition to Canadian residency tailored to your unique aspirations. `, 
      item3:``
    } 
  },
  {
    id: 3,
    image: sponsorship,
    accordionImage: sponsorshipAccordion,
    name: "Sponsorship",
    content: {
      item1:`Aquarian Immigration Services can help you bring your family together. `, 
      item2:` If you are a Permanent Resident in Canada or a Canadian citizen you can sponsor your spouse, children, parents and grandparents and have them join you in Canada. `, 
      item3:`Know everything you need to know about family sponsorship through our detailed support and assistance.`
    } 
  },
];

const Permanent_immigration_service = () => {
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
        <h2 className="services-header-text">Permanent Immigration</h2>
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
                  item={data.find((item) => item.id === openItemId)} isAccordionActive= {openItemId}
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

export default Permanent_immigration_service;
