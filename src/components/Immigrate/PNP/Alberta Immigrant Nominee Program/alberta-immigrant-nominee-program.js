import React from "react";
import { Link } from "react-router-dom";
export default function AlbertaImmigrantNomineeProgram() {
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
          {" > "}Alberta Immigrant Nominee Program
        </p>
        <div className="header-content">
          <h1 className="heading-about">Alberta Immigrant Nominee Program</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        It supports Alberta’s economic growth by attracting and retaining
        individuals who have the abilities and skills to cater to the labour
        market scarcity in Alberta. The AINP nominates eligible candidates to
        apply for Permanent Residency, with the intention of staying in Alberta,
        to the IRCC (Immigrants, Refugees, and Citizenship Canada).
        <br />
        <br />
        The province operates several immigration streams divided among two
        categories:
        <br />
        <br />
        <bold>Workers</bold>
        <br />
        <br />
        <ul>
          <li>Alberta Opportunity Stream</li>
          <li>Alberta Express Entry</li>
          <li>Alberta Accelerated Tech Pathway</li>
        </ul>
        <br />
        <bold>Entrepreneurs</bold>
        <br />
        <br />
        <ul>
          <li>Farm Stream</li>
          <li>Graduate Entrepreneur Stream</li>
          <li>Foreign Graduate Entrepreneur Stream</li>
        </ul>
        <br />
        <bold>Alberta Opportunity Stream</bold>
        <br />
        <br />
        The Alberta Opportunity Stream was launched in June 2018. This stream
        targets foreign nationals who are already working in Alberta and who
        have an official offer of employment from their Alberta employer to
        continue working full-time in the province. Candidates for this stream
        must meet a range of eligibility requirements regarding work experience,
        job offer, language proficiency, and education.
        <br />
        <br />
        <bold>Alberta Express Entry Stream</bold>
        <br />
        <br />
        The Alberta Express Entry stream was launched in June 2018. The stream
        allows the province to offer provincial nominations to select candidates
        with active profiles in the federal Express Entry system. Alberta will
        automatically consider profiles in the federal Express Entry pool. While
        the exact selection criteria are unknown, AAIP states that it will seek
        candidates who demonstrate strong ties to Alberta and who can support
        regional economic development and diversification.
        <br />
        <br />
        Express Entry candidates who receive a provincial nomination through
        this stream will a 600-point increase to their Comprehensive Ranking
        System (CRS) Score, virtually guaranteeing they will receive an
        Invitation to Apply (ITA) for Canadian permanent residence in the
        subsequent Express Entry draw.
        <br />
        <br />
        <bold>Alberta Accelerated Tech Pathway</bold>
        <br />
        <br />
        The Accelerated Tech Pathway allows certain Express Entry candidates
        with an Albertan job offer at a company in a tech industry or in an
        eligible tech role to apply for nomination with expedited processing.
        <br />
        <br />
        To be eligible for the Alberta Accelerated Tech Pathway, candidate must
        be eligible under the Alberta Express Entry stream. Candidates must also
        be working in one of 38 tech occupations identified as in-demand by the
        AAIP, or hold a job offer with an Alberta employer that is part of an
        eligible tech industry.
        <br />
        <br />
        <bold>AAIP Farm Stream</bold>
        <br />
        <br />
        The Alberta Farm Stream targets foreign nationals with extensive
        experience owning and operating a farm who have the financial resources
        to launch a new farming operation in Alberta. Candidates for this stream
        must consult with the province and submit a highly detailed proposal
        outlining their plan to launch a new agricultural farm in Alberta.
        <br />
        <br />
        <bold>Graduate Entrepreneur</bold>
        <br />
        <br />
        The Graduate Entrepreneur stream offers a pathway to permanent residence
        to international graduates from Alberta post-secondary institutions that
        wish to start and operate a business in the province. This stream uses a
        points-based Expression of Interest to rank system candidates. Those
        with the highest-ranking points will be invited to submit a detailed
        Business Application. Successful applicants will be issued a nomination
        by the province, which can be used to apply for Canadian permanent
        residence.
        <br />
        <br />
        <bold>Foreign Graduate Entrepreneur Stream</bold>
        <br />
        <br />
        The Foreign Entrepreneur Stream offers a pathway to permanent residence
        to recent graduates who have completed a foreign post-secondary
        credential and who have an intention of starting and operating a
        business in the province of Alberta. Candidates who meet the minimum
        stream requirements can register a profile using AAIP’s online portal
        and submit a Business Application for the chance to start a business in
        Alberta, and eventually apply for permanent residence.
      </h2>
    </div>
  );
}
