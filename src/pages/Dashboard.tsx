import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Dashboard = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome, {user?.name}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <p>Role: {user?.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;