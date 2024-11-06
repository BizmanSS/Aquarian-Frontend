import React, { useState } from "react";
import "./AllBlogs.css";
import Universities from "../../../Assets/Universities.jpg";
import A_B_Sec from "../../../Assets/AllBlogssec.jpeg";
import A_B_Thir from "../../../Assets/AllBlogsthird.jpeg";
import A_B_Four from "../../../Assets/AllBlogsfour.jpeg";
import A_B_Fifth from "../../../Assets/AllBlogsfifth.jpeg";
import BLOGS_A from "../../../Assets/BLOGS_A.jpg";
import BLOGS_B from "../../../Assets/BLOGS_B.jpg";
import BLOGS_C from "../../../Assets/BLOGS_C.jpg";
import BLOGS_D from "../../../Assets/BLOGS_D.jpg";
import BLOGS_E from "../../../Assets/BLOGS_E.jpg";
import BLOGS_F from "../../../Assets/BLOGS_F.jpg";
import BLOGS_G from "../../../Assets/BLOGS_G.jpg";
import BLOGS_H from "../../../Assets/BLOGS_H.jpg";
// import BLOGS_I from '../../../Assets/BLOGS_I.jpg';
// import BLOGS_J from '../../../Assets/BLOGS_J.jpg';
// import BLOGS_K from '../../../Assets/BLOGS_K.jpg';
import BLOGS_L from "../../../Assets/BLOGS_L.jpg";
import BLOGS_M from "../../../Assets/BLOGS_M.jpg";
import ScholarShip from "../../../Assets/Scholarship.jpg";
import Covid from "../../../Assets/Covid.jpg";
import Networking from "../../../Assets/Networking.jpg";
import InternShip from "../../../Assets/internship.jpg";
import TipsnTrics from "../../../Assets/TipsnTricks.jpg";

