import { motion } from "framer-motion";
import {
  Users,
  CalendarDays,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Today's Visitors",
    value: 126,
    icon: Users,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Meetings",
    value: 48,
    icon: CalendarDays,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "Checked In",
    value: 91,
    icon: CheckCircle2,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Pending",
    value: 12,
    icon: Clock3,
    color: "from-orange-500 to-yellow-500",
  },
];

function LoginStats() {
  return (
    <div className="grid grid-cols-2 gap-5">

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="
              rounded-3xl
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              p-6
            "
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-400 text-sm">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold text-white mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                `}
              >
                <Icon size={30} className="text-white" />
              </div>

            </div>

            <div className="mt-5">

              <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${70 + index * 7}%` }}
                  transition={{ duration: 1.5 }}
                  className={`
                    h-full
                    rounded-full
                    bg-gradient-to-r
                    ${item.color}
                  `}
                />

              </div>

            </div>

          </motion.div>
        );
      })}

    </div>
  );
}

export default LoginStats;