// UsersTable.jsx
import { FaEllipsisV } from "react-icons/fa";

const users = [
  {
    id: "1981849262",
    name: "John Doe",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "1981849262",
    name: "Jane Smith",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "1981849262",
    name: "Robert Johnson",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    id: "1981849262",
    name: "Alice Brown",
    joined: "12 Dec 2023",
    status: "Active",
    level: "New Seller",
    role: "Business Partner",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
  },
  {
    id: "1981849262",
    name: "Michael Lee",
    joined: "12 Dec 2023",
    status: "Active",
    level: "-",
    role: "User",
    earnings: "$1981849262",
    image: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

const UsersTable = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Manage Users</h2>
        <input
          type="text"
          placeholder="Search"
          className="border px-3 py-2 rounded-md focus:outline-none focus:ring"
        />
      </div>
      <div className="overflow-x-auto border rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Joined</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Level</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Earnings</th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {users.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{user.id}</td>
                <td className="px-4 py-4 flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{user.name}</span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.joined}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    ↑ {user.status}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.level}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.role}</td>
                <td className="px-4 py-4 text-sm font-semibold text-gray-800">
                  {user.earnings}
                </td>
                <td className="px-4 py-4 text-center">
                  <button className="text-gray-500 hover:text-gray-700">
                    <FaEllipsisV />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
