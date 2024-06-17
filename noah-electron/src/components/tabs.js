import React, { useState } from 'react';

// Styling for inner tab shadow
const innerShadowStyle = {
  boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)'
};

// Tab component
const Tab = ({ label, isActive, onClick, color }) => (

    // Button with conditional styling based on whether it is active
    <button
    className={`px-4 py-2 font-semibold ${isActive ? `bg-[#ff6c2c] text-black` : 'bg-gray-200 text-black'} rounded-lg ${!isActive ? 'shadow-md' : ''} font-kanit transition-colors duration- ease-in-out`}
    style={isActive ? { ...innerShadowStyle, backgroundColor: color, transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out' } : { transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out' }}
    onClick={onClick}
    >
        {label}
    </button>
);

// Tabs container component
const Tabs = () => {

  // Allow no tab to be selected initially
    const [activeTab, setActiveTab] = useState(null);

  // Define characteristics for each tab
  const tabs = [
    { label: 'cPanel', activeColor: '#ff6c2c' },
    { label: 'WordPress', activeColor: '#21759b' }
  ];

  const toggleTab = (tabLabel) => {
    // If the clicked tab is already active, set activeTab to null. Otherwise, set it to the clicked tab.
    setActiveTab(activeTab === tabLabel ? null : tabLabel);
  };

  return (
    <div className="bg-[#E6E6E6] p-1 rounded-lg"> {/* Surrounding box with padding and color */}
      <div className="flex space-x-2"> {/* Adjusted space between tabs */}

        {/* Display each tab based on defined characteristics */}
        {tabs.map(tab => (
          <Tab
            key={tab.label}
            label={tab.label}
            isActive={tab.label === activeTab}
            onClick={() => toggleTab(tab.label)}
            color={tab.activeColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabs;