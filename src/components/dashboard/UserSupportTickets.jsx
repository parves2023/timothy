import React from "react";

const tickets = [
  { id: "TCK-101", name: "John Doe", issue: "Login not working", status: "Open" },
  { id: "TCK-102", name: "Jane Smith", issue: "Unable to upload documents", status: "In Progress" },
  { id: "TCK-103", name: "Bob Lee", issue: "Payment failed", status: "Resolved" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Open":
      return "text-red-500";
    case "In Progress":
      return "text-yellow-500";
    case "Resolved":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

const UserSupportTickets = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h3 className="text-sm font-medium mb-4">User Support Tickets</h3>
      <table className="w-full text-left">
        <thead>
          <tr className="text-xs text-gray-500 uppercase border-b">
            <th className="p-2">Ticket ID</th>
            <th className="p-2">User</th>
            <th className="p-2">Issue</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="text-sm border-b hover:bg-gray-50">
              <td className="p-2">{ticket.id}</td>
              <td className="p-2">{ticket.name}</td>
              <td className="p-2">{ticket.issue}</td>
              <td className={`p-2 font-medium ${getStatusColor(ticket.status)}`}>{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserSupportTickets;
