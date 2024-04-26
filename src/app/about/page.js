import Breadcrumb from "@/components/common/Breadcrumb";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Team from "@/components/team/Home2Team";
import Home2Blog from "@/components/blog/Home2Blog";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import Home2About from "@/components/about/Home2About";
import Header2 from "@/components/header/Header2";
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
      <Breadcrumb pagename="About Us" pagetitle="About Us" />
      <Home2About />
      <Home2WhyChoose />
      <Home2Activities />
      <Newslatter />
      <Footer />
    </>
  );
};

export default page;
