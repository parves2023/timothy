import React from "react";

const CommunicationSupport = () => {
  return (
    <div className="h-full">
      <h3 className="text-sm font-medium mb-4">Communication & Support</h3>
      <ul className="space-y-4">
        {[
          { title: "Live Chat Support", description: "Respond to customer queries in real-time." },
          { title: "Email Tickets", description: "Handle support tickets efficiently." },
          { title: "FAQs", description: "Update frequently asked questions." },
        ].map((item, idx) => (
          <li key={idx} className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
            <h4 className="text-base font-semibold">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationSupport;
