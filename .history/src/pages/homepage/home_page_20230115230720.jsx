import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Index";
import DarkTheme from "../../layouts/Dark";
import HomeSection from "../../components/Freelancre-intro/Index";
import Services from "../../components/Services5/services5";
import Projects from "../../components/Work-section/Index";
import Skills from "../../components/Skills/Index";
import Testimonials from "../../components/Full-testimonials/Index";
import Blogs from "../../components/blogs/Blogs2/blogs2";
import ContactForm from "../../components/s-contact-form/Index";

const Homepage = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
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
      <Navbar nr={navbarRef} lr={logoRef} />
      <HomeSection />
      <Services />
      <Projects />
      <Skills />
      <Testimonials showHead />
      <Blogs />
      <ContactForm noLine />
      <Footer />
    </DarkTheme>
  );
};

export default Homepage;
