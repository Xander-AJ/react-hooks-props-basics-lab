import React from "react";
import Links from "./Links"; // Import Links component
import image from "../data/data"; // Import image URL

function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && bio.trim() !== "" && <p>{bio}</p>} {/* Conditional rendering for bio */}
      <img src={image} alt="I made this" />
      <Links github={github} linkedin={linkedin} /> {/* Pass github and linkedin props to Links */}
    </div>
  );
}

export default About;
