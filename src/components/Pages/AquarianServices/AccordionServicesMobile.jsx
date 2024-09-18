import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import  './AquarianServices.css';
import { useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";

const AccordionServiceMobile = ({ item,isAccordionActive, setAccordionActive}) => {

  const contentRef= useRef(null);

  useEffect(() => {
    if (contentRef.current) {
     

      

      // contentRef.current.scrollIntoView({
      //   behavior: "smooth",
      //   block: "center", // Ensures the element scrolls into the center of the viewport
      // });

      // Scroll to 200px from the top of the viewport
      const scrollToPosition = contentRef.current.getBoundingClientRect().top + window.pageYOffset - 150;

      window.scrollTo({
        top: scrollToPosition,
        behavior: "smooth",
      });

      console.log("MobileAccordion-active", isAccordionActive);
    }
  }, [isAccordionActive]);

  return (
    <div className={`accordion-service-mobile ${isAccordionActive ? 'accordion-mobile-active' : ''}`} ref={contentRef}>

<AiOutlineClose
                className="mobile-closeIcon-accordion-service"
                onClick={() => {
                  setAccordionActive(false);
                }}
              />
      <h2 className="heading">{item.name}</h2>
      <img src={item.accordionImage} alt={item.name} className="imageAccordionServices" />
      <hr className="divider" />
      <p class="accordionMobileContent">{item.content.item1}</p>

      <hr className="divider" />
      <p class="accordionMobileContent">{item.content.item2}</p>

      <hr className="divider" />
      <p class="accordionMobileContent">{item.content.item3}</p>
      <button className="aquarian-services-button-mobile">
          Explore
          <div className="aquarian-services-button-arrow-mobile">
          <MdArrowOutward/>
          </div>
          </button>
    </div>
  );
};

export default AccordionServiceMobile;
