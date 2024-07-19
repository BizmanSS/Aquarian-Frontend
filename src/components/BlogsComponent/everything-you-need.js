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
import { IoIosArrowDroprightCircle } from "react-icons/io";

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
          <p2 style={{ display: "flex", gap: "0.3rem" }}>
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
      title: "Top 10 Universities in Canada",
      description:
        "For decades, Canada has been a hotspot for international students. Ambitious youngsters wanting to reach the zenith come from all over the world to study at these top notch universities. Let us delve into the academic realm of Canada. Here are the top 10 universities.",
      image: Top10,
      path: "/blogs/top-10-universities-in-canada",
      date: "27 MAY 2024",
    },
    {
      title: "Tips and Tricks on Preparing for IELTS",
      description:
        "IELTS is an integral requirement for immigrating to Canada. While the preparation may seem like scaling a mountain, it does not have to be that tedious. Let us discuss some of the tips and tricks that can help you ace the language test!",
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
        <br />
        <a href={path}>
          <h1 className="line-clamp-2 min-h-[64px]">{title}</h1>
        </a>
        <p2 className="line-clamp-4">{description} </p2>
        <a
          style={{
            color: "#b90124",

            fontStyle: "italic",
            display: "flex",
            gap: "0.3rem",
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
            {" > "}Everything you need to know about Sponsoring your Spouse,
            Partner or Child
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
        )}
      </div>
      <div ref={bubbleRef}></div>
    </>
  );
};

export default EverythingYouNeed;
