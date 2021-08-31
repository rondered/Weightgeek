import React from "react";
import { useLocation } from "wouter";
import {
  FiEdit2 as LogbookIcon,
  FiActivity as StatsIcon,
} from "react-icons/fi";
import HomeIcon from '@/assets/icons/home.svg'

const items = [
  { name: "Home", path: "/", icon: HomeIcon },
  { name: "Logbook", path: "/logbook", icon: LogbookIcon },
  { name: "Stats", path: "/stats", icon: StatsIcon },
];

export const useMenuItems = () => {
  const [location, setLocation] = useLocation();

  return { items, currentItem: items.find((item) => item.path === location) };
};
