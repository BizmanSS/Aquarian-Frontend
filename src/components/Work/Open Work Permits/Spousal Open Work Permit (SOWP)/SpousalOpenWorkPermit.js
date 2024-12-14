import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "How long does it take to process a Spousal Open Work Permit?",
    answer:
      "Processing times vary based on several factors, including the type of application submitted and current IRCC workloads. It is advisable to check IRCC’s official website for updated processing times.",

  },

  {
    question:
      "Can my spouse extend their open work permit?",
    answer:
      "Yes, if your spouse continues to meet eligibility requirements and your status in Canada remains valid, they may apply to extend their open work permit before it expires.",
  },
  {
    question:
      "What happens if my spouse’s study or work permit expires?",
    answer:
      "If your spouse’s study or work permit expires, your SOWP will also become invalid. You must reapply based on your spouse’s new status.",
  },
  {
    question:
      "Can I apply for an open work permit if my spouse or partner has applied to sponsor me?",
    answer:
      "Yes, you can apply for a spousal sponsorship open work permit if you have applied for permanent residency through the in-Canada stream of the spousal sponsorship program.",
    listAnswer: [
      "If you haven't submitted your sponsorship application yet, you can submit the sponsorship, permanent residence, and open work permit applications together in one envelope to the Case Processing Centre in Mississauga (CPC-M), Ontario.",
      "If your permanent residence application is submitted but not yet approved in principle, you can apply for the open work permit in hard copy to the Case Processing Centre in Vegreville (CPC-V), Alberta.",
      "If your permanent residence application has been approved in principle (AIP), you can submit your open work permit application online or in hard copy to CPC-V, Alberta.",
    ],
  },


];

const spousalWorkPermitData = [
  {
    category: "Spouses or Common-Law Partners of Atlantic Immigration Program (AIP) Work Permit Holders",
    skillLevelRequirement: "TEER 0, 1, 2, or 3",
    workPermitLength: "6 months",
  },
  {
    category: "Spouses or Common-Law Partners of Quebec Selection Certificate (CSQ) Holders",
    skillLevelRequirement: "Any occupational skill level",
    workPermitLength: "6 months",
  },
  {
    category: "Spouses or Common-Law Partners of Provincial Nominees",
    skillLevelRequirement: "Any occupational skill level",
    workPermitLength: "6 months",
  },
  {
    category: "Spouses or Common-Law Partners of Bridging Open Work Permit (BOWP) Holders",
    skillLevelRequirement: "Varies depending on the program",
    workPermitLength: "6 months",
  },
  {
    category: "Spouses or Common-Law Partners of Open Work Permit Holders (excluding BOWP)",
    skillLevelRequirement: "TEER 0, 1, 2, or 3",
    workPermitLength: "N/A",
  },
  {
    category: "Spouses or Common-Law Partners of Study Permit Holders",
    skillLevelRequirement: "N/A",
    workPermitLength: "N/A",
  },
  {
    category: "In Canada Spousal/Common-Law Sponsorship Applicants",
    skillLevelRequirement: "N/A",
    workPermitLength: "N/A",
  },
];



