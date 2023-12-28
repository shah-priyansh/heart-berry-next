import dynamic from "next/dynamic";
import React from "react";
const DynamicContact = dynamic(() => import("../../components/Contact"), {
  ssr: false, // Ensure this component isn't SSR'd
});

export default function Contactus() {
  return (
    <>
      <DynamicContact />
    </>
  );
}
