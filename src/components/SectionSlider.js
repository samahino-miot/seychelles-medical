import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";

import slide01 from "../images/slide-01.jpg";
import slide02 from "../images/slide-02.jpg";
import slide03 from "../images/slide-03.jpg";
export default function SectionSlider() {
  return (
    <div id="">
      <Swiper
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
        loop={true}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper main-slider mb-0 arrows-white arrows-bottom"
        id="mainSlider"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="img--holder">
              <img src={slide01} alt="slider" />
            </div>
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
                      <br />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="img--holder">
              <img src={slide02} alt="slider" />
            </div>
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
                      <br />
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
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide">
            <div className="img--holder">
              <img src={slide03} alt="slider" />
            </div>
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
                      <br />
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
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
