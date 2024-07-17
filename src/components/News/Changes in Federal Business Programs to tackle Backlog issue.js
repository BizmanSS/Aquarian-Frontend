import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/processing time and backlog.jpg";
//import RecentBlogs from "../Pages/Blogs/RecentBlogs.js";
import Averaged from "../../Assets/News/average scores accepted.png";
import Right from "../../Assets/News/application fee hiked.png";
import Working from "../../Assets/News/working hours increased.png";
import FrenchImg from "../../Assets/News/french proficiency.png";
import Major from "../../Assets/News/Major provinces issue PNP invitations.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";

const ChangesInFederal = () => {
  const { vw } = useMobile();
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bubbleRef = useRef();

  const latestNews = [
    {
      title: "Right of Permanent Resident fee increased",
      image: Right,
      path: "/latest-news/right-of-permanent-resident-fee-increased",
    },
    {
      title:
        "Averaged Language Scores now Accepted under Express Entry for Disabled Candidates",
      image: Averaged,
      path: "/latest-news/averaged-language-scores-now-accepted-under-express-entry-for-disabled-candidates",
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
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };

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
    /*const keywords = [
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
      title: "Changes in Federal Business Programs to tackle Backlog issue",
      description: (
        <p>
          Changes have been announced to the Start-up visa and Self-Employed
          Persons programs to manage backlogs and improve processing time.
          <br />
          <br />
          Canada has been a hotspot for immigration for ages. One third of
          business owners with a paid staff in Canada comprises immigrants. Due
          to its vast popularity, the waiting time for these applications is
          also high. In order to reduce the processing time along with major
          backlogs, Marc Miller, the immigration minister, is taking steps
          towards to reindustrialise their services.
          <br />
          <br />
          To make the Start-up Visa program more efficient, the assigned venture
          capital firms, angel investors and business incubators will now
          prioritise processing for entrepreneurs whose start-up is supported by
          Canadian capital or business incubator(s) that is a member of Canada’s
          Tech Network. They will also be setting a limit on the number of APRs
          (application for permanent residence) received in a year at 10
          start-ups to each designated organisation.
          <br />
          <br />
          <span>WHAT IS CANADA’S TECH NETWORK?</span>
          <br />
          <br />
          The CTN provides entrepreneurs and small and mid-sized technology
          companies with the various tools they need for setting up their
          venture and consequently expand. These resources include commercial
          space, mentorship, training, peer learning, exposure to
          funding/venture capitals and so on. This further facilitates them to
          enter the international markets.
          <br />
          <br />
          Furthermore, Minister Miller also announced that Self-Employed
          programs will be put on a hiatus altogether. Due to the high number of
          applications received for this program, processing time has reached
          beyond 4 years . During this pause, the IRCC will be finalising the
          existing applications to clear the backlog along with formulating
          better reforms to uphold the integrity of the program.
          <br />
          <br />
          <span>WHAT IS SELF EMPLOYED PERSONS PROGRAM?</span>
          <br />
          <br />
          The self employed persons program is another pathway to permanent
          residence in Canada. Foreign nationals with relevant experience in
          cultural activities or athletics at a world class level, or being self
          employed in these fields are eligible to apply under the self employed
          persons program. The basic requirement in each of these fields must
          be:
          <br />
          <br />
          for cultural activities:
          <br />
          <br />
          <ul>
            a). 2 one-year periods being self-employed in cultural activities,
            or
            <br />
            b). 2 one-year periods participating at a world-class level in
            cultural activities, or
            <br />
            c). a combination of a one-year period described in (a), and a
            one-year period described in (b)
          </ul>
          <br />
          for athletics:
          <br />
          <br />
          <ul>
            a). 2 one-year periods being self-employed in athletics, or
            <br />
            b). 2 one-year periods participating at a world class level in
            athletics, or
            <br />
            c). a combination of a one-year period described in (a) above, and a
            one-year period described in (b) above
          </ul>
          <br />
          “Fast processing is critical to the success of entrepreneurs who come
          to Canada through our federal business programs. These necessary
          changes will set the Start­up Visa Program and Self-Employed Persons
          Program on the path to faster processing times while we look ahead to
          further reforms to make these programs more sustainable and effective
          over the long term.”, Marc Miller commented.
          <br />
          <br />
          This policy will come into effect from 30th April, 2024 which will
          allow them to focus on priority applications along with the already
          existing ones. The restrictions on top of the planned increase in
          admission in the federal business category as highlighted in the
          2024-2026 multi-year levels plan, backlog as well as wait time will be
          significantly cut down.
          <br />
          <br />
          <span>
            To manage your application in these programs, avail the services of
            qualified immigration experts.
          </span>
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
        <br /> <br />
        <img alt="" src={image} />
        <p2>{description}</p2>
      </div>
    );
  };

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
      title: "French Proficiency Leads Category-Based Selections",
      description:
        "French language proficiency will now be at the forefront of category-based selections in express entry draws in 2024.",
      image: FrenchImg,
      date: "26 APR. 2024",
      path: "/latest-news/french-proficiency-leads-category-based-selection",
    },
  ];

  return (
    <>
      <div style={{ background: "#FFF" }}>
        <div className="AboutUsHeader">
          <p className="link">
            <a href="/">Home</a>
            {" > "}
            <a href="/latest-news">Newsroom</a>
            {" > "} Changes in Federal Business Programs to tackle Backlog issue
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
                      <a href={news.path}>Read more... </a>
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

export default ChangesInFederal;
