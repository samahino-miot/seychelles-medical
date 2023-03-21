import bgbottomlft from "../images/bg-bottom-left2.png";
import bappntmt from "../images/banner-appointment.png";
export default function Contact() {
  return (
    <div
      className="section bg-norepeat bg-bottom bg-left bg-md-none bg-fixed section-bottom-padding-half section-top-padding"
      style={{ backgroundImage: `url(${bgbottomlft})` }}
    >
      <div className="banner-appointment-form">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm-5 col-lg-5 order-2 order-sm-2 mt-3 mt-md-0 text-center">
              <img
                src={bappntmt}
                alt=""
                className="banner-appointment-form-image"
              />
            </div>
            <div className="col-sm-7 col-lg-7 order-1 order-sm-1 d-flex">
              <div className="pt-2 pt-lg-6 px-lg-3 text-center">
                <div className="title-wrap-alt">
                  <h2
                    className="double-title double-title--vcenter double-title--center"
                    data-title="Appointment"
                  >
                    <span>
                      Make an <span className="theme-color">Appointment</span>
                    </span>
                  </h2>
                </div>
                <p>
                  We believe in providing the best possible care to all our
                  existing patients and welcome new patients to sample.
                </p>
                <form
                  className="contact-form"
                  id="contactForm"
                  method="post"
                  novalidate="novalidate"
                >
                  <div className="successform">
                    <p>Your message was sent successfully!</p>
                  </div>
                  <div className="errorform">
                    <p>
                      Something went wrong, try refreshing and submitting the
                      form again.
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your name*"
                    />
                  </div>
                  <div className="row row-sm-space mt-15">
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control"
                        name="phone"
                        placeholder="Your Phone"
                      />
                    </div>
                    <div className="col-sm-6 mt-15 mt-sm-0">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="mt-15">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="mt-2 mt-lg-4">
                    <button type="submit" className="btn">
                      <i className="icon-right-arrow"></i>
                      <span>Send request</span>
                      <i className="icon-right-arrow"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
