import DashboardLayout from "../../layouts/roles/DashboardLayout";
import {
  Users,
  CalendarDays,
  Building2,
  ClipboardList,
  UserPlus,
  BarChart3,
  Settings,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const stats = [
  {
    title: "Employees",
    value: 125,
    icon: Users,
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Meetings Today",
    value: 42,
    icon: CalendarDays,
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Visitors Today",
    value: 31,
    icon: ClipboardList,
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Departments",
    value: 12,
    icon: Building2,
    color: "from-orange-500 to-red-500",
  },
];

const meetings = [
  {
    time: "09:30 AM",
    visitor: "Rahul Sharma",
    host: "John Doe",
  },
  {
    time: "10:30 AM",
    visitor: "ABC Pvt Ltd",
    host: "Finance",
  },
  {
    time: "12:00 PM",
    visitor: "Vendor Meeting",
    host: "IT Department",
  },
];

const activities = [
  "Employee Added",
  "Meeting Scheduled",
  "Visitor Approved",
  "Visitor Checked-In",
  "Meeting Completed",
];

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="space-y-8">

        {/* Header */}

        <div>

          <h1 className="text-4xl font-bold text-white">
            Admin Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Manage employees, visitors, meetings and reports.
          </p>

        </div>

        {/* Statistics */}

        <div className="grid lg:grid-cols-4 gap-6">

          {stats.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6"
              >

                <div className="flex justify-between items-center">

                  <div>

                    <p className="text-slate-400">
                      {item.title}
                    </p>

                    <h2 className="text-4xl font-bold text-white mt-2">
                      {item.value}
                    </h2>

                  </div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                  >

                    <Icon
                      size={30}
                      className="text-white"
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Quick Actions */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">

          <h2 className="text-2xl font-bold text-white mb-6">
            Quick Actions
          </h2>

          <div className="grid lg:grid-cols-4 gap-6">

            <ActionCard
              title="Schedule Meeting"
              icon={CalendarDays}
              to="/admin/schedule-meeting"
            />

            <ActionCard
              title="Employees"
              icon={UserPlus}
              to="/employees"
            />

            <ActionCard
              title="Reports"
              icon={BarChart3}
              to="/reports"
            />

            <ActionCard
              title="Settings"
              icon={Settings}
              to="/settings"
            />

          </div>

        </div>

        {/* Bottom */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Meetings */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Today's Meetings
            </h2>

            <div className="space-y-5">

              {meetings.map((item) => (

                <div
                  key={item.time}
                  className="bg-slate-800 rounded-2xl border border-slate-700 p-5"
                >

                  <div className="flex justify-between">

                    <div>

                      <h3 className="text-white font-semibold">
                        {item.visitor}
                      </h3>

                      <p className="text-slate-400 mt-1">
                        Host : {item.host}
                      </p>

                    </div>

                    <span className="text-cyan-400 font-semibold">
                      {item.time}
                    </span>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* Activities */}

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

            <h2 className="text-2xl font-bold text-white mb-6">
              Recent Activity
            </h2>

            <div className="space-y-4">

              {activities.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4 bg-slate-800 border border-slate-700 rounded-2xl p-4"
                >

                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

                  <p className="text-white">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}

function ActionCard({ title, icon: Icon, to }) {
  return (
    <Link
      to={to}
      className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500 transition-all group"
    >

      <div className="flex justify-between items-center">

        <Icon
          className="text-cyan-400"
          size={32}
        />

        <ArrowRight
          className="text-slate-500 group-hover:text-cyan-400 transition"
          size={20}
        />

      </div>

      <h3 className="text-white font-bold mt-6 text-lg">
        {title}
      </h3>

    </Link>
  );
}

export default Dashboard;