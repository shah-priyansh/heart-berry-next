import Link from 'next/link'
import React from 'react'

export default function Blog({ blog_data }) {
    return (
        <>
            {
                blog_data.map((props) => {
                    return (
                        <div key={props.key} className="card post-card border-0 rounded-0 shadow-sm bg-transparent">
                            <img className="card-img-top" src={props.img} alt="Image" />
                            <div className="card-body px-4 pb-4 pt-0">
                                <div className="mt-n3">
                                    <div className="d-inline-block white-bg px-2 py-1 text-black box-shadow">{props.date}</div>
                                </div>
                                <h2 className="h4 my-3">{props.title}</h2>
                                <ul className="list-inline mb-0 border-top border-bottom border-light py-2 mb-3">
                                    <li className="list-inline-item"> <Link href="" className="text-black"><i className="lar la-user-circle me-1"></i>{props.email}</Link></li>
                                    {/* <li className="list-inline-item"> <Link   href="" className="text-black"><i className="las la-eye me-1"></i> 275</Link></li> */}
                                    <li className="list-inline-item blog_icons"><Link href="" className="text-black"><i className="lar la-comments me-1"></i>{props.comments}</Link></li>
                                </ul>
                                <div className='d-flex flex-column gap-2'>
                                    <div>
                                        <p className="py-2 mb-0" href="">{props.content}</p>
                                    </div>
                                    <div className=' align-self-end'>
                                        <Link className="link-btn d-inline-block" href=""><i className="las la-long-arrow-alt-right"></i></Link>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}
