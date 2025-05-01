const words = [
  { text: "Real", imgPath: "src/assets/real.svg" },
  { text: "Simulation", imgPath: "src/assets/simulation.svg" },
  { text: "Ideas", imgPath: "src/assets/ideas.svg" },
  { text: "Plastic", imgPath: "src/assets/plastic.svg" },
  { text: "River", imgPath: "src/assets/river.svg" },
  { text: "pollution", imgPath: "src/assets/pollution.svg" },
  { text: "SDGs", imgPath: "src/assets/SDG.svg" },
  { text: "Chemistry", imgPath: "src/assets/Chemistry.svg" },
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
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
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
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
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
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "",
    logoPath: "",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

export
{
    words,
    counterItems,
    navLinks,
    expCards
};