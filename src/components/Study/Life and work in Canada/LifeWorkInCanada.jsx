import React, { useRef } from "react";

import NestedTableOfContent from "./../../shared/NestedTableOfContent.jsx";
// import FaqBox from "./../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../globalComponents/Sidebar/SiteMapMenu.jsx";

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

export default function WorkWhileStudyinginCanada() {
  const aboutRef = useRef(null);
  const eligibilityRef = useRef(null);
  const benefitsRef = useRef(null);
  const directRef = useRef(null);
 

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
          h1="Life & Work in Canada"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Study
              {" > "}Work While Studying in Canada
            </div>
            <div class="pages-header">Work While Studying in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
            Working while studying in Canada allows international students the opportunities to gain practical experience, earn income, and enhance their resumes. As of November 2024, students can work off-campus for up to 24 hours per week without needing a work permit. This allows them to balance their studies and work commitments effectively. 

              <div className="pages-paragraph">
              To qualify, students must be enrolled full-time in a program lasting at least six months at a designated learning institution (DLI) and have a valid Social Insurance Number (SIN).
              </div>
              <div className="pages-paragraph">
              On-campus employment is also available to full-time students without a work permit, allowing them to work in various roles within their educational institution. Many programs in Canada also include co-op placements or internships. This is important to the curriculum and provide hands-on experience in the field.
              </div>

            </div>
            {/* <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div> */}

            <div class="pages-header-2" ref={aboutRef}>
           Work Regulations for International Students in Canada
            </div>
            <div className="pages-paragraph">
            To work in Canada, international students must have a valid study permit. This permit allows students to study at a Designated Learning Institution. DLI is an accredited institution recognized by the Canadian government. However, in order to work off-campus, there are additional criteria to meet:

              <ul className="my-2 ml-3">
                <li>
                 Your study permit must explicitly allow off-campus work. 
                </li>

                <li>
                Some study permits may not include this condition, so it’s important to review the terms on your study permit.
                </li>

                <li>
                You must be enrolled as a full-time student in a program that is at least six months long, leading to a degree, diploma, or certificate.
                </li>

              </ul>

              Before you can begin working in Canada, you must apply for a Social Insurance Number (SIN). The SIN is required for tax reporting and to track your earnings. You can apply for your SIN online or visit a Service Canada office once you arrive in Canada. Without a SIN, you cannot legally work in Canada.

              <ul className="my-2 ml-3">
                <li>
                  <strong>On-Campus Work: </strong>
                  International students can work on campus without a work permit if they have a valid study permit that allows such work and are enrolled full-time at the DLI. On-campus employment includes working for the institution itself or for private contractors providing services on campus.
                </li>

                <li>
                <strong>Off-Campus Work: </strong>
                As of November 8, 2024, eligible international students can work up to 24 hours per week off-campus while classes are in session. This is an increase from the previous limit of 20 hours. Students may also work full-time during scheduled breaks, such as summer or winter holidays.
                </li>

                <li>
                <strong>Co-op Programs: </strong>
                If your program requires a co-op or internship component, you must apply for a separate co-op work permit in addition to your study permit.
                </li>

              </ul>

              Students cannot start working until their study program begins and must stop working if they cease to be full-time students or if their study permit expires.
            </div>

            <div className="pages-header-2" ref={eligibilityRef}>
            Work Hours Regulations for Students in Canada
            </div>

            <div className="pages-paragraph">
            Canada has clear regulations on the number of hours international students can work during their studies. These rules are designed to ensure that students focus on their studies while also providing them with the opportunity to earn money.

              <ul className="my-2 ml-3">
                <li>
                  <strong>Undergraduate Programs: </strong>
                  For students with high school diplomas.
                </li>

                <li>
                  <strong>Graduate Programs: </strong>
                  For students with a bachelor's degree or equivalent.
                </li>

                <li>
                  <strong>Diploma/Certificate Programs: </strong>
                  Often offered by colleges for students who want practical,
                  career-focused training.
                </li>

                <li>
                  <strong>Pathway Programs: </strong>
                  Some universities offer pre-university programs for students
                  who do not meet direct entry requirements.
                </li>
              </ul>

              <div className="font-bold text-[17px] mt-4 mb-2">Work During Academic Sessions (School Terms)</div>

              <div>International students can work up to 24 hours per week during regular academic terms. This increase from the previous 20-hour limit was introduced to provide students with more financial flexibility, while also ensuring that they focus on their studies.</div>

              <div className="font-bold text-[17px] mt-4 mb-2">Work During Scheduled Breaks (Winter and Summer Holidays)</div>

              <div>During scheduled breaks, such as winter and summer holidays or reading weeks, international students are permitted to work unlimited hours.</div>

              <ul>
                <li>These breaks offer a great opportunity for students to earn more money and gain more work experience.</li>
                <li>To qualify for unlimited work hours during breaks, you must be enrolled as a full-time student both before and after the break.</li>
              </ul>



            </div>

            <div class="pages-header-2" ref={directRef}>
             Types of Jobs International Students Can Pursue in Canada
            </div>

            <div class="pages-paragraph">
            Canada offers ob opportunities for international students. Whether you are looking for a part-time position during the school term or full-time work during breaks, there are plenty of options.

              <div className="font-bold mt-4 mb-2 text-[17px]">
               On-Campus Jobs
              </div>
              On-campus jobs are a great option for students as they are usually more flexible with academic schedules. 

              <ul className="my-2 ml-3">
                <li>
                On-campus jobs are also exempt from the 24-hour work restriction during the academic term.
                </li>
                <li>
                Common on-campus roles include positions such as research assistant, teaching assistant, library assistant, and working in campus food services or administration.
                </li>

              </ul>

              On-campus employment allows students to stay connected with the academic environment and university community, which can be valuable for networking and professional development.

              <div className="font-bold mt-4 mb-2 text-[17px]">
              Off-Campus Jobs
              </div>
              International students can also work off-campus in a variety of industries. These jobs are subject to the 24-hour weekly limit during academic sessions but are an excellent way to gain Canadian work experience.

              <ul className="my-2 ml-3">
                <li>
                  <strong>Retail: </strong>
                  Many students work in stores or as cashiers, stock clerks, and sales assistants.
                </li>
                <li>
                <strong>Hospitality: </strong>
                Jobs in restaurants, cafes, and hotels are popular among students, including positions like servers, bartenders, or housekeepers.
                </li>
                <li>
                <strong>Internships and Co-op Placements: </strong>
                Students in fields such as engineering, business, and IT often participate in internships or co-op placements to gain industry-specific experience while studying.
                </li>

              </ul>

              Off-campus work is a great way to build a professional network in Canada and develop skills that are highly valued by Canadian employers.


              <div className="font-bold mt-4 mb-2 text-[17px]">
              Freelance and Remote Work
              </div>
              Freelancing and remote work can be done from home or from anywhere with an internet connection.

              <ul className="my-2 ml-3">
              
                <li>
                Students can pursue work in graphic design, web development, writing, video editing, and digital marketing. 
                </li>
                <li>
                Websites like Upwork, Fiverr, and Freelancer offer platforms to find freelance work.
                </li>

              </ul>

              Freelancing allows students to control their work hours, making it easier to balance work with academic commitments. 

            </div>

            <div class="pages-header-2" ref={benefitsRef}>
            Benefits of Working While Studying in Canada
            </div>
            <div className="pages-paragraph">
            Working while studying in Canada offers many advantages beyond just earning money. Here’s how having a job can benefit international students:

            <div className="font-bold mt-4 mb-2 text-[17px]">
            Financial Support
              </div>
              One of the most obvious benefits of working while studying is the financial support it provides. Tuition fees, accommodation, books, and daily expenses can quickly add up, and a part-time job can help reduce the financial burden. Students often use their earnings to pay for essentials like rent, food, and transportation, reducing their reliance on family support or student loans.

              <div className="font-bold mt-4 mb-2 text-[17px]">
              Skill Development
              </div>
              In addition to the financial benefits, working while studying in Canada helps students build a wide range of transferable skills, such as:

              <ul className="my-3">
                <li>Communication, teamwork, customer service, and time management.</li>
                <li>Depending on the job, students can gain hands-on experience in fields like marketing, IT, retail, or customer service.</li>
                <li>Jobs in Canada offer opportunities to network with local professionals, which can be valuable when looking for full-time work after graduation.</li>
              </ul>

              Employers in Canada value work experience, especially Canadian work experience, and having a part-time job during your studies can improve your employability after graduation.


              <div className="font-bold mt-4 mb-2 text-[17px]">
              Post-Graduation Work Opportunities
              </div>
              Students who work while studying are better positioned to apply for a Post-Graduation Work Permit (PGWP), which allows graduates to work full-time in Canada after completing their studies.

              <ul className="my-3">
                <li>To qualify for a PGWP, you must have completed a program of at least eight months at a Designated Learning Institution (DLI). </li>
                <li>The permit is typically issued for the same length as your program of study (e.g., a two-year program would qualify for a three-year work permit).</li>
              </ul>

              Having Canadian work experience through part-time jobs during your studies can significantly enhance your resume and increase your chances of securing a full-time position in Canada after graduation.

              <div className='my-2'>Working while studying in Canada offers international students the opportunity to support themselves financially, gain valuable work experience, and develop skills that will benefit their future careers. By understanding the work regulations, exploring job opportunities, and managing your time effectively, you can make the most of your student experience in Canada.</div>

        
            </div>

          
          </div>
          {/* <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
       
          </div> */}
               <ReadyToStartCard />
        </div>
      </div>
    </div>
  );
}
