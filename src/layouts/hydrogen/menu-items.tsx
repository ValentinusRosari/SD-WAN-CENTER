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
    href: routes.eCommerce.dashboard,
    icon: <PiChartBarDuotone />,
    badge: "",
  },
  {
    name: "Ticket",
    href: routes.support.dashboard,
    icon: <PiTicket />,
  },
  {
    name: "Alarm",
    href: routes.financial.dashboard,
    icon: <PiWarning />,
    badge: "New",
  },
  {
    name: "Inventory",
    href: routes.executive.dashboard,
    icon: <PiArchiveBox />,
    badge: "New",
  },
  {
    name: "User",
    href: routes.logistics.dashboard,
    icon: <PiUser />,
  },
];
