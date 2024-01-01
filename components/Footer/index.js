import Link from "next/link";
import React from "react";
import { icons, quicklinks, service } from "./data";

export default function Footer() {
  return (
    <>
      <footer className="footer light-bg">
        <div className="primary-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-4 col-12 white-bg p-4 p-md-6">
                <Link className="footer-logo" href="/">
                  <img
                    id="footer-logo"
                    className="img-fluid"
                    src="assets/images/logo.png"
                    alt=""
                  />
                </Link>
                <p className="my-4">
                  “Heartberry Overseas Private Limited” is a professionally
                  managed and dynamic organisation with decades of experience in
                  the pharmaceutical field. With a desire of providing
                  opportunities for a better life, we work very hard to bring
                  quality drugs to our customers. We have instilled a level of
                  trust and confidence amongst our clients by supplying the best
                  quality products..”
                </p>
                <div className="social-icons social-colored footer-social">
                  <ul className="list-inline">
                    {icons.map((props, i) => {
                      return (
                        <li key={i}>
                          <Link href={props.link}>{props.icons}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <div className="col-lg-8 col-12 p-4 p-md-6">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-12">
                    <h4 className="mb-4">Quick Links</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        {quicklinks.map((props) => {
                          return (
                              <li key={props.key}>
                                <Link href={props.link}>{props.name}</Link>
                              </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-12 mt-6 mt-sm-0">
                    <h4 className="mb-4">Services</h4>
                    <div className="footer-list">
                      <ul className="list-unstyled">
                        {service.map((props, i) => {
                          return (
                              <li key={i}>
                                <Link href={props.link}>{props.name}</Link>
                              </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-5 col-12 mt-6 mt-md-0">
                    <h4 className="mb-4">Get In Touch</h4>
                    <div className="footer-cntct my-4">
                      <ul className="media-icon list-unstyled">
                        <li key="1">
                          {" "}
                          <i className="flaticon-hospital"></i>
                          <p className="mb-0">
                            510, Laxmi Enclave-2, Near Gajera School, Katargam,
                            Surat, Gujarat, 395004
                          </p>
                        </li>
                        <li key="2">
                          <i className="flaticon-medical-report"></i>{" "}
                          <Link href="mailto:info@heartberryoverseas.com">
                            info@heartberryoverseas.com
                          </Link>
                        </li>
                        <li key="3">
                          <i className="flaticon-medical-assistance"></i>{" "}
                          <Link href="tel:+91 9854499900">+91 9854499900</Link>
                        </li>
                        <li key="4">
                          <i className="flaticon-working-hours"></i>
                          <p className="mb-0">Mon-Sat:9.30am To 7.00pm</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="copyright p-4 white-bg mt-5 ms-md-n6">
                      Copyright © 2021 All rights reserved | Devlop by{" "}
                      <i className="lar la-heart text-theme heartBeat2"></i>{" "}
                      <u>
                        <Link href="/">
                          Heartberry Overseas Private Limited.
                        </Link>
                      </u>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
