import Head from "next/head";
import React from "react";
import details from "../../src/static/details.json";
import Image from "next/image";
import { BsFacebook, BsYoutube } from "react-icons/bs";

export default function Admissions() {
  return (
    <div>
      <Head>
        <title>{details.details.addmissions_page.title}</title>
        <meta
          name="description"
          content="This app was created by Jovellabay."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="h-56 cons" />
        <div className="sub-container min-h-[500px] py-10 px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* LEFT */}
            <div className="md:border-r-4 md:pr-4">
              <p className="ee text-center text-2xl font-bold text-[#3A53A4] mb-2">
                Addmission Aid
              </p>
              <div className="kaka" />
              <div className="grid grid-cols-1 gap-3 my-8">
                <p className="hover:cursor-pointer hover:bg-gray-100 text-center text-base text-[#3A53A4] border-[3px] mx-2 py-2 rounded-lg border-[#3A53A4]">
                  Campus Map
                </p>
                <p className="hover:cursor-pointer hover:bg-gray-100 text-center text-base text-[#3A53A4] border-[3px] mx-2 py-2 rounded-lg border-[#3A53A4]">
                  International Student Applicatants
                </p>
                <p className="hover:cursor-pointer hover:bg-gray-100 text-center text-base text-[#3A53A4] border-[3px] mx-2 py-2 rounded-lg border-[#3A53A4]">
                  Request for Chage Program
                </p>
                <p className="hover:cursor-pointer hover:bg-gray-100 text-center text-base text-[#3A53A4] border-[3px] mx-2 py-2 rounded-lg border-[#3A53A4]">
                  Frequently Asked Questions
                </p>
              </div>
            </div>
            <div className="gri col-span-2 md:ml-4">
              <p className="ee text-md md:text-3xl text-center md:text-left text-[#3A53A4] font-bold">
                Welcome to Xavier Ateneo Admissions and Aid Office
              </p>
              <Image
                src="https://www.xu.edu.ph/images/admission/img/ADMISSION_LAYOUT_copy1.PNG"
                alt="sdfsdf"
                height={100}
                width={300}
              />
              <div className="border-b-2 my-4" />

              <p className="ee">
                Xavier University - Ateneo de Cagayan, the premier academic
                institution situated at the heart of Cagayan de Oro City in
                Northern Mindanao, is among Asia’s top universities, based on
                the 2021 Asian University Rankings released by London-based
                education and career consultancy Quacquarelli Symonds.
              </p>

              <p className="ee text-gray-400 my-10 text-sm italic">
                Parents, guardians, benefactors, and students may contact our
                Admissions Office through (088) 853-9800 local 9151 / 9157 /
                9158. Or, email aao@xu.edu.ph for undergraduate admissions
                queries and concerns.
              </p>

              <Image
                src="https://www.xu.edu.ph/images/2021/img/july/Online_Admissions_Application_Deadline.jpg"
                alt="sdfsdf"
                height={500}
                width={600}
              />
              <div className="flex flex-row">
                <a
                  className="flex flex-row items-center duration-200 hover:-translate-y-2 my-2 bg-blue-700 text-white py-2 px-4 mr-4 rounded-md"
                  href="https://www.facebook.com/XavierAteneoOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFacebook />
                  <span className="ml-3">Facebook</span>
                </a>
                <a
                  className="flex flex-row items-center duration-200 hover:-translate-y-2 my-2 bg-red-700 text-white py-2 px-4 mr-4 rounded-md"
                  href="https://www.youtube.com/c/XavierUniversityAteneodeCagayan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsYoutube /> <span className="ml-3">Youtube</span>
                </a>
              </div>

              <p className="ee text-sm italic text-gray-400 my-4">
                Published: 30 June 2022 Hits: 58372
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
