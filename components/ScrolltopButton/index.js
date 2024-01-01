import React from 'react'
import Link from 'next/link'

export default function ScrolltopButton() {
    return (
        <>
            <div className="scroll-top"><Link className="smoothscroll" href="#top"><i className="las la-location-arrow"></i></Link></div>
        </>
    )
}
