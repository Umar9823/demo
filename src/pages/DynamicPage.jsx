import React from 'react';

const DynamicPage = ({ pageName }) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">{pageName}</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">
          Click Here!
        </button>
      </div>
      <p>This is the content for the {pageName} page.</p>
    </div>
  );
};

export default DynamicPage;
