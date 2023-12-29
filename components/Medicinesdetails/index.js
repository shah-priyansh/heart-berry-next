import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Productcard from '../Productcard';
import { Sortby } from '../../constant/shop/data';


export default function Productdetails() {

    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

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
                                            <li className="breadcrumb-item">Medicines
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
                                <div className="col-xl-7">
                                    <div className='d-flex flex-sm-row flex-column align-items-sm-start justify-content-xl-start justify-content-center text-center  gap-4'>
                                        <div className=' order-sm-1 order-0 d-flex align-items-center justify-content-center'>
                                            <img className="img-fluid mx-auto border" src="assets/images/product/01.jpeg" alt="" />
                                        </div>
                                        <div className='order-sm-0  order-1 '>
                                            <div className='d-flex align-items-center flex-sm-column justify-content-center flex-row gap-3'>
                                                <div className='border'>
                                                    <img className='img-fluid product_retails d-block' src='assets/images/product/retails/01.webp' alt='' />
                                                </div>
                                                <div className='border'>
                                                    <img className='img-fluid product_retails d-block' src='assets/images/product/retails/02.webp' alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 mt-5 mt-xl-0">
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
                                        <ul className="list-unstyled mt-4">
                                            <li className="mb-2"><span className="text-black font-w-5">Global Supply: </span>  Madicine  / Equipment</li>
                                            <li className="mb-2"><span className="text-black font-w-5">Categories :</span> Microscope</li>
                                        </ul>
                                        <div className="d-flex flex-column gap-3 mt-4">
                                            <div >
                                                <button onClick={toggleContent} className="btn btn-dark"><span>CHECK AVAILABILITY</span></button>
                                            </div>
                                            {isContentVisible && (
                                                <>
                                                    <form id="contact-form" className='border rounded p-4' method="post" action="php/contact.php">
                                                        <div id="formmessage"></div>
                                                        <div className='row'>
                                                            <div className="form-group clearfix col-md-6">
                                                                <select className="form-select form-control">
                                                                    <option selected>Select Country</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group clearfix col-md-6">
                                                                <select className="form-select form-control">
                                                                    <option selected>Select Unit</option>
                                                                    <option value="1">1</option>
                                                                    <option value="2">2</option>
                                                                    <option value="3">3</option>
                                                                    <option value="4">4</option>
                                                                    <option value="5">5</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" />
                                                            </div>
                                                            <div className="form-group col-md-6">
                                                                <input id="form_qty" type="number" name="qty" className="form-control" placeholder="Qty" required="required" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <button className="btn btn-theme" data-bs-toggle="modal" data-bs-target="#exampleModal"><span>Check</span>
                                                            </button>
                                                        </div>
                                                    </form>
                                                    <div class="modal fade check_modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog position-absolute top-50 start-50 translate-middle">
                                                            <div class="modal-content rounded overflow-hidden">
                                                                <div className='p-3  maodal_header'>
                                                                    <h5 class="modal-title text-white font-w-6 text-center" id="exampleModalLabel">Tell Us More To Get Started On Your Treatment</h5>
                                                                </div>
                                                                <div className='px-3 py-4 border-top overflow-auto modal_body'>
                                                                    <form id="contact-form" method="post" action="php/contact.php">
                                                                        <div id="formmessage"></div>
                                                                        <div className='d-flex flex-column gap-4'>
                                                                            <div className="form-group mb-0">
                                                                                <label class="font-w-6 mb-1">Full Name</label>
                                                                                <input id="form_name" type="text" name="name" className="form-control" placeholder="Enter Your Name" required="required" />
                                                                            </div>
                                                                            <div className="form-group mb-0">
                                                                                <label class="font-w-6 mb-1">Phone Number</label>
                                                                                <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Enter Your Phone" required="required" />
                                                                            </div>
                                                                            <div className="form-group mb-0">
                                                                                <label class="font-w-6 mb-1">Email Address</label>
                                                                                <input id="form_email" type="email" name="email" className="form-control" placeholder="Enter Your Email" required="required" />
                                                                            </div>
                                                                            <div className="form-group mb-0">
                                                                                <label class="font-w-6 mb-1">Your Note</label>
                                                                                <textarea id="form_message" name="Note" className="form-control" placeholder="Write Note" rows="3" required="required"></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                                <div class="border-top px-3 py-2 bg-white d-flex align-items-end justify-content-end maodal_footer">
                                                                    <button type="button" class="btn btn-dark py-1 px-3 rounded" data-bs-dismiss="modal">Close</button>
                                                                    <button type="button" class="btn btn-theme py-1 px-3 rounded">Send</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </div>
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
                                            <li className="nav-item" role="presentation"> <Link className="nav-link" id="tab1-2" data-bs-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Additional information</Link>
                                            </li>
                                            <li className="nav-item" role="presentation"> <Link className="nav-link" id="tab1-3" data-bs-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Ratings and Reviews</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content mt-5" id="myTabContent">
                                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-1">
                                                <div className='d-flex flex-column gap-4'>
                                                    <div className='flex flex-column gap-2'>
                                                        <h4>Your Health Is Our Mission</h4>
                                                        <div className='d-flex flex-column gap-2'>
                                                            <p className='mb-0'>ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis, leo quam aliquet diam, congue laoreet elit metus eget diam. Proin ac metus diam. In quis scelerisque velit.</p>
                                                            <p className="mb-0">ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. Proin gravida arcu nisl, a dignissim mauris placerat Praesent pharetra, justo ut scelerisque mattis.</p>
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <h4>Your Health Is Our Mission</h4>
                                                        <div className='d-flex flex-column gap-2'>
                                                            <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                                            <p className='mb-0'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                                                        </div>
                                                    </div>
                                                    <div >
                                                        <h4>Your Health Is Our Mission</h4>
                                                        <div className='d-flex flex-column gap-1'>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <div className='rounded-circle style-dot'></div>
                                                                <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <div className='rounded-circle style-dot'></div>
                                                                <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <div className='rounded-circle style-dot'></div>
                                                                <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </div>
                                                            <div className='d-flex align-items-center gap-3'>
                                                                <div className='rounded-circle style-dot'></div>
                                                                <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab1-2">
                                                <ul className="list-unstyled d-flex flex-column gap-2">
                                                    <li><span className="text-black font-w-5">Composition:- </span>  Abacavir  /  Lamivudine</li>
                                                    <li><span className="text-black font-w-5">Manufacturer:-</span> Aprazer healthcare</li>
                                                    <li><span className="text-black font-w-5">Indication:- </span>  HIV</li>
                                                    <li><span className="text-black font-w-5">Packaging:-</span> Bottle</li>
                                                    <li><span className="text-black font-w-5">Dosage Form:-  </span>  Tablet</li>
                                                    <li><span className="text-black font-w-5">Delivery Time:- </span> 6 to 15 days</li>
                                                </ul>
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
                                                                {/* <div className="form-group">
                                                                    <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Phone" required="required" />
                                                                </div> */}
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
