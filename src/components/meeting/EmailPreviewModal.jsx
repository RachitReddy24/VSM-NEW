import { X, Send, Download } from "lucide-react";

function EmailPreviewModal({
  open,
  title,
  children,
  onClose,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-8">

      <div className="w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-slate-100 shadow-2xl animate-in fade-in zoom-in duration-300">

        {/* Header */}

        <div className="sticky top-0 flex items-center justify-between border-b bg-white px-8 py-5">

          <div>

            <h2 className="text-2xl font-bold text-slate-900">
              {title}
            </h2>

            <p className="text-slate-500 mt-1">
              Email Preview
            </p>

          </div>

          <button
            onClick={onClose}
            className="w-12 h-12 rounded-xl hover:bg-slate-100 transition flex items-center justify-center"
          >
            <X />
          </button>

        </div>

        {/* Body */}

        <div className="overflow-y-auto max-h-[65vh] p-8 bg-slate-200">

          {children}

        </div>

        {/* Footer */}

        <div className="border-t bg-white px-8 py-5 flex justify-end gap-4">

          <button
            className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition flex items-center gap-2"
          >

            <Download size={18} />

            Download HTML

          </button>

          <button
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white flex items-center gap-2"
          >

            <Send size={18} />

            Send Email

          </button>

        </div>

      </div>

    </div>
  );
}

export default EmailPreviewModal;