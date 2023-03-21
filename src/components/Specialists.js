import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import specBgImg from "../images/bg-top-right.png";
import doctor01 from "../images/doctor-01.jpg";
import doctor02 from "../images/doctor-02.jpg";
import doctor03 from "../images/doctor-03.jpg";
import doctor04 from "../images/doctor-04.jpg";
import doctor05 from "../images/doctor-05.jpg";
import doctor06 from "../images/doctor-06.jpg";
export default function Specialists() {
  return (
    <div
      className="section bg-norepeat bg-right bg-md-none section-top-padding"
      style={{ backgroundImage: `url(${specBgImg})` }}
    >
      <div className="container">
        <div className="title-wrap text-center">
          <div className="h-sub theme-color">Perfect Team</div>
          <h1
            className="double-title double-title--center double-title--vcenter"
            data-title="Perfect Team"
          >
            <span>A Professional & Care Provider</span>
          </h1>
          <div className="h-decor"></div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          effect={"fade"}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          modules={[Navigation, Autoplay, Pagination]}
          className="row specialist-carousel js-specialist-carousel"
        >
          <SwiperSlide>
            <div className="position-relative category1">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor01} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Frank Bigham</a>
                  </h5>
                  <div className="doctor-box-position">Medical Director</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative category2">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor02} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Stuart Orozco</a>
                  </h5>
                  <div className="doctor-box-position">
                    Tissue Bank Director
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative category2">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor03} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Betty Bone</a>
                  </h5>
                  <div className="doctor-box-position">Embryologist</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative category1">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor04} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Robert Rush</a>
                  </h5>
                  <div className="doctor-box-position">Psychiatrist</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative category1">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor05} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Terri Williams</a>
                  </h5>
                  <div className="doctor-box-position">Psychiatrist</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="position-relative category2">
              <div className="doctor-box doctor-box-style3 text-center">
                <div className="doctor-box-photo">
                  <a href="doctor-page.html">
                    <img src={doctor06} className="img-fluid" alt="" />
                  </a>
                  <div className="doctor-box-links">
                    <a href="#">
                      <i className="icon-facebook-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-google-logo"></i>
                    </a>
                    <a href="#">
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="doctor-box-top">
                  <h5 className="doctor-box-name">
                    <a href="doctor-page.html">Dr. Berry Gardner</a>
                  </h5>
                  <div className="doctor-box-position">Cardiolog</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
