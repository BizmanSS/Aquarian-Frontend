import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { requirement: "Express Entry Profile", value: "No" },
    { requirement: "Connection to Province", value: "No" },
    { requirement: "Job Offer", value: "No" },
    { requirement: "Language Proficiency", value: "No minimum" },
    { requirement: "Level of Education", value: "No minimum" },
    { requirement: "Work Experience", value: "Farm Management Experience" },
    {
      requirement: "Investment Requirement",
      value: "Investment: $500,000 CAD\nPersonal Net Worth: $500,000 CAD",
    },
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
export default function AlbertaFarmStream() {
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
          {" > "}Alberta Farm Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Farm Stream</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Alberta Farm Stream is an immigration stream of the Alberta
        Immigrant Nominee Program (AINP), a Provincial Nominee Program (PNP)
        operated by the province of Alberta. This stream is designed to target
        experienced farm owners and operators who wish to own and operate a farm
        in Alberta.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Application Procedure</li>
        </ul>
        <br />
        Candidates who are successfully nominated through the Alberta Farm
        Stream will be invited to submit an official application for Canadian
        permanent residence. This program requires a highly individualised
        application based on the type of farm a person is proposing to launch in
        Saskatchewan.
        <br />
        <br />
        The stream is jointly managed by AINP and Alberta Agriculture and
        Forestry (AAF) so applicants will be required to consult with both
        organisations prior to submission.
        <br />
        <br />
        <bold>Program Requirements</bold>
        <br />
        <br />
        <Table />
        <br />
        <bold>Work Experience</bold>
        <br />
        <br />
        All candidates must prove that they have the farm management skills
        required to successfully operate a farm in Alberta. In order to do this,
        AINP requires all applicants to submit financial documents of their
        existing farming business along with proof of education, training, and
        work experience related to farm management. The candidates for this
        stream also must provide an extensive business plan outlining their
        Alberta farm proposal. This plan must include proof that a Canadian
        financial institution is willing to finance the proposed farming
        business.
        <br />
        <br />
        <bold>Investment Requirement</bold>
        <br />
        <br />
        Candidates must prove that they have the financial resources required to
        develop a sustainable farming operation. All candidates must be able to
        invest a minimum of $500,000 CAD of equity in a primary production
        farming business in Alberta. To prove this, candidates must provide
        financial documents demonstrating that they have a minimum net worth of
        at least $500,000 CAD or that they have access to these funds from other
        sources.
        <br />
        <br />
        Please note that the $500,000 CAD is a minimum amount. Alberta reserves
        the right to request applicants to demonstrate that they have the
        ability to invest more than the minimum.
        <br />
        <br />
        All candidates must create and submit a detailed business plan outlining
        how they intend to invest in a primary production farming business in
        Alberta. This business plan must document how the applicant intends to
        utilise their investments. The province will give preference to
        applications representing the best opportunity for growth relevant to
        Alberta’s agri-food needs.
        <br />
        <br />
        <bold>Application Procedure</bold>
        <br />
        <br />
        The Alberta Farm Stream is always open to new applications. Eligible
        candidates can submit an application at any time and applications are
        processed on a first-come, first-served basis. Candidates interested in
        applying should first contact Alberta Immigrant Nominee Program (AINP)
        and Alberta Agriculture and Forestry (AAF) prior to preparing their
        application. Candidates must be assessed by Alberta Agriculture and
        Rural Development before they can submit an application.
        <br />
        <br />
        As the application requires applicants to provide evidence they have
        researched the farming environment in Alberta and Canada, candidates may
        wish to arrange an exploratory visit to Alberta prior to submitting an
        application.
        <br />
        <br />
        Interested candidates must prepare a complete paper-based application.
        All documents must be prepared in hard copy and submitted in a single
        envelope, by mail, to the Alberta Agriculture and Forestry (AAF) office,
        not the AINP office. The application requires significant documentation
        as well as forms proving that the applicant meets the stream
        requirements. The application requires documents proving the applicant’s
        farm management skills, financial resources, and proposed business plan.
        If AAF approves the application, the application will be forwarded to
        AINP for further assessment.
        <br />
        <br />
        If AINP also approves the application, Alberta will notify the applicant
        they have been selected for provincial nomination. Successful applicants
        will receive an official nomination package in the mail from AINP.
        <br />
        <br />
        After receiving a provincial nomination an applicant has six months to
        submit a federal application for Canadian permanent residence.
        Applicants in this program must complete and submit a paper-based
        application for permanent residence and submit it by mail to the
        appropriate application centre. Paper-based PNP applications for
        permanent residence are generally processed within 18 months.
      </h2>
    </div>
  );
}
