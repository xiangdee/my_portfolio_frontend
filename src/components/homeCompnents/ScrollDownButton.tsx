'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { scrollToElement } from '@/utils';


export const ScrollDownButton = () => {
    const handleClick = () => {
      scrollToElement('about');
    };
  
    return (
      <div className='flex flex-row justify-center mt-4' onClick={handleClick}>
        <div>
          <FontAwesomeIcon icon={faArrowDown} size='sm' />
        </div>
        <div>
          <span className='text-sm'>SCROLL DOWN</span>
        </div>
      </div>
    );
  };