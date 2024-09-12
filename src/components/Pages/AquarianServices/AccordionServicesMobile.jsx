import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import  './AquarianServices.css';

const AccordionServiceMobile = ({ item,isAccordionActive}) => {

  return (
    <div className={`accordion-service-mobile ${isAccordionActive ? 'accordion-mobile-active' : ''}`}>
      <h2 className="heading">{item.name}</h2>
      <img src={item.accordionImage} alt={item.name} className="imageAccordionServices" />
      <hr className="divider" />
      <p class="accordionMobileContent">{item.content.item1}</p>
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
