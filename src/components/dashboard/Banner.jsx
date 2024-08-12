import React from "react";
import "./dashboards.css";
import CustomButtons from "../../reusables/CustomButtons";

const Banner = () => {
  return (
    <>
      <div className="bannerImgContainer">
        <div className="bannerContent">
          <span className="bannerTitle">
            Grow your Buisiness to the next Level
          </span>
          <span className="bannerText">
            Paths on the file system that Sass will look in when locating
            modules.
          </span>
          <CustomButtons
            styles={{ backgroundColor: "rgba(255,255,0,0.9)", color: "black" }}
          >
            Get Started
          </CustomButtons>
        </div>
      </div>
    </>
  );
};

export default Banner;
