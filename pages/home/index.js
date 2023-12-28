import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";

const DynamicHome = dynamic(() => import("../../components/Home"), {
  ssr: false, // Ensure this component isn't SSR'd
});

const Page = () => {
  const structuredData = {
    "@context": "https://heartberry.vercel.app",
    "@type": "LocalBusiness",
    name: "Heartberry Overseas",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Office – 510, Laxmi Enclave-2,Near Gajera School",
      addressLocality: "Surat",
      addressRegion: "State",
      postalCode: "395004",
      addressCountry: "India",
    },
    telephone: "+919854499900",
    url: "https://heartberry.vercel.app",
  };
  return (
    <>
      <Head>
        <title>
          Wholesale Medicines at Heartberry Overseas - Quality Pharmaceutical
          Solutions
        </title>
        <meta
          name="description"
          content="Welcome to Heartberry Overseas, your gateway to affordable and quality pharmaceutical solutions. Discover a wide range of wholesale medicines dedicated to your well-being. Inquire now for the best healthcare products at competitive rates."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://heartberry.vercel.app" />
      </Head>
      <DynamicHome />
    </>
  );
};

export default Page;
