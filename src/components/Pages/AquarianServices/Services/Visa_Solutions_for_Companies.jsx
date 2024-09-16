import React, { useState, useEffect } from "react";
import AccordionServices from "../AccordionServices";

import { useMobile } from "../../../globalComponents/MobileContext/IsMobileContext";

import buisnessVisits from "../../../../Assets/buisnessVisits.jpg";

import buisnessVisitsAccordion from "../../../../Assets/buisnessVisits.jpg";

import pnp from "../../../../Assets/intraCompanyTransfer.jpg";

import intraCompanyTransferAccordion from "../../../../Assets/intraCompanyTransfer.jpg";


import share_3_line from "../../../../Assets/share_3_line.svg";

import down_toggle from "../../../../Assets/down_toggle.svg";

import up_toggle from "../../../../Assets/up_toggle.svg";

import AccordionServicesMobile from "../AccordionServicesMobile.jsx";

const data = [
  {
    id: 1,
    image: buisnessVisits,
    accordionImage:buisnessVisitsAccordion,
    name: "Business visits",
    content: {
      item1:`If you are a company or organisation based in India and wish to send your employee(s) to Canada for a short work visit, we offer you visa solutions for the same. The purpose of the visit can be to attend a conference, meetings, research or meet potential buyers or sellers.  `, 
      item2:`Once on board as your expert visa consultants, our practised and experienced team will handle all the business visa needs of the employees of your company. We understand both the Indian and Canadian Immigration systems well and that lends us an edge to offer you the best possible professional services. 
 
 `, 
      item3:`Aquarian Immigration being owned and run by a Licensed Immigration Consultant, Canada (RCIC), handles these professional services for a number of companies on a contract basis. Companies wishing to retain our services may contact us through email at : dir@iaquaruan.com. 
`
    } 
  },
  {
    id: 2,
    image: pnp,
    accordionImage:intraCompanyTransferAccordion,
    name: "Intra-Company Transfers",
    content: {
      item1:`The ICT program allows multinational companies to transfer specific employees from a foreign branch, subsidiary, affiliate, or parent company to a Canadian office without requiring a Labour Market Impact Assessment (LMIA). `, 
      item2:`Aquarian offers ICT Work Permit and Visa solutions to companies. There are certain requirements that must be met by the employer and the employee both. We help the companies and the employees being transferred meet the eligibility criteria. Extensions of such WP is also on the menu.`, 
      item3:`We look after all your Canada Visa needs. From documentation to application of the ICT Work Permit, we handle every step of the process. Our in-depth knowledge of the Canadian Immigration System enables us to handle the entire process with professional expertise. `
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
        <h2 className="services-header-text">Visa Solutions for Companies</h2>
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
