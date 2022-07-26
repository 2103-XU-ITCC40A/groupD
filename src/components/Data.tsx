import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ATENEO_NEWS } from "../../src/static/list";
import Image from "next/image";
import mama from "../../public/images/school.jpg";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Data = ({ uniqueId, newsOne }: { uniqueId: any; newsOne: any }) => {
  return (
    <div className="each-news-container">
      <h1>sdfsdf</h1>
      <div className="flex justify-center items-center mr-0 md:mr-5">
        <Image
          style={{
            borderRadius: 5,
          }}
          src={newsOne?.payload.photoUrl || mama}
          alt="sdfs"
          width={550}
          height={500}
        />
      </div>
      <div className="each-right-content ">
        <h1 className="each-right-header text-center md:text-left mt-8 md:mt-0">
          {newsOne?.payload.title}
        </h1>
        <p className="each-right-time">{newsOne?.payload.timeDate}</p>
        <h1 className="each-right-description">
          {newsOne?.payload.description}
        </h1>
      </div>

      {/* BACK */}
      <Link href="/">
        <a className="back mx-auto w-28 h-[40px] rounded-full border-[3px] hover:text-white hover:bg-blue-600 border-blue-600 flex flex-row justify-center">
          back
        </a>
      </Link>
    </div>
  );
};

export default Data;
