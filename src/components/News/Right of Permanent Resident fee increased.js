import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/application fee hiked.png";
//import RecentBlogs from "../Pages/Blogs/RecentBlogs.js";
import Averaged from "../../Assets/News/average scores accepted.png";
import FrenchImg from "../../Assets/News/french proficiency.png";
import Working from "../../Assets/News/working hours increased.png";
import Changes from "../../Assets/News/processing time and backlog.jpg";
import Major from "../../Assets/News/Major provinces issue PNP invitations.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>APPLICATION</th>
          <th>PREVIOUS FEE STRUCTURE (in CAD)</th>
          <th>REVISED FEE STRUCTURE (in CAD)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Right of Permanent Residence Fee (RPRF)
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicant + spouse/common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>515</td>
          <td style={{ border: "0px" }}>575</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Federal Skilled Worker Program, Provincial Nominee Program, Quebec
            Skilled Workers, Atlantic Immigration Class, and Economic Pilots
            (including Rural and Agri-Food)
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicant + spouse/common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>850</td>
          <td style={{ border: "0px" }}>950</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Each accompanying dependent child</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>230</td>
          <td style={{ border: "0px" }}>260</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Live-in Caregiver Program and Caregiver Pilots (Home Child Provider
            Pilot and Home Support Worker Pilot)
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicant + spouse/common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>570</td>
          <td style={{ border: "0px" }}>635</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Each accompanying dependent child</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>155</td>
          <td style={{ border: "0px" }}>175</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Business Immigration (Federal and Quebec)
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicant</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>1810</td>
          <td style={{ border: "0px" }}>1625</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Spouse/common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>850</td>
          <td style={{ border: "0px" }}>950</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Each accompanying dependent child</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>230</td>
          <td style={{ border: "0px" }}>260</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Family Reunification (including spouses, partners, children,
            parents, grandparents, and other relatives)
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Sponsorship</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>75</td>
          <td style={{ border: "0px" }}>85</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Sponsored principal applicant</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>490</td>
          <td style={{ border: "0px" }}>545</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>
                Sponsored children (under 22 and not a spouse/common law
                partner)
              </li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>75</td>
          <td style={{ border: "0px" }}>85</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Spouse/Common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>635</td>
          <td style={{ border: "0px" }}>175</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Protected Persons and Humanitarian and Compassionate
            Consideration/Public Policy
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicant + spouse/common law partner</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>570</td>
          <td style={{ border: "0px" }}>635</td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Each accompanying dependent child</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>155</td>
          <td style={{ border: "0px" }}>175</td>
        </tr>
        <tr style={{ borderTop: "1px solid #ddd" }}>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            Permit Holders Class
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}></td>
          <td style={{ border: "0px" }}></td>
        </tr>
        <tr>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>
            <ul>
              <li>Principal applicants</li>
            </ul>
          </td>
          <td style={{ border: "0px", borderRight: "1px solid #ddd" }}>335</td>
          <td style={{ border: "0px" }}>375</td>
        </tr>
      </tbody>
    </table>
  );
}
const RightOfPermanent = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const bubbleRef = useRef();

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
      title: "Right of Permanent Resident fee increased",
      description: (
        <p>
          Canada's right of permanent residence fee (RPRF) has been
          significantly increased, with a substantial hike of 12%.
          <br />
          <br />
          Immigrants wishing to permanently settle in Canada must prepare
          themselves for a significant mark up in the RPRF which will come into
          effect from April 30th, 9:00AM (ET). The revised fee has been
          calculated as per the Consumer Price Index for Canada. This fee
          structure will be followed from April 2024 to March 2026.
          <br />
          <br />
          Here's a breakdown of previous and revised fee for all permanent
          residence applications;
          <br />
          <br />
          <Table />
          <br />
          <span>
            *Permit Holder class applicants must apply for permanent residence
            as principal applicants excluding accompanying family members.
          </span>
          <br />
          <br />
          Principal applicants applying on humanitarian grounds or public policy
          must meet certain conditions and are therefore exempted from RPRF.
          Furthermore, under the family reunification class, sponsored children
          (under 22 and not spouses or common law partners) are also exempted
          from RPRF.
          <br />
          <br />
          This policy change has a significant impact on a candidate's
          application, thus it is recommended to avail the services of a{" "}
          <span>professional immigration agency</span>
        </p>
      ),

      image: innerBlog,
      date: "30 APR. 2024",
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
      title: "WORKING HOURS INCREASED FOR STUDENTS IN",
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
        <div className="flex flex-col justify-center w-full md:w-[95%] mb-10">
          <div className="mt-[5rem] lg:mt-[6rem]">
            <div className="w-[95%] mx-auto bg-banner text-white bg-cover bg-center bg-no-repeat h-[12rem] -mt-12 rounded-3xl">
              <div className="flex flex-col justify-between pl-4 md:pl-8 md:px-12 lg:px-16 h-full">
                <p className="text-gray-400 lg:pb-10 pt-12 cursor-pointer relative top-5 lg:top-10">
                  <a
                    href="/"
                    className="text-gray-400 hover:underline text-[13px]"
                  >
                    Home
                  </a>{" "}
                  &gt;{" "}
                  <a
                    className="text-gray-400 hover:underline text-[13px]"
                    href="/latest-news"
                  >
                    Newsroom
                  </a>{" "}
                  &gt;{" "}
                  <p1 className="text-gray-400 text-[13px]">
                    Right of Permanent Resident fee increased
                  </p1>
                </p>
                <div className="flex w-full h-full items-end">
                  <div className="text-[30px] md:text-[40px] lg:text-[45px] font-normal font-serif leading-normal text-center mx-auto my-0 pb-3">
                    Welcome to the Newsroom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-blog">
          <div>
            <h1 className="title-heading">Latest News</h1>
            <div className="blog-card-recent">
              {latestNews.map((post, index) => (
                <LatestNews key={index} {...post} />
              ))}
            </div>
            {/*
            <RecentBlogs />
            <h1 className="title-heading">Keywords</h1>
            <div className="blog-card-recent">
              {keywords.map((post, index) => (
                <Keywords key={index} {...post} />
              ))}
            </div>
             */}
          </div>
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
                  <img style={{ cursor: "pointer" }} alt="" src={news.image} />
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
      <div ref={bubbleRef}></div>
    </>
  );
};

export default RightOfPermanent;
