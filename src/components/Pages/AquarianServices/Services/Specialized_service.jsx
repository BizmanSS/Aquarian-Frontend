import React, { useState, useRef, useEffect } from "react";
import AccordionServices from "../AccordionServices";

import services_accordion_img1 from "../../../../Assets/services_accordion_img1.png";

import services_accordion_img2 from "../../../../Assets/services_accordion_img2.png";

import services_accordion_img3 from "../../../../Assets/services_accordion_img3.png";

import share_3_line from "../../../../Assets/share_3_line.svg";

import down_toggle from "../../../../Assets/down_toggle.svg";

import up_toggle from "../../../../Assets/up_toggle.svg";

import AccordionServicesMobile from "../AccordionServicesMobile.jsx";

import { useMobile } from "../../../globalComponents/MobileContext/IsMobileContext";

const data = [
  {
    id: 1,
    image: services_accordion_img1,
    name: "Item 1",
    content: "Details about Item 1",
  },
  {
    id: 2,
    image: services_accordion_img2,
    name: "Item 2",
    content: "Details about Item 2",
  },
  {
    id: 3,
    image: services_accordion_img3,
    name: "Item 3",
    content: "Details about Item 3",
  },
  {
    id: 4,
    image: services_accordion_img1,
    name: "Item 4",
    content: "Details about Item 4",
  },
];

const Specialized_service = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [groupSize, setGroupSize] = useState(3); // Default to 3 for large screens

  const { isMobile } = useMobile();

  const toggleAccordion = (id) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  useEffect(() => {
    // Adjust group size based on window width
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setGroupSize(1); // Mobile: 1 item per row
      } else if (window.innerWidth < 1024) {
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
                />
              )}
          </div>
          {/* Accordion that spans full width of the row */}
          {openItemId && !isMobile && row.some((item) => item.id === openItemId) && (
            <AccordionServices
              item={data.find((item) => item.id === openItemId)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Specialized_service;
