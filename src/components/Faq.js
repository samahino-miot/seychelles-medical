import bannerLeft from "../images/banner-left.jpg";
export default function Faq() {
  return (
    <div className="section mt-lg-large">
      <div className="row">
        <div className="col-lg-6">
          <div className="container-shift-left mb-3 mb-md-4">
            <div className="title-wrap text-center text-lg-left">
              <h2
                className="h1 double-title double-title--vcenter"
                data-title="FAQ"
              >
                <span>
                  Patient <span className="theme-color">Information</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="image-shift-right">
            <img src={bannerLeft} alt="" className="w-md-100" />
            <div className="over-image-card pos-right">
              <div className="over-image-card-icon">
                <i className="icon-card"></i>
              </div>
              <div className="over-image-card-text">
                <h4>Pay Online</h4>
                <p>
                  Online Payment for Patients. For your convenience MedLab now
                  offers the ability to make a secure payment online.
                </p>
                <a
                  href="form-payonline.html"
                  className="btn btn-white btn-white--all"
                >
                  <i className="icon-right-arrow"></i>
                  <span>pay online</span>
                  <i className="icon-right-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-wrap-bg">
            <div className="faq-wrap faq-wrap--pad-md">
              <h2 className="h1 bg-title">Questions</h2>
              <div className="nav nav-pills nav-pills--noborder" role="tablist">
                <a
                  className="nav-link active"
                  data-toggle="pill"
                  href="#tab-A1"
                  role="tab"
                >
                  <i className="icon-labinstrument"></i>General
                </a>
                <a
                  className="nav-link"
                  data-toggle="pill"
                  href="#tab-B1"
                  role="tab"
                >
                  <i className="icon-billing"></i>Billing Questions
                </a>
                <a
                  className="nav-link"
                  href="#"
                  data-toggle="modal"
                  data-target="#modalQuestionForm"
                >
                  <i className="icon-question"></i>Ask Question
                </a>
              </div>
              <div id="tab-content-2" className="tab-content mt-2">
                <div
                  id="tab-A1"
                  className="tab-pane fade show active"
                  role="tabpanel"
                >
                  <div
                    id="faqAccordion1"
                    className="faq-accordion faq-accordion--style2"
                    data-children=".faq-item"
                  >
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion1"
                        href="#faqItem1"
                        aria-expanded="true"
                      >
                        <span>1.</span>
                        <span>How long does my eye exam take?</span>
                      </a>
                      <div
                        id="faqItem1"
                        className="collapse show faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            A typical eye exam take 1-1.5 hours because we do a
                            comprehensive, dilated eye exam. This includes:
                            dilation, tonometry (a measurement of eye pressure),
                            visual field test (a measurement of peripheral
                            vision) and visual acuity test (a measurement of
                            distance vision).
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion1"
                        href="#faqItem2"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>2.</span>
                        <span>How affordable are your services?</span>
                      </a>
                      <div
                        id="faqItem2"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion1"
                        href="#faqItem3"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>3.</span>
                        <span>
                          Where can I find out more about specific conditions?
                        </span>
                      </a>
                      <div
                        id="faqItem3"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion1"
                        href="#faqItem4"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>4.</span>
                        <span>
                          Which consultants work in the general ophthalmology
                          service?
                        </span>
                      </a>
                      <div
                        id="faqItem4"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-B1" className="tab-pane fade" role="tabpanel">
                  <div
                    id="faqAccordion2"
                    className="faq-accordion faq-accordion--style2"
                    data-children=".faq-item"
                  >
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion2"
                        href="#faqItem21"
                        aria-expanded="true"
                      >
                        <span>1.</span>
                        <span>How can I improve my oral hygiene?</span>
                      </a>
                      <div
                        id="faqItem21"
                        className="collapse show faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion2"
                        href="#faqItem22"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>2.</span>
                        <span>How do I know if my teeth are healthy?</span>
                      </a>
                      <div
                        id="faqItem22"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion2"
                        href="#faqItem23"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>3.</span>Why are regular dental assessments so
                        important?
                      </a>
                      <div
                        id="faqItem23"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="faq-item">
                      <a
                        data-toggle="collapse"
                        data-parent="#faqAccordion2"
                        href="#faqItem24"
                        aria-expanded="false"
                        className="collapsed"
                      >
                        <span>4.</span>
                        <span>How often 1 should I visit my dentist?</span>
                      </a>
                      <div
                        id="faqItem24"
                        className="collapse faq-item-content"
                        role="tabpanel"
                      >
                        <div>
                          <p>
                            Everyone’s needs are different, so have a chat to
                            your dentist about how often you need to have your
                            teeth checked by them based on the condition of your
                            mouth, teeth and gums. It’s recommended that
                            children see their dentist at least once a year.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
