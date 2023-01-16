/* eslint-disable @next/next/no-img-element */
import React from "react";
import Typewriter from "typewriter-effect";

const FreelancreIntro = () => {
    return (
        <header className="freelancre valign">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="img">
                            <img src="/img/hero.jpg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-8 valign">
                        <div className="cont">
                            <h4 className="cd-headline clip">
                                Hello 👋 , my name is <span className="color-font">Chadrack   </span>💻, and I'm an experienced full-stack <span className="color-font">JS</span> developer specialized in combining expert front-end and back-end solutions in order to bring top quality
                                <span
                                    style={{ fontSize: "35px", lineHeight: "49px" }}
                                    className="cd-words-wrapper"
                                >
                                    <Typewriter
                                        options={{
                                            wrapperClassName: "color-font fw-600",
                                            strings: [
                                                "UI/UX design",
                                                "Websites design",
                                                "Web Apps",
                                                "Mobile Apps",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                        loop={true}
                                        onInit={(typewriter) => {
                                            typewriter;
                                        }}
                                    />
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="states">
                    <div className="container">
                        <ul className="flex">
                            <li className="flex">
                                <div className="numb valign">
                                    <h3>03</h3>
                                </div>
                                <div className="text valign">
                                    <p>
                                        Years <br /> Of Experience
                                    </p>
                                </div>
                            </li>

                            <li className="flex">
                                <div className="numb valign">
                                    <h3>10+</h3>
                                </div>
                                <div className="text valign">
                                    <p>
                                        Projects Completed
                                    </p>
                                </div>
                            </li>

                            <li className="mail-us">
                                <a href="mailto:your@email.com?subject=Subject">
                                    <div className="flex">
                                        <div className="text valign">
                                            <div className="full-width">
                                                <p>Get In Touch</p>
                                                <h6>chadrackkyungu624@Gmail.com</h6>
                                            </div>
                                        </div>
                                        <div className="mail-icon">
                                            <div className="icon-box">
                                                <span className="icon color-font pe-7s-mail"></span>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="line bottom left"></div>
        </header>
    );
};

export default FreelancreIntro;
