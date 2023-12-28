import React, { useEffect } from 'react';
import Link  from 'next/link'
import Productcard from '../Productcard';
import { Sortby } from '../../constant/shop/data';


export default function Productdetails() {

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
                                    <h1 className="text-theme">Product <span className="text-black">Details</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">Shop
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Product Single</li>
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
                                <div className="col-lg-6">
                                    <img className="img-fluid " src="assets/images/product/01.jpeg" alt="" />
                                    {/* <ul id="imageGallery">
                                        <li data-thumb="assets/images/product/01.jpeg" data-src="assets/images/product/01.jpeg">
                                            <img className="img-fluid " src="assets/images/product/01.jpeg" alt="" />
                                        </li>
                                        <li data-thumb="assets/images/product/02.jpeg" data-src="assets/images/product/02.jpeg">
                                            <img className="img-fluid " src="assets/images/product/02.jpeg" alt="" />
                                        </li>
                                        <li data-thumb="assets/images/product/03.jpeg" data-src="assets/images/product/03.jpeg">
                                            <img className="img-fluid " src="assets/images/product/03.jpeg" alt="" />
                                        </li>
                                        <li data-thumb="assets/images/product/04.jpeg" data-src="assets/images/product/04.jpeg">
                                            <img className="img-fluid " src="assets/images/product/04.jpeg" alt="" />
                                        </li>
                                    </ul> */}
                                </div>
                                <div className="col-lg-6 mt-5 mt-lg-0">
                                    <div className="product-details">
                                        <h3>
                                            Dealistic Microscope
                                        </h3>
                                        <div className="mt-3 mb-1"> <span className="product-price"><del className="text-muted">$55.00</del> $42.00</span>
                                        </div> <span className="text-warning">
                                            <i className="las la-star"></i>
                                            <i className="las la-star"></i>
                                            <i className="las la-star"></i>
                                            <i className="las la-star"></i>
                                            <i className="las la-star"></i>
                                        </span>
                                        <p className="my-4">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                        <div className="d-md-flex align-items-center">
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <button className="btn-product btn-product-up"> <i className="las la-minus"></i>
                                                    </button>
                                                    <input className="form-product" type="number" name="form-product" value="1" />
                                                    <button className="btn-product btn-product-down"> <i className="las la-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="ms-3"> <Link href="" className="btn btn-theme"><span>Add To Cart</span></Link>
                                                <Link href="" className="btn btn-dark"><span>Add To Wishlist</span></Link>
                                            </div>
                                        </div>
                                        <ul className="list-unstyled mt-5">
                                            <li className="mb-2"><span className="text-black font-w-5">Availibility: </span> In Stock</li>
                                            <li className="mb-2"><span className="text-black font-w-5">Categories :</span> Microscope, Equipment</li>
                                            <li><span className="text-black font-w-5">SKU :</span> REF. LA-83</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--tab start--> */}

                    <section className="light-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tab">
                                        {/* <!-- Nav tabs --> */}
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation"> <Link className="nav-link active" id="tab1-1" data-bs-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Description</Link>
                                            </li>
                                            <li className="nav-item" role="presentation"> <Link className="nav-link" id="tab1-2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Shipping Policy</Link>
                                            </li>
                                            <li className="nav-item" role="presentation"> <Link className="nav-link" id="tab1-3" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Ratings and Reviews</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content pt-4" id="myTabContent">
                                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-1">
                                                <div className="row align-items-center">
                                                    <div className="col-md-5">
                                                        <img className="img-fluid w-100" src="assets/images/about/01.jpeg" alt="" />
                                                    </div>
                                                    <div className="col-md-7 mt-5 mt-lg-0">
                                                        <h4 className="mb-3">Your Health Is Our Mission</h4>
                                                        <p>ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam. In quis scelerisque velit.</p>
                                                        <p className="mb-0">ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab1-2">
                                                <h4>Domestic Shipping Policy</h4>
                                                <p><strong className="text-theme">Shipment processing time</strong>
                                                </p>
                                                <p>All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays.</p>
                                                <p>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</p>
                                                <p className="white-bg p-3">Update this section if your processing time exceeds 2-3 business days.</p>
                                                <p><strong className="text-theme">Shipping rates &amp; delivery estimates</strong>
                                                </p>
                                                <p>Shipping charges for your order will be calculated and displayed at checkout.</p>
                                                <p>Delivery delays can occasionally occur.</p>
                                                <p className="white-bg p-3">Update this section based on carriers you support.</p>
                                            </div>
                                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab1-3">
                                                <div className="row">
                                                    <div className="col-md-7">
                                                        <div className="row total-rating align-items-center">
                                                            <div className="col-md-6">
                                                                <div className="dark-bg shadow-sm text-center p-5">
                                                                    <h5 className="text-white">Overall</h5>
                                                                    <h4 className="text-white">4.0</h4>
                                                                    <h6 className="text-white">(03 Reviews)</h6>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 mt-3 mt-lg-0">
                                                                <div className="rating-list">
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <div className="text-nowrap me-3">5 Star</div>
                                                                        <div className="w-100">
                                                                            <div className="progress custom_heights" >
                                                                                <div className="progress-bar bg-success w_90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div><span className="text-muted ms-3">90%</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <div className="text-nowrap me-3">4 Star</div>
                                                                        <div className="w-100">
                                                                            <div className="progress custom_heights" >
                                                                                <div className="progress-bar bg-success w_60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div><span className="text-muted ms-3">60%</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <div className="text-nowrap me-3">3 Star</div>
                                                                        <div className="w-100">
                                                                            <div className="progress custom_heights" >
                                                                                <div className="progress-bar bg-success w_40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div><span className="text-muted ms-3">40%</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <div className="text-nowrap me-3">2 Star</div>
                                                                        <div className="w-100">
                                                                            <div className="progress custom_heights" >
                                                                                <div className="progress-bar bg-warning w_20" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div><span className="text-muted ms-3">20%</span>
                                                                    </div>
                                                                    <div className="d-flex align-items-center mb-2">
                                                                        <div className="text-nowrap me-3">1 Star</div>
                                                                        <div className="w-100">
                                                                            <div className="progress custom_heights" >
                                                                                <div className="progress-bar bg-danger w_10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                                            </div>
                                                                        </div><span className="text-muted ms-3">10%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-holder review-list mt-5">
                                                            <div className="d-sm-flex d-block">
                                                                <div className="me-sm-3 mb-3 mb-sm-0 w-25">
                                                                    <img className="img-fluid" alt="image" src="assets/images/thumnail/01.jpeg" />
                                                                </div>
                                                                <div>
                                                                    <h6>Leena Ivy</h6>
                                                                    <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <span className="text-warning">
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block mt-5">
                                                                <div className="me-sm-3 mb-3 mb-sm-0 w-25">
                                                                    <img className="img-fluid" alt="image" src="assets/images/thumnail/02.jpeg" />
                                                                </div>
                                                                <div>
                                                                    <h6>Melena Jos</h6>
                                                                    <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <span className="text-warning">
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="d-sm-flex d-block mt-5">
                                                                <div className="me-sm-3 mb-3 mb-sm-0 w-25">
                                                                    <img className="img-fluid" alt="image" src="assets/images/thumnail/03.jpeg" />
                                                                </div>
                                                                <div>
                                                                    <h6>Shiran Reni</h6>
                                                                    <p>I was casually chatting with an older female acquaintance as I got situated on the plane. She asked me what kind of medicine I practice.</p> <span className="text-warning">
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                        <i className="las la-star"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-5">
                                                        <div className="post-comments mt-5 pos-r white-bg p-4">
                                                            <div className="section-title mb-3">
                                                                <h5>Add Review</h5>
                                                            </div>
                                                            <form id="contact-form" method="post" action="php/contact.php">
                                                                <div id="formmessage"></div>
                                                                <div className="form-group">
                                                                    <input id="form_name" type="text" name="name" className="form-control" placeholder="Name" required="required" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input id="form_email" type="email" name="email" className="form-control" placeholder="Email" required="required" />
                                                                </div>
                                                                <div className="form-group">
                                                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" />
                                                                </div>
                                                                <div className="form-group clearfix">
                                                                    <select className="form-select form-control">
                                                                        <option selected>Rating -- Select</option>
                                                                        <option value="1">1</option>
                                                                        <option value="2">2</option>
                                                                        <option value="3">3</option>
                                                                        <option value="4">4</option>
                                                                        <option value="5">5</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group">
                                                                    <textarea id="form_message" name="message" className="form-control" placeholder="Message" rows="3" required="required"></textarea>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <button className="btn btn-theme"><span>Post Review</span>
                                                                    </button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--tab end--> */}


                    {/* <!--recent product start--> */}

                    <section>
                        <div className="container">
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h2 className="title mb-0">Related Products</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="owl-carousel no-pb" data-dots="false" data-nav="true" data-items="4" data-md-items="3" data-sm-items="2" data-margin="30">
                                        <Productcard className="item" product_data={Sortby} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!--recent product end--> */}

                </div>
            </div>
        </>
    )
}