export default function SpousalOpenWorkPermit() {
  const reasonsRef = useRef(null);

  const eligibilityRef = useRef(null);
  const applicationRef = useRef(null);

  const faqRef = useRef(null);

  const tableContentData = [

    {
      title: "Eligibility Criteria",
      scrollTo: eligibilityRef,
    },
    {
      title: "Application Process for SOWP",
      scrollTo: applicationRef,
    },
    {
      title: "Reasons for Rejection of SOWP",
      scrollTo: reasonsRef,
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
        <SiteMapMenu
          type="W"
          h1="Open Work Permits"
          h2="Spousal Open Work Permit (SOWP)"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Canada Open Work Permit
              {" > "}Spousal Open Work Permit
            </div>
            <div class="pages-header">Spousal Open Work Permit </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Spousal Open Work Permit is a significant immigration provision in Canada. A spousal open work permit allows the spouse or common-law partner of a temporary resident in Canada (such as a student or worker) to work for any employer in Canada without a specific job offer. This type of permit is particularly beneficial for maintaining financial stability while the primary applicant's immigration status is being processed.

            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility for Spousal Open Work Permit
            </div>
            <div className="pages-paragraph">
              To qualify for a Spousal Open Work Permit, applicants must meet specific conditions based on their spouse's status in Canada:

              <div className='mt-4 font-bold text-[18px]'>For Spouses of Study Permit Holders:</div>

              <ul className="my-3">
                <li>
                  The applicant must be the spouse or common-law partner of a full-time student who holds a valid study permit.
                </li>
                <li>
                  The SOWP will be valid for the same duration as the study permit.

                </li>

              </ul>

              <div className='mt-4 font-bold text-[18px]'>For Spouses of Work Permit Holders:</div>

              <ul className="my-3">
                <li>
                  The applicant can be the spouse or common-law partner of an individual with a valid Post-Graduation Work Permit (PGWP) or other work permits.
                </li>
                <li>
                  The duration of the SOWP will align with the work permit held by the spouse.

                </li>

              </ul>

              <div className='mt-4 font-bold text-[18px]'>For Sponsored Spouses:</div>

              <ul className="my-3">
                <li>
                  If a foreign national has applied for permanent residency under spousal sponsorship, they may apply for an open work permit while their application is being processed.
                </li>

              </ul>

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Occupational Skill Level Requirement</th>
                        <th>Minimum Work Permit Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      {spousalWorkPermitData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.category}</td>
                          <td>{row.skillLevelRequirement}</td>
                          <td>{row.workPermitLength}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>



            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={applicationRef}>
            Application Process for SOWP
            </div>
            <div className="pages-paragraph">

            The application process for a Spousal Open Work Permit varies depending on the applicant's location and their spouse's status:

              <ul className="my-2 ml-3">
                <li>
                  <strong>Inside Canada: </strong>If the spouse is already in Canada as a visitor, they can apply for an open work permit online or through paper applications submitted to IRCC.
                </li>

                <li>
                  <strong>Outside Canada: </strong>Applicants may apply at a visa office in their home country or enter Canada as visitors and then apply for the work permit.
                </li>

              </ul>

              <div>Required Documents:</div>

              <ul className="my-2 ml-3">
                <li>
                A marriage certificate or statutory declaration of common-law union.
                </li>

                <li>
                Proof of the spouse’s status in Canada (e.g., study or work permit).
                </li>
                <li>
                Employment details if applicable (for spouses of PGWP holders).
                </li>
                <li>
                Acknowledgement of Receipt (AOR) letter
                </li>
                <li>
                Provincial nomination certificate
                </li>

                <li>
                Certificat d’acceptation du Québec (CAQ) (Quebec Acceptance Certificate) (if applicable)
                </li>
                <li>
                Proof of relationship to the principal applicant
                </li>
                <li>
                A valid copy of your passport
                </li>
                <li>
                Medical exam results (if requested)
                </li>

              </ul>

              The SOWP is typically issued for the same duration as the primary applicant's permit. The application fee is CAD 255, which includes processing and open work permit holder fees.

            </div>

            <div class="pages-header-2" ref={reasonsRef}>
            Reasons for Rejection of SOWP
            </div>
            <div class="pages-paragraph">
            Several factors may lead to the rejection of a Spousal Open Work Permit application:
              <ul className="my-2 ml-3">
                <li>
                Missing required documents can result in automatic denial.
                </li>

                <li>
                Failure to meet eligibility criteria based on the sponsor's status.
                </li>

                <li>
                If there are doubts about the genuineness of the relationship, such as divorce or separation during processing.
                </li>
                <li>
                Past issues with immigration status can negatively impact eligibility.

                </li>
                <li>
                Certain occupations require medical exams; failure to comply can lead to rejection.
                </li>



              </ul>

              Individuals who have submitted an application for permanent residency under spousal sponsorship can apply for an open work permit while their application is being processed. This provision aims to facilitate family reunification and support financial stability during the waiting period. Renewal is not permitted, but reapplication is possible if the principal spouse retains eligible status in Canada. Applications can be tracked online or by linking paper applications to an IRCC account. Rejections often occur due to insufficient proof of relationship, funds, or ties to the home country. Divorce or separation after approval does not revoke the permit, but changes during processing must be reported to IRCC.

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
