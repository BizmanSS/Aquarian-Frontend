import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/Major provinces issue PNP invitations.jpg";
import FrenchImg from "../../Assets/News/french proficiency.png";
import Right from "../../Assets/News/application fee hiked.png";
import Working from "../../Assets/News/working hours increased.png";
import Changes from "../../Assets/News/processing time and backlog.jpg";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const MajorProvinces = () => {
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

  const newsData = [
    {
      id: 1,
      title: "Right of Permanent Resident fee increased",
      description:
        "Canada's right of permanent residence fee (RPRF) has been significantly increased, with a substantial hike of 12%.",
      image: Right,
      date: "30 APR. 2024",
      path: "/latest-news/right-of-permanent-resident-fee-increased",
    },
    {
      id: 2,
      title: "French Proficiency Leads Category-Based Selections",
      description:
        "French language proficiency will now be at the forefront of category-based selections in express entry draws in 2024.",
      image: FrenchImg,
      date: "26 APR. 2024",
      path: "/latest-news/french-proficiency-leads-category-based-selection",
    },

    {
      id: 3,
      title: "Working hours Increased for Students in Canada",
      description:
        "As of April 29th 2024, working hours for students will be increased; for both during academic session and academic breaks.",
      image: Working,
      date: "29 APR. 2024",
      path: "/latest-news/working-hours-increased-for-students-in-canada",
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

  //  const keywords = [
  //   {
  //     title: "New Year Edition",
  //   },
  //   {
  //     title: "New Year Edition",
  //   },
  //   {
  //     title: "New Year Edition",
  //   },
  //   {
  //     title: "New Year Edition",
  //   },
  //   {
  //     title: "New Year Edition",
  //   },
  //   {
  //     title: "New Year Edition",
  //   },
  // ];
  // const Keywords = ({ title }) => {
  //   return (
  //     <div className="post-card-keywords">
  //       <div>
  //         <h1>{title}</h1>
  //       </div>
  //     </div>
  //   );
  // };

  const innerPosts = [
    {
      title: "Major Provinces Issue PNP Invitations",
      description: (
        <p>
          Much to the delight of candidates who had applied for PNP in
          <span> British Columbia, Manitoba</span> and <span>Quebec,</span>{" "}
          these major provinces have issued Invitations to Apply to various
          Permanent Residency (PR) applicants. In the past few months this year,
          these provinces issued Invitations to Apply (ITAs) under the PNP
          draws.
          <br />
          <br />
          <span>What is the Provincial Nominee Program?</span>
          <br />
          <br />
          PNP is one of the most popular pathways to PR in Canada wherein
          Canadian provinces have the liberty to create their own unique
          criteria for applicants who are applying for PR in Canada. Every
          province has their own set of qualifications that candidates must
          fulfil to receive ITAs.
          <br />
          <br />
          <ul>
            <li>
              <span>British Columbia</span>
              <br />
              <br />
              British Columbia is an excellent place to work owing to its
              diverse economy, distinct work-life balance, countless economic
              opportunities, progressive policies on environmental
              sustainability, healthcare and education and high quality of life.
              <br />
              <br />
              The <span>British Columbia Provincial Nominee Program </span>
              offers 2 immigration streams for skilled professionals in various
              sectors to meet the province's labour shortages namely;{" "}
              <span>British Columbia Skills Immigration</span> and
              <span> British Columbia Entrepreneur Immigration.</span>
              <br />
              <br />
              Since May 2024, the province has issued over 300 invitations in
              employment sectors like childcare, tech, healthcare, construction
              and veterinary care.
            </li>
            <br />

            <li>
              <span>Manitoba</span>
              <br />
              <br />
              Its job opportunities, affordable cost of living and the vibrant
              multicultural environment makes Manitoba an ideal province to
              immigrate to in search for better work advancements.
              <br />
              <br />
              Under Manitoba Skilled Workers Overseas, there are 3 immigration
              streams:
              <br />
              <br />
              <ul>
                <span>
                  1. Manitoba Skilled Workers Stream: In Manitoba or Overseas
                  <br />
                  2. Manitoba International Education Stream
                  <br />
                  3. Manitoba Human Capital Business Investor
                </span>
              </ul>
              <br />
              To be eligible to apply for all the aforementioned streams,
              candidates have to obtain a minimum score of 60 points on the MPNP
              Points Assessment Grid.
              <br />
              <br />
              Since the beginning of January 2024, Manitoba has issued a total
              of 2,124 invitations with the score of the lowest ranked candidate
              being 607.
            </li>
            <br />
            <li>
              <span>Quebec</span>
              <br />
              <br />
              Quebec boasts its world renowned education and fosters innovation
              along with its cultural richness, strong economy and increased
              governmental support making it one of the most sought after places
              to immigrate to for work and business opportunities.
              <br />
              <br />
              The <span>Quebec Experience Program</span> has a number of
              immigration streams with primary criteria for application
              including:
              <br />
              <br />
              <ul>
                <span>
                  1. Minimum Level 7 oral proficiency in French
                  <br />
                  2. Minimum score of 593 points
                </span>
              </ul>
              <br />
              Within the month of May 2024, more than 2,700 invitations were
              issued with some of the invitation to people under the following
              criteria:
              <br />
              <br />
              <ul>
                - Minimum oral proficiency of level 7 in French according to
                Quebec scale of French Proficiency levels for adults immigrants
                <br />
                <br />- Holding a valid job offer outside the territory of
                Communauté métropolitaine de Montréal.
              </ul>
            </li>
          </ul>
          <br />
          Canada is known for its diverse pathways to obtaining PR in the maple
          country. If you want to find which province’s PNP program will suit
          you best on the basis of your professional skills set,{" "}
          <span>
            <a href="/contact-us">contact Aquarian Immigration.</a>
          </span>
        </p>
      ),

      image: innerBlog,
      date: "7 JUN. 2024",
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

  const latestNews = [
    {
      title: "Right of Permanent Resident fee increased",
      image: Right,
      path: "/latest-news/right-of-permanent-resident-fee-increased",
    },
    {
      title: "Changes in Federal Business Programs to tackle Backlog issue",
      image: Changes,
      path: "/latest-news/changes-in-federal-business-programs-to-tackle-backlog-issue",
    },
    {
      title: "Working hours Increased for Students in Canada",
      image: Working,
      path: "/latest-news/working-hours-increased-for-students-in-canada",
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
            <h1 className="line-clamp-2">{title}</h1>
          </a>
          <p2
            style={{
              color: "#009889",
              display: "flex",
              gap: "4px",
              fontSize: "small",
            }}
          >
            Know more{" "}
            <IoIosArrowDroprightCircle style={{ alignSelf: "center" }} />
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
            <a href="/latest-news">Newsroom</a>
            {" > "}Major Provinces Issue PNP Invitations
          </p>
          <div className="header-content">
            <h1 className="heading-about">Welcome to Our Newsroom</h1>
          </div>
        </div>
        <div className="mt-[2.5rem]">
          <div className="left-blog">
            {vw > 1250 && (
              <div>
                <h1 className="title-heading">Recent News</h1>
                <div className="blog-card-container">
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
          <div className="news-card-container">
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
                      <a
                        style={{
                          display: "flex",
                          gap: "0.3rem",
                        }}
                        href={news.path}
                      >
                        Read more{" "}
                        <IoIosArrowDroprightCircle
                          style={{ alignSelf: "center" }}
                        />
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
        )}{" "}
      </div>
      <div ref={bubbleRef}></div>
    </>
  );
};

export default MajorProvinces;
