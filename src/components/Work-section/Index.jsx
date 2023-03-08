/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Badge, Button } from 'reactstrap';
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import { FaReact, FaNodeJs, FaPhp, FaLaravel } from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

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
              <div className="sec-head  text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h5 className="wow color-font"> Checkout some of  my past project </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">

          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">  All </span>
              <span data-filter=".web">Web application</span>
              <span data-filter=".brand">Website design & UI/UX</span>
              <span data-filter=".graphic">Mobile application</span>
            </div>
          </div>

          <div className="gallery full-width">

            {/* <div className="col-md-4 items brand  lg-mr wow fadeInUp" data-wow-delay=".4s"> */}
            <div className="col-md-4 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6> Palm tree  </h6>
                  {/* <p> Figma design dashboard </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/palm-tree-1.PNG" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View project details</Link> </span> */}
                  <span>  <Link href="https://group-kemmb.vercel.app/">View</Link> </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 items brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6> Giantech Solar panel </h6>
                  {/* <p>  Landing page solar company website </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Giant-tech-1.PNG" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View project details</Link>  </span> */}
                  <span>  <Link href="https://giantech.co.za/">View</Link>  </span>
                </div>
              </div>
            </div>

            











            <div className="col-md-4 items web  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6> E-commerce </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/E-commerce-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://buy-and-sell-react.vercel.app/home">View</Link>  </span>
                </div>
              </div>
            </div>




            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6> Genious Calculus </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Genious-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>  <Link href="https://www.geniouscalculus.co.za">View </Link>  </span>
                </div>
              </div>
            </div>





            
            <div className="col-md-4 items web  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Payroll system </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/payroll-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View project details</Link>  </span> */}
                  <span>  <Link href="https://payroll-f0e4f.web.app/login">View</Link>  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 items web  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Tutoring system </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Tutoring-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View project details</Link>  </span> */}
                  <span>  <Link href="https://29-tutoring.vercel.app/login">View project details</Link>  </span>
                </div>
              </div>
            </div>

            <div className="col-md-4 items web  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Event Streaming  </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/showbay24.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View project details</Link>  </span> */}
                  <span>  <Link href="https://event.showbay24.com/login">View</Link>  </span>
                </div>
              </div>
            </div>

           






            <div className="col-md-4 items web  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6> Property Management </h6>
                  {/* <p> Mobile app for managing a unit </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    {/* <img src="/img/portfolio/freelancer/2.jpg" alt="image" /> */}
                    <img src="/img/portfolio/freelancer/faspro24-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://webapp.faspro24.com/login">View</Link>  </span>
                </div>
              </div>
            </div>







            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  <h6>Loan Finance </h6>
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Ritike-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://ritikefinance.vercel.app/">View</Link>  </span>
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
