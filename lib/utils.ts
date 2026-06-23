import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilScenery,
  UilMessage,
  UilLinkedinAlt,
  UilGithubAlt,
  UilTwitterAlt,
} from "@iconscout/react-unicons";
import { Mail, MessageCircle, Twitter } from "lucide-react";
import { FC } from "react";

type NavItemsType = {
  name: string;
  icon: FC;
  link: string;
};

export const NavItems: NavItemsType[] = [
  { name: "Home",          icon: UilEstate,  link: "#home" },
  { name: "About",         icon: UilUser,    link: "#about" },
  { name: "Skills",        icon: UilFileAlt, link: "#skills" },
  { name: "Experience",    icon: UilFileAlt, link: "#qualification" },
  { name: "Projects",      icon: UilScenery, link: "#portfolio" },
  { name: "Contact",       icon: UilMessage, link: "#contact" },
];

export const SocialIcons = [
  { icon: UilLinkedinAlt, link: "https://www.linkedin.com/in/olatunde-adegboyebo", label: "LinkedIn" },
  { icon: UilGithubAlt,   link: "https://github.com/tundx0",                        label: "GitHub" },
  { icon: UilTwitterAlt,  link: "https://twitter.com/TundeAlex1",                   label: "Twitter / X" },
];

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "tundx0@gmail.com",
    action: "Send mail",
    url: "mailto:tundx0@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+234 808 485 1268",
    action: "Message me",
    url: "https://wa.me/2348084851268",
  },
  {
    icon: Twitter,
    title: "X (Twitter)",
    value: "@TundeAlex1",
    action: "Follow me",
    url: "https://twitter.com/TundeAlex1",
  },
];
