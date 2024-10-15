import React, { useRef } from "react";

import TableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";



const faqItems = [
  {
    question: "What documents do I need to gather before applying for child sponsorship?",
    answer:
      "You should collect documents such as:",
      listAnswer:[
        "Proof of Canadian citizenship",
        "ID proof of your dependent and you",
        "Proof of relationship: birth certificates, and financial documents"
      ]
  },
  {
    question: "What forms do I need to complete?",
    answer:
      "You will have to fill out 2 forms: The Application to Sponsor and Undertaking (IMM 1344) and the Application for Permanent Residence (IMM 0008).",
  },
  {
    question: "Will my dependent need a medical check?",
    answer:
      "Yes, the dependent may require medical and background checks based on the processing.",
  },
  
];

export default function ChildOrOtherDependantSponsorship() {
  const aboutRef = useRef(null);
  const childrenRef = useRef(null);
  const  otherRef= useRef(null);
  const eligibilityRef = useRef(null);
  const dependentRef = useRef(null);
  const minimumRef = useRef(null);
  const faqRef = useRef(null);
  const requirementsRef= useRef(null);

  const tableContentData = [
    {
      title: "Who Qualifies as a Dependent?",
      scrollTo: aboutRef,
      subItems: [
        {
          title: "Dependent Children",
          scrollTo: childrenRef,
        },
        {
          title: "Other Dependents",
          scrollTo: otherRef,
        },
      ],
    },
    {
      title: "Eligibility Requirements for Dependent Child Sponsorship",
      scrollTo: eligibilityRef,
    },
    {
      title: "Dependent Sponsorship in Quebec",
      scrollTo: dependentRef,
    },
    {
      title: "Minimum Necessary Income for Dependent Child Sponsorship",
      scrollTo: minimumRef,
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
          type="S"
          h1="Child or Other Dependant Sponsorship"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Sponsorship
              {" > "}Child or Other Dependent Sponsorship
            </div>
            <div class="pages-header">
            Child or Other Dependent Sponsorship
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Canada has long been recognized for family reunification policies. One of the most significant pathways to achieving this is through Child or Other Dependent Sponsorship. This family sponsorship program allows Canadian citizens and PRs to sponsor their children or other dependents to come to Canada for permanent residence.
            </div>
            <div className="table-of-content-container">
              <TableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
            Who Qualifies as a Dependent?
            </div>
            <div className="pages-paragraph">
            The Child or Other Dependent Sponsorship program ensures that families can stay together and that dependents can enjoy the benefits of living in Canada.

            <div className='my-3'><strong>Dependent Children</strong></div>
              <ul className="mb-5">
                <li>
                A child must be under 22 years old and not married or in a common-law relationship to be considered a dependent.
                </li>
                <li>
                The child must be the biological or adopted child of the sponsor who’s a Canadian citizen/PR. 
                </li>
                <li>
                Stepchildren are also eligible if the sponsor is legally married to or in a common-law relationship with the child’s parent.
                </li>
                <li>
                If the child is 22 years or older, they can qualify as a dependent if they:
                </li>
                <ul class="hollow-circle-list">
                <li>
                  Sponsors wishing to support their parents or grandparents
                  under the PGP must sign an undertaking with IRCC.
                </li>
                </ul>
              </ul>
              An orphaned sibling can also be considered a dependent child. In that case, the sibling must be under 22 years old and not married or in a common-law relationship.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Eligibility Requirements for Dependent Child Sponsorship
            </div>

            <div className="pages-paragraph">
            To sponsor a child or other dependent, the sponsor must meet several eligibility criteria:
              <ul className="my-5">
                <li>They must be a Canadian citizen or a permanent resident of Canada.</li>
                <li>They must be at least 18 years old.</li>
                <li>
                They should not be in person, bankrupt, or criminally convicted.
                </li>
              </ul>
              Parents need to provide a birth/adoption certificate to provide proof of their relations to the child.
            </div>

            <div class="pages-header-2" ref={dependentRef}>
            Dependent Sponsorship in Quebec
            </div>
            <div class="pages-paragraph">
            Dependent Sponsorship in Quebec refers to the process of sponsoring family members to join you in the province of Quebec, Canada. Quebec has its own unique rules and requirements for dependent sponsorship.
            </div>
            <ol
              style={{ listStyle: "decimal", listStylePosition: "inside" }}
              className="ordered-list"
            >
              <li>
              You must demonstrate that you have the financial means to support your dependents in Quebec. 
              </li>
              <li>
              If the dependent child is under 16, the sponsor must provide financial support for 10 years or until the child turns 18, whichever is longer. 
              </li>
              <li>
              If the child is 16 years or older, the sponsor shall support them financially for a period of three years or until they reach the age of 25, whichever is the longer period of time.
              </li>
            </ol>

            <div class="pages-header-2" ref={minimumRef}>
            Minimum Necessary Income for Dependent Child Sponsorship
            </div>

            <div className='pages-paragraph'>Sponsors are exempt from MNI requirements unless the dependent child has their own children. In such cases, the sponsor must meet the MNI for their total family unit size, which includes everyone they support in Canada as well as those they intend to sponsor. For sponsors who live in Quebec, there is a specific financial responsibility depending on the dependent child's age. For example, if the dependent child is under 16 years of age, the commitment is for 10 years or until he becomes 18, whichever is longer.

              <div className="mt-3">The Child and Other Dependent Sponsorship program is a fundamental part of the Canadian immigration system. This reflects a commitment from the Canadian government for family reunification. Such a program lets Canadian citizens and permanent residents sponsor a dependent child: either a biological child or an adopted child to join them in Canada as a permanent resident. </div>

              <div className='mt-5'><strong><span style={{
                color:'red'
              }}>Check: </span> <a href='#' style={{
                color:'blue'
              }}> Minimum Necessary Income for Canadian Sponsorship</a></strong></div>
            </div>

          </div>
          <div ref={faqRef}>
          <FaqBox faqItems={faqItems} />
          </div>
          <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}
