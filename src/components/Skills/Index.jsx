/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutSkillsProgress from "../../common/aboutSkillsProgress";

const AboutUs5 = () => {
  React.useEffect(() => {
    aboutSkillsProgress(
      document.querySelector(".about-cr .skills-box"),
      document.querySelectorAll(".skill-progress .progres"),
      document.querySelector(".about-cr")
    );
  }, []);
  return (
    <section className="about-cr">
      <div className="container-fluid">
        <div className="sec-head  text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Skills
          </h6>
          <h5 className="wow color-font"> Skill Progress</h5>
        </div>
        <div className="row">
          <div className="col-lg-6 img md-mb50">
            <img src="/img/intro/6.jpg" alt="" />
          </div>
          <div className="col-lg-5 valign">
            <div className="cont full-width">
              <h3 className="color-font"> FullStack developer </h3>
              <h5 className="co-tit mb-15">  JavaScript master </h5>
              <p> I built top quality UI / UX design, websites, web apps, and mobile apps. </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">UI / UX Design</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="75%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Websites Development</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="98%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Web Apps</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="95%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h5 className="fz-14 mb-15">Mobile Apps</h5>
                  <div className="skill-progress">
                    <div className="progres" data-value="90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs5;
