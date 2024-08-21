import React from "react";
import { Link } from "react-router-dom";
export default function NewBrunswickBusinessImmigrationStream() {
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
          <Link to="/immigrate/provincial-nominee-program/new-brunswick">
            New Brunswick
          </Link>
          {" > "}New Brunswick Business Immigration Stream
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            New Brunswick Business Immigration Stream
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        It is an economic immigration pathway for professional entrepreneurs who
        want to commence, operate, and continuously run an organisation while
        residing and settling permanently in New Brunswick.
        <br />
        <br />
        For economic development reasons, the Government of New Brunswick (GNB)
        retains the right to consider only specific types of new businesses or
        the acquisition of existing businesses. Decisions are based on the New
        Brunswick labour market’s economic status, existing inventory, yearly
        nomination allotment distributed by IRCC, and any other variables
        assessed by GNB.
        <br />
        <br />
        <bold>Minimum Requirements:</bold>
        <br />
        <br />
        <ul>
          <li>
            You must have a valid connection to New Brunswick to submit an
            Express of Interest.
          </li>
          <li>
            You must have completed at least three years of full-time degree or
            two years of full-time diploma course in a specific trade.
          </li>
          <li>
            Your personal net worth must be at least $600,000 CAD, with $300,000
            CAD immediately available.
          </li>
          <li>Your age must be between 22-55 years.</li>
          <li>
            Your language test score in either English or French must be equal
            to CLB 5.
          </li>
        </ul>
        <br />
        <bold>Application Process:</bold>
        <br />
        <br />
        <ul>
          1. Submit an Expression of Interest (EOI)
          <br />
          2. Prepare a business plan detailing the process and goal.
          <br />
          3. Invitation to Apply – 90 days to complete your application.
          <br />
          4. Application to the New Brunswick Business Stream
          <br />
          5. Interview
          <br />
          6. Canadian Permanent Residence Application
        </ul>
      </h2>
    </div>
  );
}
