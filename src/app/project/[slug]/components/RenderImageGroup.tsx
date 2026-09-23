'use client'
import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

import { ImageType, ProjectContent } from '@/types/project';
import Modal from './Modal';


export default function RenderImageGroup({ block }:{block:ProjectContent}) {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <div className='my-10'>
            {block?.title && <h5 className='text-xl mb-4'>{block.title}</h5>}
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                {block?.images && block.images.map((image: ImageType) => (
                    <figure key={image._key} className='space-y-2'>
                        <button
                            type='button'
                            className='block w-full overflow-hidden rounded-lg border border-white/10 hover:border-green-500 transition'
                            onClick={() => setSelectedImage(urlFor(image.asset._ref).width(1800).auto('format').url())}
                        >
                            <Image
                                src={urlFor(image.asset._ref).width(600).auto('format').url()}
                                alt={image.altText || image.caption || `${block.title} screenshot`}
                                width={600}
                                height={338}
                                className='w-full h-auto'
                            />
                        </button>
                        {image.caption && <figcaption className='text-xs text-gray-400'>{image.caption}</figcaption>}
                    </figure>
                ))}
            </div>
            {selectedImage && (
                <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
            )}
        </div>
    );
};
