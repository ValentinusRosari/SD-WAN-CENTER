import { routes } from "@/config/routes";
import {
  PiChartBarDuotone,
  PiUser,
  PiTicket,
  PiWarning,
  PiArchiveBox,
} from "react-icons/pi";

// Note: do not add href in the label object, it is rendering as label
export const menuItems = [
  {
    name: "Dashboard",
    href: routes.main.dashboard,
    icon: <PiChartBarDuotone />,
    badge: "",
  },
  {
    name: "Ticket",
    href: routes.tables.stickyHeader,
    icon: <PiTicket />,
  },
  {
    name: "Alarm",
    href: routes.alarm.dashboard,
    icon: <PiWarning />,
    badge: "New",
  },
  {
    name: "Inventory",
    href: routes.inventory.products,
    icon: <PiArchiveBox />,
    badge: "New",
  },
  {
    name: "User",
    href: routes.user.home,
    icon: <PiUser />,
  },
];
