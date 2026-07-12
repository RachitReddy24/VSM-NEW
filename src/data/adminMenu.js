import {
  LayoutDashboard,
  CalendarPlus,
  ClipboardList,
  BarChart3,
  Settings,
} from "lucide-react";

const adminMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/admin/dashboard",
  },
  {
    title: "Schedule Meeting",
    icon: CalendarPlus,
    path: "/admin/schedule-meeting",
  },
  {
    title: "Visitor Status",
    icon: ClipboardList,
    path: "/visitor-status",
  },
  {
    title: "Reports",
    icon: BarChart3,
    path: "/admin/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/admin/settings",
  },
];

export default adminMenu;