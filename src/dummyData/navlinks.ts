import {
  Airplay,
  Layers,
  ShoppingBag,
  Users,
  FileText,
  Settings,
} from "react-feather";

const navLinks = [
  {
    id: 1,
    name: "Dashboard",
    icon: Airplay,
    path: "/",
    isActive: true,
  },
  {
    id: 2,
    name: "Inventory",
    icon: Layers,
    path: "/",
    isActive: false,
  },
  {
    id: 3,
    name: "Orders",
    icon: ShoppingBag,
    path: "/",
    isActive: false,
  },
  {
    id: 4,
    name: "Customers",
    icon: Users,
    path: "/",
    isActive: false,
  },
  {
    id: 5,
    name: "Reports",
    icon: FileText,
    path: "/",
    isActive: false,
  },
  {
    id: 6,
    name: "Settings",
    icon: Settings,
    path: "/",
    isActive: false,
  },
];

export default navLinks;
