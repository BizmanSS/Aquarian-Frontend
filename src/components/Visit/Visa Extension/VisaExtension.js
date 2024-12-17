import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What are the specific grounds for refusal of a Canada Visitor Visa?",
    answer:
      "Common grounds for refusal include:",
    listAnswer: [
      "The officer may believe the applicant intends to remain in Canada beyond their authorized stay.",
      "This includes criminal records or previous immigration violations.",
      "Applicants must demonstrate they can support themselves financially during their stay.",
    ]
  },
  {
    question: "What financial requirements must be met when applying for a visitor visa?",
    answer:
      "Applicants should demonstrate an average daily income of at least 150 Canadian dollars, translating to approximately 4,500 Canadian dollars per month, to cover living expenses while in Canada.",
  },
  {
    question:
      "What steps should I take if my visitor visa extension application is refused?",
    answer:
      " If your extension application is refused, you should:",
    listAnswer: [
      "Review the refusal letter carefully",
      "Consider reapplying with new information",
      "If you believe there was an error in your case, you may appeal the decision to the Federal Court within 15 days if in Canada or 60 days if outside Canada."
    ],
  },
];

export default function CanadaVisitorVisaExtensions() {
  const VisitorRef = useRef(null);
  const ReasonsRef = useRef(null);
  const EligibilityRef = useRef(null);
  const CanadaRef = useRef(null);
  const faqRef= useRef(null);

  const tableContentData = [
    {
      title: "Visitor Visa Extensions",
      scrollTo: VisitorRef,
    },
    {
      title: "Eligibility for Visitor Visa Extension",
      scrollTo: EligibilityRef,
    },
    {
      title: "Reasons for Canada Visitor Visa Refusals",
      scrollTo: ReasonsRef,
      // subItems: [
      //   {
      //     title: "Impact of SDS Closure on International Students",
      //     scrollTo: impactRef,
      //   },
      // ],
    },
    {
      title: "Canada Visitor Visa Appeals",
      scrollTo: CanadaRef,
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
        <SiteMapMenu type="V" h1="Visa Extension for Visitor Visa"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Visit
              {" > "}Canada Visitor Visa
            </div>
            <div class="pages-header">Canada Visitor Visa Extensions, Refusals, and Appeals</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada's visitor visa process has become increasingly complex, with a notable rise in visa refusals and a tightening of immigration policies. In the first half of 2024, Canada experienced a 20% increase in entry refusals, averaging nearly 3,700 refusals per month by the Canada Border Services Agency (CBSA). This surge in refusals is coupled with a significant drop in visa approvals; for instance, more applications were denied than approved during several months in 2024, marking the highest refusal rates since the pandemic.

              <div className="pages-paragraph">
                The reasons for these refusals often stem from concerns about applicants overstaying their visas or failing to meet eligibility criteria under the Immigration and Refugee Protection Act. However, applicants have options for recourse, including appeals to the Federal Court if they believe their application was unjustly denied 6. Understanding the grounds for refusal and the appeal process is essential for prospective visitors seeking to navigate Canada's immigration landscape effectively.

              </div>

              <div className="pages-paragraph">
                At Aquarian Immigration Services, we have over 30 years of experience in helping individuals with their Visitor Visa applications. Our team is equipped to provide personalized assistance, ensuring that your application has the highest chance of approval.
              </div>

            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={VisitorRef}>
              Visitor Visa Extensions
            </div>
            <div className="pages-paragraph">
              A Visitor Visa extension allows you to stay in Canada beyond the period granted by your initial visa. Canada typically grants Visitor Visas for up to six months. However, there are situations where you may need to stay longer, such as attending family events, tourism, or business meetings. If you want to continue your stay, applying for an extension before your current visa expires is necessary.

              <div className="my-2">
                It’s essential to apply for your Visitor Visa extension at least 30 days before your current visa expires. Failing to apply in advance could result in overstaying your visa, which can lead to complications for future visa applications or immigration status in Canada. The sooner you apply, the better, as processing times may vary.
              </div>

            </div>

            <div className="pages-header-2" ref={EligibilityRef}>
              Eligibility for Visitor Visa Extension
            </div>

            <div className="pages-paragraph">
              To be eligible for an extension, you must meet the following criteria:

              <ul className="my-2 ml-3">
                <li>
                  You must remain in Canada legally at the time of applying.
                </li>
                <li>
                  Your passport should remain valid throughout the extension period.
                </li>

                <li>
                  You need to demonstrate that you can support yourself during the extended stay, including accommodation, food, and travel.
                </li>

                <li>
                  You must prove that you will leave Canada at the end of your extended stay.
                </li>
              </ul>

              At Aquarian Immigration Services, we provide personalized assistance to ensure that your Visitor Visa extension application is complete, accurate, and submitted on time. Our team helps gather and organize the necessary documents, including financial support evidence, travel plans, and proof of ties to your home country, ensuring that your application meets the requirements of Immigration, Refugees and Citizenship Canada (IRCC). We also assist with filling out the necessary forms and submitting them correctly to avoid any delays or complications.

            </div>

            <div class="pages-header-2" ref={ReasonsRef}>
              Reasons for Canada Visitor Visa Refusals
            </div>
            <div className="pages-paragraph">
              Visitor visas are often denied due to various reasons. Understanding these reasons can help prevent your application from being refused.

              <div className="my-2">Some common grounds for Visitor Visa refusals include:</div>


              <ul className="my-2 ml-3">
                <li>
                  Missing key documents such as invitation letters, proof of financial support, or travel plans.
                </li>
                <li>
                  Failure to demonstrate that you have enough funds to cover your stay in Canada.
                </li>

                <li>
                  If you cannot show strong ties (e.g., employment, family, property) to your home country, visa officers may doubt your intention to leave Canada.
                </li>

                <li>
                  Providing false or misleading information in your application can lead to an automatic refusal.
                </li>

                <li>
                  If you have a history of overstaying your visa or violating Canadian immigration laws, your application is likely to be denied.

                </li>

                <li>
                  Health issues or criminal background checks that raise concerns about public safety can lead to a refusal.
                </li>

              </ul>


            </div>

            <div class="pages-header-2">
              What to Do if Your Visitor Visa is Refused?
            </div>

            <div className="pages-paragraph">
              If your visa extension application is denied, don’t panic. There are still options available:


              <ul className="my-2 ml-3">
                <li>
                  <strong>Reapply: </strong>
                  You can reapply with additional or corrected information. It’s essential to address the reasons for refusal in your new application, providing all missing documents and clarifications.
                </li>
                <li>
                  <strong>Apply for Restoration of Status: </strong>
                  If you applied for an extension but were denied, you may still be eligible for a restoration of status if your visa has expired and you apply within 90 days.
                </li>

                <li>
                  <strong>Appeal: </strong>
                  If you believe that your visa refusal was unfair or based on incorrect information, you can challenge the decision by filing an appeal.
                </li>

              </ul>

              At Aquarian Immigration Services, we provide a thorough analysis of your case if your Visitor Visa extension is denied. Our team will carefully review the refusal notice and help identify the issues that led to the rejection. We’ll guide you in gathering the necessary supporting documents, correcting any errors, and submitting a stronger application to improve your chances of success. Additionally, we will explain your rights and options if you wish to reapply or restore your status.


            </div>

            <div class="pages-header-2" ref={CanadaRef}>
              Canada Visitor Visa Appeals
            </div>

            <div className="pages-paragraph">
              If your application for a Visitor Visa extension is refused, you have the option to appeal the decision. Here’s what you need to know about the appeal process.

              <div className="my-2">A Visitor Visa appeal is a formal request to the Federal Court of Canada to review the decision made by IRCC. If you believe the refusal was made in error or that your application was misunderstood, an appeal may be your best option.</div>

              You can file an appeal if:

              <ul className="my-2 ml-3">
                <li>
                  You believe there was a misapplication of the law or procedural error in your case.
                </li>

                <li>
                  You have new evidence or information that was not available at the time of your initial application.
                </li>

              </ul>

              <div className='font-bold text-[17px] mt-5 mb-3'>The Appeal Process</div>

              <ul className="my-2 ml-3">
                <li>
                  <strong>Timeline for Appeals: </strong>
                  You generally have 60 days from the date of refusal to file an appeal with the Federal Court.
                </li>

                <li>
                  <strong>Filing the Appeal:  </strong>
                  To initiate an appeal, you will need to submit a Notice of Application along with supporting documents, explaining why the refusal was unjustified.
                </li>

                <li>
                  <strong>Review by the Federal Court:  </strong>
                  The Federal Court will review the case and determine if the refusal should be upheld or overturned. In some cases, the court may refer the case back to IRCC for a reevaluation.
                </li>

              </ul>

              At Aquarian Immigration Services, we provide comprehensive support during the appeal process. Our team will review the refusal decision, gather all necessary evidence, and prepare a robust argument for your case. We’ll help you understand the legal framework and ensure that your appeal is properly filed within the required time frame. Our experienced consultants work closely with immigration lawyers to ensure that your case is presented effectively in court.

              <div className='my-2'>Navigating the Visitor Visa extension, refusal, and appeal processes can be complex and stressful. At Aquarian Immigration Services, we provide expert advice and personalized support to help you succeed at every stage of your visa journey.</div>

              With over 30 years of experience, our consultants are dedicated to ensuring that your Visitor Visa application is properly completed and submitted, maximizing your chances of approval. Whether you're applying for an extension, facing a refusal, or considering an appeal, we’re here to guide you through the process.

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
