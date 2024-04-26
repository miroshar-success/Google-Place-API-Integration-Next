
import Home2Activities from "@/components/activities/Home2Activities";
import Home2Banner from "@/components/banner/Home2Banner";
import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";
import Home2Testimonial from "@/components/testimonial/Home2Testimonial";
import Home2ThrillingTour from "@/components/tourPackage/Home2ThrillingTour";
import Home2WhyChoose from "@/components/whyChoose/Home2WhyChoose";
import { AuthProvider } from "@/hooks/AuthContext";


export default function Home() {
  return (
    <AuthProvider>
    <>
     <Header2 />
      <Home2Banner />
      <Home2ThrillingTour />
      <Home2WhyChoose />
      <Home2Activities />
      <Home2Testimonial />
      <Newslatter />
      <Footer />
    </>
    </AuthProvider>
  );
}
