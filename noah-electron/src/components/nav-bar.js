import React, { useState } from 'react';

// Styling for inner tab shadow
const innerShadowStyle = {
    boxShadow: 'inset 0 4px 4px rgba(0, 0, 0, 0.25)'
  };
  
  // Tab component
const Tab = ({ label, isActive, onClick, color }) => (
  
    // Tab button with conditional styling based on whether it is active
    <button
    className={`px-4 py-2 font-semibold ${isActive ? `bg-[#ff6c2c] text-black` : 'bg-gray-200 text-black'} rounded-lg ${!isActive ? 'shadow-md hover:shadow-lg hover:-translate-y-1' : ''} font-kanit transition-all duration-200 ease-in-out`}
    style={isActive ? { ...innerShadowStyle, backgroundColor: color, transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out' } : { transition: 'background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out, color 0.2s ease-in-out, transform 0.2s ease-in-out' }}
    onClick={onClick}
    >
        {label}
    </button>
 );


// Navigation bar component, with tabs placed together to form the selection bar
const NavBar = ({ onTabChange }) => {
    // Allow no tab to be selected initially
    const [activeTab, setActiveTab] = useState(null);

    // Define characteristics for each tab
    const tabs = [
        { label: 'cPanel', activeColor: '#ff6c2c' },
        { label: 'WordPress', activeColor: '#21759b' }
    ];

    const toggleTab = (tabLabel) => {
        // If the clicked tab is already active, set activeTab to null. Otherwise, set it to the clicked tab.
        const newActiveTab = activeTab === tabLabel ? null : tabLabel;
        setActiveTab(newActiveTab);
        onTabChange(newActiveTab); // Inform the parent component (Page) about the change
    };


    return (
        //full width, 12px height, flexbox layout, items centered, background is blue from navbar on https://www.figma.com/design/FmAtjhAgL6TJXNo5EjzTaV/Noah-App-Wireframe?node-id=1-2&t=fjnIGAtCx0siswLp-0
        <div className="fixed top-0 w-full h-16 flex items-center justify-between bg-[#5196DA] shadow-md px-4"> 
            <span className="font-kanit font-semibold text-xl ml-4 truncate">Noah - Website Management for The Ark Foundation, Ghana</span>
            
            {/* Construct the Tabs window on the navbar */}
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
        </div>
    );
};

export default NavBar;