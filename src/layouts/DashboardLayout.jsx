import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Logo from '../assets/logo.png';
import { FiHome, FiUser, FiSettings, FiCreditCard, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const submenuRef = useRef(null);
  const isSettingsActive = location.pathname.startsWith("/dashboard/settings");

  // Auto-close submenu when navigating to other routes
  useEffect(() => {
    if (!location.pathname.startsWith("/dashboard/settings")) {
      setShowSettingsSubmenu(false);
    }
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const navLinkBaseClass = "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200";
  const iconClass = (isActive) => isActive ? "text-white" : "text-black";
  const linkClass = (isActive) =>
    `${navLinkBaseClass} ${isActive ? "bg-green-700 text-white" : "hover:bg-green-100 text-black"}`;

  const handleSettingsClick = () => {
    navigate("/dashboard/settings");
    setShowSettingsSubmenu(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Render navigation links (used for both desktop and mobile)
  const renderNavLinks = () => (
    <>
      <NavLink to="/dashboard/statistics" className={({ isActive }) => linkClass(isActive)} onClick={() => setMobileMenuOpen(false)}>
        {({ isActive }) => (
          <>
            <FiHome className={`${iconClass(isActive)} text-lg`} />
            <span>Dashboard</span>
          </>
        )}
      </NavLink>

      <NavLink to="/dashboard/user-info" className={({ isActive }) => linkClass(isActive)} onClick={() => setMobileMenuOpen(false)}>
        {({ isActive }) => (
          <>
            <FiUser className={`${iconClass(isActive)} text-lg`} />
            <span>User Information</span>
          </>
        )}
      </NavLink>

      <NavLink to="/dashboard/subscription" className={({ isActive }) => linkClass(isActive)} onClick={() => setMobileMenuOpen(false)}>
        {({ isActive }) => (
          <>
            <FiCreditCard className={`${iconClass(isActive)} text-lg`} />
            <span>Subscription</span>
          </>
        )}
      </NavLink>

      <button
        onClick={handleSettingsClick}
        className={`${navLinkBaseClass} ${isSettingsActive ? "bg-green-700 text-white" : "hover:bg-green-100 text-black"}`}
      >
        <FiSettings className="text-lg" />
        <span>Settings</span>
      </button>

      {showSettingsSubmenu && (
        <div ref={submenuRef} className="ml-8 mt-1 flex flex-col gap-1 text-sm">
          <NavLink
            to="/dashboard/settings"
            end
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/settings/terms"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Terms & Conditions
          </NavLink>
          <NavLink
            to="/dashboard/settings/privacy"
            className={({ isActive }) =>
              `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
            }
            onClick={() => setMobileMenuOpen(false)}
          >
            Privacy Policy
          </NavLink>
        </div>
      )}
    </>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <button 
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg"
      >
        {mobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
      </button>

      {/* Sidebar - Desktop */}
      <aside className="hidden  fixed left-0 top-0 w-64 h-screen bg-white shadow-lg md:flex flex-col z-40 overflow-y-auto">
        <div className="p-6">
          <div className="text-xl font-bold mb-6">
            <Link to="/">
            <img className="mx-auto w-24 h-auto" src={Logo} alt="timber logo" />
            </Link>
          </div>
          <nav className="flex flex-col gap-2 relative">
            {renderNavLinks()}
          </nav>
        </div>

        <div className="mt-auto p-6 border-t border-gray-200">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black hover:bg-red-100 hover:text-red-600 transition-all"
            onClick={() => console.log("Logout clicked")}
          >
            <FiLogOut className="text-xl" />
            <span className='font-bold'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu-container md:hidden fixed inset-0 z-40">
          <div className="absolute left-0 top-0 w-64 h-full bg-white shadow-lg flex flex-col overflow-y-auto">
            <div className="p-6">
              <div className="text-xl font-bold mb-6">
                <img className="mx-auto w-24 h-auto" src={Logo} alt="timber logo" />
              </div>
              <nav className="flex flex-col gap-2 relative">
                {renderNavLinks()}
              </nav>
            </div>

            <div className="mt-auto  border-t border-gray-200">
              <button
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black hover:bg-red-100 hover:text-red-600 transition-all"
                onClick={() => console.log("Logout clicked")}
              >
                <FiLogOut className="text-xl" />
                <span className='font-bold'>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 md:ml-64 min-h-screen">
        {/* Semi-transparent overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
        
        <div className="p-4 md:p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}