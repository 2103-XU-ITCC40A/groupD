import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/three.jpg";

const selectTopic = [
  { id: 0, topicName: "Enrollment" },
  { id: 1, topicName: "Addmission" },
  { id: 2, topicName: "Entrance Exam" },
  { id: 3, topicName: "Collges and Schools" },
  { id: 4, topicName: "Scholarships" },
  { id: 5, topicName: "Others" },
];

const ATENE_SPOTLIGHT = [
  {
    _id: "62cce065ae2f52e7af31f16b",
    imageName: "one",
    title: "XU Integrated Help Desk",
    imageUrl: "/_next/static/media/one.e345ea20.jpg",
  },
  {
    _id: "62cce065ae2f52e7af31f16c",
    imageName: "two",
    title: "83rd Commencement Exercises",
    imageUrl: "/_next/static/media/two.2e8916de.jpg",
  },
  {
    _id: "62cce065ae2f52e7af31f16d",
    imageName: "three",
    title: "Xavier Atene Historical Presevation",
    imageUrl: "/_next/static/media/three.73d372b7.jpg",
  },
];

const ATENEO_NEWS = [
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 0,
    title: "From XUGS with love: A message from Lianne Dumagil",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "Here's a hopeful message from one of our XU Grade School pupils, Lianne Dumagil, about the Xavier Ateneo Campus of the Future. Expanding Xavier Ateneo's post-pandemic learning spaces and opportunities, the new 21-hectare Masterson Campus is envisioned to catalyze development in Northern Mindanao with a green, sustainable, and state-of-the-art campus masterplan.",
    photoUrl:
      "https://www.xu.edu.ph/cache/mod_bt_contentslider/9ad4730aeb4f3c34dbdbb95437a78f80-Screenshot_191.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 1,
    title:
      "XU-CCS dean among new United Board Fellows, talks 21st-century learning in ‘Campus of the Future’",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Dean Apag was recently named as one of the fellows comprising the United Board’s 2022-2023 cohort. This program of the United Board for Christian Higher Education in Asia answers “the needs of leadership development for mid-career faculty and administrators from Asian colleges and universities.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/NewCOTF_Apag.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 2,
    title:
      "Xavier Ateneo School of Education holds 4th teacher Education Research Conference (TERC)",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "The Xavier University-Ateneo de Cagayan School of Education in partnership with the Basic Education departments, Northern Bukidnon State College, and  Fr. Hofileña Student Council (SOE Graduate Studies) successfully hosted the 4th Teacher Education Research Conference (TERC) last July 1-2, 2022.  The theme of this year's conference is Aspire. Collaborate. Excel: Strengthening Teaching-Learning Processes and Education Sustainability in the New Normal",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/VACC/asas1.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 3,
    title: "From XUGS with love: A message from Lianne Dumagil",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "Here's a hopeful message from one of our XU Grade School pupils, Lianne Dumagil, about the Xavier Ateneo Campus of the Future. Expanding Xavier Ateneo's post-pandemic learning spaces and opportunities, the new 21-hectare Masterson Campus is envisioned to catalyze development in Northern Mindanao with a green, sustainable, and state-of-the-art campus masterplan.",
    photoUrl:
      "https://www.xu.edu.ph/cache/mod_bt_contentslider/9ad4730aeb4f3c34dbdbb95437a78f80-Screenshot_191.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 4,
    title:
      "XU-CCS dean among new United Board Fellows, talks 21st-century learning in ‘Campus of the Future’",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Dean Apag was recently named as one of the fellows comprising the United Board’s 2022-2023 cohort. This program of the United Board for Christian Higher Education in Asia answers “the needs of leadership development for mid-career faculty and administrators from Asian colleges and universities.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/NewCOTF_Apag.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 5,
    title:
      "Xavier Ateneo College of Law Dean confirms Mayor Oscar Moreno as new addition to faculty roster",
    timeDate: "2022-07-16T13:15:59.887Z",
    description:
      "This came after Mayor Moreno issued a statement during an interview with the media at the recent Charter Day celebration of the city of Cagayan de Oro, that among the things he will do when his terms ends this month, is to go back to teaching.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/june/xx1.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 6,
    title: "From XUGS with love: A message from Lianne Dumagil",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "Here's a hopeful message from one of our XU Grade School pupils, Lianne Dumagil, about the Xavier Ateneo Campus of the Future. Expanding Xavier Ateneo's post-pandemic learning spaces and opportunities, the new 21-hectare Masterson Campus is envisioned to catalyze development in Northern Mindanao with a green, sustainable, and state-of-the-art campus masterplan.",
    photoUrl:
      "https://www.xu.edu.ph/cache/mod_bt_contentslider/9ad4730aeb4f3c34dbdbb95437a78f80-Screenshot_191.jpg",
  },
  {
    // _id: "62d2b74f0ba25a199f739b34",
    _id: 7,
    title:
      "Xavier Ateneo College of Law Dean confirms Mayor Oscar Moreno as new addition to faculty roster",
    timeDate: "2022-07-21T01:32:27.998Z",
    description:
      "This came after Mayor Moreno issued a statement during an interview with the media at the recent Charter Day celebration of the city of Cagayan de Oro, that among the things he will do when his terms ends this month, is to go back to teaching.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/june/xx1.jpg",
  },
];

const ABOUT = ["  Sample one", "Sample Two", "Sample Three"];
const SERVICES = [
  "Ateneo News",
  "Ateneo Events",
  "Admission",
  "Finance | Testing Center",
  "Atene Life",
];
const SOCIALS = ["Facebook", "Youtube", "Instagram"];

export { ATENE_SPOTLIGHT, ATENEO_NEWS, selectTopic, ABOUT, SERVICES, SOCIALS };
