import React, { useState } from 'react';
import Link  from 'next/link'

export default function Navbar() {
    const [isBoxOpen, setIsBoxOpen] = useState(false);

    const handleSearchClick = () => {
        // Open the box
        setIsBoxOpen(true);
    };

    const handleCloseClick = () => {
        // Close the box
        setIsBoxOpen(false);
    };
    return (
        <>
            <header id="site-header" className="header">
                <div className="header-top light-bg">
                    <div className="container-fluid px-lg-8">
                        <div className="row">
                            <div className="col d-flex align-items-center justify-content-between">
                                <div className="topbar-link d-flex align-items-center text-black py-3">
                                    <div className="d-none d-sm-flex align-items-center me-3">
                                        <div> <i className="las la-phone"></i>
                                        </div>
                                        <div><Link className="text-black" href="tel:+919854499900"> +91 9854499900</Link>
                                        </div>
                                    </div>
                                    <div className="d-none d-md-flex align-items-center me-3">
                                        <div> <i className="las la-map-marker"></i>
                                        </div>
                                        <div>
                                            <div>Surat, Gujarat</div>
                                        </div>
                                    </div>
                                    {/* <div className="d-none d-lg-flex align-items-center">
                                        <div> <i className="las la-business-time"></i>
                                        </div>
                                        <div>
                                            <div>Mon-Sat: 9.30am To 7.00pm</div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="d-flex align-items-center">
                                    {/* <Link className="btn btn-white btn-sm py-3" href="/login"><span>Login</span></Link> */}
                                    <div className="social-icons d-none d-lg-inline-block ms-3">
                                        <ul className="list-inline">
                                            <li><Link href=""><i className="lab la-facebook-f"></i></Link>
                                            </li>
                                            <li><Link href=""><i className="lab la-twitter"></i></Link>
                                            </li>
                                            <li><Link href=""><i className="lab la-linkedin-in"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="language-selection ms-3">
                                        <div className="dropdown">
                                            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">English</button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <li><Link className="dropdown-item" href="">English</Link>
                                                </li>
                                                <li><Link className="dropdown-item" href="">Arabic</Link>
                                                </li>
                                                <li><Link className="dropdown-item" href="">French</Link>
                                                </li>
                                                <li><Link className="dropdown-item" href="">Italian</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-wrap">
                    <div className="container-fluid px-lg-8">
                        <div className="row">
                            <div className="col">
                                <nav className="navbar navbar-expand-lg">
                                    <Link className="navbar-brand logo" href="">
                                        <img id="logo-img" className="img-fluid" src="assets/images/logo.png" alt="" />
                                    </Link>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span></span>
                                        <span></span>
                                        <span></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto me-auto position-relative">
                                            {/* <!-- Home --> */}
                                            <li className="nav-item"><Link className="nav-link " href="/" >Home</Link></li>
                                            <li className="nav-item"><Link className="nav-link " href="/about" >About Us</Link></li>
                                            {/* <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown">About Us</Link>
                                                <ul className="dropdown-menu">
                                                    <li className="dropdown-submenu"><Link href="/about">About Us</Link></li>
                                                    <li className="dropdown-submenu"><Link href="/ourteam">Our Team</Link></li>
                                                    <li className="dropdown-submenu"><Link href="/contact">Contact Us</Link></li>
                                                    <li className="dropdown-submenu"><Link className="dropdown-item dropdown-toggle" href="">Utilities</Link>
                                                        <ul className="dropdown-menu">
                                                            <li><Link href="/faq">Faq</Link></li>
                                                            <li><Link href="/login">Login</Link></li>
                                                            <li><Link href="/404error">404 Error</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li className="nav-item"><Link className="nav-link " href="/medicines" >Medicines</Link></li>
                                            <li className="nav-item"><Link className="nav-link " href="/globalpresence" >Global Precence</Link></li>
                                            {/* <li className="nav-item dropdown"><Link className="nav-link dropdown-toggle" href="" data-bs-toggle="dropdown">Services</Link>
                                                <ul className="dropdown-menu">
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
                                            </li> */}
                                            <li className="nav-item"><Link className="nav-link " href="/news" >News</Link></li>
                                            <li className="nav-item"><Link className="nav-link " href="/contact" >Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="right-nav align-items-center d-flex gap-3 align-items-center justify-content-end">
                                        <div className="search-icon d-sm-inline-block d-none"><Link href="" onClick={handleSearchClick}><i className="las la-search"></i></Link>
                                        </div>
                                        <div className="search-icon d-sm-inline-block d-none"><Link href="/contact"><i className="las la-address-book"></i></Link>
                                        </div>
                                        <div className="search-icon d-sm-inline-block d-none"><Link href="/login"><i className="las la-user"></i></Link>
                                        </div>
                                        {/* <div className="ms-sm-3 me-md-5">
                                            <div className="cart">
                                                <Link href="" id="header-cart-btn" data-bs-toggle="modal" data-bs-target="#cartModal"> <span className="white-bg px-2 py-1 shadow-sm" data-cart-items="2">
                                                    <i className="las la-shopping-cart"></i>
                                                </span>
                                                </Link>
                                            </div>
                                        </div> */}
                                        {/* <Link className="btn btn-theme btn-sm d-none d-md-inline-block" href=""><span>Appointment</span></Link> */}
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {isBoxOpen && (
                <div className="search-input" id="search-input-box">
                    <div className="container ">
                        <form className="d-flex justify-content-between search-inner">
                            <input type="text" className="form-control" id="search-input" placeholder="Search Here" />
                            <button type="submit" className="btn"></button> <span className="las la-times" onClick={handleCloseClick} id="close-search" title="Close Search"></span>
                        </form>
                    </div>
                </div>
            )}

            {/* <!-- Cart Modal --> */}
            {/* <div className="modal fade cart-modal" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="ModalLabel">Your Cart (2)</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-5 d-flex align-items-center">
                                        <div className="me-4">
                                            <button type="submit" className="btn btn-theme btn-sm"><i className="las la-times"></i>
                                            </button>
                                        </div>
                                        <Link href="product-left-image.html">
                                            <img className="img-fluid" src="assets/images/product/01.jpeg" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="col-7">
                                        <h6><Link className="link-title" href="product-single.html">Dealistic Microscope</Link></h6>
                                        <div className="product-meta"><span className="me-2 text-theme">$120.00</span><span className="text-muted">x 1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div>
                                <div className="row align-items-center">
                                    <div className="col-5 d-flex align-items-center">
                                        <div className="me-4">
                                            <button type="submit" className="btn btn-theme btn-sm"><i className="las la-times"></i>
                                            </button>
                                        </div>
                                        <Link href="product-single.html">
                                            <img className="img-fluid" src="assets/images/product/02.jpeg" alt="..." />
                                        </Link>
                                    </div>
                                    <div className="col-7">
                                        <h6><Link className="link-title" href="product-left-image.html">Biotechnology Microscope</Link></h6>
                                        <div className="product-meta"><span className="me-2 text-theme">$160.00</span><span className="text-muted">x 1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5" />
                            <div className="d-flex justify-content-between align-items-center mb-8"> <span className="text-muted">Subtotal:</span>  <span className="text-dark">$280.00</span>
                            </div><Link href="product-cart.html" className="btn btn-theme me-2">View Cart</Link>
                            <Link href="product-checkout.html" className="btn btn-dark">Continue To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
