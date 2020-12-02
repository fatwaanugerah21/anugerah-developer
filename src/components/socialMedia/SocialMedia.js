import React from "react";
import "./social-media.min.css";
import { facebookIcon, githubIcon, instagramIcon } from "./icons";
import { Logo } from "../../logo";

const SocialMedia = ({ pageYOffset, bodyHeight }) => {
  const withBackground = pageYOffset >= 200 ? " dark-background" : "";
  const parentClass =
    window.innerWidth >= 768 && window.innerHeight > 600
      ? pageYOffset + window.innerHeight <= bodyHeight
        ? "laptop-view-container"
        : "last-scroll"
      : "phone-view-container";

  return (
    <div className={parentClass} id="mantap">
      <div className="creator">
        <p>Created By :</p>
        <div>{Logo(true)}</div>
      </div>
      <ul className={"social-media-list " + withBackground}>
        <li className="social-media-item facebook">{facebookIcon()}</li>
        <li className="social-media-item instagram">{instagramIcon()}</li>
        <li className="social-media-item github">{githubIcon()}</li>
      </ul>
    </div>
  );
};

export default SocialMedia;
