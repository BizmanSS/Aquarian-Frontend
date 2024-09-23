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
    accordionImage: expressEntryAccordion,
    name: "Express Entry",
    path:'/immigrate/express-entry',
    content: {
      item1: `Express Entry is the fastest and most popular way to immigrate to Canada permanently. It involves creating an EE Profile and subsequently getting a CRS score. `,
      item2: `Aquarian Immigration assists you to-
	Determine eligibility in one of the Programs under Express Entry.
	Create an Express Entry Profile.
	Aim at getting the highest possible CRS score.
	File for a Permanent Residency Application once ITA is received.
 
 `,
      item3: `We ensure all your-
	Necessary documents are complete and organised.
	Help you with the language proficiency tests like IELTS.
	Deadlines are met.
	Communication with IRCC is prompt and updated.
`,
    },
  },
  {
    id: 2,
    image: pnp,
    accordionImage: pnpAccordion,
    name: "Provincial Nominee Program",
    path:'/immigrate/provincial-nominee-program',
    content: {
      item1: `Avail Aquarian Immigration’s PNP expertise to effortlessly achieve nomination from the province of your choice.`,
      item2: `We guide you through the various province-specific requirements, ensuring a smooth transition to Canadian residency tailored to your unique aspirations. `,
      item3: `Each case is unique and comes with its own set of requirements, goals and circumstances. Determining the right pathway to suit the needs of candidate and ensuring success in the process is what we specialise in. `,
    },
  },
  {
    id: 3,
    image: sponsorship,
    accordionImage: sponsorshipAccordion,
    name: "Sponsorship",
    path:'/sponsorship/sponsorship',
    content: {
      item1: `Aquarian Immigration Services can help you bring your family together. `,
      item2: ` If you are a Permanent Resident in Canada or a Canadian citizen you can sponsor your spouse, children, parents and grandparents and have them join you in Canada. `,
      item3: `Know everything you need to know about family sponsorship through our detailed support and assistance. Let us help you get your loved ones closer!`,
    },
  },
];

const Permanent_immigration_service = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [groupSize, setGroupSize] = useState(3); // Default to 3 for large screens

  const [isOpenAccordion, setOpenAccordion] = useState(false);

  const { isMobile } = useMobile();

  useEffect(() => {
    if (openItemId !== null) {
      setTimeout(() => {
        console.log("Updated openItemId:", openItemId);
      }, 2000);
    }
  }, [openItemId]);

  const toggleAccordion = (id) => {
    // Toggle accordion by resetting both openItemId and isOpenAccordion
    if (openItemId === id) {
      setOpenItemId(null); // Close the accordion
      setOpenAccordion(false);
    } else {
      setOpenItemId(id); // Open the accordion
      setOpenAccordion(true);
    }
    console.log("Id:", id);
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
                    src={isOpenAccordion == true ? down_toggle : up_toggle}
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
                  isAccordionActive={openItemId}

                  setAccordionActive={setOpenItemId}
                />
              )}
          </div>
          {/* Accordion that spans full width of the row */}
          {openItemId &&
            !isMobile &&
            row.some((item) => item.id === openItemId) && (
              <AccordionServices
                item={data.find((item) => item.id === openItemId)}
                isAccordionActive={isOpenAccordion}
                setAccordionActive={setOpenAccordion}
                setOpenItemId={setOpenItemId} // Pass this down to reset on close
              />
            )}
        </div>
      ))}
    </div>
  );
};

export default Permanent_immigration_service;
