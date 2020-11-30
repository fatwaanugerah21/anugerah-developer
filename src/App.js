import React, { useEffect, useState } from "react";
import AboutUs from "./components/aboutUs/AboutUs";
import LandingPage from "./components/landingPage/LandingPage";
import Navbar from "./components/navbar/Navbar";
import SocialMedia from "./components/socialMedia/SocialMedia";
import "./app.css";

function App() {
  const [yOffset, setYOffset] = useState(0);

  useEffect(() => {
    const windowScroll = window.addEventListener("scroll", (_) =>
      setYOffset(window.pageYOffset)
    );
    return window.removeEventListener("scroll", windowScroll);
  }, []);

  return (
    <div className="app">
      <Navbar pageYOffset={yOffset} />
      <LandingPage />
      <SocialMedia pageYOffset={yOffset} />
      <AboutUs />
    </div>
  );
}

export default App;
