import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import AuthLayout from './layout/AuthLayout';
import Loader from './layout/Loader';
// Lazy load components
const AdminDashboard = lazy(() => import('./components/adminPannel/AdminDashboard'));
const Users = lazy(() => import('./components/adminPannel/Users'));
const Reports = lazy(() => import('./components/adminPannel/Reports'));
const Notifications = lazy(() => import('./components/adminPannel/Notifications'));
const Packages = lazy(() => import('./components/adminPannel/Packages'));
const Settings = lazy(() => import('./components/adminPannel/Settings'));
const Login = lazy(() => import('./pages/AdminLogin')); // Assuming you have a Login component
const ChangePassword= lazy(() => import('./components/adminPannel/ChangePassword'));
const AddPackage= lazy(() => import('./components/adminPannel/AddPackage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          {/* Routes that require sidebar and header */}
          <Route path="/admin" element={<MainLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/packages" element={<Packages />} />
            <Route path="/admin/add-package" element={<AddPackage />} />

            <Route path="/admin/reports" element={<Reports />} />
            <Route path="/admin/notifications" element={<Notifications />} />
            <Route path="/admin/settings" element={<Settings />} />
            <Route path="/admin/change-password" element={<ChangePassword />} />
            
          </Route>

          {/* Routes that don't require sidebar and header */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Login />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
