import React, { useEffect, useState } from "react";
export default function Home() {
  const [homes, gethome] = useState([]);
  useEffect(() => {
    async function loadhome() {
      const response = await fetch(
        "http://miot-seychelles-medical.sc/backend-getAPI/wp-json/wp/v2/pages/5?_embed"
      );
      if (!response.ok) {
        return;
      }
      const homes = await response.json();
      gethome(homes);
      console.log(homes);
    }
    loadhome();
  }, []);
  return (
    <div>
      <div>{homes.title.rendered}</div>

      <div
        className="main-slider mb-0 arrows-white arrows-bottom"
        id="mainSlider"
        data-slick='{"arrows": false, "dots": true}'
      >
        <div className="slide">
          <div className="img--holder" data-bg="images/slide-01.jpg"></div>
          <div className="slide-content center">
            <div className="vert-wrap container">
              <div className="vert">
                <div className="container">
                  <div
                    className="slide-txt1 text-no-uppercase"
                    data-animation="fadeInDown"
                    data-animation-delay="1s"
                  >
                    Leading the Way
                    <b>in Laboratory Research</b>
                  </div>
                  <div
                    className="slide-txt2 text-no-uppercase"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    Advanced medicine. Compassionate care
                  </div>
                  <div className="slide-btn">
                    <a
                      href="services.html"
                      className="btn link-inside"
                      data-animation="fadeInUp"
                      data-animation-delay="2s"
                    >
                      <i className="icon-right-arrow"></i>
                      <span>Explore our services</span>
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="img--holder" data-bg="images/slide-02.jpg"></div>
          <div className="slide-content center">
            <div className="vert-wrap container">
              <div className="vert">
                <div className="container">
                  <div
                    className="slide-txt1 text-no-uppercase"
                    data-animation="fadeInDown"
                    data-animation-delay="1s"
                  >
                    We Provide
                    <b>Full Medical Care!</b>
                  </div>
                  <div
                    className="slide-txt2 text-no-uppercase"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    Highest standards of customer service
                  </div>
                  <div className="slide-btn">
                    <a
                      href="services.html"
                      className="btn link-inside"
                      data-animation="fadeInUp"
                      data-animation-delay="2s"
                    >
                      <i className="icon-right-arrow"></i>
                      <span>Know more</span>
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="img--holder" data-bg="images/slide-03.jpg"></div>
          <div className="slide-content center">
            <div className="vert-wrap container">
              <div className="vert">
                <div className="container">
                  <div
                    className="slide-txt1 text-no-uppercase"
                    data-animation="fadeInDown"
                    data-animation-delay="1s"
                  >
                    We Provide
                    <b>Full Medical Care!</b>
                  </div>
                  <div
                    className="slide-txt2 text-no-uppercase"
                    data-animation="fadeInUp"
                    data-animation-delay="1.5s"
                  >
                    Highest standards of customer service
                  </div>
                  <div className="slide-btn">
                    <i className="icon-right-arrow"></i>
                    <span>Know more</span>
                    <i className="icon-right-arrow"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section bg-bottom bg-right bg-norepeat bg-md-none bg-fixed section-bottom-padding section-top-padding">
        <div className="container">
          <div className="row mt-lg-4">
            <div className="col-md-6 col-xl-6 pr-xl-7">
              <div className="department-tabs2">
                <div className="department-tab2">
                  <div className="department-tab2-number">1</div>
                  <div className="department-tab2-text">Latest Equipment</div>
                  <div className="department-tab2-decor"></div>
                </div>
                <div className="department-tab2">
                  <div className="department-tab2-number">2</div>
                  <div className="department-tab2-text">Quality Service</div>
                  <div className="department-tab2-decor"></div>
                </div>
                <div className="department-tab2">
                  <div className="department-tab2-number">3</div>
                  <div className="department-tab2-text">Skilled Team</div>
                  <div className="department-tab2-decor"></div>
                </div>
                <div className="department-tab2">
                  <div className="department-tab2-number">4</div>
                  <div className="department-tab2-text">Positive Reviews</div>
                  <div className="department-tab2-decor"></div>
                </div>
              </div>
              <div className="department-tabs2-bg">
                <img src="images/bg-department.png" alt="" />
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="department-carousel2">
                <div className="department-item">
                  <div className="h-sub theme-color">About us</div>
                  <h2>
                    Personal Licensed Diagnostic{" "}
                    <span className="theme-color">Lab Services</span>
                  </h2>
                  <p>
                    We pride ourselves on the trained skills needed for the
                    preparation of diversified testing. We are of the sound
                    belief that timely diagnosis could cast off the scar of many
                    of the grave diseases. It can be made possible if you
                    consult your doctor for suspected diseases.
                  </p>
                  <ul className="marker-list-md">
                    <li>
                      All reports for clients are made simple and easy to
                      understand
                    </li>
                    <li>
                      User- friendly website offers custom settings for each
                      physician
                    </li>
                    <li>We customize panels to meet physician’s needs.</li>
                  </ul>

                  <i className="icon-right-arrow"></i>
                  <span>schedule a visit</span>
                  <i className="icon-right-arrow"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
