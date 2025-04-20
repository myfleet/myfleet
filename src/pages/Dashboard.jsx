


import React from 'react';
import { FaTruck, FaMapMarkerAlt, FaChartLine, FaClock, FaCogs, FaUserShield } from 'react-icons/fa';
import Header from '../components/Header';

const LandingPage = () => {
  return (
   <div>
    <Header/>
     <div className="bg-gray-100 min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-[#219EBC] text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">Transform Logistics with <span className="text-yellow-300">myFleet</span></h1>
          <p className="mt-2">Your next-generation fleet management solution</p>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard 
            icon={<FaTruck className="text-3xl" />}
            title="Fleet Overview"
            value="Coming Soon"
            color="bg-[#2e2e2e]"
          />
          <DashboardCard 
            icon={<FaMapMarkerAlt className="text-3xl" />}
            title="Live Tracking"
            value="Coming Soon"
            color="bg-[#219EBC]"
          />
          <DashboardCard 
            icon={<FaChartLine className="text-3xl" />}
            title="Performance Analytics"
            value="Coming Soon"
            color="bg-[#2e2e2e]"
          />
        </div>

        {/* Coming Soon Main Section */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-[#219EBC] mb-6">
                <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Exciting Features Coming Soon!</h2>
              <p className="text-gray-600 mb-6">
                We're working hard to bring you a revolutionary fleet management experience. 
                Stay tuned for powerful tools to transform your logistics operations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <FeaturePill icon={<FaTruck />} text="Real-time Tracking" />
                <FeaturePill icon={<FaClock />} text="Route Optimization" />
                <FeaturePill icon={<FaCogs />} text="Automated Workflows" />
                <FeaturePill icon={<FaUserShield />} text="Driver Management" />
                <FeaturePill icon={<FaChartLine />} text="Advanced Analytics" />
                <FeaturePill icon={<FaMapMarkerAlt />} text="Geo-fencing" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

const DashboardCard = ({ icon, title, value, color }) => (
  <div className={`${color} text-white rounded-lg shadow-md p-6 flex items-center`}>
    <div className="mr-4">
      {icon}
    </div>
    <div>
      <h3 className="text-sm font-medium opacity-80">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const FeaturePill = ({ icon, text }) => (
  <div className="bg-gray-100 text-gray-800 rounded-full py-2 px-4 flex items-center justify-center space-x-2">
    <span className="text-[#219EBC]">{icon}</span>
    <span className="text-sm font-medium">{text}</span>
  </div>
);

export default LandingPage;