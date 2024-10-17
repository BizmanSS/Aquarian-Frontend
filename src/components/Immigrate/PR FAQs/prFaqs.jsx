import React, { useRef } from "react";
import './PrFaqs.css'

import FaqBox from "../../shared/DualNestedFaqBox.jsx";
import ReadyToStartCard from "../../shared/ReadyToStart.jsx";
import SiteMapMenu from "../../globalComponents/Sidebar/SiteMapMenu.jsx";

const faqItems = [
  {
    question: "What are the different ways of immigrating to Canada?",
    answer: "The 4 popular pathways for international applicants to immigrate to Canada are:",
    bulletList: [
      {
        text: "Express Entry is the fastest immigration program in Canada. Permanent residence can be granted within just 6 months.",
        subList: [
          "The three programs of Express Entry include Federal Skilled Worker, Canadian Experience Class, and the Federal Skilled Trades.",
          "Candidates submit an online profile evaluated by the Comprehensive Ranking System.",
           "Every applicant to whom the invitation has been issued is eligible to apply for permanent residence.",
            "The average fee for a single candidate is in the range of CAD 2,300, not including necessary settlement funds."
        ]
      },
      {
        text: "Provincial Nominee Programs is a pathway through which Canadian provinces nominate overseas workers for PR. ",
        subList: [
          "After receiving a nomination, candidates apply for permanent residence at the federal level, with different processing times.",
          "The fees are more or less the same as those in Express Entry but may be higher, according to some provinces, where one may have to pay an additional fee of up to CAD 1,500."
        ]
      },
      {
        text: "If you have experience in managing or owning a business, federal or provincial business immigration programs may be your best route.",
        subList: [
          "These are for business owners or individuals planning to start a business in Canada.",
          "Some PNPs have entrepreneur programs at regional levels that allow applicants intending to begin a business in less populated regions with a minimum investment."
        ]
      },
      {
        text: "Family sponsorship is the easiest way to immigrate if you have a qualifying relative who is a permanent resident or citizen of Canada. ",
        subList: [
          "You may apply if your spouse, child, or grandchild is a PR or citizen.",
          "Sponsoring a relative cost around CAD 1,135, with additional fees for sponsors residing in Quebec. ",
          "Processing times vary, but spousal sponsorships usually take around a year."
        ]
      }
    ]
  },
  {
    question: "What are the economic and business immigration options for professionals to enter Canada?",
    answer: "Economic and business immigration options are suited for professionals whose skills can support the Canadian economy. These options include Provincial Nominee Programs, Express Entry, Quebec Immigration, Investor Programs, Entrepreneur and Self-Employed Programs. Additionally, federal programs such as the Caregivers Program, Atlantic Immigration Pilot, Rural and Northern Immigration Pilot, and Agri-Food Pilot also fall under economic immigration.",
  },
  {
    question: "What is the fastest way to attain Permanent Resident Status in Canada?",
    answer: "The fastest way to immigrate to Canada is through the Express Entry system. Applications are processed in six months or less.",
  },
  {
    question: "What are the different ways of immigrating to Canada?",
    answer: "The 4 popular pathways for international applicants to immigrate to Canada are:",
    bulletList: [
      {
        text: "The maximum points are given to the applicants belonging to the age group 25 to 35. ",
        
      },
      {
        text: "It does not limit the option at this stage for older people; those who have gained broader work experience, have better proficiency in the language, have links with Canada, and have an educational background can compensate for the loss of points as an old person.",
      
      },
  
     
    ]
  },
  {
    question: "Do I need a job offer to immigrate to Canada?",
    answer: "No, in fact, while a job offer can strengthen your application, many immigration pathways like Express Entry do not require a job offer. However, a job offer can increase the chances of getting an invitation to apply for Canadian permanent residence.",
    bulletList: [
      {
        text: "Express Entry",
        subList: [
          "In fact, out of those who apply through Express Entry, 90% will get an ITA regarding permanent residency regardless of whether they have a job offer or not.",
        ]
      },
      {
        text: "Provincial Nominee Programs (PNPs)",
        subList: [
          "Many PNPs also do not require a job offer. Provinces like Saskatchewan use a points-based Expression of Interest (EOI), and the rest, such as Ontario and Nova Scotia, actually directly invite applicants from the pool of Express Entry.",
        ]
      },
     
    ]
  },
  {
    question: "Who is a Permanent Resident?",
    answer: "A permanent resident of Canada is another country’s citizen who has been granted the right to live in Canada permanently. Permanent residents may live, work, and study anywhere in the country; they are entitled to health care and social services and therefore are protected under Canadian law. Permanent residents can opt for citizenship as well as acquire Canadian citizenship after a stipulated period. People with permanent residency, however, do not have any voting rights in the elections in Canada.",
  },
  {
    question: "Who is a Canadian Citizen?",
    answer: "They enjoy all the privileges and rights of citizens including the right to vote, access to healthcare, and legal protection. Citizenship is irrevocable; every person born within the country automatically becomes a citizen. Apart from this, foreign nationals who have stayed in Canada for over 4 years can receive citizenship under the process of naturalization administered by Immigration, Refugees, and Citizenship Canada (IRCC).",
  },
  {
    question: "Can I work anywhere in Canada?",
    answer: "Yes, once you have permanent resident status, you are free to live and work anywhere in Canada. Those without the PR status need a Canadian work permit to be legally employed in the country.",
  },
  {
    question: "Can I bring my family to Canada?",
    answer: "Yes, as a PR you can sponsor your spouse, common-law partner and dependent children to become PRs as well. For instance, through the Express entry system, the applicant can include their spouse as well as dependent children in the application process. Canada also offers Family sponsorship for citizens and permanent residents of the country so that they can sponsor close relatives.",
  },
  {
    question: "What are the advantages of being a Canadian Permanent Resident (PR)?",
    answer: "As a Canadian PR, you can live anywhere, work anywhere, and study anywhere in Canada. Social benefits include access to Medicare and eligibility to apply for citizenship after meeting residency requirements.",
  },
  {
    question: "What is the difference between a Permanent Resident and a Citizen?",
    answer: "A Permanent Resident is someone who has been granted PR status and can live in Canada indefinitely. However, PRs do not have the right to vote and may need to renew their PR card. Citizens, on the other hand, have full rights, including voting, and cannot be deported.",
  },
  {
    question: "What is the typical processing time and fee for Canadian immigration?",
    answer: "Processing time varies with the immigration program. For instance, most Express Entry applications take approximately six months to process while others take much more than that time. The fees are also not uniform. Express Entry costs a principal applicant approximately CAD 1,325.",
  },
  {
    question: "What are the different ways of immigrating to Canada?",
    answer: "Sponsoring parents or grandparents does require meeting financial criteria. Humanitarian and compassionate grounds applications generally do not have financial requirements, except for privately sponsored refugees, who must show that sufficient funds have been raised for their resettlement. The amount required depends on the immigration program.",
    bulletList: [
      {
        text: "Express Entry",
        subList: [
          "In this program, it is required that applicants prove to have sufficient money to sustain their own lives and that of their respective families.",
          "The amounts required vary from CAD 12,960 for a single applicant to CAD 34,299 for a family of four.",
          
        ]
      },
      {
        text: "Immigration Cost",
        subList: [
          "The cost of immigrating to Canada is approximately CAD 2,300 for a single applicant and CAD 4,500 for a couple.",
          "These fees do not include settlement funds, which start at around CAD 13,000 for a single applicant and vary by family size."
        ]
      },
      {
        text: "Other Program Cost",
        subList: [
          "Applicants through provincial programs may incur additional fees. ",
          "Those with a Canadian job offer or applying under the Canadian Experience Class are exempt from providing proof of settlement funds.",
           "Business immigration requires a significant investment, such as funding a Canadian company or making an interest-free loan to the government.",
           "For family sponsorship, no financial information is needed for a spouse or dependent child."
           
        ]
      },
      
    ]
  },
];



export default function ExpressEntry() {

 
  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <div className="pages-content-wrapper">
        {/* <SiteMapMenu type="I" h1="Permanent Residency"></SiteMapMenu> */}
        <SiteMapMenu
          type="I"
          h1="Express Entry"

        ></SiteMapMenu>

        <div class="prFaq-pages-content-div">
          <div class="pages-content-text-wrapper ">
          
          </div>
        
            <FaqBox faqItems={faqItems} />
            <ReadyToStartCard />
         
        </div>
      </div>
    </div>
  );
}
