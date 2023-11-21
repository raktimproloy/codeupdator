import React from 'react'
import SubMenuItems from './SubMenuItems'

function Dropdown() {
  return (
    <div id="mega-menu-icons-dropdown" className="absolute z-10 hidden w-auto  text-mm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700">
        <ul className=' p-8 grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-5'>
            <SubMenuItems/>
            <SubMenuItems/>
            <SubMenuItems/>
            <SubMenuItems/>
            <SubMenuItems/>
        </ul>
    </div>
  )
}

export default Dropdown