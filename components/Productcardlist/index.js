import React from 'react'
import Link from 'next/link'

export default function Productcardlist({ productcardlist }) {
    return (
        <>
            {
                productcardlist.map((props) => {
                    return (
                        <>
                            <div key={props.key} className="card product-card rounded-0 product-list mb-5">
                                <div className="row align-items-center">
                                    <div className="col-lg-4 col-sm-5">
                                        <div className="product-img position-relative overflow-hidden">
                                            <img className="img-fluid product_img" src={props.image} alt="..." />
                                            <div className="product-link position-absolute">
                                                <button className="btn-compare mb-3" type="button"><i className="las la-random"></i>
                                                </button>
                                                <button className="btn-cart mb-3" type="button"><i className="las la-shopping-cart"></i>
                                                </button>
                                                <button className="btn-wishlist" type="button"><i className="lar la-heart"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-7">
                                        <div className="card-body">
                                            <div className="product-title"><Link href={props.card_link}>{props.name}</Link>
                                            </div>
                                            <div className="mt-1"> <span className="product-price"><del className="text-muted">{props.old_price}</del> {props.new_price}</span>
                                            </div>
                                            <p className="mb-0 mt-2">Curabitur semper varius lectus sed consequat. Nam accumsan dapibus sem, sed lobortis nisi porta vitae. Ut quam tortor, malesuada a massa. Proin pretium tristique leo et imperdiet.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}