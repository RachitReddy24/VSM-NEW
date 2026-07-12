import DashboardLayout from "./DashboardLayout";
import adminMenu from "../../data/adminMenu";

function AdminLayout({ children }) {
  return (
    <DashboardLayout
      menu={adminMenu}
      userName="System Administrator"
      userRole="Administrator"
    >
      {children}
    </DashboardLayout>
  );
}

export default AdminLayout;