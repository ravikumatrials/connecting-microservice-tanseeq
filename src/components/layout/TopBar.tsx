
import { useState } from "react";
import { User, LogOut } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

export function TopBar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = () => {
    // Navigate to login page
    navigate("/login");
    toast.success("Successfully signed out");
    setIsProfileOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <h1 className="text-lg sm:text-xl font-bold text-proscape">
                  Tanseeq Investment
                </h1>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out"
              >
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full bg-proscape flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
              </button>
              {isProfileOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</Link>
                  <div className="border-t border-gray-200"></div>
                  <button 
                    onClick={handleLogout}
                    className="flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
