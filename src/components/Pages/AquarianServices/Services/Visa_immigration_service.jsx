import React, { useState, useRef, useEffect } from "react";
import AccordionServices from "../AccordionServices";

import studentVisa from "../../../../Assets/studentVisa.png";

import studentVisaAccordion from "../../../../Assets/studentVisaAccordion.png";

import visitorVisa from "../../../../Assets/visitorVisa.png";

import visitorVisaAccordion from "../../../../Assets/visitorVisaAccordion.png";

import workVisa from "../../../../Assets/workVisa.png";

import workVisaAccordion from "../../../../Assets/workVisaAccordion.png";

import buisnessVisa from "../../../../Assets/businessVisa.png";

import buisnessVisaAccordion from "../../../../Assets/buisnessVisaAccordion.png";

import startUpVisa from "../../../../Assets/startUpVisa.png";

import startUpVisaAccordion from "../../../../Assets/startupVisaAccordion.png";

import investorsVisa from "../../../../Assets/investorsVisa.png";

import investorsVisaAccordion from "../../../../Assets/investorsAccordion.png";

import superVisa from "../../../../Assets/superVisa.png";

import superVisaAccordion from "../../../../Assets/superVisaAccordion.png";

import visaExtension from "../../../../Assets/visaExtension.png";

import visaExtensionAccordion from "../../../../Assets/visaExtensionAccordion.png";

import share_3_line from "../../../../Assets/share_3_line.svg";

import down_toggle from "../../../../Assets/down_toggle.svg";

import up_toggle from "../../../../Assets/up_toggle.svg";

import AccordionServicesMobile from "../AccordionServicesMobile.jsx";

import { useMobile } from "../../../globalComponents/MobileContext/IsMobileContext";

