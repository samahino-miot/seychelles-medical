import React from "react";
import Logo from "./Logo";
import "../css/slick.css";
import "../css/animate.min.css";
import "../css/icon-style.css";
import "../css/bootstrap-datetimepicker.css";
import "../css/style.css";
import "../css/color.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header-top-links header-top-links-toggle d-lg-none">
        <div className="header-top-links-inner header-top-links-inner-sec"></div>
        <div className="header-top-links-inner-second"></div>
      </div>
      <div className="header-topline d-none d-lg-flex">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-auto d-flex align-items-center">
              <div className="header-info">
                <i className="icon-mapmarker"></i>F38 & G7, Espace Building, Ile
                Du Port, Mahe, Seychelles
              </div>
              <div className="header-phone">
                <i className="icon-telephone"></i>
                <a href="tel:+248 4303 525">+248 4303 525</a>
              </div>
              <div className="header-info">
                <i className="icon-black-envelope"></i>
                <a href="mailto:chief@miotinternational.com">
                  chief@miotinternational.com
                </a>
              </div>
            </div>
            <div className="col-auto ml-auto d-flex align-items-center">
              <span className="header-social">
                <a href="#" className="hovicon">
                  <i className="icon-facebook-logo-circle"></i>
                </a>
                <a href="#" className="hovicon">
                  <i className="icon-twitter-logo-circle"></i>
                </a>
                <a href="#" className="hovicon">
                  <i className="icon-google-plus-circle"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="container">
          <div className="row align-items-lg-center">
            <button
              className="navbar-toggler collapsed"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
            >
              <span className="icon-menu"></span>
            </button>
            <div className="col-lg-auto col-lg-2 d-flex align-items-lg-center">
              <a href="index.html" className="header-logo">
                <Logo />
              </a>
            </div>
            <div className="col-lg ml-auto header-nav-wrap">
              <div className="header-nav js-header-nav">
                <nav className="navbar navbar-expand-lg btco-hover-menu">
                  <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarNavDropdown"
                  >
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="about.html">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="services.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Services
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="services.html">
                              All Services
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="service-page.html"
                            >
                              Service Page
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="prices.html">
                              Prices
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="shop-listing.html"
                            >
                              Online Shop
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="gallery.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Smiles Gallery
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="gallery.html">
                              Creative Gallery
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="gallery-simple.html"
                            >
                              Simple Gallery
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a
                          href="our-specialist.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Our Specialists
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href="our-specialist.html"
                            >
                              All Specialists
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="doctor-page.html"
                            >
                              Doctor Page
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="schedule.html">
                              Schedule Table
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="testimonials.html">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          href="blog.html"
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Blog
                        </a>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="blog.html">
                              Blog Posts
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="blog-grid.html">
                              Blog Grid Posts
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="blog-post-page.html"
                            >
                              Blog Single Post
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                          Contacts
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
