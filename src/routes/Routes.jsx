import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import NotFound from "../components/NotFound";
import ForgotPass from "../components/ForgotPass";
import Checkemail from "../components/Checkemail";
import ResetPassword from "../components/ResetPassword";
import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardLayout from "../layouts/DashboardLayout";
import UserInformation from "../pages/dashboard/UserInformation";
import Subscription from "../pages/dashboard/Subscription";
import ProfileSettings from "../components/ProfileSetting";
import TermsPage from "../pages/dashboard/TermsPage";
import Privacypage from "../pages/dashboard/Privacypage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '/', element: <DashboardHome /> },
    ]
  },
  { path: '*', element: <NotFound /> },
  { path: '/login', element: <Login /> },
  { path: '/forgotpass', element: <ForgotPass /> },
  { path: '/checkemail', element: <Checkemail /> },
  { path: '/reset-password', element: <ResetPassword /> },

  // Dashboard routes
{
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { path: 'statistics', element: <DashboardHome /> },
    { path: 'user-info', element: <UserInformation /> },
    { path: 'subscription', element: <Subscription /> },
    { path: 'settings', element: <ProfileSettings /> },
    { path: 'settings/terms', element: <TermsPage /> },
    { path: 'settings/privacy', element: <Privacypage /> },
  ]
}
]);

export default router;