'use client'
import React, { useEffect, useRef } from 'react'

export default function Observer() {
    const targetRef = useRef(null);
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log('Item is visible');
            }
          });
        },
        {
          root: null,
          threshold: 0.5,
        }
      );
  
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
  
      // Cleanup function to disconnect the observer when the component unmounts
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, []);
  return (
    <div ref={targetRef}>Observer</div>
  )
}
