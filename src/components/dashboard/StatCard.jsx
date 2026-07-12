import { motion } from "framer-motion";
import {
  Users,
  UserCheck,
  UserPlus,
  UserX,
  TrendingUp,
} from "lucide-react";

function StatCard({
  title,
  value,
  color = "from-blue-600 to-indigo-600",
  percentage = "+18%",
}) {
  const icons = {
    "Today's Visitors": Users,
    "Checked In": UserCheck,
    Pending: UserPlus,
    Rejected: UserX,
  };

  const Icon = icons[title] || Users;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl"
    >
      {/* Glow */}
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-blue-500/20 blur-3xl"></div>

      {/* Top Bar */}
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>

      <div className="relative p-6">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400 text-sm">
              {title}
            </p>

            <h2 className="text-5xl font-bold text-white mt-3">
              {value}
            </h2>

          </div>

          <div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${color}
            flex items-center justify-center shadow-xl`}
          >
            <Icon
              size={30}
              className="text-white"
            />
          </div>

        </div>

        {/* Bottom */}

        <div className="flex justify-between items-center mt-7">

          <div className="flex items-center gap-2">

            <TrendingUp
              size={18}
              className="text-green-400"
            />

            <span className="text-green-400 font-semibold">
              {percentage}
            </span>

            <span className="text-slate-500 text-sm">
              Today
            </span>

          </div>

          <div className="w-24 h-2 rounded-full bg-slate-700">

            <div
              className={`h-2 rounded-full bg-gradient-to-r ${color}`}
              style={{ width: "75%" }}
            ></div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}

export default StatCard;