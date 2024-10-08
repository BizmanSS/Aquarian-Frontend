import React, { useRef } from "react";
import "./CrsCalculator.css";
import FaqBox from "../../shared/NestedFaqBox.jsx";
import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";

import ReadyToStartCard from "../../shared/ReadyToStart.jsx";

import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";


const languageProficiencyTableData = [
  {
    level: "CLB 10",
    speaking: "7.5+",
    listening: "8.5+",
    reading: "8.0+",
    writing: "7.5+",
    single: "34",
    spouse: "32",
  },
  {
    level: "CLB 9",
    speaking: "7.0",
    listening: "8.0",
    reading: "7.0",
    writing: "7.0",
    single: "31",
    spouse: "29",
  },
  {
    level: "CLB 8",
    speaking: "6.5",
    listening: "7.5",
    reading: "6.5",
    writing: "6.5",
    single: "23",
    spouse: "22",
  },
  {
    level: "CLB 7",
    speaking: "6.0",
    listening: "6.0",
    reading: "6.0",
    writing: "6.0",
    single: "17",
    spouse: "16",
  },
  {
    level: "CLB 6 or below",
    speaking: "<6.0",
    listening: "<6.0",
    reading: "<6.0",
    writing: "<6.0",
    single: "0",
    spouse: "0",
  },
];

const ageTableData = [
  {
    age: "20–29",
    single: "110 points",
    spouse: "100 points",
  },
  {
    age: "30",
    single: "105",
    spouse: "95",
  },
  {
    age: "40",
    single: "50",
    spouse: "45",
  },
  {
    age: "45 or older",
    single: "0",
    spouse: "0",
  },
];
const eduTableData = [
  {
    education: "Less than secondary school",
    single: "0 points",
    spouse: "0 points",
  },
  {
    education: "Secondary school credential",
    single: "30",
    spouse: "28 for PA; 2 for spouse",
  },
  {
    education: "One-year post-secondary program",
    single: "90",
    spouse: "84 for PA; 6 for spouse",
  },
  {
    education: "Two-year post-secondary program",
    single: "98",
    spouse: "91 for PA; 7 for spouse",
  },
  {
    education: "Post-secondary program (3+ years)",
    single: "120",
    spouse: "112 for PA; 8 for spouse",
  },
  {
    education: "Master's or entry-to-practice degree",
    single: "135",
    spouse: "126 for PA; 10 for spouse",
  },
  {
    education: "Master's or entry-to-practice degree",
    single: "150",
    spouse: "140 for PA; 10 for spouse",
  },
];
const expTableData = [
  {
    experience: "Less than 1 year",
    single: "0 points",
    spouse: "0 points",
  },
  {
    experience: "1 year",
    single: "40",
    spouse: "35 for PA; 5 for spouse",
  },
  {
    experience: "5 years or more",
    single: "80",
    spouse: "70 for PA; 10 for spouse",
  },
];

const calculateTableData = [
  {
    experience: "Core Human Capital Factors",
    single: "Maximum 500 points",
    spouse: "Maximum 460 points (PA) + 40 points (spouse)",
  },
  {
    experience: "Skill Transferability Factors",
    single: "Maximum 100 points",
    spouse: "Maximum 100 points",
  },
  {
    experience: "Additional Factors",
    single: "Maximum 600 points",
    spouse: "Maximum 600 points",
  },
  {
    experience: "Total CRS Points Available",
    single: "1,200 points",
    spouse: "1,200 points",
  },
];

