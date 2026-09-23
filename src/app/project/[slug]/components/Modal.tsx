/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Modal = ({ image, onClose }:{image:string,onClose:() => void}) => {
    return (
        <div className="fixed inset-0 bg-black/85 flex flex-col items-center justify-center gap-3 p-4 z-50" onClick={onClose}>
            <button className="p-2 text-white" onClick={onClose}>
                Close
            </button>
            <img src={image} alt="Full size screenshot" className="max-w-full max-h-[85vh] rounded-lg" />
        </div>
    );
};

export default Modal;
