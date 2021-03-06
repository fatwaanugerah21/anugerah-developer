import React, { useState, useEffect } from "react";
import AboutUs from "./aboutUs/AboutUs";
import Flow from "./flow/Flow";
import LandingPage from "./landingPage/LandingPage";
import Navbar from "./navbar/Navbar";
import Plans from "./plans/Plans";
import SocialMedia from "../socialMedia/SocialMedia";
import Menu from "../tools/menu/Menu";
import Collaborate from "./collaborate/Collaborate";

const HomePage = () => {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const windowScroll = window.addEventListener("scroll", (_) =>
      setYOffset(window.pageYOffset)
    );
    return window.removeEventListener("scroll", windowScroll);
  }, []);

  const bodyHeight = () => {
    const allPage = document.querySelectorAll(".page");
    let scrollHeight = 0;
    allPage.forEach((page) => {
      scrollHeight += page.scrollHeight;
    });
    return scrollHeight;
  };

  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <Menu
        showMenu={showMenu}
        onClick={() => {
          setShowMenu(false);
        }}
      />
      {Collaborate}

      <Navbar
        pageYOffset={yOffset}
        className="page"
        showMenu={() => setShowMenu(!showMenu)}
        showModal={() => setShowModal(!showModal)}
      />
      <LandingPage className="page" pageYOffset={yOffset} />
      <AboutUs className="page" />
      <Flow className="page" />
      <Plans className="page" />
      <SocialMedia pageYOffset={yOffset} bodyHeight={bodyHeight()} />
    </div>
  );
};
export default HomePage;
