import React from "react";
import TutorialCard from "./tutorialCard";
import cPanelTutorials from "../tutorials/cPanelTutorials";
import wordpressTutorials from "../tutorials/wordpressTutorials";

const TutorialContainer = ({ category }) => {
    return (
        <div>
            {category === "cPanel" && cPanelTutorials.map((tutorial, index) => (
                <TutorialCard key={index} label={tutorial.label} color={tutorial.color} />
            ))}
            {category === "WordPress" && wordpressTutorials.map((tutorial, index) => (
                <TutorialCard key={index} label={tutorial.label} color={tutorial.color} />
            ))}
        </div>
    );
}

export default TutorialContainer;