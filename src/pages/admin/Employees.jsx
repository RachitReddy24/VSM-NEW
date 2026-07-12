import DashboardLayout from "../../layouts/roles/DashboardLayout";
import {
  UserPlus,
  Search,
  Filter,
  MoreVertical,
  Mail,
  Building2,
} from "lucide-react";

function Employees() {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      department: "IT",
      email: "john@company.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Alex Smith",
      department: "HR",
      email: "alex@company.com",
      status: "Active",
    },
    {
      id: 3,
      name: "David Wilson",
      department: "Finance",
      email: "david@company.com",
      status: "Inactive",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Employee Management
            </h1>

            <p className="text-slate-400 mt-2">
              Manage employees, departments and access permissions.
            </p>

          </div>

          <button
            className="
            mt-5 lg:mt-0
            flex
            items-center
            gap-3
            px-6
            py-3
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

            <UserPlus size={20} />

            Add Employee

          </button>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-4 gap-6">

          <StatCard
            title="Employees"
            value="156"
            color="blue"
          />

          <StatCard
            title="Departments"
            value="12"
            color="green"
          />

          <StatCard
            title="Active"
            value="148"
            color="cyan"
          />

          <StatCard
            title="Inactive"
            value="08"
            color="red"
          />

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
                placeholder="Search employee..."
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
              flex
              items-center
              gap-2
              "
            >

              <Filter size={18} />

              Filters

            </button>

          </div>

        </div>

        {/* Table */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">

          <table className="w-full">

            <thead className="bg-slate-800">

              <tr className="text-slate-300">

                <th className="text-left px-6 py-5">
                  Employee
                </th>

                <th className="text-left px-6 py-5">
                  Department
                </th>

                <th className="text-left px-6 py-5">
                  Email
                </th>

                <th className="text-left px-6 py-5">
                  Status
                </th>

                <th className="text-center px-6 py-5">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {employees.map((emp) => (

                <tr
                  key={emp.id}
                  className="border-t border-slate-800 hover:bg-slate-800 transition"
                >

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold">

                        {emp.name.charAt(0)}

                      </div>

                      <div>

                        <h3 className="text-white font-semibold">
                          {emp.name}
                        </h3>

                        <p className="text-slate-400 text-sm">
                          Employee ID : EMP-10{emp.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-slate-300">

                      <Building2 size={18} />

                      {emp.department}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex items-center gap-2 text-slate-300">

                      <Mail size={18} />

                      {emp.email}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        emp.status === "Active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {emp.status}
                    </span>

                  </td>

                  <td className="px-6 py-5 text-center">

                    <button className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center mx-auto">

                      <MoreVertical
                        size={18}
                        className="text-white"
                      />

                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}

function StatCard({ title, value, color }) {

  const colors = {
    blue: "from-blue-600 to-cyan-500",
    green: "from-green-600 to-emerald-500",
    cyan: "from-cyan-600 to-sky-500",
    red: "from-red-600 to-rose-500",
  };

  return (
    <div
      className={`rounded-3xl bg-gradient-to-r ${colors[color]} p-6 shadow-xl`}
    >

      <p className="text-white/80">
        {title}
      </p>

      <h2 className="text-4xl font-bold text-white mt-3">
        {value}
      </h2>

    </div>
  );
}

export default Employees;