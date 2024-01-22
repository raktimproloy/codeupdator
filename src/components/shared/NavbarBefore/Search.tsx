import React from 'react'

function Search() {
  return (
    <div className="relative block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full px-2 ps-10 input input-bordered w-full max-w-xs" placeholder="Search..."/>
    </div>
  )
}

export default Search