import DashboardLayout from "../../layouts/roles/DashboardLayout";
import ApprovedMeetingsTable from "../../components/approval/ApprovedMeetingsTable";

function ApprovedMeetings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Approved Meetings
          </h1>

          <p className="text-slate-400 mt-2">
            View all approved visitor meetings.
          </p>
        </div>

        <ApprovedMeetingsTable />

      </div>
    </DashboardLayout>
  );
}

export default ApprovedMeetings;