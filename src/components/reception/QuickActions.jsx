import { Link } from "react-router-dom";
import {
  UserPlus,
  BadgeCheck,
  History,
  CreditCard,
} from "lucide-react";

const actions = [
  {
    title: "New Visitor",
    icon: UserPlus,
    path: "/visitor-onboarding",
  },
  {
    title: "Verify Visitor",
    icon: BadgeCheck,
    path: "/visit-verification",
  },
  {
    title: "Visitor History",
    icon: History,
    path: "/visitor-history",
  },
  {
    title: "Print Badge",
    icon: CreditCard,
    path: "/visitor-pass",
  },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-xl font-semibold mb-5">
        Quick Actions
      </h2>

      <div className="space-y-4">

        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100"
            >
              <Icon size={20} />

              <span>{item.title}</span>

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;