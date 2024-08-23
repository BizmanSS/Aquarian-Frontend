import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "No" },
    { requirement: "Connection to Province", value: "Work Experience" },
    { requirement: "Job Offer", value: "Yes" },
    { requirement: "Language Proficiency", value: "CLB 4" },
    { requirement: "Level of Education", value: "High School" },
    { requirement: "Work Experience", value: "12 months, minimum" },
    { requirement: "Investment Requirement", value: "No" },
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
            <td>{item.requirement}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function AlbertaOpportunityStream() {
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
          <Link to="/immigrate/provincial-nominee-program/alberta-immigrant-nominee-program">
            Alberta Immigrant Nominee Program
          </Link>
          {" > "}Alberta Opportunity Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Opportunity Stream</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Alberta Opportunity Stream is a stream of the Alberta Immigrant
        Nominee Program, a Provincial Nominee Program (PNP) operated by the
        province of Alberta. This stream targets foreign workers who are already
        living and working in Alberta and who have an offer of employment to
        continue working full-time for an Albertan employer.
        <br />
        <br />
        <ul>
          <li>Eligibility Requirements</li>
        </ul>
        <br />
        <bold>Eligibility Requirements</bold>
        <br />
        <br />
        <Table />
        <br />
        <bold>Connection to Province</bold>
        <br />
        <br />
        Applicants must have valid status as a temporary resident in Canada
        which authorises them to work. The candidate must be residing and
        working in the province of Alberta. Please note that refugee claimants
        are not eligible under this stream. Applicants must have a valid work
        permit (not implied status or restoration status) for an eligible
        occupation based on one of the following scenarios:
        <br />
        <br />
        <ul>
          <li>A positive Labour Market Impact Assessment (LMIA)</li>
          <li>
            A valid LMIA-exemption (including International Experience Canada)
          </li>
          <li>
            A Post-Graduation Work Permit (PGWP) holder must meet additional
            criteria:
            <ul>
              <li>
                The applicant’s occupation must be related to their field of
                study in Alberta
              </li>
            </ul>
          </li>
        </ul>
        <br />
        <bold>Job Offer</bold>
        <br />
        <br />
        At the time an application is postmarked to AINP<bold> and </bold>at the
        time the application is assessed, the applicant must be working in an
        eligible occupation in Alberta which matches their previous work
        experience. Post-Graduation Work Permit holders must also be working in
        an occupation related to their field of study in Alberta. There are two
        lists of ineligible occupations:
        <br />
        <br />
        <ul>
          1.{" "}
          <bold>
            The Alberta Opportunity Stream Ineligible Occupations list:{" "}
          </bold>
          This list applies to all applicants. If your occupation is on this
          list, you are not eligible to apply.
          <br />
          <br />
          2.{" "}
          <bold>
            The List of High-wage and low-wage occupations in the province of
            Alberta as indicated on Canada’s Refusal to Process an LMIA List:
          </bold>
          This list only applies to applicants who hold a Post-Graduation Work
          Permit. If you hold a PGWP and your occupation is on this list, then
          you are not eligible to apply.
          <br />
          <br />
        </ul>
        <br />
        Applicants must have a bona fide full-time job offer from their current
        Alberta employer to continue work in their current occupation. The job
        offer must be signed by the applicant and the employer and must offer
        continuous, full-time, paid work in the applicant’s current occupation
        in Alberta.
        <br />
        <br />
        <bold>Language Proficiency </bold>
        <br />
        <br />
        All applicants must demonstrate proficiency in either English or French,
        equivalent to the Canadian Language Benchmark of Level 4. This must be
        demonstrated by providing valid results from one of Canada’s approved
        language tests. The results must be no more than two years old at the
        time the application is postmarked.
        <br />
        <br />
        Please note that as of January 1st, 2020, the language requirement will
        increase to Canadian Language Benchmark Level 5 in either English or
        French for applicants applying under NOC Skill Levels 0, A, or B.
        Candidates applying under NOC Skill Levels C or D will only require CLB
        4 on their language tests.
        <br />
        <br />
        Please note that applicants with the NOC Code 3413 (nurses aides,
        orderlies, and patient service associates) must achieve a minimum
        language test score of CLB 7 for each English language skill, or NCLC 7
        for each French language skill.
        <br />
        <br />
        <bold>Level of Education</bold>
        <br />
        <br />
        All applicants must have completed a minimum of high school education in
        their country of origin.
        <br />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        At the time the application is postmarked and at the time AINP assesses
        the application, the applicant must be working in an occupation in
        Alberta which matches their previous work experience. PGWP holders must
        also be working in an occupation which matches their Alberta educational
        credential. The applicant must meet one of the three following scenarios
        for work experience:
        <br />
        <br />
        <ul>
          <li>
            A minimum of 12-months full-time work experience in their current
            occupation in Alberta within the last 18 months; or
          </li>
          <li>
            A minimum of 24-months full-time work experience in their current
            occupation in the last 30 months (can be obtained in Canada and/or
            abroad); or
          </li>
          <li>
            For Post-Graduation Work Permit holders: A minimum of 6 months of
            full-time work experience in their current occupation in Alberta
            within the last 18 months. This occupation must be related to their
            Alberta education.
          </li>
        </ul>
        <br />
        Experience must have been full-time (30 hours/week) – part-time
        experience will not be considered. As well, applicants must have the
        proper regulation, licensing, and/or status in Canada to perform the
        occupation legally.
        <br />
        <br />
        <bold>Settlement Funds</bold>
        <br />
        <br />
        Please note that as of November 1st, 2018, AINP removed the requirement
        that applicants demonstrate they meet a minimum annual income. This is
        no longer a requirement of the program.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Alberta Opportunity Stream is always open to new applications.
        Eligible candidates can submit an application at any time and
        applications are processed on a first-come, first-served basis.
        Interested candidates must prepare a complete paper-based application.
        All documents must be prepared in hard copy and submitted in a single
        envelope, by mail, to the AINP office.
        <br />
        <br />
        If the province approves the application, Alberta will notify the
        applicant they have been selected for provincial nomination. Successful
        applicants will receive an official nomination package in the mail from
        AINP.
        <br />
        <br />
        After receiving a provincial nomination, an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}
