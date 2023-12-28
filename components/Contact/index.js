import Link from 'next/link';
import React, { useEffect } from 'react';


export default function Contact() {

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
            <div className="page-wrapper">
                <section className="page-title parallaxie" data-bg-img="assets/images/bg/06.jpeg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="white-bg p-md-5 p-3 d-inline-block">
                                    <h1 className="text-theme">Contact <span className="text-black">Us</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">Pages
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
  
                <div className="page-content">

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="light-bg">
                                        <div className="row text-center">
                                            <div className="col-lg-5 col-12">
                                                <div className="section-title mt-6">
                                                    <h2 className="title">We're here to help!</h2>
                                                    <p className="mb-0 px-4">We are very approachable and would love to speak to you. Feel free to call, send us an email, Tweet us or simply complete the enquiry form..</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-7 ps-lg-0">
                                                <div className="white-bg px-3 py-5 p-md-6 shadow-sm">
                                                    <form id="contact-form" className="row" method="post" action="php/contact.php">
                                                        <div id="formmessage"></div>
                                                        <div className="form-group col-md-6">
                                                            <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                                        </div>
                                                        <div className="form-group col-md-6">
                                                            <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                                        </div>
                                                        <div className="form-group col-md-12">
                                                            <input id="form_subject" type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
                                                        </div>
                                                     
                                                        <div className="form-group col-md-12">
                                                            <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="3" required="required"></textarea>
                                                        </div>
                                                        <div className="col-md-12 text-center mt-4">
                                                            <button className="btn btn-theme"><span>Send Messages</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 pe-lg-0">
                                    <div className="dark-bg px-3 py-5 p-md-5 mt-n15 custom-mt-0 text-white">
                                        <div className="contact-media mb-4">
                                            <h5 className="text-white">Find Office:</h5>
                                            <span>510, Laxmi Enclave-2, Near Gajera School, Katargam, Surat, Gujarat, 395004</span>
                                        </div>
                                        <div className="contact-media mb-4">
                                            <h5 className="text-white">Contact Us:</h5>
                                            <ul className="list-unstyled">
                                                <li className="mb-2">Phone: <Link href="tel:+912345678900">+91 9854499900</Link>
                                                </li>
                                                <li>Email: <Link href="mailto:info@heartberryoverseas.com"> info@heartberryoverseas.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="contact-media mb-4">
                                            <h5 className="text-white">Working Hours:</h5>
                                            <span>Monday - Saturday: 9.30am To 7.00pm</span>
                                        </div>
                                        <div className="social-icons">
                                            <ul className="list-inline">
                                                <li><Link href=""><i className="lab la-facebook-f"></i></Link>
                                                </li>
                                                <li><Link href=""><i className="lab la-twitter"></i></Link>
                                                </li>
                                                <li><Link href=""><i className="lab la-instagram"></i></Link>
                                                </li>
                                                <li><Link href=""><i className="lab la-dribbble"></i></Link>
                                                </li>
                                                <li><Link href=""><i className="lab la-linkedin-in"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--contact end--> */}


                    {/* <!--map start--> */}

                    <section className="p-0">
                        <div className="container-fluid p-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="map">
                                        <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d476066.2643699656!2d72.810527!3d21.221231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d783b30c46f%3A0x227f470b6a797265!2slakshmi%20enclave%20katargam!5e0!3m2!1sen!2sus!4v1703053511811!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </div>
           


            </div>




        </>
    )
}
