/* eslint-disable @next/next/no-img-element */
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
    }
    renderArrows = () => {
        return (
            <div className="arrows">
                <div className="container">
                    <div
                        onClick={() => this.slider.slickNext()}
                        className="next cursor-pointer"
                    >
                        <span className="pe-7s-angle-right"></span>
                    </div>
                    <div
                        onClick={() => this.slider.slickPrev()}
                        className="prev cursor-pointer"
                    >
                        <span className="pe-7s-angle-left"></span>
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <section
                className={`testimonials ${this.props.withIMG
                    ? "section-padding bg-img"
                    : this.props.withCOLOR
                        ? "section-padding back-color"
                        : this.props.noPadding ? ""
                            : "section-padding"
                    } ${this.props.classText ? this.props.classText : ""}`}
                style={{
                    backgroundImage: `${this.props.withIMG ? "url(/img/testim-img.jpg)" : "none"
                        }`,
                }}
            >
                {this.props.showHead && (
                    <div className="container">


                        <div className="row justify-content-center">


                            <div className="col-lg-8 col-md-10">
                                <div className="sec-head  text-center">
                                    <h6 className="wow fadeIn" data-wow-delay=".5s"> What clients are saying about me </h6>
                                    {/* <h3 className="wow color-font">
                    We love our clients from all over the world.
                  </h3> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="container-fluid position-re">

                    <div className="sec-head  text-center">
                        <h6 className="wow fadeIn" data-wow-delay=".5s">
                            Testimonials
                        </h6>
                        <h5 className="wow color-font"> What clients are saying about me </h5>
                    </div>


                    <div className="row wow fadeInUp" data-wow-delay=".5s">
                        <div className="col-lg-12">
                            <Slider
                                className="slic-item"
                                {...{
                                    ref: (c) => (this.slider = c),
                                    dots: false,
                                    infinite: true,
                                    arrows: true,
                                    centerMode: true,
                                    autoplay: true,
                                    rows: 1,
                                    slidesToScroll: 1,
                                    slidesToShow: 3,
                                    responsive: [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false,
                                            },
                                        },
                                        {
                                            breakpoint: 767,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false,
                                            },
                                        },
                                        {
                                            breakpoint: 480,
                                            settings: {
                                                slidesToShow: 1,
                                                centerMode: false,
                                            },
                                        },
                                    ],
                                }}
                            >
                                <div className="item">
                                    <div className="info valign">
                                        <div className="cont">
                                            <div className="author">
                                                <div className="img">
                                                    <img src="/img/clients/1.jpg" alt="" />
                                                </div>
                                                <h6 className="author-name color-font">  Junior Kayu  </h6>
                                                {/* <span className="author-details">
                          Co-founder, Colabrio
                        </span> */}
                                            </div>
                                        </div>
                                    </div>
                                    <span> I would highly recommended you to work with chadrack. I worked with chadrack on my business website  </span>
                                </div>
                                <div className="item">
                                    <div className="info valign">
                                        <div className="cont">
                                            <div className="author">
                                                <div className="img">
                                                    <img src="/img/clients/1.jpg" alt="" />
                                                </div>
                                                <h6 className="author-name color-font"> John Muleka </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <span>  I would highly recommended you to work with chadrack. I worked with chadrack on my business website  </span>
                                </div>
                                <div className="item">
                                    <div className="info valign">
                                        <div className="cont">
                                            <div className="author">
                                                <div className="img">
                                                    <img src="/img/clients/1.jpg" alt="" />
                                                </div>
                                                <h6 className="author-name color-font">  Patrick Nkulu </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <span>  I would highly recommended you to work with chadrack. I worked with chadrack on my business website  </span>
                                </div>
                                <div className="item">
                                    <div className="info valign">
                                        <div className="cont">
                                            <div className="author">
                                                <div className="img">
                                                    <img src="/img/clients/1.jpg" alt="" />
                                                </div>
                                                <h6 className="author-name color-font">  Jean jacque </h6>
                                            </div>
                                        </div>
                                    </div>
                                    <span>   I would highly recommended you to work with chadrack. I worked with chadrack on my business website  </span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    {this.renderArrows()}
                </div>

                <div className="d-flex justify-content-center mt-4">
                    <button type="submit" className="butn color  mt-4">
                        <span> Leave a comment </span>
                    </button>
                </div>

            </section>
        );
    }
}

export default Testimonials;
