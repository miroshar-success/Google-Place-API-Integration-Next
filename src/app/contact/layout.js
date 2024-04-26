import Breadcrumb from "@/components/common/Breadcrumb";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <Header2 />
      <Breadcrumb pagename="Contact Us" pagetitle="Contact Us" />
      {children}
      <Footer />
    </>
  );
};

export default layout;
