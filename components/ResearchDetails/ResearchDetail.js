import React from 'react'
import Link from 'next/link'

export default function Researchdetail() {
    return (
        <>
            

            <div className="page-content">

                {/* <!--project start--> */}

                <section>
                    <div className="container">
                        <div className="row justify-content-center text-center">
                            <div className="col-lg-8">
                                <div className="section-title">
                                    <h2 className="title">We've Done A Lot's, Let's Check Some<br />Our Latest Research</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="owl-carousel no-pb popup-gallery" data-dots="false" data-items="5" data-md-items="3" data-sm-items="2" data-xs-items="1" data-margin="10">
                                    <div className="item">
                                        <div className="cases-item position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/images/projects/01.jpeg" alt="" />
                                                <Link className="popup-img" href="assets/images/projects/large/01.jpeg"> <i className="las la-plus"></i>
                                                </Link>
                                                <div className="cases-title"> <span>Pathology</span>
                                                    <h4><Link href="#">Personnel Competence</Link></h4>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cases-item position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/images/projects/02.jpeg" alt="" />
                                                <Link className="popup-img" href="assets/images/projects/large/02.jpeg"> <i className="las la-plus"></i>
                                                </Link>
                                                <div className="cases-title"> <span>Pathology</span>
                                                    <h4><Link href="#">Personnel Competence</Link></h4>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cases-item position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/images/projects/03.jpeg" alt="" />
                                                <Link className="popup-img" href="assets/images/projects/large/03.jpeg"> <i className="las la-plus"></i>
                                                </Link>
                                                <div className="cases-title"> <span>Pathology</span>
                                                    <h4><Link href="#">Personnel Competence</Link></h4>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cases-item position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/images/projects/04.jpeg" alt="" />
                                                <Link className="popup-img" href="assets/images/projects/large/04.jpeg"> <i className="las la-plus"></i>
                                                </Link>
                                                <div className="cases-title"> <span>Pathology</span>
                                                    <h4><Link href="#">Personnel Competence</Link></h4>
                                                </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="cases-item position-relative overflow-hidden">
                                            <img className="img-fluid w-100" src="assets/images/projects/05.jpeg" alt="" />
                                                <Link className="popup-img" href="assets/images/projects/large/05.jpeg"> <i className="las la-plus"></i>
                                                </Link>
                                                <div className="cases-title"> <span>Pathology</span>
                                                    <h4><Link href="#">Personnel Competence</Link></h4>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!--project end--> */}

            </div>
        </>
    )
}
