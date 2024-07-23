import React from "react";
import { Link } from "react-router-dom";
export default function IntraCompanyTransfer() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Work
          {" > "}
          <Link to="/work/international-mobility-program">
            International Mobility Program(IMP)
          </Link>
          {" > "}Intra Company Transfer
        </p>
        <div className="header-content">
          <h1 className="heading-about">Intra Company Transfer</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Canada’s International Mobility Program outlines provisions to enable
        high-skilled foreign nationals to work temporarily in Canada as{" "}
        <bold> intra-company transferees. </bold>If a foreign national is an
        employee of a multinational company in a location outside of Canada,
        they may be eligible to obtain an LMIA-exempt work permit to transfer to
        one of the company’s locations within Canada. The intra-company
        transferee rule applies to all countries.
        <br /> <br />
        <ul>
          <li>General Requirements for the Employee</li>
          <li>General Requirements for the Multinational Company</li>
        </ul>{" "}
        <br />
        <a href="/contact-us">
          <sp>CONTACT US TO DISCUSS YOUR WORK PERMIT NEEDS </sp>
        </a>
        <br />
        <br />
        With a small number of exceptions, all foreign nationals wishing to work
        in Canada must obtain a Canadian work permit. In most cases, in order to
        apply for a work permit, a foreign national must be issued a positive
        Labour Market Impact Assessment (LMIA) from a Canadian employer. The
        intra-company transfer stream of the International Mobility Program
        enables foreign nationals to obtain a work permit without an LMIA.
        <br />
        <br />
        In order to qualify for an LMIA-exemption as an intra-company
        transferee, both the employee and the company have to meet several
        requirements.
        <br />
        <br />
        <sp>General Requirements for the Employee</sp>
        <br /> <br />
        <ul>
          <li>
            Must be employed at a multinational company seeking entry to Canada
            to work at the company’s parent, subsidiary, branch, or affiliate.
          </li>
          <li>
            The enterprise in Canada must have a qualifying relationship as
            outlined below.
          </li>
          <li>
            The employee must be applying to work in Canada in a position at the
            executive level, senior managerial level, or in a position requiring
            specialised knowledge.
          </li>
          <li>
            Must have been employed with the company for at least 1 year
            (full-time) with the company within the previous 3 years.
          </li>
        </ul>{" "}
        <br />
        Please note that the International Mobility Program utilises the
        definitions outlined in the North American Free Trade Agreement (NAFTA)
        in identifying executive capacity, senior managerial capacity, and
        specialised knowledge
        <br />
        <br />
        <sp>General Requirements for the Multinational Company</sp>
        <br /> <br />
        <ul>
          <li>
            The enterprise outside of Canada and the enterprise inside of Canada
            must have one of the following relationships: parent, subsidiary,
            branch, or affiliate.
          </li>
          <li>
            The two enterprises must be doing business. This means that they are
            regularly and continuously engaging in the provision of goods and
            services. The mere presence of a location in Canada will not be
            sufficient to meet this requirement.
          </li>
        </ul>{" "}
        <br />
        Certain countries have developed trade agreements with Canada which
        offer additional options for Intra-Company Transferees. Foreign
        nationals from countries covered by the North American Free Trade
        Agreement (NAFTA) or Canada-European Union Comprehensive Economic and
        Trade Agreement (CETA), may consult those programs for additional
        options.
        <br />
        <br />
      </h2>
    </div>
  );
}
