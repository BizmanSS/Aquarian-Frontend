import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Application Processing Fees for Canada PR", amount: "$850" },
    { name: "Include Spouse or Partner", amount: "$850" },
    { name: "Include a dependant child", amount: "$230 per child" },
    { name: "Right of Permanent Residence Fee per adult", amount: "$515" },
    { name: "Right of Permanent Residence Fee per child", amount: "Nil" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>FEES</th>
          <th>CAD</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableFactor = () => {
  const data = [
    { name: "Education", amount: "25" },
    { name: "Language Proficiency", amount: "28" },
    { name: "Age", amount: "12" },
    { name: "Work Experience", amount: "15" },
    { name: "Arranged Employment", amount: "10" },
    { name: "Adaptability", amount: "10" },
    { name: "Minimum Pass Score", amount: "67" },
  ];

  return (
    <table>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableStudent = () => {
  const data = [
    { name: "1", amount: "$13,757" },
    { name: "2", amount: "$17,127" },
    { name: "3", amount: "$21,055" },
    { name: "4", amount: "$25,564" },
    { name: "5", amount: "$28,994" },
    { name: "6", amount: "$32,700" },
    { name: "7", amount: "$36,407" },
    { name: "For each additional family member", amount: "$3,706" },
    {
      name: (
        <p style={{ fontStyle: "italic" }}>Required amount as of May, 2023</p>
      ),
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Number of Family Members</th>
          <th>Funds Required</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function FederalSkilledWorkerClass() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Immigrate
          {" > "}
          <Link to="/immigrate/express-entry">Express Entry</Link>
          {" > "}Federal Skilled Worker Class
        </p>
        <div className="header-content">
          <h1 className="heading-about">Federal Skilled Worker Class</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Federal Skilled Worker (FSW) program is one of the three programs
        contained within Canada’s Express Entry system for processing
        immigration applications. The FSW program allows candidates with foreign
        work experience and no connections to Canada to apply for permanent
        residency.
        <br />
        <br />
        <bold>What is the FSW program?</bold>
        <br />
        <br />
        The Federal Skilled Worker (FSW) program is managed under the Express
        Entry system and uses the Comprehensive Ranking System (CRS) to rank
        candidates who wish to settle permanently in Canada. Unlike the Canadian
        Experience Class (CEC) candidates, Federal Skilled Workers are not
        required to have Canadian work experience to enter the Express Entry
        pool. Instead, candidates must meet a minimum points requirement based
        on factors such as work experience, language ability, and education.
        Once in the pool,{" "}
        <bold>
          applicants with the most competitive CRS scores will receive
          invitations to apply for Canadian permanent residence. Who is eligible
          to apply under the FSW program?
        </bold>
        <br />
        <br />
        In order to qualify for the FSWP, a candidate must meet certain minimum
        requirements regarding years of experience, level of education, age, and
        English or French language proficiency:
        <br />
        <br />
        <ul>
          <li>
            <bold>Work Experience</bold> <br />
            <ul>
              <br />
              <li>
                At least 12-months of continuous, full-time, skilled work
                experience completed within the previous 10 years (or an equal
                amount in part-time experience).
                <ul>
                  <br />
                  <li>
                    Skilled work experience refers to experience classified
                    under NOC Skill Level 0, A, or B.{" "}
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <br />
          <li>
            {" "}
            <bold>Language Proficiency</bold>
            <ul>
              <br />
              <li>
                Reach a minimum of Canadian Language Benchmark (CLB) level 7 on
                an approved English or French language test.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <bold>Education</bold>
            <ul>
              <br />
              <li>
                A minimum of a Canadian high school diploma or the equivalent in
                foreign education.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <bold>Financial Support</bold>
            <ul>
              <br />
              <li>
                Enough funds to support themselves and any spouse and/or
                children in their settlement in Canada.
              </li>
            </ul>
          </li>
          <br />
          <li>
            <bold>Residence in Canada</bold>
            <ul>
              <br />
              <li>Must intend to live outside of the province of Quebec.</li>
            </ul>
          </li>
        </ul>
        <br />
        If a candidate meets the requirements listed above, they must also
        demonstrate that they score a minimum of 67 out of 100 points on the FSW
        eligibility points grid.
        <br />
        <br />
        <bold>How can I apply under the FSW program?</bold>
        <br />
        <br />
        Interested candidates must submit an Express Entry profile to
        Immigration, Refugees and Citizenship Canada (IRCC). Submitting an
        Express Entry profile does not guarantee a candidate will receive
        Canadian permanent residence. Only after submitting an Express Entry
        profile will a candidate be assigned a CRS score and be considered in
        future Express Entry draws for Invitations to Apply (ITAs) for permanent
        residence.
        <br />
        <br />
        When submitting your Express Entry profile, an FSW candidate will need
        to provide the following documents: <br />
        <br />
        <ul>
          <li>
            <bold>Educational Credentials Assessment (ECA)</bold>
            <br />
            In order to claim points for education, an FSW candidate must
            provide a valid ECA report attesting to the value of foreign
            education by Canadian standards. There are five organisations in
            Canada authorised to issue ECA reports. This is not required for
            educational credentials obtained from a Canadian educational
            institution.
          </li>
          <br />
          <li>
            <bold>Language Proficiency Test Results</bold>
            <br />
            All candidates under the Express Entry programs must provide results
            from an approved language test taken within the previous two years.
            Accepted tests for English include the IELTS exam, and the CELPIP
            exam (only available in Canada). Accepted tests for French include
            the Test d’Évaluation de Français (TEF) and the Test de connaissance
            du français pour le Canada (TCF Canada).
          </li>
          <br />
          <li>
            <bold>Identification Documents</bold> <br />
            Candidates will be required to provide information from
            identification documents. Ideally, a candidate and all accompanying
            family members should possess passports valid for travel.
          </li>
        </ul>
        <br />
        If a candidate is successful in receiving an Invitation to Apply (ITA)
        for Canadian permanent residence, they will move onto the second stage
        of the application process. In this second stage, the applicant will
        have 60 days to prepare and submit an electronic Application for
        Permanent Residence (eAPR). This application requires further
        documentation.
        <br />
        <br />
        <bold>How long does it take to process an FSW application?</bold> <br />
        <br />
        A Federal Skilled Worker (FSW) Express Entry profile will remain valid
        in the pool of candidates for a period of 12 months.
        <br />
        <br />
        If, while in the pool of candidates, you receive an Invitation to Apply
        (ITA), you will have 60 days to submit a full application and
        documentation to the Government of Canada.
        <br />
        <br />
        The standard processing time for Express Entry applications is six
        months from the time the application is received by the Canadian
        authorities to the issuance of a permanent residence visa.
        <br />
        <br />
        Additional factors may affect your processing time, including:
        <br />
        <br />
        <ul>
          <li>The complexity and/or completeness of your application</li>
          <li>
            The ease with which the officer can confirm the information provided
            in your application
          </li>
          <li>Adding an additional family member to your application</li>
        </ul>
        <br />
        <bold>Am I required to show settlement funds for FSW?</bold>
        <br />
        <br />
        Federal Skilled Workers are required to demonstrate that they can
        provide for themselves and their families once they settle in Canada
        except in cases where candidates have an offer of employment from a
        Canadian company.
        <br />
        <br />
        The funds required for settlement depend on the number of family members
        included in your application. Please refer to the below table for the
        amount required for your family size.
        <br />
        <br />
        <TableStudent />
        <br />
        <bold>
          What are the processing fees to apply under the FSW program?
        </bold>
        <br />
        <br />
        The government processing fees must be remitted when submitting an
        application for permanent residence under the Federal Skilled Worker
        program. These fees are separate from a candidate’s settlement funds,
        which must be demonstrated as part of the Federal Skilled Worker
        eligibility requirements.
        <br />
        <br />
        The processing fees to apply under the Federal Skilled Worker program
        are as follows: <br />
        <br />
        <Table /> <br />
        <bold>
          Do I need to provide language test results for the FSW program?
        </bold>
        <br />
        <br />
        To apply under the Federal Skilled Worker program, candidates must
        provide results from an approved language exam. To meet the minimum
        eligibility requirements, Federal Skilled Workers must score at least a
        CLB 7 or higher in each area of the language exam.
        <br />
        <br />
        <bold>How do I calculate Federal Skilled Worker points?</bold>
        <br />
        <br />
        In order to submit a program under the Federal Skilled Worker Program
        (FSWP), you must meet a minimum score of 67 on the FSW points grid. To
        calculate your Federal Skilled Worker score, you can check your points
        against the grids below.
        <br />
        <br />
        For a free assessment of your eligibility for the Federal Skilled Worker
        Program, complete our free online assessment form today!
        <br />
        <br />
        <br />
        <a href="/assessment" className="button">
          Free Assessment
        </a>
        <br />
        <br />
        <br />
        <TableFactor /> <br />
        <bold>
          What is the difference between my FSW eligibility points and CRS
          score?
        </bold>
        <br />
        <br />
        In order to submit a profile as a Federal Skilled Worker (FSW), you must
        meet the minimum of 67 eligibility points. Once you can submit an
        Express Entry profile to the pool of candidates, you are ranked by the
        Comprehensive Ranking System (CRS) and given a CRS score. All candidates
        that enter the Express Entry pool are given a CRS score, but only FSW
        candidates need to meet the minimum FSW score.
        <br />
        <br />
        <bold>Is there an age limit to apply for under the FSW program?</bold>
        <br />
        <br />
        There is no age limit to apply under the Federal Skilled Worker (FSW)
        program. However, after the age of 35, candidates will begin to lose
        points toward the FSW eligibility requirement. After the age of 29,
        candidates will also lose points toward the age factor of their
        Comprehensive Ranking Score (CRS). For this reason, candidates with
        lower age points may need to increase their eligibility points and CRS
        score through other factors.
        <br />
        <br />
        <bold>
          Can my spouse and children be included in my FSW application?
        </bold>{" "}
        <br />
        <br />
        Individuals applying under the Federal Skilled Worker may include their
        children and spouse on their application for permanent residence.
        However, an applicant should consider how their Comprehensive Ranking
        System (CRS) score may be affected when applying with a spouse.
        <br />
        <br />
        <bold>
          Can I include my parents on my Federal Skilled Worker application?
        </bold>
        <br />
        <br />
        <bold>
          Unfortunately, parents cannot be included on an application for
          permanent residence through the Federal Skilled Worker program.
          However, after becoming a permanent resident, you may be eligible to
          sponsor your parents to come to Canada.
        </bold>
        <br />
        <br />
        <bold>Do I need a job offer to apply under the FSW Program?</bold>{" "}
        <br />
        <br />A job offer is not required for the Federal Skilled Worker
        program. In fact, a large majority of candidates invited under the
        Express Entry system do not have a formal Canadian job offer. That said,
        having a valid job offer may increase a Federal Skilled Worker’s CRS
        score by 50-200 points. To qualify for these points, the job offer will
        likely require a Labour Market Impact Assessment (LMIA).
      </h2>
    </div>
  );
}
