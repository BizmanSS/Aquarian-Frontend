import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/Blogs/Top In Demand JobsOpen.jpg";
//import LatestNews from "../Pages/Blogs/LatestNews.js";
import Top10side from "../../Assets/Blogs/TOP 10 UNIVERSITIESside.jpg";
import WhatIsCategoryside from "../../Assets/Blogs/Category Based Selectionside.jpg";
import TipsSide from "../../Assets/Blogs/TIPS AND TRICKSside.jpg";
import Everything from "../../Assets/Blogs/EVERYTHING YOU NEED.jpg";
import Tips from "../../Assets/Blogs/TIPS AND TRICKS.jpg";
import Top10 from "../../Assets/Blogs/TOP 10 UNIVERSITIES.jpg";
const TopInDemandJobs = () => {
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
      title: "Top In Demand Jobs in Canada as of 2024",
      description: (
        <p>
          Canada has been at the forefront of immigration for ages. People come
          from all over the world to turn their sweet maple syrup dreams into
          reality. Being a beacon of opportunities, Canada’s economy attracts
          professionals from varying backgrounds making it a hotspot for certain
          occupations.
          <br />
          <br />
          Let us delve into the top in demand jobs in Canada in 2024 so you can
          achieve your full potential in Canada as an immigrant.
          <br />
          <br />
          <span>1. Registered Nurse</span>
          <br />
          <br />
          In Canada's ageing population, demand for registered nurses (RNs) is
          high. RNs provide direct patient care, administer medications, and
          coordinate treatment plans across various healthcare settings.
          Opportunities for specialisation offer a stable and fulfilling career
          path in Canada's healthcare sector.
          <br />
          <br />
          Average salary: $99,778 per annum (in CAD)
          <br />
          <br />
          <span>2. Electrician</span>
          <br />
          <br />
          Canada's growing infrastructure, skilled electricians are highly
          sought-after for installing, maintaining, and repairing electrical
          systems. With its scope in residential, commercial, and industrial
          sectors, this career path promises stability and potential for
          specialisation in renewable energy and energy efficiency.
          <br />
          <br />
          Average salary: $97,246 per annum
          <br />
          <br />
          <span>3. Marketing manager</span>
          <br />
          <br />
          The diverse business environment of Canada calls for marketing
          managers to drive growth and brand success by strategizing, overseeing
          campaigns, and analysing market trends. An expertise in digital
          marketing and data-driven strategies will help you advance in this
          industry.
          <br />
          <br />
          Average salary: $94,838 per annum
          <br />
          <br />
          <span>4. Software developer</span>
          <br />
          <br />
          Software developers are essential architects for any thriving tech
          industry, crafting digital solutions and driving innovation. From
          sleek websites to cutting-edge apps, they play a vital role in shaping
          our digital world. These professionals have a high demand and get to
          work on exciting projects. Pursuing this line of work will allow you
          to explore the dynamic pathways in the Canadian tech industry.
          <br />
          <br />
          Average salary: $82,866 per annum
          <br />
          <br />
          <span>5. Data analyst</span>
          <br />
          <br />
          Data analysts are the wizards of information, conjuring insights to
          shape strategic business moves. They dive deep into data oceans,
          surfacing with pearls of wisdom that guide companies through turbulent
          markets. As a data analyst, you get to traverse through the concepts
          of machine learning with much more compelling opportunities in this
          digital realm
          <br />
          <br />
          Average salary: $67,958 per annum
          <br />
          <br />
          Canada has one of the most diverse job markets in the world. Among the
          total employed population, immigrants account for a considerable
          portion. If you wish to immigrate to Canada for job opportunities but
          are struggling with your work permit applications, contact Aquarian
          Immigration Services to avail the best consultancy for your
          immigration journey.
          <br />{" "}
          <span>
            Write to us at{" "}
            <a href="mailto:enq@iaquarian.com">enq@iaquarian.com</a>
            <br />
            Call us at <a href="tel:+919810890517">+91 9810890517</a> /{" "}
            <a href="tel:+911244671300">+91 124 4671300</a>
            <br />
          </span>
        </p>
      ),

      image: innerBlog,
      date: "28 MAY 2024",
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

  const recentBlogs = [
    {
      title: "Top 10 Universities in Canada",
      image: Top10side,
      path: "/blogs/top-10-universities-in-canada",
    },
    {
      title: "Tips and Tricks on Preparing for IELTS",
      image: TipsSide,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
    },
    {
      title: "What is Category Based Selection? Everything you need to know",
      image: WhatIsCategoryside,
      path: "/blogs/what-is-category-based-selection-everything-you-need-to-know",
    },
  ];
  const RecentBlogs = ({ title, image, path }) => {
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

  const posts = [
    {
      title: "Tips and Tricks on Preparing for IELTS",
      description:
        "IELTS is an integral requirement for immigrating to Canada.While the preparation may",
      image: Tips,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
      date: "22 MAY 2024",
    },
    {
      title:
        "Everything you need to know about Sponsoring your Spouse, Partner or Child",
      description:
        "Sponsoring your spouse, partner or child involves helping them obtain their PR and being able",
      image: Everything,
      path: "/blogs/everything-you-need-to-know-about-sponsoring-your-spouse-and-partner-or-child",
      date: "30 MAY 2024",
    },
    {
      title: "Top 10 Universities in Canada",
      description:
        "For decades, Canada has been a hotspot for international students.Ambitious youngsters",
      image: Top10,
      path: "/blogs/top-10-universities-in-canada",
      date: "27 MAY 2024",
    },
  ];
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card-similar">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <p3>{date}</p3>
        <br />
        <br />
        <a href={path}>
          <h1>{title}</h1>
        </a>
        <p2>
          {description}{" "}
          <a style={{ color: "#b90124", fontStyle: "italic" }} href={path}>
            Read more...
          </a>
        </p2>
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
                    href="/blogs"
                  >
                    Blogs
                  </a>{" "}
                  &gt;{" "}
                  <p1 className="text-gray-400 text-[13px]">
                    Top In Demand Jobs in Canada as of 2024
                  </p1>
                </p>
                <div className="flex w-full h-full items-end">
                  <div className="text-[30px] md:text-[40px] lg:text-[45px] font-normal font-serif leading-normal text-center mx-auto my-0 pb-3">
                    Welcome to Our Blogs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="left-blog">
          <div>
            <h1 className="title-heading">Recent Blogs</h1>
            <div class="blog-card-container">
              <div className="blog-card-recent">
                {recentBlogs.map((post, index) => (
                  <RecentBlogs key={index} {...post} />
                ))}
              </div>
            </div>
            {/*
            <LatestNews />
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
            <h1 className="title-heading">Similar Blogs</h1>
            <a href="/blogs">All Articles</a>
          </div>
          <br />
          <div className="blog-cards-similar">
            {posts.map((post, index) => (
              <BlogPost key={index} {...post} />
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

export default TopInDemandJobs;
