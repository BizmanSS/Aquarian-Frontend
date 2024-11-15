import React, { useState } from "react";
import "./Blogs.css";
import BLOGS_A from "../../../Assets/BLOGS_A.jpg";
import BLOGS_B from "../../../Assets/BLOGS_B.jpg";
import BLOGS_C from "../../../Assets/BLOGS_C.jpg";
import BLOGS_D from "../../../Assets/BLOGS_D.jpg";
import BLOGS_E from "../../../Assets/BLOGS_E.jpg";
import BLOGS_F from "../../../Assets/BLOGS_F.jpg";
import BLOGS_G from "../../../Assets/BLOGS_G.jpg";
import BLOGS_H from "../../../Assets/BLOGS_H.jpg";
import BLOGS_I from "../../../Assets/BLOGS_I.jpg";
import INDUSTRIES from "../../../Assets/INDUSTIES_CANADA.jpg";
import UNIVERSITIES from "../../../Assets/CANADA_UNIVERSITIES.jpg";
import GRADUATION from "../../../Assets/GRADUATION_IMP.jpg";
import TIPS_TRICKS from "../../../Assets/TIPS_TRICKS.jpg";
import LIVE_CANADA from "../../../Assets/LIVE_CANADA.jpg";
import { useNavigate } from "react-router-dom";

