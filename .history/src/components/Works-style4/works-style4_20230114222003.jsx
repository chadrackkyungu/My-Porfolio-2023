/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              {/* <h3 className="wow color-font">
                Our Recent Web Design & <br /> Some Past Projects.
              </h3> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">  All </span>
              <span data-filter=".brand">Web design(UI/UX)</span>
              <span data-filter=".web">Web application</span>
              <span data-filter=".graphic">Mobile application</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-md-6 items graphic brand lg-mr wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span> <Link href="https://github.com/chadrackkyungu">Get it on Github</Link>  </span>
                  <span>  <Link href="/works2/works2-dark">View project details</Link> </span>
                </div>
              </div>
            </div>

            <div className="col-md-6 items web wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span> <Link href="https://github.com/chadrackkyungu">Get it on Github</Link>  </span>
                  <span>  <Link href="/works2/works2-dark">View project details</Link>  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
