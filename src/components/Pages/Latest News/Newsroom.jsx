import React, { useState } from "react";
import Newsleft from "../../../Assets/NEWSIMAGEleft.jpeg";
import Newsright from "../../../Assets/NEWSIMAGEright .jpeg";
import NewsGrid from "../../../Assets/NEWSSECTIONGRIDIMAGE.jpeg";
import "./Newsroom.css"; 
import Canada_A from "../../../Assets/Can_news_b.jpg";
import Canada_B from "../../../Assets/Can_news_c.jpg";
import Canada_C from "../../../Assets/Can_news_d.jpg";
import Canada_D from "../../../Assets/Can_news_e.jpg";
import Canada_E from "../../../Assets/Can_news_f.jpg";
import Canada_F from "../../../Assets/Can_news_g.jpg";
import BLOGS_B from "../../../Assets/BLOGS_B.jpg";
import BLOGS_C from "../../../Assets/BLOGS_C.jpg";
import BLOGS_D from "../../../Assets/BLOGS_D.jpg";
import { useNavigate } from "react-router-dom";

const blogsData = [
  {
    date: "27 May 2024",
    title: "Top 10 universities in Canada",
    description:
      "For decades, Canada has been a hotspot for international students seeking quality education and diverse cultural experiences. In this blog, we explore the top 10 universities in Canada that offer excellent campus[...]",
    imgSrc: BLOGS_B,
    categories: ["Study", "Canada", "Aquarian"],
    heading1: "Introduction to Canadian Universities",
    paragraph1: "Canada is known for its world-class education system, attracting students from all over the globe. In this section, we’ll introduce some of the key factors that make Canadian universities stand out.",
    heading2: "Top 5 Universities in Canada",
    paragraph2: "The universities in this list are consistently ranked among the best globally. We’ll explore their offerings and what makes them the top choices for students.",
    heading3: "Student Life in Canadian Universities",
    paragraph3: "Canadian universities offer a diverse range of extracurricular activities. From sports to cultural clubs, the campus life is rich and vibrant.",
    heading4: "How to Choose the Right University",
    paragraph4: "Choosing the right university can be overwhelming. Here, we provide tips on what factors to consider before making your decision."
  },
  {
    date: "22 May 2024",
    title: "What is CBS?",
    description:
      "CBS stands for Category Based Selection and is a key aspect of Canada’s immigration process. It allows candidates to apply under specific categories based on their skills and qualifications and the skills [...]",
    imgSrc: BLOGS_C,
    categories: ["Study", "Canada", "Aquarian"],
    heading1: "What is Category Based Selection?",
    paragraph1: "Category Based Selection (CBS) is a process used by the Canadian immigration system to choose skilled workers. This system helps to prioritize candidates based on their skill sets and qualifications.",
    heading2: "Categories Under CBS",
    paragraph2: "There are various categories under CBS, such as skilled trades, health professionals, and tech experts. Each category has specific criteria that applicants need to meet.",
    heading3: "How CBS Affects Immigration",
    paragraph3: "CBS plays a significant role in Canada's immigration strategy, as it helps the country meet its labor market needs while attracting skilled workers from around the world.",
    heading4: "Eligibility and Application Process",
    paragraph4: "To apply under CBS, candidates need to meet certain eligibility requirements and submit the necessary documentation to demonstrate their qualifications."
  },
  {
    date: "29 May 2024",
    title: "Tips and Tricks on Preparing",
    description:
      "Preparing for the IELTS exam can be daunting, but with the right strategies and resources, you can achieve your desired score. This blog provides essential tips and tricks to help you prepare effectively[...]",
    imgSrc: BLOGS_D,
    categories: ["Study", "Canada", "Aquarian"],
    heading1: "Understanding the IELTS Exam Format",
    paragraph1: "The IELTS exam consists of four sections: Listening, Reading, Writing, and Speaking. It is important to familiarize yourself with the format to manage your time efficiently on test day.",
    heading2: "Effective Study Strategies",
    paragraph2: "A structured study plan is essential for success. Set realistic goals, break down each section, and allocate time each day to practice different skills like reading comprehension and listening.",
    heading3: "Common Mistakes to Avoid",
    paragraph3: "Many test-takers make common mistakes that can lower their scores, such as mismanaging time, skipping practice, or failing to review past mistakes. Avoid these pitfalls by staying consistent and focused.",
    heading4: "Resources for Preparation",
    paragraph4: "There are many free and paid resources available for IELTS preparation. You can use official IELTS practice materials, online courses, and study apps to enhance your skills and track your progress."
  },
];


