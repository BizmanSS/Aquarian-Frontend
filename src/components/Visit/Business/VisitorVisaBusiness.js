import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I work in Canada with a Business Visitor Visa?",
    answer:
      "No, the Canada Business Visitor Visa does not permit holders to engage in any form of gainful employment in Canada. It is strictly for business-related activities such as attending meetings or conferences without entering the Canadian labor market.",
  },
  {
    question: "Is there a separate application process for business visitors?",
    answer:
      "No, there is no separate application specifically for business visitors. They must apply for a Temporary Resident Visa (TRV) or visitor visa, indicating their intention to conduct international business activities in Canada.",
  },

];

export default function CanadaBusinessVisitorVisa() {
  const WhyRef = useRef(null);
  const WhatRef = useRef(null);
  const EligibilityRef = useRef(null);
  const RequiredRef = useRef(null);
  const ApplicationRef= useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Why Choose Canada for Business?",
      scrollTo: WhyRef,
    },
    {
      title: "What is a Business Visitor Visa?",
      scrollTo: WhatRef,
    },
    {
      title: "Eligibility Criteria for a Business Visitor Visa",
      scrollTo: EligibilityRef,
      // subItems: [
      //   {
      //     title: "Impact of SDS Closure on International Students",
      //     scrollTo: impactRef,
      //   },
      // ],
    },
    {
      title: "Required Documents for Business Visitor Visa Application",
      scrollTo: RequiredRef,
    },
    {
      title: "Application Process for a Business Visitor Visa",
      scrollTo: ApplicationRef,
    },


    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu type="V" h1="Visitor Visa- Business"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Visit
              {" > "}Canada Business Visitor Visa
            </div>
            <div class="pages-header">Canada Business Visitor Visa</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            The Canada Business Visitor Visa is a temporary visa designed for individuals visiting Canada for business-related activities without entering the Canadian labor market. This visa allows business visitors to attend meetings, conferences, or training sessions, and explore business opportunities. To qualify, applicants must demonstrate that their primary business activities are outside Canada and that they do not intend to work in the country.

              <div className="pages-paragraph">
              While applying, individuals must submit a temporary resident visa application, which includes documentation such as proof of funds, a travel itinerary, and a letter of invitation from a Canadian business partner. The visa typically permits stays of up to six months per visit and can be valid for multiple entries over a period of up to ten years. It is crucial to note that holders cannot engage in gainful employment while in Canada on this visa
              </div>
              <div className="pages-paragraph">
              A Canada Visitor Visa for Business allows you to legally enter and engage in short-term business activities in the country. 
              </div>
            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={WhyRef}>
            Why Choose Canada for Business?
            </div>
            <div className="pages-paragraph">
            Canada has firmly established itself as a hub for global business and trade. As a member of the G7, Canada has a high standard of living, a strong banking system, and a transparent legal framework that fosters innovation and investment.

            <div className='my-2'>Canada is a gateway to the North American market, offering access to not only Canadian industries but also the United States and Mexico, which are part of the United States-Mexico-Canada Agreement (USMCA). </div>
            </div>


            <div class="pages-header-2" ref={WhatRef}>
            What is a Business Visitor Visa?
            </div>
           <div className='pages-paragraph'>
           A Business Visitor Visa allows foreign nationals to travel to Canada for short-term business purposes. This visa is specifically designed for individuals who wish to engage in business activities such as:

           <ul>
            <li>Attending business meetings or conferences.</li>
            <li>Negotiating contracts.</li>
            <li>Conducting market research.</li>
            <li>Participating in training or business-related events.</li>
            <li>Exploring new business opportunities or partnerships.</li>
           </ul>

           It’s important to note that this visa does not permit applicants to engage in direct employment, receive a salary from a Canadian employer, or manage a business operation in Canada.

           </div>


            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility Criteria for a Business Visitor Visa
            </div>

            <div className="pages-paragraph">

            To be eligible for a business visitor visa, applicants must meet certain criteria set by Immigration, Refugees, and Citizenship Canada (IRCC). These include:

            <ul className="my-2 ml-3">
                <li>
                The applicant must clearly state that the purpose of their visit is for business activities only (meetings, conferences, business negotiations, etc.), and not for employment, studying, or other non-business purposes.
                </li>

                <li>
                Applicants must hold a valid passport that remains valid for at least 6 months beyond the date of their intended departure from Canada.
                </li>
                <li>
                Applicants must prove that they can support themselves financially while in Canada. This could include providing bank statements, pay slips, or a letter from the employer detailing the financial backing for the trip.
                </li>

                <li>
                Applicants must demonstrate strong ties to their home country, such as a stable job, family, or property, to assure Canadian authorities that they intend to leave Canada before their visa expires.
                </li>

                <li>
                If you’re attending a business event or meeting, an invitation letter from a Canadian organization or business partner is generally required. This letter should outline the purpose of the visit and the details of the event or meeting.
                </li>

              </ul>

              A visitor visa is a temporary visa, and applicants must prove they have no intention of overstaying their permitted stay. They should not engage in any form of paid work while in Canada, as this would violate the terms of their visitor visa.

            </div>

            <div class="pages-header-2" ref={RequiredRef}>
            Required Documents for Business Visitor Visa Application
            </div>

            <div className="pages-paragraph">
            Applicants must submit the following documents when applying for a business visitor visa:

              <div className="mt-5 mb-2 font-bold text-[17px]">
              a. Basic Documents
              </div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Passport: </strong>Must be valid for at least six months beyond the planned stay.</li>

                  <li>
                  <strong>Visa Application Form: </strong>Completed accurately.</li>

              <li>
                  <strong>Application Fee: </strong>Payment of the applicable visa fee.</li>

                  <li>
                  <strong>Photographs: </strong>Passport-sized photos as per the specifications set by IRCC.</li>
              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
              b. Supporting Documents
              </div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Invitation Letter: </strong>From the Canadian business or event organizer detailing the purpose of the visit and your role in the event.</li>

                  <li>
                  <strong>Proof of Financial Support: </strong>Bank statements, pay slips, tax returns, or a letter from the employer confirming the financial coverage for the stay.</li>

              <li>
                  <strong>Travel Itinerary: </strong>A detailed plan that includes flight bookings, accommodation details, and the duration of stay.</li>

                  <li>
                  <strong>Proof of Ties to Home Country: </strong>Documents such as employment letters, business ownership papers, or evidence of family responsibilities.</li>

                  <li>
                  <strong>Past Travel History: </strong>Previous visas or stamps showing you have adhered to immigration rules in other countries, particularly the U.S. or Schengen Area.</li>

              </ul>

            </div>


            
            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for a Business Visitor Visa
            </div>

            <div className="pages-paragraph">
            The process of applying for a business visitor visa involves several steps:

            
              <ul className="my-2 ml-3">
                <li>
                Make sure all the required documents are ready before starting your application. This includes the invitation letter, proof of financial stability, and ties to your home country.</li>

                  <li>
                  You can submit your application either online through the IRCC website or via paper at a Visa Application Center (VAC). Online applications tend to be processed faster.</li>

              <li>
              Depending on your nationality, you may need to provide biometric information (fingerprints and a photo). This can be done after submitting the application or when visiting a VAC.</li>

                  <li>
                  Typically, processing times for a business visitor visa can range from 10 to 30 days. However, this may vary based on the volume of applications and the complexity of your case.</li>
              </ul>

             <div >Once your application is processed, you will receive a decision. If your visa is approved, it will be stamped in your passport, and you can begin planning your trip.</div>
             <div className='my-2'>Business visitors can stay for up to six months. However, the final decision on the duration of stay is made by the border officer when you arrive in Canada. The officer will assess your business activities and decide the duration of your stay based on the specifics of your case.</div>
             <div>At Aquarian Immigration Services, we ensure that your business visa application is handled with the utmost care, ensuring a smooth, efficient process. With over 30 years of experience in immigration consulting, we are committed to helping you successfully navigate the business visa process, making your trip to Canada a productive and rewarding experience.</div>
            </div>

          </div>
          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}
