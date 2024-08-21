import React from "react";
import svg from "../../../Assets/404.svg";

const PageNotFound = () => {
  return (
    <>
      <div style={{ height: "80vh", marginTop: "8rem" }} className="cont-404">
        <img
          style={{ height: "75vh", marginLeft: "auto", marginRight: "auto" }}
          src={svg}
          alt="svg"
        />
        <a href="/">
          <button
            style={{
              width: "10%",
              marginLeft: "45%",
              borderRadius: "10px",
              backgroundColor: "#000",
              color: "#01F9E1",
              padding: "10px 30px",
            }}
          >
            Back to Home
          </button>
        </a>
      </div>
    </>
  );
};

export default PageNotFound;
