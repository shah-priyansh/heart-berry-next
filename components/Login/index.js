import React, { useEffect } from 'react';
import Link from 'next/link'

export default function Login() {
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
                                    <h1 className="text-theme">Log<span className="text-black">in</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">Pages
                                            </li>
                                            <li className="breadcrumb-item">Utilities
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Login</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="page-content">

                    {/* <!--login start--> */}

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 text-center dark-bg">
                                    <div className="p-lg-5 px-3 py-5">
                                        <img className="img-fluid" src="assets/images/login/login-img.png" alt="" />
                                        <div className="section-title mb-0 mt-5">
                                            <h2 className="title">Welcome To The Labortech</h2>
                                            <p className="mb-0 text-light">Any Question or Remarks ? Just Write Us a Message!</p>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-lg-6 white-bg">
                                    <div className="p-lg-5 px-3 py-5">
                                        <h3 className="mb-4">Login Your Account</h3>
                                        <form id="contact-form" method="post" action="php/contact.php">
                                            <div className="messages"></div>
                                            <div className="form-group">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="User name" required="required" data-error="Username is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group">
                                                <input id="form_password" type="password" name="password" className="form-control" placeholder="Password" required="required" data-error="password is required." />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="form-group mt-4 mb-5">
                                                <div className="remember-checkbox d-flex align-items-center justify-content-between">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="remember" checked />
                                                        <label className="form-check-label" for="remember">Remember me</label>
                                                    </div> <Link href="">Forgot Password?</Link>
                                                </div>
                                            </div>
                                            <Link href="" className="btn btn-theme"><span>Login Now</span></Link>
                                        </form>
                                        <div className="d-flex align-items-center mt-4"> <span className="text-black me-1">Don't have an account?</span>
                                            <Link href="signup.html">Sign Up</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--login end--> */}

                </div>
            </div>
        </>
    )
}
