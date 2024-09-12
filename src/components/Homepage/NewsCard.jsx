import React from "react";
import './NewsCard.css'

const NewsCard = ({ data }) => {
  return (
    <a href={data.path}>
      <div className="latest-news-card">
        <img
          className="latest-news-card-image"
          src={data.image}
          alt="cardImage"
        />
        <div className="latest-news-card-date">
          <div className="w-auto max-w-[11rem] flex items-center px-6 py-3 bg-[#E1E7ED] md:bg-[#EDF1F6]">
            <h1 className="mx-2 text-sm font-normal text-black">{data.date}</h1>
          </div>
        </div>
        

        <div className="px-6 pb-4 latest-news-card-content">
          {/* <p className='py-2 text-gray-500 text-sm'>PROVINCIAL NOMINEE PROGRAM</p> */}
          <h1 className="latest-news-card-content-heading">
            {data.title}
          </h1>

          <p className="latest-news-card-content-text  ">{data.description}..</p>
          <p className="latest-news-card-content-readmore">
            Read More
          </p>
        </div>

        <div className="latest-news-card-buttons">
          <button>Express Entry</button>
          <button>Immigration</button>
        </div>
        {/* <div className="flex flex-col gap-4">
        <div className="border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6">
          Alberta PNP Draw
        </div>
        <div className="border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6">
          Alberta PNP Draw
        </div>
        <div className="border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6">
          Alberta PNP Draw
        </div>
        <div className="border-[1px] border-gray-400 px-4 py-2 cursor-pointer font-normal text-sm max-w-[15rem] mx-6">
          Alberta PNP Draw
        </div>
      </div> */}
      </div>
    </a>
  );
};

export default NewsCard;
