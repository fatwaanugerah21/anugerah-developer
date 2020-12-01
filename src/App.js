import React, { useEffect, useState } from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import Plans from "./components/plans/Plans";
import SocialMedia from "./components/socialMedia/SocialMedia";

function App() {
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

  return (
    <div className="app">
      <Navbar pageYOffset={yOffset} className="page" />
      <LandingPage className="page" />
      <AboutUs className="page" />
      <Plans className="page"/>
      <SocialMedia pageYOffset={yOffset} bodyHeight={bodyHeight()} />
    </div>
  );
}

export default App;
