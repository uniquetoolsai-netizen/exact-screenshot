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
  { name: "Arcade Games", tag: "Play, Win & Repeat", meta: "150+ machines", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449727/Arced.jpg", Icon: Gamepad2 },
  { name: "Bowling", tag: "Roll Strikes & Spares", meta: "Pro lanes", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449747/Bowling.jpg", Icon: Trophy },
  { name: "Go-Karting", tag: "Life Is Short, Track Is Long", meta: "Speed track", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449747/Go_carting.jpg", Icon: Zap },
  { name: "VR", tag: "Enter Another Reality", meta: "Free roam", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/VR.jpg", Icon: Sparkles },
  { name: "Bumper Car", tag: "Crash, Drift & Laugh Together", meta: "Group fun", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449750/Bumper_carr.jpg", Icon: Car },
  { name: "Haunted House", tag: "Dare To Enter The Darkness", meta: "Live scares", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449752/Huated_house.jpg", Icon: Ghost },
  { name: "Kids Play Area", tag: "Unlimited Smiles & Tiny Adventures", meta: "Ages 2–10", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449774/Kids_play.jpg", Icon: Smile },
  { name: "Outdoor Rides", tag: "Adventure Beyond Every Limit", meta: "Open air", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449773/outdoor_rides.jpg", Icon: Mountain },
  { name: "Snow Park", tag: "Feel The Magic Of Real Snow", meta: "Real snow", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/Snowpark.jpg", Icon: Snowflake },
  { name: "Trampoline", tag: "Jump Higher, Play Harder", meta: "Foam pit", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449801/Trampoline.jpg.jpg", Icon: PartyPopper },
  { name: "Cricket", tag: "Smash It Under The Neon", meta: "Cricket cage", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449774/Neon_Cricket_Cage_Portrait.jpg", Icon: CircleDot },
  { name: "Laser Games", tag: "Lock, Load & Laser", meta: "Team battles", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449773/leser_war.jpg", Icon: Crosshair },
  { name: "Adventure Area", tag: "Adventure Beyond Every Limit", meta: "Adventure zone", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449773/outdoor_rides.jpg", Icon: Mountain },
  { name: "Party Hall", tag: "Celebrate In Neon Style", meta: "Birthday hall", img: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792449776/Luxury_Birthday_Hall_with_Neon_Backdrop.jpg", Icon: Cake },
];

const core = ["Arcade Games", "Bowling", "Kids Play Area", "Trampoline", "VR", "Bumper Car"];

/** Games available at each branch (from the branch-wise games sheet). */
export const branchGames: Record<string, string[]> = {
  "Ahmedabad SBR": [...core, "Haunted House", "Outdoor Rides", "Cricket"],
  "Ahmedabad Nikol": [...core, "Haunted House", "Outdoor Rides", "Cricket", "Go-Karting", "Party Hall", "Laser Games"],
  "Ahmedabad SG Highway": [...core, "Snow Park", "Outdoor Rides", "Cricket", "Go-Karting", "Party Hall"],
  Rajkot: [...core, "Laser Games", "Cricket", "Haunted House", "Snow Park"],
  Gandhidham: [...core, "Snow Park", "Cricket", "Haunted House"],
  Mehsana: [...core, "Laser Games", "Cricket", "Outdoor Rides"],
  Vadodara: [...core],
  "Ahmedabad Ranip": [...core, "Cricket", "Adventure Area"],
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


/** Branch thumbnail photos (Mehsana has none yet, so it uses a venue photo). */
export const branchPhotos: Record<string, string> = {
  "Ahmedabad SBR": "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450681/SBR_outside.jpg",
  "Ahmedabad SG Highway": "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450557/Gota.jpg",
  "Ahmedabad Ranip": "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450558/RANIP_YT.jpg",
  "Ahmedabad Nikol": "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450559/nikol.jpg",
  Rajkot: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450560/Rajkot.jpg",
  Gandhidham: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450556/GANDHIDHAM.jpg",
  Vadodara: "https://res.cloudinary.com/o6hhnpet/image/upload/v1792450556/Baroda.jpg",
};

export const branchPhoto = (city: string) => branchPhotos[city] ?? photos.arcadeGroup;
