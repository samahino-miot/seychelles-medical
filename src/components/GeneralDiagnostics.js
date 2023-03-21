import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";
import bgMap from "../images/bg-map.png";
import img01 from "../images/index-img-01.jpg";
import img012 from "../images/index-img-01-2.jpg";
import img013 from "../images/index-img-01-3.jpg";
import img014 from "../images/index-img-01-4.jpg";
import img015 from "../images/index-img-01-5.jpg";
import img016 from "../images/index-img-01-6.jpg";

export default function GeneralDiagnostics() {
  return (
    <div className="section bg-grey mt-md-0">
      <div className="container">
        <div className="title-wrap text-center">
          <h2
            className="h1 double-title double-title--white double-title--center double-title--vcenter"
            data-title="General Tests"
          >
            <span>
              General<span className="clearfix d-sm-none"></span> Diagnostic
              Tests
            </span>
          </h2>
          <div className="h-decor"></div>
        </div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          navigation={true}
          loop={true}
          modules={[Navigation]}
          className="nav nav-pills-icons js-nav-pills-carousel"
          role="tablist"
        >
          <SwiperSlide>
            <a
              className="nav-link active"
              data-toggle="pill"
              href="#tab-A"
              role="tab"
            >
              <i className="icon-molecular"></i>
              <span>Molecular Testing & Oncology</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-B" role="tab">
              <i className="icon-testtube2"></i>
              <span>Histology</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-C" role="tab">
              <i className="icon-micro"></i>
              <span>
                General Diagnostic
                <br />
                Tests
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-D" role="tab">
              <i className="icon-testtube"></i>
              <span>
                Naturopathic
                <br />
                Tests
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-E" role="tab">
              <i className="icon-chromosome"></i>
              <span>Genetics Tests</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-F" role="tab">
              <i className="icon-dropper"></i>
              <span>Cytology</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-H" role="tab">
              <i className="icon-molecular"></i>
              <span>Molecular Testing & Oncology</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-I" role="tab">
              <i className="icon-testtube2"></i>
              <span>Histology</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-J" role="tab">
              <i className="icon-micro"></i>
              <span>
                General Diagnostic
                <br />
                Tests
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-K" role="tab">
              <i className="icon-testtube"></i>
              <span>
                Naturopathic
                <br />
                Tests
              </span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-L" role="tab">
              <i className="icon-chromosome"></i>
              <span>Genetics Tests</span>
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a className="nav-link" data-toggle="pill" href="#tab-M" role="tab">
              <i className="icon-dropper"></i>
              <span>Cytology</span>
            </a>
          </SwiperSlide>
        </Swiper>
        <div id="tab-content" className="tab-content mt-2 mt-sm-4">
          <div id="tab-A" className="tab-pane fade show active" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img01} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>Molecular Testing & Oncology</h3>
                  <p>
                    Our comprehensive and highly sensitive and specific range of
                    tests can detect genetic alterations that drive tumor growth
                    in all types of cancer. We are highly experienced in
                    characterizing mechanisms of action of targeted therapies,
                    particularly against epidermal growth factor receptor
                    (EGFR), as well as other tyrosine kinase inhibitors. We
                    perform:
                  </p>
                  <ul className="marker-list-md">
                    <li>Mutation analysis in tumor tissue and blood</li>
                    <li>Gene amplification and translocation testing</li>
                    <li>Immunohistochemistry (IHC)</li>
                    <li>Gene expression</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-B" className="tab-pane fade" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img012} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>Histology</h3>
                  <p>
                    Our SANAS accredited histology laboratory offers a
                    diagnostic service to both the private and public sectors.
                    Our large team of anatomical pathologists, technologists and
                    technicians, with vast amounts of experience offers a
                    diagnostic and consultative service on a number of tissue
                    samples including biopsies and resection specimens.
                  </p>
                  <ul className="marker-list-md">
                    <li>Immunocytochemistry</li>
                    <li>Immunofluorescence</li>
                    <li>Electron Microscopy</li>
                    <li>Neuropathology</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-C" className="tab-pane fade" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img013} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>General Diagnostic Tests</h3>
                  <p>
                    We are an industry leader in ensuring exceptional quality
                    testing in our state-of-the-art facilities. Diagnostic tests
                    are used to detect, confirm, or rule out the presence of a
                    disease or medical condition. They can be used to screen for
                    certain conditions in people who are at increased risk; to
                    evaluate the effects of treatment; or to monitor disease
                    progression.
                  </p>
                  <ul className="marker-list-md">
                    <li>Complete blood counts</li>
                    <li>Anticoagulant Therapy Monitoring</li>
                    <li>Blood Chemistry Analyses</li>
                    <li>Therapeutic drug monitoring</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-D" className="tab-pane fade" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img014} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>Naturopathic Tests</h3>
                  <p>
                    We will perform both standard and specialized naturopathic
                    lab tests as part of the assessment process. Naturopathic
                    doctors can order many of the same diagnostic tests as your
                    family physician, such as blood work, stool, urine, and
                    saliva testing. We can also perform an H Pylori Breath Test,
                    Stool Ova and Parasite testing.
                  </p>
                  <ul className="marker-list-md">
                    <li>Gastrointestinal Testing</li>
                    <li>Laboratory Tests on Hormonal Levels</li>
                    <li>Cardiovascular Lab Tests</li>
                    <li>Toxins & Pollutant Testing</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-E" className="tab-pane fade" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img015} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>Genetics Tests</h3>
                  <p>
                    Genes are DNA instructions that we all inherit from our
                    parents. Different “mistakes” in our genes, called
                    mutations, can cause different diseases. Some of these
                    diseases are rare, like cystic fibrosis or Huntington’s
                    disease, others are common, like cancer. Genetic tests can
                    be used to confirm the diagnosis or give you information
                    about possible development of a disease.
                  </p>
                  <ul className="marker-list-md">
                    <li>PCR</li>
                    <li>DNA Sequencing</li>
                    <li>Cytogenetics (Karyotyping and FISH)</li>
                    <li>Microarrays</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-F" className="tab-pane fade" role="tabpanel">
            <div className="tab-bg">
              <img src={bgMap} alt="" />
            </div>
            <div className="row">
              <div className="col-md-6 h-100 mb-2 mb-md-0">
                <img src={img016} alt="" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <div className="pt-xl-1">
                  <h3>Cytology</h3>
                  <p>
                    Aside from tissue biopsy, cytology serves as an
                    indispensable tool in screening and diagnosing cancer. In
                    this technique, a cytological material is obtained from the
                    patient, spread onto glass slides for microscopic
                    examination, stained, screened for abnormalities and
                    assessed prior to the issuance of a final report.
                  </p>
                  <ul className="marker-list-md">
                    <li>Gynaecological Cytology</li>
                    <li>Non-Gynaecological Cytology</li>
                    <li>Fine Needle Aspiration Cytology</li>
                    <li>BAL Differential Cell Count</li>
                  </ul>
                  <a
                    href="#"
                    className="btn mt-3"
                    data-toggle="modal"
                    data-target="#modalBookingForm"
                  >
                    <i className="icon-right-arrow"></i>
                    <span>order test</span>
                    <i className="icon-right-arrow"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
