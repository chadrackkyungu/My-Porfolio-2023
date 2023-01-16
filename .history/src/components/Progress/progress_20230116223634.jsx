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
              <h5 className="color-font"> 4 Step to Complete Projects </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="item text-center md-mb50">
              <h5>  1. Planning </h5>
              <span>Research & Ideation</span>
              <p>
                In this phase i define the scope of the application and create a plan around how to achieve it.
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center md-mb50">
              <h5>Step 02</h5>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center">
              <h5>Step 03</h5>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="item text-center">
              <h5>Step 04</h5>
              <p>
                Sorem ipsum dolor sit amet consectetur adipiscing elit seddo
                eiusmod tempor incididunt
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
