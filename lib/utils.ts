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
import { Mail, MessageCircle } from "lucide-react";
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
  {
    icon: UilLinkedinAlt,
    link: "https://www.linkedin.com/in/olatunde-adegboyebo",
  },
  { icon: UilInstagram, link: "https://instagram.com/tundx0" },
  { icon: UilGithubAlt, link: "https://github.com/tundx0" },
];

export const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "tundx0@gmail.com",
    action: "Write me",
    url: "mailto:tundx0@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "Whatsapp",
    value: "+2348084851268",
    action: "Write me",
    url: "https://wa.me/2348084851268",
  },
  {
    icon: MessageCircle,
    title: "X",
    value: "@TundeAlex1",
    action: "Write me",
    url: "https://twitter.com/TundeAlex1",
  },
];
