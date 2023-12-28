import React, { useEffect } from 'react';
import Link  from 'next/link'
import Blog from '../Blog'
import { blogdetails, blogdetaillatest } from '../../constant/news/data'

export default function Newsdetails() {

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
                                    <h1 className="text-theme">News<span className="text-black"> Details</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">News
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">News Details</li>
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
                            <div className="row justify-content-center">
                                <div className="col-lg-10">
                                    <div className='blog_details'>
                                        <Blog blog_data={blogdetails} />
                                    </div>
                                    <p>Our Experts are always ready exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                                    <blockquote className="theme-bg border-0 p-lg-5 p-3 mt-5 text-white">“This is the first medication specifically targeting social communication skills in kids with autism,” says Kate Pawlowski, research manager for the study. “Treatments usually mediate symptoms, not the core issues of autism.” <span className="mt-2 d-block text-light">- Leena Ivy</span>
                                    </blockquote>
                                    <div className="d-md-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <h6 className="mb-0 me-4">Share It:</h6>
                                            <div className="social-icons">
                                                <ul className="list-inline mb-0">
                                                    <li><Link  href=""><i className="la la-facebook"></i></Link>
                                                    </li>
                                                    <li><Link  href=""><i className="la la-dribbble"></i></Link>
                                                    </li>
                                                    <li><Link  href=""><i className="la la-instagram"></i></Link>
                                                    </li>
                                                    <li><Link  href=""><i className="la la-twitter"></i></Link>
                                                    </li>
                                                    <li><Link  href=""><i className="la la-linkedin"></i></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center text-md-end mt-5 mt-md-0">
                                            <h6 className="mb-0 me-4">Tags: </h6>
                                            <ul className="list-inline mb-0 widget-tags">
                                                <li className="list-inline-item"><Link className="d-inline-block m-1"  href="">Bootstrap 5</Link>
                                                </li>
                                                <li className="list-inline-item"><Link className="d-inline-block m-1"  href="">Pathology</Link>
                                                </li>
                                                <li className="list-inline-item"><Link className="d-inline-block m-1"  href="">Equipping</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* <div className="row my-6">
                                        <div className="col-md-6 mb-5 mb-md-0">
                                            <Blog blog_data={blogdetaillatest} />
                                        </div>
                                        <div className="col-md-6">
                                            <Blog  blog_data={blogdetaillatest} />
                                        </div>
                                    </div> */}
                                    <div className='my-6 d-flex flex-column flex-md-row  gap-md-4 gap-5'>
                                        <Blog blog_data={blogdetaillatest} />
                                    </div>
                                    <div className="mt-6 border-bottom border-light pb-6">
                                        <div className="mb-4">
                                            <h2>Recent Comments</h2>
                                        </div>
                                        <div className="d-block d-md-flex">
                                            <div className="me-md-4 mb-4 mb-md-0">
                                                <img className="img-fluid" alt="image" src="assets/images/thumnail/01.jpeg" />
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <h5 className="mb-1">Leena Ivy</h5>  <small className="text-muted">20 February, 2021</small>
                                                </div>
                                                <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <Link className="btn btn-dark btn-sm"  href="">Reply</Link>
                                            </div>
                                        </div>
                                        <div className="d-block d-md-flex border border-light p-4 my-5">
                                            <div className="me-md-4 mb-4 mb-md-0">
                                                <img className="img-fluid" alt="image" src="assets/images/thumnail/02.jpeg" />
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <h5 className="mb-1">Melena Jos</h5>  <small className="text-muted">20 February, 2021</small>
                                                </div>
                                                <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <Link className="btn btn-dark btn-sm"  href="">Reply</Link>
                                            </div>
                                        </div>
                                        <div className="d-block d-md-flex">
                                            <div className="me-md-4 mb-4 mb-md-0">
                                                <img className="img-fluid" alt="image" src="assets/images/thumnail/03.jpeg" />
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <h5 className="mb-1">Shiran Reni</h5>  <small className="text-muted">20 February, 2021</small>
                                                </div>
                                                <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <Link className="btn btn-dark btn-sm"  href="">Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-comments mt-5">
                                        <div className="mb-4">
                                            <h2>Leave A Comment</h2>
                                        </div>
                                        <form id="contact-form" className="row" method="post" action="php/contact.php">
                                            <div id="formmessage"></div>
                                            <div className="form-group col-md-6">
                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                            </div>
                                            <div className="form-group col-md-6">
                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="3" required="required"></textarea>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <button className="btn btn-theme"><span>Post Comment</span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--blog end--> */}

                </div>
            </div >
        </>
    )
}
