import {
  UilEstate,
  UilScenery,
  UilUser,
  UilFileAlt,
  UilMessage,
  UilLinkedinAlt,
  UilInstagram,
  UilGithubAlt,
} from "@iconscout/react-unicons";
import { FC } from "react";

type NavItemsType = {
  name: string;
  icon: FC;
  link: string;
};

export const NavItems: NavItemsType[] = [
  {
    name: "Home",
    icon: UilEstate,
    link: "#home",
  },
  {
    name: "About",
    icon: UilUser,
    link: "#about",
  },
  {
    name: "Skills",
    icon: UilFileAlt,
    link: "#skills",
  },
  {
    name: "Portfolio",
    icon: UilScenery,
    link: "#portfolio",
  },
  {
    name: "Contact",
    icon: UilMessage,
    link: "#contact",
  },
];

export const SocialIcons = [
  { icon: UilLinkedinAlt, link: "https://" },
  { icon: UilInstagram, link: "https://" },
  { icon: UilGithubAlt, link: "https://" },
];