const newsArticles = [
  {
    id: 1,
    date: "7 June 2024",
    title: "IRCC reducing Spousal Open Work Permits by more than 100,000 over the next three years",
    imgSrc: Canada_A,
    description:
      "In a significant policy shift, the IRCC has announced plans to reduce the issuance of Spousal Open Work Permits by over 100,000 in the coming three years. This reduction aims to tighten immigration control and reallocate resources towards other immigration categories.",
    heading1: "IRCC Announcement",
    para1: "The IRCC’s announcement to reduce Spousal Open Work Permits comes as part of broader efforts to manage immigration levels more effectively. With this new policy, fewer spouses of foreign workers will be able to apply for open work permits, which historically allowed spouses to find employment in Canada while their partner worked in the country.",
    heading2: "Managing Immigration Backlog",
    para2: "According to the IRCC, the move will help address the growing backlog of immigration applications and allow the department to focus more resources on processing permanent residency applications and Express Entry candidates.",
    heading3: "Concerns from Immigration Advocates",
    para3: "While some immigration advocates have expressed concern over the impact of this decision on families, others argue that it is a necessary step to ensure the sustainability of Canada’s immigration system in the face of increasing demand and economic pressures.",
    heading4: "Phased Reduction",
    para4: "The reduction will be phased in over the next three years, with a gradual decrease in the number of open work permits issued each year. The IRCC has emphasized that it will still prioritize work permits for individuals with high-demand skills, including those in healthcare, technology, and engineering."
  },
  {
    id: 2,
    date: "8 June 2024",
    title: "Canada launches pilot project to streamline review process for rejected study permits",
    imgSrc: Canada_B,
    description:
      "The new pilot program will allow applicants to appeal denials in a more efficient manner and receive faster decisions, potentially reducing delays in students’ educational plans.",
    heading1: "Pilot Project Overview",
    para1: "Canada’s pilot project for rejected study permit applications comes after numerous complaints from students who faced delays in receiving decisions on their applications. The new process aims to reduce the waiting period for applicants whose study permits have been denied, allowing them to resubmit documents or appeal the decision faster.",
    heading2: "Collaboration with Educational Institutions",
    para2: "The government is working with educational institutions and immigration consultants to ensure students receive timely responses and have more clarity on the reasons behind rejections. The new process will also help ensure that students can make decisions about their educational future without prolonged uncertainty.",
    heading3: "Optimism for International Students",
    para3: "Education officials in Canada have expressed optimism that the changes will improve the overall student experience, especially for international students who contribute significantly to Canada’s economy and cultural diversity.",
    heading4: "Concerns About Fraudulent Applications",
    para4: "However, critics of the program warn that the changes could lead to an increase in fraudulent applications as some students might rush to resubmit their documents without proper verification. The Canadian government has pledged to address these concerns by improving the verification process."
  },
  {
    id: 3,
    date: "9 June 2024",
    title: "Alberta launches new Expression of Interest system for AAIP Worker Streams",
    imgSrc: Canada_C,
    description:
      "Alberta has unveiled a new Expression of Interest (EOI) system as part of its Alberta Advantage Immigration Program (AAIP). This system aims to improve the process of attracting skilled workers to Alberta by prioritizing candidates with the highest potential to contribute to the provincial economy and labor market.",
    heading1: "Introduction to EOI System",
    para1: "The Alberta Advantage Immigration Program (AAIP) is a key part of Alberta’s strategy to attract skilled workers to meet the province’s labor market demands. The new Expression of Interest (EOI) system will allow Alberta to assess and prioritize candidates based on their skills, education, and work experience.",
    heading2: "Points-Based System",
    para2: "Candidates in the new EOI system will be ranked according to a points-based system that considers factors like language proficiency, work experience, education, and ties to the province. This will help ensure that only the most qualified applicants are invited to apply for permanent residency in Alberta.",
    heading3: "Alberta’s Skilled Labor Needs",
    para3: "Alberta’s economy is heavily reliant on skilled labor, particularly in sectors like oil and gas, construction, technology, and healthcare. By using the EOI system, Alberta hopes to streamline the immigration process and make it easier for employers to find the workers they need.",
    heading4: "Adapting to Labor Market Needs",
    para4: "The provincial government has also indicated that the new system will be more responsive to labor market needs, allowing them to adjust immigration priorities as the economic landscape changes. This dynamic approach aims to attract workers in high-demand occupations more effectively."
  },
  {
    id: 4,
    date: "10 June 2024",
    title: "How many ITAs has Canada issued through Express Entry this year vs. last year?",
    imgSrc: Canada_D,
    description:
      "As Canada continues to evolve policies, understanding the trends in Invitations to Apply (ITAs) issued through the Express Entry system is crucial. This article compares the current year's statistics with those from the previous year, highlighting changes in eligibility criteria, applicant pools, and the impact of these trends on potential immigrants. It aims to provide a comprehensive overview for those considering applying through Express Entry.",
    heading1: "Increased ITA Issuance",
    para1: "The Express Entry system is Canada’s primary method for managing applications for permanent residence. This year, the government has issued a significantly higher number of Invitations to Apply (ITAs) compared to last year. The increase in ITAs can be attributed to a combination of factors, including higher immigration targets and changes to eligibility criteria.",
    heading2: "Changes to the CRS",
    para2: "Changes to the Comprehensive Ranking System (CRS) have played a role in increasing the number of ITAs. The government has made it easier for candidates with lower CRS scores to qualify for invitations, particularly those with skills in areas where there is a labor shortage in Canada.",
    heading3: "Challenges for Applicants",
    para3: "Despite the increase in ITAs, some applicants are finding it more difficult to meet the minimum CRS scores needed to receive an invitation. Applicants with strong language skills, work experience, and provincial nominations are still the most likely to be invited.",
    heading4: "Government Response",
    para4: "Canada’s immigration minister has stated that the government will continue to adjust its immigration targets and CRS thresholds in response to changing labor market conditions, which may lead to further increases in ITAs over the coming years."
  },
  {
    id: 5,
    date: "11 June 2024",
    title: "Helpful advice for newcomers landing in Canada: A post-arrival checklist for newcomers",
    imgSrc: Canada_E,
    description:
      "For newcomers to Canada, the transition can be overwhelming. This article offers a detailed post-arrival checklist that covers essential tasks to help ease the transition. From setting up a bank account to understanding healthcare options and local customs, this guide provides newcomers with actionable steps to ensure a smooth start in their new home. Personal anecdotes and tips from experienced immigrants enrich the content.",
    heading1: "Essential Tasks",
    para1: "The checklist begins with the most basic but crucial tasks, such as obtaining a SIN (Social Insurance Number) and setting up a bank account. These are essential steps for newcomers to start working, receiving benefits, and integrating into Canadian society.",
    heading2: "Understanding Healthcare",
    para2: "Healthcare is another critical area, and this guide emphasizes the importance of understanding Canada’s public healthcare system, including how to register for provincial health insurance and what services are covered under basic plans.",
    heading3: "Cultural and Legal Adaptation",
    para3: "Newcomers are also encouraged to familiarize themselves with Canadian cultural norms, local laws, and language services to help them integrate quickly into their new community. Many immigrants find that understanding the local way of life is one of the most important factors for settling in successfully.",
    heading4: "Housing and Employment Tips",
    para4: "The article concludes with practical tips on finding housing, securing employment, and making new friends. It also includes contact information for newcomer support organizations that can assist with the settlement process."
  },
  {
    id: 6,
    date: "12 June 2024",
    title: "Understanding Personal Lending in Canada: – Introduction to Banking System",
    imgSrc: Canada_F,
    description:
      "Navigating the Canadian banking system can be daunting for newcomers and even long-term residents. This guide introduces personal lending in Canada, covering topics like personal loans, credit, and the differences between Canadian financial institutions and those in other countries. Understanding these basics will help newcomers manage their finances effectively and make informed decisions when borrowing money or applying for credit.",
    heading1: "Overview of Personal Lending",
    para1: "Personal lending in Canada includes a variety of products such as personal loans, credit cards, and lines of credit. The banking system in Canada is sophisticated, and understanding the different types of lending products available is essential for managing personal finances.",
    heading2: "Types of Loans and Credit",
    para2: "Personal loans are often used for large expenses like home renovations or debt consolidation, while credit cards offer more flexible borrowing with revolving credit. Lines of credit work similarly to credit cards, but with potentially lower interest rates, making them ideal for those looking to finance short-term needs.",
    heading3: "Credit Score System",
    para3: "One of the most important aspects of personal lending in Canada is the credit score. Canadian banks and financial institutions use credit scores to evaluate the risk of lending money. A higher credit score generally means better borrowing rates, so newcomers are advised to establish good credit early.",
    heading4: "Choosing the Right Financial Institution",
    para4: "When selecting a bank or lender, it’s important to consider factors like fees, customer service, and interest rates. Canada has many financial institutions, including major banks, credit unions, and online lenders, all offering different loan products and services to suit various financial needs."
  }
];

