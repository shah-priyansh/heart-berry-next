import dynamic from "next/dynamic";
import React from "react";
const DynamicAbout = dynamic(() => import("../../components/News"), {
  ssr: false, 
});

export default function index() {
  return (
    <>
      <DynamicAbout />
    </>
  );
}
