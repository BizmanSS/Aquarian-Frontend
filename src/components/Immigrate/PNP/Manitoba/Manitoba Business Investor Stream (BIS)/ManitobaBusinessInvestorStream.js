import React from "react";
import { Link } from "react-router-dom";
export default function ManitobaBusinessInvestorStream() {
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
          <Link to="/immigrate/provincial-nominee-program/manitoba">
            Manitoba
          </Link>
          {" > "}Manitoba Business Investor Stream (BIS)
        </p>
        <div className="header-content">
          <h1 className="heading-about">
            Manitoba Business Investor Stream (BIS)
          </h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Manitoba Business Investor Stream (BIS) is a collection of immigration
        streams of the Manitoba Provincial Nominee Program (MPNP), a Provincial
        Nominee Program (PNP) operated by the province of Manitoba. Manitoba
        Business Investor Stream encompasses two immigration streams which
        target foreign nationals seeking to invest significant amounts of
        capital in the establishment of new business development in Manitoba.
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
        Manitoba Business Investor Stream includes the following streams:
        <br />
        <br />
        <ul>
          <li>Manitoba Entrepreneur Pathway </li>
          <li>Manitoba Farm Investor Pathway </li>
        </ul>
        <br />
        Applicants who are successful through either of these Manitoba streams
        will receive an official provincial nomination from Manitoba. This
        provincial nomination makes applicants eligible to apply for Canadian
        permanent resident status.
        <br />
        <br />
        <bold>Manitoba Entrepreneur Pathway</bold>
        <br />
        <br />
        The Manitoba Entrepreneur Pathway is a stream of Manitoba’s Business
        Investor Stream which targets experienced business owners and business
        managers who have significant personal net worth and the ability and
        desire to establish a new business practice in Manitoba. Applicants
        through this stream will be required to invest significant funds and
        successfully manage the operation of a new business project in Manitoba.
        <br />
        <br />
        <bold>Manitoba Farm Investor Pathway</bold>
        <br />
        <br />
        The Manitoba Farm Investor Pathway is a stream of Manitoba’s Business
        Investor Stream. This stream targets foreign nationals with demonstrated
        experience owning and/or operating a farm and who have significant net
        worth and the ability and desire to invest in the establishment of a new
        farm in Manitoba. Applicants through this stream will be required to
        invest significant funds and successfully manage the operation of a new
        farm in Manitoba.
      </h2>
    </div>
  );
}
