import React from "react";
import { Link } from "react-router-dom";
export default function Ontario() {
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
          Ontario
        </p>
        <div className="header-content">
          <h1 className="heading-about">Ontario</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Located in central Canada, the province of Ontario is the most popular
        destination for new immigrants to Canada. The province hosts the city of
        Toronto, Canada’s economic hub, as well as the nation’s capital city,
        Ottawa.
        <br />
        <br />
        The Ontario Immigrant Nominee Program (OINP), a Provincial Nominee
        Program (PNP), is a collection of immigration pathways enabling foreign
        nationals to become Canadian permanent residents. The PNP is
        strategically designed to attract immigrants in areas which will benefit
        the province: skilled workers, workers in sectors with labour shortages,
        entrepreneurs, and investors. The province operates several immigration
        streams divided among three categories:
        <br />
        <br />
        <ul>
          <li>Ontario Human Capital</li>
          <li>Ontario Employer Job Offer</li>
          <li>Ontario Entrepreneur</li>
        </ul>
      </h2>
    </div>
  );
}
