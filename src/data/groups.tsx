import type { GroupCardProps } from "../components/GroupCard";
import Group_4 from "../images/Group_4.jpg";
import Group from "../images/Group_hero.jpeg";

export const groups: GroupCardProps[] = [
  {
    image: Group_4,
    title: "Hidak Önmagunkhoz - 150 órás önismereti pszihodráma csoport",
    description: "Biztonságban kapcsolódni úgy, hogy lehetek önmagam",
    date: "2026. április",
    location: "Budapest belváros",
    price: "33 000 Ft/alkalom (3300 Ft / óra)",
    status: "open",
    slug: "önismereti-pszihodráma",
    email: "hidak.onismeret@gmail.com",
  },
  {
    image: Group,
    title: "Nem vagyok elkésve - önismereti csoport fiatal felnőtteknek",
    description:
      "Van egy hely, ahol nem kell erősnek lenned és egy út, ami elvezet ahhoz, aki valójában vagy.",
    date: "2026. április",
    location: "Budapest belváros",
    price: "20 000 Ft / alkalom (6 alkalom)",
    status: "soon",
    slug: "fiatal-felnott-csoport",
    email: "hidak.onismeret@gmail.com",
  },
];