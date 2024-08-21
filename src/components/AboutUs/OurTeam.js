import React from "react";
import "../../styles/AboutUs.css";
import Puneet from "../../Assets/Puneet.jpg";
import Tanpreet from "../../Assets/Tanpreet.jpg";
const OurTeam = () => {
  return (
    <>
      <div className="OurTeam">
        <h5 className="heading">Meet Our Visionaries</h5>
        <div className="line"></div>
        <div className="text-div">
          <p1>
            We're here to personalise each step, so your immigration feels like
            coming home. Trust us to make your dream of Canadian life a reality,
            backed by decades of experience and sincere dedication.
          </p1>
        </div>
      </div>
      <div className="team-background">
        <div className="imageTeam">
          <img src={Tanpreet} alt="" />
        </div>
        <div className="textOurTeam">
          <h1 className="Name">Tanpreet Sawhney</h1>
          <h2 className="designation">Director & Founder</h2>
          <h3 className="about">
            <br />
            Tanpreet is a Regulated Canadian Immigration Consultant (RCIC), the
            licences for which have been issued by the College of Immigration
            and Citizenship Consultants (CICC). She has a background in the
            education sector, which is combined with a specialisation in the
            immigration laws of Canada. In her almost a decade of experience,
            she has provided numerous clients with impeccable immigration
            consulting tailor-made to each individualised case.
            <br />
            <br />
          </h3>
        </div>
      </div>
      <div className="team-background">
        <div className="imageTeam">
          <img src={Puneet} alt="" />
        </div>
        <div className="textOurTeam">
          <h1 className="Name">Puneet Sawhney</h1>
          <h2 className="designation">Business Head</h2>
          <h3 className="about">
            <br />
            With 25+ years of experience, Puneet has helped countless
            individuals, including students, entrepreneurs, families, and many
            more, turn their immigration dream into a reality. He has worked at
            the British High Commission, representing 100+ colleges and
            universities all over the world. Being a Canadian permanent resident
            himself, along with his own decades of experience and knowledge, he
            is abreast of all the ins and outs of the immigration system.
            <br />
            <br />
          </h3>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
