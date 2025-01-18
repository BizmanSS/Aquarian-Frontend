import React, { useRef } from "react";

import NestedTableOfContent from "./../../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../../globalComponents/Sidebar/SiteMapMenu.jsx";

// const faqItems = [
//   {
//     question:
//       "How does the closure of the SDS affect processing times for study permits?",
//     answer:
//       "With the closure of the SDS as of November 8, 2024, applicants can expect longer processing times for study permits. While SDS applications were typically processed within 20 days, standard applications may now take 6-8 weeks or longer, depending on various factors such as application volume and completeness.",
//   },
//   {
//     question:
//       "What is the Provincial Attestation Letter (PAL), and how do I obtain one?",
//     answer:
//       "The Provincial Attestation Letter is a new requirement introduced after the closure of SDS. It verifies that you meet specific provincial criteria for studying in Canada. To obtain a PAL:",
//     listAnswer: [
//       "Contact the provincial government or educational institution where you plan to study.",
//       "Provide necessary documentation proving your acceptance and financial stability.",
//       "Follow any additional provincial guidelines to receive the attestation.",
//     ],
//   },
//   {
//     question:
//       "Are there any specific provinces that have additional requirements for international students?",
//     answer:
//       "Yes, some provinces may have additional requirements or processes for international students. For instance:",
//     listAnswer: [
//       "Quebec: Students must apply for a Certificat d'acceptation du Québec (CAQ) before applying for a study permit.",
//       "British Columbia: Some institutions may require additional documentation related to health insurance or housing arrangements.",
//     ],
//   },
// ];

