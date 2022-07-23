import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { ATENEO_NEWS } from "../../src/static/list";
import Image from "next/image";
import mama from "../../public/images/school.jpg";
import { GetServerSideProps, GetStaticProps } from "next";

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

  return (
    <div className="sub-container">
      {/* <h1>{JSON.stringify(newsOne)}</h1> */}
      <div className="each-news-container">
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
      </div>
    </div>
  );
}
