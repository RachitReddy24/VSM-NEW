import ReceptionLayout from "../../layouts/roles/ReceptionLayout";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import {
  UserPlus,
  Camera,
  QrCode,
  Send,
  CheckCircle2,
} from "lucide-react";

function VisitorOnboarding() {
  return (
    <ReceptionLayout>
      <div className="space-y-8">

        {/* Header */}

        <div className="flex justify-between items-center">

          <div>

            <h1 className="text-4xl font-bold text-white">
              Visitor Onboarding
            </h1>

            <p className="text-slate-400 mt-2">
              Register new visitors and generate a digital visitor pass.
            </p>

          </div>

          <div className="hidden lg:flex items-center gap-2 bg-green-500/15 border border-green-500/30 text-green-400 px-5 py-3 rounded-2xl">

            <CheckCircle2 size={18} />

            Reception Module

          </div>

        </div>

        {/* Form */}

        <div className="grid xl:grid-cols-2 gap-8">

          {/* Visitor Details */}

          <Card title="Visitor Information">

            <div className="grid gap-5">

              <Input
                label="Visitor Name"
                placeholder="Enter visitor name"
              />

              <Input
                label="Mobile Number"
                placeholder="+91 XXXXX XXXXX"
              />

              <Input
                label="Email Address"
                placeholder="visitor@email.com"
              />

              <Input
                label="Company / Organization"
                placeholder="ABC Pvt Ltd"
              />

              <Input
                label="Government ID"
                placeholder="Aadhaar / PAN / Passport"
              />

              <Input
                label="ID Number"
                placeholder="Enter document number"
              />

            </div>

          </Card>

          {/* Meeting */}

          <Card title="Meeting Information">

            <div className="grid gap-5">

              <Input
                label="Host Name"
                placeholder="Meeting Person"
              />

              <Input
                label="Department"
                placeholder="Select Department"
              />

              <Input
                label="Purpose of Visit"
                placeholder="Business Meeting"
              />

              <Input
                type="date"
                label="Visit Date"
              />

              <Input
                type="time"
                label="Visit Time"
              />

              <Input
                label="Expected Duration"
                placeholder="30 Minutes"
              />

            </div>

          </Card>

        </div>

        {/* Camera */}

        <Card title="Visitor Photo">

          <div className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-800 h-72 flex flex-col items-center justify-center">

            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl">

              <Camera
                size={34}
                className="text-white"
              />

            </div>

            <h3 className="text-white text-xl font-semibold mt-6">
              Camera Preview
            </h3>

            <p className="text-slate-400 mt-2">
              Webcam integration will be connected later.
            </p>

            <button className="mt-6 px-6 py-3 rounded-2xl bg-slate-700 hover:bg-slate-600 text-white transition">

              Upload Photo

            </button>

          </div>

        </Card>

        {/* Action Buttons */}

        <div className="flex flex-wrap gap-5">

          <button
            className="
            flex items-center gap-2
            px-7 py-3
            rounded-2xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            hover:scale-105
            transition-all
            text-white
            font-semibold
            shadow-xl
            "
          >

            <QrCode size={20} />

            Generate QR

          </button>

          <button
            className="
            flex items-center gap-2
            px-7 py-3
            rounded-2xl
            bg-gradient-to-r
            from-green-600
            to-emerald-500
            hover:scale-105
            transition-all
            text-white
            font-semibold
            shadow-xl
            "
          >

            <Send size={20} />

            Share URL

          </button>

          <button
            className="
            flex items-center gap-2
            px-7 py-3
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-violet-600
            hover:scale-105
            transition-all
            text-white
            font-semibold
            shadow-xl
            "
          >

            <UserPlus size={20} />

            Register Visitor

          </button>

        </div>

      </div>
    </ReceptionLayout>
  );
}

export default VisitorOnboarding;