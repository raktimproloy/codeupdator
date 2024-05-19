import { SearchIcon } from '@/store/icons/Icons';
import React, { useEffect, useRef, useState } from 'react';

function Search() {
  const searchRef = useRef<any>(null);
  const [isListVisible, setIsListVisible] = useState(false);

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      setIsListVisible(false);
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

  return (
    <div className="relative hidden md:flex" ref={searchRef}>
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <SearchIcon />
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full px-2 ps-10 input input-bordered w-full max-w-xs rounded"
        placeholder="Search..."
        style={{ height: '2.5rem' }}
        onClick={() => setIsListVisible(!isListVisible)}
      />
      {isListVisible && (
        <div className='absolute top-[120%] bg-white w-[100%]'>
          <ul>
            <li className='border-b-4 border-indigo-500 px-4 py-3'>Vue js</li>
            <li className='border-b-4 border-indigo-500 px-4 py-3'>React js</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Search;