const recentNewsData = [
  {
    id: 1,
    type: "left",
    imageSrc: Newsright,
    imageAlt: "Recent News",
    imageClass: "left-news-image",
    date: "Sunday 9 Jan 2024",
    heading: "Top 10 universities in Canada",
    content: "Canada boasts top universities known for academic excellence and research. The University of Toronto, McGill University, and University of British Columbia lead the list, offering diverse programs and vibrant campus life. Other notable institutions include the University of Alberta, University of Calgary[...]",
    heading1: "Academic Excellence and Research Opportunities",
    content1: "These universities are not only internationally recognized for their teaching standards but also offer extensive research opportunities in various fields such as technology, healthcare, and environmental studies. Research innovation is at the heart of these institutions, with partnerships with global organizations and industries, contributing to Canada's reputation as a leader in academic research.",
    heading2: "International Students and Cultural Diversity",
    content2: "Canada's universities are home to a large international student population, offering a multicultural environment that fosters inclusivity and global perspectives. Students from around the world are attracted by the high quality of education and the opportunity to live in a diverse, welcoming society. Many Canadian universities also have strong support networks for international students, helping them adjust to life in Canada and succeed academically.",
    heading3: "Graduate Programs and Career Opportunities",
    content3: "In addition to undergraduate programs, Canada's top universities offer highly regarded graduate programs. With a focus on preparing students for careers in various fields such as business, engineering, healthcare, and arts, these institutions have strong connections with industry leaders. This ensures that graduates have access to a wide range of career opportunities in both Canada and internationally.",
    heading4: "Sustainability and Campus Life",
    content4: "Sustainability initiatives are increasingly important at Canadian universities, with many institutions taking active steps to reduce their environmental footprint. On campus, students enjoy a wide range of extracurricular activities, including sports, clubs, and cultural events, which contribute to a vibrant campus life and holistic educational experience."
  },
  {
    id: 2,
    type: "right-Top",
    imageSrc: Newsleft,
    imageAlt: "Top Cities",
    imageClass: "news-small-image",
    overlayClass: "news-image-overlay",
    date: "Monday 2 Jan 2024",
    heading: "Trending tourist places in Canada",
    content: "Canada features breathtaking Banff, historic Quebec City, and the iconic Niagara Falls. Cities like Vancouver[...]",
    heading1: "Banff National Park and the Canadian Rockies",
    content1: "Banff National Park in Alberta is one of Canada's most famous destinations, known for its dramatic mountain landscapes, pristine lakes, and rich wildlife. Visitors can enjoy outdoor activities such as skiing, hiking, and wildlife viewing, with many travelers coming to experience the breathtaking beauty of Lake Louise and Moraine Lake, two of the most photographed spots in the world.",
    heading2: "Quebec City: A Step Back in Time",
    content2: "Quebec City is renowned for its Old World charm, and is the only fortified city in North America that still retains its original walls. The cobblestone streets and historic architecture make it feel like stepping into a European village. Popular attractions include the iconic Château Frontenac, Old Port, and the charming Place Royale. Quebec City's French heritage and festive atmosphere draw visitors year-round, especially during the Winter Carnival, one of the largest winter festivals in the world.",
    heading3: "Niagara Falls: A Natural Wonder",
    content3: "Niagara Falls remains one of the most famous natural attractions globally, attracting millions of visitors every year. Visitors can experience the falls up close on boat tours or enjoy panoramic views from observation decks. The area around Niagara Falls also offers wine tours, hiking trails, and seasonal festivals, making it a year-round destination.",
    heading4: "Vancouver: A City Surrounded by Nature",
    content4: "Vancouver is a vibrant coastal city that offers both urban and outdoor experiences. Known for its beautiful parks, such as Stanley Park, and access to the Pacific Ocean and mountain ranges, Vancouver is a hub for outdoor enthusiasts. Visitors can enjoy skiing in the winter, kayaking in the summer, and exploring the city's rich arts scene and diverse cultural neighborhoods year-round."
  },
  {
    id: 3,
    type: "right",
    imageSrc: Newsleft,
    imageAlt: "Top Industries",
    imageClass: "news-small-image",
    overlayClass: "news-image-overlay",
    date: "Friday 7 Jan 2024",
    heading: "Trending Civilized City in Canada",
    content: "Canada’s cities shine with diversity. Toronto is culturally rich, Vancouver has stunning views[...]",
    heading1: "Toronto: A Hub of Culture and Innovation",
    content1: "Toronto, Canada's largest city, is a multicultural hub, known for its diverse neighborhoods and vibrant arts scene. As one of the world's most livable cities, it offers residents a high quality of life with excellent healthcare, transportation, and education. The city is also a leader in innovation, with a growing tech industry and numerous opportunities for entrepreneurs. Toronto is home to world-class museums, theaters, and cultural institutions, making it a cultural hotspot in North America.",
    heading2: "Vancouver: Where Nature Meets Urban Life",
    content2: "Vancouver is famous for its stunning views of the Pacific Ocean and the nearby mountain ranges. It is a city where nature and urban life coexist, offering residents access to both a cosmopolitan lifestyle and outdoor adventure. Whether it’s skiing in the winter, biking around the Seawall, or exploring the bustling downtown core, Vancouver is one of Canada’s most desirable places to live. The city also has a focus on sustainability and is renowned for its green initiatives.",
    heading3: "Montreal: The French-Cultural Capital of Canada",
    content3: "Montreal, known for its French heritage, is a city of vibrant arts and culture. With a rich history, beautiful architecture, and a love for food, Montreal offers a European feel with a distinctly Canadian touch. The city is also recognized as a hub for tech startups, film, and music. Montreal’s diverse population, festivals, and multicultural flair make it one of the most exciting cities in the world to live and visit.",
    heading4: "Calgary: The Heart of Canada's Oil Industry",
    content4: "Calgary, located in Alberta, is known as the energy capital of Canada due to its proximity to the country’s oil sands. The city is a major business hub, particularly for energy, engineering, and finance. It’s also a city that offers a high standard of living, with easy access to the Canadian Rockies for outdoor enthusiasts. Calgary is famous for the Calgary Stampede, one of the largest rodeo and exhibition events in the world."
  },
];


