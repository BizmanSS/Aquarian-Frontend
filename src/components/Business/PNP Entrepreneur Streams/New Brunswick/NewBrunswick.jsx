import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Is a job offer required?",
    answer:
      "A job offer is not mandatory but can enhance your chances of receiving a Notification of Interest (NOI) from Alberta. Having work experience in Alberta or connections to the province can also improve your prospects.",
  },
  {
    question: " What is the application fee?",
    answer:
      "The application fee for the Alberta Express Entry Stream is CAD 500, which is non-refundable.",
  },
  {
    question: "Is there a specific stream for tech workers?",
    answer:
      "Yes, the Accelerated Tech Pathway within the Alberta Express Entry Stream offers expedited processing for candidates with job offers in eligible technology occupations.",
  },
];

export default function AlbertaTourismAndHospitalityStream() {
  const eligibleRef = useRef(null);
  const healthRef = useRef(null);
  const factorsRef = useRef(null);
  const lawRef = useRef(null);
  const selectionRef = useRef(null);
  const assessmentRef = useRef(null);
  const acceleratedRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements for Alberta Express Entry",
      scrollTo: eligibleRef,
      subItems: [
        {
          title: "Factors That Improve Your Chances of Selection",
          scrollTo: factorsRef,
        },
        { title: "Dedicated Health Care Pathway", scrollTo: healthRef },
        { title: "Law Enforcement Pathway", scrollTo: lawRef },
        { title: "Selection Draws", scrollTo: selectionRef },
        { title: "Assessment Criteria", scrollTo: assessmentRef },
      ],
    },
    {
      title: "Accelerated Tech Pathway",
      scrollTo: acceleratedRef,
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
        <SiteMapMenu type="I" h1="Express Entry"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Express Entry
            </div>
            <div class="pages-header">Alberta Express Entry</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Alberta Express Entry Stream is a part of the Alberta
              Advantage Immigration Program (AAIP). It is a Provincial Nominee
              Program by the province of Alberta. The Express Entry is an option
              for skilled workers looking for a PR opportunity in Alberta. The
              program allows Alberta to select individuals from IRCC’s Express
              Entry System having relevant skills and experience to contribute
              to the province’s economy. Candidates with provincial nomination
              through the Express Entry stream can increase their chances of
              securing permanent residency in Canada. The selection is done from
              the federal Express Entry pool based on self-declared profile
              information. Alberta may send a Notification of Interest (NOI)
              letter or invite candidates to apply depending on various
              selection factors and pathways.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibleRef}>
              Eligibility Requirements for Alberta Express Entry
            </div>
            <div className="pages-paragraph">
              You can be extended an invitation for Alberta Express Entry if you
              meet essential criteria like:
              <ol
                className="my-3"
                style={{
                  listStyleType: "decimal",
                  marginLeft: "30px",
                }}
              >
                <li>
                  You have an active profile in the federal Express Entry pool
                  with intentions to immigrate permanently to Alberta.
                </li>

                <li>
                  You meet the eligibility requirements of a minimum 1 federal
                  immigration program under Express Entry that includes:
                  <ul>
                    <li>
                      <strong>
                        <a
                          href="https://www.iaquarian.com/immigrate/express-entry/federal-skilled-worker-class"
                          style={{
                            color: "blue",
                          }}
                        >
                          Federal Skilled Worker Program
                        </a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a
                          href="https://www.iaquarian.com/immigrate/express-entry/federal-skilled-trades-class"
                          style={{
                            color: "blue",
                          }}
                        >
                          Federal Skilled Trades Program
                        </a>
                      </strong>
                    </li>
                    <li>
                      <strong>
                        <a
                          href="https://www.iaquarian.com/immigrate/express-entry/canadian-experience-class"
                          style={{
                            color: "blue",
                          }}
                        >
                          Canadian Experience Class
                        </a>
                      </strong>
                    </li>
                  </ul>
                </li>

                <li>You have a minimum CRS score of 300.</li>

                <li>
                  Occupation Requirements:
                  <ul>
                    <li>
                      You must be working in an occupation in demand or an
                      occupation connected to a provincial economic sector
                      priority - that supports Alberta's economic development.
                    </li>
                    <li>
                      Occupations must not be on the list of ineligible
                      occupations set by the province.
                    </li>
                  </ul>
                </li>

                <li>
                  You must not have an active nomination under any AAIP stream
                  (expired or ineligible nominations do not qualify).
                </li>
              </ol>
              <div className="my-5">
                While not mandatory, having a job offer from an Alberta employer
                or relevant work experience in Alberta can significantly improve
                a candidate's chances of receiving a Notification of Interest
                (NOI).
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Factors That Improve Your Chances of Selection
              </div>
              <div className="my-3">
                Your chances of receiving a Notification of Interest (NOI)
                letter from Alberta may increase if you meet certain criteria,
                such as:
              </div>
              <ul>
                <li>You have a valid job offer from an Alberta employer.</li>
                <li>
                  You graduated from a Canadian post-secondary institution.
                </li>
                <li>
                  You have a parent, child, or sibling who is a Canadian citizen
                  or permanent resident living in Alberta.
                </li>
                <li>French is your first language.</li>
                <li>
                  Your Express Entry profile is valid for more than 5 months.
                </li>
                <li>
                  Alberta also gives priority to candidates with job offers or
                  experience in Agriculture, Construction, Health Care, Tourism
                  & Hospitality. These sectors address labour shortages in
                  Alberta.
                </li>
              </ul>
              <div className="mt-5">
                <strong>Note: </strong>Only direct family members (parent,
                child, or sibling) qualify. In-laws are not eligible. The family
                connection must be verifiable through supporting documents.
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Dedicated Health Care Pathway
              </div>
              <div className="my-3">
                Alberta has allocated a portion of its Express Entry selections
                to health care professionals in high-demand occupations. Key
                eligibility requirements include:
              </div>
              <ul>
                <li>
                  Your primary occupation must be in an eligible National
                  Occupational Classification (NOC) code.
                </li>
                <li>
                  A valid job offer from an Alberta employer in the health care
                  sector.
                </li>
              </ul>
              <div className="mt-5">
                <strong>Eligible professions include: </strong>Physicians,
                Registered Nurses (RNs), Licensed Practical Nurses (LPNs),
                Occupational Therapists, Physiotherapists, Psychologists, and
                more. Each profession has a corresponding regulatory
                organization responsible for verifying eligibility to practice
                in Alberta.
              </div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  marginTop: "40px",
                }}
              >
                Law Enforcement Pathway
              </div>
              <div className="my-3">
                Candidates identified by the Alberta Association of Chiefs of
                Police (AACP) may qualify for the Law Enforcement Pathway. To
                receive an invitation:
              </div>
              <ul>
                <li>
                  You must meet the Alberta Express Entry Stream minimum
                  requirements.
                </li>
                <li>
                  Your occupation in Express Entry must match your current job
                  in Alberta police services.
                </li>
                <li>
                  You must be identified by AACP as an internationally recruited
                  police officer, with a valid job offer in one of the eligible
                  police services occupations.
                </li>
                <li>
                  This pathway targets occupations like police officers and
                  investigators under specific National Occupational
                  Classification (NOC) codes.
                </li>
              </ul>
              <div className="mt-5">
                AAIP conducts regular selection draws from the federal Express
                Entry pool. If selected, you will receive a Notification of
                Interest (NOI) letter. Keeping your Express Entry profile
                updated ensures eligibility for future draws.
              </div>
            </div>

            <div className="pages-header-2">
              Alberta Express Entry Assessment Criteria
            </div>
            <div className="pages-paragraph">
              Candidates are selected based on their profiles in the federal
              Express Entry pool. If nominated, they will receive a NOI from the
              AAIP inviting them to apply for provincial nomination.
              <ul>
                <li>
                  You must continue to meet the minimum requirements of the
                  Alberta Express Entry Stream and provide documentation to
                  confirm the information in your Express Entry profile.
                </li>
                <li>
                  You must submit your application through the AAIP online
                  portal.
                </li>

                <li>
                  Your application will be assessed based on the specific
                  parameters of the draw in which you received your NOI, such as
                  Alberta job offer conditions.
                </li>
              </ul>
            </div>

            <div className="pages-header-2">Accelerated Tech Pathway</div>
            <div className="pages-paragraph">
              Accelerated Tech Pathway is a component of the Alberta Express
              Entry program that provides a fast-track option for technology
              professionals. This is specifically designed for candidates with
              job offers in 1 of 38 eligible technology occupations such as Data
              scientists, Cybersecurity professionals, web designers, etc.
              <div className="mt-5">
                The Alberta Express Entry Stream offers a promising pathway for
                skilled workers looking to establish themselves in Canada’s
                province of Alberta. With its focus on economic development and
                support for international graduates, this stream addresses
                labour shortages and enriches the local community with diverse
                talent.
              </div>
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
