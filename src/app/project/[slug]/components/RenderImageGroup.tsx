'use client'
import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

import { ImageType, ProjectContent } from '@/types/project';
import Modal from './Modal';


export default function RenderImageGroup({ block }:{block:ProjectContent}) {
    const [isModalOpen, setModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    const handleImageClick = (imageSrc:  React.SetStateAction<null | string>) => {
        setSelectedImage(imageSrc);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className='my-10' key={block._key}>
              <h5 className='text-xl'>{block?.title}</h5>
              <div className='flex flex-wrap gap-4'>
            {block?.images && block.images.map((image: ImageType) => (
                <button key={image._key} onClick={() => handleImageClick(urlFor(image.asset._ref).auto('format').url())}>
                    <Image
                        src={urlFor(image.asset._ref).auto('format').url()}
                        alt={image.altText || `today${block.title}${image.asset}`}
                        width={150}
                        height={150}
                    />
                </button>
            ))}
            {isModalOpen && (
                <Modal image={`${selectedImage}`} onClose={handleCloseModal} />
            )}
        </div>
        </div>
    
    );
};