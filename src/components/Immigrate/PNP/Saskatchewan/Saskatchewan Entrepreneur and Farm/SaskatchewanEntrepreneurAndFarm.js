import React from "react";
import { Link } from "react-router-dom";
export default function SaskatchewanEntrepreneurAndFarm() {
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
          <Link to="/immigrate/provincial-nominee-program/saskatchewan">
            Saskatchewan
          </Link>
          {" > "}Saskatchewan Entrepreneur and Farm
        </p>
        <div className="header-content">
          <h1 className="heading-about">Saskatchewan Entrepreneur and Farm</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Saskatchewan Entrepreneur and Farm is a collection of immigration
        streams of the Saskatchewan Immigrant Nominee Program (SINP), a
        Provincial Nominee Program (PNP) operated by the province of
        Saskatchewan. Saskatchewan Entrepreneur and Farm encompasses two
        immigration streams which target foreign nationals seeking to invest
        significant amounts of capital in the establishment of new business
        development in Saskatchewan.
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
        Saskatchewan Entrepreneur and Farm includes the following streams:
        <br />
        <br />
        <ul>
          <li>Saskatchewan Entrepreneur</li>
          <li>Saskatchewan Farm Owners and Operators</li>
        </ul>
        <br />
        Applicants who are successful through either of these Saskatchewan
        streams will receive an official provincial nomination from
        Saskatchewan. This provincial nomination makes applicants eligible to
        apply for Canadian permanent resident status.
        <br />
        <br />
        <sp>Entrepreneur</sp>
        <br />
        <br />
        Saskatchewan Entrepreneur is a stream of Saskatchewan Entrepreneur and
        Farm immigration which targets experienced business owners and business
        managers who have significant personal net worth and the ability and
        desire to establish a new business practice in Saskatchewan. Applicants
        through this stream will be required to invest significant funds and
        successfully manage the operation of a new business project in
        Saskatchewan.
        <br />
        <br />
        <sp>Farm Owners and Operators</sp>
        <br />
        <br />
        Saskatchewan Farm Owners and Operators is a stream of Saskatchewan
        Entrepreneur and Farm immigration. This stream targets foreign nationals
        with demonstrated experience owning and/or operating a farm and who have
        significant net worth and the ability and desire to invest in the
        establishment of a new farm in Saskatchewan. Applicants through this
        stream will be required to invest significant funds and successfully
        manage the operation of a new farm in Saskatchewan.
      </h2>
    </div>
  );
}
