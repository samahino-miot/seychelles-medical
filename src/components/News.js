import bright from "../images/banner-right.jpg";
import news01 from "../images/news-01.jpg";
import news02 from "../images/news-02.jpg";
import news03 from "../images/news-03.jpg";
export default function News() {
  return (
    <div className="section">
      <div className="row no-gutters row-shift">
        <div className="col-lg-6 col-shift-right">
          <div className="container-shift-left">
            <div className="title-wrap">
              <h2
                className="double-title double-title--white double-title--vcenter"
                data-title="News"
              >
                <span>News & Events</span>
              </h2>
            </div>
            <div className="blog-post-sm-vertical">
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news01} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Mar 16, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Biochemical Receptor Reverses Bone Degradation Caused by
                      Osteoporosis
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news02} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Mar 28, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Ammonia Fuel Cell is More Powerful, Cost-Effective Than
                      Hydrogen
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news03} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Apr 16, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Nanopore Optofluidic Device Controls Delivery of
                      Individual Biomolecules
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-post-sm-carousel js-blog-grid-carousel-full">
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news01} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Mar 16, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Biochemical Receptor Reverses Bone Degradation Caused by
                      Osteoporosis
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news02} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Mar 28, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Ammonia Fuel Cell is More Powerful, Cost-Effective Than
                      Hydrogen
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
              <div className="blog-post-sm">
                <div className="blog-post-sm-photo">
                  <img src={news03} alt="" className="img-fluid" />
                </div>
                <div className="blog-post-sm-text">
                  <div className="blog-post-sm-date">Apr 16, 2020</div>
                  <div className="blog-post-sm-title">
                    <a href="blog-post-page.html">
                      Nanopore Optofluidic Device Controls Delivery of
                      Individual Biomolecules
                    </a>
                  </div>
                  <a
                    href="blog-post-page.html"
                    className="blog-post-sm-readmore"
                  >
                    ...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-shift-left mt-4 mt-md-5 mt-lg-2">
          <div className="container-shift-right">
            <div className="title-wrap text-center text-md-left">
              <h2 className="h1">
                Our <span className="theme-color">Achievements</span>
              </h2>
            </div>
          </div>
          <div className="mt-2 mt-md-3 mt-lg-4">
            <img src={bright} alt="" className="w-sm-100" />
            <div className="over-image-counter pos-left">
              <div className="d-flex w-100 justify-content-between">
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to="150" data-speed="1500">
                      0
                    </span>
                    <span className="sup">K</span>
                  </div>
                  <div className="counter-box-sm-text">Tests Performed</div>
                </div>
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to="50" data-speed="1500">
                      0
                    </span>
                    <span className="sup">+</span>
                  </div>
                  <div className="counter-box-sm-text">Permanent Staff</div>
                </div>
                <div className="counter-box-sm">
                  <div className="counter-box-sm-number">
                    <span className="count" data-to="250" data-speed="1500">
                      0
                    </span>
                    <span className="sup">+</span>
                  </div>
                  <div className="counter-box-sm-text">Suppliers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
