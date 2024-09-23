import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Sidebar = () => {
  const [navItems, setNavItems] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);
  const [newNavItem, setNewNavItem] = useState({ name: '', url: '', order: '' });
  const [navigation, setNavigation] = useState([]); 

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



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNavItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if the URL is not empty (basic validation)
    if (!newNavItem.url.trim()) {
      alert('Please enter a valid URL.');
      return;
    }
  
    try {
      const response = await axios.post('https://dynamic-backend-db.onrender.com/navigation/create/', newNavItem);
      const data = response.data;
      console.log('Navigation item added:', data);
      setNavigation((prevNav) => [...prevNav, data]);
      setFormOpen(false);
      setNewNavItem({ name: '', url: '', order: '' });
    } catch (error) {
      console.error('Error adding navigation item:', error);
    }
  };



  return (
    <div className="w-64 fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg">
      <div className="p-4 text-xl font-bold">
        <a href="/">Main Dashboard</a>
      </div>
      <div className="p-2 flex justify-end">
        <button onClick={() => setFormOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
          Add Navigation
        </button>
      </div>
      <ul className="mt-4">
        {navItems.length > 0 ? (
          navItems.map((item) => (
            <li key={item.id} className="px-4 py-2 hover:bg-gray-700">
              <Link to={item.url}>{item.name}</Link>
            </li>
          ))
        ) : (
          <li className="px-4 py-2">Loading...</li>
        )}
      </ul>

       {/* Popup form modal */}
       {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Add Navigation Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  value={newNavItem.name} 
                  onChange={handleInputChange} 
                  className="w-full px-3 py-2 border rounded-lg" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">URL</label>
                <input 
                  type="text" 
                  name="url" 
                  value={newNavItem.url} 
                  onChange={handleInputChange} 
                  className="w-full px-3 py-2 border rounded-lg" 
                  required 
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Order</label>
                <input 
                  type="number" 
                  name="order" 
                  value={newNavItem.order} 
                  onChange={handleInputChange} 
                  className="w-full px-3 py-2 border rounded-lg" 
                  required 
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button type="button" onClick={() => setFormOpen(false)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
                  Cancel
                </button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
