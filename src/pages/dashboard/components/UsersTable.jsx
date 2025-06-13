import React, { useState } from 'react';
import { X } from 'lucide-react';

const UsersTable = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

const usersData = [
  {
    id: 12330,
    name: "Ar Raihan",
    email: "arraihan815@gmail.com",
    country: "USA",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHFDLf7-S_rtg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723765753976?e=1753920000&v=beta&t=iCMyAwdmCg9f1-RHPStNa236nUye5ck354Pa3KTR4P0",
    accountType: "Standard",
    registrationDate: "20/05/2025",
    sameClass: [
      "https://randomuser.me/api/portraits/women/1.jpg",
      "https://randomuser.me/api/portraits/men/2.jpg",
      "https://randomuser.me/api/portraits/women/3.jpg",
      "https://randomuser.me/api/portraits/men/4.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
      "https://randomuser.me/api/portraits/men/5.jpg",
    ]
  },
  {
    id: 12331,
    name: "Devon Lane",
    email: "devonlane53@gmail.com",
    country: "Canada",
    avatar: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3383.jpg",
    accountType: "Premium",
    registrationDate: "25/05/2025",
    sameClass: [
      "https://randomuser.me/api/portraits/men/10.jpg",
      "https://randomuser.me/api/portraits/men/11.jpg",
      "https://randomuser.me/api/portraits/women/12.jpg"
    ]
  }
];


  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
  };

return (
<>
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Users</h3>
  <div className="flex flex-col lg:flex-row gap-6">
    {/* Mobile: User Cards */}
    <div className="block md:hidden space-y-4">
      {usersData.map((user) => (
        <div
          key={user.id}
          className={`bg-white border rounded-xl p-4 shadow-sm cursor-pointer transition ${
            selectedUser?.id === user.id ? 'border-green-600 bg-green-50' : 'hover:bg-gray-50'
          }`}
          onClick={() => handleUserClick(user)}
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h4 className="text-lg font-semibold">{user.name}</h4>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <p>Country: <span className="text-gray-900">{user.country}</span></p>
            <p>Account: <span className={`font-medium ${user.accountType === 'Premium' ? 'text-green-600' : ''}`}>{user.accountType}</span></p>
            <p>Registered: {user.registrationDate}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Desktop/Tablet: Table View */}
    <div className="hidden md:block bg-white rounded-xl border border-gray-200 p-4 sm:p-6 flex-1 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-gray-600 font-medium text-sm">SL</th>
            <th className="py-3 px-4 text-gray-600 font-medium text-sm">User Name</th>
            <th className="py-3 px-4 text-gray-600 font-medium text-sm">Email</th>
            <th className="py-3 px-4 text-gray-600 font-medium text-sm">Country</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr
              key={user.id}
              className={`cursor-pointer transition-colors ${
                selectedUser?.id === user.id
                  ? 'bg-[#15803d] text-white'
                  : 'hover:bg-[#15803d]/10 text-gray-700'
              }`}
              onClick={() => handleUserClick(user)}
            >
              <td className={`py-3 px-4 border-b ${selectedUser?.id === user.id ? 'border-[#15803d]' : 'border-gray-100'}`}>
                #{user.id}
              </td>
              <td className={`py-3 px-4 border-b ${selectedUser?.id === user.id ? 'border-[#15803d]' : 'border-gray-100'}`}>
                <div className="flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className={`font-medium ${selectedUser?.id === user.id ? 'text-white' : 'text-gray-900'}`}>
                    {user.name}
                  </span>
                </div>
              </td>
              <td className={`py-3 px-4 border-b ${selectedUser?.id === user.id ? 'border-[#15803d]' : 'border-gray-100'}`}>
                {user.email}
              </td>
              <td className={`py-3 px-4 border-b ${selectedUser?.id === user.id ? 'border-[#15803d]' : 'border-gray-100'}`}>
                {user.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Profile Card */}
    {showProfile && (
      <div className="w-full lg:w-80 bg-white rounded-xl p-4 sm:p-6 shadow-md">
        <div className="flex justify-end mb-2">
          <button
            onClick={closeProfile}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{selectedUser.name}</h3>
          <p className="text-gray-600 text-sm">{selectedUser.country}</p>
        </div>

        <div className="space-y-4 text-sm text-center">
          <div>
            <p className="text-gray-600">Email</p>
            <p className="text-gray-900 font-medium">{selectedUser.email}</p>
          </div>
          <div>
            <p className="text-gray-600">Account Type</p>
            <p className={`font-medium ${selectedUser.accountType === 'Premium' ? 'text-green-600' : 'text-gray-900'}`}>
              {selectedUser.accountType}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Registration Date</p>
            <p className="text-gray-900 font-medium">{selectedUser.registrationDate}</p>
          </div>


<div className=" peoplefromdiv flex flex-col items-center">
  <p className="text-gray-800 font-bold text-sm mb-2 text-center">People from the same class</p>
  <div className="flex items-center justify-center space-x-[-10px]">
    {selectedUser.sameClass.slice(0, 5).map((avatar, index) => (
      <img
        key={index}
        src={avatar}
        className="w-8 h-8 rounded-full border-2 border-white object-cover"
        alt={`Classmate ${index + 1}`}
      />
    ))}
    {selectedUser.sameClass.length > 5 && (
      <div className="w-8 h-8 rounded-full bg-gray-200 text-xs text-gray-800 flex items-center justify-center border-2 border-white">
        +{selectedUser.sameClass.length - 5}
      </div>
    )}
  </div>
</div>




        </div>
      </div>
    )}
  </div></>
);

};

export default UsersTable;
