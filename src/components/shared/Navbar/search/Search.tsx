import { SearchIcon } from '@/store/icons/Icons'
import React from 'react'

function Search() {
  return (
    <div className="relative hidden md:flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon/>
            <span className="sr-only">Search icon</span>
        </div>
        <input type="text" id="search-navbar" className="block w-full px-2 ps-10 input input-bordered w-full max-w-xs rounded" placeholder="Search..." style={{height: "2.5rem"}}/>
    </div>
  )
}

export default Search