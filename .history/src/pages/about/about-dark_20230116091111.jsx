import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services/services";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
// import SkillsCircle from "../../components/Skills-circle/skills-circle";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/Index";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import Team from "../../components/Team2/team2";
import MinimalArea from "../../components/Minimal-Area/minimal-area";
import AboutMe from "../../components/About-header/Index";

const About = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <AboutMe />
      <PagesHeader />
      {/* <AboutIntro /> */}
      {/* <Services style="4item" /> */}
      {/* <VideoWithTestimonials /> */}
      {/* <SkillsCircle from="aboutPage" /> */}
      {/* <Team /> */}
      <MinimalArea />
      <Team />
      {/* <Clients theme="dark" /> */}
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};

export default About;
