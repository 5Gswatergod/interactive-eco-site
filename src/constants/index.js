const HomeWords = [
  { text: "Real", imgPath: "images/Real.svg" },
  { text: "Compound", imgPath: "images/Compound.svg" },
  { text: "Ideas", imgPath: "images/Ideas.svg" },
  { text: "Plastic", imgPath: "images/Plastic.svg" },
  { text: "River", imgPath: "images/River.svg" },
  { text: "pollution", imgPath: "images/Pollution.svg" },
  { text: "SDGs", imgPath: "images/SDG.svg" },
  { text: "Chemistry", imgPath: "images/Chemistry.svg" },
];

const GeographyWords = [
  { text: "Geography", imgPath: "images/Geography.svg" },
  { text: "Analyze", imgPath: "images/Analyze.svg" },
  { text: "GIS", imgPath: "images/GIS.svg" },
  { text: "Plastic", imgPath: "images/Plastic.svg" },
  { text: "Research", imgPath: "images/Research.svg" },
  { text: "River", imgPath: "images/River.svg" },
  { text: "Pollution", imgPath: "images/Pollution.svg" },
  { text: "SDGs", imgPath: "images/SDG.svg" },
];

const ChemistryWords = [
  { text: "Chemistry", imgPath: "images/Chemistry.svg" },
  { text: "Experiment", imgPath: "images/Experiment.svg" },
  { text: "Atom", imgPath: "images/Atom.svg" },
  { text: "Plastic", imgPath: "images/Plastic.svg" },
  { text: "Research", imgPath: "images/Research.svg" },
  { text: "H2O", imgPath: "images/Water.svg" },
  { text: "Pollution", imgPath: "images/Pollution.svg" },
  { text: "SDGs", imgPath: "images/SDG.svg" },
];

const counterItems = [
  { label: 1, job: "Art Director", name: "Ipung", surname: "Chen" },
  { label: 2, job: "Project Reasercher", name: "Eric", surname: "Tzeng" },
  { label: 3, job: "Website Engineer", name: "Eason", surname: "Lo" },
];

const navLinks = [
  { name: "Home", link: "/" },
  { name: "Grography", link: "/Geography" },
  { name: "Chemistry", link: "/Chemistry" },
  { name: "Reflection", link: "/Reflection" },
  { name: "Resources", link: "/Resources" },
];

const expCards = [
  {
    review: "Project Idea",
    imgPath: "images/ProjectPlanning.png",
    logoPath: "images/Logo.png",
    title: "Project Conception",
    date: "March 19 - March 20, 2025",
    responsibilities: ["Initial brainstorming and idea framing as a group."],
  },
  {
    review: "Poster #1",
    imgPath: "images/Poster1.jpg",
    logoPath: "images/Logo.png",
    title: "Poster Design Phase 1",
    date: "March 26 - April 10, 2025",
    responsibilities: [
      "Communicated project purpose and introduced team members visually.",
    ],
  },
  {
    review: "Poster #2.jpg",
    imgPath: "images/Poster2.jpg",
    logoPath: "images/Logo.png",
    title: "Poster Design Phase 2",
    date: "April 8 - April 17, 2025",
    responsibilities: [
      "Illustrated GIS analysis and TiO₂ chemical cleanup steps.",
    ],
  },
  {
    review: "Poster #3",
    imgPath: "images/Poster3.jpg",
    logoPath: "images/Logo.png",
    title: "Poster Design Phase 3",
    date: "April 8 - April 24, 2025",
    responsibilities: [
      "Explained research focus, problems, and chemical solution process using TiO₂ and sunlight.",
    ],
  },
  {
    review: "Website",
    imgPath: "images/Websites.png",
    logoPath: "images/Logo.png",
    title: "Website Development",
    date: "April 9 - May 7, 2025",
    responsibilities: [
      "Implemented frontend structure and deployed interactive content.",
    ],
  },
];

const reflectioncards = [
  {
    title: "What Did You Learn as a Group?",
    description:
      "We learned to effectively collaborate across disciplines—combining scientific research, interactive web development, and environmental awareness. We gained deeper insight into photocatalysis and plastic pollution while learning how to present complex issues engagingly."
  },
  {
    title: "What Was Challenging?",
    description:
      "Balancing scientific accuracy with engaging web design was difficult. Technical issues with responsive layout, animation timing, and 3D/map integration posed significant challenges we had to overcome."
  },
  {
    title: "How Did This Project Help You Grow?",
    description:
      "We became more confident in environmental science communication, improved in frontend development, and strengthened our team collaboration skills through problem-solving and shared responsibility."
  },
  {
    title: "What Do You Want Others to Do After Seeing Your Site?",
    description:
      "We hope people will be more aware of plastic pollution, take steps to reduce plastic use, and support environmental initiatives. We also hope they share the site to amplify awareness and action."
  }
]

const testimonials = [
  {
    name: "Titanum Dioxide",
    mentions: "TiO₂",
    review:
      "Titanium Dioxide (TiO₂) is a white, naturally occurring oxide of titanium widely used in sunscreens, paints, and photocatalysis.",
    imgPath: "images/TiO2.png",
  },
  {
    name: "Polyethylene Terephthalate",
    mentions: "PET",
    review:
      "Polyethylene Terephthalate (PET) is a widely used thermoplastic polymer known for its strength, light weight, and chemical resistance. It is commonly found in plastic bottles, food containers, and synthetic fibers.",
    imgPath: "images/PET.png",
  },
];

const socialImgs = [
  {
    name: "instagram",
    imgPath: "images/Instagram.jpg",
    link: "https://www.instagram.com/vis_betterworldlab/",
  },
  {
    name: "mail",
    imgPath: "images/gmail.jpg",
    link: "mailto:eason.lo@vis.tp.edu.tw",
  },
];

export
{
    HomeWords,
    GeographyWords,
    ChemistryWords,
    counterItems,
    navLinks,
    expCards,
    reflectioncards,
    socialImgs,
    testimonials,
};