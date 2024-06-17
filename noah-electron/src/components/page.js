import React, { useState } from 'react';
import Navbar from './nav-bar';
import TutorialContainer from './tutorial-container';

const Page = () => {
    // Give Page component access to the selected tab, so that it can display cPanel and WordPress tutorials accordingly
    const [selectedTab, setSelectedTab] = useState(null);

    // Tutorial content for cPanel and WordPress
    const tutorialContent = selectedTab === 'cPanel' ? <TutorialContainer category='cPanel' /> : selectedTab === 'WordPress' ? <TutorialContainer category='WordPress'/> : null;

    // Include a navbar and tutorials for cPanel and WordPress
    return (
        <div>
            <Navbar onTabChange={setSelectedTab} />
            <div>
                {/* Content based on selectedTab */}
                {selectedTab ? tutorialContent : <span className="text-[#434141]">No tutorial category selected! Choose an option above.</span>}
            </div>
        </div>
    );
};

export default Page;