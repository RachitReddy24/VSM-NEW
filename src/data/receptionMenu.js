import {
  LayoutDashboard,
  UserPlus,
  BadgeCheck,
  Users,
  QrCode,
  History,
} from "lucide-react";

const receptionMenu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/reception/dashboard",
  },
  {
    title: "Visitor Onboarding",
    icon: UserPlus,
    path: "/visitor-onboarding",
  },
  {
    title: "Visit Verification",
    icon: BadgeCheck,
    path: "/visit-verification",
  },
  {
    title: "Visitor Status",
    icon: Users,
    path: "/visitor-status",
  },
  {
    title: "Visitor Check-In",
    icon: QrCode,
    path: "/visitor-check-in",
  },
  {
    title: "Visitor History",
    icon: History,
    path: "/visitor-history",
  },
];

export default receptionMenu;