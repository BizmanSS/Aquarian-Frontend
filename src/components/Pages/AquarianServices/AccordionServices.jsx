import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import  './AquarianServices.css';

const AccordionServices = ({ item, openItemId }) => (
  <div className={`accordion-content ${openItemId ? '' : 'accordion-active'}`}>
    <table className="accordion-content-inner">
      <tbody>
        <tr>
          <td className="accordion-column">
            <p className="accordion-content-name">{item.name}</p>
            <img src={item.image} alt={item.name} className="accordion-content-image" />
            <button className="aquarian-services-button">
          Explore
          <div className="aquarian-services-button-arrow">
          <MdArrowOutward/>
          </div>
          </button>
          </td>
          <td className="accordion-column">{item.content.item1}</td>
          <td className="accordion-column">{item.content.item2}</td>
          <td className="accordion-column">{item.content.item3}</td>
        </tr>
      </tbody>
    </table>
    </div>
  );

export default AccordionServices;