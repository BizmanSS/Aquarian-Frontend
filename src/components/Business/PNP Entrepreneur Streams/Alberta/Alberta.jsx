import React, { useRef } from "react";

import NestedTableOfContent from "../../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What benefits does this pathway offer?",
    answer:
      "Successful nominees through the Accelerated Tech Pathway receive a provincial nomination, which grants them an additional 600 CRS points toward their Express Entry profile, significantly increasing their chances of receiving an Invitation to Apply (ITA) for permanent residency.",
   
  },
  {
    question:
      "What supporting documents are needed for the Accelerated Tech Pathway application",
    answer:
      "To apply for the Alberta Accelerated Tech Pathway, candidates must submit several supporting documents like:",
    listAnswer: [
      "Valid Passport",
      "Proof of an active profile in the federal Express Entry system, including your Express Entry number.",
      "A signed job offer from an Alberta employer in an eligible tech occupation, detailing the position, salary, and working conditions.",
      "Copies of educational degrees, diplomas, and any relevant Educational Credential Assessment (ECA) reports, if applicable.",
      "Reference letters from previous employers confirming your work experience relevant to the job offer or your field.",
    ],
  },
  
];

const occupationTableData=[
  {
    code:"00012",
    occupation:"Senior Managers – Financial, Communications, and Other Business Services"
  },
  {
    code:"00013",
    occupation:"Senior Managers – Health, Education, Social and Community Services, and Membership Organizations"
  },
  {
    code:"00014",
    occupation:"Senior Managers – Trade, Broadcasting, and Other Services"
  },
  {
    code:"01112",
    occupation:"Human Resources Managers"
  },
  {
    code:"01113",
    occupation:"Purchasing Managers"
  },
  {
    code:"00014",
    occupation:"Other Administrative Services Managers"
  },
  {
    code:"01312",
    occupation:"Information Systems Managers"
  },
  {
    code:"02101",
    occupation:"Engineering Managers"
  }
  ,
  {
    code:"02102",
    occupation:"Architecture and Science Managers"
  }
  ,
  {
    code:"21100",
    occupation:"Physical Scientists"
  }
  ,
  {
    code:"21110",
    occupation:"Data Scientists"
  }
  ,
  {
    code:"21210",
    occupation:"Mathematicians, Statisticians, and Actuaries"
  }
  ,
  {
    code:"21211",
    occupation:"Data Scientists and Data Engineers"
  }
  ,
  {
    code:"21220",
    occupation:"Cybersecurity Analysts"
  }
  ,
  {
    code:"21221",
    occupation:"Business Systems Specialists"
  }
  ,
  {
    code:"21222",
    occupation:"Information Systems Analysts and Consultants"
  }
  ,
  {
    code:"21230",
    occupation:"Computer Systems Developers and Programmers"
  }
  ,
  {
    code:"21231",
    occupation:"Software Engineers and Designers"
  }
  ,
  {
    code:"21232",
    occupation:"Computer Programmers and Interactive Media Developers"
  }
  ,
  {
    code:"21233",
    occupation:"Web Designers and Developers"
  }
  ,
  {
    code:"21234",
    occupation:"Web Developers and Digital Media Specialists"
  }
  ,
  {
    code:"21300",
    occupation:"Electrical and Electronics Engineers"
  }
  ,
  {
    code:"21311",
    occupation:"Computer Engineers (except Software Engineers and Designers)"
  },
  {
    code:"21312",
    occupation:"Software Developers and Programmers"
  },
  {
    code:"21322",
    occupation:"Database Analysts and Data Administrators"
  },
  {
    code:"21331",
    occupation:"Electrical and Electronics Technologists and Technicians"
  },
  {
    code:"21332",
    occupation:"Cybersecurity Specialists"
  }


]

