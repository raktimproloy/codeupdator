'use client'
import React, { useEffect, useRef } from 'react'
import { ThreeDotVerticale, ShareBtn } from '@/store/icons/Icons'

function DropDown() {
    const itemRef = useRef<HTMLDetailsElement | null>(null);
    const handleClickOutside = (event: MouseEvent) => {
        if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
          // Clicked outside the details tag, close it
          itemRef.current.removeAttribute('open');
        }
      };
    
      useEffect(() => {
        // Add event listener on mount
        document.addEventListener('click', handleClickOutside);
    
        // Clean up the event listener on unmount
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

      const handleLinkClick = (event: React.MouseEvent) => {
        // Stop propagation to prevent closing details when clicking on links
        itemRef.current?.removeAttribute('open');
      };
  return (
    <>
    <div className="dropdown dropdown-bottom dropdown-end">
        <details ref={itemRef}>
            <summary className='m-1 btn btn-ghost btn-circle avatar hover:bg-transparent'>
            <div className="w-5 cursor-pointer" title="More">
                {/* <ThreeDotVerticale/> */}
                <ShareBtn/>
            </div>
            </summary>
            <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52`}>
                <li><span>Copy Link</span></li>
                {/* <li><span>Add Interest</span></li> */}
                {/* <li><span>Edit</span></li> */}
                {/* <li><span>Delete</span></li> */}
                <li><span>Report</span></li>
            </ul>
        </details>
    </div>
    </>
  )
}

export default DropDown