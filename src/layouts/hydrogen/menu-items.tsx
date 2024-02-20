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
    href: routes.support.dashboard,
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
    href: routes.eCommerce.products,
    icon: <PiArchiveBox />,
    badge: "New",
  },
  {
    name: "User",
    href: routes.invoice.home,
    icon: <PiUser />,
  },
];