const faqItems = [
  {
    question: "Do I get more CRS points if I apply with a spouse",
    answer: "Yes, applying with a spouse can impact your CRS score. When applying with a spouse or common-law partner, the points are distributed differently between the principal applicant and the spouse. You can gain additional points for your spouse's education, language proficiency, and Canadian work experience. However, certain individual factors, like age or language skills, might contribute fewer points when applying with a spouse compared to applying alone.",
  },
  {
    question: "How important is the CRS score?",
    answer: "The CRS score is crucial for the Express Entry system as it determines your rank in the pool of candidates. Your score impacts your chances of receiving an Invitation to Apply (ITA) for permanent residency. Higher CRS scores increase your chances of being selected in Express Entry draws, making it an essential component for immigration to Canada."
 
  },
  {
    question: "What is the minimum CRS score needed to enter the pool?",
    answer: "There is no specific minimum CRS score required to enter the Express Entry pool. However, you must meet the eligibility criteria for one of the three programs (Federal Skilled Worker Program, Federal Skilled Trades Program, or Canadian Experience Class) to enter the pool. Once eligible, you will receive a CRS score based on your qualifications."
  },
  {
    question: "What is a CRS score cutoff?",
    answer: "The CRS score cutoff is the minimum score that candidates must have in order to receive an ITA during an Express Entry draw. The cutoff score varies with each draw and is determined by factors like the number of candidates in the pool and Canada’s immigration targets at the time."
  },
  {
    question: "What is the CRS tie-breaking rule?",
    answer: "The CRS tie-breaking rule is used when multiple candidates have the same CRS score. In these cases, IRCC uses the date and time candidates submitted their Express Entry profiles as the tie-breaker. The candidate who submitted their profile earlier will receive the ITA if there’s a tie in CRS scores."
  },
  {
    question: "How can I calculate my CRS score?",
    answer: "You can use our CRS calculator to estimate your score. The calculator takes into account factors like your age, education, language proficiency, work experience, and whether you have a spouse or a provincial nomination. It's a helpful tool for understanding your standing in the Express Entry pool."
  },
  {
    question: "How can I improve my CRS score?",
    answer: "There are several ways to improve your CRS score:",
    listAnswer: [
      
      "Retake language tests (IELTS/CELPIP/TEF) to achieve a higher score.",
      "Gain more work experience or obtain a job offer in Canada",
      "Pursue further education or obtain a Canadian educational credential.",
      "Apply to a Provincial Nominee Program (PNP) for a nomination, which adds 600 points to your CRS score.",
    ]
  },
  {
    question: "Can I update my profile after submitting it to improve my CRS score?",
    answer: "Yes, you can update your Express Entry profile at any time before receiving an ITA. You can add new information such as higher language test scores, additional work experience, or a Provincial Nomination to improve your CRS score.",
  },
  {
    question: "What happens if my CRS score is just below the cut-off?",
    answer: "If your CRS score is slightly below the cut-off, you can either wait for future draws (as cut-off scores may fluctuate) or work on improving your score by enhancing your language skills, gaining more work experience, or applying for a PNP. You can also consider alternative immigration pathways like the Atlantic Immigration Program (AIP) or Rural and Northern Immigration Pilot (RNIP).",
  },
  {
    question: " How long does it take to receive an ITA after submitting an Express Entry profile?",
    answer: "The time it takes to receive an ITA varies based on your CRS score and the cut-offs in subsequent Express Entry draws. Draws are held approximately every two weeks, and if your score is above the cut-off, you may receive an ITA in the next draw.",
  },
  {
    question: "Are there alternative immigration pathways if my CRS score is low?",
    answer: "Yes, if your CRS score is low, you can explore alternative immigration pathways such as:",
    listAnswer: [
      
      "Atlantic Immigration Program (AIP): A program targeting skilled workers willing to live in Canada’s Atlantic provinces.",
      "Rural and Northern Immigration Pilot (RNIP): Targets skilled workers willing to work in rural areas of Canada. Both of these programs may have lower CRS or eligibility requirements compared to Express Entry.",

    ]
  },
    {
    question: "How often are Express Entry draws conducted?",
    answer: "Express Entry draws are usually conducted every two weeks. However, the frequency can vary, and additional draws may be held for specific immigration programs, like Provincial Nominee Programs or occupation-based draws.",
  },
  {
    question: "Can I reapply for Express Entry if I don’t receive an ITA?",
    answer: "Yes, if you don’t receive an ITA, your Express Entry profile will remain valid for 12 months. After that, you can create a new profile if you’re still interested in immigrating to Canada. You can also improve your score during this time by updating your profile with new qualifications.",
  },
];