const categoryColors = ["#ff5733", "#33c1ff", "#75ff33"];
const combinedBlogsData = [
  {
    id: 1,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "What is Category Based Selection? Everything you need to know",
    description: "Canada has been a prominent destination for immigrants, known for its diverse population that balances economic needs with humanitarian goals[...]",
    imgSrc: BLOGS_A,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Understanding Category Based Selection",
    para_First: "Category Based Selection is a streamlined immigration process in Canada that allows applicants to apply under specific categories based on their skills, work experience, and other criteria...",
    heading_second: "2. Eligibility Criteria",
    para_sec: "To be eligible for Category Based Selection, applicants must meet specific criteria, which can vary by province...",
    heading_third: "3. Benefits of Category Based Selection",
    para_third: "This selection system offers numerous advantages, such as faster processing times and a more straightforward application process for skilled workers...",
    heading_fourth: "4. Conclusion",
    para_fourth: "In summary, Category Based Selection is an essential part of Canada’s immigration strategy...",
  },
  {
    id: 2,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "Top In Demand Jobs in Canada as of 2024",
    description: "Canada has been at the forefront of immigration for ages. People come from all over the world to turn their sweet maple syrup dreams into reality...",
    imgSrc: BLOGS_B,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Current Job Market Trends",
    para_First: "As of 2024, Canada’s job market is evolving rapidly due to technological advancements and changing economic needs...",
    heading_second: "2. High-Demand Sectors",
    para_sec: "Key sectors with the most in-demand jobs include Information Technology, Nursing, Engineering, and Construction...",
    heading_third: "3. Skills and Qualifications Needed",
    para_third: "Job seekers should focus on acquiring relevant skills through education and practical experience...",
    heading_fourth: "4. Conclusion",
    para_fourth: "For those looking to immigrate, understanding the in-demand jobs in Canada can provide a strategic advantage...",
  },
  {
    id: 3,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "Everything you need to know about Sponsoring your Spouse",
    description: "Sponsoring your spouse, partner or child involves helping them obtain their Permanent Residency (PR) and being able to support them financially...",
    imgSrc: BLOGS_C,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Understanding Sponsorship",
    para_First: "Sponsoring a loved one for immigration to Canada is a significant responsibility...",
    heading_second: "2. Eligibility Requirements",
    para_sec: "To be eligible to sponsor a spouse or partner, you must be a Canadian citizen or permanent resident...",
    heading_third: "3. Application Process",
    para_third: "The application process for sponsorship involves submitting several forms and documents...",
    heading_fourth: "4. Conclusion",
    para_fourth: "Sponsoring your spouse or partner can be a rewarding experience...",
  },
  {
    id: 4,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "Canadian Healthcare System",
    description: "Canada boasts a healthcare system that provides world-class care, ensuring universal access to essential services...",
    imgSrc: BLOGS_D,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Overview of the Canadian Healthcare System",
    para_First: "Canada's healthcare system, known as Medicare, is publicly funded...",
    heading_second: "2. How It Works",
    para_sec: "The healthcare system is administered by provincial and territorial governments...",
    heading_third: "3. Benefits of Medicare",
    para_third: "Canadian residents benefit from a wide range of services...",
    heading_fourth: "4. Conclusion",
    para_fourth: "Understanding how the Canadian healthcare system operates is crucial for newcomers...",
  },
  {
    id: 5,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "Entrepreneurship in Canada",
    description: "Learn about Canada’s booming entrepreneurship opportunities...",
    imgSrc: BLOGS_E,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. The Entrepreneurial Landscape in Canada",
    para_First: "Canada is recognized for its supportive environment for entrepreneurs...",
    heading_second: "2. Starting a Business",
    para_sec: "Starting a business in Canada involves several steps...",
    heading_third: "3. Challenges and Opportunities",
    para_third: "While Canada offers numerous opportunities for entrepreneurs...",
    heading_fourth: "4. Conclusion",
    para_fourth: "For immigrants, Canada presents a vibrant market for entrepreneurship...",
  },
  {
    id: 6,
    class: "popular-blog",
    date: "Sunday, 1 Jan 2024",
    title: "Immigration Pathways",
    description: "Explore the various immigration pathways for settling in Canada...",
    imgSrc: BLOGS_F,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Overview of Immigration Pathways",
    para_First: "Canada offers multiple immigration pathways to help individuals settle in the country...",
    heading_second: "2. Economic Immigration",
    para_sec: "Programs like Express Entry, Provincial Nominee Programs (PNPs)...",
    heading_third: "Family Sponsorship",
    para_third: "Family sponsorship allows Canadian citizens and permanent residents to bring their family members to Canada...",
    heading_fourth: "Conclusion",
    para_fourth: "Understanding the various immigration pathways is crucial for potential immigrants...",
  },
  {
    id: 7,
    class: "blog",
    date: "Sunday, 1 Jan 2024",
    title: "Top 10 Universities in Canada",
    description: "For decades, Canada has established itself as a premier destination for international students...",
    imgSrc: UNIVERSITIES,
  },
  {
    id: 8,
    class: "blog",
    date: "Monday, 2 Jan 2024",
    title: "Top Industries",
    description: "Canada’s industries have been flourishing due to several key factors...",
    imgSrc: INDUSTRIES,
  },
  {
    id: 9,
    class: "blog",
    date: "Tuesday, 3 Jan 2024",
    title: "Live in Canada",
    description: "Canada is home to several cities known for their vibrant cultural scenes...",
    imgSrc: LIVE_CANADA,
  },
  {
    id: 10,
    class: "blog",
    date: "Monday, 1 Jan 2024",
    title: "Tips and Tricks for Preparing for IELTS",
    content: "IELTS is an integral requirement for immigrating to Canada...",
    imgSrc: TIPS_TRICKS,
    categories: ["Study", "IELTS", "Canada"],
  },
  {
    id: 11,
    class: "blog",
    date: "Wednesday, 3 Jan 2024",
    title: "Exploring Graduation Opportunities in Canada",
    content: "Canada offers numerous graduation opportunities for international students...",
    imgSrc: GRADUATION,
    categories: ["Study", "Graduation", "Canada"],
  },
  {
    id: 12,
    class: "trending-news",
    date: "Monday, 21 Oct 2023",
    title: "Canada Introduces New Immigration Pathways",
    content: "Canada has unveiled new immigration pathways aimed at attracting skilled workers...",
    imgSrc: BLOGS_G,
  },
  {
    id: 13,
    class: "trending-news",
    date: "Thursday, 24 Oct 2023",
    title: "Canada Launches Green Technology Initiative",
    content: "The Canadian government has announced a major investment in green technology initiatives...",
    imgSrc: BLOGS_H,
  },
  {
    id: 14,
    class: "trending-news",
    date: "Saturday, 15 Nov 2024",
    title: "Canada’s Housing Market Shows Signs of Recovery",
    content: "After a period of decline, Canada’s housing market is showing signs of recovery...",
    imgSrc: BLOGS_I,
  },
];


