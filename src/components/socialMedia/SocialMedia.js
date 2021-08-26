import React from "react";
import "./social-media.css";
import { facebookIcon, githubIcon, instagramIcon, whatsappIcon } from "./icons";
import { Logo } from "../../logo";
import { orderLink } from "../constants";

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
        <div>
          <a href="#home">{Logo(true)}</a>
        </div>
      </div>
      <ul className={"social-media-list " + withBackground}>
        <li
          style={{ marginRight: "10px", transform: "translate-y:5px" }}
          className="social-media-item facebook"
        >
          <a target="_blank" rel="noreferrer noopener" href={orderLink}>
            {whatsappIcon()}
          </a>
        </li>
        <li className="social-media-item facebook">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/fatwa.anugerah.1/"
          >
            {facebookIcon()}
          </a>
        </li>
        <li className="social-media-item instagram">
          <a
            href="https://www.instagram.com/anugerah_developer/"
            rel="noreferrer noopener"
            target="_blank"
          >
            {instagramIcon()}
          </a>
        </li>
        <li className="social-media-item github">
          <a
            href="https://github.com/fatwaanugerah21"
            rel="noreferrer noopener"
            target="_blank"
          >
            {githubIcon()}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
