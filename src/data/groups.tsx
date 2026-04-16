import type { GroupCardProps } from "../components/GroupCard";
import Pafrany from "../images/Pafrany.jpg";
import Hullam from "../images/Hullam.jpg";

export const groups: GroupCardProps[] = [
  {
    image: Pafrany,
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
    image: Hullam,
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