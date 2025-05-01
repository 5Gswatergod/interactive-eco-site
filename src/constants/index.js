import Real from "../assets/Real.svg";
import Simulation from "../assets/Simulation.svg";
import Ideas from "../assets/Ideas.svg";
import Plastic from "../assets/Plastic.svg";
import River from "../assets/River.svg";
import Pollution from "../assets/Pollution.svg";
import SDG from "../assets/SDG.svg";
import Chemistry from "../assets/Chemistry.svg";
import Instagram from "/images/Instagram.jpg";
import Gmail from "/images/gmail.jpg";

const words = [
  { text: "Real", imgPath: {Real} },
  { text: "Simulation", imgPath: {Simulation} },
  { text: "Ideas", imgPath: {Ideas} },
  { text: "Plastic", imgPath: Plastic },
  { text: "River", imgPath: {River} },
  { text: "pollution", imgPath: {Pollution} },
  { text: "SDGs", imgPath: {SDG} },
  { text: "Chemistry", imgPath: {Chemistry} },
];

const counterItems = [
  { label: 1, job: "jobtitle", name: "Inpug", surname: "Chen" },
  { label: 2, job: "jobtitle", name: "Eric", surname: "Tzeng" },
  { label: 3, job: "jobtitle", name: "Eason", surname: "Lo" },
];

const navLinks = [
  { name: "Home", link: "#Home" },
  { name: "Eco System", link: "#Eco-system" },
  { name: "Grography", link: "#Geography" },
  { name: "Chemistry", link: "#Chemistry" },
  { name: "Reflection", link: "#Reflection" },
  { name: "Resources", link: "#Resources" },
];

const expCards = [
  {
    review: "Demo",
    imgPath: "",
    logoPath: "",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Demo",
    imgPath: "",
    logoPath: "",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Demo",
    imgPath: "",
    logoPath: "",
    title: "Demo",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review: "Demo",
    imgPath: "",
    logoPath: "",
    title: "Demo",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
  {
    review: "Demo",
    imgPath: "",
    logoPath: "",
    title: "Demo",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: {Instagram},
  },
  {
    name: "mail",
    imgPath: {Gmail},
  },
];

export
{
    words,
    counterItems,
    navLinks,
    expCards,
    socialImgs
};