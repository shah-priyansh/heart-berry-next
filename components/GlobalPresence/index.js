import React, { useEffect } from 'react';
import Link from 'next/link'

export default function Globalpresence() {

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
                                    <h1 className="text-theme">Global <span className="text-black">Presence</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Global Presence</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="page-content">
                    <section>
                        <div className='container'>
                            <div className="row justify-content-center text-center">
                                <div className="col-lg-8 col-12">
                                    <div className="section-title">
                                        <h2 className="title">Heartberry Overseas Around Global</h2>
                                        <p className="lead">“It’s our mission to find the best and most reliable suppliers and manufacturers. We value our customers and the community we already built!”</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row global_presence'>
                                <div className='col-lg-12 text-center'>
                                    <img src='assets/images/globalpresence/01.jpg' className='img-fluid mx-auto rounded' alt='' />
                                </div>
                                <div className='col-lg-12 '>
                                    <div className='mt-5 pt-5 mx-auto presence_content'>
                                        <p className='text-center'>“Heartberry Overseas Privet Limited Endeavors to Become The World-Class Pharmaceutical Exporter For India And Expannded And Grown manifold since its Inception We Have Operations in Overseas in Over 40+ Countries and 5+ Continents Globally.”</p>
                                        <div className='my-4 text-center'>
                                            <img src='assets/images/globalpresence/divider-01.png' alt='' />
                                        </div>
                                        <p className='text-center'>
                                            Heartberry Overseas Pvt. Ltd currently exports to over 40+ countries and 5 continents globally which include North America, CIS, Latin America, Africa, and South-East Asia. With over 200+ International Product, we are emerging as a major potential Indian Exporters. We endeavor to become the world-class pharmaceutical manufacturer for India’s neighboring countries and to help with the improvement of quality items by giving prevalent execution with top Quality items in the right budget. Our formulation development team and regulatory department are centered on bringing the most recent generics to our markets in this manner ensuring a steady stream of the most recent items to our customers. We accept working together towards victory, with common beliefs, understanding our partner’s necessities, and overall fulfilling them.
                                        </p>
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
