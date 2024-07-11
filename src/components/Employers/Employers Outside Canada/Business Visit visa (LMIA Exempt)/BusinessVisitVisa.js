import React from "react";
import { Link } from "react-router-dom";
export default function BusinessVisitVisa() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Employers
          {" > "}
          <Link to="/employers/employers-outside-canada">
            Employers Outside Canada
          </Link>
          {" > "}Business Visit visa (LMIA Exempt)
        </p>
        <div className="header-content">
          <h1 className="heading-about">Business Visit visa (LMIA Exempt)</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Business Visitor Visas: Business visitors are individuals who come to
        Canada for short-term business activities without entering the Canadian
        labor market. Foreign employers can send their employees to engage in
        activities such as attending meetings, conferences, trade shows,
        negotiating contracts, or conducting market research. Business visitor
        visas allow for short stays in Canada, usually up to six months. <br />
        <br />
        Investor and Entrepreneur Programs: Foreign employers who are interested
        in making substantial investments in Canada can explore investor and
        entrepreneur programs. These programs require significant investment
        capital and aim to stimulate economic growth and job creation in Canada.
        Through these programs, foreign company executives or entrepreneurs can
        obtain work permits or permanent residency based on their investment
        contributions and business plans. <br />
        <br />
        It is important to note that each pathway and visa category has specific
        eligibility criteria, documentation requirements, and processing
        procedures. It is advisable for foreign employers to consult with
        immigration lawyers or experienced consultants to determine the most
        suitable pathway for their specific needs and circumstances. These
        professionals can provide guidance throughout the application process
        and ensure compliance with immigration regulations.
      </h2>
    </div>
  );
}
