import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
} from "recharts";

const data = [
  { name: "Jan", payments: 4000, users: 2400, issues: 1200 },
  { name: "Feb", payments: 3000, users: 1398, issues: 1800 },
  { name: "Mar", payments: 2000, users: 9800, issues: 2400 },
  { name: "Apr", payments: 2780, users: 3908, issues: 1560 },
  { name: "May", payments: 1890, users: 4800, issues: 3200 },
  { name: "Jun", payments: 2390, users: 3800, issues: 2800 },
  { name: "Jul", payments: 3490, users: 4300, issues: 1900 },
  { name: "Aug", payments: 4000, users: 2400, issues: 2100 },
  { name: "Sep", payments: 3000, users: 1398, issues: 2700 },
  { name: "Oct", payments: 2000, users: 9800, issues: 3500 },
  { name: "Nov", payments: 2780, users: 3908, issues: 2900 },
  { name: "Dec", payments: 1890, users: 4800, issues: 1800 },
];

const Dashboard = () => {
  return (
    <div className="px-6 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-10  gap-6 mb-6">
        <div className="col-span-1 md:col-span-6  rounded-lg">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <OverviewCard title="Total Users" value="2,420" trend="↑ 20%" />
            <OverviewCard title="Active Contracts" value="1,209" trend="↓ 5%" />
          </div>



      <h3 className=" text-sm font-medium mb-4">Payments</h3>
<div className=" w-full grid grid-cols-6 gap-6">
    <div className="h-full rounded-lg col-span-4">
        
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                    border: "none",
                  }}
                />
                <Bar
                  dataKey="payments"
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
    </div>
    <div className="h-full  rounded-lg col-span-2">
           <PendingVerification />
    </div>
          
</div>



        </div>

        {/* Communication and Support */}
        <div className="col-span-1 md:col-span-4  bg-white rounded-lg p-4 shadow-sm">     
            <CommunicationSupport />
        </div>
      </div>



      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <UserSupportTickets />
      </div>
    </div>
  );
};

// Component 1: Overview Cards
const OverviewCard = ({ title, value, trend }) => {
  const isPositive = trend.includes("↑");

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <div className="flex justify-between items-end mt-2">
        <span className="text-2xl font-bold">{value}</span>
        <span
          className={`text-sm ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend}
        </span>
      </div>
    </div>
  );
};

// Component 2: Pending Verification
const PendingVerification = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-500 text-sm font-medium">
          Pending Verification
        </h3>
        <button className="text-blue-500 text-sm flex items-center hover:text-blue-600 transition-colors">
          Verification <span className="ml-1">→</span>
        </button>
      </div>
      <div className="text-2xl font-bold mb-4">2,420</div>
      <div className="space-y-3">
        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-600">Partners</span>
          <span className="text-gray-800 font-medium">1,209</span>
        </div>
        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-600">Users</span>
          <span className="text-gray-800 font-medium">1,211</span>
        </div>
        <div className="pt-2">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full"
              style={{ width: "65%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 3: Communication & Support
const CommunicationSupport = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-gray-500 text-sm font-medium mb-4">
        Communication & Support
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Reported issues</h4>
          <div className="space-y-3">
            {[
              { label: "Critical", value: 120, color: "bg-red-500" },
              { label: "High", value: 142, color: "bg-orange-500" },
              { label: "Medium", value: 590, color: "bg-yellow-500" },
              { label: "Low", value: 1209, color: "bg-gray-400" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <div className="flex justify-between text-sm items-center mb-1">
                  <span className="text-gray-600">{item.label}</span>
                  <span className="text-gray-800 font-medium">
                    {item.value}
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full`}
                    style={{ width: `${(item.value / 2000) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Pending issues</h4>
          <div className="text-2xl font-bold mb-3">1009/123</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.slice(0, 6)}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#F3F4F6"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <Line
                  type="monotone"
                  dataKey="issues"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={false}
                  animationDuration={1500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component 4: User Support Tickets
const UserSupportTickets = () => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-gray-500 text-sm font-medium mb-4">
        User Support Tickets
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Total</h4>
          <div className="text-2xl font-bold">2,420</div>
        </div>
        <div>
          <h4 className="text-sm font-medium mb-2">Pending</h4>
          <div className="text-2xl font-bold">2,420</div>
        </div>
      </div>
      <div className="mt-4 h-48 bg-gray-50 rounded-lg border border-gray-200 p-3">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-2">
            A
          </div>
          <div>
            <div className="text-sm font-medium">Support Agent</div>
            <div className="text-xs text-gray-500">Today, 10:30 AM</div>
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-xs text-sm mb-3 border border-gray-100">
          How can I assist you today?
        </div>
        <div className="flex justify-end mb-3">
          <div className="bg-blue-500 text-white p-3 rounded-lg shadow-xs text-sm max-w-xs">
            I need help with my recent payment
          </div>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border border-gray-300 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-2 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
