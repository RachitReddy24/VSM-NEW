import {
  Clock,
  Building2,
  UserCircle2,
  ArrowRight,
} from "lucide-react";

function StatusBadge({ status }) {
  const colors = {
    Approved: "bg-green-500/20 text-green-400 border-green-500/30",
    Pending: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    Completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    Rejected: "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full border text-xs font-semibold ${
        colors[status] || "bg-slate-700 text-white"
      }`}
    >
      {status}
    </span>
  );
}

function RecentVisitors({ visitors = [] }) {
  return (
    <div className="bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center px-6 py-5 border-b border-slate-800">

        <div>

          <h2 className="text-2xl font-bold text-white">
            Recent Visitors
          </h2>

          <p className="text-slate-400 mt-1">
            Latest visitor activity
          </p>

        </div>

        <button className="text-blue-400 hover:text-blue-300 flex items-center gap-2">

          View All

          <ArrowRight size={18} />

        </button>

      </div>

      {/* Rows */}

      <div>

        {visitors.map((visitor) => (

          <div
            key={visitor.id}
            className="flex justify-between items-center px-6 py-5 border-b border-slate-800 hover:bg-slate-800 transition"
          >

            {/* Left */}

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center">

                <UserCircle2
                  size={30}
                  className="text-white"
                />

              </div>

              <div>

                <h3 className="text-white font-semibold">

                  {visitor.name}

                </h3>

                <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">

                  <Building2 size={15} />

                  {visitor.host}

                </div>

              </div>

            </div>

            {/* Center */}

            <div className="hidden xl:block">

              <div className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300">

                {visitor.purpose}

              </div>

            </div>

            {/* Time */}

            <div className="hidden lg:flex items-center gap-2 text-slate-400">

              <Clock size={16} />

              {visitor.time}

            </div>

            {/* Status */}

            <StatusBadge
              status={visitor.status}
            />

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentVisitors;