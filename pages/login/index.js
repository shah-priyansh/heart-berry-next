import dynamic from "next/dynamic";
import React from "react";
const DynamicAbout = dynamic(() => import("../../components/Login"), {
  ssr: false, 
});

export default function index() {
  return (
    <>
      <DynamicAbout />
    </>
  );
}
