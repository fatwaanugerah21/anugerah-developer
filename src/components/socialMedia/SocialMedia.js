import React from "react";
import "./social-media.min.css";
import { facebookIcon, githubIcon, instagramIcon } from "./icons";

const SocialMedia = ({ pageYOffset }) => {
  const withBackground = pageYOffset >= 200 ? " light-background" : "";

  return (
    <div className={"social-media-container " + withBackground}>
      <ul className="social-media-list">
        <li className="social-media-item facebook">{facebookIcon()}</li>
        <li className="social-media-item instagram">{instagramIcon()}</li>
        <li className="social-media-item github">{githubIcon()}</li>
      </ul>
    </div>
  );
};

const style = {
  
};
export default SocialMedia;
