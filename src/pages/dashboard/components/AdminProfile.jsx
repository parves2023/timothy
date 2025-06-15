import React from 'react';
import profile from '../../../assets/profile.png';
import { FaSearch } from 'react-icons/fa';
import { PiBell } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";

const AdminProfile = ({ headingText = "Users Management" }) => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-8 bg-white rounded-md">
      {/* Left dynamic text */}
      <h1 className="text-2xl font-bold text-[#1E1A14]">{headingText}</h1>

      {/* Right-side controls */}
      <div className="flex items-center gap-4">
        {/* Search box */}
        <div className="flex items-center min-w-[20rem] justify-between min-h-12 gap-2 bg-white rounded-md px-4 py-2 border border-gray-200 shadow-sm">
          <input
            type="text"
            placeholder="Search Task"
            className="outline-none text-sm text-[#88755A] bg-transparent placeholder:text-[#88755A] w-full"
          />
          <CiSearch  className="text-[#88755A]  text-3xl" />
        </div>

        {/* Bell Icon with notification */}
        <div className="relative w-[50px] h-[50px] rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-200">
          <PiBell className="text-[#88755A] text-xl" /> {/* Made bigger */}
          <span className="absolute top-[8px] right-[8px] w-[10px] h-[10px] bg-red-500 rounded-full" />
        </div>

        {/* Profile image same size as bell */}
        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border border-gray-200 shadow-sm">
          <img src={profile} alt="Admin" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
