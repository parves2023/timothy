import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, ChevronDown } from 'lucide-react';

const data = [
  { name: 'Jan', partners: 28, users: 10 },
  { name: 'Feb', partners: 36, users: 22 },
  { name: 'Mar', partners: 32, users: 24 },
  { name: 'Apr', partners: 30, users: 15 },
  { name: 'May', partners: 38, users: 18 },
  { name: 'Jun', partners: 49, users: 39 },
  { name: 'Jul', partners: 39, users: 50 },
  { name: 'Aug', partners: 26, users: 48 },
  { name: 'Sep', partners: 14, users: 38 },
  { name: 'Oct', partners: 27, users: 44 },
  { name: 'Nov', partners: 29, users: 32 },
  { name: 'Dec', partners: 48, users: 30 },
];

const MetricCard = ({ title, value, trend, icon: Icon, trendColor }) => (
  <div className="bg-white flex-row-reverse p-6 rounded-lg flex items-center justify-start gap-2">
    <div>
      <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
      <p className="text-lg font-semibold text-gray-700">{value.toLocaleString()}</p>
    </div>
    <div className={`p-2 rounded-lg ${trendColor === 'green' ? 'bg-green-50' : 'bg-red-50'}`}>
      <Icon className={`w-10 h-10 ${trendColor === 'green' ? 'text-green-600' : 'text-red-600'}`} />
    </div>
  </div>
);

const LegendItem = ({ color, label }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: color }}></div>
    <span className="text-gray-600 text-sm font-medium">{label}</span>
  </div>
);

const FinancialDashboard = () => {
  return (
    <div className=" bg-gray-50">
      <h1 className="text-3xl font-semibold text-gray-900 mb-6">Financial Metrics</h1>
      


      {/* Chart Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        {/* Chart Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-500">Revenue Overview</h2>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <LegendItem color="#f59e0b" label="Partners" />
              <LegendItem color="#fbbf24" label="Users" />
            </div>
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <span className="text-gray-600 text-sm font-medium">Today</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

              {/* Metric Cards */}
      <div className="flex mb-8 justify-start">
        <MetricCard 
          title="All" 
          value={1009123} 
          trend="up" 
          icon={TrendingUp} 
          trendColor="green" 
        />
        <MetricCard 
          title="Contracts" 
          value={1009123} 
          trend="up" 
          icon={TrendingUp} 
          trendColor="green" 
        />
        <MetricCard 
          title="Users" 
          value={1009123} 
          trend="down" 
          icon={TrendingDown} 
          trendColor="red" 
        />
      </div>


        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid 
                stroke="#f3f4f6" 
                strokeDasharray="none" 
                vertical={false}
                horizontal={true}
              />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                dy={10}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9ca3af', fontSize: 12 }}
                tickFormatter={(value) => `${value}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                labelStyle={{ color: '#374151', fontWeight: '600' }}
              />
              <Line 
                type="monotone" 
                dataKey="partners" 
                stroke="#f59e0b" 
                strokeWidth={3} 
                dot={{ fill: '#f59e0b', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2, fill: 'white' }}
              />
              <Line 
                type="monotone" 
                dataKey="users" 
                stroke="#fbbf24" 
                strokeWidth={3} 
                dot={{ fill: '#fbbf24', strokeWidth: 0, r: 4 }}
                activeDot={{ r: 6, stroke: '#fbbf24', strokeWidth: 2, fill: 'white' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default FinancialDashboard;