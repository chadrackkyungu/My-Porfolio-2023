/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../../common/initIsotope";
import { Badge } from "react-bootstrap";


const ProjectBox = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section
      className={`${grid ? (grid === 3 ? "three-column" : null) : null
        } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  My projects
                </h6>
                <h3 className="wow color-font">
                  My Recent Projects & Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${filterPosition === "center"
                ? "text-center"
                : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
                } col-12  d-flex justify-content-center`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".web">Web application</span>
                <span data-filter=".brand">Website design & UI/UX</span>
                <span data-filter=".graphic">Mobile application</span>
              </div>
            </div>
          )}

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


                <Link href={`https://www.figma.com/file/7aE32zt342JhPe6TPfGOcx/E-COMMERCE?node-id=0-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/Ritike-1.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/7aE32zt342JhPe6TPfGOcx/E-COMMERCE?node-id=0-1">View</Link>  </span>
                </div>
              </div>
            </div>



            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  {/* <h6> UI Figma Design </h6> */}
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                {/* <Link href={`/project-details2/project-details2-dark`}> */}
                <Link href={`https://www.figma.com/file/j5QMfF1QxHGYEbUP3fDbeK/SCHOOL-MANAGEMENT?node-id=0%3A1&t=mvdh7SlavgWprZtP-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-8.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/j5QMfF1QxHGYEbUP3fDbeK/SCHOOL-MANAGEMENT?node-id=0%3A1&t=mvdh7SlavgWprZtP-1">View</Link>  </span>
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
                <Link href={`https://www.figma.com/file/QMVD8EGkC0IYmWBbuYA7GM/RITIKE-LOANS?node-id=0-1&t=UEFa9oHkk4PobVL1-0`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-2.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/QMVD8EGkC0IYmWBbuYA7GM/RITIKE-LOANS?node-id=0-1&t=UEFa9oHkk4PobVL1-0">View</Link>  </span>
                </div>
              </div>
            </div>



            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  {/* <h6>Loan Finance </h6> */}
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`https://www.figma.com/file/tUyaJ7D91JdjLrk2sKjElu/PROJECT-X?node-id=0%3A1&t=fhCktqD16H8fPULH-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-3.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/j5QMfF1QxHGYEbUP3fDbeK/SCHOOL-MANAGEMENT?node-id=0%3A1&t=mvdh7SlavgWprZtP-1">View</Link>  </span>
                </div>
              </div>
            </div>


            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  {/* <h6>Loan Finance </h6> */}
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`https://www.figma.com/file/tAOX593NtUSswnXB4pG9Od/FASPRO?node-id=0%3A1&t=7sfwcw1LR9nFtZAC-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-5.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/tAOX593NtUSswnXB4pG9Od/FASPRO?node-id=0%3A1&t=7sfwcw1LR9nFtZAC-1">View</Link>  </span>
                </div>
              </div>
            </div>


            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  {/* <h6>Loan Finance </h6> */}
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`https://www.figma.com/file/YW5IgGUhihXWeaL5jxi14P/STEP-2---Admin-View-(Community)?node-id=0%3A1&t=NHKE4dSxpWU2bppX-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-4.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/YW5IgGUhihXWeaL5jxi14P/STEP-2---Admin-View-(Community)?node-id=0%3A1&t=NHKE4dSxpWU2bppX-1">View</Link>  </span>
                </div>
              </div>
            </div>



            <div className="col-md-4 items brand  wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">
                <div className="cont">
                  {/* <h6>Loan Finance </h6> */}
                  {/* <p> Web application </p> */}
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {/* <Badge color="primary"> New </Badge> */}
                  {/* <small className="text-muted">2023-05-09</small> */}
                </div>
                <Link href={`https://www.figma.com/file/BVYdFcv6egQ31et7Afdxqf/Showbay24?node-id=0%3A1&t=yr1BEkcv2u6bsm4r-1`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/figma-7.png" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  {/* <span>  <Link href="/works2/works2-dark">View</Link>  </span> */}
                  <span>  <Link href="https://www.figma.com/file/BVYdFcv6egQ31et7Afdxqf/Showbay24?node-id=0%3A1&t=yr1BEkcv2u6bsm4r-1">View</Link>  </span>
                </div>
              </div>
            </div>


          </div>






          {/* <div className="gallery full-width">
                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items graphic wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/1.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>Creativity Demand</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items web wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/2.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>Through The Breaking</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items brand wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/3.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>Create With Creatives</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items graphic wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/4.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>Energies of Love</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items web wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/5.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>See It Yourself</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>

                        <div
                            className={`${grid === 3
                                ? "col-lg-4 col-md-6"
                                : grid === 2
                                    ? "col-md-6"
                                    : "col-12"
                                } items brand wow fadeInUp`}
                            data-wow-delay=".4s"
                        >
                            <div className="item-img">
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="imago wow">
                                        <img src="/img/portfolio/portfolio/1/6.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                            </div>
                            <div className="cont">
                                <h6>Blast From The Past</h6>
                                <span>
                                    <Link href="/works3/works3-dark">Design</Link>,
                                    <Link href="/works3/works3-dark">WordPress</Link>
                                </span>
                            </div>
                        </div>
                    </div> */}









        </div>
      </div>
    </section>
  );
};

export default ProjectBox;
