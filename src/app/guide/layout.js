import Newslatter from "@/components/common/Newslatter";
import Footer from "@/components/footer/Footer";
import Header2 from "@/components/header/Header2";


export const metadata = {
  title: "Adventurist's Link ",
  description:
    "Adventurist's Link is a MERN full stack application to meet fellow travelers",
  icons: {
    icon: "/assets/img/logoAdv.svg",
  },
};

const layout = ({ children }) => {
  return (
    <>
      <Header2 />
      {children}
      <Newslatter />
      <Footer />
    </>
  );
};

export default layout;
