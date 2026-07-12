import QRCode from "react-qr-code";
import { Download, Printer } from "lucide-react";

function MeetingQRCode({ meetingUrl }) {
  if (!meetingUrl) return null;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center">

      <h2 className="text-2xl font-bold text-white mb-8">
        Visitor QR Pass
      </h2>

      <div className="inline-block bg-white p-5 rounded-3xl">

        <QRCode
          value={meetingUrl}
          size={220}
        />

      </div>

      <div className="flex justify-center gap-4 mt-8">

        <button className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl text-white flex items-center gap-2">

          <Download size={18} />

          Download

        </button>

        <button
          onClick={() => window.print()}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white flex items-center gap-2"
        >

          <Printer size={18} />

          Print

        </button>

      </div>

    </div>
  );
}

export default MeetingQRCode;