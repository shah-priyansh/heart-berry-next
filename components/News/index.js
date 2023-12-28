import React, { useEffect } from 'react';
import Link  from 'next/link'
import Blog from '../Blog';
import Blogarticle from '../BlogArticle'
import { latest_blog, blogarticles, categories, tag } from '../../constant/news/data'

export default function News() {

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
                                    <h1 className="text-theme">Latest <span className="text-black">News</span></h1>
                                    <nav aria-label="breadcrumb" className="page-breadcrumb border-top border-light pt-3 mt-3">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><Link href="/"><i className="las la-home me-1"></i>Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">News
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">Latest News</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="page-content">

                    {/* <!--blog start--> */}

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 mb-6 mb-lg-0 order-lg-1">
                                    <div className='d-flex align-items-center flex-column blog_content'>
                                        {/* <!-- Blog Card --> */}
                                        <Blog blog_data={latest_blog} />
                                        {/* <!-- End Blog Card --> */}
                                    </div>
                                    <div className="mt-8">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><Link className="page-link"  href="">Previous</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link"  href="">1</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link"  href="">2</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link"  href="">3</Link>
                                                </li>
                                                <li className="page-item"><Link className="page-link"  href="">Next</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4">
                                    <div className="mb-5 p-4 border">
                                        <form>
                                            <div className="input-group">
                                                <input className="form-control h-auto" type="search" placeholder="Search Here" aria-label="Search" />
                                                <button className="btn btn-theme mt-2 my-sm-0" type="submit"><span><i className="las la-search"></i></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="mb-5 p-4 border">
                                        <h4 className="mb-3">Recent Stories</h4>
                                        <div className='d-flex align-items-center flex-column gap-4'>
                                            <Blogarticle blog_article={blogarticles} />
                                        </div>
                                    </div>
                                    <div className="mb-5 p-4 border">
                                        <h4 className="mb-3">Categories</h4>
                                        <ul className="list-unstyled list-group list-group-flush flex flex-column gap-3">
                                            {
                                                categories.map((props) => {
                                                    return (
                                                        <>
                                                            <li key={props.key}>
                                                                <Link className="list-group-item text-black border-0" href={props.link}>
                                                                    {props.categories}
                                                                    <span className="ms-2 light-bg font-weight-normal p-2">{props.number}</span>
                                                                </Link>
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }


                                        </ul>
                                    </div>
                                    <div className="p-4 border widget-tags">
                                        <h4 className="mb-3">Tags</h4>
                                        <div className='flex align-items-center gap-1 mt-1 flex-wrap'>
                                            {
                                                tag.map((props) => {
                                                    return (
                                                        <>
                                                            <Link key={props.key} className="d-inline-block m-1"  href="">{props.tag}</Link>
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


            </div >
        </>
    )
}
