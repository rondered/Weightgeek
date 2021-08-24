import React from "react";
import { useLocation } from "wouter";

const items = [
  { name: "Logbook", path: "/logbook" },
  { name: "Logbook", path: "/logbook" },
  { name: "Logbook", path: "/logbook" },
];

export const useMenuItems = () => {
  const [location, setLocation] = useLocation();

  return { items, currentItem: items.find((item) => item.path === location) };
};
