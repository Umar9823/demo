import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-64 right-0 h-16 bg-gray-800 shadow-md flex justify-between items-center px-8">
      <div className="text-xl font-semibold text-white">Navbar</div>
      <div>
        {/* Add some navbar elements, like profile icon */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
