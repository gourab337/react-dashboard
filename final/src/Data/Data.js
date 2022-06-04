// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilPen,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
//Sidebar Data
export const SidebarData = [
  {
      icon: UilEstate,
      heading: "Dashboard",
  },
  {
      icon: UilUsersAlt,
      heading: "All Classes",
  },
  {
      icon: UilClipboardAlt,
      heading: "Assignments",
  },
  {
      icon: UilChart,
      heading: "Privacy Policy",
  },
  {
      icon: UilPackage,
      heading: "About Us",
  },
]
// Analytics Cards Data
export const cardsData = [
  {
    title: "Integers",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 50,
    value: "Class 2",
    png: UilPen,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Algebra",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 25,
    value: "Class 1",
    png: UilPen,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Ratio & Proportions",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 75,
    value: "Class 3",
    png: UilPen,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Sanchit Goel",
    noti: "has completed Integer Set 3.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Aparna Kholia",
    noti: "has completed Fractions Set 1.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Ayaan Khan",
    noti: "has completed Algebra Class 2.",
    time: "2 hours ago",
  },
];
