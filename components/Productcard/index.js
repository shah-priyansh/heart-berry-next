import React from 'react'
import Link from 'next/link'

export default function Productcard({ product_data }) {
    return (
        <>
            {
                product_data.map((props) => {
                    return (
                        <>
                            <div key={props.key} >
                                <div className="card product-card rounded-0">
                                    <div className="product-img position-relative overflow-hidden">
                                        <img className="img-fluid product_img" src={props.image} alt="..." />
                                        <div className="product-link position-absolute">
                                            <div>
                                                <Link href={props.card_link}>
                                                    <button className="btn-compare mb-3" type="button"><i className="las la-random"></i></button>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href={props.cart_link}>
                                                    <button className="btn-cart mb-3" type="button">
                                                    <i className="las la-eye"></i>
                                                    </button>
                                                </Link>
                                            </div>
                                            <div>
                                                <Link href={props.wishlist_link}>
                                                    <button className="btn-wishlist" type="button"><i className="lar la-heart"></i></button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="product-title"><Link href={props.card_link}>{props.name}</Link>
                                        </div>
                                        <div className="mt-1"> <span className="product-price"><del className="text-muted">{props.old_price}</del> {props.new_price}</span>
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
