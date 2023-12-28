import dynamic from "next/dynamic";
import React from "react";

const DynamicHome = dynamic(() => import("../../components/Home"), {
  ssr: false, // Ensure this component isn't SSR'd
});

const Page = () => {
  return (
    <>
      <DynamicHome />
    </>
  );
};

export default Page;
