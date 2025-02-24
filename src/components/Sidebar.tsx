import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RootState } from '../store/store';
import { LayoutDashboard, Users, Settings, FileText, BarChart as ChartBar, ShieldCheck, LogOut } from 'lucide-react';
import { useLogout } from '../hooks/useLogout';

const Sidebar = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  const logout = useLogout();

  const getNavItems = () => {
    switch (user?.role) {
      case 'SUPER_ADMIN':
        return [
          { to: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { to: '/super-admin/page1', icon: <Users />, label: 'User Management' },
          { to: '/super-admin/page2', icon: <Settings />, label: 'System Settings' },
        ];
      case 'ADMIN':
        return [
          { to: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { to: '/admin/page3', icon: <FileText />, label: 'Reports' },
          { to: '/admin/page4', icon: <ChartBar />, label: 'Analytics' },
        ];
      case 'USER':
        return [
          { to: '/dashboard', icon: <LayoutDashboard />, label: 'Dashboard' },
          { to: '/user/page5', icon: <ShieldCheck />, label: 'My Tasks' },
          { to: '/user/page6', icon: <FileText />, label: 'Documents' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className="h-screen w-64 bg-gray-800 text-white p-4 flex flex-col">
      <div className="mb-8">
        <h2 className="text-xl font-bold">Dashboard</h2>
        <p className="text-sm text-gray-400 mt-2">Logged in as: {user?.role}</p>
      </div>
      <nav className="flex-1">
        {getNavItems().map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="flex items-center space-x-3 p-3 rounded-lg transition-colors text-gray-300 hover:bg-gray-700 mt-auto"
      >
        <LogOut />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;