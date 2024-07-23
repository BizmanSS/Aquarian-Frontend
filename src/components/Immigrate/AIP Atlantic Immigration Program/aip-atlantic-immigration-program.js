import React from "react";
const Table = () => {
  const data = [
    { name: "0", level: "5" },
    { name: "A", level: "5" },
    { name: "B", level: "5" },
    { name: "C", level: "4" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "50%" }}>Skill type</th>
          <th style={{ width: "50%" }}>CLB level</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableEducation = () => {
  const data = [
    {
      name: "0",
      level:
        "Minimum 1-year post-secondary credential (Canadian or equivalent)",
    },
    {
      name: "A",
      level:
        "Minimum 1-year post-secondary credential (Canadian or equivalent)",
    },
    {
      name: "B",
      level: "Minimum high school diploma (Canadian or equivalent)",
    },
    {
      name: "C",
      level: "Minimum high school diploma (Canadian or equivalent)",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "20%" }}>Skill type</th>
          <th style={{ width: "80%" }}>Minimum education</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.level}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function AIP() {
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
          {" > "}AIP Atlantic Immigration Program
        </p>
        <div className="header-content">
          <h1 className="heading-about">AIP Atlantic Immigration Program</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Atlantic Immigration Program is designed to stimulate economic
        growth in Canada’s Atlantic provinces by attracting skilled workers. The
        Atlantic provinces include New Brunswick, Newfoundland and Labrador,
        Nova Scotia, and Prince Edward Island.
        <br />
        <br />
        <ul>
          <li>Atlantic Immigration Program Requirements</li>

          <li>Employer Designation</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        To qualify for the Atlantic Immigration Program, applicants must have an
        official job offer. Usually, in order to obtain a Canadian job offer
        valid for immigration purposes, the applicant must obtain a Labour
        Market Impact Assessment (LMIA). This is <bold>not required</bold> for
        the Atlantic Immigration Program. Instead, the job offer must be from a{" "}
        <bold>designated employer.</bold>
        <br />
        <br />
        The Atlantic Immigration Program started as a pilot program in 2017 and
        was made permanent at the beginning of 2022. The AIP is responsible for
        welcoming over 6,000 newcomers to Atlantic provinces each year.
        <br />
        <br />
        <sp>Atlantic Immigration Program Requirements</sp>
        <br />
        <br />
        The Atlantic Immigration Program facilitates immigration through
        connecting two parties:
        <br />
        <br />
        <ul>
          1. Foreign nationals interested in becoming residents of Atlantic
          Canada
          <br />
          2. Employers designated by the government to hire foreign nationals
        </ul>
        <br />
        The Atlantic Immigration Program has different requirements for both of
        these parties.
        <br />
        <br />
        <sp>Foreign National Requirements</sp>
        <br />
        <br />
        Foreign nationals interested in immigrating to either New Brunswick,
        Newfoundland and Labrador, Nova Scotia, or Prince Edward Island, may do
        so through the Atlantic Immigration program only if they meet certain
        requirements. First, the foreign national must have an official job
        offer from a designated employer. Please refer to each province’s
        designated employers in the following tables:
        <br />
        <br />
        <ul>
          Designated Employers - Newfoundland & Labrador
          <br />
          Designated Employers - Nova Scotia
          <br />
          Designated Employers - Prince Edward Island
          <br />
          Designated Employers - New Brunswick
        </ul>
        <br />
        Second, the foreign national must meet the eligibility requirements.
        These requirements vary depending on whether the candidate has completed
        qualifying post-secondary education in Atlantic Canada.
        <br />
        <br />
        <sp>Work Experience Requirements</sp>
        <br />
        <br />
        Candidates must have at least one year of paid, full-time work
        experience in the past five years. You may count hours worked abroad, or
        inside Canada on valid status. The work experience must be in National
        Occupational Classification (NOC) skill level 0, A, B, or C.
        <br />
        <br />
        <sp>International Graduate Requirements</sp>
        <br />
        <br />
        Candidates that qualify as eligible international graduates do not need
        to meet the work experience requirements. In order to meet the
        requirements of an international graduate, candidates must:
        <br />
        <br />
        <ul>
          <li>
            Hold a minimum two-year degree, diploma, certificate, or trade or
            apprenticeship certificate; from a recognized post-secondary
            institution in one of the Atlantic provinces;
          </li>
          <li>
            Have been a full-time student for the entirety of their studies;
          </li>
          <li>
            Have lived in one of the Atlantic provinces for at least 16 months
            during the last two years before graduating;
          </li>
          <li>
            Have held the required study permit, and if required, work permit,
            during their studies in Canada
          </li>
        </ul>
        <br />
        Recognized post-secondary institutions
        <br />
        <br />
        <sp>Educational Requirements</sp>
        <br />
        <br />
        Educational requirements will vary depending on the occupational skill
        type of the job offer. Please see the chart below for educational
        requirements by skill type:
        <br />
        <br />
        <TableEducation />
        <br />
        <br />
        If your education was completed outside of Canada, you must provide an
        Educational Credential Assessment.
        <br />
        <br />
        <sp>Language Requirements</sp>
        <br />
        <br />
        The minimum required Canadian Language Benchmark (CLB) level also
        depends on the skill type of the job offer. Please see the chart below
        for language requirements by skill type:
        <br />
        <br />
        <Table />
        <br />
        <br />
        <sp>Proof of Funds</sp>
        <br />
        <br />
        Candidates must also be able to demonstrate sufficient funds to support
        themselves and their families when settling in Canada.
        <br />
        <br />
        <sp>Designated Employer Requirements</sp> <br />
        <br />
        Employers interested in participating in the Atlantic Immigration Pilot
        Program must apply to become designated employers. As a designated
        employer, a business will have the ability to hire foreign nationals
        without obtaining a Labour Market Impact Assessment (LMIA). Designated
        employers are required to assist employees hired through the pilot with
        settlement in their province of residence.
        <br />
        <br />
        <sp>Employer Designation </sp> <br />
        <br />
        In order to hire foreign nationals through the Atlantic Immigration
        Program, first an employer must apply to be officially designated. In
        order to become designated, the employer may apply directly to the
        province where the business for which they want to hire foreign
        nationals is located. The employer will have to demonstrate that they
        are in good standing with any provincial regulatory bodies. They will
        also have to submit a description of their labour needs, including their
        reason for hiring international workers.
        <br />
        <br />
        Finally, designated employers must demonstrate that they can provide
        settlement support to the workers they hire through the Atlantic
        Immigration Program. In order to obtain applications to become a
        designated employer, businesses can consult the immigration webpages of
        the Atlantic provinces: New Brunswick, Newfoundland and Labrador, Nova
        Scotia, and Prince Edward Island.
        <br />
        <br />
        New Brunswick Recruitment Events
        <br />
        <br />
        The province of New Brunswick regularly organises events overseas for
        foreign nationals who wish to immigrate to Canada. Please refer to our
        schedule of upcoming New Brunswick information sessions and job fairs.
        Those who are successful through these information sessions will be
        eligible to immigrate to Canada through the New Brunswick PNP or the
        Atlantic Immigration Program.
      </h2>
    </div>
  );
}
