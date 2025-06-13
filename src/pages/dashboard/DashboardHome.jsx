import { Line, Bar } from 'react-chartjs-2';

import AdminProfile from './components/AdminProfile';
import StatsCards from './components/StatsCards';
import UsersTable from './components/UsersTable';
import { Graphs } from './components/Graphs';




export default function DashboardHome() {
  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6 ">

      
      {/* Admin Profile */}
      <AdminProfile />

      {/* StatsCards */}
      <StatsCards />


      {/* Charts Section */}
      <Graphs />

      {/* Recent Users Table */}
      <div className='overflow-x-auto overflow-auto' >
        <UsersTable />
      </div>


    </div>
  );
}