import React from "react";
import DirectPathwaysBox from './DirectPathWaysBox.jsx'
import IndirectPathwaysBox from './IndirectPathwaysBox.jsx'
import MigrateProcessBox from './MigrateProcessBox.jsx'
import CheckEligibilityCard from './CheckEligibilityCard.jsx'
import FaqBoxImmigration from './FaqBoxImmigration.jsx'
import ReadyToStartCard from './ReadyToStartCard.jsx'
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const Table = () => {
  const data = [
    {
      name: "French-speaking workers in Canada: health care",
      ic: "Unlimited",
      as: "271 (Last updated: 2022-02-15)",
    },
    {
      name: "French-speaking workers in Canada: essential, non-health care",
      ic: "Unlimited",
      as: "2,054 (Last updated: 2022-02-15)",
    },
    {
      name: "French-speaking recent international graduates from a Canadian institution",
      ic: "Unlimited",
      as: "4,697 (Last updated: 2022-02-15)",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Stream name</th>
          <th>Intake cap</th>
          <th>Applications submitted</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ic}</td>
            <td>{item.as}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const TableGeneral = () => {
  const data = [
    {
      name: "Workers in Canada: health care",
      ic: "20000",
      as: "7,155 (Last updated: 2022-02-15)",
    },
    {
      name: "Workers in Canada: essential, non-health care",
      ic: "30000",
      as: "Maximum reached",
    },
    {
      name: "Recent international graduates from a Canadian institution",
      ic: "40000",
      as: "Maximum reached",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Stream name</th>
          <th>Intake cap</th>
          <th>Applications submitted</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.ic}</td>
            <td>{item.as}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default function PR() {
  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        <SiteMapMenu type="I" h1="Permanent Residency"t></SiteMapMenu>
        <div class="pages-content-div">
          <div class="pages-content-text">
            On April 14, 2021, Immigration Minister Marco Mendicino announced
            Immigration, Refugees and Citizenship Canada’s intention to create
            several new immigration pathways for permanent residence for
            essential workers and international graduates who are currently
            in Canada working.
            <br></br>
            <br></br>
            CONTACT US NOW FOR A FREE CONSULTATION TO DISCUSS YOUR PR
            OPTIONS

            The TR to PR immigration pathways were introduced via special
            public policies and aim to grant permanent status to temporary
            workers and international graduates who are in Canada and who
            possess the sought-after skills and experience needed to
            accelerate Canada’s economic recovery following the COVID 19
            pandemic.

            Within these announcements, Immigration, Refugees, and
            Citizenship Canada published 4 special public policies,
            introducing these new pathways to Canadian permanent residence
          </div>

          <DirectPathwaysBox />
          <IndirectPathwaysBox />
          <MigrateProcessBox />
          <CheckEligibilityCard />
          <FaqBoxImmigration />
          <ReadyToStartCard />




        </div>
      </div>
    </div>
  );
}
