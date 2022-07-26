import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/xa.png";
import React from "react";
import { Button } from "@nextui-org/react";
import menu from "../../public/icons/menu.png";
import SideMobileNavigation from "./SideMobileNavigation";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const [screenWidth, setScreenWidth] = React.useState<number>(0);
  const [isSideMobileNavigationOpen, setIsSideMobileNavigationOpen] =
    React.useState<boolean>(false);

  if (typeof window !== "undefined") {
    window.onresize = () => setScreenWidth(window.innerWidth);
  }

  return (
    <div className="navnav">
      <nav className="sub-container">
        <div className="navigation-logo">
          <Link href="/">
            <Image
              className="hover:cursor-pointer"
              src={logo}
              alt="website_logo"
              height={screenWidth >= 1026 ? 45 : screenWidth >= 620 ? 40 : 35}
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
          <Link href="/notFound">
            <p className="link">Academics</p>
          </Link>
          <Link href="/notFound1">
            <p className="link">Scholarships</p>
          </Link>
          <Link href="/notFound2">
            <p className="link">About</p>
          </Link>
          <Link href="/views/contacts">
            <p className="link-contacts">Contacts</p>
          </Link>
          {/* TAB MENU WHEN TABLET AND MOBILE */}
          <p
            className="link-menu"
            onClick={() => setIsSideMobileNavigationOpen(true)}
          >
            <Image src={menu} width={30} height={20} alt="menu" />
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
    </div>
  );
}
