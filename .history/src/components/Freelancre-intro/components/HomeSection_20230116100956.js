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
                            <h6 className="cd-headline clip">
                                Hello, my name is Chadrack, and I'm an experienced full-stack developer who specializes in combining expert front-end and back-end solutions in order to bring powerful, dependable websites and apps to life. I have years of experience creating projects for major brands and companies of all sizes, and have an eye for creating intuitive and user-friendly designs. Aside from my technical expertise, I'm also passionate about sustainability and developing in a way that reduces the carbon footprint of the production process. I'm an advocate for socially responsible development practices, and have extensive experience in creating projects that promote sustainability and minimize energy consumption. I believe in using technology for good, and strive to make positive impacts in the world through my work.
                                <span
                                    style={{ fontSize: "35px", lineHeight: "49px" }}
                                    className="cd-words-wrapper"
                                >
                                    <Typewriter
                                        options={{
                                            wrapperClassName: "color-font fw-600",
                                            strings: [
                                                "Mobile Apps",
                                                "Landing Pages",
                                                "Awesome Design",
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
                            </h6>
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
