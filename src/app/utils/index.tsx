"use client"
export const scrollToElement = (elementId: string) => {
  console.log(66);
  
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };