

import SignUpModal from "@/components/common/SignupModel";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";

import React from "react";
export const metadata = {
  title: "Adventurist's Link ",
  description:
    "Adventurist's Link is a MERN full stack application to meet fellow travelers",
  icons: {
    icon: "/assets/img/logoAdv.svg",
  },
};
const page = () => {
  return (
    <>
      <Header2 />
      <SignUpModal/>
      <Footer />
    </>
  );
};

export default page;