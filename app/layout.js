"use client";

import "./globals.css";
import "./stylesheet.css";

import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

// Icons & Providers
import AdminSvgDefs from "@/assests/icons/adminIcon";
import SvgDefs from "@/assests/icons/icons";
import SvgIcon from "@/assests/icons/SvgIcon";
import Reduxprovider from "@/redux/ReduxProvider";

// Components
const Header = dynamic(() => import("@/components/Header/Header"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));
const SocialMediaSidebar = dynamic(() => import("@/components/SocialMediaSidebar/SocialMediaSidebar"));
const CertificationSideBar = dynamic(() => import("@/components/CertificationSideBar/CertificationSideBar"));
const AdminRoot = dynamic(() => import("@/components/AdminRoot/AdminRoot"));
const AdminLogin = dynamic(() => import("@/pages/AdminPages/AdminLogin/AdminLogin"));

export default function RootLayout({ children }) {
  
  const pathname = usePathname();
  const router = useRouter();

  const [isShowTop, setIsShowTop] = useState(false);

  const isAdminPath = pathname.startsWith("/admin");
  const authUser = typeof window !== "undefined" && JSON.parse(window.sessionStorage.getItem("authUser") || "false");
  const isResetPassword = pathname === "/admin/resetpassword";

  useEffect(() => {
    if (isAdminPath && !authUser && !isResetPassword) {
      router.push("/admin");
    } else if (authUser && pathname === "/admin") {
      router.push("/admin/announcement");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = document.documentElement.scrollTop || document.body.scrollTop;
      setIsShowTop(scroll > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (isAdminPath) {
    if (!authUser && !isResetPassword) return <AdminLogin />;
    if (authUser && pathname === "/admin") return null;

    return (
      <html lang="en">
        <body>
          <Reduxprovider>
            <AdminSvgDefs />
            <SvgDefs />
            <AdminRoot>{children}</AdminRoot>
          </Reduxprovider>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Reduxprovider>
          <SvgDefs />

          <header>
            <Header />
          </header>

          <main>
            <CertificationSideBar />
            <SocialMediaSidebar />
            {children}
          </main>

          <footer>
            <Footer />
          </footer>

          {isShowTop && (
            <Box onClick={scrollToTop} className="ScrollTop">
              <SvgIcon name="down-arrow" />
            </Box>
          )}
        </Reduxprovider>
      </body>
    </html>
  );
}
