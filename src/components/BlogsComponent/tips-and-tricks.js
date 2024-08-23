import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import gif1 from "../../Assets/Blogs/you-can-do-it-school.gif";
import gif2 from "../../Assets/Blogs/weaknesses-strengths-michael-scott-michaelscott.gif";
import gif3 from "../../Assets/Blogs/boy-math.gif";
import gif4 from "../../Assets/Blogs/soty-soty-jai-mata-di.gif";
import innerBlog from "../../Assets/Blogs/TIPS AND TRICKSOpen.jpg";
import Top10side from "../../Assets/Blogs/TOP 10 UNIVERSITIESside.jpg";
import WhatIsCategoryside from "../../Assets/Blogs/Category Based Selectionside.jpg";
import TopInside from "../../Assets/Blogs/Top In Demand Jobsside.jpg";
import Everything from "../../Assets/Blogs/EVERYTHING YOU NEED.jpg";
import TopIn from "../../Assets/Blogs/Top In Demand Jobs.jpg";
import Top10 from "../../Assets/Blogs/TOP 10 UNIVERSITIES.jpg";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
//import LatestNews from "../Pages/Blogs/LatestNews.js";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const TipsAndTricks = () => {
  const { vw } = useMobile();
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

  //   const keywords = [
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
      title: "Tips and Tricks on Preparing for IELTS",
      description: (
        <p>
          IELTS is an integral requirement for immigrating to Canada. While the
          preparation may seem like scaling a mountain, it does not have to be
          that tedious.
          <br />
          <br />
          Let us discuss some of the tips and tricks that can help you ace the
          language test!
          <br />
          <br />
          <span>1. Become well versed with the format of the test</span>
          <br />
          <br />
          <img src={gif1} alt="" />
          Understanding what is expected out of you is essential in order to
          know where to start working from.
          <br />
          <br />
          There are 2 types of IELTS exams namely; IELTS Academic and IELTS
          General Training.
          <br />
          <br />
          IELTS Academic is for people who wish to immigrate to Canada for
          educational purposes. This test assesses the listening, speaking,
          writing and reading skills primarily leaning towards academic tasks.
          <br />
          <br />
          On the other hand, IELTS General Training is for individuals who wish
          to immigrate to Canada for non-academic purposes. This test also
          assesses the listening, speaking, writing and reading skills but it is
          more focused on everyday tasks.
          <br />
          <br />
          Upon proper comprehension of what each test entails and its patterns,
          your preparation process becomes more organised.
          <br />
          <br />
          <span>2. Know your weaknesses and strengths</span>
          <br />
          <br />
          <img src={gif2} alt="" />
          After evaluating the format of the test, you can now begin to identify
          your strong points as well as topics that may require more attention.
          It is imperative to prioritise your weak topics as well as regularly
          finessing your strengths. This method will allow you to come up with a
          realistic study schedule.
          <br />
          <br />
          <span>3. Give each section its due importance</span>
          <br />
          <br />
          <img src={gif3} alt="" />
          Each section of the exam holds value, therefore, you should devise a
          separate study plan for all the sections.
          <br />
          <br />
          To hone your listening skills, listen to the various audio scripts
          that are available online. Note down everything that you're able to
          hear, preferably verbatim. Compare your notes to the original script
          and rate yourself accordingly.
          <br />
          <br />
          Watching movies without subtitles is also a great way to improve your
          listening skills!
          <br />
          <br />
          While preparing for the writing section, keep your answers short and
          crisp. It is easy to lose track of your word count and even divert
          from the point, therefore, ensure that you do not waver too much from
          the topic at hand and also follow the word limit set by the examiners.
          Improve your vocabulary by playing fun word games like Scrabble,
          reading newspapers, magazines and articles as well as downloading
          various language apps that can help you expand your vocabulary.
          <br />
          <br />
          To excel in the reading component of the test, refined the 2 most
          important reading techniques; skimming and scanning. Skimming involves
          getting the general overview of the passage rather than spending too
          much time focusing on the minor details. Scanning involves looking for
          important keywords relating to the topic of the passage.
          <br />
          <br />
          Speaking skill holds a lot of importance in both tests as well as its
          practical application. Read everything out loud and record yourself to
          assess your pronunciation and fluency. Focus on the common grammatical
          and pronunciation errors. Ensure that while answering questions, you
          speak articulately and steadily. While vocabulary plays an important
          role in how you speak, be eloquent and easy to understand. The only
          way to revamp your speaking skills is to practise daily.
          <br />
          <br />
          <span>4. Do mock tests in an exam-like environment</span>
          <br />
          <br />
          <img src={gif4} alt="" />
          “Practice makes a man perfect” is a quote as old as time but forever
          relevant. There are countless mock tests available online that can
          help you get a better idea on how to crack the exam. Create an
          exam-like environment by sitting in a quiet room and timing yourself
          and taking these mock tests. These tests will allow you to get a sense
          on which topics you have the most proficiency in and which topics need
          more practice.
          <br />
          <br />
          By incorporating these basic strategies into your study routine, a
          seemingly daunting task can become easier to accomplish. To know more
          about the language requirements for immigrating to Canada, contact{" "}
          <span>Aquarian Immigration Services.</span> <br />
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
      date: "22 MAY 2024",
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
      title: "Top In Demand Jobs in Canada as of 2024",
      image: TopInside,
      path: "/blogs/top-in-demand-jobs-in-canada-as-of-2024",
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

  const posts = [
    {
      title: "Top In Demand Jobs in Canada as of 2024",
      description:
        " Canada has been at the forefront of immigration for ages. People come from all over the world to turn their sweet maple syrup dreams into reality. Being a beacon of opportunities, Canada’s economy attracts professionals from varying backgrounds making it a hotspot for certain occupations.",
      image: TopIn,
      path: "/blogs/top-in-demand-jobs-in-canada-as-of-2024",
      date: "28 MAY 2024",
    },
    {
      title:
        "Everything you need to know about Sponsoring your Spouse, Partner or Child",
      description:
        "Sponsoring your spouse, partner or child involves helping them obtain their Permanent Residency (PR) and being able to support them financially, ensuring that they do not require social assistance from the government.",
      image: Everything,
      path: "/blogs/everything-you-need-to-know-about-sponsoring-your-spouse-and-partner-or-child",
      date: "30 MAY 2024",
    },
    {
      title: "Top 10 Universities in Canada",
      description:
        "For decades, Canada has been a hotspot for international students. Ambitious youngsters wanting to reach the zenith come from all over the world to study at these top notch universities. Let us delve into the academic realm of Canada. Here are the top 10 universities.",
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
        <a href={path}>
          <h1 className="line-clamp-2 min-h-[64px]">{title}</h1>
        </a>
        <p2 className="line-clamp-4">{description} </p2>
        <a
          style={{
            color: "#009889",
            display: "flex",
            gap: "6px",
            fontSize: "small",
            marginTop: "15px",
          }}
          href={path}
        >
          Read more{" "}
          <IoIosArrowDroprightCircle style={{ alignSelf: "center" }} />
        </a>
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
            {" > "}Tips and Tricks on Preparing for IELTS
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
                <div className="blog-card-container">
                  <div className="blog-card-recent">
                    {recentBlogs.map((post, index) => (
                      <RecentBlogs key={index} {...post} />
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
        )}{" "}
      </div>
      <div ref={bubbleRef}></div>
    </>
  );
};

export default TipsAndTricks;
