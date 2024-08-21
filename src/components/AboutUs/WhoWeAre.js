import React from "react";
import "../../styles/AboutUs.css";

const WhoWeAre = () => {
  return (
    <div className="WhoWe">
      <h5 className="heading">Our Story</h5>
      <div className="line"></div>
      <div className="text-div">
        <h3
          style={{
            textAlign: "center",
          }}
        >
          “Experience speaks for itself”
        </h3>
        <p1>
          We have a combined experience of 30+ years. Our founders have always
          had an inclination towards immigration and counselling, which has
          allowed them to guide 5,000+ immigrants. We recognised the need for
          qualified and trained professionals in the immigration industry. Most
          agents lack the certifications, knowledge, experience, and general
          quality of being abreast of all the dynamic trends. This drove us to
          establish Aquarian Immigration Services. We aim at providing our
          clients with the best advice tailored to their unique case. We
          understand the drastic transition that is caused by immigration, and
          we stand by our clients to smoothly help them start this new chapter
          of their lives. From the beginning right to the end, we are there for
          our clients, fulfilling all their needs, from documentation to
          adjusting to life in Canada.
        </p1>
      </div>
    </div>
  );
};

export default WhoWeAre;
