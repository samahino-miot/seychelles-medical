import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import testiBgImg from "../images/tesimonials-bg.png";
export default function Testimonials() {
  return (
    <div className="section bg-grey p-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="reviews-style4-wrap">
              <div className="reviews-style4">
                <div className="title-wrap">
                  <div className="h-sub theme-color">Testimonials</div>
                  <h2
                    className="h1 double-title double-title--white double-title--right"
                    data-title="Testimonials"
                  >
                    <span>
                      What Our
                      <br className="d-sm-none" />
                      Customers Say
                    </span>
                  </h2>
                </div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 12000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  modules={[EffectFade, Autoplay, Pagination]}
                  className="js-reviews-carousel2 reviews-carousel"
                >
                  <SwiperSlide>
                    <div className="review">
                      <p className="review-text">
                        “I have used Your services to have my PSA tests done. I
                        have found them to be helpful and professional in
                        performing the lab tests. They also have been prompt in
                        reporting the results back to me. It is nice to be able
                        to get the tests done without having to see a doctor
                        “for permission!” I recommend this service for those who
                        want to watch their own health as much as possible.”
                      </p>
                      <p>
                        <span className="review-author">- Joseph Dunbar,</span>{" "}
                        <span className="review-author-position">
                          Carpenter
                        </span>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review">
                      <p className="review-text">
                        “I have used Your services to have my PSA tests done. I
                        have found them to be helpful and professional in
                        performing the lab tests. They also have been prompt in
                        reporting the results back to me. It is nice to be able
                        to get the tests done without having to see a doctor
                        “for permission!” I recommend this service for those who
                        want to watch their own health as much as possible.”
                      </p>
                      <p>
                        <span className="review-author">- Steven Roa,</span>{" "}
                        <span className="review-author-position">
                          Businesswoman
                        </span>
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="review">
                      <p className="review-text">
                        “I have used Your services to have my PSA tests done. I
                        have found them to be helpful and professional in
                        performing the lab tests. They also have been prompt in
                        reporting the results back to me. It is nice to be able
                        to get the tests done without having to see a doctor
                        “for permission!” I recommend this service for those who
                        want to watch their own health as much as possible.”
                      </p>
                      <p>
                        <span className="review-author">
                          - Wilmer Stevenson,
                        </span>{" "}
                        <span className="review-author-position">
                          Creative manager
                        </span>
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="col-md-6 py-sm-3 px-md-4 px-xl-8">
            <div className="testimonials-bg-wrap">
              <img
                src={testiBgImg}
                alt=""
                className="reviews-style4-image-right"
              />
              <div className="testimonials-icon">
                <span>
                  <span>“</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
