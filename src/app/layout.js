"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick-theme.css";
import "react-modal-video/css/modal-video.css"; 
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "react-datepicker/dist/react-datepicker.css";
import "../../public/assets/css/bootstrap.min.css";
import "yet-another-react-lightbox/styles.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/dashboard.css";
import { useEffect } from "react";
import { AuthProvider } from "@/hooks/AuthContext";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
}