export default function PR() {
  const aboutRef = useRef(null);
  const mattersRef = useRef(null);
  const workRef = useRef(null);
  const additionalRef = useRef(null);
  const mythsRef = useRef(null);
  const programRef = useRef(null);
  const factorRef = useRef(null);
  const skillsRef = useRef(null);
  const partnerRef = useRef(null);
  const calculateRef = useRef(null);
  const minimumRef = useRef(null);
  const improveRef = useRef(null);
  const crsRef = useRef(null);
  const happensRef = useRef(null);
  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "What is CRS?",
      scrollTo: aboutRef,
    },
    {
      title: "Why Your CRS Score Matters?",
      scrollTo: mattersRef,
    },
    {
      title: "How Does the CRS Work?",
      scrollTo: workRef,
      subItems: [
        { title: "Core/Human Capital Factors", scrollTo: factorRef },
        { title: "Skills Transferability", scrollTo: skillsRef },
        { title: "Spouse or Common-Law Partner Factors", scrollTo: partnerRef },
        { title: "Additional Factors", scrollTo: additionalRef },
        { title: "How to Calculate Your CRS Score?", scrollTo: calculateRef },
      ],
    },

    {
      title: "Minimum CRS Score for Express Entry",
      scrollTo: minimumRef,
      subItems: [{ title: "CRS Scores by Program", scrollTo: programRef }],
    },
    {
      title: "How to Improve Your CRS Score?",
      scrollTo: improveRef,
      subItems: [{ title: "Myths Related to CRS", scrollTo: mythsRef }],
    },
    {
      title: "CRS and Provincial Nominee Programs (PNP)",
      scrollTo: crsRef,
    },
    {
      title: "What Happens After You Receive an ITA?",
      scrollTo: happensRef,
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
          h2="Comprehensive Ranking System (CRS)"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Express Entry
              {" > "}CRS for Canadian Immigration
            </div>
            <div class="pages-header">
              CRS <span class="cec-font">(Comprehensive Ranking System) </span>{" "}
              for Canadian Immigration
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Canada is one of the most sought-after destinations for
              individuals seeking a better life. With its welcoming policies and
              strong immigration system, thousands of people choose Canada as
              their new home each year.
              <div className="pages-paragraph">
                One of the most popular pathways for{" "}
                <span className="pages-bold">immigration to Canada</span> is
                through the{" "}
                <span className="pages-bold">Express Entry system </span>, and
                at the heart of this system lies the{" "}
                <span className="pages-bold">
                  Comprehensive Ranking System{" "}
                </span>{" "}
                (CRS).
              </div>
              <div className="pages-paragraph">
                The CRS ranks skilled worker candidates who wish to{" "}
                <span className="pages-bold">immigrate to Canada</span> through
                Express Entry. The <span className="pages-bold">CRS score</span>{" "}
                is based on various criteria: age, education, language skills,
                and work experience.
              </div>
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              What is CRS?
            </div>
            <div className="pages-paragraph">
              The <strong>Comprehensive Ranking System (CRS) </strong>is a
              point-based system used by Immigration, Refugees, and Citizenship
              Canada (IRCC) to assess and rank candidates who apply through the{" "}
              <a
                href="#"
                style={{
                  color: "blue",
                }}
              >
                {" "}
                Express Entry
              </a>{" "}
              system. It plays an important role in selecting immigrants,
              especially skilled workers, for permanent residency in Canada.
              <div className="my-3">
                Introduced in 2015, the Express Entry system manages
                applications for three main immigration programs:
              </div>
              <ol
                style={{ listStyle: "decimal", listStylePosition: "inside" }}
                className="mb-5"
              >
                <li>
                  <span>
                    <strong>Federal Skilled Worker (FSW)</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Federal Skilled Trades (FST)</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Canadian Experience Class (CEC)</strong>
                  </span>
                </li>
              </ol>
              The CRS evaluates candidates based on a range of factors,
              including age, education, work experience, and language
              proficiency. The higher your CRS score, the better your chances of
              receiving an Invitation to Apply (ITA) for permanent residency.
              Every two weeks, Canada conducts Express Entry draws, inviting
              candidates with the highest scores to apply for immigration.
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div class="pages-header-2" ref={mattersRef}>
              Why Your CRS Score Matters?
            </div>

            <div className="pages-paragraph">
              The Comprehensive Ranking System (CRS) is central to Canada's
              immigration process under the <strong>Express Entry </strong>
              system.
              <ul className="my-5">
                <li>
                  It is designed to identify skilled worker candidates who are
                  most likely to succeed in the Canadian job market.
                </li>

                <li>
                  Through a detailed, evidence-based approach, the CRS evaluates
                  and ranks potential immigrants based on key factors that are
                  linked to long-term success in Canada.
                </li>

                <li>
                  The Canadian government, through research, has found that
                  immigrants who arrive young to middle-aged, with strong work
                  experience, high levels of education, and solid language
                  skills, are more likely to integrate well into the Canadian
                  workforce.
                </li>
              </ul>
              Every point counts in the CRS system. A higher score not only
              boosts your chances of being selected but also reflects your
              readiness to integrate and thrive in Canada.
              <div className="">
                Whether it’s improving your language skills, gaining more work
                experience, or securing a Canadian job offer, every effort you
                make to increase your CRS score brings you closer to your dream
                of{" "}
                <a
                  href="#"
                  style={{
                    color: "blue",
                  }}
                >
                  <strong>permanent residency in Canada</strong>
                </a>
                .
              </div>
            </div>

            <div class="pages-header-2" ref={workRef}>
              How Does the CRS Work?
            </div>
            <div class="pages-paragraph">
              When you submit your profile into the Express Entry system, the
              CRS assigns you points based on key factors. It’s designed to
              reward skills and qualifications that are valuable in Canada’s job
              market.
              <p
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                The system evaluates each candidate (and their spouse or
                common-law partner, if applicable) based on their{" "}
                <strong>human capital characteristics</strong>. The maximum
                possible CRS score is <strong>1,200 points</strong>, broken down
                into several key categories:
              </p>
            </div>
            <ol style={{ listStyle: "decimal", listStylePosition: "inside" }}>
              <li>
                <span class="pages-bold">
                  Core/Human Capital Factors (Up to 500 Points for Singles or
                  460 Points with a Spouse)
                </span>

                <div className="mt-3">
                  This section evaluates your personal characteristics,
                  including age, education, work experience, and language
                  proficiency.
                </div>

                <ul>
                  <li>
                    <span>
                      <strong>Age: </strong>Younger candidates tend to score
                      higher. For example, those aged 20–29 receive the maximum
                      points.
                    </span>

                    <div>
                      <div className="table-container">
                        <table className="responsive-table">
                          <thead>
                            <tr>
                              <th>Age (Years)</th>
                              <th>Single Candidate</th>
                              <th>With Spouse/Partner</th>
                            </tr>
                          </thead>
                          <tbody>
                            {ageTableData.map((row, index) => (
                              <tr key={index}>
                                <td>{row.age}</td>
                                <td>{row.single}</td>
                                <td>{row.spouse}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span>
                      <strong>Education: </strong>Higher educational
                      achievements result in more points. A PhD earns the
                      highest points, but even having a secondary school diploma
                      earns you something.
                    </span>

                    <div>
                      <div className="table-container">
                        <table className="responsive-table">
                          <thead>
                            <tr>
                              <th>Education Level</th>
                              <th>Single Candidate</th>
                              <th>With Spouse/Partner</th>
                            </tr>
                          </thead>
                          <tbody>
                            {eduTableData.map((row, index) => (
                              <tr key={index}>
                                <td>{row.education}</td>
                                <td>{row.single}</td>
                                <td>{row.spouse}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>

                  <li>
                    <span>
                      <strong>Work Experience: </strong>Canadian work experience
                      is highly valued, but foreign experience also adds points.
                      More years of work experience means more points.
                    </span>

                    <div>
                      <div className="table-container">
                        <table className="responsive-table">
                          <thead>
                            <tr>
                              <th>Education Level</th>
                              <th>Points</th>
                              <th>Points</th>
                            </tr>
                          </thead>
                          <tbody>
                            {expTableData.map((row, index) => (
                              <tr key={index}>
                                <td>{row.experience}</td>
                                <td>{row.single}</td>
                                <td>{row.spouse}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>
                  <li>
                    <span>
                      <strong>Language Proficiency: </strong>High scores in
                      English or French (using tests like IELTS, CELPIP, or TEF)
                      significantly boost your CRS score. Proficiency in both
                      languages provides even more points.
                    </span>

                    <div>
                      <div className="table-container">
                        <table className="responsive-table">
                          <thead>
                            <tr>
                              <th>CLB Level</th>
                              <th>Speaking</th>
                              <th>Listening</th>
                              <th>Reading</th>
                              <th>Writing</th>
                              <th>CRS Points (Single)</th>
                              <th>CRS Points (With Spouse)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {languageProficiencyTableData.map((row, index) => (
                              <tr key={index}>
                                <td>{row.level}</td>
                                <td>{row.speaking}</td>
                                <td>{row.listening}</td>
                                <td>{row.reading}</td>
                                <td>{row.writing}</td>
                                <td>{row.single}</td>
                                <td>{row.spouse}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <span class="pages-bold">
                  Skills Transferability (Up to 100 Points)
                </span>

                <div className="my-5">
                  This category rewards candidates for combining education, work
                  experience, and language skills. For example, a high level of
                  language proficiency combined with either Canadian or foreign
                  work experience can lead to additional points.
                </div>
              </li>

              <li>
                <span class="pages-bold">
                  Spouse or Common-Law Partner Factors (Up to 40 Points)
                </span>
                <div className="my-5">
                  If you’re applying with a spouse or common-law partner, their
                  education, language proficiency, and work experience can
                  contribute to your CRS score. While they won’t affect every
                  category, they can provide a helpful boost.
                </div>
              </li>

              <li reft={additionalRef}>
                <span class="pages-bold">
                  {" "}
                  Additional Factors (Up to 600 Points)
                </span>
                <div className="my-3">
                  Some more factors that can make a significant difference in
                  your overall CRS score are.
                </div>

                <ul>
                  <li>
                    <strong>Provincial Nomination: </strong>Being nominated by a
                    Canadian province under the Provincial Nominee Program (PNP)
                    gives you 600 additional points, virtually guaranteeing an
                    invitation.
                  </li>
                  <li>
                    <strong>Job Offer: </strong>A valid job offer from a
                    Canadian employer can add up to 200 points.
                  </li>
                  <li>
                    <strong>Canadian Study Experience: </strong>If you’ve
                    studied in Canada, you can earn additional points.
                  </li>

                  <li>
                    <strong>Siblings in Canada: </strong>Having a sibling who is
                    a Canadian citizen or permanent resident also adds points to
                    your profile.
                  </li>
                </ul>
              </li>
            </ol>

            <div class="pages-header-2" ref={calculateRef}>
              How to Calculate Your CRS Score?
            </div>
            <div className="pages-paragraph">
              Your CRS score is calculated based on a combination of the above
              factors. You can use the CRS calculator to get an estimate of your
              score.
              <div className="my-3">
                For example, let's say you're 30 years old, hold a bachelor's
                degree, have three years of foreign work experience, and score
                highly on your IELTS test. Your initial CRS score might be
                around 450. If you improve your language proficiency or secure a
                provincial nomination, your score could jump significantly.
              </div>
              <div>
                <div className="table-container">
                  <table className="responsive-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Without Spouse/Common-law Partner</th>
                        <th>With Spouse/Common-law Partner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {calculateTableData.map((row, index) => (
                        <tr key={index}>
                          <td>{row.experience}</td>
                          <td>{row.single}</td>
                          <td>{row.spouse}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="my-3">Additional Factors Include:</div>
              <ul>
                <li>Provincial Nomination (600 points)</li>
                <li>Job Offer from a Canadian Employer (up to 200 points)</li>
                <li>Canadian Study Experience</li>
                <li>Sibling in Canada (citizen or permanent resident)</li>
                <li>French Language Proficiency</li>
              </ul>
            </div>

            <div class="pages-header-2" ref={minimumRef}>Minimum CRS Score for Express Entry</div>
            <div className="pages-paragraph">
            The CRS cut-off score changes with each Express Entry draw, which happens every two weeks. Candidates with scores higher than the cut-off receive an Invitation to Apply (ITA) for permanent residency. In recent years, the cut-off has ranged between 450 and 490 points, but it can vary depending on the draw.
            
            </div>

            <div class="pages-header-2" ref={programRef}>
            CRS Scores by Program
            </div>
            <div className="pages-paragraph">
            While the CRS score is central to the Express Entry system, it is important to understand how it applies to the 3 specific immigration programs under Express Entry. 
              <ul>
                <li>
                  <strong><a href='https://www.iaquarian.com/immigrate/express-entry/federal-skilled-worker-class' style={{
                    color:'blue'
                  }}>Federal Skilled Worker (FSW): </a></strong>
                  To qualify for the FSWC, applicants must first meet the basic
                  67 points eligibility criteria.
                </li>
                <li>
                <strong><a href='https://www.iaquarian.com/immigrate/express-entry/federal-skilled-trades-class' style={{
                    color:'blue'
                  }}>Federal Skilled Trades (FST): </a></strong>
                  To qualify for the FSWC, applicants must first meet the basic
                  67 points eligibility criteria.
                </li>
                <li>
                <strong><a href='https://www.iaquarian.com/immigrate/express-entry/canadian-experience-class' style={{
                    color:'blue'
                  }}>Canadian Experience Class (CEC): </a></strong>
                  To qualify for the FSWC, applicants must first meet the basic
                  67 points eligibility criteria.
                </li>
              </ul>
            </div>


            <div class="pages-header-2" ref={improveRef}>
            How to Improve Your CRS Score?"
            </div>
            <div className="pages-paragraph">
            You can improve your CRS score by:
              <ul className="my-5">
                <li>
                  <strong>Improve Your Language Skills: </strong>
                  Even small improvements in your language scores can significantly impact your CRS. Retaking your IELTS/CELPIP or learning French (and taking the TEF) can earn you additional points. Achieving CLB 9 or higher in all language bands can maximize your score in the language and skills transferability sections.
                </li>
                <li>
                <strong>Gain More Work Experience: </strong>
                Canadian work experience adds significant points. Applying for a Temporary Work Visa or participating in Canada’s International Experience Canada (IEC) program can help you gain Canadian work experience. For foreign experience, the key is demonstrating continuous, full-time skilled work.

                </li>
                <li>
                <strong>Increase Your Education: </strong>
                Consider pursuing a Canadian post-secondary education, which earns additional CRS points. Even completing a one-year diploma or certificate in Canada can help increase your score. Additionally, getting an Educational Credential Assessment (ECA) for foreign degrees is important to earn points for foreign education.
                </li>
                <li>
                <strong>Provincial Nomination: </strong>
                Applying for the Provincial Nominee Program (PNP) can automatically add 600 points to your score, virtually guaranteeing you an ITA.
                </li>
                <li>
                <strong>Job Offer: </strong>
                Securing a valid job offer from a Canadian employer will also increase your points.

                </li>
                <li>
                <strong>Apply with Your Spouse: </strong>
                If your spouse has strong qualifications, applying together can increase your overall score.
                </li>
              </ul>
              Since the points decline after the age of 30, younger candidates should submit their profiles as early as possible. For older candidates, other factors like language proficiency or a provincial nomination can offset the loss in points.

            </div>

            <div class="pages-header-2" ref={mythsRef}>
            Myths Related to CRS
            </div>
            <div className="pages-paragraph">
           
            <ol
                style={{ listStyle: "decimal", listStylePosition: "inside" }}
                className=""
              >
                <li>
                  <span>
                    <strong>Only young people can score well. </strong>While age is a factor, older applicants can still score high if they have strong work experience, language proficiency, or a provincial nomination.
                  </span>
                </li>
                <li>
                  <span>
                    <strong>CRS scores are fixed. </strong>In fact, you can actively work on improving your score by enhancing your language skills or gaining more experience.
                  </span>
                </li>
              </ol>

            </div>

            <div class="pages-header-2" ref={crsRef}>
          CRS and Provincial Nominee Programs (PNP)
            </div>
            <div className="pages-paragraph">
            Provincial Nominee Programs (PNPs) are important for candidates with lower CRS scores. By applying to a PNP, you can add up to 600 points to your score, effectively guaranteeing an ITA. The popular PNPs are:
              <ul className="my-3">
                <li>
                  <strong>Ontario Immigrant Nominee Program (OINP): </strong>
                  OINP regularly invites candidates from Express Entry with CRS scores ranging between 400 and 500. Popular streams include the Human Capital Priorities stream, which focuses on high-demand occupations like IT, healthcare, and business management.
                </li>
                <li>
                <strong>British Columbia Provincial Nominee Program (BCPNP): </strong>
                The BC PNP Tech stream targets individuals in IT occupations. It often holds separate draws for tech workers and invites candidates with slightly lower CRS scores.
                </li>
                <li>
                <strong>Alberta Immigrant Nominee Program (AINP): </strong>
                AINP regularly invites candidates with CRS scores as low as 300, especially if they have strong ties to Alberta or work in an in-demand occupation.
                </li>
              </ul>

              Each province has its own nomination criteria, and it's important to monitor specific program requirements, as they can vary from draw to draw.
            </div>

            <div class="pages-header-2" ref={happensRef}>
            What Happens After You Receive an ITA?
            </div>
            <div className="pages-paragraph">
            Once you receive an Invitation to Apply (ITA), you will have 60 days to submit a complete application for permanent residency. Key documents you’ll need include:
              <ul className="my-3">
                <li>
                Language test results (IELTS/CELPIP)
                </li>
                <li>
                Educational Credential Assessment (ECA)
                </li>
                <li>
                Proof of work experience (reference letters, contracts)
                </li>
                <li>
                Police certificates from every country where you’ve lived for 6+ months
                </li>
                <li>
                Medical examination results from an approved panel physician
                </li>
                <li>
                Proof of funds (bank statements, investment accounts)
                </li>
              </ul>

              After submission, IRCC will process your application, and if everything is in order, you will receive your confirmation of permanent residence.

              <div className="mt-3">While the CRS system may seem complicated at first, it's designed to ensure that Canada continues to attract talented individuals from all over the world. Immigrating to Canada is a significant step, but with the right planning and preparation, it’s entirely achievable. </div>
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
