import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ATENEO_NEWS } from "../../src/static/list";
import Image from "next/image";
import mama from "../../public/images/xxxx.jpg";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Data from "../../src/components/Data";
import Loading from "../../src/layouts/Loading";

export default function EachNews() {
  // THIS IS JUST A DYNAMIC WEBPAGE THAT FETCH FROM STATIC DATA.
  const [angNews, setAngNews] = useState(0);
  const [angNewsTitle, setAngNewsTitle] = useState("");
  const [angNewsPhotoUrl, setAngNewsPhotoUrl] = useState("");
  const [angNewsContent, setAngNewsContent] = useState("");
  const [angNewsDate, setAngNewsDate] = useState("");

  useEffect(() => {
    const lala = window.location.pathname.split("/")[2];
    setAngNews(parseInt(lala));
    setAngNewsTitle(ATENEO_NEWS[angNews].title);
    setAngNewsPhotoUrl(ATENEO_NEWS[angNews].photoUrl);
    setAngNewsContent(ATENEO_NEWS[angNews].description);
    setAngNewsDate(ATENEO_NEWS[angNews].timeDate);
  }, []);

  return (
    <div>
      <div className="h-56 cons" />

      <div className="sub-container py-10 px-3 md:px-0">
        <div className="max-w-[800px] mx-auto">
          <p className="ee mt-4">{angNewsDate}</p>
          <div className="border-b-2 my-8" />
          <div className="my-10">
            <p className="ee text-center text-[20px] md:text-[30px] font-bold text-[#3A53A4]">
              {angNewsTitle}
            </p>

            <p className="ee my-6 text-justify indent-10">{angNewsContent}</p>
          </div>

          <Link href="/">
            <p className="ee max-w-[100px] mx-auto text-center border-[3px] rounded-full border-[#3A53A4] duration-700  hover:bg-[#3A53A4] hover:cursor-pointer hover:text-white">
              Done
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
