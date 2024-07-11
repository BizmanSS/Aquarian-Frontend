import React from "react";
import { Link } from "react-router-dom";
export default function TransitThroughCanada() {
  return (
    <div
      style={{
        background: "#E0E0E0",
      }}
    >
      <div className="AboutUsHeader">
        <p className="link">
          <a href="/">Home</a>
          {" > "}Visit
          {" > "}
          <Link to="/visit/visitor-visa-trv">Visitor Visa- TRV</Link> {" > "}
          Transit through Canada
        </p>
        <div className="header-content">
          <h1 className="heading-about">Transit through Canada</h1>
        </div>
      </div>
      <h2 className="pages-content-div">
        When transiting through Canada on your way to another country, the
        specific document requirements will depend on various factors. Firstly,
        the mode of transportation you will be using to travel through Canada
        (such as air, car, bus, train, boat, including a cruise ship) will
        influence the document you need. Additionally, the duration of your
        transit in Canada and the nationality indicated in your passport will
        also play a role in determining the necessary documentation.
        <br />
        <br />
        For air travel, most travelers transiting through Canada will need an
        Electronic Travel Authorization (eTA), unless they are exempted based on
        their citizenship. An eTA is required for passengers transiting through
        a Canadian airport and staying in the international transit area,
        without entering Canada.
        <br />
        <br />
        If you are traveling by car, bus, train, or boat and will not be
        crossing the Canadian border, you generally will not need a transit
        document. However, it is crucial to ensure that you will remain within
        the designated transit area and not enter Canadian territory.
        <br />
        <br />
        Other factors, such as being a permanent resident of the United States
        or holding a US visa, may affect your transit requirements. It is
        advisable to consult the official website of Immigration, Refugees and
        Citizenship Canada (IRCC) or contact the appropriate Canadian
        authorities for the most accurate and up-to-date information regarding
        your specific transit situation.
        <br />
        <br />
        Remember, it is essential to comply with the transit requirements set by
        the Canadian government to ensure a smooth and hassle-free journey
        through Canada on your way to your final destination.
        <br />
        <br />
        <sp>Visitor visa for Transit</sp>
        <br />
        <br />
        Here are the key points to remember regarding the requirement of a
        visitor visa for individuals from visa-required countries:
        <br />
        <br />
        <ul>
          <li>
            If you intend to visit Canada, even if it is for a duration of less
            than 48 hours and regardless of whether you are traveling by air, a
            visitor visa is necessary.
          </li>
          <li>
            If you are transiting through Canada and plan to stay for more than
            48 hours, you will need to obtain a visitor visa, provided you are
            from a visa-required country.
          </li>
          <li>
            Crossing the Canadian border by various means such as bus, car,
            train, boat, or cruise ship also necessitates a visitor visa for
            individuals from visa-required countries.
          </li>
          <li>
            It is important to note that adherence to the visa regulations set
            by Canadian authorities is essential to ensure a smooth entry into
            Canada.
          </li>
        </ul>
        <br />
        <sp>Transit visa</sp>
        <br />
        <br />
        You need a transit visa if you’re from a visa-required country and:
        <br />
        <br />
        <ul>
          <li>
            your international flight stops at a Canadian airport on its way to
            another country
          </li>
          <li>
            you’ll be connecting between 2 international flights at a Canadian
            airport
          </li>
          <li>you’ll transit through Canada in 48 hours or less</li>
          <li>you don’t have a valid visitor visa</li>
        </ul>
      </h2>
    </div>
  );
}
