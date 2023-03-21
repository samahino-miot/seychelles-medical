import postauthor01 from "../images/footer-post-author-01.jpg";
import postauthor02 from "../images/footer-post-author-03.jpg";
import postauthor03 from "../images/footer-post-author-02.jpg";
export default function Footer() {
  return (
    <div className="footer mt-0">
      <div className="container">
        <div className="row py-1 py-md-2 px-lg-0">
          <div className="col-lg-4 footer-col1 pt-lg-3">
            <div className="row flex-column flex-md-row flex-lg-column">
              <div className="col-md">
                <div className="footer-text mt-1 mt-lg-1">
                  <h3>Connect With Us</h3>
                  <div className="h-decor"></div>
                </div>
                <div className="footer-social d-md-none d-lg-block">
                  <a
                    href="https://www.facebook.com/"
                    target="blank"
                    className="hovicon"
                  >
                    <i className="icon-facebook-logo"></i>
                  </a>
                  <a
                    href="https://www.twitter.com/"
                    target="blank"
                    className="hovicon"
                  >
                    <i className="icon-twitter-logo"></i>
                  </a>
                  <a
                    href="https://plus.google.com/"
                    target="blank"
                    className="hovicon"
                  >
                    <i className="icon-google-logo"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="blank"
                    className="hovicon"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h3>Blog Posts</h3>
            <div className="h-decor"></div>
            <div className="footer-post d-flex">
              <div className="footer-post-photo">
                <img src={postauthor01} alt="" className="img-fluid" />
              </div>
              <div className="footer-post-text">
                <div className="footer-post-title">
                  <a href="#">The doctor’s guide to healthy break...</a>
                </div>
                <p>September 26, 2018</p>
              </div>
            </div>
            <div className="footer-post d-flex">
              <div className="footer-post-photo">
                <img src={postauthor02} alt="" className="img-fluid" />
              </div>
              <div className="footer-post-text">
                <div className="footer-post-title">
                  <a href="#">So, how much sex is normal?</a>
                </div>
                <p>August 22, 2018</p>
              </div>
            </div>
            <div className="footer-post d-flex">
              <div className="footer-post-photo">
                <img src={postauthor03} alt="" className="img-fluid" />
              </div>
              <div className="footer-post-text">
                <div className="footer-post-title">
                  <a href="#">Tooth Fairy Traditions...</a>
                </div>
                <p>July 25, 2018</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <h3>Our Contacts</h3>
            <div className="h-decor"></div>
            <ul className="icn-list">
              <li>
                <i className="icon-mapmarker"></i>F38 & G7, Espace Building, Ile
                Du Port, Mahe, Seychelles
                <br />
                <a
                  href="https://goo.gl/maps/tLpfmAUoBqVA7kXR9"
                  className="btn btn-xs btn-gradient"
                  target="_blank"
                >
                  <i className="icon-mapmarker"></i>
                  <span>Get directions on the map</span>
                  <i className="icon-right-arrow"></i>
                </a>
              </li>
              <li>
                <i className="icon-telephone"></i>
                <b>
                  <span className="phone">
                    <span className="text-nowrap">+248 4303 525</span>,{" "}
                    <span className="text-nowrap">+248 2638 633</span>
                  </span>
                </b>
                <br />
                (24/7 General inquiry)
              </li>
              <li>
                <i className="icon-black-envelope"></i>
                <a href="mailto:chief@miotinternational.com">
                  chief@miotinternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row text-center text-md-left">
            <div className="col-sm">
              Copyright © 2023 <a href="#">MIOT International</a>
              <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
              <a href="#">Privacy Policy</a>
            </div>
            <div className="col-sm-auto ml-auto">
              <span className="d-none d-sm-inline">
                For emergency cases&nbsp;&nbsp;&nbsp;
              </span>
              <i className="fa fa-phone"></i>&nbsp;&nbsp;<b>+248 4303 525</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
