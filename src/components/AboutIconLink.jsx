import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link to="/about">
      {/* <Link
        to={{
          pathname: "/about",
          search: "?about",
          hash: "#aboutPage",
        }}
      > */}
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
