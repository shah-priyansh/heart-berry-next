import Link from "next/link";
import React, { useEffect } from "react";
import Blog from "../../components/Blog/Blog";
import { clients_review, latest_blog } from "../../constant/data";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "assets/js/theme-script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <section className="banner p-0 pos-r fullscreen-banner home-bg">
        <div
          className="banner-slider owl-carousel no-pb"
          data-dots="false"
          data-nav="true"
        >
          <div
            className="item hero-overlay"
            data-bg-img="assets/images/bg/01.jpeg"
            data-overlay="6"
          >
            <div className="align-center pt-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 col-12">
                    <h1 className="mb-4 text-black">
                      Welcome To <span className="text-theme">Heartberry</span>{" "}
                      Overseas
                    </h1>
                    <p className="lead font-w-5 text-black">
                      Your Gateway to good health. We're not just a pharmacy;
                      We're your healthcare partner. With a commitment to
                      quality, affordability, and convenience, we deliver
                      pharmaceutical solutions that put your well-being first.
                      Trust us for a healthier, happier life.
                    </p>
                    <div className="btn-box mt-5">
                      <Link className="btn btn-theme" href="/about">
                        <span>More About</span>
                      </Link>
                      <Link className="btn btn-dark" href="#">
                        <span>Our Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="item hero-overlay"
            data-bg-img="assets/images/bg/02.jpeg"
            data-overlay="6"
          >
            <div className="align-center pt-0">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-10 col-12">
                    <h1 className="mb-4 text-black">
                      Your Health Is{" "}
                      <span className="text-theme">Our Priority</span>
                    </h1>
                    <p className="lead font-w-5 text-black">
                      Your gateway to good health. We're not just a pharmacy;
                      we're your healthcare partner. With a commitment to
                      quality, affordability, and convenience, we deliver
                      pharmaceutical solutions that prioritize your well-being.
                      Trust us for a healthier, happier life.
                    </p>
                    <div className="btn-box mt-5">
                      <Link className="btn btn-theme" href="/about">
                        <span>More About</span>
                      </Link>
                      <Link className="btn btn-dark" href="#">
                        <span>Our Services</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="featured-item style-1 h-100">
                  <div className="featured-icon">
                    <i
                      className="flaticon-laboratory-1"
                      alt="High Quality Medicines Icon"
                    ></i>
                  </div>
                  <div className="featured-title">
                    <h2>High Quality Medicines</h2>
                  </div>
                  <div className="featured-desc">
                    <p>
                      We prioritize the quality of our products to ensure
                      effective treatment and patient well-being.
                    </p>
                  </div>
                  <div className="featured-link">
                    <Link href="/quality-medicines">
                      Explore Our Quality Medicines
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
                <div className="featured-item style-1 active h-100">
                  <div className="featured-icon">
                    <i className="flaticon-laboratory"></i>
                  </div>
                  <div className="featured-title">
                    <h2>Shipping Worldwide</h2>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Our warehouses are strategically located worldwide to
                      ensure timely delivery. Your order is guaranteed to arrive
                      within the specified delivery time.
                    </p>
                  </div>
                  <div className="featured-link">
                    <Link href="/shipping">Explore Our Shipping Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                <div className="featured-item style-1 h-100">
                  <div className="featured-icon">
                    <i className="flaticon-biology-1"></i>
                  </div>
                  <div className="featured-title">
                    <h2>24/7 Our Team Works</h2>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Contact our dedicated team anytime with questions
                      regarding our products, delivery, or order status.
                    </p>
                  </div>
                  <div className="featured-link">
                    <Link href="/contact">Contact Us for Assistance</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                <div className="featured-item style-1 h-100">
                  <div className="featured-icon">
                    <i className="flaticon-help-call"></i>
                  </div>
                  <div className="featured-title">
                    <h2>Bonuses And Discounts</h2>
                  </div>
                  <div className="featured-desc">
                    <p>
                      Join our organization to enjoy exclusive bonuses on
                      advance orders.
                    </p>
                  </div>
                  <div className="featured-link">
                    <Link href="/bonuses">Learn About Our Bonuses</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-lg-5 col-12 order-lg-1">
                <img
                  className="img-fluid"
                  src="assets/images/about/global.jpg"
                  alt="Heartberry Overseas Around the Global"
                />
              </div>
              <div className="col-lg-7 col-12 mt-6 mt-lg-0">
                <div className="row align-items-end">
                  <div className="col-md-7">
                    <div className="section-title">
                      <h1 className="title">
                        Heartberry Overseas Around the Global
                      </h1>
                      <p className="text-black font-w-5 mb-3">
                        We're dedicated to your family's health and well-being.
                      </p>
                      <p>
                        Heartberry Overseas Pvt. Ltd. aims to become a
                        world-class pharmaceutical exporter in India. With
                        operations spanning over 40+ countries and 5+ continents
                        globally, we've grown significantly since our inception.
                      </p>
                    </div>
                    <Link className="btn btn-theme" href="/about">
                      <span>Learn More</span>
                    </Link>
                  </div>
                  <div className="col-md-5 mt-6 mt-md-0">
                    <p className="mb-4">
                      Our mission at Heartberry Overseas Pvt. Ltd. is to ensure
                      easy and widespread access to quality medicines for
                      patients.
                    </p>
                    <img
                      className="img-fluid"
                      src="assets/images/sign.png"
                      alt="Heartberry Overseas Sign"
                    />
                    <ul className="list-unstyled list-icon mt-4">
                      <li className="mb-3">
                        <i className="las la-check"></i>Exporting medicines to
                        40+ countries
                      </li>
                      <li className="mb-3">
                        <i className="las la-check"></i>200+ International
                        Products
                      </li>
                      <li>
                        <i className="las la-check"></i>Operations on 5
                        continents globally
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="position-relative light-bg">
          <div className="container z-index-1">
            <div className="row justify-content-center text-center">
              <div className="col-lg-7 col-12">
                <div className="section-title mb-3">
                  <h1 className="title mb-0">
                    Certain Services Tailored for You and Your Family Members!
                  </h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel"
                  data-items="3"
                  data-md-items="2"
                  data-sm-items="1"
                  data-xs-items="1"
                  data-margin="30"
                >
                  <div className="item">
                    <div className="service-item style-1">
                      <div className="service-img mx-4 z-index-1 overflow-hidden">
                        <img
                          className="img-fluid"
                          src="assets/images/service/01.jpeg"
                          alt="Excellence - Quality Tested Medicines"
                        />
                        <div className="service-icon">
                          <i className="flaticon-biology-1"></i>
                        </div>
                      </div>
                      <div className="service-desc white-bg mt-n5 pt-7">
                        <div className="service-title">
                          <h2>Excellence</h2>
                        </div>
                        <p>
                          Our Quality Tested Medicines: 2000+ products with
                          nearly 100% fulfillment rate. The most preferred
                          online pharmacy.
                        </p>
                        <Link className="link-btn" href="/service">
                          <i className="las la-long-arrow-alt-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                  <div className="service-item style-1">
                    <div className="service-img mx-4 z-index-1 overflow-hidden">
                      <img
                        className="img-fluid"
                        src="assets/images/service/03.jpeg"
                        alt="Pharmacy Service - 24/7 Professional Assistance"
                      />
                      <div className="service-icon">
                        <i className="flaticon-test"></i>
                      </div>
                    </div>
                    <div className="service-desc white-bg mt-n5 pt-7">
                      <div className="service-title">
                        <h2>Pharmacy</h2>
                      </div>
                      <p>
                        Enjoy 24/7 pharmacy services with our professional staff.
                      </p>{" "}
                      <Link className="link-btn" href="/pharmacy">
                        <i className="las la-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="service-item style-1 active">
                    <div className="service-img mx-4 z-index-1 overflow-hidden">
                      <img
                        className="img-fluid"
                        src="assets/images/service/02.jpeg"
                        alt="Delivery Guarantee - Hassle-Free Experience in 40+ Countries"
                      />
                      <div className="service-icon">
                        <i className="flaticon-research"></i>
                      </div>
                    </div>
                    <div className="service-desc white-bg mt-n5 pt-7">
                      <div className="service-title">
                        <h2>Delivery Guarantee</h2>
                      </div>
                      <p>
                        Hassle-free user experience for customers in 40+ countries.
                      </p>{" "}
                      <Link className="link-btn" href="/delivery-guarantee">
                        <i className="las la-long-arrow-alt-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-1 overflow-hidden bottom">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,96L21.8,112C43.6,128,87,160,131,154.7C174.5,149,218,107,262,90.7C305.5,75,349,85,393,122.7C436.4,160,480,224,524,234.7C567.3,245,611,203,655,165.3C698.2,128,742,96,785,85.3C829.1,75,873,85,916,117.3C960,149,1004,203,1047,229.3C1090.9,256,1135,256,1178,234.7C1221.8,213,1265,171,1309,154.7C1352.7,139,1396,149,1418,154.7L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>
        <section className="p-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="white-bg p-5 z-index-1">
                  <div className="row">
                    <div className="col-lg-3 col-sm-6">
                      <div className="counter d-flex">
                        <div className="counter-icon me-3">
                          {" "}
                          <i className="flaticon-medical-laboratory-1"></i>
                        </div>
                        <div className="counter-desc">
                          {" "}
                          <span
                            className="count-number text-black"
                            data-to="200"
                            data-speed="2000"
                          >
                            2000 +
                          </span>
                          <h6>Excellence</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-5 mt-sm-0">
                      <div className="counter d-flex">
                        <div className="counter-icon me-3">
                          {" "}
                          <i className="flaticon-heathcare-and-medical"></i>
                        </div>
                        <div className="counter-desc">
                          {" "}
                          <span
                            className="count-number text-black"
                            data-to="40"
                            data-speed="2000"
                          >
                            40
                          </span>
                          <h6>Delivery Guarantee</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                      <div className="counter d-flex">
                        <div className="counter-icon me-3">
                          {" "}
                          <i className="flaticon-pharmacy"></i>
                        </div>
                        <div className="counter-desc">
                          {" "}
                          <span
                            className="count-number text-black"
                            data-to="6000"
                            data-speed="2000"
                          >
                            6000
                          </span>
                          <h6>Happy Clients</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mt-5 mt-lg-0">
                      <div className="counter d-flex">
                        <div className="counter-icon me-3">
                          {" "}
                          <i className="flaticon-award"></i>
                        </div>
                        <div className="counter-desc">
                          {" "}
                          <span
                            className="count-number text-black"
                            data-to="28"
                            data-speed="2000"
                          >
                            28
                          </span>
                          <h6>Awards Winning</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0 mt-n6">
          <div className="container-fluid ps-0">
            <div className="row">
              <div className="col-lg-7 col-md-10 col-11">
                <div
                  className="dark-bg p-lg-7 p-4 pb-10 custom-pt-1"
                  data-bg-img="assets/images/pettern/02.png"
                >
                  <div className="section-title ms-md-5 innovative-content">
                    <h2 className="title">
                      Pharmacy With Innovative Approach To Treatment
                    </h2>
                    <p className="lead text-light">
                      Customer Satisftaction is very important to us and we
                      achieve this by Providing quality Product on Time and at
                      reasonable price. We guarantee that the quality permeates
                      all Product at all stages od devlopment, manufacture,
                      storage, sale, distribution, ect. We are committed to
                      building and maintaining strong relationships with our
                      Customers around the world. This has established us as a
                      trusted exporter with service around the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 pe-md-0">
                <div className="light-bg p-5 z-index-1 mt-n7">
                  <div className="ht-progress-bar mb-4">
                    <h4>Environmental Testing</h4>
                    <div className="progress" data-value="85">
                      <div className="progress-bar">
                        <div className="progress-parcent">
                          <span>85</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ht-progress-bar mb-4">
                    <h4>Immune system</h4>
                    <div className="progress" data-value="75">
                      <div className="progress-bar">
                        <div className="progress-parcent">
                          <span>75</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ht-progress-bar mb-4">
                    <h4>Advanced Microscopy</h4>
                    <div className="progress" data-value="95">
                      <div className="progress-bar">
                        <div className="progress-parcent">
                          <span>95</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ht-progress-bar">
                    <h4>Management</h4>
                    <div className="progress" data-value="80">
                      <div className="progress- bar">
                        <div className="progress-parcent">
                          <span>80</span>%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-10 col-12 ms-auto ps-0">
                <div className="position-relative overflow-hidden img-border mt-n15 custom-mt-0">
                  <img
                    className="img-fluid w-100"
                    src="assets/images/about/02.jpeg"
                    alt=""
                  />
                  <div className="video-btn video-btn-pos">
                    {" "}
                    <Link
                      className="play-btn popup-youtube mr-3"
                      href="https://www.youtube.com/watch?v=P_wKDMcr1Tg"
                    >
                      <i className="las la-play"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel no-pb"
                  data-dots="false"
                  data-items="6"
                  data-md-items="4"
                  data-sm-items="3"
                  data-xs-items="2"
                  data-margin="20"
                  data-autoplay="true"
                >
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/09.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/10.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/11.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/12.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/13.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/14.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/15.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="client-logo">
                      <img
                        className="img-fluid"
                        src="assets/images/clients/16.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <div className="section-title">
                  <h2 className="title">
                    We've Done A Lot's, Let's Check Some
                    <br />
                    Our Latest Research
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel no-pb popup-gallery"
                  data-dots="false"
                  data-items="5"
                  data-md-items="3"
                  data-sm-items="2"
                  data-xs-items="1"
                  data-margin="10"
                >
                  <div className="item">
                    <div className="cases-item position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/product/01.jpg"
                        alt=""
                      />
                      <Link
                        className="popup-img"
                        href="assets/images/project/large/01.jpg"
                      >
                        {" "}
                        <i className="las la-plus"></i>
                      </Link>
                      <div className="cases-title">
                        {" "}
                        <span>Pathology</span>
                        <h4>
                          <Link href="research-single.html">
                            Personnel Competence
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/product/02.jpg"
                        alt=""
                      />
                      <Link
                        className="popup-img"
                        href="assets/images/project/large/02.jpg"
                      >
                        {" "}
                        <i className="las la-plus"></i>
                      </Link>
                      <div className="cases-title">
                        {" "}
                        <span>Pathology</span>
                        <h4>
                          <Link href="research-single.html">
                            Personnel Competence
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/product/03.jpg"
                        alt=""
                      />
                      <Link
                        className="popup-img"
                        href="assets/images/project/large/03.jpg"
                      >
                        {" "}
                        <i className="las la-plus"></i>
                      </Link>
                      <div className="cases-title">
                        {" "}
                        <span>Pathology</span>
                        <h4>
                          <Link href="research-single.html">
                            Personnel Competence
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/product/04.jpg"
                        alt=""
                      />
                      <Link
                        className="popup-img"
                        href="assets/images/project/large/04.jpg"
                      >
                        {" "}
                        <i className="las la-plus"></i>
                      </Link>
                      <div className="cases-title">
                        {" "}
                        <span>Pathology</span>
                        <h4>
                          <Link href="research-single.html">
                            Personnel Competence
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="cases-item position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src="assets/images/product/05.jpg"
                        alt=""
                      />
                      <Link
                        className="popup-img"
                        href="assets/images/project/large/05.jpg"
                      >
                        {" "}
                        <i className="las la-plus"></i>
                      </Link>
                      <div className="cases-title">
                        {" "}
                        <span>Pathology</span>
                        <h4>
                          <Link href="research-single.html">
                            Personnel Competence
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="theme-bg py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 col-12">
                <h3 className="text-light">
                  Need a Help for Check-up? Call for an Emergency Laboratory
                  Services
                </h3>
              </div>
              <div className="col-md-5 col-12 ms-auto mt-3 mt-lg-0">
                <div className="d-flex align-items-start justify-content-end">
                  <div className="text-white text-end">
                    {" "}
                    <span>Help Desk 24/7</span>
                    <h3 className="font-w-4">
                      <Link
                        className="text-decoration-underline text-white"
                        href="tel:+(91)9854499900"
                      >
                        +91 9854499900
                      </Link>
                    </h3>
                  </div>{" "}
                  <span className="white-bg d-inline-block p-2 ms-4">
                    <i className="las la-phone ic-3x text-theme"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-12">
                <div className="section-title">
                  <h2 className="title">Why People Trust Us</h2>
                  <p className="lead">
                    “It’s our mission to find the best and most reliable
                    suppliers and manufacturers. We value our customers and the
                    community we already built!”
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="owl-carousel no-pb client_reviecontent"
                  data-dots="false"
                  data-items="3"
                  data-xl-items="2"
                  data-md-items="2"
                  data-sm-items="1"
                  data-xs-items="1"
                  data-margin="24"
                  data-autoplay="true"
                >
                  {clients_review.map((props, i) => {
                    return (
                      <div key={i} className="item">
                        <div className="border rounded p-4 h-100 ">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center gap-3 client-profile">
                              <div>
                                <img
                                  src={props.clients_img}
                                  className="rounded-circle"
                                  alt=""
                                />
                              </div>
                              <div>
                                <h6 className="font-w-6 mb-0">{props.name}</h6>
                                <p className="mb-0">{props.city}</p>
                              </div>
                            </div>
                            <img
                              src="assets/images/qutes.svg"
                              className=""
                              alt=""
                            />
                          </div>
                          <p className="pt-3 mb-0">{props.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="section-title text-center">
              <h2 className="title mb-0">Faq! Need Help ?</h2>
            </div>
            <div className="row align-items-center ">
              <div className="col">
                <div className="accordion " id="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button rounded-0"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What Is The Need Of Prescription ?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse border-0 collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        We require a prescription because they are considered to
                        be potentially harmful if not used under the supervision
                        of a licensed health care practitioner. A prescription
                        ensures that your treatment is monitored.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How Long Will It Take For The Medicine/drugs To Reach My
                        Home ?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Heartberryoverseas has been known for its reliable and
                        fast services for years. We can ship and easily deliver
                        the shipment all over the world without any hassle.
                        Domestic shipments will take 24 hours to 48 hours to
                        reach and International shipments will take 8-9 days. It
                        will be shipped by our trusted partners which are DHL,
                        EMS and FEDEX.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How To Make The Payment ?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Our Customer Care Executive Can Help You In Making The
                        Payments Or You Can Visit Our Page On How To Order And A
                        Small Questionnaire There To Get Your Answers.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I Visit Your Office ?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Yes, you can visit us anytime you feel. It is located in
                        Delhi, India. The complete information is provided on
                        the website. We are always happy to serve you.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        What Are The Contact Details?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        You can contact us at +91 9854499900 or drop your
                        inquiry at info@heartberryoverseas.com. We are
                        headquartered at Surat.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        Are There Any Hidden Charges?
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSix"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        There are NO hidden charges. During your conversation
                        with our representative, you will get to know about the
                        complete procedure and payment.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                      >
                        Where Can I Get Cheap Medicines?
                      </button>
                    </h2>
                    <div
                      id="collapseSeven"
                      className="accordion-collapse border-0 collapse"
                      aria-labelledby="headingSeven"
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        Visit www.heartberryoverseas.com to buy good quality
                        medicines at cheap prices. Get exclusive deals and
                        delivery at your doorstep.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-box text-center mt-4">
                  <Link className="btn btn-dark" href="/faq">
                    {" "}
                    <span>More Faq</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-0">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-12">
                <div className="section-title">
                  <h2 className="title">From our blog list Latest News</h2>
                  <p className="lead">
                    Our doctors include highly qualified male and female
                    practitioners who come from a range of backgrounds and bring
                    a diversity of skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="gap-4  blogs-content">
              <Blog blog_data={latest_blog} />
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-lg-8 col-12">
                <div className="section-title">
                  <h2 className="title mb-0">Send Enquiry</h2>
                </div>
              </div>
            </div>
            <form
              id="contact-form"
              className="row p-4 rounded mx-auto enquiry_content"
              method="post"
              action="php/contact.php"
            >
              <div id="formmessage"></div>
              <div className="form-group col-md-6">
                <label className="font-w-6 mb-1">Full Name</label>
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Your Name"
                  required="required"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="font-w-6 mb-1">Emial Address</label>
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Emial"
                  required="required"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="font-w-6 mb-1">Phone Number</label>
                <input
                  id="form_phone"
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter Your Phone Number"
                  required="required"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="font-w-6 mb-1">Choose Country</label>
                <select name="select" className="form-select form-control">
                  <option>Select Countries</option>
                  <option>Pathology</option>
                  <option>Diabetes</option>
                  <option>Chemical</option>
                </select>
              </div>
              <div className="form-group col-md-12">
                <label className="font-w-6 mb-1">Intrested Product</label>
                <input
                  id="form_intrestedproduct"
                  type="text"
                  name="intrestedproduct"
                  className="form-control"
                  placeholder="Enter Your Intrested Product"
                  required="required"
                />
              </div>
              <div className="form-group col-md-12">
                <label className="font-w-6 mb-1">Write a Massege</label>
                <textarea
                  id="form_message"
                  name="message"
                  className="form-control"
                  placeholder="Your Helth Condition..."
                  rows="3"
                  required="required"
                ></textarea>
              </div>
              <div className="col-md-12 text-center mt-4">
                <button className="btn btn-theme">
                  <span>Send Enquiry</span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
