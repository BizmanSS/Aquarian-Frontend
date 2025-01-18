import React, { useRef } from "react";

import NestedTableOfContent from "./../../../shared/NestedTableOfContent.jsx";
import FaqBox from "./../../../shared/NestedFaqBox.jsx";
import ReadyToStartCard from "./../../../shared/ReadyToStart.jsx";
import SiteMapMenu from "./../../../globalComponents/Sidebar/SiteMapMenu.jsx";

// const faqItems = [
//   {
//     question: "Can Canadian citizenship be revoked?",
//     answer:
//       "Canadian citizenship can be withdrawn under exceptional circumstances like:",
//     listAnswer: [
//       "If citizenship was acquired through fraud.",
//       "If the individual has committed a crime.",
//       "If their permanent residence had been withdrawn before they became citizens.",
//     ],
//   },
//   {
//     question:
//       "What are the common reasons for denial of Canadian citizenship applications?",
//     answer:
//       "Not all Canadian citizenship applicants get approved. Denials are very common due to the following reasons:",
//     listAnswer: [
//       "Failure to meet residency requirements",
//       "Lack of acceptable language skills",
//       "Criminal record and connection with criminal activity",
//       "Incompletion or error in application forms",
//       "Pendency of other immigration cases or unresolved PR status",
//     ],
//   },
//   {
//     question:
//       "If I was born outside of Canada to Canadian citizen parents am I automatically a Canadian citizen?",
//     answer:
//       "Yes, if you were born outside of Canada to a Canadian citizen parent, then you are automatically a Canadian citizen.",
//   },
//   {
//     question: "Can one lose his or her citizenship of Canada?",
//     answer:
//       "Yes, one can lose his or her citizenship in Canada if he or she renounces his or her citizenship or if the person is declared to have committed a serious crime.",
//   },
//   {
//     question:
//       "What is the difference in the rights of a Canadian Citizen and Permanent Resident?",
//     answer:
//       "Canadian citizens and permanent residents share many rights, but there are notable differences.",
//   },
// ];

