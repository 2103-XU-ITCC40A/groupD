import React from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import close from "../../public/icons/close.png";
import logo from "../../public/logo/logo.png";
import facebook from "../../public/social/facebook.png";
import instagram from "../../public/social/instagram.png";
import youtube from "../../public/social/youtube.png";
import twitter from "../../public/social/twitter.png";
import Link from "next/link";

export default function SideMobileNavigation({
  setIsSideMobileNavigationOpen,
}: {
  setIsSideMobileNavigationOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="side-mobile-navigation">
      <div className="container-side-mobile-navigation">
        {/* CLOSING HEADER SIDE MOBILE */}
        <nav className="closing-header-side-mobile">
          <div className="closing-header-navigation-logo">
            <Image src={logo} alt="website_logo" height={30} width={130} />
          </div>
          <Button
            light
            auto
            onClick={() => setIsSideMobileNavigationOpen(false)}
          >
            <Image src={close} width={35} height={35} alt="close" />
          </Button>
        </nav>

        {/* CLOSING BODY SIDE MOBILE MENU */}
        <main className="closing-header-menu">
          <Link href="/">
            <p className="closing-header-link">Home</p>
          </Link>
          <Link href="/">
            <p className="closing-header-link">Admissions</p>
          </Link>
          <Link href="/">
            <p className="closing-header-link">Academics</p>
          </Link>
          <Link href="/">
            <p className="closing-header-link">Scholarships</p>
          </Link>
          <Link href="/">
            <p className="closing-header-link">About</p>
          </Link>
        </main>

        {/* CLOSING FOOTER SIDE MOBILE DETAILS */}
        <footer className="closing-footer-details">
          <p>Email: xavier-ateneo@xu.edu.ph</p>
          <p>Phone: +67 674 865 7839</p>

          <div className="closing-footer-details-socials">
            <Link href="/">
              <p className="closing-header-socials">
                <Image src={facebook} width={20} height={20} alt="logo" />
              </p>
            </Link>
            <Link href="/">
              <p className="closing-header-socials">
                <Image src={instagram} width={20} height={20} alt="logo" />
              </p>
            </Link>
            <Link href="/">
              <p className="closing-header-socials">
                <Image src={youtube} width={20} height={20} alt="logo" />
              </p>
            </Link>
            <Link href="/">
              <p className="closing-header-socials">
                <Image src={twitter} width={20} height={20} alt="logo" />
              </p>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
