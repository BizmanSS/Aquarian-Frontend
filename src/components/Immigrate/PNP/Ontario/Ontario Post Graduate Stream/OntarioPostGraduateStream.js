import React, { useRef } from "react";

import NestedTableOfContent from "../../../../shared/NestedTableOfContent.jsx";
import Nestedfaq from "../../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question:
      "What are the key differences between the OINP Masters Graduate Stream and other immigration streams?",
    answer:
      "The Ontario Immigrant Nominee Program (OINP) Masters Graduate Stream offers unique advantages:",
    listAnswer: [
      "No job offer is needed to apply, allowing graduates to seek permanent residency based on their education and intent to settle in Ontario. In contrast, many other immigration pathways require a valid job offer.",

      "This stream specifically targets those who have completed a master’s degree from an eligible Ontario university within the last two years, emphasizing the retention of local talent. ",

      "Applicants must show a clear intention to live and work permanently in Ontario, which is a more stringent requirement compared to many other immigration streams.",
    ],
  },

  {
    question:
      "Which universities are eligible for the Ontario Post Graduate Stream?",
    answer:
      "Eligible institutions include, but are not limited to:",
    listAnswer: [
      "University of Toronto",

      "McMaster University",

      "Queen’s University",
    ],
  },
];

export default function OntarioPostGraduateStream() {
  const masterRef = useRef(null);
  const phdRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Ontario Master's Graduate Stream",
      scrollTo: masterRef,
    },
    {
      title: "Ontario PhD Graduate Stream",
      scrollTo: phdRef,
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
        <SiteMapMenu
          type="I"
          h1="Provincial Nominee Program"
          h2="Ontario"
          h3= "Ontario Post Graduate Stream"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Provincial Nominee Program
              {" > "} Ontario Post Graduate Stream
            </div>
            <div class="pages-header">Ontario Post Graduate Stream</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The Ontario Post Graduate Stream is a part of the Ontario
              Immigrant Nominee Program (OINP). The program is designed to help
              international students who studied in Ontario to transition from
              study to permanent residency in Canada. This program has two
              streams including Ontario Masters Graduate Stream and Ontario PhD
              Graduate Stream. Students from Ontario colleges/universities can
              use this opportunity to use their education and experience in
              Ontario to gain permanent residency without needing a job offer or
              being aligned with the Express Entry system.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={masterRef}>
              Ontario Masters Graduate Stream
            </div>
            <div className="pages-paragraph">
              <div className="my-5">
                The Ontario Master's Graduate Stream is specifically tailored
                for international students who have completed a master’s degree
                at an eligible university in Ontario. This stream facilitates
                the immigration process for graduates looking to establish
                themselves in Canada permanently.
              </div>
              <strong>Eligibility Requirements</strong>
              <div className="mt-3">
                To qualify for the Ontario Master's Graduate Stream, candidates
                must meet the following criteria:
              </div>
              <ul className="my-3">
                <li>
                  Candidates must possess a master's degree from an eligible
                  Ontario university, having completed at least one year of
                  full-time study (minimum 15 hours of classes per week)​.
                </li>
                <li>
                  A minimum Canadian Language Benchmark (CLB) level of 7 in
                  either English or French is required​
                </li>
                <li>
                  Candidates must have resided in Ontario for at least one year
                  within the two years before their application​.
                </li>
                <li>
                  Applicants need to demonstrate they have enough liquid funds
                  to support themselves and their dependents​.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={phdRef}>
              Ontario PhD Graduate Stream
            </div>

            <div className="pages-paragraph">
              <div className="my-5">
                The Ontario PhD Graduate Stream is designed for international
                students who have completed a PhD at an eligible university in
                Ontario. This stream attracts highly skilled graduates who can
                contribute to the province's economy and society.
              </div>
              <strong>Eligibility Requirements</strong>
              <div className="mt-3">
                To be eligible for the Ontario PhD Graduate Stream, applicants
                must fulfil the following conditions:
              </div>
              <ul className="my-3">
                <li>
                  Candidates must have completed a PhD program at an eligible
                  Ontario university within the last two years​
                </li>
                <li>
                  There is no formal language requirement for this stream;
                  however, proficiency in either English or French may be
                  beneficial during the application process​.
                </li>
                <li>
                  Similar to the master's stream, applicants must have lived in
                  Ontario for a minimum of one year during the two years
                  preceding their application​.
                </li>
                <li>
                  Proof of sufficient funds to support themselves and their
                  family members is required​.
                </li>
              </ul>

              <div className="mt-5">
                The Ontario Post Graduate Stream presents a valuable opportunity
                for international graduates aiming to build their future in
                Canada. With its focus on academic achievements and
                contributions to the province, both the Master's Graduate Stream
                and the PhD Graduate Stream attract skilled individuals to
                Ontario.{" "}
              </div>
            </div>
          </div>
          <div ref={faqRef}>
            {" "}
            <Nestedfaq faqItems={faqItems} />
          </div>

          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}
