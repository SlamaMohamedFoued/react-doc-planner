import React from "react";
import "./TopDescription.css";

const TopDescription = () => {
  return (
    <div className="desc">
      <img
        className="logo"
        alt="docPlanner logo"
        src="https://www.docplanner.com/img/sygnet.png"
        srcSet="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x"
      />
      <p className="quote">Making the healthcare experience more human</p>
      <div className="description-block">
        <p className="description">
          We want patients to find the perfect doctor and book an appointment in
          the most easy way. The patient journey should be enjoyable, and that's
          why we are always next to them: to help them find the best possible
          care. Anytime, anywhere.
        </p>
        <p className="description">
          We also help doctors to better manage their practice and build their
          online reputation. With our integraated end-to-end solution, doctors
          are able not only to improve their online presence, but also to devote
          their time to what really matters: their patients.
        </p>
      </div>
    </div>
  );
};

export default TopDescription;
