import Sidebar from "../../components/common/Sidebar";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";

function DashboardLayout({
  children,
  menu,
  userName = "Administrator",
  userRole = "Administrator",
}) {
  return (
    <div className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}

      <Sidebar
        menu={menu}
        userName={userName}
        userRole={userRole}
      />

      {/* Right Section */}

      <div className="flex flex-col flex-1 min-h-screen">

        {/* Header */}

        <Header />

        {/* Main Content */}

        <main className="flex-1 overflow-y-auto p-8">

          {children}

        </main>

        {/* Footer */}

        <Footer />

      </div>

    </div>
  );
}

export default DashboardLayout;