const popularBlogsData = [
  {
    id: 1,
    date: "Saturday, 16 Jan 2024",
    title: "What is Category Based Selection?",
    description:
      "Canada has long been recognized as a prominent destination for immigrants, attracting individuals and families from around the globe. This reputation stems from its commitment to diversity.[...]",
    imgSrc: BLOGS_A,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Understanding Category Based Selection",
    para_First:
      "Category Based Selection is a streamlined immigration process in Canada that allows applicants to apply under specific categories based on their skills, work experience, and other criteria. This system aims to attract skilled workers who can meet the labor market demands in various provinces.",

    heading_second: "2. Eligibility Criteria",
    para_sec:
      "To be eligible for Category Based Selection, applicants must meet specific criteria, which can vary by province. Generally, candidates are assessed on their work experience, education level, language proficiency, and adaptability. Some provinces may also require a job offer from a Canadian employer.",

    heading_third: "3. Benefits of Category Based Selection",
    para_third:
      "This selection system offers numerous advantages, such as faster processing times and a more straightforward application process for skilled workers. It helps provinces fill labor shortages and allows immigrants to contribute positively to the Canadian economy.",

    heading_fourth: "4. Conclusion",
    para_fourth:
      "In summary, Category Based Selection is an essential part of Canada’s immigration strategy, enabling the country to attract the talent it needs while providing a pathway for skilled immigrants to build their lives in Canada. Understanding this system can help potential immigrants navigate the application process effectively.",
  },

  {
    id: 2,
    date: "Sunday, 1 Jan 2024",
    title: "Top In Demand Jobs in Canada as of 2024",
    description:
      "Canada has been at the forefront of immigration for ages. People come from all over the world to turn their sweet maple syrup dreams into reality. Being a beacon of opportunities to get High paid jobs[...]",
    imgSrc: BLOGS_B,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Current Job Market Trends",
    para_First:
      "As of 2024, Canada’s job market is evolving rapidly due to technological advancements and changing economic needs. Industries such as technology, healthcare, and skilled trades are experiencing significant growth, leading to a high demand for skilled professionals.",

    heading_second: "2. High-Demand Sectors",
    para_sec:
      "Key sectors with the most in-demand jobs include Information Technology, Nursing, Engineering, and Construction. Employers are actively seeking candidates with the right skills and qualifications, often offering competitive salaries and benefits.",

    heading_third: "3. Skills and Qualifications Needed",
    para_third:
      "Job seekers should focus on acquiring relevant skills through education and practical experience. Certifications in specific fields, language proficiency, and a solid understanding of the Canadian workplace culture can significantly enhance employability.",

    heading_fourth: "4. Conclusion",
    para_fourth:
      "For those looking to immigrate, understanding the in-demand jobs in Canada can provide a strategic advantage in the job market. By aligning their skills with market needs, immigrants can improve their chances of successful integration.",
  },
  {
    id: 3,
    date: "Tuesday, 21 Jan 2024",
    title: "Everything you need to know about Sponsoring your Spouse",
    description:
      "Sponsoring your spouse, partner or child involves helping them obtain their Permanent Residency (PR) and being able to support them financially without social assistance and helpers[...]",
    imgSrc: BLOGS_C,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Understanding Sponsorship",
    para_First:
      "Sponsoring a loved one for immigration to Canada is a significant responsibility. It entails a commitment to provide financial support and ensure their well-being as they settle into their new life in Canada.",

    heading_second: "2. Eligibility Requirements",
    para_sec:
      "To be eligible to sponsor a spouse or partner, you must be a Canadian citizen or permanent resident, at least 18 years old, and able to demonstrate your financial capability to support your partner without social assistance.",

    heading_third: "3. Application Process",
    para_third:
      "The application process for sponsorship involves submitting several forms and documents, including proof of relationship, financial documents, and police clearance certificates. It’s crucial to ensure all information is accurate to avoid delays.",

    heading_fourth: "4. Conclusion",
    para_fourth:
      "Sponsoring your spouse or partner can be a rewarding experience, allowing you to build a life together in Canada. Understanding the requirements and processes involved is key to a successful application.",
  },
  {
    id: 4,
    date: "Monday, 15 Jan 2024",
    title: "Canadian Healthcare System",
    description:
      "Canada boasts a healthcare system that provides world-class care, ensuring universal access to essential services. This public system prioritizes quality and equity and mental health support[...]",
    imgSrc: BLOGS_D,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Overview of the Canadian Healthcare System",
    para_First:
      "Canada's healthcare system, known as Medicare, is publicly funded and provides essential medical services to all residents. This system ensures that individuals can access healthcare services without direct charges at the point of use.",

    heading_second: "2. How It Works",
    para_sec:
      "The healthcare system is administered by provincial and territorial governments, which are responsible for planning and delivering health services. Funding comes primarily from taxes, making healthcare accessible for everyone.",

    heading_third: "3. Benefits of Medicare",
    para_third:
      "Canadian residents benefit from a wide range of services, including hospital care, physician services, and surgical procedures. Preventive care and public health initiatives are also prioritized, contributing to overall population health.",

    heading_fourth: "4. Conclusion",
    para_fourth:
      "Understanding how the Canadian healthcare system operates is crucial for newcomers. It ensures that everyone can receive necessary medical care, promoting a healthy and productive society.",
  },
  {
    id: 5,
    date: "Friday, 24 Jan 2024",
    title: "Entrepreneurship in Canada",
    description:
      "Learn about Canada’s booming entrepreneurship opportunities, where innovation and creativity thrive in a supportive environment. With a strong emphasis on technology and health care[...]",
    imgSrc: BLOGS_E,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. The Entrepreneurial Landscape in Canada",
    para_First:
      "Canada is recognized for its supportive environment for entrepreneurs. With a diverse economy and a wealth of resources, the country encourages innovation and business development across various sectors.",

    heading_second: "2. Starting a Business",
    para_sec:
      "Starting a business in Canada involves several steps, including choosing a business structure, registering your business, and understanding the regulatory requirements. Entrepreneurs can access various grants and funding programs to support their ventures.",

    heading_third: "3. Challenges and Opportunities",
    para_third:
      "While Canada offers numerous opportunities for entrepreneurs, challenges such as market competition and navigating regulations exist. Networking and mentorship programs can help new business owners overcome these hurdles.",

    heading_fourth: "4. Conclusion",
    para_fourth:
      "For immigrants, Canada presents a vibrant market for entrepreneurship. Understanding the landscape can equip them with the knowledge and tools needed to succeed in their business endeavors.",
  },
  {
    id: 6,
    date: "Monday, 18 feb 2024",
    title: "Immigration Pathways",
    description:
      "Explore the various immigration pathways for settling in Canada, a country known for its welcoming approach to newcomers. Canada offers options to move to the canada and live a life [...]",
    imgSrc: BLOGS_F,
    categories: ["Trending", "Popular", "Canada"],
    heading_first: "1. Overview of Immigration Pathways",
    para_First:
      "Canada offers multiple immigration pathways to help individuals settle in the country. These pathways cater to different needs, including economic, family reunification, and humanitarian purposes.",

    heading_second: "2. Economic Immigration",
    para_sec:
      "Programs like Express Entry, Provincial Nominee Programs (PNPs), and the Atlantic Immigration Program focus on attracting skilled workers who can contribute to the Canadian economy. Each program has specific eligibility criteria and application processes.",

    heading_third: "Family Sponsorship",
    para_third:
      "Family sponsorship allows Canadian citizens and permanent residents to bring their family members to Canada. This process requires meeting certain financial and legal obligations to ensure the sponsored family member's well-being.",

    heading_fourth: "Conclusion",
    para_fourth:
      "Understanding the various immigration pathways is crucial for potential immigrants. With the right information and preparation, individuals can navigate the Canadian immigration system effectively and find their place in this diverse nation.",
  },
];

