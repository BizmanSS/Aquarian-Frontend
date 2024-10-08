import React, { useRef } from "react";

import NestedTableOfContent from "./../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "Can Canadian citizenship be revoked?",
    answer:
      "Canadian citizenship can be withdrawn under exceptional circumstances like:",
    listAnswer: [
      "If citizenship was acquired through fraud.",
      "If the individual has committed a crime.",
      "If their permanent residence had been withdrawn before they became citizens.",
    ],
  },
  {
    question:
      "What are the common reasons for denial of Canadian citizenship applications?",
    answer:
      "Not all Canadian citizenship applicants get approved. Denials are very common due to the following reasons:",
    listAnswer: [
      "Failure to meet residency requirements",
      "Lack of acceptable language skills",
      "Criminal record and connection with criminal activity",
      "Incompletion or error in application forms",
      "Pendency of other immigration cases or unresolved PR status",
    ],
  },
  {
    question:
      "If I was born outside of Canada to Canadian citizen parents am I automatically a Canadian citizen?",
    answer:
      "Yes, if you were born outside of Canada to a Canadian citizen parent, then you are automatically a Canadian citizen.",
  },
  {
    question: "Can one lose his or her citizenship of Canada?",
    answer:
      "Yes, one can lose his or her citizenship in Canada if he or she renounces his or her citizenship or if the person is declared to have committed a serious crime.",
  },
  {
    question:
      "What is the difference in the rights of a Canadian Citizen and Permanent Resident?",
    answer:
      "Canadian citizens and permanent residents share many rights, but there are notable differences.",
  },
];

