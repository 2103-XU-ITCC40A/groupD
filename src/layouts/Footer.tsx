import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/logo_white.png";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { ABOUT, SERVICES, SOCIALS } from "../static/list";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="sub-container py-14 px-4 sm:px-5 md:px-2">
        {/* CONTAINER AND LINKS | TOP */}
        <div className="mb-10  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-7">
          <div className="col-span-1 sm:col-span-2">
            <Link href="/">
              <Image src={logo} alt="website_logo" height={44} width={200} />
            </Link>
            <p className="my-8 font-medium leading-5 w-64 sm:w-60">
              {"Them and one moving the won't may, moving saw wherein."}
            </p>
            <p className="footer-year text-zinc-400 text-sm">
              {`© ${currentYear} Developed by Eluvent Inc.`}
            </p>
          </div>
          <div>
            <p className="footer-headers font-bold tracking-wide">
              SOCIAL MEDIA
            </p>
            <div className="flex flex-col mt-5">
              {SOCIALS.map((item, index) => {
                return (
                  <Link href="/" key={index}>
                    {item === "Facebook" ? (
                      <a className="flex flex-row items-center duration-200 hover:-translate-y-2 my-2">
                        <BsFacebook /> <span className="ml-3">{item}</span>
                      </a>
                    ) : item === "Instagram" ? (
                      <a className="flex flex-row items-center duration-200 hover:-translate-y-2 my-2">
                        <RiInstagramFill />
                        <span className="ml-3">{item}</span>
                      </a>
                    ) : (
                      <a className="flex flex-row items-center duration-200 hover:-translate-y-2 my-2">
                        <BsYoutube /> <span className="ml-3">{item}</span>
                      </a>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <p className="footer-headers font-bold">SERVICES</p>
            <div className="flex flex-col mt-5">
              {SERVICES.map((item, index) => {
                return (
                  <Link href="/" key={index}>
                    <a className="duration-200 hover:-translate-y-2 my-2">
                      {item}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div>
            <p className="footer-headers font-bold">ABOUT</p>
            <div className="flex flex-col mt-5">
              {ABOUT.map((item, index) => {
                return (
                  <Link href="/" key={index}>
                    <a className="duration-200 hover:-translate-y-2 my-2">
                      {item}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {/* CONTAINER AND LINKS | BOTTOM */}
        <div className="">
          <div className="border-b-2 mb-10" />
          <div className="flex flex-col justify-between md:flex-row">
            <div>Xavier Ateneo</div>
            <div>Cagayan de Oro City</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
