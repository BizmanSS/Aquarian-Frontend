import React, { useState } from "react";
import consulation from "../../Assets/Consultation.png";
import assistance from "../../Assets/Assistance.png";
import regular from "../../Assets/Regular.png";
import post from "../../Assets/Post.png";
import preparation from "../../Assets/Preparation.png";
import "../../styles/ServiceInfographics.css";

const ServiceInfographics = () => {
  const [activeContent, setActiveContent] = useState("");

  return (
    <div className="main-div">
      <div className="infographics">
        <img
          className="consulation"
          src={consulation}
          alt=""
          onMouseEnter={() => setActiveContent("contentConsulation")}
          onMouseLeave={() => setActiveContent("")}
        />
        <img
          className="regular"
          src={regular}
          alt=""
          onMouseEnter={() => setActiveContent("contentRegular")}
          onMouseLeave={() => setActiveContent("")}
        />
        <img
          className="preparation"
          src={preparation}
          alt=""
          onMouseEnter={() => setActiveContent("contentPreparation")}
          onMouseLeave={() => setActiveContent("")}
        />
        <img
          className="post"
          src={post}
          alt=""
          onMouseEnter={() => setActiveContent("contentPost")}
          onMouseLeave={() => setActiveContent("")}
        />
        <img
          className="assistance"
          src={assistance}
          alt=""
          onMouseEnter={() => setActiveContent("contentAssistance")}
          onMouseLeave={() => setActiveContent("")}
        />
      </div>

      <div className={`content ${activeContent}`}>
        {!activeContent && <h1 className="service-title">Our Services</h1>}
        {activeContent === "contentConsulation" && (
          <>
            We begin by doing an assessment to understand the eligibility of our
            client for the diverse immigration programs, which is then followed
            by a consultation for various entry paths such as Permanent
            Residency, Express Entry, Visas- Work, Student,
            Business and many more.
          </>
        )}
        {activeContent === "contentAssistance" && (
          <>
            We also offer on-point assistance for interview preparation,
            ensuring that you're ready to shine when it counts. Benefit from
            personalised guidance and mock sessions to refine your responses.
            Our support minimises stress and enhances your chances of success,
            making your interview experience a smooth and rewarding one.
          </>
        )}
        {activeContent === "contentRegular" && (
          <>
            Post which we make sure we do regular follow-ups and maintain open
            communication with immigration authorities on behalf of our clients.
            Our dedicated approach ensures timely updates and resolves any
            queries.
          </>
        )}
        {activeContent === "contentPost" && (
          <>
            After your application is successful you will also receive
            comprehensive guidance on settlement and post-arrival in Canada.
            From housing assistance to cultural integration support, we ensure a
            smooth transition into your new environment.
          </>
        )}
        {activeContent === "contentPreparation" && (
          <>
            Next, we prepare the application forms and gather all the supporting
            documents efficiently. We assist in streamlining this process
            ensuring accuracy and completeness.
            <br />
            Trust in our experts to guide you through the smooth submission
            procedures, saving time and eliminating stress along the way.
          </>
        )}
      </div>
    </div>
  );
};
export default ServiceInfographics;
