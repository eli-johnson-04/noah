import React, { useState } from 'react';
import Navbar from './nav-bar';
import TutorialContainer from './tutorial-container';

const Page = () => {
    // Give Page component access to the selected tab, so that it can display cPanel and WordPress tutorials accordingly
    const [selectedTab, setSelectedTab] = useState(null);

    // Create a TutorialContainer component with the selected tab as a prop
    const tutorialContent = selectedTab ? <TutorialContainer category={selectedTab} /> : null;

    // Include a navbar and tutorials for cPanel and WordPress
    return (
        <div className='bg-transparent'>
            <Navbar onTabChange={setSelectedTab} />
            <div>
                {selectedTab ? tutorialContent : <span className="text-[#434141]">No tutorial category selected! Choose an option above.</span>}
            </div>
        </div>
    );
};

export default Page;