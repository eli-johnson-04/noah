import React, { useState } from 'react';
import Modal from 'react-modal';
import '../App.css';

const TutorialCard = ({ color, label, sections }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            {/* Define appearance from App.css display behavior of a tutorial card */}
            <button className="tutorialCard text-black font-kanit font-medium text-16" style={{ backgroundColor: color }} onClick={handleClick}>
                <span>{label}</span>
            </button>

            {/* Define the modal that will display tutorial information */}
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}className="fixed inset-0 flex items-center justify-center p-4" style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}>
                <div className="bg-gray-300 overflow-auto rounded-lg shadow-lg" style={{ width: '85%', height: '80%', borderRadius: '13pt', backgroundColor: '#d9d9d9', borderColor: 'black', borderWidth: '5px', borderStyle: 'solid', padding: '20px'}}>
                    <div style={{borderRadius: '13pt', borderColor: color, borderWidth: '5px', borderStyle: 'solid'}}>
                    <h1 className='font-kanit text-3xl font-medium my-2'>{label}</h1>
                    <div classname="font-kanit">{sections}</div>
                        <button className="p-2 text-white bg-blue-500 hover:bg-blue-700 rounded" onClick={() => setIsModalOpen(false)}>Close Tutorial</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TutorialCard;