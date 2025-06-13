import React from 'react'
import profile from '../../../assets/profile.png';


const AdminProfile = () => {
  return (
      <div className="flex justify-end">
        <div className="flex gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
            <img src={profile} alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="font-semibold text-sm">Anita Cruz</h2>
            <p className="text-gray-600 text-sm">anita@commerce.com</p>
          </div>
        </div>
      </div>
  )
}

export default AdminProfile