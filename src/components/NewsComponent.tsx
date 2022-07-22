import React from "react";
import { ATENEO_NEWS } from "../static/list";
import { FiBatteryCharging } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NewsComponent() {

  const rounter = useRouter()

  return (
    <div className="ateneo-news">
      <div className="sub-container">
        <p className="ateneo-news-title">Ateneo Spotlight</p>

        {/*  ATENEO NEWS BODY*/}
        <div className="ateneo-news-body">
          {ATENEO_NEWS.map((newsItem, index) => {
            return (
              <Link key={index} href={`news/${newsItem._id}`} onClick={() => {
                rounter.push(`news/${newsItem._id}`)
              }}>
                  <div className="ateneo-news-body-child px-2">
                    <div className="news-logo">
                      <FiBatteryCharging color="#ffffff" size={35} />
                    </div>
                    <h4 className="truncate w-full">{newsItem.title}</h4>
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
