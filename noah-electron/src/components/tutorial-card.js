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
            <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="fixed flex items-center justify-center p-4 inset-0" style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }} shouldCloseOnOverlayClick={true}>
                <div className="flex w-4/5 h-4/5 bg-gray-300 overflow-auto rounded-lg shadow-lg p-5" style={{ borderRadius: '13pt', backgroundColor: '#d9d9d9', borderColor: 'black', borderWidth: '5px', borderStyle: 'solid' }}>
                    <div className="flex flex-grow flex-col overflow-auto rounded-lg" style={{ borderRadius: '13pt', borderColor: color, borderWidth: '5px', borderStyle: 'solid', padding: '20px' }}>
                        <div className="flex justify-between items-center">
                            <h1 className='font-kanit text-3xl font-medium my-2'>{label}</h1>
                            <button style={{ position: 'relative', backgroundColor: color }} className="ml-4 p-1 font-kanit text-3xl font-semibold text-black rounded border-solid border-2 border-black shadow-md hover:shadow-lg hover:-translate-y-1 ease-in-out" onClick={() => setIsModalOpen(false)}>X</button>
                        </div>
                        <div className="font-kanit">{sections}</div>
                        <div>
                            <button style={{ backgroundColor: color }} className="mt-4 p-2 font-kanit text-m text-black rounded border-solid border-2 border-black shadow-md hover:shadow-lg hover:-translate-y-1 ease-in-out" onClick={() => setIsModalOpen(false)}>Close Tutorial</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default TutorialCard;