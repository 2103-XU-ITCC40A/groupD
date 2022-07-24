import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ATENEO_NEWS } from "../../src/static/list";
import Image from "next/image";
import mama from "../../public/images/school.jpg";
import { GetServerSideProps, GetStaticProps } from "next";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Data from "../../src/components/Data";
import Loading from "../../src/layouts/Loading";

export default function EachNews() {
  // THIS IS JUST A DYNAMIC WEBPAGE THAT FETCH FROM STATIC DATA.
  const router = useRouter();
  const uniqueId = router.query.id;

  const [newsOne, setNewsOne] =
    React.useState<null | NewsInterfaceComponentSingle>();

  async function news() {
    const newsData = await fetch(
      "http://localhost:3000/api/singleNews?_id=" + uniqueId
    );
    const responseDataNews = await newsData.json();

    setNewsOne(responseDataNews);
  }

  useEffect(() => {
    news();
  }, []);

  if (!newsOne) {
    return <Loading />;
  }

  return (
    <div className="sub-container">
      {/* DATA */}
      <Data uniqueId={uniqueId} newsOne={newsOne} />
    </div>
  );
}
