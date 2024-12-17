import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I apply for a Canada Visitor Visa online?",
    answer:
      "Yes, applicants can apply online through the Government of Canada's official immigration website or submit a paper application at a Visa Application Center (VAC). The online application process allows for easier tracking and submission of required documents 15.",
  },
  {
    question: "What should I do if my visa application is denied?",
    answer:
      "If your application is denied, you will receive a letter explaining the reasons for the refusal. You may have the option to appeal the decision or reapply by addressing the issues raised in the denial letter. It's advisable to consult with an immigration consultant or lawyer to strengthen your next application.",
  },
  {
    question:
      "What is the cost associated with applying for a Canada Visitor Visa?",
    answer:
      "The application fee for a Canada Visitor Visa is CAD $100. If biometric data is required, there is an additional fee of CAD $85. Therefore, the total cost can be approximately CAD $185, plus any passport processing fees.",
    // listAnswer: [
    //   "Quebec: Students must apply for a Certificat d'acceptation du Québec (CAQ) before applying for a study permit.",
    //   "British Columbia: Some institutions may require additional documentation related to health insurance or housing arrangements.",
    // ],
  },
];

export default function CanadaVisitorVisa() {
  const aboutRef = useRef(null);
  const needRef = useRef(null);
  const eligibilityRef = useRef(null);
  const processRef = useRef(null);
  const happensRef = useRef(null);
  const exemptRef = useRef(null);
  const extendingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What is a Canada Visitor Visa?",
      scrollTo: aboutRef,
    },
    {
      title: "Who Needs a Canada Visitor Visa?",
      scrollTo: needRef,
    },
    {
      title: "Eligibility Requirements for Canada Visitor Visa",
      scrollTo: eligibilityRef,
      // subItems: [
      //   {
      //     title: "Impact of SDS Closure on International Students",
      //     scrollTo: impactRef,
      //   },
      // ],
    },
    {
      title: "Canada Visitor Visa Application Process",
      scrollTo: processRef,
    },
    {
      title: "What Happens If Your Canada Visitor Visa Is Denied?",
      scrollTo: happensRef,
    },
    {
      title: "Visa-Exempt Countries and Canada Visitor Visa Requirements",
      scrollTo: exemptRef,
    },
    {
      title: "Extending a Canada Visitor Visa",
      scrollTo: extendingRef,
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
        <SiteMapMenu type="V" h1="Visitor Visa"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Visit
              {" > "}Canada Visitor Visa
            </div>
            <div class="pages-header">Canada Visitor Visa</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              A Canada Visitor Visa, also known as a Temporary Resident Visa
              (TRV), allows foreign nationals to visit Canada for tourism,
              family visits, or business purposes. To apply for this visa,
              applicants must meet specific eligibility criteria, including
              having a valid passport, being in good health, and having no
              criminal record. Furthermore, applicants must have sufficient
              financial resources to support their stay and provide proof of
              ties to their home country, ensuring their return after the visit.
              <div className="pages-paragraph">
                The application process involves completing the appropriate visa
                application form, paying the visa fee (which starts at
                approximately CAD 100), and submitting required documents such
                as photographs and a cover letter detailing the purpose of
                travel. Processing times can vary significantly, ranging from a
                few weeks to several months, depending on various factors
                including the applicant's nationality and the volume of
                applications received by Canadian authorities.
              </div>
              <div className="pages-paragraph">
                The visitor visa can be issued for single or multiple entries,
                allowing flexibility in travel plans. Overall, understanding the
                requirements and preparing the necessary documentation is
                crucial for a successful application for a Canada Visitor Visa.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What is a Canada Visitor Visa?
            </div>
            <div className="pages-paragraph">
              A Canada Visitor Visa allows foreign nationals to enter Canada
              temporarily for purposes such as tourism, business, or visiting
              family. The Temporary Resident Visa (TRV) is generally issued for
              short stays, ranging from a few days to six months, and may allow
              you to participate in various activities such as sightseeing,
              attending conferences, or spending time with loved ones.
              <div className="my-2">
                While the Visitor Visa is the most common type, it is crucial to
                understand that Canada offers different categories based on the
                purpose of your visit:
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Tourist Visa: </strong>
                  For leisure travel and tourism.
                </li>
                <li>
                  <strong>Business Visitor Visa: </strong>
                  For attending business meetings, conferences, or exploring
                  business opportunities in Canada.
                </li>
                <li>
                  <strong>Family Visit Visa: </strong>
                  For visiting family members or friends residing in Canada.
                </li>
              </ul>
              <div>
                Based on the entries, there are 2 types of Canadian visitor
                visa:
              </div>
              <div className="my-2">
                A single-entry visa allows foreign nationals to enter Canada
                only once, while a multiple-entry visa lets holders enter and
                exit Canada as often as they wish, as long as the visa is valid.
                Multiple-entry visitor visas permit stays of up to six months
                per visit.
              </div>
              <ul className="my-2 ml-3">
                <li>
                  Immigration, Refugees and Citizenship Canada (IRCC) has
                  updated the guidelines for processing multiple-entry visitor
                  visas.
                </li>
                <li>
                  The previous policy of granting multiple-entry visas with a
                  maximum validity of 10 years is no longer in place, and each
                  application will now be assessed individually.
                </li>
              </ul>
              If you hold another status document, such as a study or work
              permit, and are not visa-exempt, you will automatically receive a
              visitor visa to enter Canada for the permit issuance. Typically,
              this is a multiple-entry visa. If you leave Canada temporarily
              during your studies or work, you won’t need to reapply for a new
              visitor visa as long as both your permit and visa remain valid.
            </div>

            <div className="pages-header-2" ref={needRef}>
              Who Needs a Canada Visitor Visa?
            </div>

            <div className="pages-paragraph">
              The Post-Graduation Work Permit (PGWP) allows international
              students to stay and work in Canada after they have completed a
              program of study at a Designated Learning Institution (DLI).
              <div className="my-2">
                Not everyone needs a Visitor Visa to enter Canada. Citizens from
                visa-exempt countries (including the U.S., EU countries, and
                several others) do not require a visitor visa for short visits,
                though they must apply for an eTA (Electronic Travel
                Authorization) if arriving by air. However, citizens of
                visa-required countries (such as India, China, and many African
                nations) must apply for a Canada Visitor Visa before traveling.
                This visa is a must for those intending to visit Canada for
                tourism, business, or family visits.
              </div>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Requirements for Canada Visitor Visa
            </div>
            <div className="pages-paragraph">
              To be eligible for a Canada Visitor Visa, you must meet certain
              criteria set by the Canadian immigration authorities. These
              include, but are not limited to:
              <div className="mt-3 mb-2 font-bold text-[17px]">
                Valid Passport
              </div>
              <div>
                You must possess a valid passport or travel document that
                remains valid for the entire duration of your stay in Canada.
              </div>
              <div className="my-2 font-bold">Financial Support</div>
              <div>
                You must demonstrate that you have enough funds to cover the
                cost of your stay in Canada. This includes not only your travel
                and accommodation expenses but also daily living costs. This can
                be proven through bank statements, employment records, or
                financial support letters.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                Ties to Your Home Country
              </div>
              <div>
                You must prove that you have strong ties to your home country
                and that you will return after your visit to Canada. Ties could
                be family, a job, property ownership, or other commitments that
                would compel you to leave Canada after your authorized stay.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                No Criminal Record
              </div>
              <div>
                You must not have a criminal record. In some cases, you may be
                asked to provide police certificates or other legal documents to
                confirm this.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">Good Health</div>
              <div>
                In some cases, you may be required to undergo a medical
                examination to ensure that you do not pose a health risk to the
                Canadian public.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                Purpose of Visit
              </div>
              <div>
                You must provide clear evidence of the reason for your
                visit—whether it's for tourism, business, or family reasons.
              </div>
            </div>

            <div class="pages-header-2" ref={processRef}>
              Canada Visitor Visa Application Process
            </div>

            <div className="pages-paragraph">
              The process of applying for a Canada Visitor Visa requires careful
              attention to detail. Below is a detailed breakdown of the steps
              involved in the application process:
              <div className="mt-5 mb-2 font-bold text-[17px]">
                {" "}
                Determine Eligibility
              </div>
              <div>
                Before applying, assess whether you meet all the eligibility
                criteria. If you are unsure about any aspect, it is advisable to
                consult with an immigration expert.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                {" "}
                Gather Required Documents
              </div>
              <div>
                Your application must include several essential documents. These
                documents may vary depending on the purpose of your visit but
                generally include the following:
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Valid Passport: </strong>
                  Your passport must be valid for the entire duration of your
                  trip.
                </li>
                <li>
                  <strong>Application Forms: </strong>
                  The most common forms required include IMM 5257 (Application
                  for Visitor Visa) and IMM 5645 (Family Information Form).
                </li>

                <li>
                  <strong>Proof of Financial Support: </strong>
                  Bank statements, proof of employment, or sponsorship letters
                  to show you can financially support your stay.
                </li>

                <li>
                  <strong>Letter of Invitation: </strong>
                  If you're visiting family or friends, a letter of invitation
                  from your Canadian host may be required.
                </li>

                <li>
                  <strong>Travel Itinerary: </strong>
                  Flight bookings, hotel reservations, and a detailed itinerary
                  of your trip.
                </li>

                <li>
                  <strong>Proof of Ties to Home Country: </strong>
                  This includes job confirmation letters, property documents, or
                  other evidence that proves you will return home after your
                  visit.
                </li>

                <li>
                  <strong>Police Certificates and Medical Exam: </strong>
                  In certain cases, you may need to submit a police certificate
                  and undergo a medical examination.
                </li>
              </ul>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                {" "}
                Complete the Application
              </div>
              <div>
                You can apply for your Canada Visitor Visa online or via paper
                application. The online process is faster and more efficient,
                but paper applications are still available. For an online
                application:
              </div>
              <ul className="my-2 ml-3">
                <li>Complete the necessary forms.</li>
                <li>Upload all required documents.</li>

                <li>
                  Pay the visa application fee (CAD 100) and biometric fees (CAD
                  85 if applicable).
                </li>

                <li>Submit the application electronically.</li>
              </ul>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                Biometrics Appointment
              </div>
              <div>
                As part of the visa application process, you will likely need to
                submit your biometrics (fingerprints and photograph). This is
                done at a Visa Application Centre (VAC) near you.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                Wait for Processing
              </div>
              <div>
                The processing time for a Canada Visitor Visa varies depending
                on the applicant’s country of residence and other factors.
                Generally, the processing time can range from 10 to 30 business
                days, although delays may occur during peak periods.
              </div>
              <div className="mt-5 mb-2 font-bold text-[17px]">
                Visa Decision
              </div>
              <div>
                Once your application is processed, you will receive a decision:
              </div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Approval: </strong>
                  If approved, you will receive a visa stamped in your passport,
                  allowing you to enter Canada.
                </li>
                <li>
                  <strong>Refusal: </strong>
                  If your application is refused, the visa office will provide a
                  detailed explanation for the decision. This may include
                  missing documents, insufficient proof of funds, or weak ties
                  to your home country.
                </li>
              </ul>


            </div>

            <div class="pages-header-2" ref={happensRef}>
             What Happens If Your Canada Visitor Visa Is Denied?
            </div>

            <div className="pages-paragraph">
            If your visa application is denied, don’t be discouraged. There are several options to consider:
              <ul className="my-2 ml-3">
                <li>
                  <strong>Reapply: </strong>
                  You may reapply with additional or updated documents to address the reason for denial.
                </li>

                <li>
                <strong>Appeal: </strong>
                If you believe the decision was incorrect, you may appeal the refusal to the Federal Court of Canada.
                </li>
                <li>
                <strong>Restoration of Status: </strong>
                If your visa was denied due to overstaying, we can assist you with the Restoration of Status process, allowing you to regain legal standing in Canada.
                </li>
          
              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
              Costs of a Canada Visitor Visa
              </div>

              <div className='my-3'>The Canada Visitor Visa costs depend on the type of application:</div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Visitor Visa Fee: </strong>
                  CAD 100 per applicant.
                </li>

                <li>
                <strong>Biometric Fee: </strong>
                CAD 85 for individuals.
                </li>
                <li>
                <strong>Additional Costs: </strong>
                You may incur costs for medical exams, police certificates, or translation of documents.
                </li>
          
              </ul>


            </div>

            <div class="pages-header-2" ref={exemptRef}>
            Visa-Exempt Countries and Canada Visitor Visa Requirements
            </div>

            <div className="pages-paragraph">
            In addition to Canadian citizens and permanent residents, individuals from visa-exempt countries do not need a visitor visa to enter Canada. Canada has agreements with several countries that allow their citizens to visit Canada for up to six months without needing a visa. However, these visa-exempt travelers must meet specific entry requirements based on their mode of travel.
              <ul className="my-2 ml-3">
                <li>
                <strong>Air Travel: </strong>
                Citizens from visa-exempt countries require a valid electronic travel authorization (eTA) to fly to Canada.
                </li>

                <li>
                <strong>Land or Sea Travel: </strong>
                For those entering by land or sea, a valid passport from a visa-exempt country is sufficient.
                </li>
             
              </ul>

              The United States is a special case. U.S. citizens can enter Canada without a visa or eTA, provided their stay does not exceed six months. Similarly, U.S. permanent residents (Green Card holders) are visa-exempt, though they must apply for an eTA to fly to or transit through Canadian airports. Green Card holders must also present both their Green Card and valid passport when entering Canada.

            </div>

            <div class="pages-header-2" ref={extendingRef}>
             Extending a Canada Visitor Visa
            </div>

            <div className="pages-paragraph">

            Visitor visas (whether single-entry or multiple-entry) typically allow foreign nationals to stay in Canada for up to six months. After this period, their legal status expires, and they must leave the country. If you wish to stay longer, you must apply for an extension before your visa expires. It is advisable to apply for an extension at least 30 days before the expiration of your status.

            <div className="my-2">
            During the processing of your extension application, if your current visa expires, you will still be permitted to remain in Canada under implied status until a decision is made. Additionally, if you meet the criteria, you may apply for permanent residency through one of Canada's immigration programs.
              </div>

              <div className="my-2">
              At Aquarian Immigration Services, we understand that applying for a Canada Visitor Visa can be a challenging process. Our expertise and in-depth knowledge of Canadian immigration law allow us to offer unparalleled assistance at every step:
              </div>

              <ul className="my-2 ml-3">
                <li>
                We provide personalized consultations to understand your travel goals, review your eligibility, and advise you on the best visa option.
                </li>

                <li>
                We ensure that all required documents are complete, accurate, and meet Canadian immigration standards. Our team reviews every detail to prevent errors that could delay or jeopardize your application.
                </li>
                <li>
                Our team’s experience with Canadian immigration systems allows us to craft applications that maximize your chances of approval, based on a thorough understanding of visa officer preferences and requirements.
                </li>
                <li>
                We understand the urgency and will ensure that your visa application is submitted on time, giving you peace of mind and reducing the risk of delays.
                </li>
                <li>
                After your visa is approved, we continue to support you with advice on entry requirements, customs regulations, and tips on making the most of your trip.
                </li>
                <li>
                In case of a visa denial, our team will help you assess the reasons for the refusal and guide you on the best course of action, whether it’s reapplying, appealing, or taking corrective measures.
                </li>
              </ul>
              A Canada Visitor Visa opens doors to endless opportunities for exploring this beautiful and dynamic country. Whether you're visiting for tourism, business, or family reunification, understanding the visa application process is key to ensuring your success. With Aquarian Immigration Services, you don’t have to navigate this process alone.

              <div className='my-2'>Our team of experienced Regulated Canadian Immigration Consultants (RCICs) offers personalized guidance, expert document preparation, and dedicated support throughout the entire application process. With our help, you can significantly increase your chances of obtaining a Canada Visitor Visa and start your Canadian adventure with confidence.</div>
              
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
