import React from "react";
import TutorialCard from "./tutorial-card";
import cPanelTutorials from "../tutorials/cPanelTutorials";
import wordpressTutorials from "../tutorials/wordpressTutorials";

const TutorialContainer = ({ category }) => {
    // Generate tutorial cards based on whether cPanel or WordPress tutorials have been chosen to be displayed. 
    const chosenTutorials = category === "cPanel" ? cPanelTutorials : wordpressTutorials;

    // Set color based on category
    const cardColor = category === "cPanel" ? '#ff7a4161' : '#278ab764';

    return (

        // Place tutorials in a grid of five columns, centered on the screen, with specified spacing, below the navbar.
        // When a card is generated, select the color based on category, then iterate through its list of sections and display them based on their type.
        <div key={category} className="mt-32 flex justify-center bg-transparent">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-40 px-3 py-6">
        
            {chosenTutorials.map((tutorial, index) => (
                <TutorialCard key={index} label={tutorial.label} color={cardColor} 
                sections={tutorial.sections.map((section, sectionIndex) => {
                    switch (section.type) {
                        case 'header':
                            return <h2 className="font-kanit text-2xl my-2 mt-6" key={sectionIndex}>{section.content}</h2>;
                        case 'subheading':
                            return <h3 className="font-kanit text-xl my-1 mt-6" key={sectionIndex}>{section.content}</h3>;
                        case 'text':
                            return <p className="font-kanit text-base font-normal my-1 leading-relaxed" key={sectionIndex}>{section.content}</p>;
                        case 'image':
                            return <img className="mx-auto font-kanit my-2 max-w-full h-auto border-solid border-2 border-black rounded shadow-sm" key={sectionIndex} src={section.src} alt={section.alt} />;
                        default:
                            return null;
                    }})}/>
            ))}
            </div>
        </div>
    );
}

export default TutorialContainer;