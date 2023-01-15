/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
    return (
        <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="item md-mb50">
                            <div className="title mb-4">
                                <h6>Contact me using the following details</h6>
                            </div>
                            <ul>
                                <li>
                                    <span className="icon pe-7s-map-marker"></span>
                                    <div className="cont">
                                        <h6>Home Address</h6>
                                        <p> 21 Doris street berea johannesburg SA </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon pe-7s-mail"></span>
                                    <div className="cont">
                                        <h6>Email me</h6>
                                        <p>chadrackkyungu624@gmail.com </p>
                                    </div>
                                </li>
                                <li>
                                    <span className="icon pe-7s-call"></span>
                                    <div className="cont">
                                        <h6>Calls & Whatsapp me</h6>
                                        <p>(+27) 680 275 001</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>



                    <div className="col-lg-3">
                        <div className="title mb-4">
                            <h6>Navigation</h6>
                        </div>
                        <ul className="item">
                            <li> <Link href="/about/about-dark"> About </Link> </li>
                            <li> <Link href="/works2/works2-dark"> My projects </Link> </li>
                            <li> <Link href="blog-grid/blog-grid-dark"> My blogs </Link> </li>
                            <li> <Link href="/contact/contact-dark"> Contact </Link> </li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <div className="title mb-4">
                            <h6> You can also find me on :</h6>
                        </div>
                        <div className="item">
                            <div className="logo">
                                {/* <img src={appData.lightLogo} alt="" /> */}

                            </div>
                            <div className="social">
                                <a href="#0">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#0">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="#0">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href="#0">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="#0">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
