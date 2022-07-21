import React from "react";
import { useRouter } from "next/router";
import { ATENEO_NEWS } from "../../src/static/list";
import Image from "next/image";
import mama from "../../public/images/school.jpg";

export default function EachNews() {
  // THIS IS JUST A DYNAMIC WEBPAGE THAT FETCH FROM STATIC DATA.
  const router = useRouter();
  const uniqueId = JSON.stringify(router.query.id);
  const parseId = parseInt(JSON.parse(uniqueId));

  return (
    <div className="sub-container">
      <div className="each-news-container">
        <div className="each-left-content">
          <Image
            style={{
              borderRadius: 5,
            }}
            src={mama}
            alt="sdfs"
            width={500}
            height={500}
          />
        </div>
        <div className="each-right-content">
          <h1 className="each-right-header">{ATENEO_NEWS[parseId].title}</h1>
          <p className="each-right-time">{ATENEO_NEWS[parseId].timeDate}</p>
          <h1 className="each-right-description">
            {ATENEO_NEWS[parseId].description}
          </h1>
        </div>
      </div>
    </div>
  );
}
