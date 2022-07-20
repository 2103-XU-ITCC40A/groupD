import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo.png";
import React from "react";
import { Button } from "@nextui-org/react";
import menu from "../../public/icons/menu.png";
import SideMobileNavigation from "./SideMobileNavigation";

export default function Header() {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [isSideMobileNavigationOpen, setIsSideMobileNavigationOpen] =
    React.useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.onresize = () => setScreenWidth(window.innerWidth);
  }
  return (
    <nav className="sub-container">
      <div className="navigation-logo">
        <Link href="/">
          <Image
            src={logo}
            alt="website_logo"
            height={screenWidth >= 1026 ? 43 : screenWidth >= 620 ? 38 : 30}
            width={screenWidth >= 1026 ? 180 : screenWidth >= 620 ? 160 : 130}
          />
        </Link>
      </div>

      <div className="navigation-links">
        <Link href="/">
          <p className="link">Home</p>
        </Link>
        <Link href="/views/admissions">
          <p className="link">Admissions</p>
        </Link>
        <Link href="/">
          <p className="link">Academics</p>
        </Link>
        <Link href="/">
          <p className="link">Scholarships</p>
        </Link>
        <Link href="/">
          <p className="link">About</p>
        </Link>
        <Link href="/">
          <p className="link-contacts">Contacts</p>
        </Link>
        {/* TAB MENU WHEN TABLET AND MOBILE */}
        <p
          className="link-menu"
          onClick={() => setIsSideMobileNavigationOpen(true)}
        >
          <Image src={menu} width={35} height={35} alt="menu" />
        </p>
      </div>

      {/* SIDE MOBILE NAVIGATION */}
      {screenWidth <= 1026
        ? isSideMobileNavigationOpen && (
            <SideMobileNavigation
              setIsSideMobileNavigationOpen={setIsSideMobileNavigationOpen}
            />
          )
        : null}
    </nav>
  );
}
