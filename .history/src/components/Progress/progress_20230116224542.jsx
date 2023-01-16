import React from "react";

const Progress = () => {
  return (
    <section className="app-process section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10">
            <div className="s-head text-center mb-80">
              <h6 className="stit mb-30">
                <span className="left"></span> Working Process
                <span className="right"></span>
              </h6>
              <h5 className="color-font"> The 4 Steps to my successful Projects </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item text-center md-mb50">
              <h5>  1. Planning </h5>
              <span className="color-font" my-30>Research & Ideation</span>
              <p>
                In this step i define the scope of the application and create a plan around how to achieve it.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center md-mb50">
              <h5> 2. Designing </h5>
              <span className="color-font" my-30> Design & Prototyping</span>
              <p>
                This is the step where i create user interfaces and user experience features that are attractive and engaging to both desktop and mobile users
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center">
              <h5>3. Developing </h5>
              <span className="color-font" my-30> Development & Testing  </span>
              <p>
                This is the step where i actually build the application according to the plan created in the first step
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center">
              <h5>Launching</h5>
              <span className="color-font" my-30>Deployment</span>
              <p>
                This is the final step where the application is tested, deployed to a hosting service and made available to users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
