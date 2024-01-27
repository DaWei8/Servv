// import psc1 from "../assets/icons/cleaning-icon.svg"
import psc1 from "../assets/icons/plumbing-icon.svg";
import psc2 from "../assets/icons/cleaning-icon.svg";
import psc3 from "../assets/icons/lawn-icon.svg";
import psc4 from "../assets/icons/paint-icon.svg";
import psc5 from "../assets/icons/weight-icon.svg";
import psc6 from "../assets/icons/car-icon.svg";
import psc7 from "../assets/icons/truck-icon.svg";
import psc8 from "../assets/icons/catering-icon.svg";
import psc9 from "../assets/icons/hair-icon.svg";

import tstm1 from "../assets/images/testimonial_1.png";
import tstm2 from "../assets/images/testimonial_2.png";

import dashboardIcon from "../assets/icons/dashboard-icon.svg";
import profileIcon from "../assets/icons/user-tick.svg";
import projectsIcon from "../assets/icons/folder-open.svg";
import paymentsIcon from "../assets/icons/moneys.svg";
import historyIcon from "../assets/icons/clock.svg";
import supportIcon from "../assets/icons/message-question.svg";
import settingsIcon from "../assets/icons/setting-2.svg";
import logoutIcon from "../assets/icons/logout.svg";

import projectPicture from "../assets/images/project-picture-frame.png";
import profilePicture from "../assets/images/testimonial_1.png";


var popularServicesCards = [
  {
    title: "Plumbing and electrical repairs",
    icon: psc1,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEE9E9",
  },
  {
    title: "House cleaning and maid services",
    icon: psc2,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#F7E9FE",
  },
  {
    title: "Lawn care and landscaping",
    icon: psc3,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9FEEB",
  },
  {
    title: "Painting and home improvement",
    icon: psc4,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEF9E9",
  },
  {
    title: "Personal training and fitness classes",
    icon: psc5,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9FAFE",
  },
  {
    title: "Mobile car detailing and repairs",
    icon: psc6,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9F0FE",
  },
  {
    title: "Delivery and courier services",
    icon: psc7,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEE9E9",
  },
  {
    title: "Catering and event planning",
    icon: psc8,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#F7E9FE",
  },
  {
    title: "Beauty and grooming services",
    icon: psc9,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9FEEB",
  },
];

const whatForServiceCard = [
  {
    title: "Homeowners",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Students",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Small business owners",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Freelancers",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Professionals",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Artisans",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Local residents",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Creatives",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Talents",
    description: "Homeowners looking to renovate or repair their homes.",
  },
];

const testimonialsCard = [
  {
    picture: tstm1,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },

  {
    picture: tstm2,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },

  {
    picture: tstm1,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },

  {
    picture: tstm2,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },

  {
    picture: tstm1,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },

  {
    picture: tstm2,
    name: "Idowu Taiwo",
    title: "Mobile Car Detailing",
    description:
      "Serv has been the best thing to happen to me this year. I have gone from loan to loan. Now  i have cleared all debts and I can now take care of my family.",
  },
];

var discoverCards = [
  "Browse through a wide range of categories to find the right artisan for your needs",
  "Connect with verified and experienced professionals who are passionate about their work",
  "Get access to a simple and easy-to-use interface that makes finding the right artisan a breeze",
  "Enjoy the convenience of working with an artisan located near you",
];

const faqQuestionsAndAnswers = [
  {
    question: "Do I have to pay to use Servv?",
    answer:
      "No you don'have to pay to use Servv. However, servv also offers specific paid services to it users that help address their business needs",
    isExpanded: true,
  },

  {
    question: "How do i get started?",
    answer: "Lorem Ipsum",
    isExpanded: false,
  },
  {
    question: "When do i get paid?",
    answer: "Lorem Ipsum",
    isExpanded: false,
  },

  {
    question: "Can I cancel an appointment?",
    answer: "Lorem Ipsum",
    isExpanded: false,
  },
  {
    question: "How does billing work?",
    answer: "Lorem Ipsum",
    isExpanded: false,
  },
];

const sidebarContentTop = [
  {
    icon: dashboardIcon,
    title: "Dashboard",
    link: "./artisanDashboard",
  },
  {
    icon: profileIcon,
    title: "Profile",
    link: "./artisanProfile",
  },
  {
    icon: projectsIcon,
    title: "Projects",
    link: "./artisanProjects",
  },
  {
    icon: paymentsIcon,
    title: "Payments",
    link: "./artisanPayments",
  },
  {
    icon: historyIcon,
    title: "History",
    link: "./artisanHistory",
  },
  {
    icon: supportIcon,
    title: "Support",
    link: "./artisanSupport",
  },
];

const sidebarContentBottom = [
  {
    icon: settingsIcon,
    title: "Settings",
    link: "./artisanSettings",
  },
  {
    icon: logoutIcon,
    title: "Logout",
    link: "./logout",
  },
];

const projectContent = [
  {
    title: "Cloth Remodeling",
    date: "28 Jan - 10 Feb",
    description: "Short project description",
    rating: 4.5,
    status: "accepted",
    displayImage: projectPicture,
    images: {},
  },
  {
    title: "Cloth Remodeling",
    date: "28 Jan - 10 Feb",
    description: "Short project description",
    rating: 4.5,
    status: "pending",
    displayImage: projectPicture,
    images: {},
  },
  {
    title: "Cloth Remodeling",
    date: "28 Jan - 10 Feb",
    description: "Short project description",
    rating: 2.5,
    status: "accepted",
    displayImage: projectPicture,
    images: {},
  },
  {
    title: "Cloth Remodeling",
    date: "28 Jan - 10 Feb",
    description: "Short project description",
    rating: 4,
    status: "complete",
    displayImage: projectPicture,
    images: {},
  },
];

