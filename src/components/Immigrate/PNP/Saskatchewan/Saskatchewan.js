import React from "react";
import { Link } from "react-router-dom";
export default function Saskatchewan() {
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
          Saskatchewan
        </p>
        <div className="header-content">
          <h1 className="heading-about">Saskatchewan</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Located in Western Canada’s prairie region, the province of Saskatchewan
        is one of the hubs of agricultural production in Canada. Rich in
        farmlands, the province hosts two major Canadian cities, Regina and
        Saskatoon.
        <br />
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The Saskatchewan Immigrant Nominee Program (SINP), a Provincial Nominee
        Program (PNP), is a collection of immigration pathways enabling foreign
        nationals to become Canadian permanent residents. The PNP is
        strategically designed to attract immigrants in areas which will benefit
        the province: skilled workers, workers in sectors with labour shortages,
        workers with job offers, and entrepreneurs. The province operates
        several immigration streams divided among three categories:
        <br />
        <br />
        <ul>
          <li>Saskatchewan International Skilled Worker</li>
          <li>Saskatchewan Experience</li>
          <li>Saskatchewan Entrepreneur and Farm</li>
        </ul>
        <br />
        <sp>Saskatchewan International Skilled Worker</sp>
        <br />
        <br />
        Saskatchewan International Skilled Worker encompasses three immigration
        streams designed to target skilled workers who have the ability to join
        Saskatchewan’s work force and adapt easily to life in the province. Some
        streams prioritise workers who have experience in sectors experiencing
        labour shortages, while other streams target workers with employment
        offers from Saskatchewan employers.
        <br />
        <br />
        <ul>
          <li>Saskatchewan Express Entry</li>
          <li>Saskatchewan Employment Offer</li>
          <li>Saskatchewan In-Demand Occupation</li>
        </ul>
        <br />
        <sp>Saskatchewan Experience</sp>
        <br />
        <br />
        Saskatchewan Experience encompasses five immigration streams designed to
        target workers who have already gained employment experience in
        Saskatchewan. As well, workers in these streams must have an offer of
        employment from a Saskatchewan employer to continue working in the
        province. Certain streams prioritise workers with experience in certain
        sectors which are experiencing labour shortages in the province.
        <br />
        <br />
        <ul>
          <li>Saskatchewan Existing Work Permit</li>
          <li>Saskatchewan Health Professionals</li>
          <li>Saskatchewan Hospitality Sector Project</li>
          <li>Saskatchewan Long-Haul Truck Driver Project</li>
          <li>Saskatchewan Students</li>
        </ul>
        <br />
        <sp>Saskatchewan Entrepreneur and Farm</sp>
        <br />
        <br />
        Saskatchewan Entrepreneur and Farm is a collection of two immigration
        streams designed for individuals with business management experience who
        wish to launch a new business endeavour in Saskatchewan. The
        entrepreneurial stream is for general entrepreneurs with business
        proposals in a range of sectors, while the farm owner and operator
        stream is designed specifically for entrepreneurs in the farming sector.
        <br />
        <br />
        <ul>
          <li>Saskatchewan Entrepreneur</li>
          <li>Saskatchewan Farm Owners and Operators</li>
        </ul>
      </h2>
    </div>
  );
}
