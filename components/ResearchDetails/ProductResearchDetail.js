import React from 'react'
import Link from 'next/link'

export default function Productresearchdetail() {
    return (
        <>
            {/* <!--body content start--> */}

            <div className="page-content">

                {/* <!--project single start--> */}

                <section>
                    <div className="container">
                        <div className="row align-items-center mb-6">
                            <div className="col-lg-5 col-12">
                                <img className="img-fluid w-100" src="assets/images/projects/01.jpeg" alt="" />
                            </div>
                            <div className="col-lg-7 col-12 mt-5 mt-lg-0 ps-lg-5">
                                <div>
                                    <h3 className="mb-3">Research Overview</h3>
                                    <p className="lead mb-4">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers. Discover how we gave this startup a fresh visual start</p>
                                    <div className="light-bg p-3">
                                        <ul className="list-unstyled">
                                            <li className="mb-3"><span className="text-black font-w-5">Project name:</span> Labortech</li>
                                            <li className="mb-3"><span className="text-black font-w-5">Category:</span> Laboratory</li>
                                            <li className="mb-3"><span className="text-black font-w-5">Research Name:</span> Personnel Competence</li>
                                            <li className="mb-3"><span className="text-black font-w-5">Research Year:</span> 2021</li>
                                            <li><span className="text-black font-w-5">Client:</span>  <Link href="www.themeht.com">ThemeHt</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="mb-3">Our Process</h3>
                            <p className="mb-5">We look for smart, curious, capable people with skill, passion and integrity. We trust them and give them the space to act, succeed and learn from mistakes. We support them in their endeavors to grow and develop, and help them to achieve both individually and, more importantly, within their team.</p>
                            <div className="border-top border-start border-light">
                                <div className="row g-0">
                                    <div className="col-lg-4">
                                        <div className="featured-item shadow-none d-flex align-items-start style-2 border-end border-light border-bottom">
                                            <div className="h5 text-theme me-3">01</div>
                                            <div className="featured-desc">
                                                <div className="featured-title">
                                                    <h5 className="mt-0">Latest Equipment</h5>
                                                </div>
                                                <p>Our firm is expert to create an efficient user interface that.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="featured-item shadow-none d-flex align-items-start style-2 border-end border-light border-bottom">
                                            <div className="h5 text-theme me-3">02</div>
                                            <div className="featured-desc">
                                                <div className="featured-title">
                                                    <h5 className="mt-0">Research Center</h5>
                                                </div>
                                                <p>Our firm is expert to create an efficient user interface that.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="featured-item shadow-none d-flex align-items-start style-2 border-end border-light border-bottom">
                                            <div className="h5 text-theme me-3">03</div>
                                            <div className="featured-desc">
                                                <div className="featured-title">
                                                    <h5 className="mt-0">Chemical Pathology</h5>
                                                </div>
                                                <p>Our firm is expert to create an efficient user interface that.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--project single end--> */}

            </div>

            {/* <!--body content end--> */}

        </>
    )
}
