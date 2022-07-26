import One from "../../public/images/one.jpg";
import Two from "../../public/images/two.jpg";
import Three from "../../public/images/three.jpg";

const selectTopic = [
  { id: 11, topicName: "Select" },
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
    imageUrl: One,
  },
  {
    _id: "62cce065ae2f52e7af31f16c",
    imageName: "two",
    title: "83rd Commencement Exercises",
    imageUrl: Two,
  },
  {
    _id: "62cce065ae2f52e7af31f16d",
    imageName: "three",
    title: "Xavier Atene Historical Presevation",
    imageUrl: Three,
  },
];

const ATENEO_NEWS = [
  {
    _id: 0,
    title:
      "XAVIER ATENEAN to receive The Asia’s Good Governance and Public Service Awards",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "GREGORY LOUIS C. MAGBANUA, CFMP is a graduate of Xavier University - Ateneo de Cagayan of the School of Business and Management Class of 2018 with a Bachelor's Degree in Business Administration Major in Business Economics Management and is currently taking up his Master’s in Public Administration in Xavier University - Graduate School of Business and Governance and also the current Youth Administrator of the Oro Youth Development Oﬃce - City Government of Cagayan de Oro.",
    photoUrl:
      "https://www.xu.edu.ph/images/magis_awards/img/Magbanua_-_Photo_Frame.jpg",
  },
  {
    _id: 1,
    title:
      "Xavier Ateneo School of Education holds 4th teacher Education Research Conference (TERC)",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "The Xavier University-Ateneo de Cagayan School of Education in partnership with the Basic Education departments, Northern Bukidnon State College, and  Fr. Hofileña Student Council (SOE Graduate Studies) successfully hosted the 4th Teacher Education Research Conference (TERC) last July 1-2, 2022.  The theme of this year's conference is Aspire. Collaborate. Excel: Strengthening Teaching-Learning Processes and Education Sustainability in the New Normal.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/VACC/asas1.jpg",
  },
  {
    _id: 2,
    title: "From XUGS with love: A message from Lianne Dumagil",
    timeDate: "2022-07-16T13:04:15.416Z",
    description:
      "Here's a hopeful message from one of our XU Grade School pupils, Lianne Dumagil, about the Xavier Ateneo Campus of the Future. Expanding Xavier Ateneo's post-pandemic learning spaces and opportunities, the new 21-hectare Masterson Campus is envisioned to catalyze development in Northern Mindanao with a green, sustainable, and state-of-the-art campus masterplan.",
    photoUrl:
      "https://www.xu.edu.ph/cache/mod_bt_contentslider/9ad4730aeb4f3c34dbdbb95437a78f80-Screenshot_191.jpg",
  },
  {
    _id: 3,
    title:
      "XU-CCS dean among new United Board Fellows, talks 21st-century learning in ‘Campus of the Future’",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Dean Apag was recently named as one of the fellows comprising the United Board’s 2022-2023 cohort. This program of the United Board for Christian Higher Education in Asia answers “the needs of leadership development for mid-career faculty and administrators from Asian colleges and universities.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/NewCOTF_Apag.jpg",
  },
  {
    _id: 4,
    title:
      "2022 University Convocation recognizes 4 awardees with one common mission",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Xavier Ateneo’s 83rd Commencement Exercises last July 20, 2022 recognized four different individuals who share one common mission and achievement - witnessing the values of love and service and doing great service to the cause of humanity for God’s greater glory.",
    photoUrl:
      "https://www.xu.edu.ph/images/2021/img/july/Screenshot_2022-07-22_224747.jpg",
  },
  {
    _id: 5,
    title: "Forging Partnerships for Student Formation in the New Normal",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Last June 27, 2022, a Memorandum of Understanding and Contract of Engagement Signing Ceremony was held at the AVR 1 Old Library Building in Xavier University-Ateneo de Cagayan (XU-ADC) and was live streamed via zoom for participants whose locations are not in Cagayan de Oro  to officially forge the partnership between the Xavier University through the National Service Training Program (XU-NSTP) and its partner institutions within the City of Cagayan de Oro.",
    photoUrl: "https://www.xu.edu.ph/images/magis_awards/img/ssa1.jpg",
  },
  {
    _id: 6,
    title: "Higher Education Online Enrolment",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Pay a minimum of Php 3,000.00 down payment at the Finance Office or any of the accredited payment centers found in this link. (https://www.xu.edu.ph/payment-centers-finance).",
    photoUrl:
      "https://www.xu.edu.ph/images/2021/img/january/APPLY_ONLINE/jurisdoctorlaw12_FF.jpg",
  },
  {
    _id: 7,
    title:
      "Xavier Ateneo JHS reignites partnership with e-Education to improve mathematics teaching",
    timeDate: "2022-07-16T13:13:45.003Z",
    description:
      "Xavier Ateneo Junior High School once again welcomed to its Pueblo campus Japanese representatives from e-Education, Keirinkan, and Suken last July 14 for them to have a better understanding of how mathematics instruction was conducted through the school’s flexible learning program in the last two years. Dr. Pamela Pajente, junior high school principal, together with key administrators and all members of the mathematics department.",
    photoUrl: "https://www.xu.edu.ph/images/2021/img/july/jhh1.jpg",
  },
];

const ABOUT = ["Student Life", "Activities", "College Life"];
const SERVICES = [
  "Ateneo News",
  "Ateneo Events",
  "Admission",
  "Finance | Testing Center",
  "Atene Life",
];
const SOCIALS = [
  { url: "https://www.facebook.com/XavierAteneoOfficial", social: "Facebook" },
  {
    url: "https://www.youtube.com/c/XavierUniversityAteneodeCagayan",
    social: "Youtube",
  },
  { url: "https://www.instagram.com/xavierateneo/", social: "Instagram" },
];

export { ATENE_SPOTLIGHT, ATENEO_NEWS, selectTopic, ABOUT, SERVICES, SOCIALS };
