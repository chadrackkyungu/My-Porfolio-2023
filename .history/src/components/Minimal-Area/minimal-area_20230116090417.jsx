/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 valign">
            <div className="content pt-0">
              <h4 className="wow color-font"> <span className="color-font"> Bio. </span></h4>
              <p>
                <span className="color-font"> Chadrack Kyungu  </span> is a full-stack developer with over <span className="color-font"> 3 years </span> of experience in the tech industry. I'm specialized in creating user-friendly, reliable and secure websites, web applications and mobile applications, while developing with an eye towards quality of the output and high standard code. Throughout my career, I have worked with some of the biggest Freelancing platform in the world like <span className="color-font">  Upwork </span>, as well as numerous smaller businesses and startup company like  <span className="color-font"> TNGSolutions </span>  for a year and half. I'm passionate about staying ahead of the curve when it comes to the latest technologies and trends, allowing me to deliver results that meet the highest standards of quality.
              </p>

              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Quality
                  </h6>
                  <p>
                    I'm an experienced team leader and project manager with a passion for enabling teams to work together efficiently and accomplish great things. I have over 2 years of experience working with teams in the technology and business fields, and creating productive environments in order to foster collaboration and motivation. My commitment to cultivating strong and dynamic teams has enabled me to effectively manage change, manage conflicts and foster open communication. I have also been successful in developing an environment which encourages learning and growth while empowering team members to reach their potential. In addition to my team-leading skills, I am also highly experienced in managing projects and timelines, as well as tracking and analyzing progress. My project management abilities have resulted in successful and timely execution of strategies, as well as customer satisfaction.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> My Goals
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why me?
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
