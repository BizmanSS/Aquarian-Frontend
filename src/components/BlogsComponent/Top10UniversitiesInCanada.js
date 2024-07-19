import React, { useState, useEffect, useMemo, useRef } from "react";
import "../../styles/Blogs.css";
import innerBlog from "../../Assets/Blogs/TOP 10 UNIVERSITIESOpen.jpg";
import TipsSide from "../../Assets/Blogs/TIPS AND TRICKSside.jpg";
import WhatIsCategoryside from "../../Assets/Blogs/Category Based Selectionside.jpg";
import TopInside from "../../Assets/Blogs/Top In Demand Jobsside.jpg";
import Tips from "../../Assets/Blogs/TIPS AND TRICKS.jpg";
import TopIn from "../../Assets/Blogs/Top In Demand Jobs.jpg";
import Everything from "../../Assets/Blogs/EVERYTHING YOU NEED.jpg";
import { useMobile } from "../globalComponents/MobileContext/IsMobileContext";
//import LatestNews from "../Pages/Blogs/LatestNews";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Top10UniversitiesInCanada = () => {
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
      title: "Top 10 Universities in Canada",
      description: (
        <p>
          For decades, Canada has been a hotspot for international students.
          Ambitious youngsters wanting to reach the zenith come from all over
          the world to study at these top notch universities. Let us delve into
          the academic realm of Canada. Here are the top 10 universities.
          <br />
          <br />
          <span>1. University of Toronto (U of T)</span>
          <br />
          Leading the pack is U of T. This globally renowned university offers a
          wide variety of impeccable courses. The top courses in this university
          include anthropology, human biology, computer science, statistical
          science and psychology. With three campuses, University of Toronto
          might just be the place for you to spread your wings.
          <br />
          <br />
          <span>2. University of British Columbia (UBC)</span>
          <br />
          UBC is where you’ll find breathtaking views and world-class research.
          Ranking at the 35th position in the Best Global Universities in the
          world, it has an acceptance rate of 52.4% which means you have to pull
          your socks up to become a part of this eminent institution. Situated
          in Vancouver, it’s perfect for those who want to hit the books and the
          beach on the same day.
          <br />
          <br />
          <span>3. McGill University</span>
          <br />
          In the heart of Montreal, McGill is the Hogwarts of Canada. Apart from
          its distinguishable culture, it is the best place for international
          students because of its diversity. Immigrant students make up about
          30% of the total student population. It’s prestigious, it’s historic,
          and it’s surrounded by the best food Canada has to offer.
          <br />
          <br />
          <span>4. McMaster University</span>
          <br />
          Hamilton’s pride and joy, McMaster, is known for its health sciences
          and research prowess. Being located in a well funded province,
          researchers from all over the world come to McMaster for its
          state-of-the-art infrastructure. Furthermore, if you’re leaning
          towards understanding the complex human anatomy, this is the right
          university for you.
          <br />
          <br />
          <span>5. University of Alberta</span>
          <br />
          Known for its innovative science programs, this Edmonton based
          university is one of the top teaching and research universities in
          Canada. If you're an extroverted winter fanatic, this is the place for
          you. With snowy weather and friendly faces, you can have the best
          college life here in the U of A.
          <br />
          <br />
          <span>6. University of Montreal</span>
          <br />
          If you are interested in enhancing your vernacular and learning
          French, UdeM offers top-tier programs and a chance to immerse yourself
          in French-Canadian culture. Anglophones (English speaking population)
          might have trouble adjusting at first, but if you put in the effort,
          communicating with the francophones (French speaking population) will
          not be too difficult.
          <br />
          <br />
          <span>7. University of Waterloo</span>
          <br />
          Tech geeks, assemble! Waterloo is Canada’s Silicon Valley, producing
          some of the best engineers and computer scientists. If you are
          Waterloo-king for work experience, this university is also home to the
          world’s largest co-op program that can help you get better equipped
          with the skills you need for the professional world.
          <br />
          <br />
          <span>8. Western University</span>
          <br />
          Located in London, Ontario, Western is the life of the party. Known
          for its vibrant student life and strong programs in business and law,
          it’s where you go to work hard and play harder.
          <br />
          <br />
          <span> 9. University of Calgary</span>
          <br />
          Nestled near the Rockies, U of C offers a blend of academic excellence
          and outdoor adventure. It has high quality courses and a stellar
          reputation. With a beautiful library and supportive professors, this
          university offers one of the best business, geology and engineering
          courses.
          <br />
          <br />
          <span>10. Queen’s University</span>
          <br />
          Last but certainly not least, Queen’s in Kingston offers a tight-knit
          community and a picturesque campus. It’s known for its rigorous
          academics and historic limestone buildings. It’s as royal as it sounds
          since it's basically like studying in a castle from Frozen.
          <br />
          <br />
          Each of these universities has its own charm. Whether you're a budding
          scientist, an aspiring artist, or someone who just loves a good
          snowball fight, there’s a Canadian university waiting to welcome you
          with open arms and a warm toque.
          <br />
          <br />
          Confused about which course you want to pursue in Canada? Aquarian
          Immigration has got you covered. Avail our free counselling service
          and accomplish your academic goals!
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
      date: "27 MAY 2024",
    },
  ];
  const InnerBlog = ({ title, description, image, date }) => {
    return (
      <div className="post-card-inner">
        <h1>{title}</h1>
        <p3>{date}</p3>
        <br />
        <br /> <img alt="" src={image} />
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
            {" > "}Top 10 Universities in Canada
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

export default Top10UniversitiesInCanada;
