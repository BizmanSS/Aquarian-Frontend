import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/Blogs/EVERYTHING YOU NEEDOpen.jpg";
import TipsSide from "../../Assets/Blogs/TIPS AND TRICKSside.jpg";
import WhatIsCategoryside from "../../Assets/Blogs/Category Based Selectionside.jpg";
import TopInside from "../../Assets/Blogs/Top In Demand Jobsside.jpg";
import Tips from "../../Assets/Blogs/TIPS AND TRICKS.jpg";
import TopIn from "../../Assets/Blogs/Top In Demand Jobs.jpg";
import Top10 from "../../Assets/Blogs/TOP 10 UNIVERSITIES.jpg";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
//import LatestNews from "../Pages/Blogs/LatestNews.js";

const Table = () => {
  const data = [
    { name: "Sponsorship fee", amount: "75" },
    { name: "Principal applicant processing fee", amount: "490" },
    { name: "Right of Permanent Residence fee", amount: "515" },
    { name: "Biometics", amount: "85" },
    { name: "Total", amount: "1165" },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>PROCESSING FEE</th>
          <th>AMOUNT (CAD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
const EverythingYouNeed = () => {
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
  }; */
  }

  const innerPosts = [
    {
      title:
        "Everything you need to know about Sponsoring your Spouse, Partner or Child",
      description: (
        <p>
          Sponsoring your spouse, partner or child involves helping them obtain
          their Permanent Residency (PR) and being able to support them
          financially, ensuring that they do not require social assistance from
          the government.
          <br />
          <br />
          <span>What is the eligibility criteria?</span>
          <br />
          <br />
          To sponsor your spouse, partner or child;
          <br /> <br />
          <ul>
            <li>You must be above the age of 18 years</li>
            <li>You are a Canadian citizen or</li>
            <li>
              You are a person registered in Canada as an Indian under the
              Canadian Indian Act or
            </li>
            <li>You are a Permanent Resident or Citizen of Canada</li>
          </ul>
          <br />
          <span>How much does it cost to sponsor?</span>
          <br />
          <br />
          A payment of $150 is required for each dependent child or an adopted
          child. Moreover, $1,050 is required if you are sponsoring a spouse or
          partner of your relative.
          <br />
          <br />
          Along with the above fees, the government processing fees include:
          <br />
          <br />
          <Table />
          <br />
          <span>Who can you sponsor?</span>
          <br />
          <br />
          As a Canadian PR, you can sponsor your spouse, common-law partner,
          conjugal partner and/or dependent children.
          <br />
          <br />
          Your <span>spouse</span> can be of either sex, legally married to you
          and at least 18 years of age.
          <br />
          <br />
          Your <span>common-law partner</span> can be either sex, at least 18
          years of age, is not legally married to you, has been living with you
          for minimum 12 consecutive months without any long periods apart. If
          time has been spent away from each other, it should be short and
          temporary. Sponsors will be asked to give proof of your common-law
          relationship.
          <br />
          <br />
          Your <span>conjugal partner</span> is not legally married to you or in
          a common-law relationship, at least 18 years old, can be either sex,
          has been in a relationship with you for at least 1 years and lives
          outside of Canada.
          <br />
          <br />
          Your <span>children</span> may qualify as dependents if they are under
          22 years old and don't have a spouse or common-law partner. Children
          above 22 years of age can also qualify as dependents if they are
          unable to financially support themselves because of a mental or
          physical condition and have depended on their parents for financial
          assistance before the age of 22.
          <br />
          <br />
          <span>
            What are the other alternatives to help my family come to Canada?
          </span>
          <br />
          <br />
          If you are unable to avail the sponsorship option, your family may
          qualify for other pathways to PR in Canada.
          <br />
          <br />
          Contact <span>Aquarian Immigration</span> to find the right pathway
          for your family. Want to know more about the immigration process?
          Avail our <span>free counselling service.</span>
          <br />
          <br />
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
      date: "30 MAY 2024",
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
      title: "Tips and Tricks on Preparing for IELTS",
      image: TipsSide,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
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
          <p2>
            <a href={path}>Know more{" >"}</a>
          </p2>
        </div>
      </div>
    );
  };

  const posts = [
    {
      title: "Top In Demand Jobs in Canada as of 2024",
      description:
        "Canada has been at the forefront of immigration for ages. People come from all over the ",
      image: TopIn,
      path: "/blogs/top-in-demand-jobs-in-canada-as-of-2024",
      date: "28 MAY 2024",
    },
    {
      title: "Top 10 Universities in Canada",
      description:
        "For decades, Canada has been a hotspot for international students.Ambitious youngsters",
      image: Top10,
      path: "/blogs/top-10-universities-in-canada",
      date: "27 MAY 2024",
    },
    {
      title: "Tips and Tricks on Preparing for IELTS",
      description:
        "IELTS is an integral requirement for immigrating to Canada.While the preparation may",
      image: Tips,
      path: "/blogs/tips-and-tricks-on-preparing-for-ielts",
      date: "22 MAY 2024",
    },
  ];
  const BlogPost = ({ title, description, date, image, path }) => {
    return (
      <div className="post-card-similar">
        <a href={path}>
          <img alt="" src={image} />
        </a>
        <p3>{date}</p3>
        <br /> <br />
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
                    Everything you need to know about Sponsoring your Spouse,
                    Partner or Child
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
          {vw > 1250 && (
            <div>
              <h1 className="title-heading">Recent Blogs</h1>
              <div class="blog-card-container">
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
      )}
      <div ref={bubbleRef}></div>
    </>
  );
};

export default EverythingYouNeed;
