import React from 'react'
import Link from 'next/link'

export default function Servicedetails() {
    return (
        <>

            <div className="page-content">

                {/* <!--service details start--> */}

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 pe-lg-5">
                                <div className="service-details">
                                    <img className="img-fluid w-100 mb-4" src="assets/images/service/large/01.jpg" alt="" />
                                        <h3 className="mb-3">A Full services from a clinical lab Pathologycam Testing</h3>
                                        <p className="lead">We have put protocols to protect our patients and staff care. Service overview With experience contracting and professional industry latest generation technological. Excepturi vero aliquam id. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                        <p className="mb-5">Our design professionals are equippe Totam mollitia incidunt vero cupiditate obcaecati iusto tempora unde! Numquam officiis, quae adipisci quam laudantium nulla modi. adipisci quam laudantium nulla modi. Totam mollitia incidunt vero cupiditate obcaecati</p>
                                        <div className="shadow-sm p-md-5 p-3" data-bg-img="assets/images/pettern/02.png">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <ul className="list-unstyled list-icon">
                                                        <li className="mb-3"><i className="las la-check"></i> Home medicine review</li>
                                                        <li className="mb-3"><i className="las la-check"></i> Highest Quality Results</li>
                                                        <li><i className="las la-check"></i> We Ensure Safe Diagnosis</li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 mt-3 mt-sm-0">
                                                    <ul className="list-unstyled list-icon">
                                                        <li className="mb-3"><i className="las la-check"></i> Home medicine review</li>
                                                        <li className="mb-3"><i className="las la-check"></i> Highest Quality Results</li>
                                                        <li><i className="las la-check"></i> We Ensure Safe Diagnosis</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="my-5">Our design professionals are equippe Totam mollitia incidunt vero cupiditate obcaecati iusto tempora unde! Numquam officiis, quae adipisci quam laudantium nulla modi. adipisci quam laudantium nulla modi. Totam mollitia incidunt vero cupiditate obcaecati</p>
                                        <div className="row g-0 mb-5">
                                            <div className="col-md-6">
                                                <div className="featured-item py-0 text-center shadow-none style-2">
                                                    <div className="featured-icon"> <i className="flaticon-laboratory-1"></i>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <div className="featured-title">
                                                            <h5>laboratory Technician</h5>
                                                        </div>
                                                        <p>Our firm is expert to create an efficient user interface that.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mt-5 mt-md-0">
                                                <div className="featured-item py-0 text-center shadow-none style-2">
                                                    <div className="featured-icon"> <i className="flaticon-laboratory"></i>
                                                    </div>
                                                    <div className="featured-desc">
                                                        <div className="featured-title">
                                                            <h5>Pathologycam Testing</h5>
                                                        </div>
                                                        <p>Our firm is expert to create an efficient user interface that.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion" id="accordion">
                                            <div className="accordion-item mb-4">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Can we take a second opinion ?
                                                    </button>
                                                </h2>
                                                <div id="collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                                    <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item mb-4">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Is the treatment at Hospital is affordable ?
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                                    <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        which is the same as saying through ?
                                                    </button>
                                                </h2>
                                                <div id="collapseThree" className="accordion-collapse border-0 collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                                    <div className="accordion-body">Discovered Many desktop publishing packages and web page editors now use Nor again is there anyone who loves or pursues or desires to obtain pain of itself.</div>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 sidebar mt-6 mt-lg-0">
                                <div className="widget p-4 mb-5 light-bg">
                                    <div className="sidebar-links">
                                        <ul className="list-unstyled">
                                            <li><Link href="/service">Pathologycam Testing</Link>
                                            </li>
                                            <li><Link href="/service">Biochemistry Solution</Link>
                                            </li>
                                            <li><Link href="/service">Chemical Research</Link>
                                            </li>
                                            <li><Link href="/service">Pharmaceutical Research</Link>
                                            </li>
                                            <li><Link href="/service">Diabetes Testing</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="widget p-4 mb-5 light-bg">
                                    <div className="white-bg p-4">
                                        <h4>Get Free Quote</h4>
                                        <form id="queto-form" method="post" action="php/contact.php">
                                            <div className="messages"></div>
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="First Name" required="required" data-error="Name is required." />
                                                    <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email Address" required="required" data-error="Valid email is required." />
                                                    <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                                            </div>
                                            <div className="form-group">
                                                <textarea id="form_message" name="message" className="form-control" placeholder="Type Message" rows="4" required="required" data-error="Please,leave us a message."></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <button className="btn btn-theme mt-4"> <span>Submit Now</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="widget p-4 light-bg">
                                    <h4>Need Help?</h4>
                                    <p>Contact with us through our representative or submit a business inquiry online.</p> <Link className="btn btn-theme btn-sm" href="contact.html"><span>Contact Us</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--service details end--> */}

            </div>
        </>
    )
}
