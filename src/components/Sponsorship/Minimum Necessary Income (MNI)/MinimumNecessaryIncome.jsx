import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const incomeTableData = [
  {
    size: "2 people",
    year23: "$44,530",
    year22: "$43,082",
    year21: "$32,898",
  },
  {
    size: "3 people",
    year23: "$54,743",
    year22: "$52,965",
    year21: "$40,444",
  },
  {
    size: "4 people",
    year23: "$66,466",
    year22: "$64,306",
    year21: "$49,106",
  },
  {
    size: "5 people",
    year23: "$75,384",
    year22: "$72,935",
    year21: "$55,694",
  },
  {
    size: "6 people",
    year23: "$85,020",
    year22: "$82,259",
    year21: "$62,814",
  },
  {
    size: "7 people",
    year23: "$94,658",
    year22: "$91,582",
    year21: "$69,934",
  },
  {
    size: "Each additional person",
    year23: "$9,636",
    year22: "$9,324",
    year21: "$7,120",
  },
];

const quebecTableData = [
  {
    total: "1",
    basic: "$28,242",
  },
  {
    total: "2",
    basic: "$38,124",
  },
  {
    total: "3",
    basic: "$47,068",
  },
  {
    total: "4",
    basic: "$54,135",
  },
  {
    total: "5",
    basic: "$60,250",
  },
  {
    total: "Each Additional Dependent",
    basic: "$6,115",
  },
];

const under18 = [
  {
    age: "0",
    under: "1",
    gross: "$9,776",
  },
  {
    age: "0",
    under: "2",
    gross: "$15,493",
  },
  {
    age: "Each Additional Child Under 18",
    under: "",
    gross: "$5,166",
  },
];

const oneSponsor = [
  {
    age: "1",
    under: "0",
    gross: "$20,657",
  },
  {
    age: "1",
    under: "1",
    gross: "$27,755",
  },
  {
    age: "1",
    under: "2",
    gross: "$31,341",
  },
  {
    age: "Each Additional Child Under 18",
    under: "",
    gross: "$3,582",
  },
];

const twoSponsor = [
  {
    age: "2",
    under: "0",
    gross: "$30,294",
  },
  {
    age: "2",
    under: "1",
    gross: "$33,935",
  },
  {
    age: "2",
    under: "2",
    gross: "$36,634",
  },
  {
    age: "Each Additional Adult Over 18",
    under: "$9,630",
    gross: "",
  },
  {
    age: "Each Additional Child Under 18",
    under: "$2,689",
    gross: "",
  },
];

const faqItems = [
  {
    question: " What is the requirement for meeting MNI?",
    answer:
      " You need to meet the Minimum Necessary Income requirement for Canadian sponsorship in the 3 most recent tax years from when you are applying.",
  },
  {
    question: "What is the importance or benefit of MNI?",
    answer:
      "It ensures that sponsored individuals can meet their and family’s basic needs without relying on any government assistance.",
  },
  {
    question: "Is it necessary to have a job to meet MNI?",
    answer:
      " Employment is a primary but not the only way to meet MNI. Other sources of income, such as investments or rental properties, can also contribute.",
  },
  {
    question: "Can I sponsor my spouse’s parents or grandparents?",
    answer:
      "As a Canadian citizen or permanent resident, you can sponsor your own biological or adopted parents and grandparents. However, you cannot directly sponsor your spouse’s parents or grandparents; only your spouse can do that. You can definitely act as a co-signer on your spouse's application, allowing both of your incomes to be combined to meet the Minimum Necessary Income requirements. This ensures that you both have the financial capacity to support the sponsored family members.",
  },
];

