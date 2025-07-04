/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Modal = ({ image, onClose }:{image:string,onClose:any}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center  z-50">
            <div className="relative  gap-1 grid">
                
                 <div className='flex flex-row justify-center'>
                <button className=" p-2 text-white" onClick={onClose}>
                    Close
                </button>
                </div>
                
                <div className='flex flex-row justify-center'>
                <img src={image} alt="Full Size" className=" max-w-[100%] max-h-[500px]" />
                </div>

                
                
            </div>
        </div>
    );
};

export default Modal;