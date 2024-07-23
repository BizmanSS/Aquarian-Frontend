import React from "react";
import { Link } from "react-router-dom";
const Table = () => {
  const data = [
    { Factor: "Age", WithJobOffer: 20, WithoutJobOffer: 20 },
    { Factor: "Language", WithJobOffer: 20, WithoutJobOffer: 20 },
    { Factor: "Education", WithJobOffer: 15, WithoutJobOffer: 15 },
    { Factor: "Work experience", WithJobOffer: 15, WithoutJobOffer: 20 },
    { Factor: "Employment", WithJobOffer: 15, WithoutJobOffer: 10 },
    { Factor: "Adaptability", WithJobOffer: 15, WithoutJobOffer: 15 },
    {
      Factor: <bold>Maximum Points</bold>,
      WithJobOffer: <bold>100</bold>,
      WithoutJobOffer: <bold>100</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "40%" }}>Factor</th>
          <th>With Job Offer</th>
          <th>Without a Job Offer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Factor}</td>
            <td>{item.WithJobOffer}</td>
            <td>{item.WithoutJobOffer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableRanking = () => {
  const data = [
    {
      Factor: "Age",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 25,
    },
    {
      Factor: "Language",
      SkilledWorker: 20,
      CriticalWorker: 20,
      InternationalGraduate: "N/A",
    },
    {
      Factor: "Education",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 35,
    },
    {
      Factor: "Work experience",
      SkilledWorker: 20,
      CriticalWorker: 20,
      InternationalGraduate: "N/A",
    },
    {
      Factor: "Employment",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 20,
    },
    {
      Factor: "Adaptability",
      SkilledWorker: 15,
      CriticalWorker: 15,
      InternationalGraduate: 20,
    },
    {
      Factor: <bold>Maximum Points</bold>,
      SkilledWorker: <bold>100</bold>,
      CriticalWorker: <bold>100</bold>,
      InternationalGraduate: <bold>100</bold>,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: "30%" }}>Factor</th>
          <th>Skilled Worker</th>
          <th>Critical Worker</th>
          <th>International Graduate</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Factor}</td>
            <td>{item.SkilledWorker}</td>
            <td>{item.CriticalWorker}</td>
            <td>{item.InternationalGraduate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableBusiness = () => {
  const data = [
    { Factor: "Age", MaxPoints: 20 },
    { Factor: "Language", MaxPoints: 40 },
    { Factor: "Education", MaxPoints: 20 },
    {
      Factor: "Business ownership or senior management experience",
      MaxPoints: 50,
    },
    { Factor: "Community endorsement", MaxPoints: 35 },
    { Factor: "Adaptability", MaxPoints: 35 },
    { Factor: <bold>Maximum Points</bold>, MaxPoints: <bold>200</bold> },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Factor</th>
          <th>Max Points</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.Factor}</td>
            <td>{item.MaxPoints}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PrinceEdwardIsland() {
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
          Prince Edward Island
        </p>
        <div className="header-content">
          <h1 className="heading-about">Prince Edward Island</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        Despite Prince Edward Island’s small size and population, the Atlantic
        island province boasts incredible coastal culture with booming tourism,
        fishing, and agricultural industries.
        <br />
        <br />
        The Prince Edward Island Provincial Nominee Program (PEI PNP), a
        Provincial Nominee Program (PNP), is a collection of immigration
        pathways that target immigrants with business acumen, skilled workers,
        and young graduates who are fresh from post-secondary education.
        <br />
        <br />
        The PEI PNP gives prospective newcomers the chance to receive a
        provincial nomination through one of its many immigration streams, which
        may fast-track their path to Canadian permanent residence. The province
        operates several immigration streams divided among three categories:
        <br />
        <br />
        <ul>
          <li>PEI Express Entry</li>
          <li>PEI Labour Impact</li>
          <li>PEI Business Impact</li>
        </ul>
        <br />
        <sp>PEI Express Entry</sp>
        <br />
        <br />
        Prospective immigrants who are in the federal Express Entry pool and
        have expressed their interest of living and working in Prince Edward
        Island may be eligible for PEI Express Entry. Candidates must be
        eligible for one of the federal economic immigration classes, however
        only applicants whose skills and experience match the province’s current
        labour needs will be considered for Express Entry PNP.
        <br />
        <br />
        <sp>Labour Impact</sp>
        <br />
        <br />
        Foreign workers and recent graduates are welcome to apply for provincial
        nomination via one of Prince Edward Island’s Labour Impact streams.
        These programs give individuals who have already been hired by a PEI
        employer the opportunity to access an accelerated path to permanent
        residency should they receive PEI PNP.
        <br />
        <br />
        <ul>
          <li>Skilled Workers in PEI</li>
          <li>Skilled Workers Outside Canada</li>
          <li>Critical Worker</li>
          <li>International Graduate</li>
        </ul>
        <br />
        <sp>Business Impact</sp>
        <br />
        <br />
        Whether establishing a business with 100% ownership or investing in a
        new or established PEI business, individuals wishing to immigrate to
        Canada on a business visa may take advantage of the Business Impact
        stream of the PEI PNP. They may also choose to obtain a work permit by
        investing in a PEI business, which will provide a faster transition to
        their new life in Canada and PEI.
        <br />
        <br />
        <sp>Prince Edward Island Ranking System</sp>
        <br />
        <br />
        Applicants wishing to immigrate to Prince Edward Island via PEI PNP will
        be required to create a profile in the province’s Expression of Interest
        (EOI) system. Applicants will be assigned a score based on this profile,
        and the highest-ranking candidates will be invited to submit an
        application during periodic intakes.
        <br />
        <br />
        <sp>Prince Edward Island Ranking System</sp>
        <br />
        <br />
        <ul>
          <li>PEI Express Entry Ranking System</li>
          <li>PEI Labour Impact Ranking System</li>
          <li>PEI Business Impact Ranking System</li>
        </ul>
        <br />
        <sp>PEI Express Entry Ranking System</sp>
        <br />
        <br />
        <Table />
        <br />
        <sp>PEI Labour Impact Ranking System</sp>
        <br />
        <br />
        <TableRanking />
        <br />
        <sp>PEI Business Impact Ranking System</sp>
        <br />
        <br />
        <TableBusiness />
        <br />
        <sp>Atlantic Immigration Pilot Program</sp>
        <br />
        <br />
        Prince Edward Island participates in the Atlantic Immigration Pilot
        Program (AIPP). The AIPP is an economic growth initiative developed in
        partnership between the federal government and Canada’s Atlantic
        provinces. AIPP facilitates the immigration process for newcomers who
        have obtained a job offer from a designated employer in the Atlantic
        region.
      </h2>
    </div>
  );
}
