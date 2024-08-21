import React from "react";
import { Link } from "react-router-dom";
export default function NovaScotiaInternationalGraduatesinDemand() {
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
          <Link to="/immigrate/provincial-nominee-program/nova-scotia">
            Nova Scotia
          </Link>
          {" > "}Nova Scotia International Graduates in Demand
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Nova Scotia International Graduates in Demand
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The International Graduates in Demand stream is for recent international
        graduates whose skills and education match specific National
        Occupational Classification (NOC) job categories. This stream is
        currently open to workers in 2 NOC job categories:
        <br />
        <br />
        <ul>
          <li>
            NOC 33102: nurse aides, orderlies, and patient service associates
          </li>
          <li>NOC 42202: early childhood educators and assistants</li>
        </ul>
        <br />
        <bold>ELIGIBILITY</bold>
        <br />
        <br />
        To apply you must:
        <br />
        <br />
        <ul>
          <li>
            have a full-time permanent job offer from a Nova Scotia employer in
            a job category listed above that corresponds with your recent field
            of study;
          </li>
          <br />
          <li>be 21 to 55 years old;</li>
          <br />
          <li>have a high school diploma;</li>
          <br />
          <li>
            have met requirements for completing a course of study within three
            years of your application. The program must have been at least 30
            weeks in length. You must have completed at least 50% of the program
            in Nova Scotia.
            <br />
            <br />
            <ul>
              <li>
                If you are applying under NOC 33102, your program must grant a
                certificate, diploma, or degree.
              </li>
              <br />
              <li>
                If you are applying under NOC 42202, your program must grant a
                diploma or a degree.
              </li>
            </ul>
          </li>
          <br />
          <li>
            have certifications issued by NS regulatory bodies required for the
            job;
          </li>
          <br />
          <li>
            prove language ability equal to Canadian Language Benchmark (CLB)
            Level 5 even if your first language is English or French;
          </li>
          <br />
          <li>
            show enough financial resources to successfully settle in Nova
            Scotia.
          </li>
        </ul>
      </h2>
    </div>
  );
}
