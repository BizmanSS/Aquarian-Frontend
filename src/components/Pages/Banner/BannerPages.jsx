import React from "react";

const BannerPages = ({ link, title, description }) => {
  return (
    <div className="AboutUsHeader">
      <p className="link">
        <a href="/">Home</a>
        {" > "}
        <a href={`/${link}`}>{title}</a>
      </p>
      <div className="header-content">
        <h1 className="heading-about">{description}</h1>
      </div>
    </div>
  );
};

export default BannerPages;
