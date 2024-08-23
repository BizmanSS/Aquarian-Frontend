import React from "react";
import { Link } from "react-router-dom";
export default function HiringForeignWorkers() {
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
          <Link to="/employers/canadian-employers">Canadian Employers</Link>
          {" > "}Hiring Foreign Workers
        </p>
        <div className="header-content">
          <h1 className="heading-about">Hiring Foreign Workers</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        <ul>
          1. Temporary Foreign Worker Program (TFWP): This program allows
          employers to hire foreign workers temporarily to address labor
          shortages or specific skill requirements. Employers must demonstrate
          their efforts in recruiting Canadians before turning to foreign
          workers.
          <br />
          <br />
          2. International Mobility Program (IMP): The IMP provides exemptions
          to LMIA (Labour Market Impact Assessment) requirements for specific
          categories of foreign workers, such as intra-company transferees,
          international agreements permit holders, and certain individuals
          participating in research or academic activities. <br />
          <br />
          3. Global Talent Stream: This program is part of the TFWP and aims to
          attract h ighly skilled foreign workers to fill positions in Canada's
          innovative sectors. It provides expedited work permit processing for
          eligible employers and facilitates the hiring process.
          <br />
          <br />
          4. Provincial Nominee Programs (PNPs): Canadian provinces and
          territories operate their own PNPs, allowing them to nominate foreign
          workers who meet their specific economic and labor market needs.
          Employers can hire foreign workers through PNPs, supporting their
          pathway to Canadian Permanent Residence.
          <br />
          <br />
          5. Express Entry: This federal immigration program manages the pool of
          skilled foreign workers interested in becoming permanent residents in
          Canada. Express Entry provides avenues for Canadian employers to
          recruit candidates with the required skills and experience.
          <br />
          <br />
          6. Caregiver Programs: These programs enable Canadian employers to
          hire foreign caregivers for child care, elder care, or disability
          support. Both temporary and permanent pathways are available depending
          on the specific caregiver program.
        </ul>
        <br />
        It is essential for Canadian employers to familiarize themselves with
        the specific requirements and processes associated with each hiring
        option. Seeking guidance from immigration consultants or legal experts
        can ensure compliance with regulations and maximize the chances of
        successful hiring.
      </h2>
    </div>
  );
}
