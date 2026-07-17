import { createContext, useContext, useState } from "react";

const MeetingContext = createContext();

const initialMeetings = [
  {
    id: 1001,
    visitor: "Rahul Sharma",
    company: "Infosys",
    email: "rahul@gmail.com",
    mobile: "9876543210",
    host: "John Doe",
    department: "IT",
    purpose: "Project Discussion",
    date: "24 Jul 2026",
    time: "10:30 AM",
    status: "Pending",
  },
  {
    id: 1002,
    visitor: "Anjali Verma",
    company: "TCS",
    email: "anjali@gmail.com",
    mobile: "9876543210",
    host: "David",
    department: "Finance",
    purpose: "Vendor Meeting",
    date: "25 Jul 2026",
    time: "11:00 AM",
    status: "Pending",
  },
];

export const MeetingProvider = ({ children }) => {
  const [meetings, setMeetings] = useState(initialMeetings);

  /* ---------------- ADMIN ---------------- */

  const approveMeeting = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: "Approved" }
          : m
      )
    );
  };

  const rejectMeeting = (id, reason) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? {
              ...m,
              status: "Rejected",
              reason,
            }
          : m
      )
    );
  };

  /* ---------------- RECEPTION ---------------- */

  const verifyVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: "Verified" }
          : m
      )
    );
  };

  const checkInVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: "Checked In" }
          : m
      )
    );
  };

  const checkOutVisitor = (id) => {
    setMeetings((prev) =>
      prev.map((m) =>
        m.id === id
          ? { ...m, status: "Checked Out" }
          : m
      )
    );
  };

  /* ---------------- FILTERS ---------------- */

  const pendingMeetings = meetings.filter(
    (m) => m.status === "Pending"
  );

  const approvedMeetings = meetings.filter(
    (m) => m.status === "Approved"
  );

  const verifiedVisitors = meetings.filter(
    (m) => m.status === "Verified"
  );

  const checkedInVisitors = meetings.filter(
    (m) => m.status === "Checked In"
  );

  const checkedOutVisitors = meetings.filter(
    (m) => m.status === "Checked Out"
  );

  const rejectedMeetings = meetings.filter(
    (m) => m.status === "Rejected"
  );

  return (
    <MeetingContext.Provider
      value={{
        meetings,
        setMeetings,

        pendingMeetings,
        approvedMeetings,
        verifiedVisitors,
        checkedInVisitors,
        checkedOutVisitors,
        rejectedMeetings,

        approveMeeting,
        rejectMeeting,
        verifyVisitor,
        checkInVisitor,
        checkOutVisitor,
      }}
    >
      {children}
    </MeetingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMeeting = () => useContext(MeetingContext);