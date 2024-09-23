import React from 'react';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <MainContent />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