export default function MinimumNecessaryIncome() {
  const aboutRef = useRef(null);

  const minimumRef = useRef(null);
  const faqRef = useRef(null);
  const quebecRef = useRef(null);
  const dependentRef = useRef(null);

  const tableContentData = [
    {
      title: "What is the 'Minimum Necessary Income' or MNI?",
      scrollTo: aboutRef,
    },
    {
      title:
        "Minimum Necessary Income for Sponsoring Parents and Grandparents in Canada",
      scrollTo: minimumRef,
    },
    {
      title: "MNI for Family Sponsorship in Quebec",
      scrollTo: quebecRef,
      subItems: [
        {
          title: "Income Requirements Based on Dependent Age Groups",
          scrollTo: dependentRef,
        },
      ],
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
        <SiteMapMenu type="S" h1="Minimum Necessary Income (MNI)"></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Sponsorship
              {" > "}Minimum Necessary Income (MNI)
            </div>
            <div class="pages-header">
              Minimum Necessary Income (MNI) Requirements 2024
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada's immigration policies reflect a deep commitment to family
              values. Through their multiple sponsorship programs, the country
              aims to bring families together to strengthen community ties. MNI
              is the Minimum Necessary Income that a sponsor must have to
              sponsor a family member for permanent residency in Canada. This
              requirement makes sure that sponsors have the financial capacity
              to provide for themselves and the family members they intend to
              sponsor. The amount of MNI varies according to the Low Income
              Cut-Off, LICO. It depends on the size of the family unit. A spouse
              can also act as a co-signer when sponsoring a family member. This
              means that both partners’ incomes can be combined to meet the MNI
              threshold. This is particularly beneficial if one spouse's income
              alone does not satisfy the requirements.
            </div>

            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What is the "Minimum Necessary Income" or MNI?
            </div>
            <div className="pages-paragraph">
              The <strong>Minimum Necessary Income (MNI)</strong> is a financial
              benchmark established by the Canadian government for individuals
              sponsoring their families. The more family members there are in
              the household, the higher is the MNI requirement. The family unit
              includes the sponsor, the sponsored person, and any dependent
              family members.
              <ul className="my-3">
                <li>
                  MNI makes sure that sponsors are financially stable so that
                  they do not depend on social aid for themselves or sponsored
                  members.
                </li>
                <li>
                  The MNI is determined based on the LICO, a measure of low
                  income in Canada. However, it varies with the number of family
                  members and the location.
                </li>
                <li>
                  The MNI also varies slightly by province or territory where
                  the sponsor lives.
                </li>
                <li>
                  It is updated annually to reflect changes in the LICO and
                  other economic factors.
                </li>
              </ul>
              Sponsors are required to show income from various sources, which
              may include employment earnings, rental income, dividends, and
              other legitimate income streams. To meet the Minimum Necessary
              Income (MNI) requirement, they must provide proof of income for
              the 3 tax years prior to their application. This proof typically
              involves submitting Notices of Assessment or NOA issued by the
              Canada Revenue Agency.
              <div
                style={{
                  textDecoration: "underline",
                  margin: "15px 0",
                  fontWeight: "bold",
                  fontSize: "27px",
                }}
              >
                Family Unit
              </div>
              <ul className="my-3">
                <li>Yourself</li>
                <li>Your spouse or partner</li>
                <li>Your dependent children</li>
                <li>Dependent children of your spouse or partner</li>
                <li>
                  Any previously sponsored individuals for whom you remain
                  financially responsible
                </li>
                <li>
                  Parents and grandparents you wish to sponsor, along with their
                  dependent children
                </li>
                <li>
                  Dependent children of your parents and grandparents, as well
                  as separated spouses who won’t accompany them to Canada.
                </li>
              </ul>
            </div>

            <div className="my-5">
              The family size unit is determined by both the current dependents
              of the sponsor and the individuals they plan to sponsor. When
              calculating your family unit, consider the following:
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={minimumRef}>
              Minimum Necessary Income for Sponsoring Parents and Grandparents
              in Canada
            </div>
            <div className="pages-paragraph">
              To sponsor your parents or grandparents for Canadian immigration,
              you need to demonstrate that you can financially support them,
              with anyone else included in your family.
              <div className="my-3">
                To verify your financial capability, you must meet specific
                income requirements for 3 tax years preceding your application.
                For the 2024 intake, your income will be evaluated based on your
                tax returns for 2023, 2022, and 2021.
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Income Requirements for Family Size
              </div>
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Family Size</th>
                        <th>2023</th>
                        <th>2022</th>
                        <th>2021</th>
                      </tr>
                    </thead>
                    <tbody>
                      {incomeTableData.map((row, index) => (
                        <tr key={index}>
                          <td className="bold">{row.size}</td>
                          <td>{row.year23}</td>
                          <td>{row.year22}</td>
                          <td>{row.year21}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-5">
                The assessment of your income applies to all sponsors and
                co-signers in provinces and territories outside Quebec. For
                those in Quebec, the income requirements will be evaluated by
                the Ministère de l’Immigration, de la Francisation et de
                l’Intégration (MIFI).
              </div>
              <div
                style={{
                  fontWeight: "bold",
                  margin: "15px 0",
                }}
              >
                Documentation Required
              </div>
              <ul className="">
                <li>
                  Applicants are required to submit 3 notices of assessment or
                  equivalent documentation from the Canada Revenue Agency. These
                  assessments must correspond to the three tax years immediately
                  preceding the application submission date.
                </li>
                <li>
                  Failing to provide the three years of notices will result in
                  not meeting the sponsorship requirements.
                </li>
              </ul>
            </div>

            <div class="pages-header-2" ref={quebecRef}>
              MNI for Family Sponsorship in Quebec
            </div>
            <div class="pages-paragraph">
              Quebec has its own specific MNI requirements. In this province,
              sponsors are deemed capable of meeting the financial requirements
              if their gross income from Canadian sources equals the amounts
              listed below over the past 12 months and throughout their
              sponsorship commitment.. The Minimum Necessary Income (MNI) for
              sponsors in Quebec is determined by the total number of members in
              the family unit. Below are the basic annual income requirements
              for 2024:
              <div className="my-5">
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Total Family Members</th>
                        <th>Basic Annual Income Required</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quebecTableData.map((row, index) => (
                        <tr key={index}>
                          <td className="bold">{row.total}</td>
                          <td>{row.basic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              In addition to the base income, sponsors must also meet additional
              income requirements based on the number of dependents being
              sponsored, categorized by age. The following tables outline the
              gross annual income required for different combinations of adults
              and children.
            </div>

            <div class="pages-header-2" ref={dependentRef}>
              Income Requirements Based on Dependent Age Groups
            </div>
            <div className="pages-paragraph">
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Table 1: Number of Persons Under 18 Years of Age
                </div>

                <div className="my-5">
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Persons Aged 18 and Over</th>
                          <th>Persons Under 18</th>
                          <th>Gross Annual Income Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {under18.map((row, index) => (
                          <tr key={index}>
                            <td className="bold">{row.age}</td>
                            <td>{row.under}</td>
                            <td>{row.gross}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Table 2: Income Requirements for One Adult Sponsor
                </div>

                <div className="my-5">
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Persons Aged 18 and Over</th>
                          <th>Persons Under 18</th>
                          <th>Gross Annual Income Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {oneSponsor.map((row, index) => (
                          <tr key={index}>
                            <td>{row.age}</td>
                            <td>{row.under}</td>
                            <td>{row.gross}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Table 3: Income Requirements for Two Adult Sponsors
                </div>

                <div className="my-5">
                  <div className="table-container">
                    <table className="responsive-table">
                      <thead>
                        <tr>
                          <th>Persons Aged 18 and Over</th>
                          <th>Persons Under 18</th>
                          <th>Gross Annual Income Required</th>
                        </tr>
                      </thead>
                      <tbody>
                        {twoSponsor.map((row, index) => (
                          <tr key={index}>
                            <td>{row.age}</td>
                            <td>{row.under}</td>
                            <td>{row.gross}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              MNI requirements are necessary for people willing to sponsor their
              family members in Canada. This proves their capability to sustain
              themselves and their families. If the sponsor cannot meet the
              requirement, they can search for a person called a co-signer who
              can help them out in meeting the income requirement. The co-signer
              is a Canadian citizen or permanent resident who agrees to be
              financially responsible for the sponsor and the sponsored family
              member.
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