export default function CanadaStudyPermit() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);

  const directRef = useRef(null);
  const faqRef = useRef(null);

  // const tableContentData = [
  //   {
  //     title: "Canada Study Permit and Visa",
  //     scrollTo: aboutRef,
  //     subItems: [
  //       {
  //         title: "Eligibility Requirements for a Study Permit",
  //         scrollTo: eligibilityRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Student Direct Stream (SDS)",
  //     scrollTo: directRef,
  //     subItems: [
  //       {
  //         title: "Key Benefits of the SDS Program",
  //         scrollTo: benefitsRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Closure of the SDS Program",
  //     scrollTo: closureRef,
  //     subItems: [
  //       {
  //         title: "Impact of SDS Closure on International Students",
  //         scrollTo: impactRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Study Permit Application Process Post-SDS",
  //     scrollTo:  studyRef,
  //   },
  //   {
  //     title: "Implications for Indian Students",
  //     scrollTo: implicationsRef,
  //   },

  //   {
  //     title: "FAQs",
  //     scrollTo: faqRef,
  //   },
  // ];

  // const courseTableData = [
  //   {
  //     course: "Computer Science & IT",
  //     universities: "University of Toronto, University of Waterloo, UBC",
  //     salaryRange: "CAD 70,000–100,000 (starting) / Up to CAD 130,000",
  //     jobRoles: "Software Developer, Data Scientist, Cybersecurity Analyst, AI Specialist, Network Engineer",
  //   },
  //   {
  //     course: "Engineering",
  //     universities: "University of Alberta, McGill University, University of Calgary",
  //     salaryRange: "CAD 60,000–130,000",
  //     jobRoles: "Civil Engineer, Mechanical Engineer, Electrical Engineer, Aerospace Engineer, Software Engineer",
  //   },
  //   {
  //     course: "Business Administration & Management",
  //     universities: "Rotman School of Management (UofT), Desautels Faculty of Management (McGill), Sauder School of Business (UBC)",
  //     salaryRange: "CAD 70,000–120,000 / Senior Roles: CAD 150,000+",
  //     jobRoles: "Business Analyst, Financial Manager, Marketing Manager, Supply Chain Manager, Consultant",
  //   },
  //   {
  //     course: "Health Sciences",
  //     universities: "University of Toronto, McGill University, University of Ottawa",
  //     salaryRange: "CAD 75,000 (starting) / Specialized roles: CAD 100,000+",
  //     jobRoles: "Registered Nurse, Pharmacist, Public Health Specialist, Healthcare Manager, Medical Researcher",
  //   },
  //   {
  //     course: "Data Science & Cybersecurity",
  //     universities: "University of Toronto, University of Waterloo, Carleton University",
  //     salaryRange: "CAD 80,000–100,000 / Cybersecurity: CAD 75,000–120,000",
  //     jobRoles: "Data Analyst, Cybersecurity Specialist, Data Scientist, Machine Learning Engineer, IT Consultant",
  //   },
  // ];

  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="ST"
          h1="Study In Canada"
          h2="Pre-Departure Breifing"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Study
              {" > "}Study In Canada
              {" > "}Pre-departure Briefing – Study in Canada
            </div>
            <div class="pages-header">
              Pre-departure Briefing – Study in Canada
            </div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Studying abroad is a transformative experience that opens doors to
              new opportunities, cultures, and perspectives. Canada is known for
              its high-quality education system, diverse culture, and welcoming
              environment. It has become a popular destination for international
              students.
              <div className="pages-paragraph">
                Preparing to study in Canada is an exciting journey, but it
                requires careful planning to ensure a smooth transition into
                your academic and personal life in a new country. An important
                part of this preparation is the pre-departure briefing. This
                guide will help you navigate the steps, from visa requirements
                to cultural adjustments, ensuring that you're ready for your
                educational journey in Canada.
              </div>
            </div>
            {/* <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div> */}

            <div class="pages-header-2" ref={aboutRef}>
              Importance of Pre-departure Briefing
            </div>
            <div className="pages-paragraph">
              A pre-departure briefing ensures that students understand all the
              necessary requirements and procedures to avoid last-minute
              challenges. The main goals of a pre-departure briefing are:
              <div className="mt-4 mb-2 font-bold text-[16px]">
                1. Understanding Visa Requirements:
              </div>
              Securing the correct visa and study permit is essential for your
              legal stay in Canada. With the Student Direct Stream (SDS) program
              now discontinued as of 2024, international students must follow
              the regular study permit application process, which can include
              submitting proof of acceptance, financial support, identity
              documents, and more.
              <div className="mt-4 mb-2 font-bold text-[16px]">
                2. Logistical Preparation:
              </div>
              This includes organizing your travel, accommodation, and
              understanding Canadian transportation systems to ease your
              transition into Canadian life.
              <div className="mt-4 mb-2 font-bold text-[16px]">
                3. Cultural Orientation:
              </div>
              Knowing about Canadian culture, customs, and societal norms can
              help you avoid culture shock and foster better interactions in
              your new environment.
            </div>

            <div className="pages-header-2" ref={eligibilityRef}>
              Pre-departure Checklist: Key Components
            </div>
            <div className="pages-paragraph">
              Following a detailed checklist will ensure that you've covered all
              aspects of your preparation before leaving for Canada. Below are
              the key items to consider.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                1. Documents
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Valid Passport: </strong>
                  Ensure your passport is valid for at least six months beyond
                  your planned stay in Canada.
                </li>
                <li>
                  <strong>Study Permit: </strong>
                  Apply for a study permit through Immigration, Refugees, and
                  Citizenship Canada (IRCC). While SDS has been discontinued,
                  you can still apply for a study permit through the regular
                  process. Ensure you have all required documents, such as:
                  <ul>
                    <li>
                      Letter of Acceptance from a designated learning
                      institution (DLI).
                    </li>
                    <li>
                      Proof of Financial Support (e.g., bank statements,
                      affidavits of support, scholarship awards).
                    </li>
                    <li>
                      Identity Documents (e.g., passport, birth certificate,
                      etc.).
                    </li>
                  </ul>
                </li>

                <li>
                  <strong>Health Insurance: </strong>
                  Some provinces require international students to have
                  provincial health insurance, or you may need to arrange
                  private health insurance. Make sure you understand your health
                  coverage before arriving.
                </li>
              </ul>
              Once your visa is secured, it’s time to focus on logistical
              arrangements for your move to Canada.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                2. Travel Arrangements
              </div>
              <ul className="my-2 ml-3">
                <li>
                  <strong>Book Flights: </strong>
                  Book your flight well in advance. Pay attention to travel
                  dates, baggage allowances, and make sure you have a copy of
                  your itinerary.
                </li>
                <li>
                  <strong>Airport Pickup: </strong>
                  Many Canadian universities offer airport pickup services for
                  international students. If this is available, confirm the
                  details ahead of time.
                </li>

                <li>
                  <strong>Confirm Travel Itinerary: </strong>
                  Double-check all flight details and plan your arrival to
                  ensure a smooth transition.
                </li>
              </ul>
              <div className="mt-3 mb-2 font-bold text-[17px]">
                3. Accommodation
              </div>
              Finding suitable accommodation is important for your comfort and
              well-being during your studies.
              <ul className="my-2 ml-3">
                <li>
                  <strong>On-Campus Housing: </strong>
                  Most universities provide on-campus housing options that are
                  convenient and often come with meal plans.
                </li>
                <li>
                  <strong>Off-Campus Housing: </strong>
                  If you prefer living off-campus, explore local rental options
                  through websites like Kijiji or Craigslist. Ensure you
                  understand lease agreements and tenant rights.
                </li>
              </ul>
              Be sure to have the address, contact details of your landlord or
              accommodation provider, and move-in dates ready.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                4. Health Preparations
              </div>
              Health insurance is mandatory for international students in
              Canada. Most provinces require students to enroll in their health
              insurance plan upon arrival. Alternatively, some institutions
              offer their own health insurance plans.
              <ul className="my-2 ml-3">
                <li>
                  <strong>Provincial Health Coverage: </strong>
                  Research the specific health coverage available in your
                  province of study.
                </li>
                <li>
                  <strong>Private Insurance Options: </strong>
                  If provincial coverage is not available immediately, consider
                  purchasing private health insurance until you are eligible.
                </li>
                <li>
                  <strong>Medical Check-ups: </strong>
                  Schedule medical check-ups and vaccinations (if needed). Some
                  schools may require specific immunization records.
                </li>
              </ul>
              <div className="mt-3 mb-2 font-bold text-[17px]">
                5. Financial Planning
              </div>
              Once you arrive in Canada, set up a Canadian bank account for
              easier access to your finances. Look into student accounts that
              offer benefits for international students.
              <div className="my-3 font-bold">Tuition Fees</div>
              Tuition fees vary significantly depending on the institution and
              program of study:
              <ul className="my-2 ml-3">
                <li>
                  <strong>Undergraduate Programs: </strong>
                  Typically range from CAD 7,000 to CAD 29,000 per year.
                </li>
                <li>
                  <strong>Graduate Programs: </strong>
                  Can range from CAD 7,000 to CAD 50,000 per year.
                </li>
              </ul>
              <div className="my-3 font-bold">Cost of Living</div>
              In addition to tuition fees, consider living expenses such as
              accommodation, food, transportation, and personal expenses:
              <ul className="my-2 ml-3">
                <li>
                  <strong>Accommodation Costs: </strong>
                  Monthly rent can range from CAD 400 (shared accommodation) to
                  CAD 1,500 (private apartment) depending on location.
                </li>
                <li>
                  <strong>Food Expenses: </strong>
                  Budget around CAD 200 to CAD 400 per month for groceries.
                </li>
                <li>
                  <strong>Transportation Costs: </strong>
                  Public transportation passes typically cost between CAD 80 and
                  CAD 120 per month.
                </li>
              </ul>
              <div className="mt-3 mb-2 font-bold text-[17px]">
                6. Packing Essentials
              </div>
              Canada experiences varied climates. Depending on the region and
              season, pack appropriate clothing for the weather. Winters,
              especially in northern and central Canada, can be extremely cold.
              <ul className="my-2 ml-3">
                <li>
                  <strong>Academic Materials: </strong>
                  Pack the necessary study materials such as textbooks, a
                  laptop, stationery, and other school supplies.
                </li>
                <li>
                  <strong>Personal Items: </strong>
                  Bring personal items like toiletries, phone, and any
                  electronics you may need. Don’t forget chargers, converters,
                  and any other essentials that will make your life more
                  comfortable.
                </li>
              </ul>
              English and French are the official languages. Depending on where
              you study (e.g., Quebec), proficiency in French may be beneficial.
            </div>

            <div class="pages-header-2" ref={directRef}>
              Pre-departure Tips
            </div>
            <div class="pages-paragraph">
              Beyond just the checklist, here are some practical tips to enhance
              your readiness for studying in Canada.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                Familiarize Yourself with Academic Expectations
              </div>
              Canada's academic system may differ from what you're used to, so
              it’s important to research your institution's grading system,
              course structures, and academic policies. Canadian education
              system offers different educational pathways, including:
              <ul className="my-2 ml-3">
                <li>
                  <strong>Diplomas and Certificates: </strong>
                  Offered by colleges and technical institutes, these programs
                  focus on practical skills and can range from one to three
                  years.
                </li>
                <li>
                  <strong>Undergraduate Degrees: </strong>
                  Bachelor's degrees usually take three to four years to
                  complete at universities.
                </li>
                <li>
                  <strong>Graduate Programs: </strong>
                  Master's degrees require one to two years of study after
                  completing a bachelor's degree. Doctoral programs can take
                  three to five years.
                </li>
              </ul>
              The quality of education in Canada is highly regarded globally,
              with many institutions consistently ranking among the top in the
              world. Understanding the structure of your program will help set
              academic expectations and goals.
              <div className="my-3 font-bold">Cost of Living</div>
              Familiarize yourself with the grading system used by Canadian
              institutions:
              <ul className="my-2 ml-3">
                <li>
                  The typical grading scale ranges from A (excellent) to F
                  (fail).
                </li>
                <li>
                  Participation in class discussions may be emphasized more than
                  in some other countries.
                </li>
              </ul>
              <div className="mt-3 mb-2 font-bold text-[17px]">
                Research Canadian Culture
              </div>
              Canada is a culturally diverse and welcoming country.
              Familiarizing yourself with Canadian social customs, language
              variations, and regional differences will help you interact
              smoothly with your peers and community. Learning a bit about the
              history and multicultural makeup of Canada can also enhance your
              experience.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                Connect with Alumni or Current Students
              </div>
              One of the best ways to prepare for life in Canada is to connect
              with students who are already there. Reach out to alumni or
              current international students from your institution to gain
              insights into daily life in Canada and get useful advice.
              <div className="mt-3 mb-2 font-bold text-[17px]">
                Mental Preparation
              </div>
              Culture shock and homesickness are common experiences for
              international students. Being mentally prepared for these
              challenges will help you manage them better. Stay connected with
              family and friends, and consider joining student groups or
              communities to make new connections once you arrive.
            </div>

            <div class="pages-header-2" ref={aboutRef}>
              Latest Updates
            </div>
            <div className="pages-paragraph">
              The Student Direct Stream has been officially discontinued.
              Students now need to apply for study permits through the regular
              process.
              <ul className="my-3">
                <li>
                  With the changes in visa processing routes, it is now even
                  more important to apply well in advance of your planned travel
                  date.{" "}
                </li>
                <li>
                  While scholarships and financial aid options remain available,
                  be sure to check for the most up-to-date eligibility criteria
                  and deadlines. Many Canadian universities offer competitive
                  scholarships, so research these opportunities before you
                  leave.
                </li>
              </ul>
              A well-organized pre-departure briefing is essential for anyone
              planning to study in Canada. By following a structured checklist
              and keeping up to date with the latest changes—such as the
              discontinuation of the SDS program—you can ensure that you’re
              fully prepared for your academic and cultural journey. Canada
              offers a wealth of opportunities for international students, and
              with careful preparation, you can make the most of your experience
              studying in one of the world's most welcoming and diverse
              countries.
            </div>
          </div>
          <div ref={faqRef}>
            {/* <FaqBox faqItems={faqItems} /> */}
            <ReadyToStartCard />
          </div>
        </div>
      </div>
    </div>
  );
}
