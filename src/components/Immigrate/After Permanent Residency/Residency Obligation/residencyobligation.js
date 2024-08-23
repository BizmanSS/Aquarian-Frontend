import React from "react";
import { Link } from "react-router-dom";
export default function ResidencyObligation() {
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
          <Link to="/immigrate/after-permanent-residency">
            After Permanent Residency
          </Link>
          {" > "}Residency Obligation
        </p>
        <div className="header-content">
          <h1 className="heading-about">Residency Obligation</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        In order to maintain permanent residence in Canada, a person must meet a
        residency obligation. The residency obligation refers to a person’s
        physical presence inside of Canada for a set amount of time.
        <br />
        <br />
        <ul>
          <li> Determination of Status</li>
          <li> Residency Obligations and Provincial Nominations</li>
        </ul>
        <br />
        Canada’s residency obligation for permanent residents requires a person
        to be physically present inside of Canada for at least 730 days within a
        five-year period, or to meet one of the following situations:
        <br />
        <br />
        <ul>
          <li>
            The person is outside of Canada accompanying a Canadian citizen who
            is their spouse or common-law partner, or the person is a child
            accompanying their parent;
          </li>
          <li>
            The person is outside of Canada employed on a full-time basis by a
            Canadian business or in the public service of Canada or of a
            Canadian province;
          </li>
          <li>
            The person is an accompanying spouse, common-law partner, or child
            of a permanent resident who is outside Canada and is employed on a
            full-time basis by a Canadian business or in the public service of
            Canada or of a Canadian province.
          </li>
        </ul>
        <br />
        Usually, whether a permanent resident has met their residency
        obligations is assessed when they are applying for a permanent resident
        card renewal, permanent resident travel document (PRTD), or Canadian
        citizenship. Please note that if a person has Canadian permanent
        residence for more than five years, the residency obligation will be
        calculated based on the five years prior to the date an application was
        received by the visa office.
        <br />
        <br />
        If a person has been a Canadian permanent resident for less than five
        years, they may be eligible to apply for a permanent resident card
        renewal or PRTD provided they can demonstrate that they will be able to
        meet the 730 days physical presence day within the five-year period.
        <br />
        <br />
        <sp>Determination of Status</sp>
        <br />
        <br />
        A permanent resident of Canada can only lose their status through a
        formal determination of status. Any time a permanent resident applies
        for a PR card renewal or a permanent resident travel document (PRTD), a
        visa officer will conduct an official determination of status to see if
        the person has met their residency obligations and has no other barriers
        from renewal.
        <br />
        <br />
        Until this formal determination has been completed a person will
        technically remain a permanent resident of Canada. If a permanent
        resident is aware that they have not met their residency obligation,
        they may formally renounce their permanent resident status.
        <br />
        <br />
        <sp>Residency Obligations and Provincial Nominations</sp>
        <br />
        <br />
        Canadian citizens and permanent residents hold the right to live and
        work in any province in Canada, as found in Section 6 of the Canadian
        Charter of Rights and Freedoms. These rights begin when Canadian
        permanent residence is activated. It is important to note that while
        Canadian citizens and permanent residents have constitutionally
        protected mobility rights, Canadian law determines that immigrants
        belonging to the provincial nomination class must intend to reside in
        the province that has nominated them.
        <br />
        <br />
        If the intention to reside in the selecting province is found never to
        have been sincere, applicants’ risk being found guilty of
        misrepresentation which can result in loss of status and inadmissibility
        to Canada for five years. Misrepresentation is a criminal offence in
        Canada, and can have devastating effects on your immigration application
        and status in Canada. Applicants interested in selection by a Canadian
        province must show intention to reside in the province upon landing.
      </h2>
    </div>
  );
}
