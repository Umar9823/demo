// MainContent.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DynamicPage from '../pages/DynamicPage'; // Component to render dynamic content
import Dashboard from '../pages/Dashboard'; // Import the default page component
import axios from 'axios';

const MainContent = () => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    const fetchNavItems = async () => {
      try {
        const response = await axios.get('https://dynamic-backend-db.onrender.com/navigation/');
        setNavItems(response.data);
      } catch (error) {
        console.error('Error fetching navigation items:', error);
      }
    };

    fetchNavItems();
  }, []);

  return (
    <div className="ml-64 mt-16 p-6 bg-gray-100 min-h-screen">
      <Routes>
        {/* Default route for the root path */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Dynamically generate routes from navItems */}
        {navItems.map((item) => (
          <Route key={item.id} path={item.url} element={<DynamicPage pageName={item.name} />} />
        ))}
      </Routes>
    </div>
  );
};

export default MainContent;
