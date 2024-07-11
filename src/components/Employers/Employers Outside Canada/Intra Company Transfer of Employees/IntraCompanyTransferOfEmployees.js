import React from "react";
import { Link } from "react-router-dom";
export default function IntraCompanyTransferOfEmployees() {
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
          {" > "}Intra Company Transfer of Employees
        </p>
        <div className="header-content">
          <h1 className="heading-about">Intra Company Transfer of Employees</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        1. Intra/Inter-Company Transfers (ICT): This pathway is suitable for
        established foreign companies that have a qualifying relationship with a
        Canadian entity, such as a parent, branch, subsidiary, or affiliate. The
        ICT allows for the transfer of key personnel, executives, managers, or
        specialised knowledge workers to the Canadian entity. The employees must
        have been employed with the foreign company for a minimum period and
        meet specific job requirements.
        <br />
        <br />
        Inter-Company Transfers generally fall into three categories:
        <br />
        <br />
        <ul>
          i. Executive Transfers: This category includes high-level executives
          who oversee the management and strategic direction of the Canadian
          operations. They play a crucial role in decision-making and are
          responsible for the overall success of the organisation.
          <br />
          <br />
          ii. Managerial Transfers: Managers with significant responsibilities
          and authority are transferred to Canada to oversee the day-to-day
          operations, supervise employees, and execute business plans. They
          ensure effective resource allocation, maintain productivity, and
          contribute to the achievement of organisational goals.
          <br />
          <br />
          iii. Specialised Knowledge Transfers: This category involves
          individuals possessing specialised or advanced knowledge that is
          critical to the company's operations, products, services, or
          proprietary techniques. These employees bring unique expertise and
          contribute to the company's innovation, competitiveness, and growth.
        </ul>
        <br />
        To qualify for inter-company transfers, certain eligibility criteria
        must be met, such as: - The foreign and Canadian entities must have a
        qualifying relationship, such as a parent, branch, subsidiary, or
        affiliate. - The employee being transferred must have been employed
        continuously by the foreign company for a specific period (usually at
        least one year) within the past three years. - The position being filled
        in Canada must be on the list of eligible occupations, and the employee
        must possess the required qualifications and work experience.
      </h2>
    </div>
  );
}
