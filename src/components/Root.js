import React, { useEffect, useState } from "react";
export default function Root() {
  const [roots, setRoots] = useState(null);
  useEffect(() => {
    fetch(
      "http://miot-seychelles-medical.sc/backend-getAPI/wp-json/wp/v2/pages/5"
    )
      .then((response) => response.json())
      .then((data) => setRoots(data));
  }, []);
  console.log(roots);
  if (!roots) {
    return (
      <div class="loading-content">
        <div class="loader-miot-medical">
          <column>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
          </column>
          <column>
            <dash></dash>
            <dash></dash>
            <dash></dash>
            <dash></dash>
            <dash></dash>
            <dash></dash>
            <dash></dash>
            <dash></dash>
          </column>
          <column>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
            <dot></dot>
          </column>
        </div>
      </div>
    );
  }
  return (
    <div
      className="section bg-bottom bg-right bg-norepeat bg-md-none bg-fixed section-bottom-padding section-top-padding"
      style={{ backgroundImage: `url(${roots.acf.about_bg_1})` }}
    >
      <div className="container">
        <div className="row mt-lg-4">
          <div className="col-md-6 col-xl-6 pr-xl-7">
            <div className="department-tabs2">
              <div className="department-tab2">
                <div className="department-tab2-number">1</div>
                <div
                  className="department-tab2-text"
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_box_1,
                  }}
                />
                <div className="department-tab2-decor"></div>
              </div>
              <div className="department-tab2">
                <div className="department-tab2-number">2</div>
                <div
                  className="department-tab2-text"
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_box_2,
                  }}
                />
                <div className="department-tab2-decor"></div>
              </div>
              <div className="department-tab2">
                <div className="department-tab2-number">3</div>
                <div
                  className="department-tab2-text"
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_box_3,
                  }}
                />
                <div className="department-tab2-decor"></div>
              </div>
              <div className="department-tab2">
                <div className="department-tab2-number">4</div>
                <div
                  className="department-tab2-text"
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_box_4,
                  }}
                />
                <div className="department-tab2-decor"></div>
              </div>
            </div>
            <div className="department-tabs2-bg">
              <img src={roots.acf.about_bg_2} alt="" />
            </div>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="department-carousel2">
              <div className="department-item">
                <div
                  className="h-sub theme-color"
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_title,
                  }}
                />
                <h2
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_sub_title,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: roots.acf.about_us_description,
                  }}
                />
                <a
                  href="#"
                  className="btn mt-3"
                  data-toggle="modal"
                  data-target="#modalBookingForm"
                >
                  <i className="icon-right-arrow"></i>
                  <span>schedule a visit</span>
                  <i className="icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
