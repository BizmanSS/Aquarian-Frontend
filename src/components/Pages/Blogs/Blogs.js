import React, { useState, useRef } from 'react';
import '../../../styles/Blogs.css';
import Top10 from '../../../Assets/Blogs/TOP 10 UNIVERSITIES.jpg';
import Tips from '../../../Assets/Blogs/TIPS AND TRICKS.jpg';
import WhatIsCategory from '../../../Assets/Blogs/Category Based Selection.jpg';
import TopIn from '../../../Assets/Blogs/Top In Demand Jobs.jpg';
import Everything from '../../../Assets/Blogs/EVERYTHING YOU NEED.jpg';
import Top10side from '../../../Assets/Blogs/TOP 10 UNIVERSITIESside.jpg';
import WhatIsCategoryside from '../../../Assets/Blogs/Category Based Selectionside.jpg';
import TopInside from '../../../Assets/Blogs/Top In Demand Jobsside.jpg';
import newsOne from '../../../Assets/application fee hiked.png';
import newsTwo from '../../../Assets/average scores accepted.png';
import newsThree from '../../../Assets/working hours increased.png';
import { useMobile } from '../../globalComponents/MobileContext/IsMobileContext';
import BannerPages from '../Banner/BannerPages';

const BlogPosts = () => {
  const { vw } = useMobile()
  const [searchBlogs, setSearchBlogs] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { isMobile } = useMobile();
  const postsPerPage = 4;
  const blogContainerRef = useRef(null);

  const posts = [
    {
      title: 'Top 10 Universities in Canada',
      description:
        'For decades, Canada has been a hotspot for international students.Ambitious youngsters',
      image: Top10,
      path: '/blogs/top-10-universities-in-canada',
      date: '27 MAY 2024',
    },
    {
      title: 'Tips and Tricks on Preparing for IELTS',
      description:
        'IELTS is an integral requirement for immigrating to Canada.While the preparation may',
      image: Tips,
      path: '/blogs/tips-and-tricks-on-preparing-for-ielts',
      date: '22 MAY 2024',
    },
    {
      title: 'What is Category Based Selection? Everything you need to know',
      description:
        'Canada has been a prominent destination for immigrants, known for its diverse population',
      image: WhatIsCategory,
      path: '/blogs/what-is-category-based-selection-everything-you-need-to-know',
      date: '29 MAY 2024',
    },
    {
      title: 'Top In Demand Jobs in Canada as of 2024',
      description:
        'Canada has been at the forefront of immigration for ages. People come from all over the ',
      image: TopIn,
      path: '/blogs/top-in-demand-jobs-in-canada-as-of-2024',
      date: '28 MAY 2024',
    },
    {
      title:
        'Everything you need to know about Sponsoring your Spouse, Partner or Child',
      description:
        'Sponsoring your spouse, partner or child involves helping them obtain their PR and being able',
      image: Everything,
      path: '/blogs/everything-you-need-to-know-about-sponsoring-your-spouse-and-partner-or-child',
      date: '30 MAY 2024',
    },
  ];
  const BlogPost = ({ title, description, image, path, date }) => {
    return (
      <div className='post-card'>
        <a href={path}>
          <img alt='' src={image} />
        </a>
        <p3>{date}</p3>
        <br /> <br />
        <a href={path}>
          <h1>{title}</h1>
        </a>
        <p2>
          {description}{' '}
          <a style={{ color: '#b90124', fontStyle: 'italic' }} href={path}>
            Read more...
          </a>
        </p2>
      </div>
    );
  };
  const filterPosts = () => {
    if (!searchBlogs) return posts;
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchBlogs.toLowerCase()) ||
        post.description.toLowerCase().includes(searchBlogs.toLowerCase())
    );
  };
  const filteredPosts = filterPosts();
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  const scrollToTop = () => {
    if (blogContainerRef.current) {
      window.scrollTo({ 
        top: blogContainerRef.current.offsetTop,
        behavior: "smooth" 
      });
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  // Handle next and previous buttons
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  const latestNews = [
    {
      title: 'Right of Permanent Resident fee increased',
      image: newsOne,
      path: '/latest-news/right-of-permanent-resident-fee-increased',
    },
    {
      title: 'Averaged Language Scores now Accepted under Express Entry...',
      image: newsTwo,
      path: '/latest-news/averaged-language-scores-now-accepted-under-express-entry-for-disabled-candidates',
    },
    {
      title: 'Working hours Increased for Students in Canada',
      image: newsThree,
      path: '/latest-news/working-hours-increased-for-students-in-canada',
    },
  ];
  const LatestNews = ({ title, image, path }) => {
    return (
      <div className='post-card-recent'>
        <a href={path}>
          <img alt='' src={image} />
        </a>
        <div className='title-recent'>
          <a href={path}>
            <h1>{title}</h1>
          </a>
          <p2>
            <a href={path}>Know more{' >'}</a>
          </p2>
        </div>
      </div>
    );
  };

  const recentBlogs = [
    {
      title: 'Top 10 Universities in Canada',
      image: Top10side,
      path: '/blogs/top-10-universities-in-canada',
    },
    {
      title: 'Top In Demand Jobs in Canada as of 2024',
      image: TopInside,
      path: '/blogs/top-in-demand-jobs-in-canada-as-of-2024',
    },
    {
      title: 'What is Category Based Selection? Everything you need to know',
      image: WhatIsCategoryside,
      path: '/blogs/what-is-category-based-selection-everything-you-need-to-know',
    },
  ];

  const RecentBlogs = ({ title, image, path }) => {
    return (
      <div className='post-card-recent'>
        <a href={path}>
          <img alt='' src={image} />
        </a>
        <div className='title-recent'>
          <a href={path}>
            <h1>{title}</h1>
          </a>
          <p2>
            <a href={path}>Know more{' >'}</a>
          </p2>
        </div>
      </div>
    );
  };

  return (
    <div  style={{ background: "#FFF" }}>
      <div
        ref={blogContainerRef}
        className='flex flex-col justify-center w-full md:w-[calc(100vw-5rem)] mb-10'
      >
        <BannerPages
          link={'blogs'}
          title={'Blogs'}
          description={'Welcome to Our Blogs'}
        />
        {/* <div className="mt-[5rem] lg:mt-[6rem]">
          <div className="w-[95%] mx-auto bg-banner text-white bg-cover bg-center bg-no-repeat h-[12rem] -mt-12 rounded-3xl">
            <div className="flex flex-col justify-between pl-4 md:pl-8 md:px-12 lg:px-16 h-full">
              <p className="text-gray-400 lg:pb-10 pt-12 cursor-pointer relative top-5 lg:top-10">
                <a
                  href="/"
                  className="text-gray-400 hover:underline text-[13px]"
                >
                  Home
                </a>{" "}
                &gt; <p1 className="text-gray-400 text-[13px]">Blogs</p1>
              </p>
              <div className="flex w-full h-full items-end">
                <div className="text-[30px] md:text-[40px] lg:text-[45px] font-normal font-serif leading-normal text-center mx-auto my-0 pb-3">
                  Welcome to Our Blogs
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className='left-blog'>
        {(vw>1250) && 
        <div>
          <input
            className='search-blogs'
            value={searchBlogs}
            type='text'
            onChange={(e) => setSearchBlogs(e.target.value)}
            placeholder={'Search Keywords...'}
          />
          <h1 className='title-heading'>Recent Blogs</h1>
          <div class='blog-card-container'>
            <div className='blog-card-recent'>
              {recentBlogs.map((post, index) => (
                <RecentBlogs key={index} {...post} />
              ))}
            </div>
          </div>
          {!isMobile && (
            <>
              <h1 className='title-heading'>Latest News</h1>
              <div className='blog-card-recent'>
                {latestNews.map((post, index) => (
                  <LatestNews key={index} {...post} />
                ))}
              </div>
            </>
          )}
        </div>}

        <div className='blog-cards-container'>
          <div className='blog-cards'>
            {filteredPosts.length > 0 ? (
              paginatedPosts.map((post, index) => (
                <BlogPost key={index} {...post} />
              ))
            ) : (
              <h1
                style={{ marginLeft: '3rem', marginBottom: '3rem' }}
                className='title-heading'
              >
                No blogs found!
              </h1>
            )}
          </div>
          {filteredPosts.length > postsPerPage && (
            <div className='news-pagination'>
              <div className='news-perv'>
                <button
                  onClick={() => {
                    handlePreviousPage();
                  }}
                  disabled={currentPage === 1}
                >
                  {'<<'} Prev
                </button>
              </div>

              <div className='news-button-pagination'>
                {Array.from(
                  { length: totalPages },
                  (_, index) => index + 1
                ).map((page) => (
                  <button
                    key={page}
                    onClick={() => {
                      handlePageChange(page);
                    }}
                    className={currentPage === page ? 'active' : ''}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <div className='news-next'>
                <button
                  onClick={() => {
                    handleNextPage();
                  }}
                  disabled={currentPage === totalPages}
                >
                  Next{' >>'}
                </button>
              </div>
            </div>
          )}
        </div>
        {isMobile && (
          <>
            <h1 className='title-heading'>Latest News</h1>
            <div className='blog-card-recent'>
              {latestNews.map((post, index) => (
                <LatestNews key={index} {...post} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPosts;
