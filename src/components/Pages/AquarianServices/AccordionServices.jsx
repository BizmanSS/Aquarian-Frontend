import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

import './AquarianServices.css';

const AccordionServices = ({ item, isAccordionActive }) => (
  <div className={`accordion-content ${isAccordionActive ? '' : 'accordion-active'}`}>
    <div className="accordion-content-wrapper">
      <table className="accordion-content-inner">
        <tbody>
          <tr>
            <td className="accordion-column">
              <p className="accordion-content-name">{item.name}</p>

              <div class="accordion-image-button-container">
              <img src={item.image} alt={item.name} className="accordion-content-image" />
              <button className="aquarian-services-button">
                Explore
                <div className="aquarian-services-button-arrow">
                  <MdArrowOutward />
                </div>
              </button>
              </div>
            </td>
            <td className="accordion-column">
              <div className="accordion-content-text">{item.content.item1}</div>
            </td>
            <td className="accordion-column">
              <div className="accordion-content-text">{item.content.item2}</div>
            </td>
            <td className="accordion-column">
              <div className="accordion-content-text">{item.content.item3}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default AccordionServices;