export default function Newsroom() {
  const navigate = useNavigate();
  const [selectedNewsIndex, setSelectedNewsIndex] = useState(null);
  const [selectedRecentNewsIndex, setSelectedRecentNewsIndex] = useState(null);
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 

  // Filter newsArticles based on the search query
  const filteredNewsArticles = newsArticles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handlenavigateallnews = () => {
    navigate("/all-news-blogs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlenewsreadmore = (index, isRecent = false, side = "") => {
    if (isRecent) {
      setSelectedRecentNewsIndex(index);
    } else {
      setSelectedNewsIndex(index);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBlogReadMore = (index) => {
    setSelectedBlogIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlenavigateblogspage = () => {
    navigate("/blogs");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedNewsIndex(null);
    setSelectedRecentNewsIndex(null);
    setSelectedBlogIndex(null);
    window.scrollTo({ top: 0, behavior: "smooth" });

  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="newsroom-container">
      {/* Conditional rendering based on selection */}
      {selectedNewsIndex === null &&
      selectedRecentNewsIndex === null &&
      selectedBlogIndex === null ? (
        <>
          <div className="news-navigation">
            <button className="news-nav-button">Home</button>
            <button className="news-nav-button">&gt;</button>
            <button
              className="news-nav-button"
              onClick={handlenavigateblogspage}
            >
              Blog
            </button>
          </div>
          <h2 className="newsroom-heading">Aquarian Newsroom</h2>

          {/* Recent News Section */}
          <div className="recent-news-section">
            <h2 className="recent-news-heading">Recent News</h2>
            <div className="recent-news">
              <div className="news-left-image">
                {recentNewsData
                  .filter((item) => item.type === "left")
                  .map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handlenewsreadmore(index, true, item.type)}
                    >
                      <img
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className={item.imageClass}
                      />
                      <div className="newsroom_info">
                        <p className="News-left-Dates">{item.date}</p>
                        <p className="news-card-info-heading">{item.heading}</p>
                        <p className="News-Right-content">{item.content}</p>
                      </div>
                    </div>
                  ))}
                  
              </div>

              {/* combined wright section */}
              <div></div>
              <div className="news-right-images">
                {[
                  ...recentNewsData.filter((item) => item.type === "right"),
                  ...recentNewsData.filter((item) => item.type === "right-Top"),
                ].map((item, index) => (
                  <div
                    key={item.id}
                    className="news-image-container"
                    onClick={() => handlenewsreadmore(index, true, item.type)}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className={item.imageClass}
                    />
                    <div className={item.overlayClass}>
                      <p className="News-Right-Dates">{item.date}</p>
                      <h3 className="news-image-heading">{item.heading}</h3>
                      <p className="News-Right-Paragraphs">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              
            </div>
          </div>

          {/* News Section with Search */}
          <div className="news-section-2">
            <div className="news-feature-bar">
              <div className="news-search-bar">
                <h3 className="Allnews-heading-section">All News</h3>
                <div className="search-container">
                  <input
                    type="text"
                    placeholder="Search here for news..."
                    className="news-search-area"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>

              <div className="newsroomgrid-container">
                {filteredNewsArticles.map((article, index) => (
                  <div
                    className="news-grid-item"
                    key={article.id}
                    onClick={() => handlenewsreadmore(index)}
                  >
                    <img src={article.imgSrc} alt={`Card ${article.id}`} />
                    <p className="news-card-date">{article.date}</p>
                    <p className="news-card-content">{article.title}</p>
                    <p className="card-content-news">
                      {article.description.length > 75
                        ? article.description.slice(0, 75) + "[...]"
                        : article.description}
                    </p>
                    <div className="news-button-container">
                      <button className="news-card-btn">Express Entry</button>
                      <button className="news-card-btn">Immigration</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="Load-morenews-btn">
            <button className="Allnews-button" onClick={handlenavigateallnews}>
              Load more news
            </button>
          </div>

          {/* Trending Blogs Section */}
          <div className="news-trendingBlogs">
            <h2 className="trending-heading">Trending Blogs</h2>
            <div className="trending-cards">
              {blogsData.map((blog, index) => (
                <div
                  className="trending-card"
                  key={index}
                  onClick={() => handleBlogReadMore(index)}
                >
                  <img
                    src={blog.imgSrc}
                    alt={`Blog ${index + 1}`}
                    className="trending-card-image"
                  />
                  <div className="trending-card-content">
                    <div className="trending-card-header">
                      <span className="trending-card-date">{blog.date}</span>
                    </div>
                    <h3 className="trending-card-title">{blog.title}</h3>
                    <p className="trending-card-description">
                      {blog.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="btn-blogs-news">
            <button className="Visit-Blogs" onClick={handlenavigateblogspage}>
              Visit Blogs
            </button>
          </div>
        </>
      ) : (
        <div className="newsDetailContainer">
          <div className="news-navigations-full-screen">
            <button className="news-nav-button">Home</button>
            <button className="news-nav-button">&gt;</button>
            <button
              className="news-nav-button"
              onClick={handlenavigateblogspage}
            >
              Blog
            </button>
          </div>

          {selectedRecentNewsIndex !== null &&
          selectedRecentNewsIndex >= 0 &&
          selectedRecentNewsIndex < recentNewsData.length ? (
            <>
              <h3 className="newsTitleDetail">
                {recentNewsData[selectedRecentNewsIndex]?.heading}
              </h3>
              <p className="newsDate">
                {recentNewsData[selectedRecentNewsIndex]?.date}
              </p>
              <img
                src={recentNewsData[selectedRecentNewsIndex]?.imageSrc}
                alt={recentNewsData[selectedRecentNewsIndex]?.heading}
              />
              <p className="full-recent-news-heading">
                {recentNewsData[selectedRecentNewsIndex]?.heading1}
              </p>
              <p className="Recent-news-para">
                {recentNewsData[selectedRecentNewsIndex]?.content1}
              </p>
              <p className="full-recent-news-heading">
                {recentNewsData[selectedRecentNewsIndex]?.heading2}
              </p>
              <p className="Recent-news-para">
                {recentNewsData[selectedRecentNewsIndex]?.content2}
              </p>
              <p className="full-recent-news-heading">
                {recentNewsData[selectedRecentNewsIndex]?.heading3}
              </p>
              <p className="Recent-news-para">
                {recentNewsData[selectedRecentNewsIndex]?.content3}
              </p>
              <p className="full-recent-news-heading">
                {recentNewsData[selectedRecentNewsIndex]?.heading4}
              </p>
              <p className="Recent-news-para">
                {recentNewsData[selectedRecentNewsIndex]?.content4}
              </p>
            </>
          ) : selectedNewsIndex !== null &&
            selectedNewsIndex >= 0 &&
            selectedNewsIndex < newsArticles.length ? (
            <>
              <h3 className="newsTitleDetail">
                {newsArticles[selectedNewsIndex]?.title}
              </h3>
              <p className="newsDate">
                {newsArticles[selectedNewsIndex]?.date}
              </p>
              <img className="full-screen-newsroom-image"
                src={newsArticles[selectedNewsIndex]?.imgSrc}
                alt={newsArticles[selectedNewsIndex]?.title}
              />
              <p className="newsContentDetail-full-screen">
                {newsArticles[selectedNewsIndex]?.description}
              </p>
              <p className="newsheadings">{newsArticles[selectedNewsIndex]?.heading1}</p>
              <p className="news-full-para">{newsArticles[selectedNewsIndex]?.para1}</p>

              <p className="newsheadings">{newsArticles[selectedNewsIndex]?.heading2}</p>
              <p className="news-full-para">{newsArticles[selectedNewsIndex]?.para2}</p>

              <p className="newsheadings">{newsArticles[selectedNewsIndex]?.heading3}</p>
              <p className="news-full-para">{newsArticles[selectedNewsIndex]?.para3}</p>

              <p className="newsheadings">{newsArticles[selectedNewsIndex]?.heading4}</p>
              <p className="news-full-para">{newsArticles[selectedNewsIndex]?.para4}</p>


            </>
          ) : selectedBlogIndex !== null &&
            selectedBlogIndex >= 0 &&
            selectedBlogIndex < blogsData.length ? (
            <>
              <h3 className="blogTitleDetail">
                {blogsData[selectedBlogIndex]?.title}
              </h3>
              <p className="blogDate">{blogsData[selectedBlogIndex]?.date}</p>
              <img
                src={blogsData[selectedBlogIndex]?.imgSrc}
                alt={blogsData[selectedBlogIndex]?.title}
              />
              <p className="newsContentDetail-full-screen">
                {blogsData[selectedBlogIndex]?.description}
              </p>
              <p className="newsheadings">
                {blogsData[selectedBlogIndex]?.heading1}
              </p>
              <p className="news-full-para">
                {blogsData[selectedBlogIndex]?.paragraph1}
              </p>
              <p className="newsheadings">
                {blogsData[selectedBlogIndex]?.heading2}
              </p>
              <p className="news-full-para">
                {blogsData[selectedBlogIndex]?.paragraph2}
              </p>
              <p className="newsheadings">
                {blogsData[selectedBlogIndex]?.heading3}
              </p>
              <p className="news-full-para">
                {blogsData[selectedBlogIndex]?.paragraph3}
              </p>
              <p className="newsheadings">
                {blogsData[selectedBlogIndex]?.heading4}
              </p>
              <p className="news-full-para">
                {blogsData[selectedBlogIndex]?.paragraph4}
              </p>
            </>
          ) : null}

          <button className="backToNewsButton" onClick={handleBackToList}>
            Back to News
          </button>
        </div>
      )}
    </div>
  );
}
