import DashboardLayout from "./DashboardLayout";
import receptionMenu from "../../data/receptionMenu";

function ReceptionLayout({ children }) {
  return (
    <DashboardLayout
      menu={receptionMenu}
      userName="Reception Desk"
      userRole="Reception"
    >
      {children}
    </DashboardLayout>
  );
}

export default ReceptionLayout;