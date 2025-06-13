import AdminProfile from './components/AdminProfile';
import UsersTable from './components/UsersTable';





export default function UserInformation() {
  return (
    <div className="space-y-6 bg-gray-50 min-h-screen p-6">

      
<AdminProfile />
<UsersTable />


    </div>
  );
}