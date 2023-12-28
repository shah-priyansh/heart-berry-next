import dynamic from "next/dynamic";
import React from "react";
const DynamicAbout = dynamic(() => import("../../components/Shoplist"), {
    ssr: false, // Ensure this component isn't SSR'd
});

export default function index() {
    return (
        <>
            <DynamicAbout />
        </>
    );
}
