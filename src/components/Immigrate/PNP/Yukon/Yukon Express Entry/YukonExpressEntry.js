import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { name: "Express Entry Profile", amount: "Yes" },
    { name: "Connection to Province", amount: "No" },
    { name: "Job Offer", amount: "Yes" },
    {
      name: "Language Proficiency",
      amount: "See Express Entry requirements",
    },
    { name: "Level of Education", amount: "See Express Entry requirements" },
    { name: "Work Experience", amount: "See Express Entry requirements" },
    { name: "Investment Requirement", amount: "None" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Requirement</th>
          <th></th>
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
export default function YukonExpressEntry() {
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
          <Link to="/immigrate/provincial-nominee-program">
            Provincial Nominee Program
          </Link>
          {" > "}
          <Link to="/immigrate/provincial-nominee-program/yukon">Yukon</Link>
          {" > "}Yukon Express Entry
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon Express Entry</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        While rich in land and resources, the sprawling Yukon territory is no
        stranger to labour shortages due to its small population of just over
        30,000 people.
        <br />
        <br />
        <ul>
          <li>Program Requirements </li>
          <li>Employer Requirements</li>
          <li>Application Procedure</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The Yukon government opened Yukon Express Entry (YEE) in 2015, a stream
        of the Yukon Nominee Program (YNP). YEE is aligned with the federal
        Express Entry system, meaning applicants must have an active profile in
        the Express Entry pool to be eligible. Individuals who meet the
        requirements for YEE and have an intent to live and work in the Yukon
        may be eligible to receive a Yukon provincial nomination. Successful
        applicants may claim 600 additional Comprehensive Ranking System (CRS)
        points on their Express Entry profile, and may receive expedited
        permanent residence processing in order to quickly and efficiently
        integrate into Yukon life and workforce.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <Table />
        <br />
        <bold>Express Entry Requirement</bold>
        <br />
        <br />
        Yukon Express Entry is aligned with the federal Express Entry system. To
        be eligible for the stream, candidates must have an active profile in
        the Express Entry pool. To submit a profile to the Express Entry pool,
        applicants must be eligible for at least one of three federal Economic
        programs:
        <br />
        <br />
        <ul>
          <li>
            Federal Skilled Worker requires candidates to have, at minimum, a
            high school diploma, as well as at least one year of continuous
            full-time, skilled work experience. Work experience is considered
            skilled if obtained in a position at National Occupational
            Classification (NOC) Skill Level 0, A, or B. Candidates must also
            demonstrate language proficiency in English or French consistent
            with Canadian Language Benchmark (CLB) level 7.
          </li>
          <li>
            Canadian Experience Class has no minimum education requirement. CEC
            candidates must have a minimum of one year of full-time Canadian
            skilled work experience in the last three years. Work experience is
            considered skilled if obtained in a position at NOC Skill Level 0,
            A, or B. Candidates must also demonstrate language proficiency in
            English or French consistent with CLB level 7 for work experience
            obtained at NOC Skill Level 0 or A and CLB 5 for work experience
            obtained at NOC Skill Level B.
          </li>
          <li>
            Federal Skilled Trades has no minimum education requirement. FST
            candidates must have at least 2 years of full-time work experience
            in a skilled trade occupation. Candidates must also have either an
            offer of employment to work in a skilled trade in Canada or a
            certificate of qualification in their skilled trade issued by a
            Canadian authority. Candidates must also demonstrate language
            proficiency in English or French at CLB Level 5 for speaking and
            listening and CLB 4 for reading and writing.
          </li>
        </ul>
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        Candidates must also have a full-time, permanent job offer from an
        eligible Yukon employer.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        All candidates for the Yukon Express Entry stream must meet the
        settlement funds requirement as determined by Immigration, Refugees and
        Citizenship Canada (IRCC).
        <br />
        <br />
        <sp>Employer Requirements</sp>
        <br />
        <br />
        To be eligible to make a valid job offer to a foreign worker for the
        Yukon Nominee Program (YNP), the Yukon employer must meet certain
        requirements.
        <br />
        <br />
        <bold>Job Offer Requirement</bold>
        <br />
        <br />
        The employer must offer a full-time, indeterminate position with a wage
        that meets industry standards.
        <br />
        <br />
        <bold>Business Requirements</bold>
        <br />
        <br />
        The Yukon business must have been operating in Yukon for at least one
        year. If the business is a non-profit organisation, the business must
        have been in operation for at least three years, and must have secured
        funding for at least one year following the application to the YNP. The
        business must also have current and valid licences to operate in Yukon.
        <br />
        <br />
        <bold>Recruitment Requirements</bold>
        <br />
        <br />
        The employer must demonstrate that reasonable efforts were made to
        recruit a Canadian to fill the position prior to offering the position
        to a foreign national. Employers must meet specific advertising
        requirements, including advertising the position for at least four (4)
        weeks in at least two local and one national recruitment mediums.
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        The Yukon Express Entry stream is open to new applications at any time.
        To apply to the stream, eligible candidates must create an Express Entry
        profile. Once they have received a valid job offer from an employer,
        both the candidate and the employer must submit documentation to support
        their eligibility claims. Applications submitted to the YNP are
        generally processed within eight to ten weeks.
        <br />
        <br />
        If the application is approved, the candidate will receive a nomination
        from Yukon to apply for permanent residence. The applicant will also
        receive a letter of support for a temporary work permit, which the
        applicant can use to apply to IRCC for a work permit so they can begin
        working in Yukon while their application for permanent residence is
        processed. Note that applying for a temporary work permit represents a
        separate application.
        <br />
        <br />
        The applicant must accept the nomination from Yukon on their Express
        Entry profile. After accepting the provincial nomination, the
        applicant’s Comprehensive Ranking System (CRS) score will increase by
        600 points, virtually guaranteeing they will receive an Invitation to
        Apply (ITA) for permanent residence in the next Express Entry draw.
        After receiving an ITA, the applicant must prepare and submit an
        official application for Canadian permanent residence within the
        designated time frame. Applications for permanent residence submitted
        through Express Entry are generally processed within six months.
        <br />
        <br />
      </h2>
    </div>
  );
}
