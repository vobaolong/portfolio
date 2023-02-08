import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">1 Years Working</span>
      </div>

      <div className="about__box">
        <i className="uil uil-bag"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">10+ Projects</span>
      </div>
    </div>
  );
};

export default Info;
