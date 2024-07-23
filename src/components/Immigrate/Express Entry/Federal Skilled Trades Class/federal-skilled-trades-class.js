import React from "react";
import { Link } from "react-router-dom";
export default function FederalSkilledTradesClass() {
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
          <Link to="/immigrate/express-entry">Express Entry</Link>
          {" > "}Federal Skilled Trades Class
        </p>
        <div className="header-content">
          <h1 className="heading-about">Federal Skilled Trades Class</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Federal Skilled Trades (FST) program is one of the three federal
        immigration programs managed by the Express Entry system. As with all
        Express Entry programs, FST uses the Comprehensive Ranking System (CRS)
        to rank interested candidates against one another, only inviting the
        most competitive candidates to apply for Canadian permanent residence.
        <br />
        <br />
        Each year, over half of all immigrants to Canada are skilled workers
        welcomed through economic programs, including the Federal Skilled Trades
        program. For qualified tradespeople the FST program can be a fast option
        for obtaining Canadian permanent residence, and with it, the right to
        live and work in Canada permanently.
        <br />
        <br />
        <bold>FST Program Requirements</bold>
        <br />
        <br />
        In order to qualify for FST, a candidate must have at least two years of
        full-time work experience in a skilled trade (or an equal amount in
        part-time). This experience must have been obtained within the previous
        5 years and only considers work experience obtained after an individual
        has been granted the certification to practise the trade in their
        country of residence.
        <br />
        <br />
        Canada’s National Occupational Classification (NOC) code, defines
        skilled trades as the following occupation groups:
        <br />
        <br />
        Major Group 72 - industrial, electrical and construction trades
        <br />
        <br />
        Major Group 73 - maintenance and equipment operation trades
        <br />
        <br />
        Major Group 82 - supervisors and technical jobs in natural resources,
        agriculture and related production
        <br />
        <br />
        Major Group 92 - processing, manufacturing and utilities supervisors and
        central control operators
        <br />
        <br />
        Minor Group 632 - chefs and cooks
        <br />
        <br />
        Minor Group 633 - butchers and bakers
        <br />
        <br />
        If a person does possess the necessary work experience, they also must
        meet the other eligibility criteria outlined by the FST program:
        <br />
        <br />
        <ul>
          <li>
            <bold>Canada Employment Connection</bold>
            <br />
            Have a valid offer of full-time employment for a position lasting at
            least 12-months or a certificate of qualification in their skilled
            trade which is issued by a Canadian provincial or territorial
            authority.
          </li>
          <br />
          <li>
            <bold>Language</bold>
            <br />
            Reach a minimum of Canadian Language Benchmark (CLB) level 4 on an
            approved English or French language test.
          </li>
          <br />
          <li>
            <bold>Residence in Canada</bold>
            <br />
            Must intend to live outside of the province of Quebec.
          </li>
        </ul>
        <br />
        Provided a candidate meets these requirements, they will be eligible to
        submit an Express Entry profile for the Federal Skilled Trades program.
        However, candidates should note that they must meet Canada’s basic
        admissibility requirements. Certain criminal offences and medical
        conditions may make a person inadmissible to Canada.
        <br />
        <br />
      </h2>
    </div>
  );
}
