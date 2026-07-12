import DashboardLayout from "../../layouts/roles/DashboardLayout";
import {
  Building2,
  Users,
  User,
  Search,
  Filter,
  Plus,
  MoreVertical,
} from "lucide-react";

function Departments() {
  const departments = [
    {
      id: 1,
      name: "Human Resources",
      manager: "Alex Smith",
      employees: 18,
      status: "Active",
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      name: "Information Technology",
      manager: "John Doe",
      employees: 52,
      status: "Active",
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: 3,
      name: "Finance",
      manager: "David Wilson",
      employees: 20,
      status: "Active",
      color: "from-green-600 to-emerald-500",
    },
    {
      id: 4,
      name: "Marketing",
      manager: "Emma Watson",
      employees: 16,
      status: "Active",
      color: "from-orange-500 to-yellow-500",
    },
    {
      id: 5,
      name: "Operations",
      manager: "Michael Brown",
      employees: 34,
      status: "Inactive",
      color: "from-purple-600 to-violet-500",
    },
    {
      id: 6,
      name: "Administration",
      manager: "Sophia Taylor",
      employees: 14,
      status: "Active",
      color: "from-indigo-600 to-blue-600",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Department Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage departments, managers and employee allocation.
            </p>

          </div>

          <button
            className="
              mt-5 lg:mt-0
              flex items-center gap-3
              px-6 py-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-semibold
              hover:scale-105
              transition-all
              shadow-xl
            "
          >
            <Plus size={20} />
            Add Department
          </button>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6">

          <StatCard title="Departments" value="12" />

          <StatCard title="Managers" value="12" />

          <StatCard title="Employees" value="156" />

          <StatCard title="Active" value="11" />

        </div>

        {/* Search */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

          <div className="flex flex-col lg:flex-row gap-4">

            <div className="relative flex-1">

              <Search
                size={20}
                className="absolute left-4 top-4 text-slate-500"
              />

              <input
                placeholder="Search Department..."
                className="
                  w-full
                  bg-slate-800
                  border
                  border-slate-700
                  rounded-2xl
                  py-4
                  pl-12
                  pr-4
                  text-white
                  placeholder:text-slate-500
                  focus:border-blue-500
                  outline-none
                "
              />

            </div>

            <button
              className="
                px-6
                rounded-2xl
                bg-slate-800
                border
                border-slate-700
                hover:border-blue-500
                text-white
                flex items-center gap-2
              "
            >
              <Filter size={18} />
              Filter
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">

          {departments.map((dept) => (

            <div
              key={dept.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-blue-500 transition-all shadow-xl"
            >

              <div className={`h-2 bg-gradient-to-r ${dept.color}`} />

              <div className="p-6">

                <div className="flex justify-between">

                  <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center">

                    <Building2
                      size={30}
                      className="text-cyan-400"
                    />

                  </div>

                  <button className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center">

                    <MoreVertical
                      size={18}
                      className="text-white"
                    />

                  </button>

                </div>

                <h2 className="text-white text-xl font-bold mt-6">
                  {dept.name}
                </h2>

                <div className="space-y-5 mt-6">

                  <Info
                    icon={User}
                    label="Manager"
                    value={dept.manager}
                  />

                  <Info
                    icon={Users}
                    label="Employees"
                    value={`${dept.employees} Members`}
                  />

                </div>

                <div className="flex justify-between items-center mt-8">

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      dept.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {dept.status}
                  </span>

                  <button className="text-cyan-400 font-semibold hover:text-cyan-300">
                    View →
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-6 shadow-xl">

      <p className="text-white/80">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3">

      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">

        <Icon
          size={18}
          className="text-cyan-400"
        />

      </div>

      <div>

        <p className="text-slate-400 text-sm">
          {label}
        </p>

        <h4 className="text-white font-semibold">
          {value}
        </h4>

      </div>

    </div>
  );
}

export default Departments;