const serviceContent = [
  {
    title: "Mobile car detailing",
    date: "28 Jan 2024",
    description: "Skill offering description about what the skill is about.",
    artisanName: "Idowu Taiwo",
    rating: 4.5,
    status: "accepted",
    displayImage: projectPicture,
    profileImage: profilePicture,
    images: {},
    price: "N20,000",
  },
  {
    title: "Mobile car detailing",
    date: "28 Jan 2024",
    description: "Skill offering description about what the skill is about.",
    artisanName: "Idowu Taiwo",
    rating: 4.5,
    status: "accepted",
    displayImage: projectPicture,
    profile: profilePicture,
    images: {},
    price: "N20,000",
  },
  {
    title: "Mobile car detailing",
    date: "28 Jan 2024",
    description: "Skill offering description about what the skill is about.",
    artisanName: "Idowu Taiwo",
    rating: 4.5,
    status: "accepted",
    displayImage: projectPicture,
    profile: profilePicture,
    images: {},
    price: "N20,000",
  },
  {
    title: "Mobile car detailing",
    date: "28 Jan 2024",
    description: "Skill offering description about what the skill is about.",
    artisanName: "Idowu Taiwo",
    rating: 4.5,
    status: "accepted",
    displayImage: projectPicture,
    profile: profilePicture,
    images: {},
    price: "N20,000",
  },
];

const transactionData = [
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
];

const transactionData2 = [
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
  {
    date: "28-11-23",
    activity: "Payment for project",
    description: "Cloth Design project",
    status: "Success",
  },
];

const artisanProfileInfo = [
  {
    firstName: "Samuel",
    lastName: "Adesasnya",
    otherName: "Ajayi",
    country: "Nigeria",

    picture: profilePicture,
    name: "Abike Furnishing Ltd",
    workField: "Interior Decoration",
    location: ["Akure", "Ondo"],
    skills: ["Capentry", "Roofing", "Interior Decoration"],
    description:
      "I will do several things this that this that this lorem ipsum dolor sit imet. I will do several things this that this that this lorem ipsum dolor sit imet.",
  },
];
const clientProfileInfo = [
  {
    firstName: "Samuel",
    lastName: "Adesasnya",
    otherName: "Ajayi",
    country: "Nigeria",

    picture: profilePicture,
    name: "Abike Furnishing Ltd",
    workField: "Interior Decoration",
    location: ["Akure", "Ondo"],
    skills: ["Capentry", "Roofing", "Interior Decoration"],
    description:
      "I will do several things this that this that this lorem ipsum dolor sit imet. I will do several things this that this that this lorem ipsum dolor sit imet.",
  },
];

const liveChatOptions = [
  {
    title: "Complaint",
    description: "Lodge any complaints and suggestion you have",
  },
  {
    title: "Suggestion",
    description: "Give us the suggestions you have",
  },
  {
    title: "Need Assistance",
    description: "Having a problem and need assitance",
  },
  {
    title: "Report an Issue",
    description: "Report any issues you are having",
  },
];

const serviceReview = [
  {
    client: "Idowu Taiwo",
    // picture:{},
    rating: 4,
    review:
      "He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "James Taiwo",
    rating: 4,
    review:
      "He pays attention to details. He did a good job ",
  },
  {
    client: "Idowu Saheed",
    rating: 5,
    review:
      "He went above my expectations. He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "Mariam Tinubeh",
    rating: 4,
    review:
      "He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "James Taiwo",
    rating: 4,
    review:
      "He pays attention to details. He did a good job ",
  },
  {
    client: "Idowu Saheed",
    rating: 5,
    review:
      "He went above my expectations. He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "Mariam Tinubeh",
    rating: 4,
    review:
      "He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "James Taiwo",
    rating: 4,
    review:
      "He pays attention to details. He did a good job ",
  },
  {
    client: "Idowu Saheed",
    rating: 5,
    review:
      "He went above my expectations. He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "Mariam Tinubeh",
    rating: 4,
    review:
      "He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "James Taiwo",
    rating: 4,
    review:
      "He pays attention to details. He did a good job ",
  },
  {
    client: "Idowu Saheed",
    rating: 5,
    review:
      "He went above my expectations. He was very professional and delivered on time. I have zero complaints.",
  },
  {
    client: "Mariam Tinubeh",
    rating: 4,
    review:
      "He was very professional and delivered on time. I have zero complaints.",
  },
];

export {
  serviceReview,
  liveChatOptions,
  artisanProfileInfo,
  clientProfileInfo,
  transactionData,
  transactionData2,
  projectContent,
  sidebarContentTop,
  sidebarContentBottom,
  popularServicesCards,
  whatForServiceCard,
  testimonialsCard,
  discoverCards,
  serviceContent,
  faqQuestionsAndAnswers,
  psc1,
  psc2,
  psc3,
  psc4,
  psc5,
  psc6,
  psc7,
  psc8,
  psc9,
};