const BlogsData = [
  {
    id: 1,
    imgSrc: UNIVERSITIES,
    date: "Sunday, 1 Jan 2024",
    title: "Top 10 Universities in Canada",
    description:
      "For decades, Canada has established itself as a premier destination for international students, drawing ambitious young individuals from around the globe. The country is home to numerous renowned universities, known for their academic excellence and diverse programs that cater to a wide range of interests and career paths[...]",
  },
  {
    id: 2,
    imgSrc: INDUSTRIES,
    date: "Monday, 2 Jan 2024",
    title: "Top Industries",
    description:
      "Canada’s industries have been flourishing due to several key factors. A strong emphasis on innovation drives growth across various sectors[...]",
  },
  {
    id: 3,
    imgSrc: LIVE_CANADA,
    date: "Tuesday, 3 Jan 2024",
    title: "Live in Canada",
    description:
      "Canada is home to several cities known for their vibrant cultural scenes, diverse communities, and ample job opportunities. Cities like Toronto, the largest metropolis[...]",
  },
];

const blogsData = [
  {
    id: 1,
    date: "Monday,1 Jan 2024",
    title: "Tips and Tricks for Preparing for IELTS",
    content:
      "IELTS is an integral requirement for immigrating to Canada. While the preparation may seem overwhelming, it is essential for demonstrating English language proficiency, which is crucial for successful integration into Canadian society[...]",
    imgSrc: TIPS_TRICKS,
    categories: ["Study", "IELTS", "Canada"],
  },
  {
    id: 2,
    date: "Wednesday, 3 Jan 2024",
    title: "Exploring Graduation Opportunities in Canada",
    content:
      "Canada offers numerous graduation opportunities for international students, ensuring they are well-prepared for their future careers. With a wide range of programs across various fields, students can choose from top universities and colleges[...]",
    imgSrc: GRADUATION,
    categories: ["Study", "Graduation", "Canada"],
  },
];
const trendingNewsData = [
  {
    id: 1,
    date: "Monday, 21 Oct 2023",
    title: "Canada Introduces New Immigration Pathways",
    content:
      "Canada has unveiled new immigration pathways aimed at attracting skilled workers and addressing labor shortages in various sectors. These changes are designed to encourage international talent to contribute[...]",
    imgSrc: BLOGS_G,
  },
  {
    id: 2,
    date: "Thursday, 24 Oct 2023",
    title: "Canada Launches Green Technology Initiative",
    content:
      "The Canadian government has announced a major investment in green technology initiatives, focusing on renewable energy projects and sustainable practices. This supports the country's commitment[...]",
    imgSrc: BLOGS_H,
  },
  {
    id: 3,
    date: "Saturday, 15 Nov 2024",
    title: "Canada’s Housing Market Shows Signs of Recovery",
    content:
      "After a period of decline, Canada’s housing market is showing signs of recovery, with increased sales and rising prices in major cities. Analysts attribute this trend to improved economic conditions[...]",
    imgSrc: BLOGS_I,
  },
];
export default function Blogs() {
  const navigate = useNavigate();
  const [selectedBlogIndex, setSelectedBlogIndex] = useState(null);
  const [isBlogDetailVisible, setIsBlogDetailVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const BlogCard = ({ blog, onClick }) => (
    <div className="Blogs-card" onClick={onClick}>
      <div className="Blogs-card-image">
        <img src={blog.imgSrc} alt={`Blog ${blog.id}`} />
      </div>
      <div className="Blogs-card-content">
        <h2 className="Blogs-trending-date">{blog.date}</h2>
        <h3>{blog.title}</h3>
        <p className="BLOGS_DECS">{blog.description}</p>
        <div className="Blogs-Trending-list-news">
          {blog.categories.map((category, index) => (
            <li key={index} className="Blogs-trending-item" style={{ color: categoryColors[index % categoryColors.length] }}>
              {category}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
  

  const handleReadMore = (index) => {
    setSelectedBlogIndex(index);
    setIsBlogDetailVisible(true);
  };

  const handleBackToBlogs = () => {
    setSelectedBlogIndex(null);
    setIsBlogDetailVisible(false);
  };

  const handlenavigate = () => {
    navigate("Top-universities");
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogsDatarecent = BlogsData.filter((blog) => {
    const title = blog.title || "";
    const description = blog.description || "";
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const filteredTrendingNewsData = trendingNewsData.filter((news) => {
    const title = news.title || "";
    const content = news.content || "";
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const filteredBlogsData = blogsData.filter((blog) => {
    const title = blog.title || "";
    const description = blog.description || "";
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  const filteredCombinedBlogsData = combinedBlogsData.filter((blog) => {
    const title = blog.title || "";
    const description = blog.description || "";
    const date = blog.date || "";
    
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      date.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });
  

  const filteredPopularBlogsData = popularBlogsData.filter((blog) => {
    const title = blog.title || "";
    const description = blog.description || "";
    return (
      title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="BLOGS_OUTER_CONTAINER">
      <div className="Blogs-navigators">
        <li className="Blogs-navitems">Home</li>
        <li className="Blogs-navitems">&gt;</li>
        <li className="Blogs-navitems">Blogs</li>
      </div>

      <div className="Blogs-heading-blogs">
        <div className="Blogs-frame">
          <h1 className="Blogs-blog-heading">Aquarian Blogs</h1>
          <div className="Blogs-searcher">
            <input
              type="text"
              placeholder="Search..."
              className="Blogs-search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className="Blogs-filter-button">Filter</button>
          </div>
        </div>
      </div>
     
      {isBlogDetailVisible ? (
        <div className="blogDetailContainer">
          <p className="blogDate">{popularBlogsData[selectedBlogIndex].date}</p>
          <h3 className="blogTitleDetail">
            {popularBlogsData[selectedBlogIndex].title}
          </h3>
          <img
            src={popularBlogsData[selectedBlogIndex].imgSrc}
            alt={popularBlogsData[selectedBlogIndex].title}
          />
          <div className="blogCategoriesList">
            {popularBlogsData[selectedBlogIndex].categories.map(
              (category, i) => (
                <li key={i} className="blogCategoryItem">
                  {category}
                </li>
              )
            )}
          </div>
          <p className="blogDescriptionDetail">
            {popularBlogsData[selectedBlogIndex].description}
          </p>
          <p className="blogDescriptionHeading">
            {popularBlogsData[selectedBlogIndex].heading_first}
          </p>
          <p className="blogDescriptionDescription">
            {popularBlogsData[selectedBlogIndex].para_First}
          </p>
          <p className="blogDescriptionHeading">
            {popularBlogsData[selectedBlogIndex].heading_second}
          </p>
          <p className="blogDescriptionDescription">
            {popularBlogsData[selectedBlogIndex].para_sec}
          </p>
          <p className="blogDescriptionHeading">
            {popularBlogsData[selectedBlogIndex].heading_third}
          </p>
          <p className="blogDescriptionDescription">
            {popularBlogsData[selectedBlogIndex].para_third}
          </p>
          <p className="blogDescriptionHeading">
            {popularBlogsData[selectedBlogIndex].heading_fourth}
          </p>
          <p className="blogDescriptionDescription">
            {popularBlogsData[selectedBlogIndex].para_fourth}
          </p>
          <button className="backToBlogsButton" onClick={handleBackToBlogs}>
            Back to Blogs
          </button>
        </div>
      ) : (
        
        <div className="Blogs-section">
          <div className="Blogs-container">
            {searchQuery === "" && (
              <h1 className="Blogs-recent-blog-heading">Recent Blog Posts</h1>
            )}

{searchQuery === "" && ( <div className="Blogs-content-box">
              {searchQuery === "" && (
                <div className="Blogs-left-side" onClick={handlenavigate}>
                  {filteredBlogsDatarecent[0] && (
                    <>
                      <div className="Blogs-image-box">
                        <img
                          src={filteredBlogsDatarecent[0].imgSrc}
                          alt={`Blog post ${filteredBlogsDatarecent[0].id}`}
                          className="Blogs-recent-image"
                        />
                      </div>
                      <div className="Blogs-content-below-image">
                        <h1 className="Blogs-date-left">
                          {filteredBlogsDatarecent[0].date}
                        </h1>
                        <h1 className="Blogs-top-10">
                          {filteredBlogsDatarecent[0].title}
                        </h1>
                        <p className="Blogs-left-content">
                          {filteredBlogsDatarecent[0].description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}

{searchQuery === "" && (  <div className="Blogs-right-side">
                {filteredBlogsDatarecent.slice(1).map((blog) => (
                  <div
                    className="Blogs-right-content-block"
                    key={blog.id}
                    onClick={handlenavigate}
                  >
                    <div className="Blogs-image-box-top">
                      <img
                        src={blog.imgSrc}
                        alt={`Right blog post ${blog.id}`}
                        className="Blogs-image"
                      />
                    </div>
                    <div className="Blogs-content-right-side">
                      <h2 className="Blogs-date-right">{blog.date}</h2>
                      <h1 className="Blogs-top-10-right">{blog.title}</h1>
                      <p className="Blogs-right-content">{blog.description}</p>
                    </div>
                  </div>
                ))}
              </div>)}
            </div>)}
          </div>
        </div>
      )}

      {!isBlogDetailVisible && (
        <>
          <div className="Blogs-new-section">
          {searchQuery === "" && ( <div className="Blogs-new-container">
              <div className="Blogs-new-heading">
                {searchQuery === "" && (
                  <h2 className="Blogs-new-section-heading">
                    Trending Blogs Posts
                  </h2>
                )}
              </div>

              <div className="TRENDING_BLOG_POST_CONTAINER">
                {filteredBlogsData.map((blog) => (
                  <div
                    className="Blogs-image-content-block"
                    key={blog.id}
                    onClick={() => handleReadMore(blog.id)}
                  >
                    <div className="Blogs-new-left">
                      <div className="Blogs-new-image-box">
                        <img
                          src={blog.imgSrc}
                          alt={blog.title}
                          className="Trending-blog-image"
                        />
                      </div>
                    </div>

                    <div className="Blogs-new-right">
                      <p className="TRENDING_BLOG_DATE">{blog.date}</p>
                      <h3 className="Blogs-new-right-heading">{blog.title}</h3>
                      <p className="Blogs-new-right-content">{blog.content}</p>
                      <div className="Blogs-Trending-list">
                        {blog.categories.map((category, index) => (
                          <li
                            key={index}
                            className="Blogs-trending-item"
                            style={{
                              color:
                                categoryColors[index % categoryColors.length],
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
            </div>)}
          </div>

          <div className="Blogs-popular-section">
            <div className="Blogs-popular-container">
              {searchQuery === "" && (
                <h2 className="Blogs-popular-heading">Popular Blogs</h2>
              )}
              <div className="Blogs-grid-container">
              {searchQuery === "" && (  <div className="Blogs-grid-row">
                  {filteredPopularBlogsData.slice(0, 3).map((blog, index) => (
                    <div
                      className="Blogs-card"
                      key={blog.id}
                      onClick={() => handleReadMore(index)}
                    >
                      <div className="Blogs-card-image">
                        <img
                          src={blog.imgSrc}
                          alt={`Popular Blog ${blog.id}`}
                        />
                      </div>
                      <div className="Blogs-card-content">
                        <h2 className="Blogs-trending-date">{blog.date}</h2>
                        <h3>{blog.title}</h3>
                        <h3 className="BLOGS_DECS">{blog.description}</h3>
                        <div className="Blogs-Trending-list-news">
                          {blog.categories.map((category, index) => (
                            <li
                              key={index}
                              className="Blogs-trending-item"
                              style={{
                                color:
                                  categoryColors[index % categoryColors.length],
                              }}
                            >
                              {category}
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>)}
                {/* this is for combined array help in the searching make it easy for expressing in the card viewwwww */}
                {searchQuery && (
  <div className="Blogs-grid-row-Searching">
    {filteredCombinedBlogsData.map((blog, index) => (
      <div
        className="Blogs-card"
        key={blog.id}
        onClick={() => handleReadMore(index)}
      >
        <div className="Blogs-card-image">
          <img
            src={blog.imgSrc}
            alt={`Blog ${blog.id}`}
          />
        </div>
        <div className="Blogs-card-content">
          <h2 className="Blogs-trending-date">{blog.date}</h2>
          <h3>{blog.title}</h3>
          <h3 className="BLOGS_DECS">{blog.description || blog.content}</h3>
          <div className="Blogs-Trending-list-news">
            {blog.categories && blog.categories.map((category, index) => (
              <li
                key={index}
                className="Blogs-trending-item"
                style={{
                  color: categoryColors[index % categoryColors.length],
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
)}

{/* ------------------------------- */}

{searchQuery === "" && ( <div className="Blogs-grid-row">
                  {filteredPopularBlogsData.slice(3).map((blog, index) => (
                    <div
                      className="Blogs-card"
                      key={blog.id}
                      onClick={() => handleReadMore(index + 3)}
                    >
                      <div className="Blogs-card-image">
                        <img
                          src={blog.imgSrc}
                          alt={`Popular Blog ${blog.id}`}
                        />
                      </div>
                      <div className="Blogs-card-content">
                        <h2 className="Blogs-trending-date">{blog.date}</h2>
                        <h3>{blog.title}</h3>
                        <p className="BLOGS_DECS">{blog.description}</p>
                        <div className="Blogs-Trending-list-news">
                          {blog.categories.map((category, index) => (
                            <li
                              key={index}
                              className="Blogs-trending-item"
                              style={{
                                color:
                                  categoryColors[index % categoryColors.length],
                              }}
                            >
                              {category}
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>)}
              </div>

              <div className="Blogs-load-more-button">
                {searchQuery === "" && (
                  <button
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      navigate("/all-blogs");
                    }}
                  >
                    Load All Blogs
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {searchQuery === "" && (
        <h2 className="Blogs-trending-heading">Trending News</h2>
      )}

      {!isBlogDetailVisible && searchQuery === "" && (
        <div className="Blogs-trending-news-section">
          <div className="Blogs-trending-container">
            <div className="Blogs-trending-grid">
              {filteredTrendingNewsData.map((news) => (
                <div className="Blogs-trending-card" key={news.id}>
                  <div className="Blogs-card-image">
                    <img src={news.imgSrc} alt={`Trending News ${news.id}`} />
                  </div>
                  <div className="Blogs-card-content">
                    <p className="Blogs-trending-date">{news.date}</p>
                    <h3>{news.title}</h3>
                    <p className="NEWSROOM_CARDS_CONTENT">{news.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="Blogs-visit-newsroom-button">
              <button
                className="Blogs-newsroom-btn"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/latest-news");
                }}
              >
                Visit Newsroom
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    // </div>
  );
}
