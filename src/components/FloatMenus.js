export default function FloatMenus() {
  return (
    <div className="quickLinks-wrap js-quickLinks-wrap-d d-none d-lg-flex">
      <div className="quickLinks js-quickLinks closed">
        <div className="container">
          <div className="row no-gutters">
            <div className="col">
              <a href="#" className="link">
                <i className="icon-placeholder"></i>
                <span>Location</span>
              </a>
              <div className="link-drop p-0">
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1672.0652047751337!2d55.45678313692878!3d-4.618398341720277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x22e0298192fe4bc9%3A0xb57b34d50959fa8!2sEspace%20building!5e0!3m2!1sen!2sin!4v1677816004445!5m2!1sen!2sin"
                    width="100%"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col">
              <a href="#" className="link">
                <i className="icon-clock"></i>
                <span>Working Time</span>
              </a>
              <div className="link-drop">
                <h5 className="link-drop-title">
                  <i className="icon-clock"></i>Working Time
                </h5>
                <table className="row-table">
                  <tr>
                    <td>
                      <i>Mon-Thu</i>
                    </td>
                    <td>08:00 - 20:00</td>
                  </tr>
                  <tr>
                    <td>
                      <i>Friday</i>
                    </td>
                    <td> 07:00 - 22:00</td>
                  </tr>
                  <tr>
                    <td>
                      <i>Saturday</i>
                    </td>
                    <td>08:00 - 18:00</td>
                  </tr>
                  <tr>
                    <td>
                      <i>Sunday</i>
                    </td>
                    <td>Closed</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col">
              <a href="#" className="link">
                <i className="icon-pencil-writing"></i>
                <span>Request Form</span>
              </a>
              <div className="link-drop">
                <h5 className="link-drop-title">
                  <i className="icon-pencil-writing"></i>Request Form
                </h5>
                <form id="requestForm" method="post" novalidate>
                  <div className="successform">
                    <p>Your message was sent successfully!</p>
                  </div>
                  <div className="errorform">
                    <p>
                      Something went wrong, try refreshing and submitting the
                      form again.
                    </p>
                  </div>
                  <div className="input-group">
                    <span>
                      <i className="icon-user"></i>
                    </span>
                    <input
                      name="requestname"
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="row row-sm-space mt-1">
                    <div className="col">
                      <div className="input-group">
                        <span>
                          <i className="icon-email2"></i>
                        </span>
                        <input
                          name="requestemail"
                          type="text"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="input-group">
                        <span>
                          <i className="icon-smartphone"></i>
                        </span>
                        <input
                          name="requestphone"
                          type="text"
                          className="form-control"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="selectWrapper input-group mt-1">
                    <span>
                      <i className="icon-micro"></i>
                    </span>
                    <select name="requestservice" className="form-control">
                      <option selected="selected" disabled="disabled">
                        Select Service
                      </option>
                      <option value="Molecular Testing & Oncology">
                        Molecular Testing & Oncology
                      </option>
                      <option value="Histology">Histology</option>
                      <option value="General Diagnostic Tests">
                        General Diagnostic Tests
                      </option>
                      <option value="Naturopathic">Naturopathic</option>
                      <option value="Genetics Tests">Genetics Tests</option>
                      <option value="Cytology">Cytology</option>
                    </select>
                  </div>
                  <div className="row row-sm-space mt-1">
                    <div className="col-sm-6">
                      <div className="input-group flex-nowrap">
                        <span>
                          <i className="icon-calendar2"></i>
                        </span>
                        <div className="datepicker-wrap">
                          <input
                            name="requestdate"
                            type="text"
                            className="form-control datetimepicker"
                            placeholder="Date"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6 mt-1 mt-sm-0">
                      <div className="input-group flex-nowrap">
                        <span>
                          <i className="icon-clock"></i>
                        </span>
                        <div className="datepicker-wrap">
                          <input
                            name="requesttime"
                            type="text"
                            className="form-control timepicker"
                            placeholder="Time"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right mt-2">
                    <button type="submit" className="btn btn-sm btn-hover-fill">
                      Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col">
              <a href="#" className="link">
                <i className="icon-calendar"></i>
                <span>Doctors Timetable</span>
              </a>
              <div className="link-drop">
                <h5 className="link-drop-title">
                  <i className="icon-calendar"></i>Doctors Timetable
                </h5>
                <p>
                  This simply works as a guide and helps you to connect with
                  dentists of your choice. Please confirm the doctor’s
                  availability before leaving your premises.
                </p>
                <p className="text-right">
                  <a
                    href="#specialistsSection"
                    className="btn btn-sm btn-hover-fill link-inside"
                  >
                    Details
                  </a>
                </p>
              </div>
            </div>
            <div className="col">
              <a href="#" className="link">
                <i className="icon-price-tag"></i>
                <span>Calculator</span>
              </a>
              <div className="link-drop">
                <h5 className="link-drop-title">
                  <i className="icon-price-tag"></i>Quick Pricing
                </h5>
                <table className="row-table">
                  <tr>
                    <td>Initial Consultation</td>
                    <td>$10</td>
                  </tr>
                  <tr>
                    <td>Dental check-up</td>
                    <td>$15</td>
                  </tr>
                  <tr>
                    <td>Routine Exam (no xrays)</td>
                    <td>$50</td>
                  </tr>
                  <tr>
                    <td>Simple Removal of a tooth</td>
                    <td>$122</td>
                  </tr>
                  <tr>
                    <td>Teeth cleaning</td>
                    <td>$50 - $75</td>
                  </tr>
                  <tr>
                    <td>X-ray image</td>
                    <td>$10</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="col">
              <a href="#" className="link">
                <i className="icon-emergency-call"></i>
                <span>Emergency Case</span>
              </a>
              <div className="link-drop">
                <h5 className="link-drop-title">
                  <i className="icon-emergency-call"></i>Emergency Case
                </h5>
                <p>
                  Emergency care may be needed if you have had a blow to the
                  face, lost a filling, or cracked a tooth.{" "}
                </p>
                <ul className="icn-list">
                  <li>
                    <i className="icon-telephone"></i>
                    <span className="phone">
                      +248 4303 525
                      <br />
                      +248 2638 633
                    </span>
                  </li>
                  <li>
                    <i className="icon-black-envelope"></i>
                    <a href="mailto:chief@miotinternational.com">
                      chief@miotinternational.com
                    </a>
                  </li>
                </ul>
                <p className="text-right mt-2">
                  <a
                    href="#contactForm"
                    className="btn btn-sm btn-hover-fill link-inside"
                  >
                    Our Contacts
                  </a>
                </p>
              </div>
            </div>
            <div className="col col-close">
              <a href="#" className="js-quickLinks-close">
                <i
                  className="icon-top"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Close panel"
                ></i>
              </a>
            </div>
          </div>
        </div>
        <div className="quickLinks-open js-quickLinks-open">
          <span data-toggle="tooltip" data-placement="left" title="Open panel">
            +
          </span>
        </div>
      </div>
    </div>
  );
}
