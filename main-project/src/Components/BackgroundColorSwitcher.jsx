import React, { useState } from 'react';

const BackgroundColorSwitcher = () => {
  const [bgColor, setBgColor] = useState("#e9f5f9");

  const handleColorChange = (color) => {
      document.body.style.backgroundColor = color;
 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-200 p-8 rounded-lg shadow-md">
        <h1 className="text-black text-2xl font-semibold mb-4">Background Color Switcher</h1>
        <div className="flex space-x-4">
          <button
            onClick={() => handleColorChange('#0300c5')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            style={{ backgroundColor: 'blue' }}
          >
            Blue
          </button>
          <button
            onClick={() => handleColorChange('green')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            style={{ backgroundColor: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => handleColorChange('yellow')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            style={{ backgroundColor: 'yellow' }}
          >
            Yellow
          </button>
          <button
            onClick={() => handleColorChange('red')}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            style={{ backgroundColor: 'red' }}
          >
            Red
          </button>
        </div>
      </div>
      <div
        className="w-64 h-64 rounded-lg mt-8"
        style={{ backgroundColor: bgColor }}
      ></div>
    </div>
  );
};

export default BackgroundColorSwitcher;