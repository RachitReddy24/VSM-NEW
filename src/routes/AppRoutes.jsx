import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

/* ---------------- AUTH ---------------- */

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";

/* ---------------- ADMIN ---------------- */

import AdminDashboard from "../pages/admin/Dashboard";
import UserManagement from "../pages/admin/UserManagement";
import ScheduleMeeting from "../pages/admin/ScheduleMeeting";
import Reports from "../pages/admin/Reports";
import Settings from "../pages/admin/Settings";
import EmployeeManagement from "../pages/admin/EmployeeManagement";
import VisitorHistory from "../pages/admin/VisitorHistory";
import DepartmentManagement from "../pages/admin/DepartmentManagement";
/* ---------------- RECEPTION ---------------- */

import ReceptionDashboard from "../pages/reception/Dashboard";
import VisitorOnboarding from "../pages/reception/VisitorOnboarding";
import VisitVerification from "../pages/reception/VisitVerification";
import VisitorStatus from "../pages/reception/VisitorStatus";
import VisitorCheckIn from "../pages/reception/VisitorCheckIn";
import VisitorCheckOut from "../pages/reception/VisitorCheckOut";

/* ---------------- VISITOR ---------------- */

import VisitorRegistration from "../pages/visitor/VisitorRegistration";
import VerifyOTP from "../pages/visitor/VerifyOTP";
import RegistrationSuccess from "../pages/visitor/RegistrationSuccess";
import VisitorPassPage from "../pages/visitor/VisitorPass";

/* ---------------- HOST ---------------- */

import Approval from "../pages/host/Approval";
import ApprovalSuccess from "../pages/host/ApprovalSuccess";
import Feedback from "../pages/host/Feedback";
import VisitCompleted from "../pages/host/VisitCompleted";

/* ---------------- COMMUNICATION ---------------- */

import HostEmail from "../pages/communication/HostEmail";
import VisitorSMS from "../pages/communication/VisitorSMS";

function AppRoutes() {
  return (
    <Routes>

      {/* Default */}

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* ---------------- AUTH ---------------- */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* ---------------- ADMIN ---------------- */}

      <Route
        path="/admin/dashboard"
        element={<AdminDashboard />}
      />

      <Route
        path="/admin/users"
        element={<UserManagement />}
      />

      <Route
        path="/admin/schedule-meeting"
        element={<ScheduleMeeting />}
      />

      <Route
        path="/admin/reports"
        element={<Reports />}
      />

      <Route
        path="/admin/settings"
        element={<Settings />}
      />

      {/* ---------------- RECEPTION ---------------- */}

      <Route
        path="/reception/dashboard"
        element={<ReceptionDashboard />}
      />

      <Route
        path="/reception/visitor-onboarding"
        element={<VisitorOnboarding />}
      />

      <Route
        path="/reception/visit-verification"
        element={<VisitVerification />}
      />

      <Route
        path="/reception/visitor-status"
        element={<VisitorStatus />}
      />

      <Route
        path="/reception/visitor-check-in"
        element={<VisitorCheckIn />}
      />

      <Route
        path="/reception/visitor-check-out"
        element={<VisitorCheckOut />}
      />

      {/* ---------------- VISITOR ---------------- */}

      <Route
        path="/register"
        element={<VisitorRegistration />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOTP />}
      />

      <Route
        path="/registration-success"
        element={<RegistrationSuccess />}
      />

      <Route
        path="/visitor-pass"
        element={<VisitorPassPage />}
      />

      {/* ---------------- HOST ---------------- */}

      <Route
        path="/approval"
        element={<Approval />}
      />

      <Route
        path="/approval-success"
        element={<ApprovalSuccess />}
      />

      <Route
        path="/feedback"
        element={<Feedback />}
      />

      <Route
        path="/visit-completed"
        element={<VisitCompleted />}
      />

      {/* ---------------- COMMUNICATION ---------------- */}

      <Route
        path="/host-email"
        element={<HostEmail />}
      />

      <Route
        path="/visitor-sms"
        element={<VisitorSMS />}
      />

      {/* ---------------- 404 ---------------- */}

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
      <Route
        path="/admin/departments"
        element={<DepartmentManagement />}
      />
      <Route
        path="/admin/employees"
        element={<EmployeeManagement />}
      />
      <Route
        path="/admin/visitor-history"
        element={<VisitorHistory />}
      />
    </Routes>
  );
}

export default AppRoutes;