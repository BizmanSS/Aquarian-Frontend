import React from "react";
import Newsleft from "../../../Assets/NEWSIMAGEleft.jpeg";
import Newsright from "../../../Assets/NEWSIMAGEright .jpeg";
import NewsGrid from "../../../Assets/NEWSSECTIONGRIDIMAGE.jpeg";
import "./Newsroom.css"; // Import the CSS styles
import Canada_A from "../../../Assets/Can_news_b.jpg";
import Canada_B from "../../../Assets/Can_news_c.jpg";
import Canada_C from "../../../Assets/Can_news_d.jpg";
import Canada_D from "../../../Assets/Can_news_e.jpg";
import Canada_E from "../../../Assets/Can_news_f.jpg";
import Canada_F from "../../../Assets/Can_news_g.jpg";
import BLOGS_B from '../../../Assets/BLOGS_B.jpg';
import BLOGS_C from '../../../Assets/BLOGS_C.jpg';
import BLOGS_D from '../../../Assets/BLOGS_D.jpg';
import { useNavigate } from "react-router-dom";
const blogsData = [
  { 
      date: '27 May 2024', 
      title: 'Top 10 universities in Canada', 
      description: 'For decades, Canada has been a hotspot for international students seeking quality education and diverse cultural experiences. In this blog, we explore the top 10 universities in Canada that offer excellent programs, vibrant campus life, and strong international student support.', 
      imgSrc: BLOGS_B, 
      categories: ['Study', 'Canada', 'Aquarian'] 
  },
  { 
      date: '22 May 2024', 
      title: 'What is Category Based Selection?', 
      description: 'Category Based Selection is a key aspect of Canada’s immigration process. It allows candidates to apply under specific categories based on their skills and qualifications, increasing their chances of receiving an Invitation to Apply (ITA). Learn more about how this system works.', 
      imgSrc: BLOGS_C, 
      categories: ['Study', 'Canada', 'Aquarian'] 
  },
  { 
      date: '29 May 2024', 
      title: 'Tips and Tricks on Preparing for IELTS', 
      description: 'Preparing for the IELTS exam can be daunting, but with the right strategies and resources, you can achieve your desired score. This blog provides essential tips and tricks to help you prepare effectively and confidently for the IELTS test.', 
      imgSrc: BLOGS_D, 
      categories: ['Study', 'Canada', 'Aquarian'] 
  },
];
const newsArticles = [
  { 
      id: 1, 
      date: "7 June, 2024", 
      title: "IRCC reducing Spousal Open Work Permits by more than 100,000 over the next three years", 
      imgSrc: Canada_A, 
      description: "In a significant policy shift, the IRCC has announced plans to reduce the issuance of Spousal Open Work Permits by over 100,000 in the coming three years..." 
  },
  { 
      id: 2, 
      date: "8 June, 2024", 
      title: "Canada launches pilot project to streamline review process for rejected study permits", 
      imgSrc: Canada_B, 
      description: "Recognizing the challenges faced by international students, Canada has launched a pilot project aimed at streamlining the review process..." 
  },
  { 
      id: 3, 
      date: "9 June, 2024", 
      title: "Alberta launches new Expression of Interest system for AAIP Worker Streams", 
      imgSrc: Canada_C, 
      description: "Alberta has unveiled a new Expression of Interest (EOI) system as part of its Alberta Advantage Immigration Program..." 
  },
  { 
    id: 4, 
    date: "10 June, 2024", 
    title: "How many ITAs has Canada issued through Express Entry this year vs. last year?", 
    imgSrc: Canada_D, 
    description: "As Canada continues to evolve its immigration policies, understanding the trends in the number of Invitations to Apply (ITAs) issued through the Express Entry system is crucial. This article compares the current year's statistics with those from the previous year, highlighting changes in eligibility criteria, applicant pools, and the impact of these trends on potential immigrants. It aims to provide a comprehensive overview for those considering applying through Express Entry." 
},
{ 
    id: 5, 
    date: "11 June, 2024", 
    title: "Helpful advice for newcomers landing in Canada: A post-arrival checklist for newcomers to Canada", 
    imgSrc: Canada_E, 
    description: "For newcomers to Canada, the transition can be overwhelming. This article offers a detailed post-arrival checklist that covers essential tasks to help ease the transition. From setting up a bank account to understanding healthcare options and local customs, this guide provides newcomers with actionable steps to ensure a smooth start in their new home. Personal anecdotes and tips from experienced immigrants enrich the content." 
},
{ 
    id: 6, 
    date: "12 June, 2024", 
    title: "Understanding Personal Lending in Canada: – Introduction to  Banking System", 
    imgSrc: Canada_F, 
    description: "Navigating the Canadian banking system can be daunting for newcomers. This comprehensive guide demystifies personal lending options available in Canada, explaining key concepts such as credit scores, loans, and interest rates. It also outlines the steps newcomers can take to build their credit history and access financial services that are crucial for settling in. By providing clear examples and practical advice, this article aims to empower newcomers to make informed financial decisions." 
},
  // Add the rest of your articles here
];
export default function Newsroom() {
  const navigate = useNavigate(); 

  const handlenavigateallnews=()=>{
    navigate('/all-news-blogs')
    
  }
  const handlenewsreadmore = (id) => {
    console.log("Read more clicked for article with id:", id);
    // Implement your read more functionality here
};
 
  const handlenavigateblogspage=()=>{
    navigate('/blogs')
  }
  return (
    <div className="newsroom-container">
      <div className="news-navigation">
        <button className="news-nav-button">Home</button>
        <button className="news-nav-button">&gt;</button>
        <button className="news-nav-button" onClick={handlenavigateblogspage}>Blog</button>
      </div>
      <h2 className="newsroom-heading">Aquarian Newsroom</h2>

      <div className="recent-news-section">
        <h2 className="recent-news-heading">Recent News</h2>

        <div className="recent-news">
          <div className="news-left-image">
            <img src={Newsright} alt="Recent News" className="left-news-image" />
            <div className="newsroom_info">
              <p className="news-card-info-heading">Top 10 universities in Canada|</p>
              <p className="news-card-info-heading">Latest News |</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                odio deleniti perspiciatis odit natus error voluptatem, ad
                laudantium commodi magnam velit quis harum modi itaque eaque.
                Eius quam harum dolore tempora nihil omnis commodi, quod ea,
                praesentium possimus eligendi excepturi?
              </p>
              <a href="#" className="news-read-more" onClick={handlenewsreadmore}>Read More&gt;&gt;</a>
            </div>
          </div>

          <div className="news-right-images">
            <div className="news-image-container">
              <img src={Newsleft} alt="Image 2" className="news-small-image" />
              <div className="news-image-overlay">
                
                <h3 className="news-image-heading">Trending tourist places in Canada</h3>
                <a href="#" className="news-read-more-right">Read More&gt;&gt;</a>
              </div>
            </div>
            <div className="news-image-container">
              <img src={Newsleft} alt="Image 3" className="news-small-image" />
              <div className="news-image-overlay">
              <span className="trending-card-views"> 10340</span>

                <h3 className="news-image-heading">Trending Cities in Canada</h3>
                <a href="#" className="news-read-more-right">Read More&gt;&gt;</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news-section-2">
        <div className="news-feature-bar">
          <div className="news-search-bar">
            <h3 className="Allnews-heading-section">All News</h3>
            <div className="search-container">
              <input type="text" placeholder="Search..." className="news-search-area" />
              <button className="news-search-button">Search</button>
            </div>
          </div>

          <div className="newsroongrid-container">
            {newsArticles.map((article) => (
                <div className="news-grid-item" key={article.id}>
                    <img src={article.imgSrc} alt={`Card ${article.id}`} />
                    <p className="news-card-content">{article.title}</p>
                    <p className="card-content-news">
                        {article.description.length > 75 
                            ? article.description.slice(0, 75) + "..." 
                            : article.description}
                    </p>
                    <p className="grid-card-readmore" onClick={() => handlenewsreadmore(article.id)}>Read more</p>
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
        <button className="Allnews-button" onClick={handlenavigateallnews}>Load more news</button>
      </div>
      <div className="news-trendingBlogs">
            <h2 className="trending-heading">Trending Blogs</h2>
            <div className="trending-cards">
                {blogsData.map((blog, index) => (
                    <div className="trending-card" key={index}>
                        <img src={blog.imgSrc} alt={`Blog ${index + 1}`} className="trending-card-image" />
                        <div className="trending-card-content">
                            <div className="trending-card-header">
                                <span className="trending-card-date">{blog.date}</span>
                                <span className="trending-card-views"> 10340</span>
                            </div>
                            <h3 className="trending-card-title">{blog.title}</h3>
                            <p className="trending-card-description">{blog.description}</p>
                            <a href="#" className="trending-card-read-more">Read More&gt;&gt;</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    <div className="btn-blogs-news">
      <button className="Visitblogs-new-btn">Visit Blogs</button>
    </div>
    </div>
  );
}
