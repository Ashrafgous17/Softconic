import React from "react";
import Footer3 from "../footer/Footer3";
import Header4 from "../header/Header4";
import useBodyClass from "@/hooks/useBodyClass";
import Head from "next/head";

function Layout({ children }) {
  useBodyClass("home-dark2");
  return (
    <>
     <Head>
        <title>
          Hundred Dev - Software Development in a Jet Speed
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/img/sm-logo.svg" />
      </Head>
      <Header4 />
      {children}
      <Footer3 />
    </>
  );
}

export default Layout;
