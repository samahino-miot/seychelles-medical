import bgtopleft2 from "../images/bg-top-left2.png";
export default function Prices() {
  return (
    <div
      className="section bg-norepeat bg-md-none section-top-padding"
      style={{ backgroundImage: `url(${bgtopleft2})` }}
    >
      <div className="container">
        <div className="title-wrap text-center">
          <h2
            className="h1 double-title double-title--center double-title--vcenter"
            data-title="Price Packages"
          >
            <span>Price Packages</span>
          </h2>
          <div className="h-decor"></div>
        </div>
        <div className="row justify-content-center prices-carousel js-prices-carousel mt-2">
          <div className="col-sm-6 col-md-4">
            <div className="prices-box prices-box--style2">
              <h4 className="prices-box-title">Healthy Days Special</h4>
              <div className="prices-box-text">Includes: 76 Parametersl</div>
              <div className="prices-box-price">
                <sub>$</sub>24<sub>.99</sub>
              </div>
              <div className="prices-box-row">Blood Glucose Fasting</div>
              <div className="prices-box-row">Complete Hemogram</div>
              <div className="prices-box-row">Kidney Function Test</div>
              <div className="prices-box-link">
                <a href="form-payonline.html" className="btn">
                  <i className="icon-right-arrow"></i>
                  <span>booking now</span>
                  <i className="icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="prices-box prices-box--style2 prices-box--special">
              <h4 className="prices-box-title">OnePlusOne Extended</h4>
              <div className="prices-box-text">Includes: 74 Parametersl</div>
              <div className="prices-box-price">
                <sub>$</sub>89<sub>.99</sub>
              </div>
              <div className="prices-box-row">Blood Glucose Fasting</div>
              <div className="prices-box-row">Complete Hemogram</div>
              <div className="prices-box-row">Kidney Function Test</div>
              <div className="prices-box-link">
                <a
                  href="form-payonline.html"
                  className="btn btn-white btn-white--all"
                >
                  <i className="icon-right-arrow"></i>
                  <span>booking now</span>
                  <i className="icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="prices-box prices-box--style2">
              <h4 className="prices-box-title">Basic Screening</h4>
              <div className="prices-box-text">Includes: 60 Parametersl</div>
              <div className="prices-box-price">
                <sub>$</sub>49<sub>.99</sub>
              </div>
              <div className="prices-box-row">Blood Glucose Fasting</div>
              <div className="prices-box-row">Complete Hemogram</div>
              <div className="prices-box-row">Kidney Function Test</div>
              <div className="prices-box-link">
                <a href="form-payonline.html" className="btn">
                  <i className="icon-right-arrow"></i>
                  <span>booking now</span>
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
