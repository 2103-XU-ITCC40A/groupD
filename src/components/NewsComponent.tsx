import React from "react";
import { ATENEO_NEWS } from "../static/list";

export default function NewsComponent() {

  return (
    <div className="ateneo-news">
      <div className="sub-container">
        <p className="ateneo-news-title">Ateneo Spotlight</p>

      {/*  ATENEO NEWS BODY*/}
        <div className="ateneo-news-body">
          {
            ATENEO_NEWS.map((newsItem, index) => {
              return (
                <div className="ateneo-news-body-child" key={index}>
                  <p>dfsd</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