export default function CounselingforStudyinCanada() {
  const aboutRef = useRef(null);
  const factorRef = useRef(null);
  const workRef = useRef(null);
  const costRef = useRef(null);
  const eligibilityRef = useRef(null);
  const benefitRef = useRef(null);
  const faqRef = useRef(null);
  const requireRef = useRef(null);
  const drawsRef = useRef(null);
  const latestdrawsRef = useRef(null);
  const validityRef = useRef(null);
  const calculateRef = useRef(null);
  const improveRef = useRef(null);

  // const tableContentData = [
  //   {
  //     title: "What is the Express Entry Program?",
  //     scrollTo: aboutRef,
  //   },
  //   {
  //     title: "Benefits of Applying for Canada Express Entry",
  //     scrollTo: benefitRef,
  //   },
  //   {
  //     title: "Express Entry Requirements",
  //     scrollTo: requireRef,
  //   },
  //   {
  //     title: "Express Entry Eligibility Points and CRS Score",
  //     scrollTo: eligibilityRef,
  //     subItems: [
  //       {
  //         title: "Key Factors that Affect Your CRS Score",
  //         scrollTo: factorRef,
  //       },
  //       { title: "How to Improve Your CRS Score?", scrollTo: improveRef },
  //     ],
  //   },
  //   {
  //     title: "How Does Express Entry Work?",
  //     scrollTo: workRef,
  //   },
  //   {
  //     title: "Express Entry Costs",
  //     scrollTo: costRef,
  //   },
  //   {
  //     title: "Express Entry Draws",
  //     scrollTo: drawsRef,
  //     subItems: [
  //       {
  //         title: "Monitoring the Express Entry Latest Draws",
  //         scrollTo: latestdrawsRef,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Validity of Express Entry Profile",
  //     scrollTo: validityRef,
  //   },

  //   {
  //     title: "How to Calculate Your CRS Score",
  //     scrollTo: calculateRef,
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
          h1="Study In Canada"
          h2="Counselling"
        ></SiteMapMenu>

        <div class="pages-content-div">
          <div class="pages-content-text-wrapper ">
            <div className="pages-current-page-link">
              <a href="/">Home</a>
              {" > "}Study
              {" > "}Study In Canada
              {" > "}Counselling
            </div>
            <div class="pages-header">Counseling for Study in Canada</div>

            <div class="pages-paragraph space-fix intro-size-fix">
              Studying abroad is a transformative experience, but the journey
              can often feel overwhelming. For international students,
              especially those planning to study in Canada, the process involves
              navigating through a series of complex steps—from choosing the
              right program to securing a student visa. This is where
              professional counseling for study in Canada becomes valuable.
              <div className="pages-paragraph">
                Canada has become one of the most sought-after study
                destinations for students around the world, due to to its
                high-quality educational system, inclusive culture, and strong
                post-graduation work opportunities. However, studying in Canada
                involves more than just gaining admission—it requires expert
                guidance to ensure a smooth transition from application to
                arrival and beyond. With the right counseling services,
                international students can make informed decisions and set
                themselves up for success.
              </div>
            </div>
            {/* <div className="table-of-content-container">
              <NestedTableOfContent data={tableContentData} />
            </div> */}

            <div class="pages-header-2" ref={aboutRef}>
              Canada as a Preferred Study Destination
            </div>
            <div className="pages-paragraph">
              Canada has ranked among the top study destinations for
              international students due to several key advantages:
              <ul className="my-3">
                <li>
                  Canadian universities are globally recognized for their
                  academic excellence. They offer a wide range of programs, both
                  undergraduate and postgraduate, across diverse fields of
                  study.
                </li>
                <li>
                  It is one of the most multicultural countries in the world,
                  making it easy for international students to integrate and
                  feel at home.
                </li>
                <li>
                  Students can work part-time during their studies and full-time
                  during breaks, gaining valuable work experience in Canada.
                </li>
                <li>
                  Canada offers post-graduation work permits, which allow
                  students to gain hands-on experience in the country after
                  completing their studies.
                </li>
                <li>
                  Canada is known for its high safety standards, healthcare
                  system, and overall quality of life.
                </li>
              </ul>
            </div>

            <div className="note-cec">
              <div>
                <span style={{ fontWeight: "bold" }}>Note:</span> Dicover Your
                CRS Score to Boost Your Immigration Journey!
              </div>
              <button className="button-cec">Calculate Now</button>
            </div>

            <div className="pages-header-2" ref={benefitRef}>
              Educational Counseling for Canada
            </div>
            <div className="pages-paragraph">
              Educational counselors guide students through every aspect of the
              study-abroad process. With their expertise, students gain access
              to personalized advice that helps them make informed decisions.
              The role of counselors includes:
              <ul className="my-2 ml-3">
                <li>
                  They help students choose the university and program that best
                  aligns with their academic interests and career goals.
                </li>

                <li>
                  Applying to study in Canada involves several steps, from
                  preparing documents to meeting specific admission
                  requirements. Counselors guide students through each phase,
                  ensuring that no detail is overlooked.
                </li>

                <li>
                  Counselors provide advice on managing the financial aspect of
                  studying abroad, including exploring scholarship opportunities
                  and offering budgeting assistance.
                </li>
              </ul>
              One of the key benefits of working with a professional counselor
              is the personalized advice that is tailored to each student’s
              unique needs and goals. Whether a student is looking to study in a
              big city like Toronto or Vancouver, or in a smaller, quieter town,
              our counselors ensure that every decision is made with careful
              consideration of the student’s academic background, personal
              preferences, and financial situation.
            </div>

            <div class="pages-header-2" ref={requireRef}>
              Our Counseling Approach
            </div>
            <div class="pages-paragraph">
              At Aquarian Immigration Services, we take pride in offering
              personalized, professional counseling that ensures students
              achieve their educational and professional aspirations in Canada.
              With over 30 years of combined experience, our team is equipped
              with the expertise and knowledge to guide students through every
              step of the process.
              <div className="font-bold my-3 text-[18px]">Initial Consultation</div>

              <ul className="my-2 ml-3">
                <li>
                The counseling journey begins with a thorough initial consultation, where we take the time to understand the student’s academic background, career goals, and preferences. 
                </li>
                <li>
                During this meeting, we assess the student’s academic qualifications, discuss their goals, and begin formulating a personalized strategy for their study abroad application.
                </li>
              </ul>

              <div className="font-bold my-3 text-[18px]">Tailored Recommendations</div>

<ul className="my-2 ml-3">
  <li>
  Once we have a clear understanding of the student’s needs, we provide tailored recommendations for universities and programs. 
  </li>
  <li>
  These recommendations are carefully selected based on factors such as the student’s academic interests, long-term career aspirations, location preferences, and budget. 
  </li>
  <li>
  We also guide students on standardized test requirements (e.g., IELTS, TOEFL, GRE, or GMAT), scholarships, and financial planning. 
  </li>
</ul>

              
            
            </div>

            <div class="pages-header-2" ref={eligibilityRef}>
            Counselling Services
            </div>
            <div className="pages-paragraph">
            We offer comprehensive support at every stage of the study abroad process, ensuring that students never feel alone in their journey to study in Canada. Our services include:

            <div className="font-bold my-3 text-[18px]">Application Assistance</div>

            <div>Our team provides expert application assistance, helping students complete the application forms and submit all necessary documents. We ensure that students meet deadlines, present their qualifications in the best light, and fulfill all requirements set by Canadian universities.</div>

            <div className="font-bold my-3 text-[18px]">Documentation Preparation and Form Filling</div>

            <div>Proper documentation is essential for a successful application. We assist students with preparing their application materials, including:</div>

<ul className="my-2 ml-3">
  <li>
  Academic transcripts and certificates
  </li>
  <li>
  Letters of recommendation 
  </li>
  <li>
  Statement of purpose (SOP) or personal statement
  </li>
  <li>
  Standardized test scores
  </li>
  <li>
  Proof of financial resources
  </li>
</ul>

Our counselors meticulously review and double-check these documents to ensure accuracy and completeness.

<div className="font-bold my-3 text-[18px]">Guidance on University Applications and Essay Editing</div>

<div>The personal statement or statement of purpose (SOP) is a vital part of university applications. We provide expert guidance on crafting a compelling SOP that highlights a student’s strengths, achievements, and motivation. Additionally, we offer essay editing services to ensure the essays are clear, impactful, and aligned with the student’s academic and professional goals.</div>

<div className="font-bold my-3 text-[18px]">Visa Guidance</div>

<div>Once an offer of admission is received, obtaining a study permit (student visa) is the next step. Our team offers expert advice on the visa application process, including helping students prepare the necessary documents, such as proof of funds, letter of acceptance, and medical examinations. We also provide mock visa interviews, helping students feel confident and prepared for the actual interview with Canadian immigration authorities.</div>

<div className="font-bold my-3 text-[18px]">Post-Admission Services</div>

<div>Our commitment to students doesn't end once they are admitted to a Canadian institution. We offer post-admission services to ensure a smooth transition:</div>

<ul className="my-2 ml-3">
  <li>
    <strong>Pre-departure briefings: </strong>
    We provide students with vital information about life in Canada, including housing, transportation, cultural norms, and healthcare.
  </li>
  <li>
  <strong>Ongoing support: </strong>
  We continue to provide assistance even after students have arrived in Canada, offering advice on adapting to life on campus and dealing with any challenges that may arise.
  </li>
  
</ul>

          
            </div>

            <div class="pages-header-2" ref={factorRef}>
            Why Choose Us?
            </div>
            <div class="pages-paragraph">
              At <strong>Aquarian Immigration Services</strong>, we pride ourselves on our unique approach and extensive experience. Here’s why students choose us for their study-abroad counseling:

              <div className="font-bold my-3 text-[18px]">Expertise and Experience</div>

<div>With a combined experience of 30+ years in immigration and educational counseling, our founders have successfully guided over 5,000+ immigrants. Our team includes certified and experienced professionals, including Regulated Canadian Immigration Consultants (RCIC), who are authorized by the College of Immigration and Citizenship Consultants (CICC). This allows us to provide the highest level of service and advice, tailored to each student’s needs.</div>

<div className="font-bold my-3 text-[18px]">Integrity and Trust</div>

<div>We believe in offering genuine guidance—our advice is always transparent, honest, and in the best interest of the student. We are committed to building lasting relationships based on trust and integrity.</div>

<div className="font-bold my-3 text-[18px]">One-on-One Solutions</div>

<div>We offer personalized solutions to each student, understanding that no two students are the same. Whether it’s selecting a program, applying for scholarships, or managing visa applications, we ensure that every step is customized to the individual’s unique situation.</div>

<div className="font-bold my-3 text-[18px]">Efficiency and Accuracy</div>

<div>We are known for our efficiency and accuracy in handling applications, documentation, and visa processes. We ensure that all forms are filled out correctly and that deadlines are met, reducing the risk of delays or rejections.</div>

<div className="font-bold my-3 text-[18px]">Free Online Assessment</div>

<div>We offer a free online assessment to help prospective students evaluate their eligibility for study permits and identify the best course of action for their Canadian education journey.
Backed by decades of experience and professional qualifications, our team is here to make your Canadian dream a reality. Join our community of over 5,000+ satisfied clients, and benefit from our proven expertise and personalized approach to Canadian education counseling.</div>

<div className="font-bold my-3 text-[18px]">The Aquarian Community</div>

<div>When you choose Aquarian Immigration Services, you are not just a client—you’re part of a family. Our community includes students who have successfully made the move to Canada, and you can read their stories and testimonials to see how our services have helped them achieve their educational and career goals.

  <div className="my-2">Are you ready to make your dream of studying in Canada a reality? Contact us today for a personalized consultation, and let our expert counselors guide you every step of the way. With our decades of experience and unwavering dedication, we will ensure that your journey to Canada is a success from start to finish.</div>
  Start your Canadian education journey with Aquarian Immigration Services today!

</div>
             
            </div>

          </div>
          {/* <div ref={faqRef}>
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
          </div> */}
        </div>
      </div>
    </div>
  );
}
