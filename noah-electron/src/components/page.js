import React, { useState } from 'react';
import Navbar from './nav-bar';

const Page = () => {
    // Give Page component access to the selected tab, so that it can display cPanel and WordPress tutorials accordingly
    const [selectedTab, setSelectedTab] = useState(null);

    return (
        <div>
            <Navbar onTabChange={setSelectedTab} />
            <div>
                {/* Content based on selectedTab */}
                {selectedTab ? `Content for ${selectedTab}` : <span className="text-[#434141] ">No tutorial category selected! Choose an option above.</span>}
            </div>
        </div>
    );
};

export default Page;