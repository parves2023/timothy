import React from "react";

const PendingVerification = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow h-full">
      <h3 className="text-sm font-medium mb-4">Pending Verifications</h3>
      <div className="space-y-4">
        {["Alice Johnson", "Michael Brown", "Emily Davis"].map((name, index) => (
          <div key={index} className="flex justify-between items-center border-b pb-2">
            <div>
              <h4 className="font-semibold text-sm">{name}</h4>
              <p className="text-gray-500 text-xs">Submitted documents for KYC</p>
            </div>
            <button className="text-blue-600 hover:underline text-sm">Review</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingVerification;
