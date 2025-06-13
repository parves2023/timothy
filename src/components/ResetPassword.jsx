import { useState, useEffect } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Swal from 'sweetalert2';
import { useMutation } from '@tanstack/react-query';

// Mock API function (replace with real API call later)
const mockResetPassword = async (password) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 2000);
  });
};

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // React Query mutation (commented out for now - ready to use when API is available)
  /*
  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: (password) => mockResetPassword(password),
    onSuccess: () => {
      Swal.fire({
        icon: 'success',
        title: 'Password Reset Successful!',
        text: 'Your password has been updated successfully.',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        setNewPassword("");
        setConfirmPassword("");
      });
    },
    onError: (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Reset Failed',
        text: error.message || 'Failed to reset password. Please try again.',
        confirmButtonColor: '#3085d6',
      });
    }
  });
  */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in both fields.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Password Mismatch',
        text: 'Passwords do not match. Please try again.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // When ready to use React Query, replace with:
      // resetPassword(newPassword);
      
      // Temporary success handling
      Swal.fire({
        icon: 'success',
        title: 'Password Reset Successful!',
        text: 'Your password has been updated successfully.',
        confirmButtonColor: '#3085d6',
      }).then(() => {
        setNewPassword("");
        setConfirmPassword("");
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Reset Failed',
        text: error.message || 'Failed to reset password. Please try again.',
        confirmButtonColor: '#3085d6',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#d0d9d0] flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 min-h-[40rem] flex flex-col justify-center">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Set a new password
          </h1>
          <p className="text-sm text-gray-600">
            Create a new password. Ensure it differs from previous ones for security
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* New Password */}
          <div>
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-2">
              New Password
            </label>
            <div className="relative">
              <input
                id="new-password"
                type={showNew ? "text" : "password"}
                className="w-full border border-green-600 rounded-sm px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                onClick={() => setShowNew((prev) => !prev)}
                disabled={isSubmitting}
              >
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                className="w-full border border-green-600 rounded-lg px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isSubmitting}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                onClick={() => setShowConfirm((prev) => !prev)}
                disabled={isSubmitting}
              >
                {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Resetting...
              </>
            ) : (
              "Reset Password"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}