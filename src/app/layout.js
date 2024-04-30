"use client";
import "../../public/assets/css/bootstrap-icons.css";
import "../../public/assets/css/all.min.css";
import "../../public/assets/css/boxicons.min.css";
import "../../public/assets/css/fontawesome.min.css";
import "../../public/assets/css/swiper-bundle.min.css";
import "../../public/assets/css/nice-select.css";
import "../../public/assets/css/slick-theme.css";
 
import "../../public/assets/css/slick.css";
import "../../public/assets/css/bootstrap-datetimepicker.min.css";
import "../../public/assets/css/bootstrap.min.css";

import "../../public/assets/css/style.css";
import "../../public/assets/css/dashboard.css";
import { useEffect } from "react";
import { AuthProvider } from "@/hooks/AuthContext";
import dynamic from 'next/dynamic'



export default function RootLayout({ children }) {
  
  return (
      <html lang="en">
        <body>{children}</body>
      </html>
  );
}
