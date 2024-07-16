import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/working hours increased.png";
import Averaged from "../../Assets/News/average scores accepted.png";
import Right from "../../Assets/News/application fee hiked.png";
import Changes from "../../Assets/News/processing time and backlog.jpg";
import FrenchImg from "../../Assets/News/french proficiency.png";
import Major from "../../Assets/News/Major provinces issue PNP invitations.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
//import RecentBlogs from "../Pages/Blogs/RecentBlogs.js";

const WorkingHoursIncreased = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bubbleRef = useRef();
  const { vw } = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the Home > Blogs > Inner Blogs link is visible
      const innerBlogsLink = document.querySelector(".title-heading");
      if (innerBlogsLink) {
        const bounding = innerBlogsLink.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= window.innerHeight) {
          setShowBackToTop(false);
        } else {
          setShowBackToTop(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const makeDivRelative = useIsInViewport(bubbleRef);

  {
    /*
   const keywords = [
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
    {
      title: "New Year Edition",
    },
  ];
  const Keywords = ({ title }) => {
    return (
      <div className="post-card-keywords">
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    );
  };

  */
  }
  const innerPosts = [
    {
      title: "Working hours Increased for Students in Canada",
      description: (
        <p>
          As of April 29th 2024, working hours for students will be increased;
          for both during academic session and academic breaks.
          <br />
          <br />
          Immigration minister, Marc Miller, announced that the permitted
          working hours for all students will be increased. They will now be
          allowed to work for 24 hours per week during their ongoing academic
          session. Furthermore, during students’ designated academic break, they
          are free to work for unlimited hours.
          <br />
          <br />
          The previous temporary policy that enabled students to work 20 hours
          per week off campus will be terminated from April 30th, 2024 without
          any extension.
          <br />
          <br />
          It was made clear that the first priority of all students will be
          their academics and not their part time jobs. Keeping in mind the
          living expenses that students incur, working hours were increased to
          enable them to support themselves. The policy was formulated to
          protect the students from any potential financial vulnerabilities.
          Moreover, the importance of work experience and adjusting to life in
          Canada was also acknowledged.
          <br />
          <br />
          <a href="https://www.youtube.com/watch?v=9EmVSGPUEuU">
            <span>https://www.youtube.com/watch?v=9EmVSGPUEuU</span>
          </a>
          <br />
          <br />
          Marc Miller stated, “Working off campus helps international students
          gain work experience and offset some of their expenses. As
          international students arrive in Canada, we want them to be prepared
          for life here and have the support they need to succeed. However,
          first and foremost, people coming to Canada as students must be here
          to study, not work. We will continue working to protect the integrity
          of our student program.”
          <br />
          <br />
          This reform is set to take effect from the fall as more details will
          be shared by Immigration, Refugees and Citizenship Canada in the days
          to come.
          <br />
          <br />
          In order to ensure the integrity of their study programs and that
          students do not compromise on their academics, the Government of
          Canada raised the cost-of-living threshold that must be met so as to
          obtain a study permit. This reflects their ability to financially
          adjust in Canada while also striking an appropriate balance between
          academics and work.
          <br />
          <br />
          <span>WHAT IS COST-OF-LIVING THRESHOLD?</span>
          <br />
          <br />
          It reflects the international student’s financial preparedness to
          study in Canada as it reflects the proof of being able to meet the
          minimum cost of living in Canada along with covering academics fee and
          travel.
          <br />
          <br />
          Students must be properly equipped with the right knowledge and
          resources to adjust to these policy changes. Hence, it is of utmost
          that they avail the services of <span> trained experts.</span>
        </p>
      ),

      image: innerBlog,
      date: "29 APR. 2024",
    },
  ];
  const InnerBlog = ({ title, description, image, date }) => {
    return (
      <div className="post-card-inner">
        <h1>{title}</h1>
        <p3>{date}</p3>
        <br />
        <br />
        <img alt="" src={image} />
        <p2>{description}</p2>
      </div>
    );
  };

  const newsData = [
    {
      id: 1,
      title: "French Proficiency Leads Category-Based Selections",
      description:
        "French language proficiency will now be at the forefront of category-based selections in express entry draws in 2024.",
      image: FrenchImg,
      date: "26 APR. 2024",
      path: "/latest-news/french-proficiency-leads-category-based-selection",
    },
    {
      id: 2,
      title:
        "Averaged Language Scores now Accepted under Express Entry for Disabled Candidates",
      description:
        "Averaged language scores generated by the respective language ",
      image: Averaged,
      date: "29 APR. 2024",
      path: "/latest-news/averaged-language-scores-now-accepted-under-express-entry-for-disabled-candidates",
    },
    {
      id: 3,
      title: "Major Provinces Issue PNP Invitations",
      description:
        "  Much to the delight of candidates who had applied for PNP in British Columbia, Manitoba and Quebec,",
      image: Major,
      date: "7 JUN. 2024",
      path: "/latest-news/major-provinces-issue-pnp-invitations",
    },
    {
      id: 4,
      title: "Changes in Federal Business Programs to tackle Backlog issue",
      description:
        "Changes have been announced to the Start-up visa and Self-Employed Persons programs to manage backlogs ",
      image: Changes,
      date: "29 APR. 2024",
      path: "/latest-news/changes-in-federal-business-programs-to-tackle-backlog-issue",
    },
  ];

  const latestNews = [
    {
      title: "French Proficiency Leads Category-Based Selections",
      image: FrenchImg,
      path: "/latest-news/french-proficiency-leads-category-based-selection",
    },
    {
      title: "AVERAGED LANGUAGE SCORES NOW ACCEPTED UN",
      image: Averaged,
      path: "/latest-news/averaged-language-scores-now-accepted-under-express-entry-for-disabled-candidates",
    },
    {
      title: "Right of Permanent Resident fee increased",
      image: Right,
      path: "/latest-news/right-of-permanent-resident-fee-increased",
    },
  ];
  const LatestNews = ({ title, image, path }) => {
    return (
      <div className="post-card-recent">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <div className="title-recent">
          <a href={path}>
            <h1>{title}</h1>
          </a>
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ background: "#FFF" }}>
        <div className="AboutUsHeader">
          <p className="link">
            <a href="/">Home</a>
            {" > "}
            <a href="/blogs">Blogs</a>
            {" > "}Working hours Increased for Students in Canada
          </p>
          <div className="header-content">
            <h1 className="heading-about">Welcome to Our Blogs</h1>
          </div>
        </div>
        <div className="mt-[2.5rem]">
          <div className="left-blog">
            {vw > 1250 && (
              <div>
                <h1 className="title-heading">Recent Blogs</h1>
                <div class="blog-card-container">
                  <div className="blog-card-recent">
                    {latestNews.map((post, index) => (
                      <LatestNews key={index} {...post} />
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="blog-cards-container">
              <div className="blog-cards">
                {innerPosts.map((post, index) => (
                  <InnerBlog key={index} {...post} />
                ))}
              </div>
            </div>
          </div>
          <div className="similar-blog">
            <div className="similar-div-heading">
              <h1 className="title-heading">Similar News</h1>
              <a href="/latest-news">All Articles</a>
            </div>
            <br />
          </div>
          <div class="news-card-container">
            <div className="news-card-upper">
              {newsData.map((news) => (
                <a key={news.id} href={news.path}>
                  <div className="news-upper-card">
                    <img
                      style={{ cursor: "pointer" }}
                      alt=""
                      src={news.image}
                    />
                    <div className="content-card">
                      <div>
                        <p3>{news.date}</p3>

                        <a href={news.path}>
                          <h1>{news.title}</h1>
                        </a>

                        <p2>{news.description} </p2>
                      </div>
                      <a href={news.path}>
                        Read more...{" "}
                        <FaArrowRightLong style={{ alignSelf: "center" }} />
                      </a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        {showBackToTop && (
          <div
            className={makeDivRelative ? "relativeDiv" : "backToTop"}
            onClick={scrollToTop}
          >
            BACK TO TOP
          </div>
        )}
      </div>
      <div ref={bubbleRef}></div>
    </>
  );
};

export default WorkingHoursIncreased;
