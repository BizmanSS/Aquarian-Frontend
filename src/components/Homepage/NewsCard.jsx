import React from "react";
const NewsCard = ({ data }) => {
  return (
    <a href={data.path}>
      <div className="min-w-[21rem] max-w-[23rem] hover:bg-[#00F8E1] cursor-pointer h-[31rem] overflow-hidden bg-slate-100 rounded-lg shadow-xl py-4 px-2 transition ease-in delay-40 duration-200">
        <img
          className="object-cover object-center w-full h-[11rem]"
          src={data.image}
          alt="cardImage"
        />
        <div className="w-full flex items-center justify-end relative -top-[1.3rem]">
          <div className="w-auto max-w-[11rem] flex items-center px-6 py-3 bg-slate-100">
            <h1 className="mx-2 text-sm font-normal text-black">{data.date}</h1>
          </div>
        </div>

        <div className="px-6 pb-4">
          {/* <p className='py-2 text-gray-500 text-sm'>PROVINCIAL NOMINEE PROGRAM</p> */}
          <h1 className="text-lg font-semibold line-clamp-3 text-gray-800">
            {data.title}
          </h1>

          <p className="line-clamp-4 text-gray-700">{data.description}..</p>
          <p className="cursor-pointer font-semibold text-red-500 ml-40">
            Read More...
          </p>
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
