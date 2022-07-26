import React from "react";
import { ATENEO_NEWS } from "../static/list";
import { FiBatteryCharging } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function NewsComponent({
  newsData,
}: {
  newsData: NewsInterface[];
}) {
  const rounter = useRouter();

  return (
    <div className="ateneo-news">
      <div className="sub-container">
        <p className="ateneo-news-title">Ateneo News</p>

        {/*  ATENEO NEWS BODY*/}
        <div className="ateneo-news-body">
          {newsData.map((newsItem, index) => {
            return (
              <Link
                key={index}
                href={`news/${newsItem._id}`}
                onClick={() => {
                  rounter.push(`news/${newsItem._id}`);
                }}
              >
                <div className="ateneo-news-body-child px-4">
                  <div className="news-logo">
                    <Image
                      src={newsItem.photoUrl}
                      alt="sdfsdf"
                      width={"100%"}
                      height={"100%"}
                      style={{
                        borderRadius: "100%",
                      }}
                    />
                    {/* <FiBatteryCharging color="#ffffff" size={35} /> */}
                  </div>
                  <h4 className="truncate w-full text-[#3A53A4]">
                    {newsItem.title}
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