export default function ExpressEntry() {
  const aboutRef = useRef(null);
  const factorRef = useRef(null);
  const workRef = useRef(null);
  const costRef = useRef(null);
  const eligibilityRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);
  const requireRef = useRef(null);
  const drawsRef = useRef(null);
  const latestdrawsRef = useRef(null);
  const validityRef = useRef(null);
  const calculateRef = useRef(null);
  const improveRef = useRef(null);

  const tableContentData = [
    {
      title: "What is the Express Entry Program?",
      scrollTo: aboutRef,
    },
    {
      title: "Benefits of Applying for Canada Express Entry",
      scrollTo: benefitRef,
    },
    {
      title: "Express Entry Requirements",
      scrollTo: requireRef,
    },
    {
      title: "Express Entry Eligibility Points and CRS Score",
      scrollTo: eligibilityRef,
      subItems: [
        {
          title: "Key Factors that Affect Your CRS Score",
          scrollTo: factorRef,
        },
        { title: "How to Improve Your CRS Score?", scrollTo: improveRef },
      ],
    },
    {
      title: "How Does Express Entry Work?",
      scrollTo: workRef,
    },
    {
      title: "Express Entry Costs",
      scrollTo: costRef,
    },
    {
      title: "Express Entry Draws",
      scrollTo: drawsRef,
      subItems: [
        {
          title: "Monitoring the Express Entry Latest Draws",
          scrollTo: latestdrawsRef,
        },
      ],
    },
    {
      title: "Validity of Express Entry Profile",
      scrollTo: validityRef,
    },

    {
      title: "How to Calculate Your CRS Score",
      scrollTo: calculateRef,
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
          type="I"
          h1="Express Entry"

        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Immigrate
              {" > "}Express Entry
            </div>
            <div class="pages-header">Express Entry System in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada's Express Entry program is an efficient immigration pathway
              for skilled workers aiming to obtain permanent residency in
              Canada. It uses a point-based system to assess and rank
              candidates, ensuring that only the most qualified individuals are
              selected.
              <div className="pages-paragraph">
                To participate in the Express Entry of Canada system, candidates
                first need to create a profile and submit it to the candidate
                pool. Once in the pool, applicants are evaluated and ranked
                based on various factors like education, work experience,
                language proficiency, and adaptability.
              </div>
              <div className="pages-paragraph">
                The Comprehensive Ranking System (CRS) assigns a score out of
                1,200 points, with higher-scoring candidates having better
                chances of being invited to apply for permanent residency in
                Canada.
              </div>
              <div className="pages-paragraph">
                In 2024, Immigration, Refugees, and Citizenship Canada (IRCC)
                will increase the frequency of category-based Express Entry
                draws. These draws are designed to target individuals whose
                skills match the evolving needs of Canada's labor market,
                further aligning Canadian immigration with the country's
                economic goals.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What is the Express Entry Program?
            </div>
            <div className="pages-paragraph">
              The <strong>Express Entry of Canada</strong> was launched in 2015
              by Immigration, Refugees, and Citizenship Canada (IRCC) to manage
              applications for three federal immigration programs that lead to
              permanent residency in Canada:
              <ul className="my-3">
                <li>
                  <a
                    href="#"
                    style={{
                      color: "blue",
                    }}
                  >
                    <strong>Federal Skilled Worker Program (FSWP): </strong>
                  </a>
                  For foreign workers with skills and work experience.
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "blue",
                    }}
                  >
                    <strong>Federal Skilled Trades Program (FSTP): </strong>
                  </a>
                  For candidates who are qualified in a skilled trade and want
                  to migrate to Canada.
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "blue",
                    }}
                  >
                    <strong>Canadian Experience Class (CEC): </strong>
                  </a>
                  For candidates with considerable skilled work experience in
                  Canada (includes experience earned during Post Graduate work
                  Permit as well.)
                </li>
              </ul>
              Candidates who meet the{" "}
              <strong>Express Entry requirements</strong> are placed into a pool
              where they are ranked based on a{" "}
              <strong>Comprehensive Ranking System (CRS)</strong> score. Regular
              draws, referred to as <strong>Express Entry latest draws</strong>,
              invite the top-ranked candidates to apply for permanent residency.
            </div>

            <div className="note-cec">
              <div >
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={benefitRef}>
              Benefits of Applying for Express Entry of Canada
            </div>
            <div className="pages-paragraph">
              Express Entry is the most efficient route to Canadian permanent
              residency.
              <ul className="my-2 ml-3">
                <li>
                  Unlike some other Canada immigration pathways, a job offer is
                  not necessary to apply.
                </li>

                <li>
                  Candidates with higher CRS scores have a better chance of
                  receiving an ITA.
                </li>

                <li>
                  The system is designed for efficient processing, with plans to
                  issue approximately 110,770 ITAs in 2024.
                </li>

                <li>
                  Express Entry has a high success rate for applicants, making
                  it a popular choice for skilled professionals.
                </li>

                <li>
                  <a
                    href="https://www.iaquarian.com/immigrate/permanent-residency"
                    style={{
                      color: "blue",
                    }}
                  >
                    <strong>Permanent residency</strong>
                  </a>{" "}
                  through Express Entry can eventually lead to Canadian
                  citizenship.
                </li>
              </ul>
              Overall, the Express Entry system is an effective and popular
              pathway for skilled professionals looking to make Canada their new
              home.
            </div>

            <div class="pages-header-2" ref={requireRef}>
              Express Entry Requirements
            </div>
            <div class="pages-paragraph">
              While the specific requirements may vary depending on the program
              (FSWP, FSTP, or CEC), some general Express Entry of Canada
              criteria include:
              <ul className="my-2 ml-3">
                <li>
                  Achieving a minimum Canadian Language Benchmark CLB 7 level in
                  an approved English or French test (IELTS, CELPIP, or TEF).
                </li>

                <li>
                  For foreign education, you need an ECA to prove that your
                  education is equivalent to Canadian standards.
                </li>

                <li>
                  For the FSWP, at least one year of continuous full-time or
                  equivalent part-time work experience in a skilled occupation
                  is required. This experience should be in a job classified
                  under the National Occupational Classification (NOC) system.
                </li>
              </ul>
              Minimum settlement funds are also required based on family size
              (except for CEC and candidates with a valid job offer).
              <div className="my-5">
                <strong>
                  <span
                    style={{
                      color: "red",
                    }}
                  >
                    Check on the Official Website:
                  </span>
                  <span
                    style={{
                      color: "blue",
                    }}
                  >
                    <a href=""> Documents Required for Express Entry</a>
                  </span>
                </strong>
              </div>
              Meeting these requirements is a starting point, but it’s important
              to note that simply fulfilling the basic criteria does not
              guarantee an invitation to apply for permanent residency.
              Candidates with stronger profiles—those who exceed the minimum
              requirements—are more likely to receive an invitation.
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
              Express Entry Eligibility Points and CRS Score
            </div>
            <div className="pages-paragraph">
              The Express Entry eligibility points and Comprehensive Ranking
              System (CRS) score serve different purposes within Canada's
              Express Entry immigration process.
              <ul className="my-2 ml-3">
                <li>
                  <strong>Eligibility Points (FSW Program): </strong>
                  To qualify for the Federal Skilled Worker Program (FSWP),
                  candidates must first score at least 67 points on the FSW
                  eligibility grid. This is based on factors like age,
                  education, work experience, language skills, and adaptability.
                  This score simply determines whether a candidate is eligible
                  to enter the Express Entry pool.
                </li>

                <li>
                  <strong>CRS Score: </strong>
                  Once in the Express Entry pool, candidates are ranked based on
                  their CRS score, which is out of 1200 points. The CRS score is
                  used to rank all candidates in the pool against each other.
                  Regular Express Entry draws are conducted, and candidates with
                  a CRS score above the cut-off receive an Invitation to Apply
                  (ITA) for permanent residency.
                </li>
              </ul>
              CRS is divided into core points (age, education, language
              proficiency, work experience) and additional points (such as a job
              offer, sibling in Canada, or a provincial nomination).
            </div>

            <div class="pages-header-2" ref={factorRef}>
              Key Factors that Affect Your CRS Score
            </div>
            <div class="pages-paragraph">
              The <strong>Comprehensive Ranking System</strong> is the backbone
              of the <strong>Express Entry of Canada</strong>, determining
              whether candidates receive an ITA.
              <ul className="my-2 ml-3">
                <li>
                  <strong>Age: </strong>
                  Younger candidates receive more points.
                </li>

                <li>
                  <strong>Education Level: </strong>
                  Higher education levels such as a Master’s degree or PhD can
                  significantly increase your score.
                </li>

                <li>
                  <strong>Work Experience: </strong>
                  Canadian work experience is valued more, but foreign work
                  experience also earns points.
                </li>

                <li>
                  <strong>Language Proficiency: </strong>
                  High scores in the IELTS or TEF can boost your CRS score. Job
                  Offer or Provincial Nomination: Although a job offer isn’t
                  required for Express Entry, a valid Canadian job offer can add
                  up to 200 points. A{" "}
                  <strong>
                    <a
                      href="https://www.iaquarian.com/immigrate/provincial-nominee-program"
                      style={{ color: "blue" }}
                    >
                      Provincial Nominee Program (PNP){" "}
                    </a>
                  </strong>
                  nomination adds an additional 600 points, significantly
                  improving your chances of being selected.
                </li>
              </ul>
              Candidates with strong qualifications in education, work
              experience, and language proficiency typically achieve higher
              Comprehensive Ranking System (CRS) scores, making them ideal
              candidates for Express Entry. The CRS score determines whether you
              receive an Invitation to Apply (ITA) for permanent residency.
            </div>

            <div class="pages-header-2" ref={improveRef}>
              How to Improve Your CRS Score?
            </div>
            <div class="pages-paragraph">
              <strong>Express Entry draw:</strong>
              <ul className="my-2 ml-3">
                <li>
                  Retake your language test to score higher in English or
                  French.
                </li>

                <li>
                  Pursue further studies in Canada which can help in gaining
                  more points.
                </li>

                <li>
                  Apply for a nomination through one of Canada’s provinces,
                  which can add 600 points to your CRS score.
                </li>

                <li>
                  Securing a valid job offer from a Canadian employer can also
                  boost your score.
                </li>
              </ul>
              Candidates can use the CRS calculator to estimate their score
              before submitting their profile.
            </div>

            <div class="pages-header-2" ref={workRef}>
              How Does Express Entry for Canada Work?
            </div>
            <div class="pages-paragraph">
              If you're looking to obtain Canadian permanent residency from
              India, the first step is to create an Express Entry profile.
              Here’s a step-by-step breakdown of the process:
              <ol
                style={{ listStyle: "decimal", listStylePosition: "inside" }}
                className="my-2 ml-3"
              >
                <li>
                  To be eligible for <strong>Express Entry of Canada</strong>,
                  applicants must meet the criteria of one of the three federal
                  programs: FSWP, FSTP, or CEC. The most common are education,
                  language proficiency (English or French), and work experience.
                </li>

                <li>
                  Candidates create an online profile where they provide details
                  like age, education, work experience, and language
                  proficiency. Using the{" "}
                  <strong>Express Entry points calculator</strong>, the profile
                  is assigned a Comprehensive Ranking System (CRS) score out of
                  1200.
                </li>

                <li>
                  IRCC conducts Express Entry draws approximately every two
                  weeks, selecting top candidates from the pool to receive an
                  Invitation to Apply (ITA) for permanent residency. Keeping an
                  eye on the Express Entry latest draw Canada updates is
                  important to stay informed about current cut-off scores and
                  trends.
                </li>

                <li>
                  If selected, candidates have 60 days to submit a complete
                  application for Canada permanent residency. The application
                  process involves submitting required documents like proof of
                  education, work experience, language tests, and police
                  clearances.
                </li>

                <li>
                  On average, the processing time for Express Entry PR
                  applications is around six months, but this can vary. IRCC
                  aims to process the majority of applications within this
                  timeframe.
                </li>
              </ol>
              By following these steps and staying informed about the latest
              updates, you can navigate the Express Entry program effectively
              and increase your chances of becoming a permanent resident of
              Canada.
            </div>

            <div class="pages-header-2" ref={costRef}>
              How to Improve Your CRS Score?
            </div>
            <div class="pages-paragraph">
              The
              <strong> Express Entry cost </strong> involves various fees at
              different stages:
              <div className="my-4">
                Immigrating to Canada through Express Entry is about $2,300 CAD
                for a single applicant, or about $4,500 CAD for a couple.{" "}
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Express Entry application fee: </strong>
                  $1,365 CAD (including the right of permanent residence fee).
                </li>

                <li>
                  <strong>Language test fees: </strong>
                  Average $300 (IELTS or CELPIP)
                </li>

                <li>
                  <strong>Educational Credential Assessment (ECA): </strong>
                  Ranges from $200 to $300 CAD.
                </li>

                <li>
                  <strong>Biometrics Fee: </strong>
                  CAD $85 per person
                </li>
                <li>
                  <strong>Medical Examination Fees: </strong>
                  CAD $450 per adult and CAD $250 per child.
                </li>
                <li>
                  <strong>Police Clearance Certificates: </strong>
                  CAD $100
                </li>
                <li>
                  <strong>Government Fees*: </strong>
                  When you receive an Invitation to Apply (ITA), you will need
                  to pay CAD $1,525 for adults and CAD $260 for children.
                </li>
              </ul>
              <strong>*Note:</strong> There are no government fees for
              submitting your initial Express Entry profile. Fees are only
              required when you are invited to apply for permanent residency.
              Additionally, if you apply through a Provincial Nominee Program
              (PNP), you might incur provincial immigration fees.
              <div className="mt-4">
                You must also demonstrate that you have sufficient funds to
                support your initial settlement in Canada unless you are
                applying under the Canadian Experience Class or have a valid job
                offer. These funds are not a government fee but are required to
                show that you can support yourself and your family in Canada.
              </div>
            </div>

            <div class="pages-header-2" ref={drawsRef}>
              Express Entry Draws
            </div>
            <div class="pages-paragraph">
              Express Entry draws are held by{" "}
              <strong>
                Immigration, Refugees and Citizenship Canada (IRCC)
              </strong>{" "}
              to select candidates for Canadian permanent residency. These draws
              can be either general or program-specific:
              <ol
                style={{ listStyle: "decimal", listStylePosition: "inside" }}
                className="my-2 ml-3"
              >
                <li>
                  <strong>All-Program Express Entry Draw</strong>
                  <br />
                  This type of draw invites candidates from various federal
                  economic immigration programs based solely on their CRS score.
                  Eligible programs include:
                  <ul className="ml-4">
                    <li>Federal Skilled Workers Program (FSWP)</li>
                    <li>Federal Skilled Trades Program (FSTP)</li>
                    <li>Canadian Experience Class (CEC)</li>
                    <li>Provincial Nominee Program (PNP)</li>
                  </ul>
                </li>

                <li>
                  <strong>PNP Express Entry Draw</strong>
                  <br />
                  The PNP Express Entry draw focuses on candidates who have been
                  nominated by Canadian provinces. These draws are common and
                  target skilled workers in high-demand occupations specific to
                  the needs of each province. A Provincial Nomination adds 600
                  points to a candidate's CRS score, significantly boosting
                  their chances of receiving an Invitation to Apply (ITA).
                </li>

                <li>
                  <strong>Category-Based Selection Draws</strong>
                  <br />
                  In category-based draws, the Canadian government invites
                  candidates based on specific categories established to meet
                  economic goals. These draws focus on candidates who meet
                  eligibility for a particular category. The current categories
                  include:
                  <ul className="ml-4">
                    <li>French-language proficiency</li>
                    <li>Healthcare occupations</li>
                    <li>
                      STEM occupations (Science, Technology, Engineering, Math)
                    </li>
                    <li>Trade occupations</li>
                    <li>Transport occupations</li>
                    <li>Agriculture and agri-food occupations</li>
                  </ul>
                </li>
              </ol>
              When candidates have the same CRS score, IRCC uses the date and
              time the profile was submitted as a tie-breaker.
            </div>

            <div class="pages-header-2" ref={latestdrawsRef}>
              Monitoring the Express Entry Latest Draws
            </div>
            <div class="pages-paragraph">
            The minimum CRS score required to receive an ITA changes with each draw. Therefore, staying updated on Express Entry's latest draw results is important for candidates to adjust their profiles and improve their ranking. The  <strong>
              Express Entry draw Canada
              </strong> is typically held bi-weekly, and the CIC Canada score cut-off varies based on the pool of candidates.
            
             
           <div className='mt-4'>The <strong>Express Entry</strong> of Canada is designed to be fast, transparent, and efficient. It allows qualified candidates to receive Canada permanent residency within months, and it is a key pathway for skilled workers looking to build a future in Canada. The flexibility of the system allows applicants to update their profiles with new qualifications or skills, improving their chances of selection.</div>
            </div>

            <div class="pages-header-2" ref={validityRef}>
            Validity of Express Entry Profile
            </div>
            <div class="pages-paragraph">
            The Express Entry process is designed to be efficient, with applications processed within six months from submission to the issuance of a permanent resident visa. However, there are specific timeframes and steps involved:

            <ul className="my-2 ml-3">
                <li>
                  Your Express Entry profile will remain active in the pool for 12 months if you do not receive an Invitation to Apply (ITA) during that time.
                </li>

                <li>
                After 12 months, you can resubmit your profile to continue being considered for future draws.

                </li>
                <li>
                Once you receive an ITA, you have 60 days to submit the complete application and provide all necessary documents.
                </li>

                <li>
                After your full application is received, IRCC typically processes the permanent residency application in about six months.

                </li>

                
              </ul>

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
