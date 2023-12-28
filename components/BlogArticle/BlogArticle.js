import React from 'react'
import Link from 'next/link'

export default function Blogarticle({ blog_article }) {
    return (
        <>
            {
                blog_article.map((props) => {
                    return (
                        <>
                            <article>
                                <div className="row align-items-center">
                                    <div className="col-sm-5">
                                        <img src={props.img} className="img-fluid" alt="..." />
                                    </div>
                                    <div className="col-sm-7">
                                        <h5 className="h6">
                                            <Link href="blog-single.html">{props.title}</Link>
                                        </h5>
                                        <Link className="d-inline-block text-grey" href="#">{props.date}</Link>
                                    </div>
                                </div>
                            </article>
                        </>
                    )
                })
            }
        </>
    )
}
