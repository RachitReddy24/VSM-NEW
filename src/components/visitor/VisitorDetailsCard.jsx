import {
  User,
  Phone,
  Building2,
  Calendar,
  Clock,
  Briefcase,
  MapPin,
  ShieldCheck,
  AlertCircle,
  FileText,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function VisitorDetailsCard() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden">

      {/* Header */}

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-800 px-8 py-6">

        <div className="flex justify-between items-center">

          <div>

            <h2 className="text-3xl font-bold text-white">
              Visitor Approval
            </h2>

            <p className="text-slate-400 mt-2">
              Review visitor details before allowing access.
            </p>

          </div>

          <div className="flex gap-3">

            <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
              VERIFIED
            </span>

            <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-semibold">
              HIGH PRIORITY
            </span>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="p-8 grid xl:grid-cols-3 gap-8">

        {/* Left */}

        <div className="xl:col-span-1">

          <div className="flex flex-col items-center">

            <div className="w-44 h-44 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl">

              <User
                size={90}
                className="text-white"
              />

            </div>

            <h2 className="text-white text-2xl font-bold mt-6">
              Rahul Sharma
            </h2>

            <p className="text-slate-400">
              Visitor ID : VMS-2026-001
            </p>

            <div className="mt-6 w-full rounded-2xl bg-slate-800 border border-slate-700 p-5">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  className="text-green-400"
                  size={22}
                />

                <div>

                  <p className="text-slate-400 text-sm">
                    Identity Verification
                  </p>

                  <p className="text-green-400 font-semibold">
                    Successfully Verified
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="xl:col-span-2">

          <div className="grid md:grid-cols-2 gap-5">

            <Info icon={Phone} label="Mobile" value="9876543210" />

            <Info icon={Building2} label="Company" value="ABC Pvt Ltd" />

            <Info icon={Briefcase} label="Purpose" value="Business Meeting" />

            <Info icon={User} label="Host" value="John Doe" />

            <Info icon={Building2} label="Department" value="IT Department" />

            <Info icon={MapPin} label="Location" value="Block A - Floor 2" />

            <Info icon={Calendar} label="Visit Date" value="08 Jul 2026" />

            <Info icon={Clock} label="Visit Time" value="10:30 AM" />

          </div>

          {/* Meeting Summary */}

          <div className="mt-8 rounded-3xl bg-slate-800 border border-slate-700 p-6">

            <div className="flex items-center gap-3 mb-4">

              <FileText
                className="text-cyan-400"
                size={22}
              />

              <h3 className="text-xl text-white font-semibold">
                Meeting Summary
              </h3>

            </div>

            <p className="text-slate-300 leading-7">
              Visitor has requested access for a scheduled business
              meeting regarding enterprise software implementation
              and technical discussion with the IT Department.
            </p>

          </div>

          {/* Approval Notice */}

          <div className="mt-6 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 p-5">

            <div className="flex gap-3">

              <AlertCircle
                className="text-yellow-400 mt-1"
                size={20}
              />

              <div>

                <h4 className="text-yellow-300 font-semibold">
                  Approval Notice
                </h4>

                <p className="text-slate-300 mt-2">
                  Please verify the visitor's identity before
                  granting access. Once approved, the visitor
                  can complete the reception check-in process.
                </p>

              </div>

            </div>

          </div>

          {/* Buttons */}

          <div className="flex gap-5 mt-8">

            <button
              onClick={() => navigate("/approval-success")}
              className="
              flex-1
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-green-600
              to-emerald-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              "
            >
              ✓ Approve Visitor
            </button>

            <button
              className="
              flex-1
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-red-600
              to-rose-500
              hover:scale-105
              transition-all
              duration-300
              text-white
              font-bold
              shadow-xl
              "
            >
              ✕ Reject Visitor
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 hover:border-blue-500 transition-all">

      <div className="flex items-start gap-4">

        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">

          <Icon
            size={20}
            className="text-cyan-400"
          />

        </div>

        <div>

          <p className="text-slate-400 text-sm">
            {label}
          </p>

          <p className="text-white font-semibold mt-1">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
}

export default VisitorDetailsCard;