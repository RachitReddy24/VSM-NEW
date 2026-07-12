import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import DataTable from "../../components/table/DataTable";
import { visitors } from "../../data/dashboard";
import {
  Users,
  Download,
  Plus,
} from "lucide-react";

function VisitorStatus() {
  return (
    <ReceptionLayout>

      <div className="space-y-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Status
            </h1>

            <p className="text-slate-400 mt-2">
              Monitor, search and manage all visitor records.
            </p>

          </div>

          <div className="flex gap-4 mt-6 lg:mt-0">

            <button
              className="
              flex items-center gap-2
              px-6 py-3
              rounded-2xl
              bg-slate-800
              border border-slate-700
              hover:border-blue-500
              text-white
              transition
              "
            >

              <Download size={18} />

              Export

            </button>

            <button
              className="
              flex items-center gap-2
              px-6 py-3
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              shadow-xl
              hover:scale-105
              transition-all
              "
            >

              <Plus size={18} />

              New Visitor

            </button>

          </div>

        </div>

        {/* Summary */}

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

          <div className="flex items-center gap-4">

            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center">

              <Users
                size={30}
                className="text-white"
              />

            </div>

            <div>

              <h2 className="text-white text-2xl font-bold">
                {visitors.length}
              </h2>

              <p className="text-slate-400">
                Total Visitors
              </p>

            </div>

          </div>

        </div>

        {/* Table */}

        <DataTable
          title="Today's Visitor Records"
          data={visitors}
        />

      </div>

    </ReceptionLayout>
  );
}

export default VisitorStatus;