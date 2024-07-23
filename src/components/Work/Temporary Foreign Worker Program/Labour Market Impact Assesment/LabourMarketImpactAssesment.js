import React from "react";
import { Link } from "react-router-dom";
export default function LabourMaketImpactAssessment() {
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
          <Link to="/work/temporary-foreign-worker-program">
            Temporary Foreign Worker Program
          </Link>
          {" > "}Labour Maket Impact Assessment
        </p>
        <div className="header-content">
          <h1 className="heading-about">Labour Maket Impact Assessment</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        <bold>LMIA Work Permits</bold>
        <br />
        <br />A Labour Market Impact Assessment (LMIA) is a document issued by
        Employment and Social Development Canada (ESDC) assessing the impact of
        hiring a foreign national in Canada. A<bold> postive LMIA </bold>
        indicates that there is no Canadian citizen or permanent resident to
        fill a position, therefore enabling an employer to hire a foreign
        national. A<bold> negative LMIA </bold> indicates that a position should
        be filled by a Canadian citizen or permanent resident.
        <br />
        <br />
        <ul>
          <li>LMIA Application</li>
          <li>Exemptions to LMIA Requirements</li>
        </ul>
        <br />
        <a href="/contact-us">
          <sp>CONTACT US TO DISCUSS YOUR WORK PERMIT NEEDS</sp>
        </a>
        <br />
        <br />
        A foreign national cannot apply for an LMIA. Rather, LMIAs are documents
        which must be applied for by a Canadian employer. While sometimes it is
        possible to hire a foreign worker who is exempt from needing an LMIA, or
        who is exempt from requiring a work permit, all streams of Canada’s
        Temporary Foreign Worker Program (TFWP) require that an employer obtain
        an LMIA in order to hire outside of Canada. As well, many of Canada’s
        immigration pathways to permanent residency require that applicants show
        a positive LMIA in order to claim points for a Canadian job offer.
        <br />
        <br />
        <sp>LMIA Application</sp>
        <br />
        <br />
        An employer may submit an application for an LMIA as early as 6-months
        prior to the intended start date for the position. LMIA application
        procedures vary depending on the wage of the person being hired.
        <br />
        <br />
        <sp>LMIA Application Requirements</sp>
        <br />
        <br />
        LMIA applications are submitted in hard copy, by mail, to the
        appropriate Service Canada Processing Centre. Applications must include
        evidence that the following criteria have been met:
        <br />
        <br />
        <ul>
          <li>
            <bold>Processing Fee:</bold> All applications for LMIAs include a
            $1000 CAD processing fee which will not be refunded even if the
            result is negative. Certain applicants under the LMIAs for in-home
            caregivers may be exempt from this fee.
          </li>
          <li>
            <bold>Business Legitimacy Documents:</bold> Documents proving that
            the employer’s status as a legitimate Canadian business.
          </li>
          <li>
            <bold>Transition Plan:</bold> Employers must submit a plan for how
            they intend to address the need to hire foreign nationals.
            Eventually, employers are expected to hire Canadian citizens and
            permanent residents rather than TFWs.
          </li>
          <li>
            <bold>Recruitment Efforts:</bold>Employers must submit evidence that
            they made substantial efforts to recruit Canadian citizens and
            permanent residents to fill the position prior to hiring a TFW.
          </li>
          <li>
            <bold>Wages:</bold> Applications must include information regarding
            the TFWs wages. This will differentiate the high-wage positions from
            low-wage positions and ensure that TFWs are paid the same amount for
            labour as their Canadian equals.
          </li>
          <li>
            <bold>Workplace Safety: </bold> TFWs are entitled to the same
            standards of workplace health and safety as Canadians in the same
            position. For this reason, employers must provide evidence that TFWs
            will be covered by insurance which is at minimum equivalent to the
            health coverage offered by the province or territory where the
            business is located.
          </li>
        </ul>
        <br />
        <sp>What Happens After LMIA is Approved</sp>
        <br />
        <br />
        After an LMIA application has been processed, employers will be issued a
        decision. If the employer is issued a positive LMIA, they can proceed
        with hiring a foreign national. If a negative LMIA is issued, then
        unfortunately the employer is not approved to hire a foreign national.
        <br />
        <br />
        Positive LMIAs are valid for 6 months from the date of issue. After
        receiving a positive LMIA, the employer must notify the foreign national
        so that they can apply for their work permit or permanent residence.
        <br />
        <br />
        <sp>Exemptions to LMIA Requirements</sp>
        <br />
        <br />
        In certain cases, it may not be necessary for an employer to obtain an
        LMIA in order to hire a foreign worker. The majority of LMIA exemptions
        are managed through the International Mobility Program..
        <br />
        <br />
        <ul>
          <li>Global Talent Stream</li>
          <li>Intra-Company Transfers</li>
          <li>NAFTA Work Permits</li>
          <li>CETA Work Permits</li>
        </ul>
      </h2>
    </div>
  );
}
