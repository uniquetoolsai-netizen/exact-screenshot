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
  Crosshair,
  CircleDot,
  Cake,
} from "lucide-react";

import { photos } from "@/data/photos";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Attractions", to: "/attractions" },
  { label: "Packages", to: "/packages" },
  { label: "Branches", to: "/branches" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const attractions = [
  { name: "Arcade Games Zone", tag: "Play, Win & Repeat", meta: "150+ machines", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449727/Arced.jpg", Icon: Gamepad2 },
  { name: "Bowling Alley", tag: "Roll Strikes & Spares", meta: "Pro lanes", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449747/Bowling.jpg", Icon: Trophy },
  { name: "Go Karting", tag: "Life Is Short, Track Is Long", meta: "Speed track", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449747/Go_carting.jpg", Icon: Zap },
  { name: "VR Gaming Arena", tag: "Enter Another Reality", meta: "Free roam", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/VR.jpg", Icon: Sparkles },
  { name: "Bumper Cars", tag: "Crash, Drift & Laugh Together", meta: "Group fun", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449750/Bumper_carr.jpg", Icon: Car },
  { name: "Haunted House", tag: "Dare To Enter The Darkness", meta: "Live scares", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449752/Huated_house.jpg", Icon: Ghost },
  { name: "Kids Play Area", tag: "Unlimited Smiles & Tiny Adventures", meta: "Ages 2–10", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449774/Kids_play.jpg", Icon: Smile },
  { name: "Outdoor Adventure", tag: "Adventure Beyond Every Limit", meta: "Open air", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449773/outdoor_rides.jpg", Icon: Mountain },
  { name: "Snow Park", tag: "Feel The Magic Of Real Snow", meta: "Real snow", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/Snowpark.jpg", Icon: Snowflake },
  { name: "Trampoline Park", tag: "Jump Higher, Play Harder", meta: "Foam pit", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/Trampoline.jpg.jpg", Icon: PartyPopper },
  { name: "Box Cricket", tag: "Smash It Under The Neon", meta: "Cricket cage", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449774/Neon_Cricket_Cage_Portrait.jpg", Icon: CircleDot },
  { name: "Laser Tag", tag: "Lock, Load & Laser", meta: "Team battles", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449773/leser_war.jpg", Icon: Crosshair },
  { name: "Party Hall", tag: "Celebrate In Neon Style", meta: "Birthday hall", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449776/Luxury_Birthday_Hall_with_Neon_Backdrop.jpg", Icon: Cake },
];

const core = ["Arcade Games Zone", "Bowling Alley", "Kids Play Area", "Trampoline Park", "VR Gaming Arena", "Bumper Cars"];

/** Games available at each branch (from the branch-wise games sheet). */
export const branchGames: Record<string, string[]> = {
  "Ahmedabad SBR": [...core, "Haunted House", "Outdoor Adventure", "Box Cricket"],
  "Ahmedabad Nikol": [...core, "Haunted House", "Outdoor Adventure", "Box Cricket", "Go Karting", "Party Hall", "Laser Tag"],
  "Ahmedabad SG Highway": [...core, "Snow Park", "Outdoor Adventure", "Box Cricket", "Go Karting", "Party Hall"],
  Rajkot: [...core, "Laser Tag", "Box Cricket", "Haunted House", "Snow Park"],
  Gandhidham: [...core, "Snow Park", "Box Cricket", "Haunted House"],
  Mehsana: [...core, "Laser Tag", "Box Cricket", "Outdoor Adventure"],
  Vadodara: [...core],
  "Ahmedabad Ranip": [...core, "Box Cricket", "Outdoor Adventure"],
};

export const gamesForBranch = (city: string) =>
  (branchGames[city] ?? []).map((n) => attractions.find((a) => a.name === n)!).filter(Boolean);

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
