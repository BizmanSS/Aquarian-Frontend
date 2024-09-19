import React, { useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

import "./AquarianServices.css";

const AccordionServices = ({ item, isAccordionActive, setAccordionActive,setOpenItemId }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight; // Get full content height

      if (isAccordionActive) {

        if(window.innerWidth < 768){
          contentRef.current.style.height = `420px`;
        }

        else if(window.innerWidth < 1067){
          contentRef.current.style.height = `650px`;
        }
        else{
          contentRef.current.style.height = `470px`;
        }
      
      } else {
        contentRef.current.style.height = "0px"; // Collapse when not active
      }

      // contentRef.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center", // Ensures the element scrolls into the center of the viewport
      // });

      // Scroll to 200px from the top of the viewport
      const scrollToPosition = contentRef.current.getBoundingClientRect().top + window.pageYOffset - 200;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      console.log("Accordion-active", isAccordionActive);
    }
  }, [isAccordionActive]);

  return (
    <div className="accordion-content" ref={contentRef}>
      <div className="accordion-row">
        <div className="accordion-row-inner">

        <AiOutlineClose
                className="closeIcon-accordion-service"
                onClick={() => {
                  setAccordionActive(false);
                  setOpenItemId(null);
                }}
              />

          <div className="accordion-content-name">
            <p lassName="">{item.name}</p>
          </div>
          <div className="accordion-column-container">
            <div className="accordion-column">
              <div className="accordion-image-button-container">
                <img
                  src={item.accordionImage}
                  alt={item.name}
                  className="accordion-content-image"
                />
                <button className="aquarian-services-button">
                  Explore
                  <div className="aquarian-services-button-arrow">
                    <MdArrowOutward />
                  </div>
                </button>
              </div>
            </div>
            <div className="accordion-column">
              <div className="accordion-content-text">
                {item.content.item1}
              </div>
            </div>
            <div className="accordion-column">
              <div className="accordion-content-text">
                {item.content.item2}
              </div>
            </div>
            <div className="accordion-column">
              <div className="accordion-content-text">
                {item.content.item3}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionServices;
