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
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content pt-0">
              <h4 className="wow color-font">About me.</h4>
              <p className="wow txt" data-splitting>
                As a full-stack JavaScript developer, I have years of experience developing intuitive and reliable websites and apps. I specialize in combining front-end and back-end expertise to create efficient, comprehensive solutions. My portfolio includes projects for major brands along with small businesses in a variety of industries. My ability to adapt quickly to ever-changing technologies allows me to take on any project, no matter how complex. I excel in understanding the needs of my clients and driving the development process from the initial concept design to finished product. In addition to my development work, I am deeply passionate about sustainability and developing in a way that reduces the carbon footprint of the production process. My commitment to socially responsible development practices has led to many successful projects that promote sustainability and minimize energy consumption.
              </p>

              <p>
                Chadrack Kyungu is a full-stack web developer with over 10 years of experience in the tech industry. He specializes in creating user-friendly, reliable and secure websites and applications, while developing with an eye towards energy efficiency and sustainability. Throughout his career, Chadrack has worked with some of the biggest brands in the world, as well as numerous smaller businesses and startup. He is passionate about staying ahead of the curve when it comes to the latest technologies and trends, allowing him to deliver results that meet the highest standards of quality. He has a strong track record when it comes to social responsibility, and is an active advocate for reducing the carbon footprint of the development process. Chadrack is a driving force behind sustainable, energy-efficient projects and is passionate about using tech for good.
              </p>

              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> My Mission
                  </h6>
                  <p>
                    luctus massa ipsum at tempus eleifend congue lectus bibendum
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
