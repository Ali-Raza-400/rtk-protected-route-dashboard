import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

// Super Admin Pages
import SuperAdminPage1 from './pages/super-admin/Page1';
import SuperAdminPage2 from './pages/super-admin/Page2';

// Admin Pages
import AdminPage3 from './pages/admin/Page3';
import AdminPage4 from './pages/admin/Page4';

// User Pages
import UserPage5 from './pages/user/Page5';
import UserPage6 from './pages/user/Page6';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">
    <Sidebar />
    <main className="flex-1 p-8">{children}</main>
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          {/* Protected Dashboard Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN', 'ADMIN', 'USER']}>
                <DashboardLayout>
                  <Dashboard />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Super Admin Routes */}
          <Route
            path="/super-admin/page1"
            element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN']}>
                <DashboardLayout>
                  <SuperAdminPage1 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/super-admin/page2"
            element={
              <ProtectedRoute allowedRoles={['SUPER_ADMIN']}>
                <DashboardLayout>
                  <SuperAdminPage2 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin/page3"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <DashboardLayout>
                  <AdminPage3 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/page4"
            element={
              <ProtectedRoute allowedRoles={['ADMIN']}>
                <DashboardLayout>
                  <AdminPage4 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />

          {/* User Routes */}
          <Route
            path="/user/page5"
            element={
              <ProtectedRoute allowedRoles={['USER']}>
                <DashboardLayout>
                  <UserPage5 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/page6"
            element={
              <ProtectedRoute allowedRoles={['USER']}>
                <DashboardLayout>
                  <UserPage6 />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;