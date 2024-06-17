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
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
            >
                <div
                className="bg-gray-300 overflow-auto rounded-lg shadow-lg"
                style={{ width: '1502px', height: '847px', borderRadius: '13pt', backgroundColor: '#d9d9d9', borderColor: 'black', borderWidth: '5px', borderStyle: 'solid'}}
                >
                    <div>Modal Content Here</div>
                        <button
                        className="p-2 text-white bg-blue-500 hover:bg-blue-700 rounded"
                        onClick={() => setIsModalOpen(false)}
                        >
                            Close
                        </button>
                </div>
            </Modal>
        </div>
    );
};

export default TutorialCard;