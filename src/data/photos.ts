import friends from "@/assets/photos/DSC02674.JPG.jpg.asset.json";
import wall from "@/assets/photos/DSC02697.JPG.jpg.asset.json";
import arcadeGroup from "@/assets/photos/DSC02725.JPG.jpg.asset.json";
import airHockey from "@/assets/photos/DSC04239.JPG.jpg.asset.json";
import gamePrizes from "@/assets/photos/DSC04476.JPG.jpg.asset.json";
import vrPlayers from "@/assets/photos/DSC04513.JPG.jpg.asset.json";
import vrRide from "@/assets/photos/DSC04604.JPG.jpg.asset.json";
import family from "@/assets/photos/DSC04906.JPG.jpg.asset.json";
import partyGroup from "@/assets/photos/DSC04953.JPG.jpg.asset.json";
import kidsRide from "@/assets/photos/DSC05028.JPG.jpg.asset.json";
import youngPlayers from "@/assets/photos/_DSC3288.JPG.jpg.asset.json";
import loungeFriends from "@/assets/photos/_DSC3389.JPG.jpg.asset.json";
import racing from "@/assets/photos/_DSC3468.JPG.jpg.asset.json";
import loungeGroup from "@/assets/photos/_DSC3513.JPG.jpg.asset.json";
import haunted from "@/assets/photos/_DSC3632.JPG.jpg.asset.json";

export const photos = {
  friends: friends.url,
  wall: wall.url,
  arcadeGroup: arcadeGroup.url,
  airHockey: airHockey.url,
  gamePrizes: gamePrizes.url,
  vrPlayers: vrPlayers.url,
  vrRide: vrRide.url,
  family: family.url,
  partyGroup: partyGroup.url,
  kidsRide: kidsRide.url,
  youngPlayers: youngPlayers.url,
  loungeFriends: loungeFriends.url,
  racing: racing.url,
  loungeGroup: loungeGroup.url,
  haunted: haunted.url,
};

export const galleryPhotos = [
  { img: photos.airHockey, label: "Air hockey", span: "sm:col-span-2 sm:row-span-2" },
  { img: photos.vrPlayers, label: "VR adventures", span: "" },
  { img: photos.racing, label: "Arcade racers", span: "" },
  { img: photos.partyGroup, label: "Group celebrations", span: "sm:col-span-2" },
  { img: photos.gamePrizes, label: "Winning moments", span: "" },
  { img: photos.vrRide, label: "Virtual reality", span: "" },
  { img: photos.kidsRide, label: "Little riders", span: "sm:col-span-2" },
  { img: photos.family, label: "Family days", span: "" },
  { img: photos.haunted, label: "Haunted house", span: "" },
  { img: photos.arcadeGroup, label: "Arcade crew", span: "sm:col-span-2" },
  { img: photos.friends, label: "Friends together", span: "" },
  { img: photos.wall, label: "FunBlast memories", span: "" },
  { img: photos.youngPlayers, label: "Young players", span: "sm:col-span-2" },
  { img: photos.loungeFriends, label: "Lounge catch-ups", span: "" },
  { img: photos.loungeGroup, label: "Good times together", span: "" },
];