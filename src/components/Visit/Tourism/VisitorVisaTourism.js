import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can I submit one application for my entire family?",
    answer:
      "No, each family member must complete their own visitor visa application. However, you can submit all applications together in one envelope with a single payment receipt covering the total fees.",
  },
  {
    question: "Do I need a medical exam to apply for a visitor visa?",
    answer:
      "Generally, visitors staying for six months or less do not require a medical exam unless they will be working in specific jobs that protect public health. If you plan to stay longer than six months or have lived in certain designated countries, you may need an exam.",
  },

];

export default function CanadaVisitorVisa() {
  const TypesRef = useRef(null);
  const EligibilityRef = useRef(null);
  const ApplicationRef = useRef(null);
  const ExtendingRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Types of Visitor Visas for Tourism and Family Visits",
      scrollTo: TypesRef,
    },
    {
      title: "Eligibility Requirements for Visitor Visas (Tourism/Family Visits)",
      scrollTo: EligibilityRef,
    },
    {
      title: "Application Process for a Visitor Visa (Tourism/Family Visits)",
      scrollTo: ApplicationRef,
      // subItems: [
      //   {
      //     title: "Impact of SDS Closure on International Students",
      //     scrollTo: impactRef,
      //   },
      // ],
    },
    {
      title: "Extending a Visitor Visa for Tourism or Family Visits",
      scrollTo: ExtendingRef,
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
        <SiteMapMenu type="V" h1="Visitor Visa- Tourism or Meet Relatives"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Visit
              {" > "}Visitor Visa- Tourism or Meet Relatives
            </div>
            <div class="pages-header">Visitor Visa- Tourism or Meet Relatives</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              A Visitor Visa, also known as a Temporary Resident Visa, is essential for individuals wishing to travel to Canada for tourism or family visits. Applicants must meet several requirements to obtain this visa. Firstly, a valid passport is crucial, which should remain valid for the duration of the stay in Canada. Applicants need to clearly state the purpose of their visit, whether for leisure, family reunification, or attending events.

              <div className="pages-paragraph">
                The application process includes submitting forms, photographs, and possibly biometric data. The visa may be issued as a single-entry or multiple-entry visa, allowing varying lengths of stay based on individual circumstances.
              </div>
              <div className="pages-paragraph">
                As experts in Canadian immigration law with over 30 years of combined experience, Aquarian Immigration Services specializes in guiding applicants through the visa application process, ensuring that your visit to Canada is seamless and stress-free.
              </div>
            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={TypesRef}>
              Types of Visitor Visas for Tourism and Family Visits
            </div>
            <div className="pages-paragraph">
              The primary types of visitor visas for those looking to travel to Canada for tourism or to meet relatives are as given below:

              <div className="mt-3 mb-2 font-bold text-[17px]">
                1. Single-Entry Visitor Visa
              </div>

              <ul className="my-2 ml-3">
                <li>
                  A single-entry visitor visa permits entry into Canada once.
                </li>
                <li>
                  After leaving, the visa holder must reapply for a new visa if they wish to return.
                </li>
                <li>
                  This visa is generally issued for short stays of up to six months.
                </li>
                <li>
                  It’s perfect for those who plan to visit Canada only once for tourism or family visits, with no plans of re-entering after departure.
                </li>
              </ul>


              <div className="mt-3 mb-2 font-bold text-[17px]">
                2. Multiple-Entry Visitor Visa
              </div>

              <ul className="my-2 ml-3">
                <li>
                  The multiple-entry visitor visa allows the holder to enter and leave Canada multiple times, as long as the visa remains valid, and the total length of stay does not exceed six months at a time.
                </li>
                <li>
                  Typically issued for up to 10 years, or until the passport expires, this visa offers flexibility for those who may want to visit Canada multiple times during the validity period.
                </li>

              </ul>




              <div className="mt-3 mb-2 font-bold text-[17px]">
                3. Visa-Exempt Countries & eTA Requirements
              </div>

              <ul className="my-2 ml-3">
                <li>
                  Citizens of visa-exempt countries can enter Canada without a visitor visa for stays of up to six months.
                </li>
                <li>
                  However, they must apply for an electronic travel authorization (eTA) if arriving by air.
                </li>
                <li>
                  Travelers from visa-exempt countries who arrive by land or sea only need a valid passport to enter.
                </li>
                <li>
                  U.S. citizens and U.S. permanent residents (Green Card holders) can enter Canada without a visa but must present a valid passport and an eTA if traveling by air.
                </li>

              </ul>

            </div>


            <div class="pages-header-2" ref={EligibilityRef}>
              Eligibility Requirements for Visitor Visas (Tourism/Family Visits)
            </div>
            <div className="pages-paragraph">
              To qualify for a Canadian Visitor Visa, applicants must meet specific eligibility criteria:
              <div className="mt-3 mb-2 font-bold text-[17px]">
                1. Purpose of Visit
              </div>
              <ul className="my-2 ml-3">
                <li>
                  Your visit must be temporary, whether for tourism, leisure, or visiting family members.
                </li>

                <li>
                  Applicants need to clearly demonstrate their intent to leave Canada at the end of the visit.
                </li>

              </ul>

              <div className="mt-3 mb-2 font-bold text-[17px]">
                2. Proof of Financial Support
              </div>
              <ul className="my-2 ml-3">
                <li>
                  Applicants must show they have sufficient funds to cover their stay in Canada, including accommodation, travel, and living expenses.
                </li>

                <li>
                  This can be demonstrated through recent bank statements, proof of employment, or a letter of financial support from a relative in Canada.
                </li>

              </ul>

              <div className="mt-3 mb-2 font-bold text-[17px]">
                3. Ties to Home Country
              </div>
              <ul className="my-2 ml-3">
                <li>
                  One of the key requirements is proving strong ties to your home country, such as employment, property ownership, or family commitments.
                </li>

                <li>
                  This reassures Canadian immigration authorities that you intend to return home after your visit.
                </li>

              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
                4. Supporting Documents
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Passport: </strong>
                  Your passport must be valid for at least six months beyond your intended stay in Canada.
                </li>

                <li>
                  <strong>Invitation Letter (for Family Visits): </strong>
                  If you're visiting relatives, you’ll need an invitation letter from your Canadian family member. This letter must include the details of the visit and the inviter's legal status in Canada.
                </li>

                <li>
                  <strong>Financial Documents: </strong>
                  Bank statements, pay slips, and other proof of financial stability.
                </li>

                <li>
                  <strong>Travel Itinerary: </strong>
                  Flight bookings, accommodation reservations, or travel plans within Canada.
                </li>

              </ul>


            </div>

            <div class="pages-header-2" ref={ApplicationRef}>
              Application Process for a Visitor Visa (Tourism/Family Visits)
            </div>

            <div className="pages-paragraph">

              <div className="mt-5 mb-2 font-bold text-[17px]">
                Step 1: Gather Required Documents
              </div>

              <ul className="my-2 ml-3">
                <li>
                  Ensure all necessary documentation is in place.
                </li>

                <li>
                  This includes a valid passport, proof of funds, invitation letter (for family visits), and any additional paperwork required to demonstrate the purpose of your visit.
                </li>

              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
                {" "}
                Step 2: Choose Your Application Method
              </div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Online Application: </strong>
                  Most applicants opt for the online application process as it is faster, allows tracking of application status, and is more efficient.
                </li>
                <li>
                  <strong>Paper Application: </strong>
                  In some cases, paper applications may be required. This involves mailing the completed forms and documents to the nearest Canadian Visa Application Centre (VAC).
                </li>

              </ul>


              <div className="mt-5 mb-2 font-bold text-[17px]">
                Step 3: Biometrics Collection
              </div>

              <ul className="my-2 ml-3">
                <li>Depending on the applicant’s nationality, biometrics (fingerprints and photographs) may be required. Biometrics can be collected after the online application submission or at a VAC when submitting a paper application.</li>


              </ul>


              <div className="mt-5 mb-2 font-bold text-[17px]">
                Step 4: Submit the Application
              </div>
              <ul className="my-2 ml-3">
                <li>Once all documents are in order, submit your visa application either online or via paper. You will also pay the required application fee at this stage.</li>


              </ul>

              <div className="mt-5 mb-2 font-bold text-[17px]">
                Step 5: Application Processing and Decision
              </div>

              <ul className="my-2 ml-3">
                <li>Processing times can vary, but generally, you can expect a decision within two to three weeks. </li>

                <li>During this time, your application will be reviewed, and you may be contacted for additional information.</li>
                <li>If the visa is approved, you will receive your visitor visa, allowing you to travel to Canada. If the visa is denied, you will receive a refusal letter with the reasons for rejection.</li>
              </ul>

            </div>

            <div class="pages-header-2" ref={ExtendingRef}>
              Extending a Visitor Visa for Tourism or Family Visits
            </div>

            <div className="pages-paragraph">
              Visitor visas typically allow for stays of up to six months. If you wish to extend your stay, you must apply for an extension before your current visa expires.

              <ul className="my-2 ml-3">
                <li>
                  You should submit an extension application at least 30 days before your current visa expires.
                </li>

                <li>
                  If you apply for an extension before your visa expires, you are granted implied status. This means you can legally remain in Canada while your application is being processed.
                </li>
                <li>
                  You may need to submit updated financial documents or explain why you wish to extend your stay.
                </li>

              </ul>

              <div className='my-2'>At Aquarian Immigration Services, we understand the complexities of obtaining a Canada Visitor Visa. Whether you’re planning a short vacation or a long-awaited family reunion, we provide expert guidance to ensure your application process is smooth, efficient, and successful.</div>

              <div>With a success rate of over 95% and 30+ years of combined experience, we are dedicated to helping you achieve your immigration goals. Our team of Regulated Canadian Immigration Consultants (RCICs) is committed to making your visit to Canada as hassle-free and successful as possible.</div>

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
