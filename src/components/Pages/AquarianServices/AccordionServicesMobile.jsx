import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import  './AquarianServices.css';

const AccordionServiceMobile = ({ item,openItemId }) => {

  return (
    <div className={`accordion-service-mobile ${openItemId ? '' : 'accordion-mobile-active'}`}>
      <h2 className="heading">{item.name}</h2>
      <img src={item.image} alt={item.name} className="image" />
      <hr className="divider" />
      <p class="accordionMobileContent">{item.content}</p>
      <button className="aquarian-services-button">
          Explore
          <div className="aquarian-services-button-arrow">
          <MdArrowOutward/>
          </div>
          </button>
    </div>
  );
};

export default AccordionServiceMobile;
