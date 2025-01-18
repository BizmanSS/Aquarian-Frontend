import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: " What is the difference between a Student Visa and a Visitor Visa?",
    answer:
      "A Student Visa is specifically for those intending to study in a foreign country, while a Visitor Visa is for temporary visits without the intent to study or work.",
  },
  {
    question: "Can visitors apply for a work permit while in Canada?",
    answer:
      "As of August 2024, visitors are no longer allowed to apply for work permits from within Canada; they must exit and re-enter to apply.",
  },
  {
    question: "What are the requirements for converting a Visitor Visa to a Work Permit?",
    answer:
      "To convert, you typically need a job offer supported by a Labour Market Impact Assessment (LMIA) or qualify under specific exemptions.",
  },

];

export default function CanadaBusinessVisitorVisa() {
  const VisitorRef = useRef(null);
  const TypesRef= useRef(null);
  const ReasonsRef = useRef(null);
  const EligibilityRef = useRef(null);
  const ApplicationRef= useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Visitor Visa for Students or Workers",
      scrollTo: VisitorRef,
    },
    {
      title: "Types of Visitor Visas for Students and Workers",
      scrollTo: TypesRef,
    },
    {
      title: "Reasons for Applying for a Visitor Visa: Students vs. Workers",
      scrollTo: ReasonsRef,
      // subItems: [
      //   {
      //     title: "Impact of SDS Closure on International Students",
      //     scrollTo: impactRef,
      //   },
      // ],
    },
    {
      title: "Eligibility Criteria for Visitor Visa – Students or Workers",
      scrollTo: EligibilityRef,
    },
    {
      title: "Application Process for Visitor Visa – Students or Workers",
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
        <SiteMapMenu type="V" h1="Visitor Visa- Students or Workers"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Visit
              {" > "}Visitor Visa – Students or Workers
            </div>
            <div class="pages-header">Visitor Visa – Students or Workers</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            A Canada Visitor Visa, also known as a Temporary Resident Visa (TRV), is important for foreign nationals from visa-required countries intending to visit Canada for tourism, business, or family visits. This visa allows stays of up to six months but does not permit holders to work or study during their visit. Applicants must demonstrate financial stability, a clear purpose for their visit, and strong ties to their home country to ensure they will return after their stay.

              <div className="pages-paragraph">
              There are two types of visitor visas: single-entry and multiple-entry. A single-entry visa permits one-time entry, while a multiple-entry visa allows multiple visits within its validity period. The application process involves submitting necessary documents, including proof of financial support and a valid passport, either online or at a Visa Application Center.
              </div>
      
            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={VisitorRef}>
            Visitor Visa for Students or Workers
            </div>
            <div className="pages-paragraph">
            A Visitor Visa is a temporary visa issued by the Immigration, Refugees and Citizenship Canada (IRCC). It allows foreign nationals to enter Canada for a short duration, typically up to six months. This visa is ideal for students who want to attend short-term courses or academic events and for workers traveling for job interviews or business meetings.

            <div className="mt-5 mb-2 font-bold text-[17px]">
              a. For Students:
              </div>
<div>A Visitor Visa enables students to visit Canada for brief academic engagements such as attending a seminar, workshop, or campus tour. Unlike a study permit, a Visitor Visa does not allow the holder to undertake formal studies or engage in full-time education in Canada.</div>

<div className="mt-5 mb-2 font-bold text-[17px]">
              b. For Workers:
              </div>
<div>Workers use the Visitor Visa to travel for professional reasons. This could include attending job interviews, business conferences, or professional workshops. A Visitor Visa for workers is granted for a short period, typically aligned with the duration of the visit for specific professional events.</div>

<div className="my-2">While both students and workers may apply for a Visitor Visa, there are significant differences in the documentation and requirements, depending on the nature of the visit.</div>

Aquarian Immigration Services provides tailored advice based on your unique situation, ensuring you apply for the right type of visa and that all documentation meets the necessary standards.

         
            </div>


            <div class="pages-header-2" ref={TypesRef}>
            Types of Visitor Visas for Students and Workers
            </div>
           <div className='pages-paragraph'>
           There are two main types of Visitor Visas that students and workers can apply for:

           <ul>
            <li><strong>Single-Entry Visitor Visa: </strong>This visa allows the holder to enter Canada only once. Once they leave the country, they must apply for a new visa to return. This type is usually granted when applicants are visiting for a short, one-time purpose such as attending an academic event or job interview.</li>

            <li><strong>Multiple-Entry Visitor Visa: </strong>A Multiple-Entry Visa allows the holder to enter Canada multiple times within the visa's validity period (typically up to 10 years). Each visit can last up to six months. For students, this visa is useful if they wish to make periodic visits to Canada for academic purposes such as attending different seminars or workshops. For workers, it is ideal for those attending multiple business meetings or conferences across a span of time.</li>

            <li><strong>Electronic Travel Authorization (eTA): </strong>Citizens of visa-exempt countries are eligible to apply for an eTA, which allows them to fly into Canada without a visitor visa. The eTA is valid for up to 5 years and applies only to air travel, not land or sea entries.</li>
           </ul>

           Aquarian Immigration Services helps you understand which type of visa best suits your needs. Whether you require a single-entry visa or a multiple-entry visa, we assist in ensuring that your application is filed according to the correct visa type, depending on your travel frequency and purpose.

           </div>


            <div class="pages-header-2" ref={ReasonsRef}>
            Reasons for Applying for a Visitor Visa: Students vs. Workers
            </div>

            <div className="pages-paragraph">
            <div className="mt-5 mb-2 font-bold text-[17px]">
              a. For Students:
              </div>
           
            <ul className="my-2 ml-3">
                <li>
                  <strong>Short-Term Study Programs: </strong>
                  International students who wish to attend a short-term academic course or a seminar can apply for a visitor visa.
                </li>

                <li>
                  <strong>Campus Visits: </strong>
                  Students planning to visit Canadian educational institutions for interviews, campus tours, or consultations with professors may apply for a visitor visa.
                </li>
                
                <li>
                  <strong>Academic Events: </strong>
                  Students may also attend academic conferences or workshops related to their field of study in Canada.
                </li>

               

              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
              b. For Workers:
              </div>
           
            <ul className="my-2 ml-3">
                <li>
                  <strong>Job Interviews: </strong>
                  Workers seeking to travel to Canada for job interviews or job-related evaluations require a visitor visa.
                </li>

                <li>
                  <strong>Business Meetings: </strong>
                  Professionals attending business meetings, corporate negotiations, or product launches often apply for visitor visas.
                </li>
                
                <li>
                  <strong>Conferences and Professional Development: </strong>
                  Business professionals and skilled workers often attend conferences or training workshops that help advance their careers.
                </li>

                <li>
                  <strong>Networking Opportunities: </strong>
                  Individuals may visit Canada for industry networking events, collaborating with Canadian partners, or attending global summits and exhibitions.

                </li>

               

              </ul>

              Aquarian Immigration Services works closely with students and professionals to identify the precise purpose of their visit, whether it’s educational or professional. Our team ensures that your application reflects the correct purpose, minimizing the chances of rejection.

            </div>

            <div class="pages-header-2" ref={EligibilityRef}>
            Eligibility Criteria for Visitor Visa – Students or Workers
            </div>

            <div className="pages-paragraph">
            Applicants must submit the following documents when applying for a business visitor visa:

              <div className="mt-5 mb-2 font-bold text-[17px]">
              a. General Eligibility:
              </div>

              <ul className="my-2 ml-3">
                <li>
                You must prove that you will leave Canada at the end of your authorized stay.</li>

                  <li>
                  You need to show financial stability to cover your stay, including travel, accommodation, and daily expenses.</li>

              <li>
              Applicants must have no criminal record (a police certificate may be required).</li>

                  <li>
                  You must be in good health (a medical examination may be requested in some cases).</li>
              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
              b. For Students:
              </div>

              <ul className="my-2 ml-3">
                <li>
                Proof of enrollment in a short-term study program or confirmation of your academic visit to Canada.</li>

                  <li>
                  Documentation to prove that the visit is temporary and that you will return to your home country after the visit.</li>

            
              </ul>


              <div className="mt-5 mb-2 font-bold text-[17px]">
              c. For Workers:
              </div>

              <ul className="my-2 ml-3">
                <li>
                Invitation letter from the Canadian business, confirming the purpose of the visit (e.g., job interview, business meeting, conference).</li>

                  <li>
                  Professional documents that establish your connection to your current employment, such as a letter from your employer or a business card.</li>

                  <li>
                  Financial evidence to show that you can cover your expenses during the visit.</li>

            
              </ul>

              At Aquarian Immigration Services, we meticulously review your eligibility and prepare a strong case for your visa application, ensuring that all the necessary documents are submitted.



            </div>


            
            <div class="pages-header-2" ref={ApplicationRef}>
            Application Process for Visitor Visa – Students or Workers
            </div>

            <div className="pages-paragraph">
            The process of applying for a business visitor visa involves several steps:
            <div className="mt-5 mb-2 font-bold text-[17px]">
            Step 1: Collect Documents
              </div>

             <div className='my-2'>We guide you in gathering all the necessary documents, from invitation letters to proof of financial stability.</div>

             <div className="mt-5 mb-2 font-bold text-[17px]">
             Step 2: Submit Application
              </div>

             <div className='my-2'>You can apply online via the IRCC portal or at a Visa Application Center (VAC). Our team ensures that your application is properly submitted, whether online or offline.</div>

             <div className="mt-5 mb-2 font-bold text-[17px]">
             Step 3: Biometrics
              </div>

             <div className='my-2'>If applicable, we ensure you complete your biometrics at the earliest, either at a VAC or once requested by IRCC.</div>

             <div className="mt-5 mb-2 font-bold text-[17px]">
             Step 4: Wait for Processing
              </div>

             <div className='my-2'>Processing times for visitor visas generally range from 10 to 30 days. We monitor your application’s status, keeping you informed about any updates.</div>
             

             <div className="mt-5 mb-2 font-bold text-[17px]">
             Step 5: Visa Decision
              </div>

             <div className='my-2'>If your visa is approved, we ensure the visa is stamped in your passport, and guide you through the next steps for travel.</div>


             <div className='my-2'>Our expert team at Aquarian Immigration Services simplifies this entire process, ensuring that each step is handled with attention to detail, thus increasing your chances of success.</div>

             <div>Visitor visas allow students and workers to stay in Canada for up to six months. If the visitor wishes to extend their stay, they must apply for an extension before the current visa expires. If an extension is filed while your visa is valid, you can remain in Canada under implied status until a decision is made.</div>

             <div className="my-2">Aquarian Immigration Services ensures timely submissions for visa extensions and provides advice on maintaining your legal status in Canada, preventing any lapses in your visitor status.</div>
             
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
