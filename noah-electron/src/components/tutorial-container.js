import React from "react";
import TutorialCard from "./tutorialCard";
import cPanelTutorials from "../tutorials/cPanelTutorials";
import wordpressTutorials from "../tutorials/wordpressTutorials";

const TutorialContainer = ({ category }) => {
    return (
        <div className="mt-32 flex justify-center bg-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-40 px-3 py-6">
            {category === "cPanel" && cPanelTutorials.map((tutorial, index) => (
                <TutorialCard key={index} label={tutorial.label} color='#ff7a4161' />
            ))}
            {category === "WordPress" && wordpressTutorials.map((tutorial, index) => (
                <TutorialCard key={index} label={tutorial.label} color='#278ab764' />
            ))}
            </div>
        </div>
    );
}

export default TutorialContainer;