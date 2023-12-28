import dynamic from "next/dynamic";
import React from "react";
const DynamicAbout = dynamic(() => import("../../components/Shopdetails"), {
    ssr: false, // Ensure this component isn't SSR'd
});

export default function Productdetails() {
    return (
        <>
            <DynamicAbout />
        </>
    );
}
