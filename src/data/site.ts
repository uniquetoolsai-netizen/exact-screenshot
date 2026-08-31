import {
  Car,
  Gamepad2,
  Ghost,
  Mountain,
  PartyPopper,
  Smile,
  Snowflake,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";

import arcadeRide from "@/assets/rides/arcade.jpg";
import bowlingRide from "@/assets/rides/bowling.png";
import kartingRide from "@/assets/rides/karting.png";
import vrRide from "@/assets/rides/vr.png";
import bumperRide from "@/assets/rides/bumper.jpg";
import hauntedRide from "@/assets/rides/haunted.jpeg";
import kidsRide from "@/assets/rides/kids.jpg";
import outdoorRide from "@/assets/rides/outdoor.jpg";
import snowRide from "@/assets/rides/snow.jpg";
import trampolineRide from "@/assets/rides/trampoline.jpg";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Attractions", to: "/attractions" },
  { label: "Packages", to: "/packages" },
  { label: "Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const attractions = [
  { name: "Arcade Games Zone", tag: "Play, Win & Repeat", meta: "150+ machines", img: arcadeRide, Icon: Gamepad2 },
  { name: "Bowling Alley", tag: "Roll Strikes & Spares", meta: "Pro lanes", img: bowlingRide, Icon: Trophy },
  { name: "Go Karting", tag: "Life Is Short, Track Is Long", meta: "Speed track", img: kartingRide, Icon: Zap },
  { name: "VR Gaming Arena", tag: "Enter Another Reality", meta: "Free roam", img: vrRide, Icon: Sparkles },
  { name: "Bumper Cars", tag: "Crash, Drift & Laugh Together", meta: "Group fun", img: bumperRide, Icon: Car },
  { name: "Haunted House", tag: "Dare To Enter The Darkness", meta: "Live scares", img: hauntedRide, Icon: Ghost },
  { name: "Kids Play Area", tag: "Unlimited Smiles & Tiny Adventures", meta: "Ages 2–10", img: kidsRide, Icon: Smile },
  { name: "Outdoor Adventure", tag: "Adventure Beyond Every Limit", meta: "Open air", img: outdoorRide, Icon: Mountain },
  { name: "Snow Park", tag: "Feel The Magic Of Real Snow", meta: "Real snow", img: snowRide, Icon: Snowflake },
  { name: "Trampoline Park", tag: "Jump Higher, Play Harder", meta: "Foam pit", img: trampolineRide, Icon: PartyPopper },
];

export const branchCities = [
  "Ahmedabad SBR",
  "Ahmedabad SG Highway",
  "Ahmedabad Ranip",
  "Ahmedabad Nikol",
  "Rajkot",
  "Gandhidham",
  "Vadodara",
  "Mehsana",
];
