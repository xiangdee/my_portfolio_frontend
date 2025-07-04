"use client"
import React, { useEffect, useState } from 'react';

const Typewriter = ({ texts }: { texts: string[] | string }) => {
  const [displayText, setDisplayText] = useState('');

  const [text,setText] = useState(Array.isArray(texts) ? texts : [texts]);
  const [currentIndex,setCurrentIndex] = useState(-1);
  const [currentSelctedTextIndex,setCurrentSelectedTextIndex] = useState(0);


    useEffect(()=>{
        
        setText(Array.isArray(texts) ? texts : [texts])
    },[texts])
    useEffect(() => {
        const interval = setInterval(() => {
        if (currentIndex < text[currentSelctedTextIndex].length ) {
            setCurrentIndex((prevIndex) =>  prevIndex + 1);
        } else {
           
            clearInterval(interval)
            const timeout = setTimeout(() =>{
                setDisplayText('');
                setCurrentIndex(-1);
                setCurrentSelectedTextIndex((prevIndex) => (prevIndex + 1) % text.length);
                
                
            },1000);
            return()=>clearTimeout(timeout);
             // Reset currentIndex for the next text
        }
        }, 200);

        return () => clearInterval(interval);
    }, [currentIndex, currentSelctedTextIndex, text]);

    useEffect(() => {
        if (currentIndex >= 0) {  // Check to avoid adding the first character on initial mount
            setDisplayText((prevText) => prevText + text[currentSelctedTextIndex].charAt(currentIndex));
          }
          
    }, [currentIndex, currentSelctedTextIndex, text]);

  return (
    <span className='brealk-all'>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default Typewriter;
