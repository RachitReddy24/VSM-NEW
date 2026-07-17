import {
  LayoutDashboard,
  Users,
  Building2,
  UserCog,
  CalendarDays,
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
    title: "User Management",
    icon: Users,
    path: "/admin/users",
  },
  {
    title: "Department Management",
    icon: Building2,
    path: "/admin/departments",
  },
  {
    title: "Employee Management",
    icon: UserCog,
    path: "/admin/employees",
  },
  {
    title: "Schedule Meeting",
    icon: CalendarDays,
    path: "/admin/schedule-meeting",
  },
  {
    title: "Visitor History",
    icon: ClipboardList,
    path: "/admin/visitor-history",
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