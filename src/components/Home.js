import React, { Component } from "react";

import developer from "../assets/img/developer.png";

class Home extends Component {
  render() {
    return (
      <div id="hero-area" className="hero-area-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="contents text-center">
                <h2 className="head-title wow fadeInUp">
                  We Discover, Design & Build Digital
                  <br />
                  Presence of Businesses
                </h2>
              </div>
              <div
                className="img-thumb text-center wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <img className="img-fluid" src={developer} alt="hero" />
              </div>
              <div className="header-button wow fadeInUp" data-wow-delay="0.3s">
                <a href="/#services" className="btn btn-common">
                  Explore
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
