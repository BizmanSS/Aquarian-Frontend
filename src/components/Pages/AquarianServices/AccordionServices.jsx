import React, { useRef, useEffect } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import './AquarianServices.css';

const AccordionServices = ({ item, isAccordionActive}) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isAccordionActive) {
        const contentHeight = contentRef.current.scrollHeight; // Calculate full height
        contentRef.current.style.height = `${contentHeight}px`; // Set the height explicitly to expand
      } else {
        contentRef.current.style.height = '0px'; // Set the height to 0 to collapse
      }
      console.log("Accordion-active",isAccordionActive)
    }
    
  }, [isAccordionActive]);

  return (
    <div className="accordion-content" ref={contentRef}>
      <div className="accordion-content-wrapper">
        <table className="accordion-content-inner">
          <tbody>
            <tr>
              <td className="accordion-column">
                <p className="accordion-content-name">{item.name}</p>

                <div className="accordion-image-button-container">
                  <img src={item.accordionImage} alt={item.name} className="accordion-content-image" />
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
};

export default AccordionServices;
