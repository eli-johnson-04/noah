import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const TutorialCard = ({ color, label }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            {/* Define appearance from App.css display behavior of a tutorial card */}
            <button
            className="tutorialCard text-black font-kanit font-medium text-16"
            style={{ backgroundColor: color }}
            onClick={handleClick}
            >
                <span>{label}</span>
            </button>

            {/* Define the modal that will display tutorial information */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                style={{ overlay: {}, content: {} }} // Add custom styles here
            >
                <div>Modal Content Here</div>
                <button onClick={() => setIsModalOpen(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default TutorialCard;