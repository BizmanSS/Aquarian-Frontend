import React from "react";
import { Link } from "react-router-dom";
export default function YukonCommunityPilot() {
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
          <Link to="/immigrate/provincial-nominee-program/yukon">Yukon</Link>
          {" > "}Yukon Community Pilot
        </p>
        <div className="header-content">
          <h1 className="heading-about">Yukon Community Pilot</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        The Yukon Community Pilot (YCP) is a new stream of the Yukon Nominee
        Program. This pilot was created to address the specific economic and
        labour market needs of the Yukon.
        <br />
        <br />
        <ul>
          <li>Program Requirements</li>
          <li>Documents Required</li>
          <li>Application Procedure</li>
        </ul>
        <br />
        <br />
        <a href="/assessment" className="button">
          {" "}
          GET STARTED
        </a>
        <br />
        <br />
        <br />
        The Yukon needs skilled workers to meet the specific labour needs of its
        economy. Over the next three years, the Yukon government will issue
        invitations to skilled workers through the Yukon Community Pilot program
        in an attempt to fill gaps in the job market and recruit top tier talent
        to this northern territory. Qualified candidates will be granted a
        2-year location-restricted open work permit.
        <br />
        <br />
        <sp>Program Requirements</sp>
        <br />
        <br />
        <bold>To qualify for the work permit, you must:</bold>
        <br />
        <br />
        <ul>
          1. Have 2 or 3 eligible job offers: <br /> <br />
          <ul>
            <li>All in the same participating Yukon community</li> <br />
            <li>
              Adding up to at least 30 hours of work a week (equal to a
              full-time job)
            </li>{" "}
            <br />
            <li>
              They must be non-seasonal <br />
              <ul>
                <li>
                  In general, this means you have consistent and regularly
                  scheduled paid employment throughout the year
                </li>
              </ul>{" "}
              <br />
            </li>
            <li>The wage must meet or exceed the minimum wage</li> <br />
            <li>
              Your experience must show that you can perform the duties required
              by the jobs
            </li>
          </ul>
        </ul>
        <br />
        Documents Required
        <br />
        <br />
        <ul>
          <li>
            <bold>
              a copy of the nomination letter from the Government of Yukon
              confirming that you’ve been nominated for permanent residence
            </bold>
          </li>
          <br />
          <li>
            <bold>
              a signed letter of support from the Government of Yukon stating:
            </bold>{" "}
            <br />
            that the employers who are offering you the jobs need you to work in
            the community as soon as possible, that the job offers are genuine,
            and the details of the job offers, including names of the employers
            occupation number of hours job locations{" "}
          </li>
        </ul>
        <br />
        <br />
        <sp>Application Procedure</sp>
        <br />
        <br />
        You must<bold> apply online </bold>for the work permit. You can’t apply
        on paper.
        <br />
        <br />
        The application forms and process you need to follow depend on where
        you’re applying from.
        <br />
        <br />
        For more information about how to apply based on where you’re from,
        click here.
        <br />
        <br />
      </h2>
    </div>
  );
}