import { useNavigate } from "react-router-dom";
const categoryColors = [
  "#ff5733", // Color for "Aquarian Immigration"
  "#33c1ff", // Color for "Popular"
  "#75ff33", // Color for "Canada"
];
export default function AllBlogs() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const blogsPerPage = 6;

  const blogsData = [
    {
      date: "Sunday, 27 May 2024",
      title: "Top 10 universities in Canada for Education",
      description:
        "For decades, Canada has been a hotspot for international students seeking quality education and diverse cultural experiences. In this blog, we explore the top 10 universities in Canada that offer excellent programs, vibrant campus life, and strong international student support.",
      imgSrc: Universities,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of Canadian Universities",
      para_first:
        "Canada is home to numerous world-renowned universities, each offering unique programs and vibrant student life. From the University of Toronto to the University of British Columbia, these institutions are known for their academic excellence and diverse communities. The welcoming atmosphere and strong international student support systems make Canada an ideal choice for students from around the globe.",
      heading_second: "2. Admission Requirements",
      para_second:
        "Understanding the admission requirements is crucial for prospective students. Most Canadian universities require specific academic qualifications, English language proficiency, and standardized test scores. Additionally, students should prepare a compelling application, including personal statements and letters of recommendation, to enhance their chances of acceptance.",
      heading_third: "3. Campus Life and Support",
      para_third:
        "The campus life in Canadian universities is vibrant and inclusive. Students can participate in various extracurricular activities, clubs, and organizations that promote cultural exchange and personal growth. Moreover, universities offer comprehensive support services, including counseling, academic advising, and international student offices, ensuring that students feel at home and can thrive in their studies.",
      heading_fourth: "4. Career Opportunities After Graduation",
      para_fourth:
        "Graduating from a top Canadian university opens up numerous career opportunities. Many institutions have strong ties with local industries, providing students with networking opportunities, internships, and job placements. Moreover, the Canadian job market values international experience and education, giving graduates an edge in their job search.",
    },
    {
      date: "Tuesday, 22 May 2024",
      title: "What is Category Based Selection?",
      description:
        "Category Based Selection is a key aspect of Canada’s immigration process. It allows candidates to apply under specific categories based on their skills and qualifications, increasing their chances of receiving an Invitation to Apply (ITA). Learn more about how this system works.",
      imgSrc: A_B_Sec,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding Category Based Selection",
      para_first:
        "Category Based Selection refers to the process where immigration candidates can apply under specific categories that match their skills and qualifications. This system is designed to streamline the immigration process and align the selection of candidates with Canada’s labor market needs, making it easier for employers to find suitable candidates.",
      heading_second: "2. Eligibility Criteria",
      para_second:
        "To be eligible for Category Based Selection, candidates must meet specific requirements related to their work experience, education, and language proficiency. Each category has its own set of criteria, which candidates should thoroughly review to ensure they qualify before submitting their application.",
      heading_third: "3. Benefits of Category Based Selection",
      para_third:
        "This selection system offers several advantages, including a higher likelihood of receiving an ITA for candidates who meet the targeted skills in demand. By applying under a specific category, candidates can improve their chances of being selected, making the immigration process more efficient and tailored to meet the needs of both the applicants and the Canadian job market.",
      heading_fourth: "4. How to Apply",
      para_fourth:
        "Applying through Category Based Selection involves creating an Express Entry profile and indicating your eligibility for specific categories. Candidates should stay updated on the latest draws and selection criteria, as these can change frequently based on labor market demands and government policies.",
    },
    {
      date: "Thrusday, 29 May 2024",
      title: "Tips and Tricks on Preparing for IELTS",
      description:
        "Preparing for the IELTS exam can be daunting, but with the right strategies and resources, you can achieve your desired score. This blog provides essential tips and tricks to help you prepare effectively and confidently for the IELTS test.",
      imgSrc: TipsnTrics,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding the IELTS Format",
      para_first:
        "The IELTS exam consists of four sections: Listening, Reading, Writing, and Speaking. Familiarizing yourself with the test format is crucial for effective preparation. Each section assesses different language skills, and understanding the structure can help you manage your time efficiently during the exam.",
      heading_second: "2. Practice Regularly",
      para_second:
        "Consistent practice is key to success in the IELTS. Utilize official practice materials, take mock tests, and focus on your weak areas. Incorporating practice into your daily routine will help improve your skills and build your confidence as the exam date approaches.",
      heading_third: "3. Improve Your Vocabulary",
      para_third:
        "A strong vocabulary is essential for excelling in all sections of the IELTS. Engage in reading diverse materials such as articles, books, and newspapers. Keep a vocabulary journal to note new words and phrases, and practice using them in your writing and speaking tasks.",
      heading_fourth: "4. Seek Feedback and Guidance",
      para_fourth:
        "Consider enrolling in IELTS preparation courses or seeking feedback from instructors or peers. Participating in study groups can also provide valuable insights and support. Constructive criticism will help you identify areas for improvement and enhance your overall performance.",
    },
    {
      date: "Friday, 30 May 2024",
      title: "Top In Demand Jobs in Canada as of 2024",
      description:
        "As Canada continues to grow, so does the demand for skilled workers. In this blog, we delve into the top in-demand jobs in Canada for 2024, including insights into the skills required and how to navigate the job market.",
      imgSrc: A_B_Four,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of In-Demand Jobs",
      para_first:
        "As the Canadian economy evolves, certain job sectors experience higher demand for skilled workers. Jobs in technology, healthcare, engineering, and skilled trades are projected to be among the most sought after in 2024. Understanding these trends can help job seekers target their applications effectively.",
      heading_second: "2. Skills Required",
      para_second:
        "To succeed in these in-demand jobs, candidates must possess relevant skills and qualifications. Employers often look for technical expertise, problem-solving abilities, and strong communication skills. Continuous learning and upskilling can enhance employability and career prospects in a competitive job market.",
      heading_third: "3. Navigating the Job Market",
      para_third:
        "Navigating the Canadian job market requires a strategic approach. Job seekers should leverage online job boards, networking events, and recruitment agencies to discover opportunities. Tailoring resumes and cover letters to match job descriptions can significantly improve chances of landing interviews.",
      heading_fourth: "4. Future Job Market Trends",
      para_fourth:
        "Looking ahead, the job market in Canada is expected to continue evolving with technological advancements and demographic shifts. Staying informed about emerging industries and skill requirements will be essential for job seekers to remain competitive and adapt to changing market demands.",
    },
    {
      date: "Saturday, 30 May 2024",
      title: "Everything you need to know about Sponsoring",
      description:
        "Sponsoring a spouse or partner for immigration to Canada involves a detailed process. This blog outlines everything you need to know, including eligibility criteria, documentation, and tips to ensure a smooth application.",
      imgSrc: A_B_Fifth,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding Spousal Sponsorship",
      para_first:
        "Sponsoring a spouse or partner is a significant commitment that involves various legal responsibilities. It is essential to understand the requirements and implications of the sponsorship process to ensure a successful application. This includes knowing the difference between spousal and common-law sponsorship and the criteria that must be met.",
      heading_second: "2. Eligibility Requirements",
      para_second:
        "To sponsor your spouse or partner, both parties must meet specific eligibility criteria. This includes proof of relationship, financial stability to support the sponsored individual, and the sponsor’s ability to take on the responsibility for their partner’s basic needs. Understanding these requirements will help streamline the application process.",
      heading_third: "3. Documentation Needed",
      para_third:
        "Gathering the necessary documentation is crucial for a successful sponsorship application. This includes identification documents, proof of relationship (such as photographs and communication records), financial statements, and any previous immigration documents. Ensuring all documents are complete and accurate will enhance the likelihood of approval.",
      heading_fourth: "4. Tips for a Smooth Application Process",
      para_fourth:
        "Navigating the sponsorship application can be complex. To ensure a smooth process, consider seeking legal advice or assistance from immigration consultants. Additionally, staying organized, keeping track of timelines, and being transparent in your application will help prevent delays and complications in the approval process.",
    },
    {
      date: "Wednesday, 27 May 2024",
      title: "The Benefits of Studying in Canada",
      description:
        "Canada offers numerous benefits for international students, including high-quality education, work opportunities, and a welcoming multicultural environment. Discover the advantages[...]",
      imgSrc: BLOGS_A,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Work Opportunities",
      para_first:
        "Studying in Canada provides international students with the opportunity to work while studying, helping them gain valuable work experience. Many programs allow students to work part-time during their studies and full-time during breaks, which can significantly reduce the financial burden of tuition fees and living expenses.",
      heading_second: "2.  High-Quality Education",
      para_second:
        "Canadian universities are known for their rigorous academic standards and diverse program offerings. Many institutions rank among the top in the world, ensuring that students receive an education that is recognized globally. This high-quality education can enhance career prospects and open doors to various opportunities. ",
      heading_third: "3. Multicultural Environment",
      para_third:
        "Canada is celebrated for its diversity and multicultural society. International students can enjoy a rich cultural experience while studying in Canada, meeting people from various backgrounds and cultures. This exposure fosters global understanding and enhances personal development, making it an enriching experience.",
      heading_fourth: "4. Post-Graduation Work Opportunities",
      para_fourth:
        "After graduation, international students may qualify for work permits that allow them to stay and work in Canada. This opportunity can provide a pathway to permanent residency, allowing graduates to establish their careers in Canada and contribute to the economy while enjoying the benefits of living in a diverse and inclusive society.",
    },
    {
      date: "Monday, 15 April 2024",
      title: "Understanding the Canadian Education System",
      description:
        "The Canadian education system is known for its rigorous standards and innovative approaches. In this blog, we break down the different levels of education in Canada, from primary to post-secondary, and what makes them unique.",
      imgSrc: BLOGS_B,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of the Education System",
      para_first:
        "Canada’s education system is divided into several levels: primary, secondary, and post-secondary. Each level is designed to provide students with a comprehensive education that prepares them for future academic pursuits or careers. The emphasis on critical thinking and practical skills sets Canadian education apart globally.",
      heading_second: "2. Primary and Secondary Education",
      para_second:
        "Primary and secondary education in Canada is publicly funded and compulsory up to the age of 16 or 18, depending on the province. Students are encouraged to develop a strong foundation in literacy, numeracy, and social skills, with a curriculum that includes arts, sciences, and physical education.",
      heading_third: "3. Post-Secondary Education",
      para_third:
        "Post-secondary education includes universities, colleges, and vocational schools. Canadian universities offer undergraduate and graduate programs, while colleges focus on diploma and certificate courses. This diversity allows students to choose the path that best suits their career goals and interests.",
      heading_fourth: "4. International Student Support",
      para_fourth:
        "International students studying in Canada receive substantial support from institutions, including orientation programs, academic advising, and counseling services. These resources help students adapt to their new environment and succeed academically while fostering a sense of community and belonging within the campus.",
    },
    {
      date: "Sunday, 20 March 2024",
      title: "How to Apply for a Study Permit in Canada",
      description:
        "Applying for a study permit can be overwhelming. This blog provides a step-by-step guide on how to apply for a study permit, including essential documents and tips to increase your chances of approval.",
      imgSrc: BLOGS_C,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding the Study Permit",
      para_first:
        "A study permit is a document that allows international students to study in Canada. Understanding the requirements and application process is essential for a successful application. This permit is generally valid for the duration of the study program plus an additional 90 days for students to prepare for departure.",
      heading_second: "2. Eligibility Criteria",
      para_second:
        "To apply for a study permit, students must meet specific eligibility criteria, including being accepted into a designated learning institution (DLI), proving sufficient funds to cover tuition and living expenses, and demonstrating intent to leave Canada upon completion of studies. Ensuring you meet these criteria is crucial for your application’s success.",
      heading_third: "3. Required Documents",
      para_third:
        "Gathering the required documents is a critical step in the application process. Essential documents include the acceptance letter from a DLI, proof of financial support, a valid passport, and any other documents specified by Immigration, Refugees and Citizenship Canada (IRCC). Incomplete applications can lead to delays or rejections.",
      heading_fourth: "4. Application Process",
      para_fourth:
        "The application for a study permit can be completed online or on paper. It is essential to follow the instructions carefully and submit all required documents. After submission, applicants may be asked to provide biometrics or attend an interview. Staying organized and tracking application progress will help reduce stress during this process.",
    },
    {
      date: "Tuesday, 5 March 2024",
      title: "Living Expenses for International Students in Canada",
      description:
        "Understanding the cost of living is crucial for international students. This blog breaks down the average living expenses, including accommodation, food, transportation, and tips on budgeting effectively.",
      imgSrc: BLOGS_D,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of Living Expenses",
      para_first:
        "Living expenses for international students in Canada can vary significantly depending on the city and lifestyle. On average, students should budget for accommodation, food, transportation, and personal expenses. Understanding these costs is essential for financial planning and ensuring a smooth study experience.",
      heading_second: "2. Accommodation Costs",
      para_second:
        "Accommodation is often the largest expense for students. Depending on whether you choose to live on-campus or rent an apartment, costs can range from $500 to over $1,500 per month. It’s important to consider location, amenities, and whether utilities are included in the rent when making your decision.",
      heading_third: "3. Food and Transportation",
      para_third:
        "Food costs can also add up, with students typically spending around $300 to $600 monthly. Preparing meals at home can significantly reduce costs. Transportation expenses vary by city; public transit passes can range from $80 to $150 per month. Understanding these costs helps students budget more effectively.",
      heading_fourth: "4. Budgeting Tips",
      para_fourth:
        "Creating a budget is crucial for managing living expenses. Consider tracking your expenses to identify areas where you can save. Look for student discounts, utilize public transportation, and prioritize essential spending. Planning meals ahead and shopping smart can help minimize unnecessary expenditures.",
    },
    {
      date: "Saturday, 12 January 2024",
      title: "Part-Time Job Opportunities for Students in Canada",
      description:
        "Finding a part-time job while studying can enhance your experience in Canada. This blog explores various job opportunities available for international students and how to balance work and study.",
      imgSrc: BLOGS_E,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding Work Rights",
      para_first:
        "International students in Canada are allowed to work part-time while studying, which can help ease financial burdens. Understanding the work rights associated with your study permit is crucial to ensure compliance with regulations. Students can work on-campus or off-campus, depending on their eligibility.",
      heading_second: "2. Types of Part-Time Jobs",
      para_second:
        "There are numerous part-time job opportunities available for students, including positions in retail, hospitality, and on-campus roles such as research assistants or library staff. These jobs not only provide financial support but also valuable work experience that can enhance your resume and future job prospects.",
      heading_third: "3. Job Search Strategies",
      para_third:
        "Finding a part-time job can be competitive, so having effective job search strategies is essential. Utilize online job boards, university career services, and networking events to discover opportunities. Tailor your resume and cover letter for each application to stand out to potential employers.",
      heading_fourth: "4. Balancing Work and Study",
      para_fourth:
        "Balancing a part-time job with studies requires effective time management. Create a schedule that prioritizes academic responsibilities while allowing time for work. Communicate with your employer about your study commitments, and seek flexible work hours that accommodate your class schedule to ensure academic success.",
    },
    {
      date: "Wednesday, 8 February 2024",
      title: "The Role of Language Proficiency in Immigration",
      description:
        "Language proficiency is a critical factor in the Canadian immigration process. Learn how language skills can affect your application and tips to improve your proficiency in English or French.",
      imgSrc: BLOGS_F,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Importance of Language Proficiency",
      para_first:
        "Language proficiency plays a vital role in the Canadian immigration process. Strong English or French skills can enhance your chances of receiving an Invitation to Apply (ITA) and are often a requirement for many immigration pathways. Understanding the significance of language proficiency can help applicants prepare effectively.",
      heading_second: "2. Language Tests and Requirements",
      para_second:
        "To prove language proficiency, applicants are usually required to take standardized tests such as the IELTS or CELPIP for English, and the TEF for French. Each immigration program has specific minimum score requirements, and preparing adequately for these tests is crucial to meeting the criteria.",
      heading_third: "3. Improving Language Skills",
      para_third:
        "Improving your language skills can be achieved through various methods, including taking language courses, practicing with native speakers, and immersing yourself in the language through reading, listening, and speaking. Consistent practice and engagement are essential for building confidence and fluency.",
      heading_fourth: "4. Resources for Language Learning",
      para_fourth:
        "There are numerous resources available for language learning, including online courses, language exchange programs, and local community classes. Utilizing these resources can significantly enhance your language skills, helping you meet the requirements for immigration and improving your overall communication abilities in Canada.",
    },
    {
      date: "Friday, 1 March 2024",
      title: "Cultural Differences to Expect in Canada",
      description:
        "Moving to a new country comes with cultural adjustments. This blog highlights some cultural differences international students might encounter in Canada and how to navigate them effectively.",
      imgSrc: BLOGS_G,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Understanding Canadian Culture",
      para_first:
        "Canadian culture is diverse and shaped by its history, geography, and multicultural population. It is essential for international students to understand and appreciate this cultural diversity, which influences social interactions, communication styles, and daily life in Canada. Recognizing these differences can aid in smoother integration into Canadian society.",
      heading_second: "2. Social Norms and Etiquette",
      para_second:
        "Social norms in Canada may differ from those in other countries. Canadians value politeness, punctuality, and personal space. Familiarizing yourself with these social norms can help avoid misunderstandings and foster positive relationships with peers and professors alike.",
      heading_third: "3. Communication Styles",
      para_third:
        "Canadians generally favor direct and open communication. Understanding the nuances of how Canadians express themselves, including the use of humor and understatement, can enhance interactions and help international students feel more comfortable in conversations. It is also important to be aware of non-verbal communication cues.",
      heading_fourth: "4. Celebrating Diversity",
      para_fourth:
        "Canada celebrates its multicultural heritage through various festivals, events, and traditions. Engaging in these cultural celebrations can enrich the experience of international students, providing opportunities to connect with others and learn more about the diverse cultures that coexist in Canada.",
    },
    {
      date: "Thrusday, 10 February 2024",
      title: "How to Make the Most of Your Study Abroad Experience",
      description:
        "Studying abroad is a unique opportunity. This blog shares tips on how to make the most of your experience in Canada, from networking to exploring the local culture.",
      imgSrc: BLOGS_H,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Set Clear Goals",
      para_first:
        "Setting clear academic and personal goals for your study abroad experience can help you stay focused and make the most of your time in Canada. Consider what you hope to achieve in your studies, cultural experiences, and personal growth, and create a plan to reach these goals throughout your stay.",
      heading_second: "2. Engage with the Local Community",
      para_second:
        "Engaging with the local community can greatly enrich your study abroad experience. Participate in local events, volunteer opportunities, or community groups to connect with Canadians and other international students. This interaction not only enhances cultural understanding but also builds lasting friendships and networks.",
      heading_third: "3. Explore the Surroundings",
      para_third:
        "Take the time to explore Canada’s diverse landscapes and cities. Traveling within Canada offers a chance to experience its natural beauty, historical sites, and cultural diversity. Planning weekend trips or participating in organized excursions can help you discover more about the country and create unforgettable memories.",
      heading_fourth: "4. Embrace New Experiences",
      para_fourth:
        "Studying abroad presents numerous opportunities for personal growth. Embrace new experiences, whether it’s trying new foods, attending cultural festivals, or exploring new hobbies. Being open to change and actively seeking out unique experiences will enhance your time in Canada and contribute to a memorable study abroad adventure.",
    },
    {
      date: "Monday, 25 February 2024",
      title: "The Impact of COVID-19 on International Students",
      description:
        "The COVID-19 pandemic has significantly affected international students. This blog discusses the challenges faced and the support available for students during these unprecedented times.",
      imgSrc: Covid,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of the Challenges",
      para_first:
        "The COVID-19 pandemic has presented numerous challenges for international students, including travel restrictions, changes in academic formats, and increased mental health concerns. Understanding these challenges is crucial for addressing the needs of students during these unprecedented times and ensuring their well-being and success.",
      heading_second: "2. Academic Adjustments",
      para_second:
        "Many institutions shifted to online learning during the pandemic, impacting students’ educational experiences. Adapting to online classes required students to develop new learning strategies and seek support for technology-related issues. Understanding the resources available can help students navigate this transition effectively.",
      heading_third: "3. Mental Health and Well-Being",
      para_third:
        "The pandemic has also affected the mental health of many students, leading to feelings of isolation and anxiety. It is vital for students to recognize the importance of seeking support and utilizing available resources, including counseling services and peer support groups, to maintain their mental well-being during these challenging times.",
      heading_fourth: "4. Support for International Students",
      para_fourth:
        "In response to the challenges posed by COVID-19, many universities and organizations implemented support systems for international students. This includes financial aid, mental health resources, and academic advising to help students adapt to new learning environments and overcome obstacles during their studies in Canada.",
    },
    {
      date: "Sunday, 20 December 2023",
      title: "Scholarships Available for International Students in Canada",
      description:
        "Financing your education can be challenging. This blog lists various scholarships available for international students in Canada and how to apply for them.",
      imgSrc: ScholarShip,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Overview of Scholarships",
      para_first:
        "Canada offers a wide range of scholarships and financial aid options for international students. Understanding the various types of scholarships available can help students finance their education and alleviate financial burdens. From government-funded scholarships to university-specific awards, there are numerous opportunities to explore.",
      heading_second: "2. Types of Scholarships",
      para_second:
        "Scholarships can vary based on eligibility criteria, academic performance, and field of study. Some scholarships are merit-based, while others may be need-based or awarded for specific programs. Researching and identifying suitable scholarships that align with your profile is essential for maximizing your chances of receiving financial support.",
      heading_third: "3. How to Apply",
      para_third:
        "Applying for scholarships often requires a separate application process. Students should carefully review the requirements for each scholarship, including deadlines and necessary documentation. Crafting a compelling application, including a strong personal statement and letters of recommendation, can significantly enhance your chances of securing funding.",
      heading_fourth: "4. Tips for Finding Scholarships",
      para_fourth:
        "To find scholarships, utilize university resources, online databases, and community organizations. Networking with other students and attending scholarship information sessions can also provide valuable insights and opportunities. Being proactive in your search and applying to multiple scholarships can increase the likelihood of receiving funding for your studies.",
    },
    {
      date: "Tuesday, 15 November 2023",
      title: "Networking Tips for International Students",
      description:
        "Networking is crucial for career success. This blog provides essential networking tips specifically tailored for international students in Canada.",
      imgSrc: Networking,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Importance of Networking",
      para_first:
        "Networking is a vital component of career success, especially for international students entering the Canadian job market. Building a professional network can lead to job opportunities, internships, and valuable mentorship. Understanding the significance of networking can motivate students to take proactive steps in their career development.",
      heading_second: "2. Building Your Network",
      para_second:
        "To build a network, students should actively participate in events, workshops, and seminars within their field of study. Joining professional associations and utilizing social media platforms like LinkedIn can also facilitate connections with industry professionals. Establishing and nurturing these relationships is key to effective networking.",
      heading_third: "3. Networking Strategies",
      para_third:
        "Effective networking involves more than just exchanging business cards. Students should focus on developing genuine relationships by engaging in meaningful conversations and following up with contacts. Preparing an elevator pitch can also help students articulate their skills and goals concisely, making a strong impression on potential employers.",
      heading_fourth: "4. Leveraging University Resources",
      para_fourth:
        "Many universities offer networking events and resources specifically designed for international students. Utilizing career services, mentorship programs, and alumni networks can enhance students’ networking efforts. Seeking guidance from career advisors can provide valuable insights into effective networking strategies tailored to the Canadian job market.",
    },
    {
      date: "Friday, 10 October 2023",
      title: "The Benefits of Internships for Students",
      description:
        "Internships provide invaluable experience. This blog explores the benefits of internships for students and how to find opportunities in Canada.",
      imgSrc: InternShip,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Importance of Internships",
      para_first:
        "Internships are a crucial step in gaining real-world experience and enhancing academic learning. They provide students with opportunities to apply theoretical knowledge in practical settings, develop professional skills, and gain insights into industry practices. Understanding the importance of internships can motivate students to seek these experiences actively.",
      heading_second: "2. Types of Internships",
      para_second:
        "Internships can vary in format, including paid, unpaid, full-time, or part-time positions. Students should consider their career goals when choosing the type of internship that best suits their needs. Exploring options within different industries can also broaden perspectives and increase employability.",
      heading_third: "3. Finding Internship Opportunities",
      para_third:
        "To find internships, students should leverage various resources, including university career services, online job boards, and networking. Attending job fairs and industry events can also facilitate connections with potential employers. Being proactive and persistent in the search can lead to valuable opportunities.",
      heading_fourth: "4. Maximizing the Internship Experience",
      para_fourth:
        "To make the most of an internship, students should approach it with a positive attitude, willingness to learn, and eagerness to contribute. Setting clear objectives, seeking feedback, and building relationships with colleagues can enhance the overall internship experience and lead to future opportunities in the job market.",
    },
    {
      date: "Saturday, 5 September 2023",
      title: "Tips for Success in Online Learning",
      description:
        "Online learning requires a different approach. This blog offers practical tips for international students to succeed in an online learning environment.",
      imgSrc: BLOGS_M,
      categories: ["Study", "Canada", "Aquarian"],
      heading_first: "1. Creating a Dedicated Study Space",
      para_first:
        "A conducive study environment is essential for online learning success. Students should create a dedicated study space that is quiet, organized, and free from distractions. This setup can enhance focus and productivity, helping students to engage more effectively with their coursework.",
      heading_second: "2. Developing a Routine",
      para_second:
        "Establishing a consistent routine can significantly improve time management for online learning. Students should set specific study hours, schedule breaks, and adhere to deadlines to stay organized. Creating a weekly planner can help in balancing coursework and personal commitments.",
      heading_third: "3. Actively Engaging with Course Materials",
      para_third:
        "Active engagement with course materials is crucial for comprehension and retention. Students should participate in discussions, complete assignments on time, and reach out to instructors for clarification when needed. Utilizing multimedia resources can also enhance the learning experience.",
      heading_fourth: "4. Seeking Support and Resources",
      para_fourth:
        "Students should not hesitate to seek support when facing challenges in an online learning environment. Utilizing available resources such as tutoring services, study groups, and technical support can help address academic difficulties and enhance the overall learning experience.",
    },
  ];

  const filteredBlogsData = blogsData.filter(
    (blog) =>
      blog.date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogsData.slice(
    indexOfFirstBlog,
    indexOfLastBlog
  );

  const totalPages = Math.ceil(filteredBlogsData.length / blogsPerPage);
  const navigate = useNavigate();

  const handleReadMore = (index) => {
    setSelectedBlogIndex(index);
  };

  const handleBackToBlogs = () => {
    setSelectedBlogIndex(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const truncateDescription = (description) => {
    if (description.length > 200) {
      return description.substring(0, 185) + "[...]";
    }
    return description;
  };

  return (
    <div className="all-blogs-container">
      <div className="AllBlogs-navigators">
        <li className="AllBlogs-navitems">Home</li>
        <li className="AllBlogs-navitems">&gt;</li>
        <li className="AllBlogs-navitems" onClick={() => navigate("/blogs")}>
          Blogs
        </li>
      </div>

      <div className="AllBlogs-heading-blogs">
        <h1 className="AllBlogs-blog-heading">Aquarian Blogs</h1>
      </div>

      {selectedBlogIndex !== null ? (
        <div className="blogDetailContainer">
          <p className="blogDate">
            {filteredBlogsData[selectedBlogIndex].date}
          </p>

          <img
            src={filteredBlogsData[selectedBlogIndex].imgSrc}
            alt={filteredBlogsData[selectedBlogIndex].title}
          />

          <h3 className="blogTitleDetail">
            {filteredBlogsData[selectedBlogIndex].title}
          </h3>
          <p className="blogDescriptionDetail">
            {filteredBlogsData[selectedBlogIndex].description}
          </p>
          <p className="BLOGS_SINGLE_HEADING">
            {filteredBlogsData[selectedBlogIndex].heading_first}
          </p>
          <p className="BLOGS_DESC">
            {filteredBlogsData[selectedBlogIndex].para_first}
          </p>
          <p className="BLOGS_SINGLE_HEADING">
            {filteredBlogsData[selectedBlogIndex].heading_second}
          </p>
          <p className="BLOGS_DESC">
            {filteredBlogsData[selectedBlogIndex].para_second}
          </p>
          <p className="BLOGS_SINGLE_HEADING">
            {filteredBlogsData[selectedBlogIndex].heading_third}
          </p>
          <p className="BLOGS_DESC">
            {filteredBlogsData[selectedBlogIndex].para_third}
          </p>
          <p className="BLOGS_SINGLE_HEADING">
            {filteredBlogsData[selectedBlogIndex].heading_fourth}
          </p>
          <p className="BLOGS_DESC">
            {filteredBlogsData[selectedBlogIndex].para_fourth}
          </p>

          <div className="blogCategoriesList">
            {filteredBlogsData[selectedBlogIndex].categories.map(
              (category, i) => (
                <li key={i} className="blogCategoryItem">
                  {category}
                </li>
              )
            )}
          </div>
          <button className="backToBlogsButton" onClick={handleBackToBlogs}>
            Back to Blogs
          </button>
        </div>
      ) : (
        <>
          <div className="allnews-search-area-section">
            <div className="allnews-search-box">
              <input
                type="text"
                placeholder="Search by date or content..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button className="AllBlogs-SearchBtn">Search</button>
            </div>
          </div>

          <div className="AllBlogs_Filter_section">
            <button className="Allblogs_Filter_btn">Filters</button>
            <p className="AllBlogs_total_blogs">
              {filteredBlogsData.length} total blogs
            </p>
          </div>

          <div className="AllBlogs-all-blogs-section">
            <h2 className="AllBlogs-heading">All Blog Posts</h2>
            <div className="AllBlogs-blogs-grid">
              {currentBlogs.map((blog, index) => (
                <div
                  className="AllBlogs-blog-card"
                  key={index}
                  onClick={() => handleReadMore(index)}
                >
                  <img
                    src={blog.imgSrc}
                    alt={blog.title}
                    className="AllBlogs-blog-card-image"
                  />
                  <div className="AllBlogs-blog-card-content">
                    <p className="AllBlogs-blog-date">{blog.date}</p>
                    <h3 className="AllBlogs-blog-title">{blog.title}</h3>
                    <p className="AllBlogs-blog-description">
                      {truncateDescription(blog.description)}
                    </p>

                    <div className="AllBlogs-blog-categories">
                      {blog.categories.map((category, i) => (
                        <li
                          key={i}
                          className={`AllBlogs-category ${category.toLowerCase()}`}
                          style={{
                            color: categoryColors[i % categoryColors.length],
                          }}
                        >
                          {category}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* </div> */}

          {selectedBlogIndex === null && (
            <div className="AllBlogs-pagination-section">
              <button
                className="AllBlogs-pagination-button prev"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                &lt; Previous
              </button>
              <div className="AllBlogs-pagination-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (pageNumber) => (
                    <button
                      key={pageNumber}
                      className={`pagination-number ${
                        currentPage === pageNumber ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  )
                )}
              </div>
              <button
                className="AllBlogs-pagination-button next"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next &gt;
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
