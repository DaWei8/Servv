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

import dashboardIcon from "../../assets/icons/dashboard-icon.svg";
import profileIcon from "../../assets/icons/user-tick.svg";
import projectsIcon from "../../assets/icons/folder-open.svg";
import paymentsIcon from "../../assets/icons/moneys.svg";
import historyIcon from "../../assets/icons/clock.svg";
import supportIcon from "../../assets/icons/message-question.svg";
import settingsIcon from "../../assets/icons/setting-2.svg";
import logoutIcon from "../../assets/icons/logout.svg";

var popularServicesCards = [
  {
    title: "Plumbing and electrical repairs",
    icon: psc1,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEE9E9",
  },
  {
    title: "House cleaning and maid services",
    icon:psc2,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#F7E9FE",
  },
  {
    title: "Lawn care and landscaping",
    icon:psc3,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9FEEB",
  },
  {
    title: "Painting and home improvement",
    icon:psc4,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEF9E9",
  },
  {
    title: "Personal training and fitness classes",
    icon:psc5,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9FAFE",
  },
  {
    title: "Mobile car detailing and repairs",
    icon:psc6,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#E9F0FE",
  },
  {
    title: "Delivery and courier services",
    icon:psc7,
    description: "Homeowners looking to renovate or repair their homes.",
    color: "#FEE9E9",
  },
  {
    title: "Catering and event planning",
    icon:psc8,
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
    title: "Homeowners",
    description: "Homeowners looking to renovate or repair their homes.",
  },
  {
    title: "Homeowners",
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


];

var discoverCards = [
  "Browse through a wide range of categories to find the right artisan for your needs",
  "Connect with verified and experienced professionals who are passionate about their work",
  "Get access to a simple and easy-to-use interface that makes finding the right artisan a breeze",
  "Enjoy the convenience of working with an artisan located near you",
];

const faqQuestionsAndAnswers = [
  {
    question: 'Do I have to pay to use Servv?',
    answer: 'Lorem Ipsum',
    isExpanded: false,
  },

  {
    question: 'How do i get started?',
    answer: 'Lorem Ipsum',
    isExpanded: false,
  },
  {
    question: 'When do i get paid?',
    answer: 'Lorem Ipsum',
    isExpanded: false,
  },

  {
    question: 'Can I cancel an appointment?',
    answer: 'Lorem Ipsum',
    isExpanded: false,
  },
  {
    question: 'How does billing work?',
    answer: 'Lorem Ipsum',
    isExpanded: false,
  },

]

const sidebarContent = [
  {
    "dashboard" : {
    "icon" : dashboardIcon,
    "title" : "Dashboard",
    "link" : "/Dashboard"
    }
  },
  {
    "profile" : {
    "icon" : profileIcon,
    "title" : "Profile",
    "link" : "/Dashboard"
  }
  },
  {
    "projects" : {
    "icon" : projectsIcon,
    "title" : "Projects",
    "link" : "/Dashboard"
  }
  },
  {
    "payments" : {
    "icon" : paymentsIcon,
    "title" : "Payments",
    "link" : "/Dashboard"
  }
  },
  {
    "history" : {
    "icon" : historyIcon,
    "title" : "History",
    "link" : "/Dashboard"
  }
  },
  {
    "support" : {
    "icon" : supportIcon,
    "title" : "Support",
    "link" : "/Dashboard"
  }
  },
  ]

  const sidebarContentBottom = [
    {
      "settings" : {
      "icon" : settingsIcon,
      "title" : "Settings",
      "link" : "/Dashboard"
    }
    },
    {
      "logout" : {
      "icon" : logoutIcon,
      "title" : "Dashboard",
      "link" : "/Dashboard"
    }
    },
  ]

export {
  sidebarContentTop,
  sidebarContentBottom,
  popularServicesCards,
  whatForServiceCard,
  testimonialsCard,
  discoverCards,
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
