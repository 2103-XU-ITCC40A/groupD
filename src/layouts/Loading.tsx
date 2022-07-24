import React from "react";

export default function Loading() {
  return (
    <div className="h-auto animate-pulse">
      <div className="each-news-container">
        <div className="flex justify-center items-center mr-0 md:mr-5 mb-5 md:mb-0 bg-gray-300 rounded-lg"></div>
        <div className="each-right-content">
          <div className="bg-gray-300 h-8 w-full rounded-full my-2" />
          <div className="bg-gray-300 h-8 w-full rounded-full my-2" />
          <div className="bg-gray-300 h-8 w-full rounded-full my-2" />
          <div className="bg-gray-300 h-8 w-full rounded-full my-2" />

          <div className="bg-gray-300 h-4 w-full rounded-full my-5" />

          <div className="bg-gray-300 h-10 w-full rounded-full my-4" />
          <div className="bg-gray-300 h-10 w-full rounded-full my-4" />
          <div className="bg-gray-300 h-10 w-full rounded-full my-4" />
        </div>
      </div>
    </div>
  );
}