export default function AlbertaAcceleratedTechPathway() {
  const eligibilityRef = useRef(null);
  const offerRef = useRef(null);
  const occupationRef = useRef(null);
  const stepsRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Eligibility Requirements for Alberta Accelerated Tech Pathway",
      scrollTo: eligibilityRef,
      subItems: [
        {
          title: "Job Offer",
          scrollTo: offerRef,
        },
        { title: "Eligible Occupations", scrollTo: occupationRef },
      ],
    },
    {
      title: "Application Steps for Alberta Accelerated Tech Pathway",
      scrollTo: stepsRef,
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
            <div class="pages-header">Alberta Accelerated Tech Pathway</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              The <strong>Alberta Accelerated Tech Pathway (ATP)</strong> is an
              immigration program designed to fast-track tech professionals
              seeking permanent residency in Alberta in Canada. This pathway is
              part of the Alberta Advantage Immigration Program (AAIP), a PNP.
              The pathway fast-tracks applications for tech professionals who
              already have a valid job offer in Alberta's tech sector or are
              currently working in the province in an eligible tech occupation.
              It allows tech workers to receive a provincial nomination,
              speeding up their route to permanent residency. Candidates
              eligible under the Alberta Express Entry Stream and the Alberta
              Accelerated Tech Pathway can benefit from expedited processing.
              Nominees will receive a work permit support letter to apply for a
              temporary work permit. They will also be invited to submit an
              official application for Canadian permanent residency.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Eligibility Requirements for Alberta Accelerated Tech Pathway
            </div>
            <div className="pages-paragraph">
              To be eligible for the Alberta Accelerated Tech Pathway, you must
              be eligible under Alberta Express Entry stream:
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "15px",
                }}
                ref={offerRef}
              >
                Job Offer
              </div>
              <div>
                You must have a job offer from 1 of 38 in-demand occupations or
                be currently employed full-time in Alberta in an eligible tech
                occupation.
              </div>
              <ul className="my-3">
                <li>
                  The job offer must be full-time, continuous, and for at least
                  12 months.
                </li>
                <li>
                  The wage or salary should meet or exceed the provincial
                  minimum wage and, if applicable, any requirements outlined in
                  the LMIA.
                </li>
                <li>
                  If no LMIA is available, the wage must align with or exceed
                  the starting wage for the occupation across all industries in
                  Alberta.
                </li>
              </ul>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  marginTop: "15px",
                }}
                ref= {occupationRef}
              >
                Eligible Occupations
              </div>
              <div>
                The job offer must be in one of Alberta's tech-related fields
                under specific National Occupational Classification (NOC) codes,
                including:
              </div>

              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>NOC Code</th>
                        <th>Occupation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {occupationTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.code}</td>
                          <td>{row.occupation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2">
            Application Steps for Alberta Accelerated Tech Pathway
            </div>
            <div className="pages-paragraph">
            Create and maintain an active Express Entry profile, ensuring that your primary occupation aligns with the eligible NOC codes for tech professionals.
              <ul className="my-2 ml-3">
                <li>
                Submit a formal application through Alberta’s online portal, including proof of your job offer and eligibility documents.
                </li>

                <li>
                If your application is successful, you will receive a provincial nomination from Alberta. This will add 600 points to your Comprehensive Ranking System (CRS) score in Express Entry, virtually guaranteeing an Invitation to Apply (ITA) for permanent residency.
                </li>

                <li>
                With the provincial nomination in hand, submit your PR application to Immigration, Refugees, and Citizenship Canada (IRCC). Processing time typically ranges from 4 to 6 months.
                </li>

              </ul>
              In 2023, Alberta saw record growth in tech investments, with over $700 million in venture capital funding directed towards tech companies. The Accelerated Tech Pathway is a reflection of this growth and Alberta's need for skilled professionals to support its tech-driven economy. Eligible candidates submit their Express Entry profile, job offer, and employer details to the AAIP. Alberta assesses the application and invites eligible candidates to apply for nomination. PNP applications under this pathway are processed faster. Successful nominees receive 600 CRS points, increasing their chance of an ITA for permanent residence.
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
