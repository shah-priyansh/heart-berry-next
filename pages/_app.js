// pages/_app.js

import Layout from "@/components/layout";
import Script from "next/script";
import React, { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
      <link
        rel="shortcut icon"
        href="assets/images/Faviocn.png"
        type="image/x-icon"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Livvic:wght@300;400;500;600;700;900&display=swap"
        rel="stylesheet"
      />

      <link href="assets/css/animate.css" rel="stylesheet" type="text/css" />

      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/font-awesome-line-awesome/css/all.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
      />

      <link
        href="assets/css/magnific-popup.css"
        rel="stylesheet"
        type="text/css"
      />

      <link
        href="assets/css/owl.carousel.css"
        rel="stylesheet"
        type="text/css"
      />

      <link
        href="assets/css/lightslider.min.css"
        rel="stylesheet"
        type="text/css"
      />

      <link href="assets/css/base.css" rel="stylesheet" type="text/css" />

      <link href="assets/css/shortcodes.css" rel="stylesheet" type="text/css" />

      <link href="assets/css/spacing.css" rel="stylesheet" type="text/css" />

      <link href="assets/css/style.css" rel="stylesheet" type="text/css" />

      <link href="#" data-style="styles" rel="stylesheet" />
      <link
        href="assets/css/color-customizer.css"
        rel="stylesheet"
        type="text/css"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Script src="/assets/js/theme.js" strategy="beforeInteractive" />
      <Script src="/assets/js/theme-plugin.js" strategy="beforeInteractive" />
      // <Script src="/assets/js/theme-script.js" strategy="beforeInteractive" />
    </>
  );
}

export default MyApp;
