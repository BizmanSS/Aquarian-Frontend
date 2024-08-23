import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { factor: "Job Offer - NOC skill level", points: 10 },
    { factor: "Job Offer - NOC type", points: 10 },
    { factor: "Job Offer - Wage", points: 10 },
    { factor: "Job Offer - Length", points: 4 },
    { factor: "Job Offer - NOC Skill Level", points: 3 },
    { factor: "Job Offer - Earnings history", points: 3 },
    { factor: "Regional immigration - Location of job Offer", points: 10 },
    { factor: "Regional immigration - Location of study", points: 10 },
    { factor: "Highest level of education", points: 10 },
    { factor: "Field of study", points: 10 },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Maximum Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.factor}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function OntarioEmployerJobOfferStream() {
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
          <Link to="/immigrate/provincial-nominee-program/ontario">
            Ontario
          </Link>
          {" > "}Ontario Employer Job Offer Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">Ontario Employer Job Offer Stream</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Ontario Employer Job Offer streams provide immigration options for
        applicants who have a valid job offer from an Ontario employer. Both the
        employer and the job itself must meet certain conditions in order to be
        considered valid. As well, the applicant must meet certain eligibility
        requirements depending on which stream they wish to apply through.
        Ontario Employer Job Offer encompasses three immigration streams
        targeting foreign nationals who have secured valid job offers from
        qualifying employers in the province.
        <br />
        <br />
        OINP Employer Job Offer includes the following streams:
        <br />
        <br />
        <ul>
          <li>Ontario Foreign Worker</li>
          <li>Ontario International Student with a Job Offer</li>
          <li>Ontario In-Demand Skills</li>
        </ul>
        <br />
        Applicants who are successful through any of the Ontario Employer Job
        Offer streams will receive an official provincial nomination from
        Ontario. This provincial nomination makes applicants eligible to apply
        for Canadian permanent resident status.
        <br />
        <br />
        <sp>Ontario Foreign Workers</sp>
        <br />
        <br />
        Ontario Foreign Workers is a stream of Ontario Employer Job Offer
        targeting foreign workers who have a valid job offer from an Ontario
        employer. In order to qualify, the job offer and Ontario employer must
        meet certain conditions. As well, the foreign worker must meet certain
        eligibility requirements regarding previous skilled work experience.
        <br />
        <br />
        <sp>Ontario International Students with a Job Offer</sp>
        <br />
        <br />
        Ontario International Students is a stream of Ontario Employer Job Offer
        targeting international graduates of eligible Canadian colleges or
        universities who have a job offer from an Ontario employer. The job
        offer and the Ontario employer must meet certain conditions to be
        considered valid. As well, the international student must meet
        eligibility requirements regarding their Canadian education.
        <br />
        <br />
        <sp>Ontario In-Demand Skills</sp>
        <br />
        <br />
        Ontario In-Demand Skills is a stream of Ontario Employer Job Offer
        targeting low-skilled workers who have obtained a job offer from an
        Ontario employer. The job offer must be for a position included on
        Ontario’s In-Demand Occupations List. Both the offer and the employer
        must meet certain conditions. As well, the foreign worker must meet
        certain requirements regarding past work experience, education, and
        language proficiency.
        <br />
        <br />
        <sp>Ontario Employer Job Offer Ranking System</sp>
        <br />
        <br />
        The Ontario Employer Job Offer Ranking system uses the following points
        grid to rank candidates who have registered profiles. Only those
        candidates with the most competitive scores will be invited to apply to
        the program.
        <br />
        <br />
        <Table />
      </h2>
    </div>
  );
}
