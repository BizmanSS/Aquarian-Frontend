import React, { useRef } from "react";

import NestedTableOfContent from "../../shared/NestedTableOfContent.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";
import FaqBox from "../../shared/NestedFaqBox.jsx";

const faqItems = [
  {
    question:
      " Do I need a visa if I can work without a permit?",
    answer:
      " Yes, you may still need a Temporary Resident Visa (TRV) or an Electronic Travel Authorization (eTA) to enter Canada, depending on your nationality..",
  },
  {
    question: "How long can I work in Canada without a permit?",
    answer:
      " The duration varies by category; for example, short-term researchers can work for up to 120 days without a permit.",
  },
  {
    question: " Can family members of foreign representatives work in Canada?",
    answer:
      " Yes, family members of foreign representatives are also eligible to work without a permit.",
  },
];
export default function WorkinCanadawithoutaWorkPermit() {
  const WorkPermitRef = useRef(null);
  const CategoriesRef = useRef(null);

  const faqRef = useRef(null);

  const tableContentData = [
    {
      title: "Types of jobs that do not require a Work Permit in Canada",
      scrollTo: WorkPermitRef,
    },
    {
      title: "Eligible Job Categories",
      scrollTo: CategoriesRef,
    },
    {
      title: "FAQs",
      scrollTo: faqRef,
    },
  ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        <SiteMapMenu

          type="W"
          h1="Work Without a Permit"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Work
              {" > "}Work Without a Permit
            </div>
            <div class="pages-header">Work in Canada without a Work Permit</div>
            <div class="pages-paragraph space-fix intro-size-fix">
              Canada is popular amongst immigrants for its growing job
              opportunities and favourable environment. A Canadian work permit
              is required which is a legal document that allows foreign
              nationals to work and get paid by Canadian employers. However,
              some exceptions allow people to work in Canada without a work
              permit. For instance, foreign nationals who work as athletes or
              coaches, public speakers, and other exempt categories are allowed
              to work without a work permit.
            </div>
            <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div>
            <div class="pages-header-2" ref={WorkPermitRef}>
              Types of jobs that do not require a Work Permit in Canada
            </div>
            <div className="pages-paragraph">
              Certain job categories allow foreign nationals to work in Canada
              without a work permit. However, it's important to understand that
              simply being listed here does not automatically qualify someone
              for a work permit exemption. To be eligible, the job must appear
              on this list, and the individual must also satisfy additional
              criteria specific to their role, as detailed on the International
              Mobility Program.
              </div>
              <div class="pages-header-2 mt-6 " ref={CategoriesRef}>
              Eligible Job Categories
            </div>
            <div className="pages-paragraph">

              <ul >
                <li>Athlete or Coach</li>
                <li>Aviation Accident or Incident Investigator</li>
                <li>Business Visitor</li>
                <li>Civil Aviation Inspector</li>
                <li>Clergy</li>
                <li>Convention Organizer</li>
                <li>Crew Member</li>
                <li>Emergency Service Provider</li>
                <li>Examiner and Evaluator</li>
                <li>Expert Witness or Investigator</li>
                <li>Family Member of Foreign Representative</li>
                <li>Foreign Government Officer or Representative</li>
                <li>Health Care Student</li>
                <li>Judge, Referee, or Similar Official</li>
                <li>Military Personnel</li>
                <li>News Reporter or Film and Media Crew Member</li>
                <li>Producer or Staff Member Working on Advertisements</li>
                <li>Performing Artist</li>
                <li>Public Speaker</li>
                <li>Short-Term Highly-Skilled Worker</li>
                <li>Short-Term Researcher</li>
                <li>Student Working Off-Campus</li>
                <li>Student Working On-Campus</li>
              </ul>
              </div>
              If a foreign national is employed in one of these positions, they
              may qualify for a work permit exemption.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Business Visitors
            </div>
              Business visitors may enter Canada to engage in international
              business activities without entering the local labour market.
              These individuals typically:
              <ul className="my-3">
                <li>Work for a company located outside of Canada.</li>
                <li>Are paid from outside Canada.</li>
                <li>
                  Visit Canada to attend meetings, and conferences, or provide
                  after-sales services.
                </li>
              </ul>
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Athletes and Coaches
            </div>
              Professional athletes and coaches can compete, train, or
              participate in events in Canada without a work permit.
              <br></br>
              Foreign nationals on a foreign athletic team competing in Canada
              are exempt from needing a work permit. However, if you are part of
              a Canadian team, a work permit is required.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Aviation Accident or Incident Investigator
            </div>
              Investigators working on aviation accidents or incidents may enter
              Canada without a work permit to conduct their investigations, as
              their work is typically tied to international safety standards and
              does not impact the local labour market.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Civil Aviation Inspector
            </div>
              Civil aviation inspectors can perform inspections and audits in
              Canada without a work permit, as their role is essential for
              maintaining international aviation safety standards.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Clergy
            </div>
              Clergy members may provide religious services in Canada without a
              work permit if they are invited by a religious organization and
              their activities do not involve entering the Canadian labour
              market. Eligible candidates include an ordained minister, a member
              of a religious order, or a lay person with duties such as
              preaching doctrine and giving spiritual counselling
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Convention Organizer
            </div>
              Foreign nationals organizing conventions may need a work permit if
              they have an active role; however, if their role is supervisory or
              passive, they might be exempt.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Crew Member
            </div>
            Crew members employed on foreign vessels or aircraft are not
            required to obtain a work permit when operating on international
            transport routes, as their roles are deemed to be outside the
            Canadian labour market.
            <br></br>
            <br></br>
            If you are a foreign national working as a truck driver, bus driver,
            or in the shipping or airline industries, you may also be eligible
            for an exemption from needing a work permit. To qualify, your
            employment must satisfy two key criteria:
            <ul className="my-3">
              <li>
                <strong>Ownership and Registration: </strong>You must be
                operating vehicles that are owned and registered by companies
                based outside of Canada, specifically to transport cargo and/or
                passengers internationally.
              </li>
              <li>
                <strong>Operational Role:</strong> Your work must be directly
                related to the operation of these vehicles or the provision of
                services to passengers.
              </li>
            </ul>
            Meeting these conditions allows you to engage in your professional
            activities in Canada without the need for a work permit.
            <div class="text-[22px] font-bold  mt-16 mb-5" >
              Emergency Service Provider
            </div>
              Emergency service providers who come to Canada to help during
              emergencies can work without a permit, especially if Canadian
              authorities ask for their assistance. To qualify for this
              exemption, your work must focus on saving lives or protecting
              property in Canada. Emergencies can include natural disasters like
              fires and floods, as well as industrial accidents that pose a risk
              to the environment.
            <div class="text-[22px] font-bold mt-16 mb-5" >
              Examiner and Evaluator
            </div>
              Examiners and evaluators conducting assessments for educational
              institutions or professional bodies can operate in Canada without
              needing a work permit, provided their activities are temporary.
              The activities can include supervision/evaluation of academic
              projects, thesis, and research proposals.

            <div class="text-[22px] font-bold mt-16 mb-5" >
            Expert Witness or Investigator
            </div>
            Expert witnesses or investigators called to provide testimony or conduct investigations related to legal proceedings can enter Canada without a work permit.


            <div class="text-[22px] font-bold mt-16 mb-5" >
            Family Member of Foreign Representative
            </div>
            Family members of foreign representatives (diplomats) may be eligible to work in Canada without a permit under specific conditions.
            <ul className="my-3">
              <li>
              They need to be accredited by GAC or Global Affairs Canada.

              </li>
              <li>
              They must have a no-objection letter issued by GAC.

              </li>
            </ul>



            <div class="text-[22px] font-bold mt-16 mb-5" >
            Foreign Government Officer or Representative
            </div>
            Foreign government officials who come to Canada for official duties do not need a work permit, as their work is considered diplomatic.
            <ul className="my-3">
              <li>
              You may be eligible for a work permit exemption if you meet any of the following three conditions:

              </li>
              <li>
              You are an employee of a foreign government participating in an exchange agreement that allows officials to work in both your country and Canada.

              </li>
              <li>You are a foreign diplomat or an official representative of another country.
</li>
<li>You are a foreign diplomat or an official representative of the United Nations.
</li>
            </ul>
            If you are an employee of another government and plan to work in Canada for more than three months, you will need to obtain an official letter.







            <div class="text-[22px] font-bold mt-16 mb-5" >
            Health Care Student
            </div>
            International students studying healthcare in Canada can participate in certain clinical placements without needing a work permit, as long as they meet specific criteria set by their educational institutions.
            <br></br>
            If you are a foreign national studying in a healthcare program in Canada and want to work as part of your training, you may qualify for a work permit exemption. To be eligible, you must fulfil the following four conditions:

            <ul className="my-3">
              <li>
              You must be involved in clinical clerkships.

              </li>
              <li>
              The primary purpose of your employment must be for training.

              </li>
              <li>You need written approval from the provincial regulatory body that oversees your profession (note that this requirement may vary by province).

</li>
<li>Your training must last less than four months.

</li>
            </ul>
            If you do not meet all of these conditions, you will need to obtain a work permit.




            <div class="text-[22px] font-bold mt-16 mb-5" >
            Judge, Referee or Similar Official
            </div>
           Judges and referees officiating at international competitions can work in Canada without a permit, as their roles are critical to maintaining the integrity of the events.

<div class="text-[22px] font-bold mt-16 mb-5" >
Military Personnel
            </div>
            Military personnel from allied nations may enter Canada under the Visiting Forces Act without needing a work permit for official duties.


<div class="text-[22px] font-bold mt-16 mb-5" >
News Reporter or Film and Media Crew
            </div>
            Foreign journalists and media crews can report on events in Canada without a work permit if they are covering stories for international outlets and not engaging with the local labour market.



<div class="text-[22px] font-bold mt-16 mb-5" >
Producer or Staff Member Working on Advertisements
            </div>
            Producers and essential staff involved in foreign-financed commercial shoots lasting less than two weeks may qualify as business visitors and thus avoid needing a work permit.





<div class="text-[22px] font-bold mt-16 mb-5" >
Performing Artist
            </div>
            Certain performing artists can perform in Canada without a permit if their engagement is short-term and does not affect the local job market.


<div class="text-[22px] font-bold mt-16 mb-5" >
Public Speaker
            </div>
            Public speakers invited to speak at events lasting less than five days do not require a work permit, provided their activities do not impact the Canadian labour market.




<div class="text-[22px] font-bold mt-16 mb-5" >
Short-term Highly-skilled Worker
            </div>
            Highly skilled workers classified under NOC Skill Level 0 or A may be able to work temporarily in Canada without a work permit, provided they meet certain conditions that ensure they do not establish residency in Canada during this time.
<br></br><br></br>These workers can qualify for short-term work in Canada under the following conditions:

            <ul className="my-3">
              <li>
              <strong>15-Day Exemption:</strong> You can work for 15 consecutive calendar days or less, but you must wait at least six months since your last use of this exemption.

              </li>
              <li>
              <strong>30-Day Exemption:</strong> You can work for 30 calendar days or less, with a requirement to have waited at least 12 months since your previous use of this exemption.

              </li>
            </ul>
            By adhering to these guidelines, highly skilled workers can take advantage of the work permit exemption for brief assignments in Canada.


<div class="text-[22px] font-bold mt-16 mb-5" >
Short-term Researcher
            </div>
           Researchers conducting short-term projects may also qualify for exemption from obtaining a work permit if they meet certain criteria related to their research activities.

<div class="text-[22px] font-bold mt-16 mb-5" >
Student Working Off-Campus
            </div>
           Full-time international students in Canada do not need a work permit to work off-campus while studying. They can work up to 20 hours per week during academic sessions and work full-time during scheduled holidays and breaks.



<div class="text-[22px] font-bold mt-16 mb-5" >
On-Campus Work
            </div>
            As a full-time international student, you do not require a work permit to work on-campus at your educational institution. Like off-campus work, you can work up to 20 hours per week during study periods and full-time during academic holidays and breaks.

<br></br>
While working without a permit, foreign nationals cannot enter the Canadian labor market unless explicitly allowed by their exemption category. Some categories may require proof of employment or an invitation from a Canadian entity. Even when a work permit is not required, other documentation such as a Temporary Resident Visa (TRV) or an Electronic Travel Authorization (eTA) may be necessary for entering Canada.

          </div>

          <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />

            <ReadyToStartCard />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