const data = [
  {
    id: 1,
    image: studentVisa,
    accordionImage: studentVisaAccordion,
    name: "Student Visa",
    path:"/study/study-in-canada", 
    content: {
      item1: `Our team of experts will assist you in selecting the right universities and programs based on your interests, qualifications, and future career prospects. `,
      item2: `We guide you through the entire application process, including preparing and submitting applications to universities and colleges. We offer information on available scholarships, grants, and financial aid options. `,
      item3: `AI provides comprehensive support for your student visa application process, including document preparation, review, and submission. Our one-on-one counselling helps you to navigate the complexities of studying overseas, ensuring a smoother and more successful experience.`,
    },
  },
  {
    id: 2,
    image: visitorVisa,
    accordionImage: visitorVisaAccordion,
    name: "Visitor Visa",
    path:"/visit/visitor-visa",
    content: {
      item1: `Looking at visiting Canada? Whether you want to visit friends or family, accompany your child to the University or just explore the country, Aquarian Immigration has got you covered. `,
      item2: `Starting from conducting an eligibility assessment to preparation and procurement of all necessary documents, such as identification, travel itinerary, financial statements, and proof of ties to the home country, we cover all bases. `,
      item3: `We guide you through the completion of your visitor visa application forms, ensuring all information is accurate and complete. Our aim is providing you continued support and advice throughout the visa process so that you can count on us. `,
    },
  },
  {
    id: 3,
    image: workVisa,
    accordionImage: workVisaAccordion,
    name: "Work Visa",
    path:"work/work-in-canada",
    content: {
      item1: `Acquiring a Canadian Work Permit involves a series of steps beginning with conducting a thorough assessment of your qualifications, work experience to verify your eligibility. Then comes the determination of the right type of Work Permit best suited for you.`,
      item2: `We aid in completion of your work permit application forms, ensuring accuracy and completeness to minimize the risk of delays or rejections. We assist you in organizing all required documentation, such as proof of identity, educational credentials, work experience.`,
      item3: `AI team will navigate through the entire LMIA process, if applicable. Assisting with applications for extending work permits or changing conditions related to employment, such as job changes or employer changes also comes under our purview. `,
    },
  },
  {
    id: 4,
    image: buisnessVisa,
    accordionImage: buisnessVisaAccordion,
    name: "Business Visa",
   path:"visit/business",  //  /visit/business
    content: {
      item1: `A Business Visa is a type of Visitor Visa, where the purpose of travel is to conduct a very short form of business or work such as attend meetings or conferences. It is different than a Work Visa.`,
      item2: `We, at Aquarian immigration, help individual entrepreneurs and companies acquire such Business Visitor Visas for their employees. Our expertise and experience in this field help businesses focus more on their work and gladly leave the visa processing to us. `,
      item3: `As RCIC we act as a liaison between our clients and Canadian immigration authorities, addressing any concerns that may arise. Once the visa is granted, we offer advice on travel plans, entry requirements, and business etiquette to ensure a smooth visit to Canada.`,
    },
  },
  {
    id: 5,
    image: startUpVisa,
    accordionImage: startUpVisaAccordion,
    name: "Startup Visa",
    path:"business/invest/start-up",
    content: {
      item1: `Are you an entrepreneur who wishes to start a new venture in Canada? Aquarian Immigration offer a range of services tailored to assist entrepreneurs navigate the process of acquiring a Start-up Visa to Canada.`,
      item2: `After an eligibility criteria assessment to determine if you meet the requirements of the program, we will help you with Qualifying Business Idea Evaluation, Development of Business Plan, Document Preparation, Application Submission and Preparation for the Interview. `,
      item3: `We assist you in connecting with designated organizations that provide the necessary support to qualify. Once the Start-up Visa is approved, we offer advice on settling in Canada, including navigating business regulations, tax obligations and resources for entrepreneurs.`,
    },
  },
  {
    id: 6,
    image: investorsVisa,
    accordionImage: investorsVisaAccordion,
    name: "Entrepreneur",
    path:"business/pnp-entrepreneur-streams",
    content: {
      item1: `Certain Provinces of Canada run Entrepreneur Programs. The requirements and criteria for these programs vary with each province. Mostly, applicants must have experience running a business and be willing to invest in a new or existing business in Canada.`,
      item2: `It is a two-step process – Acquiring a Work Visa for 24 months and Applying for Permanent Residency after running the business for 2 years and receiving PNP Nomination. We help you from beginning to end.  `,
      item3: `AI helps you recognise the correct program for you based on factors such as your business experience, financials, goals, preferences and expertise. Also with Business Concept and Business Plan, Application Submission, Documentation, Interview Preparation and Follow-ups. `,
    },
  },
  {
    id: 7,
    image: superVisa,
    accordionImage: superVisaAccordion,
    name: "Super Visa",
    path:"visit/super-visa",
    content: {
      item1: `The Super Visa is a valuable option for families wishing to spend extended time together in Canada, facilitating the reunification of parents and grandparents with their Canadian relatives. `,
      item2: `You, as a sponsor of your parents/grandparents, must be a Canadian PR or Citizen and meet specific financial requirements, showing that you can support them during their stay.  `,
      item3: `Our team assists you in navigating through the whole process, gathering and preparing all required documents, including proof of sponsorship, financial documents, and medical insurance, ensuring everything meets Canadian immigration standards.`,
    },
  },
  {
    id: 8,
    image: visaExtension,
    accordionImage: visaExtensionAccordion,
    name: "Visa extension",
    path:"",
    content: {
      item1: `Most categories of visas to Canada, including Visitor Visa, Work Visas, Study Visas, Super Visas may be extended. However, there is a system in place and all relevant conditions must be met and adhered to. `,
      item2: `By leveraging our expertise and knowledge of Canadian immigration processes, we strive to make the visa extension process as smooth and successful as possible for our clients, helping them maintain their legal status and continue their stay in Canada.`,
      item3: `Additional Options may be Change of Condition of your current visa or Restoration of status of your visa. `,
    },
  },
];

const Visa_immigration_service = () => {
  const [openItemId, setOpenItemId] = useState(null);
  const [groupSize, setGroupSize] = useState(3); // Default to 3 for large screens
  const [isOpenAccordion, setOpenAccordion] = useState(false);

  const { isMobile } = useMobile();

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
        <h2 className="services-header-text">Visa</h2>
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

export default Visa_immigration_service;
