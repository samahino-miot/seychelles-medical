import bgImage from "../images/bg-top-left.png";
import servImage from "../images/index-img-02.jpg";
export default function Services() {
  return (
    <div
      className="section bg-norepeat bg-md-none section-top-padding"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container-fluid px-0 over-visible">
        <div className="row">
          <div className="col-lg-6">
            <div className="services-tab-wrap float-right">
              <div className="title-wrap-alt text-center text-md-left">
                <div className="h-sub theme-color">What we Offer</div>
                <h2
                  className="h1 double-title double-title--top-md"
                  data-title="Services"
                >
                  <span>
                    Other Laboratory{" "}
                    <span className="theme-color">Services</span>
                  </span>
                </h2>
              </div>
              <p>
                Results of test procedures processed on site are reported to the
                health care provider the same day during regular business hours.
                Testing and services available through our Laboratory include:
              </p>
              <div className="row">
                <div className="col-sm-auto">
                  <ul className="marker-list-md">
                    <li>Blood Bank / Transfusion</li>
                    <li>Immunology and Flow Cytometry</li>
                    <li>Reference Lab Testing referrals</li>
                    <li>Chemistry</li>
                    <li>Hematology</li>
                    <li>Histology</li>
                    <li>Serology</li>
                  </ul>
                </div>
                <div className="col-sm-auto mt-1 mt-md-0">
                  <ul className="marker-list-md">
                    <li>Point-of-Care Testing</li>
                    <li>Microbiology and Virology</li>
                    <li>Molecular Pathology</li>
                    <li>Bone Marrow Biopsy</li>
                    <li>Coagulation</li>
                    <li>Pathology & Cytology</li>
                    <li>Urinalysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 position-relative">
            <div className="ml-xl-6">
              <img src={servImage} className="w-sm-100" alt="" />
            </div>
            <div className="over-image-card pos-left">
              <div className="over-image-card-icon">
                <i className="icon-download"></i>
              </div>
              <div className="over-image-card-text">
                <h4>Download Forms</h4>
                <p>
                  We have request forms available for diagnostics that list the
                  test panels and individual markers currently available.
                </p>
                <a
                  href="form-download.html"
                  className="btn btn-white btn-white--all"
                >
                  <i className="icon-right-arrow"></i>
                  <span>download forms</span>
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
