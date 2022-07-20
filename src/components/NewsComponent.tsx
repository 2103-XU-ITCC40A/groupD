import React from "react";
import { ATENEO_NEWS } from "../static/list";
import { FiBatteryCharging } from "react-icons/fi";

export default function NewsComponent({
  news,
}: {
  news: NewsInterfaceComponent;
}) {
  return (
    <div className="ateneo-news">
      <div className="sub-container">
        <p className="ateneo-news-title">Ateneo Spotlight</p>

        {/*  ATENEO NEWS BODY*/}
        <div className="ateneo-news-body">
          {news.payload.map((newsItem, index) => {
            return (
              <div className="ateneo-news-body-child px-2" key={index}>
                <div className="news-logo">
                  <FiBatteryCharging color="#ffffff" size={35} />
                </div>
                <h4 className="truncate w-full">{newsItem.title}</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
