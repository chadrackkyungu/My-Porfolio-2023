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
                                } col-12`}
                        >
                            <div className="filter">
                                <span data-filter="*" className="active">
                                    All
                                </span>
                                <span data-filter=".brand">Branding</span>
                                <span data-filter=".web">Mobile App</span>
                                <span data-filter=".graphic">Creative</span>
                            </div>
                        </div>
                    )}





                    <div className="gallery full-width">

                        {/* <div className="col-md-4 items brand  lg-mr wow fadeInUp" data-wow-delay=".4s"> */}
                        <div className="col-md-4 items brand wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <div className="cont">
                                    <h6> Loan Finances  </h6>
                                    <p> Figma design dashboard </p>
                                </div>
                                <div className="mb-2 d-flex justify-content-between">
                                    <Badge color="primary"> New </Badge>
                                    <small className="text-muted">2023-05-09</small>
                                </div>
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="rota">
                                        <img src="/img/portfolio/freelancer/1.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                                {/* <small className="text-muted">Technology used</small> */}
                                {/* <div className="mt-2 d-flex justify-content-between">
                  <Button color="info"> <FaReact />  </Button>
                  <Button color="primary"> <BsBootstrap />  </Button>
                  <Button color="warning"> <SiNextdotjs />  </Button>
                  <Button color="success"> <FaNodeJs />  </Button>
                  <Button color="dark"> <SiExpress />  </Button>
                </div> */}
                                <div className="tags">
                                    <span>  <Link href="/works2/works2-dark">View project details</Link> </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 items web wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <div className="cont">
                                    <h6> Giantech Solar panel </h6>
                                    <p>  Landing page solar company website </p>
                                </div>
                                <div className="mb-2 d-flex justify-content-between">
                                    <Badge color="primary"> New </Badge>
                                    <small className="text-muted">2023-05-09</small>
                                </div>
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="rota">
                                        <img src="/img/portfolio/freelancer/2.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                                {/* <small className="text-muted">Technology used</small> */}
                                {/* <div className="mt-2 d-flex">
                  <Button color="info"> <FaReact />  </Button>
                  <Button color="primary mx-2"> <BsBootstrap />  </Button>
                </div> */}
                                <div className="tags">
                                    <span>  <Link href="/works2/works2-dark">View project details</Link>  </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 items graphic  wow fadeInUp" data-wow-delay=".4s">
                            <div className="item-img">
                                <div className="cont">
                                    <h6> Tenant management </h6>
                                    <p> Mobile app for managing a unit </p>
                                </div>
                                <div className="mb-2 d-flex justify-content-between">
                                    <Badge color="primary"> New </Badge>
                                    <small className="text-muted">2023-05-09</small>
                                </div>
                                <Link href={`/project-details2/project-details2-dark`}>
                                    <a className="rota">
                                        <img src="/img/portfolio/freelancer/2.jpg" alt="image" />
                                        <div className="item-img-overlay"></div>
                                    </a>
                                </Link>
                                {/* <small className="text-muted">Technology used</small> */}
                                {/* <div className="mt-2 d-flex justify-content-between">
                  <Button color="info"> <FaReact />  </Button>
                  <Button color="primary"> <BsBootstrap />  </Button>
                  <Button color="warning"> <FaPhp />  </Button>
                  <Button color="success"> <FaLaravel />  </Button>
                </div> */}
                                <div className="tags">
                                    <span>  <Link href="/works2/works2-dark">View project details</Link>  </span>
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
